// The following example creates complex markers retrieved from array

// Globals
var infowindow;
// var all_locations - in all_locations.js

var mymap;
var mymap_markers = [];

function initMap() {

	mymap = L.map('map').setView([31.67007854996975, 35.149426079718296], 15);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

} /* initMap */

function clearMarkers() {
	mymap_markers.forEach(m => {
		m.remove();
	})
}

function setMarkers(locations) {
	var label;
	
    // Reading locations from array
	locations.forEach(point => {
		label = point[loc_hebtitle_index];

		var m = L.marker([parseFloat(point[loc_pos1_index]), parseFloat(point[loc_pos2_index])], {title: label})
		 .bindTooltip(label)
		 .addTo(mymap)
		 
        mymap_markers.push(m);
    });
} /* setMarkers */

function getLocationHebrewName(name) {
	var result = '';
	for (var i=0; i<all_locations.length; i++) {
		if (name == all_locations[i][0]) {
			result = all_locations[i][loc_hebtitle_index];
			break;
		}
	}
	return result;
}


////////////////////////////////////////////
function sortArray(arr) {
	arr.sort(function(a, b) {
		// Compare by first string
		if (a[4] < b[4]) return -1;
		if (a[4] > b[4]) return 1;
		return 0;
	  });
	return arr;
}
function printArray(arr) {
	arr.forEach(item => {
		document.write('["'+item[4]+'","'+item[1]+'","'+item[2]+'","'+item[3]+'","'+item[5]+'","'+item[6]+'","'+item[0]+'"],<br>');
	});
}
////////////////////////////////////////////