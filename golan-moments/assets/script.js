const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const filterButtons = document.querySelectorAll("[data-filter]");
const albumCards = document.querySelectorAll("[data-category]");
const galleryTriggers = document.querySelectorAll("[data-lightbox-group]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxTitle = document.querySelector("[data-lightbox-title]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxCount = document.querySelector("[data-lightbox-count]");
const closeButtons = document.querySelectorAll("[data-lightbox-close]");
const prevButton = document.querySelector("[data-lightbox-prev]");
const nextButton = document.querySelector("[data-lightbox-next]");

const imagePath = (file) => `../chrome_extension/golanphotos/${file}`;

const makeImages = (title, files) =>
  files.map((file, index) => ({
    src: imagePath(file),
    title,
    caption: files.length > 1 ? `${title} ${index + 1}` : title,
  }));

const galleryGroups = {
  einkef: {
    title: "עין כיף",
    images: makeImages("עין כיף", ["einkef1.jpg"]),
  },
  ahunov: {
    title: "אחו נוב",
    images: makeImages("אחו נוב", [
      "ahunov1.jpg",
      "ahunov2.jpg",
      "ahunov3.jpg",
      "ahunov8.jpg",
      "ahunov14.jpg",
      "ahunov20.jpg",
      "ahunov23.jpg",
      "ahunov28.jpg",
    ]),
  },
  waterfall_lavan: {
    title: "המפל הלבן",
    images: makeImages("המפל הלבן", ["elal9.jpg"]),
  },
  elal: {
    title: "נחל אל על",
    images: makeImages("נחל אל על", ["elal1.jpg", "elal3.jpg","elal6.jpg","elal10.jpg", "elal12.jpg", "elal31.jpg", "elal45.jpg", "elal62.jpg"]),
  },
  wadinov: {
    title: "ואדי נוב",
    images: makeImages("ואדי נוב", ["wadinov4.jpg", "wadinov5.jpg", "wadinov15.jpg", "wadinov30.jpg"]),
  },
  einnov: {
    title: "עין נוב",
    images: makeImages("עין נוב", ["einnov1.jpg"]),
  },
  tayeletdromhagolan: {
    title: "טיילת דרום הגולן",
    images: makeImages("טיילת דרום הגולן", [
      "tayeletdrom2.jpg",
      "tayeletdrom3.jpg",
      "tayeletdrom10.jpg",
      "tayeletdrom12.jpg",
      "tayeletdrom13.jpg",
    ]),
  },
  nov: {
    title: "מושב נוב",
    images: makeImages("מושב נוב", [
      "nov1.jpg",
      "nov2.jpg",
      "nov4.jpg",
      "nov5.jpg",
      "nov7.jpg",
      "nov12.jpg",
      "nov13.jpg",
      "nov15.jpg",
      "nov20.jpg",
      "nov25.jpg",
      "nov26.jpg",
      "nov28.jpg",
      "nov35.jpg",
    ]),
  },
  katzr: {
    title: "קצר ברדוויל",
    images: makeImages("קצר ברדוויל", ["katzr4.jpg", "katzr5.jpg"]),
  },
  einkshatot: {
    title: "עין הקשתות",
    images: makeImages("עין הקשתות", [
      "einhakshatot1.jpg",
      "einhakshatot3.jpg",
      "einhakshatot4.jpg",
      "einhakshatot6.jpg",
      "einhakshatot7.jpg",
      "einhakshatot9.jpg",
      "einhakshatot10.jpg",
      "einhakshatot13.jpg",
    ]),
  },
  samach: {
    title: "נחל סמך",
    images: makeImages("נחל סמך", [
      "sameh8.jpg",
      "sameh10.jpg",
      "sameh16.jpg",
      "sameh17.jpg",
      "sameh24.jpg",
      "sameh26.jpg",
      "sameh36.jpg",
      "sameh40.jpg",
    ]),
  },
  mitzpedima: {
    title: "מצפה דימה בגשור",
    images: makeImages("מצפה דימה בגשור", [
		"tatzpitdima1.jpg",
		"tatzpitdima3.jpg",
		"tatzpitdima4.jpg",
	]),
  },
  mitzpefishgop: {
    title: "מצפה פישגופ באפיק",
    images: makeImages("מצפה פישגופ באפיק", [
      "fishgop2.jpg",
      "fishgop3.jpg",
      "fishgop6.jpg",
      "fishgop8.jpg",
      "fishgop9.jpg",
      "fishgop11.jpg",
    ]),
  },
  meitzar: {
    title: "נחל מיצר",
    images: makeImages("נחל מיצר", ["meitzar1.jpg", "meitzar7.jpg", "meitzar15.jpg"]),
  },
  einpik: {
    title: "עין פיק",
    images: makeImages("עין פיק", ["einpik1.jpg", "einpik2.jpg"]),
  },
  tayeletmavohama: {
    title: "טיילת מבוא חמה",
    images: makeImages("טיילת מבוא חמה", [
      "tayeletmavohama3.jpg",
      "tayeletmavohama4.jpg",
      "tayeletmavohama5.jpg",
      "tayeletmavohama10.jpg",
      "tayeletmavohama17.jpg",
      "tayeletmavohama19.jpg",
      "tayeletmavohama25.jpg",
      "tayeletmavohama28.jpg",
      "tayeletmavohama30.jpg",
      "tayeletmavohama36.jpg",
      "tayeletmavohama39.jpg",
      "tayeletmavohama42.jpg",
      "tayeletmavohama43.jpg",
    ]),
  },
  eintaufik: {
    title: "עין תאופיק (עין עקוב)",
    images: makeImages("עין תאופיק (עין עקוב)", ["eintaufik1.jpg", "eintaufik2.jpg", "eintaufik3.jpg"]),
  },
  yaarmavohama: {
    title: "יער מבוא חמה",
    images: makeImages("יער מבוא חמה", ["yaarmavohama1.jpg", "mitzpemandel1.jpg", "mitzpemandel2.jpg"]),
  },
  bajoriya: {
    title: "בג'וריה",
    images: makeImages("בג'וריה", ["bajoriya4.jpg", "bajoriya1.jpg", "bajoriya3.jpg"]),
  },
  gamla: {
    title: "גמלא",
    images: makeImages("גמלא", [
		"gamla3.jpg",
		"gamla7.jpg",
		"gamla8.jpg",
		"gamla2.jpg",
		"gamla12.jpg",
		"gamla13.jpg",
		"gamla15.jpg",
		"gamla17.jpg",
		"gamla18.jpg",
	]),
  },
  maayankanaf: {
    title: "מעיין כנף",
    images: makeImages("מעיין כנף", ["maayankanaf1.jpg", "maayankanaf2.jpg", "maayankanaf4.jpg"]),
  },
  einoteden: {
    title: "עיינות עדן",
    images: makeImages("עיינות עדן", ["einoteden1.jpg", "einoteden5.jpg", "einoteden6.jpg"]),
  },
  mapalirusim: {
    title: "מפל האירוסים",
    images: makeImages("מפל האירוסים", [
      "irusim1.jpg",
      "irusim2.jpg",
      "irusim5.jpg",
      "irusim8.jpg",
    ]),
  },
  eintut: {
    title: "עין תות",
    images: makeImages("עין תות", [
		"eintut7.jpg",
		"eintut2.jpg",
		"eintut12.jpg",
		"eintut15.jpg",
	]),
  },
  juhader: {
    title: "ג'וחדר",
    images: makeImages("ג'וחדר", ["juhader1.jpg", "juhader2.jpg", "juhader3.jpg", "juhader5.jpg"]),
  },
  einotfahem: {
    title: "עיינות פאחם",
    images: makeImages("עיינות פאחם", [
		"einotfahem4.jpg",
		"einotfahem15.jpg",
		"einotfahem16.jpg",
		"einotfahem17.jpg",
		"einotfahem21.jpg",
		"einotfahem23.jpg",
		"einotfahem26.jpg",
	]),
  },
};

function mergeGroups(title, groupIds) {
  return {
    title,
    images: groupIds.flatMap((groupId) => galleryGroups[groupId].images),
  };
}

galleryGroups.walking = mergeGroups("במרחק הליכה", [
  "einkef",
  "ahunov",
  "waterfall_lavan",
  "elal",
  "wadinov",
  "einnov",
  "tayeletdromhagolan",
  "nov",
]);

galleryGroups.south = mergeGroups("במרחק נסיעה קצרה דרומה", [
  "katzr",
  "einkshatot",
  "samach",
  "mitzpedima",
  "mitzpefishgop",
  "meitzar",
  "einpik",
  "tayeletmavohama",
  "eintaufik",
  "yaarmavohama",
]);

galleryGroups.north = mergeGroups("במרחק נסיעה קצרה צפונה", [
  "bajoriya",
  "gamla",
  "maayankanaf",
  "einoteden",
  "mapalirusim",
  "eintut",
  "juhader",
  "einotfahem",
]);

let activeGroup = null;
let activeIndex = 0;
let lastFocusedElement = null;

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeNav() {
  if (!header || !navToggle) return;
  header.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function renderLightbox() {
  if (!activeGroup || !lightboxImage) return;

  const item = activeGroup.images[activeIndex];
  lightboxTitle.textContent = activeGroup.title;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.caption;
  lightboxCaption.textContent = item.caption;
  lightboxCount.textContent = `${activeIndex + 1} / ${activeGroup.images.length}`;

  const nextItem = activeGroup.images[(activeIndex + 1) % activeGroup.images.length];
  const preload = new Image();
  preload.src = nextItem.src;
}

function openLightbox(groupId) {
  const group = galleryGroups[groupId];
  if (!group || !group.images.length || !lightbox) return;

  activeGroup = group;
  activeIndex = 0;
  lastFocusedElement = document.activeElement;
  renderLightbox();
  document.body.classList.add("lightbox-open");
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  closeButtons[0]?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  document.body.classList.remove("lightbox-open");
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
  activeGroup = null;

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function showLightboxImage(direction) {
  if (!activeGroup) return;
  activeIndex = (activeIndex + direction + activeGroup.images.length) % activeGroup.images.length;
  renderLightbox();
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (nav) {
  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNav();
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    albumCards.forEach((item) => {
      const categories = item.dataset.category || "";
      const shouldShow = filter === "all" || categories.split(" ").includes(filter);
      item.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

galleryTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openLightbox(trigger.dataset.lightboxGroup);
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(trigger.dataset.lightboxGroup);
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeLightbox);
});

prevButton?.addEventListener("click", () => showLightboxImage(-1));
nextButton?.addEventListener("click", () => showLightboxImage(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (activeGroup) {
      closeLightbox();
    } else {
      closeNav();
    }
  }

  if (!activeGroup) return;

  if (event.key === "ArrowRight") {
    showLightboxImage(-1);
  }

  if (event.key === "ArrowLeft") {
    showLightboxImage(1);
  }
});
