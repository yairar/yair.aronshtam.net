// The following example creates complex markers retrieved from array

// Globals
let infowindow;
let mymap;
let allMarkers = [];

function initMap() {
	
	mymap = L.map('map').setView([31.67050868087125, 35.1413374805457], 14);
	
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
	
	//setMarkers(mymap);
	setMarkersBySearchWord(mymap, 'שלג');
}

function setMarkers(map) {
    // Adds markers to the map.
    
	let img_url='';
	let label, title_txt, popupHtml, numOfPhotos;
	
    /* Reading all_locations from array */
	all_locations.forEach(function(point) {
	
		label = point[loc_hebtitle_index];
		numOfPhotos = point[loc_numofphotos_index];
		title_txt = point[loc_title_index];
		if (point[loc_markertype_index] != null) {
			img_url = '../'+title_txt+'.jpg';
		}
		popupHtml = '<img src="'+img_url+'" width="100%"><br><div align="center">'+label+'</div>';
		let photos = [];
		for (let i=1; i<=numOfPhotos; i++) {
			photos.push({href: ''+title_txt+i+'.jpg', title: '('+i+' of '+numOfPhotos+') '+label});
		}
		
		let min_width = 300;
		if (window.screen.width < 1000) {
			min_width = 100;
		}
		let popup = L.popup({minWidth: min_width})
		             .setContent(popupHtml);
					 
		L.marker([parseFloat(point[loc_pos1_index]), parseFloat(point[loc_pos2_index])], {title: label})
		 .bindTooltip(label)
		 .addTo(map)
		 .bindPopup(popup)
		 .on('click', function( e ) {
						//e.preventDefault();
						jQuery(function($) {
							$.swipebox(photos);
						});
					  }
         );  
    });

} /* setMarkers */

function setMarkersBySearchWord(map, searchTerm) {
/*
placesArray
{
	key       valueArr
	'place1', ['photo1','photo2',...]
	'place2', ['photo5','photo6',...]
	...
}
*/
let searchResult = performAdvancedSearch(all_images, searchTerm);
console.log('found '+ searchResult.length + ' places');
let placesArray = {};
let key;
let valueArr;
searchResult.forEach(element => {
	key = element[0];
	valueArr = placesArray[key];
	if (valueArr == undefined) {
		valueArr = [];
	}
	valueArr.push(element[1]);
	placesArray[key] = valueArr;
});
console.log(placesArray);

let placeFiles;
all_locations.forEach(point => {
	placeFiles = placesArray[point[0]];
	if (placeFiles != undefined) {
		label = point[loc_hebtitle_index];
		numOfPhotos = placeFiles.length;
		title_txt = point[loc_title_index];
		if (point[loc_markertype_index] != null) {
			img_url = '../../images/map/'+title_txt+'.jpg';
		}
		popupHtml = '<img src="'+img_url+'" width="100%"><br><div align="center">'+label+'</div>';
		let photos = [];
		let i=1;
		placeFiles.forEach(filename => {
			photos.push({href: '../'+filename+'.jpg', title: '('+i+' of '+numOfPhotos+') '+label});
			i++;
		});
		
		let min_width = 300;
		if (window.screen.width < 1000) {
			min_width = 100;
		}
		let popup = L.popup({minWidth: min_width})
		             .setContent(popupHtml);
					 
		let marker = L.marker([parseFloat(point[loc_pos1_index]), parseFloat(point[loc_pos2_index])], {title: label})
		 .bindTooltip(label)
		 .addTo(map)
		 .bindPopup(popup)
		 .on('click', function( e ) {
						//e.preventDefault();
						jQuery(function($) {
							$.swipebox(photos);
						});
					  }
         );
		 allMarkers.push(marker);
	}
});

} /* setMarkersBySearchWord */

function clearMapAndSetNewSearch(searchTerm) {
	allMarkers.forEach(marker => {
		mymap.removeLayer(marker);
	})
	setMarkersBySearchWord(mymap, searchTerm);
}

initMap();
