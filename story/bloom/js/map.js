// The following example creates complex markers retrieved from array

// Globals
let infowindow;
let mymap;
let allMarkers = [];

let locations = [
// [0] - icon file name, [1] - Title in Hebrew, [2-3] - Position, [4]-Base name for all photos, [5]- Photo numbers, 
["aliyalesdeboaz","עליה לשדה בועז","31.687242221358566","35.15778575105672","hatzav2,hatzav9,hatzav10,kalanit58,kalanit59,shkediya40"],

["nahaltkoa","נחל תקוע",            "31.64042592339606","35.23539010448462","hatzav1,hatzav3,hatzav4,hatzav5,hatzav6,hatzav7,hatzav8,sitvanit13,sitvanit22,sitvanit23,shkediya35,shkediya36,shkediya37,irit10,irit16,irit17,irusshahum1,irusshahum2,irusshahum3,irusshahum4,irusshahum5,irusshahum6,irusshahum7,irusshahum8,irusshahum9,irusshahum10,priha30,priha41,priha42,priha44"],

['vadihelmoniyot', 'ואדי חלמויות', "31.64339855604563", "35.25780264301305","helmoniyot1,helmoniyot2,helmoniyot3,helmoniyot4,helmoniyot5,helmoniyot6,helmoniyot7,helmoniyot8,helmoniyot9,helmoniyot10,helmoniyot11,helmoniyot12,helmoniyot13,helmoniyot14,helmoniyot15" ],
["givatoz","גבעת עוז",              "31.63684529907876","35.13628248138433","sitvanit1,sitvanit7,sitvanit8,kurkum11"],
["nebidaniel","נבי דניאל",          "31.687536646234864","35.146099366378834","sitvanit2,sitvanit3,sitvanit4,kalanit51,kalanit52,kalanit53,sahlav5"],
["sdeboaz","שדה בועז",              "31.693816346658057","35.147842802238515","sitvanit5,sitvanit6,kurkum10"],
["matzokavot","מצוק האבות",         "31.671102143614863","35.13614837093358","sitvanit10,sitvanit11,sitvanit12,marva1,marva2"],
["yaartkoa","יער תקוע",             "31.658915549405734","35.2285987512589","sitvanit14,sitvanit15,sitvanit16,kalanit54,kalanit55,kalanit56,kalanit57"],
["sovevdagan","מורדות הדגן",        "31.682072554314008","35.176170385805676","sitvanit20,sitvanit21"],
["hurvatbrachot","חורבת ברכות במגדל עוז","31.643440117590835","35.14324013156896","kurkum1,kalanit9תshkediya24,shkediya25,shkediya26,shkediya27,shkediya28,kalanit32"],
["yaareretzayalim","יער ארץ האיילים","31.66090315318798", "35.11733842782205","kurkum2,kurkum3,kurkum4,kurkum5,kurkum6,kurkum12,sahlav1,sahlav2"],
["nahalozrarim","שמורת הר כנוב (נחל עוזררים)","31.58311939529301","35.217011608314564","kurkum15,tzivoni14,priha40"],
["parkamothamaim","פארק אמות המים", "31.678128282525968","35.17247620983129","kurkum16"],
["tzukeibatain","צוקי בת עין (מצלעת בת עין)","31.660116892403202","35.09559337062841","narkis1,narkis2,narkis3,narkis4,narkis10,narkis11,narkis13,narkis14,narkis15"],

["mitzpehasela","מצפה הסלע",        "31.664591530824907","35.10027114315038","narkis5,narkis12,kalanit2,kalanit3,kalanit4,kalanit5,kalanit6,kalanit7,kalanit8,rakafot2,rakafot3,rakafot4,irit2,irit4,irit11,irit12,kalanit40,kalanit41,kalanit44,kalanit45,kalanit46,kalanit50,kalanit63,sahlav11,sahlav12,sahlav13,sahlav14,sahlav15,tzivoni10,tzivoni11,tzivoni12,tzivoni13,priha38,priha39,priha43"],

["givathahish","גבעת החיש",         "31.65734981428064","35.134184993934696","shkediya1,shkediya2,tzipornit3,tzipornit12"],
["nahalpirim","נחל הפירים",         "31.674398300128082","35.161425508689945","shkediya3,shkediya29,shkediya30,shkediya31,sahlav7,shkediya41,shkediya45,shkediya47,marva3,marva4"],
["shluhathamasuot","שלוחת המשואות", "31.664438780664813","35.103371776771596","shkediya4,shkediya5,shkediya6,shkediya7,shkediya8,shkediya38,kalanit33"],
["nahalrevadim","נחל רבדים",        "31.675522168083937","35.11805955333715","kalanit1,kalanit10,kalanit64,kalanit65,kalanit66"],
["einhubela","עין חובלה",           "31.659049072956652","35.10770700070066","irus1"],
["hirbetjumjum","חירבת ג'ומג'ום",   "31.668648","35.101899","irus2,irus3,irus4,kalanit35,kalanit43"],
["mitzperevadim","מצפה רבדים",      "31.674161954829643", "35.114798375884945","rakafot1,irit1,irit3,irit5"],
["nahalhaetz","נחל העץ",            "31.6726270750532","35.11404696865087","narkis20,narkis21,narkis22,narkis23"],

["efrattamar","אפרת, תמר","31.68038802020158","35.16397897167212","shkediya20"],
["einsajme","עין יצחק-סג'מה","31.659591495439255","35.11299796358264","shkediya21"],
["nahallivne","נחל ליבנה","31.661414547015998", "35.09977800540155","shkediya22,kalanit39,priha34"],
["nahalnaamanim","נחל נעמנים","31.66683904212615","35.131746865940144","shkediya23,tzipornit11"],
["amathabiyar","אמת הביאר","31.656467565110308","35.14638981911344","shkediya32,shkediya33,shkediya34"],
["singlederehavot","סינגל דרך האבות","31.667156","35.134505","kalanit30"],
["havatsfarhamidbar","חוות ספר המדבר","31.63344795598882","35.24662176029722","kalanit31,tzivoni1,tzivoni2,tzivoni3"],
["wadiganeden","ואדי גן עדן (נחל משואות)","31.66776930641217","35.105903782081654","kalanit34"],
["einabukleb","עין אבו כלאב","31.66941978919852","35.113218166065266","kalanit42,kalanit60,kalanit61,kalanit62,tzaharon1,tzaharon2,tzaharon3,tzaharon4,tzaharon5"],
["netzer","נצר","31.656272184005502","35.13943675918584","tzipornit1,tzipornit10"],

["derehavot","דרך האבות - אבן המיל ה-11","31.671707131791216","35.136631168556264","kalanit68,kalanit69,sahlav3,sahlav16"],
["efratdagan","אפרת, דגן",          "31.680360629771215", "35.17141405506139","sahlav4"],
["yaarzait","יער בזית",             "31.666673534006847","35.162305273246815","sahlav8,sahlav9,sahlav10,priha36"],
["rojumasabit","שלולית חורף רוג'ום א-סבית","31.653030085369252","35.14042917652135","tzipornit13,shkediya42,shkediya43,nurit1,nurit2,nurit3,nurit4,nurit5"],
["tkoa","תקוע",                     "31.648792354941072","35.22953215999608","priha31"],
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
	
	setMarkersbyMonth(mymap, 'all');
}

function setMarkersbyMonth(map, month) {
    // Adds markers to the map.
	
	let totalPoints = 0;

    /* Reading locations from array */
	locations.forEach(point => {
		let label = point[1];
		let photoNamesAll = point[4];
		let popupHtml = '<img src="images/map/'+point[0]+'.jpg" width="100%"><br><div align="center">'+label+'</div>';
		let photos = [];
		let photoNames = photoNamesAll.split(',');
		let photoIndex = 1;
		let numOfPhotos = photoNames.length;
		let toPush = 0;
		let monthId = '';
		//console.log(photoNamesAll + ', total=' + numOfPhotos);
		photoNames.forEach(photoName => {
			if (month == 'all') {
				toPush = 1;
			} else {
				monthId = getMonthByPhotoName(photoName);
				//console.log('getMonthByPhotoName('+photoName+') = '+ monthId);
				if (month == monthId) {
					toPush = 1;
				}
			}
			if (toPush) {
				if (month == 'all') {
					photos.push({href: 'images/map/big/'+photoName+'.jpg', title: '('+photoIndex+' of '+numOfPhotos+') '+label});
				} else {
					photos.push({href: 'images/map/big/'+photoName+'.jpg', title: label});
				}
				photoIndex++;
			}
		});
				
		if (photoIndex > 1) {
			totalPoints++;
			let min_width = 300;
			if (window.screen.width < 1000) {
				min_width = 100;
			}
			let popup = L.popup({minWidth: min_width})
						.setContent(popupHtml);
						
			let marker = L.marker([parseFloat(point[2]), parseFloat(point[3])], {title: label})
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

	console.log('setMarkers for month: '+month+' total='+totalPoints);
} /* setMarkers */


function getMonthByPhotoName(phName) {
	let retVal = '';
	for (let i=0; i<allPhotos.length; i++) {
		if (phName == allPhotos[i].src) {
			retVal = allPhotos[i].month;
			break;
		}
	}
	return retVal;
} /* getMonthByPhotoName */

function clearMapAndSetNewMarkersByMonth(monthId) {
	allMarkers.forEach(marker => {
		mymap.removeLayer(marker);
	})
	setMarkersbyMonth(mymap, monthId);
}

initMap();

