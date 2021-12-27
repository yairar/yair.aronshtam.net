// The following example creates complex markers retrieved from array

// Globals
var infowindow;

var locations = [
// [0] - Title in Hebrew, [1,2] - Position, [3]-Number of photos, [4]-Base name for all photos, [5]-Type of marker(point/...)

/*0*/["עין אבו כלאב", "31.66941978919852", "35.113218166065266","4", "einabukleb", 	    "point", "jpg"],
["נחל הפירים", "31.674398300128082", "35.161425508689945",      "9", "nahalpirim", 	    "point", "jpg"],
["חירבת ג'ומג'ום", "31.668648", "35.101899",                    "6", "hirbetjumjum",    "point", "jpg"],
["בת עין", "31.655733364181664", "35.11108121964128",           "3", "batain", 			"point", "jpg"],
["עין יצחק-סג'מה", "31.659591495439255", "35.11299796358264",   "6", "einsajme", 	    "point", "jpg"],
["עין ליבנה", "31.66331083992055", "35.09675554129274",         "7", "einlivne", 		"point", "jpg"],
["מנזר הרוסי", "31.645577396082345", "35.125462450218265",      "7", "minzarrusi", 	    "point", "jpg"],
["מצפור לזכר הבנים", "31.65986575834977", "35.122866071891835", "5", "mitzporhabanim",	"point", "jpg"],
["נצר", "31.656272184005502", "35.13943675918584",              "2", "netzer", 			"point", "jpg"],
["עין חובלה", "31.659049072956652", "35.10770700070066",        "2", "einhubela", 	    "point", "jpg"],
/*10*/["תמר", "31.68038802020158", "35.16397897167212",         "2", "givathatamar", 	"point", "jpg"],
["סובב דגן", "31.682072554314008", "35.176170385805676",        "5", "sovevdagan", 	    "point", "jpg"],
["מצפור האלף", "31.683083711474527", "35.14508791260869",       "2", "mitzporhaelef",   "point", "jpg"],
["נווה דניאל", "31.67790230573368", "35.142750061480115",       "8", "nevedaniel", 	    "point", "jpg"],
["תל עיטם", "31.685062535279727", "35.17943922443395",          "2", "teleitam", 		"point", "jpg"],
["עין צורים", "31.669294234830453", "35.12202385826116",        "2", "eintzurim", 		"point", "jpg"],
["עוז וגאון", "31.641550053820243", "35.13378880116147",        "5", "ozvegaon", 		"point", "jpg"],
["גבעת עוז", "31.63684529907876", "35.13628248138433",          "3", "givatoz", 		"point", "jpg"],
["שדה בועז", "31.69270441115536", "35.14691553208036",          "4", "sdeboaz", 	    "point", "jpg"],
["נחל צופית", "31.65564203847803", "35.09877447052007",         "4", "nahaltsofit", 	"point", "jpg"],
/*20*/["זית", "31.674278786670797", "35.16704282852811",        "1", "givathazait", 	"point", "jpg"],
["אמת הביאר", "31.656467565110308", "35.14638981911344",        "2", "amathabiyar", 	"point", "jpg"],
["אפרת - רימון", "31.6501476645803", "35.14941535088224",       "1", "efratrimon", 	    "point", "jpg"],
["בריכת דובק", "31.65990588537998", "35.113264537779514",       "2", "eindubek", 		"point", "jpg"],
["נחל תקוע", "31.64042592339606", "35.23539010448462",          "13","nahaltkoa",       "point", "jpg"],
['גבעת החי"ש', "31.65734981428064", "35.134184993934696",       "3", "givathahish",     "point", "jpg"],
['הרודיון', "31.66572385413287", "35.24166647357947",           "5", "herodion",        "point", "gif"],
['חוות ספר המדבר', "31.63344795598882", "35.24662176029722",    "4", "havatsfarhamidbar","point", "jpg"],
['תקוע ד', "31.63549972582843", "35.24271789951331",            "1", "tekoad",          "point", "jpg"],
['נחל עמוס', "31.629214940541633", "35.23602310581214",         "3", "nahalamos",       "point", "jpg"],
/*30*/['ואדי בקור', "31.633667189856027", "35.239306129646366", "4", "vadibakor",       "point", "jpg"],
['גבעת המנזר', "31.639028400207103", "35.12629929943091",       "2", "givathaminzar",   "point", "jpg"],
['נתיב האבות', "31.660810932075023", "35.132436193656986",      "1", "netivhaavot",     "point", "jpg"],
['עין אל-קסיס', "31.689914834636458", "35.14779452247626",      "10", "einelkasis",     "point", "jpg"],
['דקל', "31.668773753094715", "35.16083542270667",              "1", "dekel",           "point", "jpg"],
['מערה', "31.663155560651408", "35.11018995208747",             "1", "meara",           "point", "jpg"],
['נחל חלץ', "31.719748843873173", "35.16027752323157",          "8", "nahalhelets",     "point", "jpg"],
['אוכף המוכתר', "31.644399158888454", "35.11032942695623",      "5", "ukafamuhtar",     "point", "jpg"],
['עין אל מערה', "31.67050868087125", "35.15433374805457",       "7", "einelmeara",      "point", "jpg"],
['חורבת עריב', "31.68342830774587", "35.154537595939686",       "2", "hurvatariv",      "point", "jpg"],
/*40*/['דרך האבות - אבן המיל ה-11',"31.671707131791216","35.136631168556264","5","derehavot","point","jpg"],
['סינגל דרך האבות', "31.667156", "35.134505",                   "10", "singlederehavot", "point", "jpg"],
['יער בזית', "31.666673534006847", "35.162305273246815",        "4", "yaarzait",        "point", "jpg"],
['מצפה הסלע', "31.664591530824907", "35.10027114315038",        "4", "mitzpehasela",    "point", "jpg"],
['עליה לשדה בועז', "31.687242221358566", "35.15778575105672",   "3", "aliyalesdeboaz",  "point", "jpg"],
['סינגל נווה דניאל', "31.682376087362503", "35.13958428068166", "3", "singlenevedaniel","point", "jpg"],
['נחל העץ', "31.6726270750532", "35.11404696865087",            "5", "nahalhaetz",      "point", "jpg"],
['כבשן סיד מודרני', "31.679171420792592", "35.15014413757329",  "3", "kivshansid",      "point", "jpg"],
['חורבת ברכות במגדל עוז', "31.643440117590835", "35.14324013156896","5","hurvatbrachot","point", "jpg"],
['האלון הבודד', "31.65737218581017", "35.12124601764684",   	"1", "alonhaboded",     "point", "jpg"],
/*50*/['ואדי חלמויות', "31.64339855604563", "35.25780264301305","7", "vadihelmoniyot",  "point", "jpg"],
['צומת נחל החלמוניות', "31.639178654927477", "35.25851074619298","3","tzometnahalhelmoniyot","point", "jpg"],
['אוטובוס', "31.662171140609168", "35.103393234443715",         "1", "otobus",          "point", "jpg"],
['האוכף', "31.627285176025502", "35.26408974094396",            "2", "haukaf",          "point", "jpg"],
['יער תקוע', "31.658915549405734", "35.2285987512589",          "9", "yaartkoa",        "point", "jpg"],
['נחל רבדים', "31.675522168083937", "35.11805955333715",        "3", "nahalrevadim",    "point", "jpg"],
['אמת המים', "31.677454915713902", "35.16824904842382",         "3", "amatmaim",        "point", "jpg"],
['דיר אל בנת', "31.67764208935171", "35.17065230770116",        "5", "direlbanat",      "point", "jpg"],
['תצפית צופית', "31.649349481394115", "35.10384384555822",      "2", "tazpitzofit",     "point", "jpg"],
["שלולית חורף רוג'ום א-סבית","31.653030085369252","35.14042917652135","6","rojumasabit","point", "jpg"],
/*60*/["נבי דניאל", "31.687536646234864", "35.146099366378834", "2","nebidaniel",       "point", "jpg"],
["מצוק האבות", "31.671102143614863", "35.13614837093358",       "6","matzokavot",       "point", "jpg"],
["ואדי גן עדן (נחל משואות)","31.66776930641217","35.105903782081654","2","wadiganeden", "point", "jpg"],
["ואדי טאו", "31.690464", "35.142448",                          "3", "waditau",         "point", "jpg"],
["משלט הנקודה החמישית", "31.671286", "35.108558",               "5", "mishlathamesh",   "point", "jpg"],
];


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
