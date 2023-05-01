// The following example creates complex markers retrieved from array

// Globals
var infowindow;

var locations = [
// [0] - icon file name, [1] - Title in Hebrew, [2-3] - Position, [4]-Base name for all photos, [5]- Photo numbers, 
["aliyalesdeboaz","עליה לשדה בועז","31.687242221358566","35.15778575105672","hatzav2,hatzav9,hatzav10"],
["nahaltkoa","נחל תקוע",            "31.64042592339606","35.23539010448462","hatzav1,hatzav3,hatzav4,hatzav5,hatzav6,hatzav7,hatzav8,sitvanit13,sitvanit22,sitvanit23"],
['vadihelmoniyot', 'ואדי חלמויות', "31.64339855604563", "35.25780264301305","helmoniyot1,helmoniyot2,helmoniyot3,helmoniyot4,helmoniyot5,helmoniyot6,helmoniyot7,helmoniyot8,helmoniyot9,helmoniyot10,helmoniyot11,helmoniyot12,helmoniyot13,helmoniyot14,helmoniyot15" ],
["givatoz","גבעת עוז",              "31.63684529907876","35.13628248138433","sitvanit1,sitvanit7,sitvanit8,kurkum11"],
["nebidaniel","נבי דניאל",          "31.687536646234864","35.146099366378834","sitvanit2,sitvanit3,sitvanit4"],
["sdeboaz","שדה בועז",              "31.693816346658057","35.147842802238515","sitvanit5,sitvanit6,kurkum10"],
["matzokavot","מצוק האבות",         "31.671102143614863","35.13614837093358","sitvanit10,sitvanit11,sitvanit12"],
["yaartkoa","יער תקוע",             "31.658915549405734","35.2285987512589","sitvanit14,sitvanit15,sitvanit16"],
["sovevdagan","מורדות הדגן",        "31.682072554314008","35.176170385805676","sitvanit20,sitvanit21"],
["hurvatbrachot","חורבת ברכות במגדל עוז","31.643440117590835","35.14324013156896","kurkum1,kalanit9"],
["yaareretzayalim","יער ארץ האיילים","31.66090315318798", "35.11733842782205","kurkum2,kurkum3,kurkum4,kurkum5,kurkum6,kurkum12"],
["nahalozrarim","נחל עוזררים",      "31.58311939529301","35.217011608314564","kurkum15"],
["parkamothamaim","פארק אמות המים", "31.678128282525968","35.17247620983129","kurkum16"],
["tzukeibatain","צוקי בת עין (מצלעת בת עין)","31.660116892403202","35.09559337062841","narkis1,narkis2,narkis3,narkis4,narkis10,narkis11,narkis13,narkis14,narkis15"],

["mitzpehasela","מצפה הסלע",        "31.664591530824907","35.10027114315038","narkis12,kalanit2,kalanit3,kalanit4,kalanit5,kalanit6,kalanit7,kalanit8,rakafot2,rakafot3,rakafot4,irit2,irit4"],

["givathahish","גבעת החיש",         "31.65734981428064","35.134184993934696","shkediya1,shkediya2"],
["nahalpirim","נחל הפירים",         "31.674398300128082","35.161425508689945","shkediya3"],
["shluhathamasuot","שלוחת המשואות", "31.664438780664813","35.103371776771596","shkediya4,shkediya5,shkediya6,shkediya7,shkediya8"],
["nahalrevadim","נחל רבדים",        "31.675522168083937","35.11805955333715","kalanit1,kalanit10"],
["einhubela","עין חובלה",           "31.659049072956652","35.10770700070066","irus1"],
["hirbetjumjum","חירבת ג'ומג'ום",   "31.668648","35.101899","irus2,irus3,irus4"],
["mitzperevadim","מצפה רבדים",      "31.674161954829643", "35.114798375884945","rakafot1,irit1,irit3,irit5"],
["nahalhaetz","נחל העץ",            "31.6726270750532","35.11404696865087","narkis20,narkis21,narkis22,narkis23"],

];


function initMap() {
	
	mymap = L.map('map').setView([31.67007854996975, 35.159426079718296], 13);
	
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
	
    /* Reading locations from array */
	locations.forEach(function(point) {
		/*
			label: point[0], // title in Hebrew
			Latitude: point[1],
			Longtitude: point[2],
			Number of photos: point[3],
			title: point[4], // Base name of file for all photos
		*/
		var label = point[1];
		var photoNamesAll = point[4];
		var popupHtml = '<img src="images/map/'+point[0]+'.jpg" width="100%"><br><div align="center">'+label+'</div>';
		var photos = [];
		var photoNames = photoNamesAll.split(',');
		var photoIndex = 1;
		var numOfPhotos = photoNames.length;
		//console.log(photoNamesAll + ', total=' + numOfPhotos);
		photoNames.forEach(photoName => {
			photos.push({href: 'images/map/big/'+photoName+'.jpg', title: '('+photoIndex+' of '+numOfPhotos+') '+label});
			photoIndex++;
		});
				
		var min_width = 300;
		if (window.screen.width < 1000) {
			min_width = 100;
		}
		var popup = L.popup({minWidth: min_width})
		             .setContent(popupHtml);
					 
		L.marker([parseFloat(point[2]), parseFloat(point[3])], {title: label})
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
