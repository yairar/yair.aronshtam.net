// The following example creates complex markers retrieved from array

// Globals
var infowindow;

var all_locations = [
// [0] - name, [1,2] - Position

/*0*/
["herodion","31.66572385413287", "35.24166647357947",'הרודיון'],
["maaleamos","31.596297902840682", "35.22976819438939",'מעלה עמוס'],
["mitzpehasela","31.664591530824907", "35.10027114315038",'מצפה הסלע'],
["hanarugot","31.59889317281462", "35.21685067577367",'חאן ערוגות'],
["aliyalesdeboaz","31.687242221358566", "35.15778575105672",'עליה לשדה בועז'],
];

var mymap;
var mymap_markers = [];

function initMap() {

	mymap = L.map('map').setView([31.67007854996975, 35.149426079718296], 15);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
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
		label = point[3];

		var m = L.marker([parseFloat(point[1]), parseFloat(point[2])], {title: label})
		 .bindTooltip(label)
		 .addTo(mymap)
		 
        mymap_markers.push(m);
    });

} /* setMarkers */
