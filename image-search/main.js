const all_images = [
['img/20211201_130157-01','גוש עציון,מעלה עמוס,קשת,חורף,2021','maaleamos','2021','12'],
['img/20211201_132016-01','גוש עציון,מעלה עמוס,קשת,חורף,2021','maaleamos','2021','12'],
['img/20211201_132230-01','גוש עציון,מעלה עמוס,קשת,חורף,2021','maaleamos','2021','12'],
['img/20211201_134319-01','גוש עציון,הרודיון,קשת,חורף,2021','herodion','2021','12'],
['img/20211201_144348-01','גוש עציון,הרודיון,קשת,תקוע,חורף,2021','herodion','2021','12'],
['img/20200914_070959-01','גוש עציון,מצפה הסלע,סתיו,2020','mitzpehasela','2020','9'],
['img/20201220_100203-01','גוש עציון,מצפה הסלע,פריחה,נרקיס,חורף,2020','mitzpehasela','2020','12'],
['img/20211224_133914-01','גוש עציון,חאן ערוגות,חורף,2021','hanarugot','2021','12'],
['img/20211224_134008-01','גוש עציון,חאן ערוגות,חורף,2021','hanarugot','2021','12'],
['img/20211224_135111-01','גוש עציון,חאן ערוגות,חורף,2021','hanarugot','2021','12'],
['img/20211224_135233-01','גוש עציון,חאן ערוגות,חורף,2021','hanarugot','2021','12'],

['../images/map/big/aliyalesdeboaz1','גוש עציון,עליה לשדב בועז,פריחה,חצב','aliyalesdeboaz','2020','9'],
];
	

const form = document.querySelector('form');
const input = document.querySelector('input');
const loadingImage = document.querySelector('#loadingImage');
const imageSection = document.querySelector('#nanogallery2');

///////////////////////////////////////////////////

loadingImage.style.display = 'none';

form.addEventListener('submit', formSubmitted);

initMap();

///////////////////////////////////////////////////

function formSubmitted(event) {

	event.preventDefault();
	const searchTerm = input.value;
	if (searchTerm == '') {
		return;
	}
	console.log('searchFor: '+searchTerm);

	searchFor(searchTerm);
}

function searchFor(searchTerm) {

	searchStart();

	var searchResult = performSearch(all_images, searchTerm);
	console.log(searchResult);

	displayImages(searchResult);
	loadingImage.style.display = 'none';

	var locationsResult = searchForLocations(all_locations, searchResult);
	console.log(locationsResult);

	setMarkers(locationsResult);
	mymap.panTo(L.latLng(locationsResult[0][1], locationsResult[0][2]), {animate: true});
}

function searchByYear(year) {

	searchStart();

	var searchResult = performSearchByYear(all_images, year);
	console.log(searchResult);

	displayImages(searchResult);
	loadingImage.style.display = 'none';

	var locationsResult = searchForLocations(all_locations, searchResult);
	console.log(locationsResult);

	setMarkers(locationsResult);
	mymap.panTo(L.latLng(locationsResult[0][1], locationsResult[0][2]), {animate: true});
}

function searchByMonth(month) {

	searchStart();

	var searchResult = performSearchByMonth(all_images, month);
	console.log(searchResult);

	displayImages(searchResult);
	loadingImage.style.display = 'none';

	var locationsResult = searchForLocations(all_locations, searchResult);
	console.log(locationsResult);

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
		// image[1] is tags - check if any tag matches the search term
		const tags = image[1].split(",");
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
		// image[3] is year 
		if (year === image[3]) {
			searchResult.push(image);
		}
	});
	return searchResult;
}

function performSearchByMonth(images, month) {

	searchResult = [];
	images.forEach(image => {
		// image[4] is month 
		if (month === image[4]) {
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
		item.src = image[0]+'.jpg';
		item.srct = image[0]+'.jpg';
		items.push(item);
	});
	
	console.log('totalImages: '+totalImages);
	
	if (totalImages == 0) {
		const divElement = document.createElement('div');
		divElement.innerHTML = 'לא נמצאו תמונות';
		imageSection.appendChild(divElement);
	}
	else {
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
			locationHash: false
		});
	}
}

function searchForLocations(locations, searchResult) {

	var locationsResult = [];
	
	// find all location names using HashMap
	var locationNames = new Map();
	searchResult.forEach(image => {
		// image[2] is location name
		locationNames.set(image[2], 1);
	});

	// for each location name
	locationNames.forEach((value,key) => {
		console.log(key);
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
