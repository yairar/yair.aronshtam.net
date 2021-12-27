// The following example creates complex markers retrieved from array

// Globals
var infowindow;

var all_locations = [
// [0] - name, [1,2] - Position

/*0*/
["aliyalesdeboaz","31.687242221358566","35.15778575105672","עליה לשדה בועז"],
["alonhaboded","31.65737218581017","35.12124601764684","האלון הבודד"],
["batain","31.655733364181664","35.11108121964128","בת עין"],
["brihatdubek","31.65990588537998","35.113264537779514","בריכת דובק"],
["einelkasis","31.689914834636458","35.14779452247626","עין אל-קסיס"],
["einelmeara","31.67050868087125","35.15433374805457","עין אל מערה"],
["einhubela","31.659049072956652","35.10770700070066","עין חובלה"],
["hanarugot","31.59889317281462","35.21685067577367","חאן ערוגות"],
["herodion","31.66572385413287","35.24166647357947","הרודיון"],
["hirbetjumjum","31.668648","35.101899","חירבת ג'ומג'ום"],
["maaleamos","31.596297902840682","35.22976819438939","מעלה עמוס"],
["matzokavot","31.671102143614863","35.13614837093358","מצוק האבות"],
["minzarrusi","31.645577396082345","35.125462450218265","מנזר הרוסי"],
["mishlathamesh","31.671286","35.108558","משלט הנקודה החמישית"],
["mitzpehasela","31.664591530824907","35.10027114315038","מצפה הסלע"],
["mitzportzvika","31.65560550817159","35.11019531650548","מצפור צביקה"],
["nahalpirim","31.674398300128082","35.161425508689945","נחל הפירים"],
["nahaltkoa","31.63253375216516","35.25983039302831","נחל תקוע"],
["nahaltsofit","31.65564203847803","35.09877447052007","נחל צופית"],
["nebidaniel","31.687536646234864","35.146099366378834","נבי דניאל"],
["rojumasabit","31.653030085369252","35.14042917652135","שלולית חורף רוג'ום א-סבית"],
["sdeboaz","31.69270441115536","35.14691553208036","שדה בועז"],
["shluhathamasuot","31.664438780664813","35.103371776771596","שלוחת המשואות"],
["shviltzvika","31.656441135340835","35.11008802814489","שביל צביקה"],
["singlederehavot","31.667156","35.134505","סינגל דרך האבות"],
["tazpitzofit","31.649349481394115","35.10384384555822","תצפית צופית"],
["tkoa","31.648792354941072","35.22953215999608","תקוע"],
["ukafamuhtar","31.644399158888454","35.11032942695623","אוכף המוכתר"],
["wadiganeden","31.66776930641217","35.105903782081654","ואדי גן עדן (נחל משואות)"],
["waditau","31.690464","35.142448","ואדי טאו"],
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

function getLocationHebrewName(name) {
	var result = '';
	for (var i=0; i<all_locations.length; i++) {
		if (name == all_locations[i][0]) {
			result = all_locations[i][3];
			break;
		}
	}
	return result;
}

function sortArray(arr) {
	arr.sort(function(a, b) {
		// Compare by first string
		if (a[2] < b[2]) return -1;
		if (a[2] > b[2]) return 1;
		return 0;
	  });
	return arr;
}

function printArray(arr) {
	arr.forEach(item => {
		document.write('["'+item[2]+'","'+item[0]+'","'+item[3]+'","'+item[4]+'","'+item[1]+'"],<br>');
	});
}