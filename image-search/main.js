
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

	//var searchResult = performSearch(all_images, searchTerm);
	var searchResult = performAdvancedSearch(all_images, searchTerm);
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

// simple search
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

function performAdvancedSearch(images, searchTerm) {

	let searchTerms = searchTerm.split("+");
	// remove spaces for each search word
	for (i=0; i < searchTerms.length; i++) {
		searchTerms[i] = searchTerms[i].trim();
	}
	console.log("searchTerm="+searchTerm + ", performAdvancedSearch: "+searchTerms);

	let searchResult = [];
	images.forEach(image => {
		const tags = image[TAGS_INDEX].split(",");
		matchedWords = 0;
		searchTerms.forEach(word => {
			// search word in all tags
			for(i=0; i < tags.length; i++) {
				if (tags[i].includes(word)) {
					//console.log("found:" + word + " in tag:" + tags[i]);
					matchedWords++;
					break;
				}
			}
		});
		// if there is a match, add it to the result
		//console.log("found " + matchedWords + " matched words of " + searchTerms.length);
		if (matchedWords == searchTerms.length) {
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

			viewerTools: {
				topRight: 'downloadButton, zoomButton, fullscreenButton, closeButton',
				bottom:'label'
			}

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
