/* Calendar Builder
 * Photos come from ../../catalog/js/script.js (single source of truth),
 * so every image keeps its real relative path (catalog/image, images/map/big,
 * chrome_extension/golanphotos, ...).
 * Default photo per month comes from ../../catalog/image/calendar_builder.json.
 */
(function () {
  'use strict';

  var CATALOG_BASE = '../../catalog/';
  var SCRIPT_URL = CATALOG_BASE + 'js/script.js';
  var CONFIG_URL = CATALOG_BASE + 'image/calendar_builder.json';
  var STORAGE_KEY = 'calendarBuilder.state.v1';
  var MONTHS_SHOWN = 13;

  var I18N = {
    en: {
      dir: 'ltr', locale: 'en-US', toggle: 'עב',
      appTitle: 'Calendar Builder',
      appSubtitle: 'Create your personalized calendar',
      startMonth: 'Start Month:',
      export: 'Export', import: 'Import',
      yourCalendar: 'Your Calendar',
      clickMonth: 'Click on any month to select a photo',
      selectPhoto: 'Select Photo',
      searchPhotos: 'Search photos...',
      noResults: 'No photos found',
      preview: 'Preview', select: 'Select',
      loading: 'Loading photos…',
      loadError: 'Could not load the photo list from catalog/js/script.js. Open this page over http(s) rather than as a local file.'
    },
    he: {
      dir: 'rtl', locale: 'he-IL', toggle: 'EN',
      appTitle: 'בונה לוחות שנה',
      appSubtitle: 'צור לוח שנה מותאם אישית עם התמונות שלך',
      startMonth: 'חודש התחלה:',
      export: 'ייצוא', import: 'ייבוא',
      yourCalendar: 'הלוח שלך',
      clickMonth: 'לחץ על כל חודש כדי לבחור תמונה',
      selectPhoto: 'בחר תמונה',
      searchPhotos: 'חפש תמונות...',
      noResults: 'לא נמצאו תמונות',
      preview: 'תצוגה', select: 'בחר',
      loading: 'טוען תמונות…',
      loadError: 'לא ניתן לטעון את רשימת התמונות מ-catalog/js/script.js.'
    }
  };

  var MONTH_SEASON = ['winter','winter','spring','spring','spring','summer','summer','summer','autumn','autumn','autumn','winter'];

  var el = {
    startMonth: document.getElementById('startMonth'),
    monthGrid: document.getElementById('monthGrid'),
    status: document.getElementById('status'),
    langBtn: document.getElementById('langBtn'),
    langLabel: document.getElementById('langLabel'),
    exportBtn: document.getElementById('exportBtn'),
    importBtn: document.getElementById('importBtn'),
    importFile: document.getElementById('importFile'),
    pickerOverlay: document.getElementById('pickerOverlay'),
    pickerClose: document.getElementById('pickerClose'),
    pickerSearch: document.getElementById('pickerSearch'),
    photoGrid: document.getElementById('photoGrid'),
    noResults: document.getElementById('noResults'),
    lightbox: document.getElementById('lightbox'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    lightboxClose: document.getElementById('lightboxClose')
  };

  var photos = [];          // {file, src, title, tags, haystack}
  var byFile = {};          // basename -> photo
  var defaults = {};        // month name (English) -> photo src
  var state = { lang: 'en', startMonth: currentMonthKey(), photos: {} };
  var pickerMonth = null;

  /* ---------- helpers ---------- */

  function t(key) { return I18N[state.lang][key] || key; }

  function currentMonthKey() {
    var d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1);
  }

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function normalize(path) {
    var parts = path.split('/');
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === '.' || parts[i] === '') { if (i === 0) out.push(parts[i]); continue; }
      if (parts[i] === '..' && out.length && out[out.length - 1] !== '..') { out.pop(); continue; }
      out.push(parts[i]);
    }
    return out.join('/');
  }

  function basename(p) { return p.split('/').pop(); }

  function monthKeyToDate(key) {
    var bits = key.split('-');
    return new Date(Number(bits[0]), Number(bits[1]) - 1, 1);
  }

  function addMonths(key, n) {
    var d = monthKeyToDate(key);
    d.setMonth(d.getMonth() + n);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1);
  }

  function monthLabel(key) {
    var d = monthKeyToDate(key);
    try {
      return new Intl.DateTimeFormat(I18N[state.lang].locale, { month: 'long', year: 'numeric' }).format(d);
    } catch (e) {
      return key;
    }
  }

  function englishMonthName(key) {
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(monthKeyToDate(key));
  }

  function svg(paths, size) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 16) + '" height="' + (size || 16) +
      '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
  }

  var ICON_CAL = '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>';
  var ICON_EYE = '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>';
  var ICON_CHECK = '<path d="M20 6 9 17l-5-5"/>';

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------- data loading ---------- */

  function toPhoto(raw, title, tags) {
    var item = {
      file: basename(raw),
      catalogPath: raw,
      src: normalize(CATALOG_BASE + raw),
      title: title || '',
      tags: tags || ''
    };
    item.haystack = (item.file + ' ' + item.title + ' ' + item.tags + ' ' + item.catalogPath).toLowerCase();
    return item;
  }

  // Load catalog/js/script.js as a plain script so `window.items` becomes
  // available. Works over http(s) and from the local filesystem alike.
  function loadCatalogScript() {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = SCRIPT_URL;
      s.onload = function () {
        if (window.items && window.items.length) {
          resolve(window.items.map(function (it) { return toPhoto(it.src, it.title, it.tags); }));
        } else {
          reject(new Error('items array not found'));
        }
      };
      s.onerror = function () { reject(new Error('failed to load ' + SCRIPT_URL)); };
      document.head.appendChild(s);
    }).catch(function () {
      return fetch(SCRIPT_URL).then(function (r) { return r.text(); }).then(parseCatalogScript);
    });
  }

  function parseCatalogScript(text) {
    var start = text.indexOf('var items');
    var open = text.indexOf('[', start);
    var end = text.indexOf('\n];', open);
    if (start < 0 || end < 0) return [];
    var body = text.slice(open, end);
    var objects = body.match(/\{[^{}]*\}/g) || [];
    var list = [];
    for (var i = 0; i < objects.length; i++) {
      var o = objects[i];
      var s = /src\s*:\s*'([^']*)'/.exec(o);
      if (!s) continue;
      var title = /title\s*:\s*'([^']*)'/.exec(o);
      var tags = /tags\s*:\s*'([^']*)'/.exec(o);
      list.push(toPhoto(s[1], title ? title[1] : '', tags ? tags[1] : ''));
    }
    return list;
  }

  function pickFallback(monthKey) {
    var season = MONTH_SEASON[monthKeyToDate(monthKey).getMonth()];
    for (var i = 0; i < photos.length; i++) {
      if (photos[i].tags.indexOf(season) >= 0 && photos[i].tags.indexOf('best') >= 0) return photos[i].src;
    }
    for (var j = 0; j < photos.length; j++) {
      if (photos[j].tags.indexOf(season) >= 0) return photos[j].src;
    }
    return photos.length ? photos[0].src : '';
  }

  function defaultPhotoFor(monthKey) {
    var name = englishMonthName(monthKey);
    if (defaults[name]) return defaults[name];
    return pickFallback(monthKey);
  }

  function load() {
    showStatus(t('loading'));
    return Promise.all([
      loadCatalogScript(),
      fetch(CONFIG_URL).then(function (r) { return r.json(); }).catch(function () { return {}; })
    ]).then(function (res) {
      photos = res[0] || [];
      byFile = {};
      photos.forEach(function (p) { if (!byFile[p.file]) byFile[p.file] = p; });

      var cfg = res[1] || {};
      defaults = {};
      Object.keys(cfg.defaultPhotos || {}).forEach(function (month) {
        var hit = byFile[basename(cfg.defaultPhotos[month])];
        if (hit) defaults[month] = hit.src;
      });
      hideStatus();
    }).catch(function (err) {
      showStatus(t('loadError'));
      throw err;
    });
  }

  function showStatus(msg) { el.status.textContent = msg; el.status.hidden = false; }
  function hideStatus() { el.status.hidden = true; }

  /* ---------- persistence ---------- */

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  function restore() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var saved = JSON.parse(raw);
      if (saved && typeof saved === 'object') {
        if (saved.lang === 'he' || saved.lang === 'en') state.lang = saved.lang;
        if (/^\d{4}-\d{2}$/.test(saved.startMonth || '')) state.startMonth = saved.startMonth;
        if (saved.photos && typeof saved.photos === 'object') state.photos = saved.photos;
      }
    } catch (e) { /* ignore */ }
  }

  /* ---------- rendering ---------- */

  function applyLanguage() {
    var conf = I18N[state.lang];
    document.documentElement.lang = state.lang;
    document.documentElement.dir = conf.dir;
    el.langLabel.textContent = conf.toggle;
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = t(nodes[i].getAttribute('data-i18n'));
    var phs = document.querySelectorAll('[data-i18n-ph]');
    for (var j = 0; j < phs.length; j++) phs[j].placeholder = t(phs[j].getAttribute('data-i18n-ph'));
  }

  function buildStartMonthOptions() {
    var firstYear = new Date().getFullYear() - 1;
    var html = '';
    for (var y = firstYear; y < firstYear + 3; y++) {
      for (var m = 1; m <= 12; m++) {
        var key = y + '-' + pad(m);
        html += '<option value="' + key + '">' + escapeHtml(monthLabel(key)) + '</option>';
      }
    }
    el.startMonth.innerHTML = html;
    if (!el.startMonth.querySelector('option[value="' + state.startMonth + '"]')) {
      el.startMonth.insertAdjacentHTML('afterbegin',
        '<option value="' + state.startMonth + '">' + escapeHtml(monthLabel(state.startMonth)) + '</option>');
    }
    el.startMonth.value = state.startMonth;
  }

  function photoForMonth(key) {
    return state.photos[key] || defaultPhotoFor(key);
  }

  function renderMonths() {
    var html = '';
    for (var i = 0; i < MONTHS_SHOWN; i++) {
      var key = addMonths(state.startMonth, i);
      var src = photoForMonth(key);
      var label = monthLabel(key);
      html += '<div class="month-card" data-month="' + key + '" role="button" tabindex="0">' +
        '<div class="thumb">' +
        '<img src="' + escapeHtml(src) + '" alt="' + escapeHtml(label) + '" loading="lazy">' +
        '<div class="scrim"></div>' +
        '<div class="label">' + svg(ICON_CAL, 18) + '<h3>' + escapeHtml(label) + '</h3></div>' +
        '</div></div>';
    }
    el.monthGrid.innerHTML = html;
  }

  function renderPhotoGrid(query) {
    var q = (query || '').trim().toLowerCase();
    var terms = q ? q.split(/\s+/) : [];
    var html = '';
    var shown = 0;
    for (var i = 0; i < photos.length; i++) {
      var p = photos[i];
      var match = true;
      for (var k = 0; k < terms.length; k++) {
        if (p.haystack.indexOf(terms[k]) < 0) { match = false; break; }
      }
      if (!match) continue;
      shown++;
      html += '<div class="photo-item" data-src="' + escapeHtml(p.src) + '" data-title="' + escapeHtml(p.title) + '">' +
        '<div class="photo-thumb">' +
        '<img src="' + escapeHtml(p.src) + '" alt="' + escapeHtml(p.file) + '" loading="lazy">' +
        '<div class="photo-actions">' +
        '<button class="btn btn-secondary js-preview">' + svg(ICON_EYE, 14) + '<span>' + escapeHtml(t('preview')) + '</span></button>' +
        '<button class="btn btn-primary js-select">' + svg(ICON_CHECK, 14) + '<span>' + escapeHtml(t('select')) + '</span></button>' +
        '</div></div>' +
        '<p class="photo-caption">' + escapeHtml(p.title) + '<span class="file">' + escapeHtml(p.file) + '</span></p>' +
        '</div>';
    }
    el.photoGrid.innerHTML = html;
    el.noResults.hidden = shown > 0;
  }

  /* ---------- picker ---------- */

  function openPicker(monthKey) {
    pickerMonth = monthKey;
    el.pickerSearch.value = '';
    renderPhotoGrid('');
    el.pickerOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    el.pickerSearch.focus();
  }

  function closePicker() {
    el.pickerOverlay.hidden = true;
    pickerMonth = null;
    document.body.style.overflow = '';
  }

  function openLightbox(src, caption) {
    el.lightboxImg.src = src;
    el.lightboxCaption.textContent = caption || '';
    el.lightbox.hidden = false;
  }

  function closeLightbox() {
    el.lightbox.hidden = true;
    el.lightboxImg.removeAttribute('src');
  }

  /* ---------- import / export ---------- */

  function doExport() {
    var months = [];
    for (var i = 0; i < MONTHS_SHOWN; i++) {
      var key = addMonths(state.startMonth, i);
      months.push({ month: key, label: monthLabel(key), photo: photoForMonth(key) });
    }
    var data = { version: 1, startMonth: state.startMonth, months: months };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'calendar-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function doImport(file) {
    var reader = new FileReader();
    reader.onload = function () {
      var data;
      try { data = JSON.parse(String(reader.result)); } catch (e) { return; }
      if (!data) return;
      if (/^\d{4}-\d{2}$/.test(data.startMonth || '')) state.startMonth = data.startMonth;
      var months = data.months || [];
      for (var i = 0; i < months.length; i++) {
        var m = months[i];
        if (!m || !m.month) continue;
        var src = m.photo || m.src || '';
        if (!src) continue;
        var hit = byFile[basename(src)];
        state.photos[m.month] = hit ? hit.src : src;
      }
      buildStartMonthOptions();
      renderMonths();
      save();
    };
    reader.readAsText(file);
  }

  /* ---------- events ---------- */

  el.startMonth.addEventListener('change', function () {
    state.startMonth = el.startMonth.value;
    renderMonths();
    save();
  });

  el.langBtn.addEventListener('click', function () {
    state.lang = state.lang === 'en' ? 'he' : 'en';
    applyLanguage();
    buildStartMonthOptions();
    renderMonths();
    if (!el.pickerOverlay.hidden) renderPhotoGrid(el.pickerSearch.value);
    save();
  });

  el.monthGrid.addEventListener('click', function (e) {
    var card = e.target.closest('.month-card');
    if (card) openPicker(card.getAttribute('data-month'));
  });

  el.monthGrid.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var card = e.target.closest('.month-card');
    if (card) { e.preventDefault(); openPicker(card.getAttribute('data-month')); }
  });

  el.pickerSearch.addEventListener('input', function () { renderPhotoGrid(el.pickerSearch.value); });
  el.pickerClose.addEventListener('click', closePicker);
  el.pickerOverlay.addEventListener('click', function (e) { if (e.target === el.pickerOverlay) closePicker(); });

  el.photoGrid.addEventListener('click', function (e) {
    var item = e.target.closest('.photo-item');
    if (!item) return;
    var src = item.getAttribute('data-src');
    if (e.target.closest('.js-preview')) {
      openLightbox(src, item.getAttribute('data-title'));
      return;
    }
    if (pickerMonth) {
      state.photos[pickerMonth] = src;
      renderMonths();
      save();
      closePicker();
    }
  });

  el.lightboxClose.addEventListener('click', closeLightbox);
  el.lightbox.addEventListener('click', function (e) { if (e.target === el.lightbox) closeLightbox(); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!el.lightbox.hidden) closeLightbox();
    else if (!el.pickerOverlay.hidden) closePicker();
  });

  el.exportBtn.addEventListener('click', doExport);
  el.importBtn.addEventListener('click', function () { el.importFile.click(); });
  el.importFile.addEventListener('change', function () {
    if (el.importFile.files && el.importFile.files[0]) doImport(el.importFile.files[0]);
    el.importFile.value = '';
  });

  /* ---------- boot ---------- */

  restore();
  applyLanguage();
  buildStartMonthOptions();
  load().then(function () {
    renderMonths();
  }).catch(function () { /* status already shown */ });
})();
