// The following example creates complex markers retrieved from array

// Globals
var infowindow;

function initMap() {
	
	var mymap = L.map('map').setView([31.67007854996975, 35.149426079718296], 15);
	
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
	
	setMarkers(mymap);
}

function setMarkers(map) {
    // Adds markers to the map.
    
	var img_url='';
	var label, title_txt, popupHtml, numOfPhotos;
	
    /* Reading all_locations from array */
	all_locations.forEach(function(point) {

		label = point[loc_hebtitle_index];
		numOfPhotos = point[loc_numofphotos_index];
		title_txt = point[loc_title_index];
		if (point[loc_markertype_index] != null) {
			img_url = 'images/map/'+title_txt+'.jpg';
		}
		popupHtml = '<img src="'+img_url+'" width="100%"><br><div align="center">'+label+'</div>';
		var photos = [];
		for (var i=1; i<=numOfPhotos; i++) {
			photos.push({href: 'images/map/big/'+title_txt+i+'.jpg', title: '('+i+' of '+numOfPhotos+') '+label});
		}
		
		var min_width = 300;
		if (window.screen.width < 1000) {
			min_width = 100;
		}
		var popup = L.popup({minWidth: min_width})
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

initMap();
