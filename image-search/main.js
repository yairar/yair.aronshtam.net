const all_images = [
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz1","2020","9","גוש עציון,עליה לשדב בועז,פריחה,חצב"],
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz2","2020","9","גוש עציון,עליה לשדב בועז"],
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz3","2020","9","גוש עציון,עליה לשדב בועז,פריחה,חצב"],
["batain","img/20210831_071858-01","2021","8","גוש עציון,בת עין,שביל הנוף המערבי,נוף,קיץ"],
["brihatdubek","../images/map/big/eindubek1","2021","6","גוש עציון,בריכת דובק,מעיין,קיץ"],
["einelkasis","../images/map/big/einelkasis10","2021","8","גוש עציון,עין אל קסיס,מעיין,קיץ,זריחה"],
["einelmeara","../images/map/big/einelmeara3","2021","3","עין אל מערה,מערה,אביב,גוש עציון,"],
["einelmeara","../images/map/big/einelmeara1","2021","3","עין אל מערה,מערה,אביב,גוש עציון,מעיין,"],
["einhubela","../images/map/big/einhubela1","2021","3","עין חובלה,מעיין,אביב,גוש עציון,"],
["einhubela","../images/map/big/einhubela2","2021","3","עין חובלה,לילה,אביב,גוש עציון,"],
["hanarugot","img/20211224_133914-01","2021","12","גוש עציון,חאן ערוגות,חורף"],
["hanarugot","img/20211224_134008-01","2021","12","גוש עציון,חאן ערוגות,חורף"],
["hanarugot","img/20211224_135111-01","2021","12","גוש עציון,חאן ערוגות,חורף"],
["hanarugot","img/20211224_135233-01","2021","12","גוש עציון,חאן ערוגות,חורף"],
["herodion","img/20211201_134319-01","2021","12","גוש עציון,הרודיון,קשת,חורף"],
["herodion","img/20211201_144348-01","2021","12","גוש עציון,הרודיון,קשת,תקוע,חורף"],
["hirbetjumjum","img/20210825_073658-01","2021","8","גוש עציון,חירבת ג'ומג'ום,שריפה,קיץ"],
["maaleamos","img/20211201_130157-01","2021","12","גוש עציון,מעלה עמוס,קשת,חורף"],
["maaleamos","img/20211201_132016-01","2021","12","גוש עציון,מעלה עמוס,קשת,חורף"],
["maaleamos","img/20211201_132230-01","2021","12","גוש עציון,מעלה עמוס,קשת,חורף"],
["matzokavot","img/20211129_164247-01","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","img/20211129_162850-01","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","img/20211129_162436-01","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","img/20211129_162237-01","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","img/20211129_161705-01","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot6","2021","8","גוש עציון,מצוק אבות,זריחה,קיץ"],
["matzokavot","../images/map/big/matzokavot2","2021","4","גוש עציון,מצוק אבות,אביב"],
["matzokavot","../images/map/big/matzokavot1","2021","4","גוש עציון,מצוק אבות,נוף,תצפית,אביב,שקיעה"],
["matzokavot","../images/map/big/matzokavot4","2021","4","גוש עציון,מצוק אבות,פריחה,אביב"],
["matzokavot","../images/map/big/matzokavot3","2021","4","גוש עציון,מצוק אבות,נוף,אביב"],
["minzarrusi","img/20210910_100142-01","2021","9","גוש עציון,מנזר הרוסי,תצפית,סתיו"],
["minzarrusi","img/20210910_094819","2021","9","גוש עציון,מנזר הרוסי,תצפית,סתיו"],
["minzarrusi","img/20210910_094113","2021","9","גוש עציון,מנזר הרוסי,תצפית,סתיו"],
["mishlathamesh","img/20211004_094023-01","2021","10","גוש עציון,משלט הנקודה החמישית,אופניים,תצפית,נוף,סתיו"],
["mishlathamesh","img/20210831_093748-01","2021","8","גוש עציון,שרידי מבנה אבן,נוף,אופניים,קיץ"],
["mishlathamesh","../images/map/big/mishlathamesh5","2021","8","גוש עציון,משלט הנקודה החמישית,נוף,תצפית,קיץ,מצוק"],
["mishlathamesh","../images/map/big/mishlathamesh1","2021","7","גוש עציון,משלט הנקודה החמישית,נוף,תצפית,קיץ,זריחה,מצוק"],
["mitzpehasela","img/20200914_070959-01","2020","9","גוש עציון,מצפה הסלע,סתיו"],
["mitzpehasela","img/20201220_100203-01","2020","12","גוש עציון,מצפה הסלע,פריחה,נרקיס,חורף"],
["mitzportzvika","img/20210819_194912-01","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","img/20210819_194714-01","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","img/20210819_191635-01","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","img/20210819_191417","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["nahalpirim","img/20210920_160444","2021","9","גוש עציון,נחל הפירים,פריחה,חצב,סתיו"],
["nahalpirim","img/20210920_160047-01","2021","9","גוש עציון,נחל הפירים,פריחה,חצב,סתיו"],
["nahaltkoa","img/20211126_080539-01","2021","11","גוש עציון,נחל תקוע,אוכף,אופניים,סתיו"],
["nahaltkoa","img/20211126_075529-01","2021","11","גוש עציון,נחל תקוע,אוכף,פנורמה,סתיו"],
["nahaltkoa","img/IMG_2023","2021","11","גוש עציון,נחל תקוע,אוכף,לילה,סתיו"],
["nahaltkoa","img/20211120_212503-01","2021","11","גוש עציון,נחל תקוע,לילה,ג'יפ,ירח,סתיו"],
["nahaltkoa","img/20211120_205946-01","2021","11","גוש עציון,נחל תקוע,לילה,ג'יפ,ירח,סתיו"],
["nahaltkoa","img/20210924_111420-01","2021","9","גוש עציון,נחל תקוע,ארכאולוגיה,סתיו,נוף"],
["nahaltkoa","img/20210924_105001-01","2021","9","גוש עציון,נחל תקוע,פריחה,חצב,סתיו"],
["nahaltkoa","img/20210924_101125-01","2021","9","גוש עציון,נחל תקוע,ארכאולוגיה,סתיו"],
["nahaltsofit","../images/map/big/nahaltsofit1","2018","12","נחל צופית,נוף,חורף,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit2","2021","3","נחל צופית,נוף,אביב,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit3","2021","3","נחל צופית,נוף,אביב,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit4","2021","3","נחל צופית,נוף,אביב,גוש עציון,"],
["nebidaniel","../images/map/big/nebidaniel1","2021","3","פריחה,גוש עציון,אביב,"],
["nebidaniel","../images/map/big/nebidaniel2","2021","3","פריחה,גוש עציון,אביב,"],
["rojumasabit","../images/map/big/rojumasabit1","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit2","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit3","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit4","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit5","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit6","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
["sdeboaz","img/20210822_190240-01","2021","8","גוש עציון,שדה בועז,שקיעה,נוף,תצפית,קיץ"],
["shluhathamasuot","img/20210815_190243-01","2021","8","גוש עציון,שלוחת המשואות,כרמים,שקיעה,קיץ"],
["shviltzvika","img/20210819_191122-01","2021","8","גוש עציון,שביל צביקה,נוף,שקיעה,קיץ"],
["shviltzvika","img/20210819_190933-01","2021","8","גוש עציון,שביל צביקה,נוף,שקיעה,קיץ"],
["shviltzvika","img/20210819_185904-01","2021","8","גוש עציון,שביל צביקה,נוף,שקיעה,קיץ"],
["tazpitzofit","img/20210906_081700-01","2021","9","גוש עציון,תצפית צופית,תצפית,נוף,סתיו,אופניים"],
["tazpitzofit","img/20210906_080914","2021","9","גוש עציון,תצפית צופית,תצפית,נוף,סתיו"],
["tazpitzofit","../images/map/big/tazpitzofit1","2021","3","תצפית צופית,תצפית,נוף,אביב,גוש עציון,"],
["tazpitzofit","../images/map/big/tazpitzofit2","2021","3","תצפית צופית,פריחה,תצפית,נוף,אביב,גוש עציון,"],
["tkoa","img/20211224_144146","2021","12","גוש עציון,תקוע,נוף למדבר,חורף,תצפית,חורף"],
["tkoa","img/20211205_134055-01","2021","11","גוש עציון,נחל תקוע,חורף"],
["tkoa","img/20211119_140506-01","2021","11","גוש עציון,תקוע ה,חוות ספר המדבר,סתיו"],
["tkoa","img/20211119_135928-01","2021","11","גוש עציון,תקוע ה,חוות ספר המדבר,סתיו"],
["wadiganeden","../images/map/big/wadiganeden1","2021","8","גוש עציון,ואדי גן עדן,נחל משואות,קיץ"],
["wadiganeden","../images/map/big/wadiganeden2","2021","8","גוש עציון,ואדי גן עדן,נחל משואות,קיץ"],
["waditau","img/20211215_090640","2021","11","גוש עציון,צניר,רכס טאו,חורף"],
["waditau","img/20211213_091213","2021","11","גוש עציון,צניר,רכס טאו,חורף"],
["waditau","img/20211213_095009-01","2021","11","גוש עציון,צניר,רכס טאו,חורף"],
["waditau","img/20210914_091143","2021","9","גוש עציון,רכס טאו,נוף,סתיו"],
["waditau","../images/map/big/waditau1","2021","8","גוש עציון,ואדי טאו,נוף,תצפית,שקיעה,קיץ"],
["waditau","../images/map/big/waditau2","2021","8","גוש עציון,ואדי טאו,נוף,תצפית,שקיעה,קיץ"],
];
	

const location_index = 0;
const imagename_index = 1;
const year_index = 2;
const month_index = 3;
const tags_index = 4;

const form = document.querySelector('form');
const input = document.querySelector('input');
const loadingImage = document.querySelector('#loadingImage');
const imageSection = document.querySelector('#nanogallery2');

///////////////////////////////////////////////////

loadingImage.style.display = 'none';

form.addEventListener('submit', formSubmitted);

//var all_images_sorted = sortArray(all_images);
//printArray(all_images_sorted);

initMap();

///////////////////////////////////////////////////

function formSubmitted(event) {

	event.preventDefault();
	const searchTerm = input.value;
	if (searchTerm == '') {
		return;
	}
	//console.log('searchFor: '+searchTerm);

	searchFor(searchTerm);
}

function searchFor(searchTerm) {

	searchStart();

	var searchResult = performSearch(all_images, searchTerm);
	//console.log(searchResult);

	displayImages(searchResult);
	loadingImage.style.display = 'none';

	var locationsResult = searchForLocations(all_locations, searchResult);
	//console.log(locationsResult);

	if (locationsResult[0]) {
		setMarkers(locationsResult);
		mymap.panTo(L.latLng(locationsResult[0][1], locationsResult[0][2]), {animate: true});
	}
}

function searchByYear(year) {

	searchStart();

	var searchResult = performSearchByYear(all_images, year);
	//console.log(searchResult);

	displayImages(searchResult);
	loadingImage.style.display = 'none';

	var locationsResult = searchForLocations(all_locations, searchResult);
	//console.log(locationsResult);

	if (locationsResult[0]) {
		setMarkers(locationsResult);
		mymap.panTo(L.latLng(locationsResult[0][1], locationsResult[0][2]), {animate: true});
	}
}

function searchByMonth(month) {

	searchStart();

	var searchResult = performSearchByMonth(all_images, month);
	//console.log(searchResult);

	displayImages(searchResult);
	loadingImage.style.display = 'none';

	var locationsResult = searchForLocations(all_locations, searchResult);
	//console.log(locationsResult);

	if (locationsResult[0]) {
		setMarkers(locationsResult);
		mymap.panTo(L.latLng(locationsResult[0][1], locationsResult[0][2]), {animate: true});
	}
}

function searchStart() {
	jQuery("#nanogallery2").nanogallery2('destroy');
	loadingImage.style.display = '';
	imageSection.innerHTML = '';

	clearMarkers();
}

function performSearch(images, searchTerm) {

	searchResult = [];
	images.forEach(image => {
		const tags = image[tags_index].split(",");
		isMatch = false;
		tags.forEach(tag => {
			if (tag.includes(searchTerm.toLowerCase())) {
				isMatch = true;
			}
		});
		// if there is a match, add it to the result
		if (isMatch) {
			searchResult.push(image);
		}
	});
	return searchResult;
}

function performSearchByYear(images, year) {

	searchResult = [];
	images.forEach(image => {
		if (year === image[year_index]) {
			searchResult.push(image);
		}
	});
	return searchResult;
}

function performSearchByMonth(images, month) {

	searchResult = [];
	images.forEach(image => {
		if (month === image[month_index]) {
			searchResult.push(image);
		}
	});
	return searchResult;
}

function displayImages(images, searchTerm) {
	
	items = [];
	totalImages = 0;
	images.forEach(image => {
		totalImages++;
		const item = Object.create( {} );
		item.src = image[imagename_index]+'.jpg';
		item.srct = image[imagename_index]+'.jpg';
		item.title = getLocationHebrewName(image[location_index]);
		item.description = image[tags_index];
		items.push(item);
	});
	
	//console.log('totalImages: '+totalImages);
	if (totalImages == 0) {
		jQuery("#total-img").text('לא נמצאו תמונות');
	}
	else {
		jQuery("#total-img").text('נצמאו ' + totalImages + ' תמונות');
		
		jQuery("#nanogallery2").nanogallery2( {

			itemsBaseURL:'',
			items,
			
			// GALLERY AND THUMBNAIL LAYOUT
			galleryDisplayMode: 'fullContent',
			gallerySorting: 'random',
			thumbnailHeight: 'auto', thumbnailWidth: '300',
			thumbnailBaseGridHeight: 50,
			thumbnailAlignment: 'fillWidth',
			thumbnailL1GutterWidth: 4,
			thumbnailL1GutterHeight: 4,
			thumbnailBorderHorizontal: 5,
			thumbnailBorderVertical: 5,

			// THUMBNAIL TOOLS & LABEL
			thumbnailLabel: { display: true, position:'onBottom', hideIcons: true, titleFontSize: '1em', align: 'right', titleMultiLine:true, displayDescription: false},
			thumbnailToolbarAlbum: null,
			thumbnailToolbarImage :  { bottomRight : 'display' },
			// replace the default DISPLAY tool icon
			icons: {thumbnailDisplay: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'},

			// DISPLAY ANIMATION
			thumbnailDisplayTransition: 'slideDown',
			thumbnailDisplayTransitionDuration: 500,
			thumbnailDisplayInterval: 30,

			// THUMBNAIL'S HOVER ANIMATION
			thumbnailHoverEffect2: 'image_scale_1.00_1.10',
			touchAnimation: true,
			touchAutoOpenDelay: 800,

			// GALLERY THEME
			galleryTheme : { 
				thumbnail: { background: '#444', backgroundImage: 'linear-gradient(315deg, #111 0%, #557 90%)', borderColor: '#000', labelOpacity : 1, labelBackground: '#444', titleColor: '#eee', titleBgColor: '#444', titleShadow: '' },
			},

			// DEEP LINKING
			locationHash: false,

			viewerToolbar: { display:true },
			viewerTools: { bottom:'label'}
		});
	}
}

function searchForLocations(locations, searchResult) {

	var locationsResult = [];

	// find all location names using HashMap
	var locationNames = new Map();
	searchResult.forEach(image => {
		locationNames.set(image[location_index], 1);
	});

	// for each location name
	locationNames.forEach((value,key) => {
		//console.log(key);
		// find location by name
		for (var i = 0; i < all_locations.length; i++) {
			if (key === all_locations[i][0]) {
				locationsResult.push(all_locations[i]);
				break;
			}
		}
	});
	return locationsResult;
}
