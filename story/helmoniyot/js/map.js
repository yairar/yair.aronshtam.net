// The following example creates complex markers retrieved from array

// Globals
var infowindow;

var locations = [
// [0] - Title in Hebrew, [1,2] - Position, [3]-Number of photos, [4]-Base name for all photos, [5]-Type of marker(point/...)
['ואדי חלמויות',       "31.64339855604563", "35.25780264301305",  "7", "vadihelmoniyot",  "point", "jpg"],
['צומת נחל החלמוניות', "31.639178654927477", "35.25851074619298", "3", "tzometnahalhelmoniyot","point", "jpg"],
['האוכף',              "31.627285176025502", "35.26408974094396", "2", "haukaf",          "point", "jpg"],

];


function initMap() {
	
	var mymap = L.map('map').setView([31.638178654927477, 35.25851074619298], 14);
	
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
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
	
    /* Reading locations from array */
	locations.forEach(function(point) {
		/*
			label: point[0], // title in Hebrew
			Latitude: point[1],
			Longtitude: point[2],
			Number of photos: point[3],
			title: point[4], // Base name of file for all photos
		*/
		label = point[0];
		numOfPhotos = point[3];
		title_txt = point[4];		
		if (point[5] != null) {
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
					 
		L.marker([parseFloat(point[1]), parseFloat(point[2])], {title: label})
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
