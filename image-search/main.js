const all_images = [
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz1","2020","9","גוש עציון,עליה לשדב בועז,פריחה,חצב"],
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz2","2020","9","גוש עציון,עליה לשדב בועז"],
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz3","2020","9","גוש עציון,עליה לשדב בועז,פריחה,חצב"],
["batain","../images/map/big/batain4","2021","8","גוש עציון,בת עין,שביל הנוף המערבי,נוף,קיץ"],
["eindubek","../images/map/big/eindubek1","2021","6","גוש עציון,בריכת דובק,מעיין,קיץ"],
["einelkasis","../images/map/big/einelkasis10","2021","8","גוש עציון,עין אל קסיס,מעיין,קיץ,זריחה"],
["einelmeara","../images/map/big/einelmeara3","2021","3","עין אל מערה,מערה,אביב,גוש עציון,"],
["einelmeara","../images/map/big/einelmeara1","2021","3","עין אל מערה,מערה,אביב,גוש עציון,מעיין,"],
["einhubela","../images/map/big/einhubela1","2021","3","עין חובלה,מעיין,אביב,גוש עציון,"],
["einhubela","../images/map/big/einhubela2","2021","3","עין חובלה,לילה,אביב,גוש עציון,"],
["hanarugot","../images/map/big/hanarugot4","2021","12","גוש עציון,חאן ערוגות,חורף"],
["hanarugot","../images/map/big/hanarugot3","2021","12","גוש עציון,חאן ערוגות,חורף"],
["hanarugot","../images/map/big/hanarugot2","2021","12","גוש עציון,חאן ערוגות,חורף"],
["hanarugot","../images/map/big/hanarugot1","2021","12","גוש עציון,חאן ערוגות,חורף"],
["haukaf","../images/map/big/haukaf3","2021","11","גוש עציון,נחל תקוע,אוכף,אופניים,סתיו"],
["haukaf","../images/map/big/haukaf4","2021","11","גוש עציון,נחל תקוע,אוכף,פנורמה,סתיו"],
["haukaf","../images/map/big/haukaf5","2021","11","גוש עציון,נחל תקוע,אוכף,לילה,סתיו"],
["havatsfarhamidbar","../images/map/big/havatsfarhamidbar5","2021","11","גוש עציון,תקוע ה,חוות ספר המדבר,סתיו"],
["havatsfarhamidbar","../images/map/big/havatsfarhamidbar6","2021","11","גוש עציון,תקוע ה,חוות ספר המדבר,סתיו"],
["herodion","../images/map/big/herodion6","2021","12","גוש עציון,הרודיון,קשת,חורף"],
["herodion","../images/map/big/herodion7","2021","12","גוש עציון,הרודיון,קשת,תקוע,חורף"],
["hirbetjumjum","../images/map/big/hirbetjumjum7","2021","8","גוש עציון,חירבת ג'ומג'ום,שריפה,קיץ"],
["maaleamos","../images/map/big/maaleamos2","2021","12","גוש עציון,מעלה עמוס,קשת,חורף"],
["maaleamos","../images/map/big/maaleamos1","2021","12","גוש עציון,מעלה עמוס,קשת,חורף"],
["maaleamos","../images/map/big/maaleamos3","2021","12","גוש עציון,מעלה עמוס,קשת,חורף"],
["matzokavot","../images/map/big/matzokavot7","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot8","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot9","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot10","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot11","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot6","2021","8","גוש עציון,מצוק אבות,זריחה,קיץ"],
["matzokavot","../images/map/big/matzokavot2","2021","4","גוש עציון,מצוק אבות,אביב"],
["matzokavot","../images/map/big/matzokavot1","2021","4","גוש עציון,מצוק אבות,נוף,תצפית,אביב,שקיעה"],
["matzokavot","../images/map/big/matzokavot4","2021","4","גוש עציון,מצוק אבות,פריחה,אביב"],
["matzokavot","../images/map/big/matzokavot3","2021","4","גוש עציון,מצוק אבות,נוף,אביב"],
["minzarrusi","../images/map/big/minzarrusi8","2021","9","גוש עציון,מנזר הרוסי,תצפית,סתיו"],
["minzarrusi","../images/map/big/minzarrusi9","2021","9","גוש עציון,מנזר הרוסי,תצפית,סתיו"],
["minzarrusi","../images/map/big/minzarrusi10","2021","9","גוש עציון,מנזר הרוסי,תצפית,סתיו"],
["mishlathamesh","../images/map/big/mishlathamesh6","2021","10","גוש עציון,משלט הנקודה החמישית,אופניים,תצפית,נוף,סתיו"],
["mishlathamesh","../images/map/big/mishlathamesh7","2021","8","גוש עציון,שרידי מבנה אבן,נוף,אופניים,קיץ"],
["mishlathamesh","../images/map/big/mishlathamesh5","2021","8","גוש עציון,משלט הנקודה החמישית,נוף,תצפית,קיץ,מצוק"],
["mishlathamesh","../images/map/big/mishlathamesh1","2021","7","גוש עציון,משלט הנקודה החמישית,נוף,תצפית,קיץ,זריחה,מצוק"],
["mitzpehasela","../images/map/big/mitzpehasela1","2020","9","גוש עציון,מצפה הסלע,סתיו"],
["mitzpehasela","../images/map/big/mitzpehasela4","2020","12","גוש עציון,מצפה הסלע,פריחה,נרקיס,חורף"],
["mitzportzvika","../images/map/big/mitzportzvika1","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","../images/map/big/mitzportzvika2","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","../images/map/big/mitzportzvika3","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","../images/map/big/mitzportzvika4","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["nahalpirim","../images/map/big/nahalpirim10","2021","9","גוש עציון,נחל הפירים,פריחה,חצב,סתיו"],
["nahalpirim","../images/map/big/nahalpirim11","2021","9","גוש עציון,נחל הפירים,פריחה,חצב,סתיו"],
["maalerehavam","../images/map/big/maalerehavam2","2021","11","גוש עציון,נחל תקוע,לילה,ג'יפ,ירח,סתיו"],
["maalerehavam","../images/map/big/maalerehavam3","2021","11","גוש עציון,נחל תקוע,לילה,ג'יפ,ירח,סתיו"],
["nahaltkoa","../images/map/big/nahaltkoa15","2021","9","גוש עציון,נחל תקוע,ארכאולוגיה,סתיו,נוף"],
["nahaltkoa","../images/map/big/nahaltkoa16","2021","9","גוש עציון,נחל תקוע,פריחה,חצב,סתיו"],
["nahaltkoa","../images/map/big/nahaltkoa17","2021","9","גוש עציון,נחל תקוע,ארכאולוגיה,סתיו"],
["nahaltkoa","../images/map/big/nahaltkoa14","2021","11","גוש עציון,נחל תקוע,חורף"],
["nahaltsofit","../images/map/big/nahaltsofit1","2018","12","נחל צופית,נוף,חורף,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit2","2021","3","נחל צופית,נוף,אביב,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit3","2021","3","נחל צופית,נוף,אביב,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit4","2021","3","נחל צופית,נוף,אביב,גוש עציון,"],
["nebidaniel","../images/map/big/nebidaniel1","2021","3","פריחה,גוש עציון,אביב,"],
["nebidaniel","../images/map/big/nebidaniel2","2021","3","פריחה,גוש עציון,אביב,"],
["nevedaniel","../images/map/big/nevedaniel1","2018","12","נווה דניאל,חורף,גוש עציון,"],
["nevedaniel","../images/map/big/nevedaniel2","2018","12","נווה דניאל,קשת,חורף,גוש עציון,נוף,"],
["nevedaniel","../images/map/big/nevedaniel9","2021","8","נווה דניאל,ירח,קיץ,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit1","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit2","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit3","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit4","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit5","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit6","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
["sdeboaz","../images/map/big/sdeboaz5","2021","8","גוש עציון,שדה בועז,שקיעה,נוף,תצפית,קיץ"],
["shluhathamasuot","../images/map/big/shluhathamasuot1","2021","8","גוש עציון,שלוחת המשואות,כרמים,שקיעה,קיץ"],
["shviltzvika","../images/map/big/shviltzvika1","2021","8","גוש עציון,שביל צביקה,נוף,שקיעה,קיץ"],
["shviltzvika","../images/map/big/shviltzvika2","2021","8","גוש עציון,שביל צביקה,נוף,שקיעה,קיץ"],
["shviltzvika","../images/map/big/shviltzvika3","2021","8","גוש עציון,שביל צביקה,נוף,שקיעה,קיץ"],
["tazpitzofit","../images/map/big/tazpitzofit3","2021","9","גוש עציון,תצפית צופית,תצפית,נוף,סתיו,אופניים"],
["tazpitzofit","../images/map/big/tazpitzofit4","2021","9","גוש עציון,תצפית צופית,תצפית,נוף,סתיו"],
["tazpitzofit","../images/map/big/tazpitzofit1","2021","3","תצפית צופית,תצפית,נוף,אביב,גוש עציון,"],
["tazpitzofit","../images/map/big/tazpitzofit2","2021","3","תצפית צופית,פריחה,תצפית,נוף,אביב,גוש עציון,"],
["tkoa","../images/map/big/tkoa1","2021","12","גוש עציון,תקוע,נוף למדבר,חורף,תצפית,חורף"],
["wadiganeden","../images/map/big/wadiganeden1","2021","8","גוש עציון,ואדי גן עדן,נחל משואות,קיץ"],
["wadiganeden","../images/map/big/wadiganeden2","2021","8","גוש עציון,ואדי גן עדן,נחל משואות,קיץ"],
["waditau","../images/map/big/waditau4","2021","11","גוש עציון,צניר,רכס טאו,חורף"],
["waditau","../images/map/big/waditau5","2021","11","גוש עציון,צניר,רכס טאו,חורף"],
["waditau","../images/map/big/waditau6","2021","11","גוש עציון,צניר,רכס טאו,חורף"],
["waditau","../images/map/big/waditau7","2021","9","גוש עציון,רכס טאו,נוף,סתיו"],
["waditau","../images/map/big/waditau1","2021","8","גוש עציון,ואדי טאו,נוף,תצפית,שקיעה,קיץ"],
["waditau","../images/map/big/waditau2","2021","8","גוש עציון,ואדי טאו,נוף,תצפית,שקיעה,קיץ"],
];
	

const LOCATION_INDEX = 0;
const IMAGENAME_INDEX = 1;
const YEAR_INDEX = 2;
const MONTH_INDEX = 3;
const TAGS_INDEX = 4;

const form = document.querySelector('form');
const input = document.querySelector('input');
const loadingImage = document.querySelector('#loadingImage');
const imageSection = document.querySelector('#nanogallery2');

///////////////////////////////////////////////////

loadingImage.style.display = 'none';

form.addEventListener('submit', formSubmitted);

//var all_sorted = sortArray(all_locations__);
//printArray(all_sorted);

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
		const tags = image[TAGS_INDEX].split(",");
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
		if (year === image[YEAR_INDEX]) {
			searchResult.push(image);
		}
	});
	return searchResult;
}

function performSearchByMonth(images, month) {

	searchResult = [];
	images.forEach(image => {
		if (month === image[MONTH_INDEX]) {
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
		item.src = image[IMAGENAME_INDEX]+'.jpg';
		item.srct = image[IMAGENAME_INDEX]+'.jpg';
		item.title = getLocationHebrewName(image[LOCATION_INDEX]);
		item.description = image[TAGS_INDEX];
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
		locationNames.set(image[LOCATION_INDEX], 1);
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
