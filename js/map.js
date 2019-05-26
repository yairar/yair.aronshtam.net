// The following example creates complex markers retrieved from array

// Globals
var infowindow;

var locations = [
// [0] - Title in Hebrew, [1,2] - Position, [3]-Number of photos, [4]-Base name for all photos, [5]-Type of marker(point/...)

/*0*/["עין אבו כלאב", "31.67472884881077", "35.11300869279057", "3", "einabukleb", 	    "point", "jpg"],
["נחל הפירים", "31.673444933876777", "35.16139409634275",       "9", "nahalpirim", 	    "point", "jpg"],
["חירבת ג'ומג'ום", "31.67120691075308", "35.101196243917116",   "5", "hirbetjumjum",    "point", "jpg"],
["בת עין", "31.655733364181664", "35.11108121964128",           "3", "batain", 			"point", "jpg"],
["עין יצחק-סג'מה", "31.659591495439255", "35.11299796358264",   "6", "einsajme", 	    "point", "jpg"],
["עין ליבנה", "31.66331083992055", "35.09675554129274",         "4", "einlivne", 		"point", "jpg"],
["מנזר הרוסי", "31.645577396082345", "35.125462450218265",      "7", "minzarrusi", 	    "point", "jpg"],
["כרמים", "31.659979910276387", "35.12301168533952",            "4", "kramim", 			"point", "jpg"],
["נצר", "31.658796991800315", "35.14056034341968",              "2", "netzer", 			"point", "jpg"],
["עין חובלה", "31.659049072956652", "35.10770700070066",        "1", "einhubela", 	    "point", "jpg"],
/*10*/["תמר", "31.676973284252718", "35.16549173755652",        "2", "givathatamar", 	"point", "jpg"],
["סובב דגן", "31.682072554314008", "35.176170385805676",        "5", "sovevdagan", 	    "point", "jpg"],
["מצפור האלף", "31.683083711474527", "35.14508791260869",       "2", "mitzporhaelef",   "point", "jpg"],
["נווה דניאל", "31.67790230573368", "35.142750061480115",       "8", "nevedaniel", 	    "point", "jpg"],
["תל עיטם", "31.682836391980853", "35.17830438904912",          "2", "teleitam", 		"point", "jpg"],
["עין צורים", "31.66833548860177", "35.12196562382371",         "2", "eintzurim", 		"point", "jpg"],
["עוז וגאון", "31.641550053820243", "35.13378880116147",        "5", "ozvegaon", 		"point", "jpg"],
["גבעת עוז", "31.637193053100415", "35.13731322380704",         "3", "givatoz", 		"point", "jpg"],
["שדה בועז", "31.69270441115536", "35.14691553208036",          "4", "sdeboaz", 	    "point", "jpg"],
["נחל צופית", "31.655759794152385", "35.103249169317905",       "1", "nahaltsofit", 	"point", "jpg"],
/*20*/["זית", "31.674278786670797", "35.16704282852811",        "1", "givathazait", 	"point", "jpg"],
["אמת הביאר", "31.656467565110308", "35.14638981911344",        "2", "amathabiyar", 	"point", "jpg"],
["אפרת - רימון", "31.6501476645803", "35.14941535088224",       "1", "efratrimon", 	    "point", "jpg"],
["עין דובק", "31.65990588537998", "35.113264537779514",         "1", "eindubek", 		"point", "jpg"],
["נחל תקוע", "31.64042592339606", "35.23539010448462",          "10", "nahaltkoa",      "point", "jpg"],
['גבעת החי"ש', "31.65734981428064", "35.134184993934696",       "3", "givathahish",     "point", "jpg"],
['הרודיון', "31.66572385413287", "35.24166647357947",           "4", "herodion",        "point", "gif"],
['חוות ספר המדבר', "31.63344795598882", "35.24662176029722",    "4", "havatsfarhamidbar","point", "jpg"],
['תקוע ד', "31.63549972582843", "35.24271789951331",             "1", "tekoad",         "point", "jpg"],
['נחל עמוס', "31.629214940541633", "35.23602310581214",          "3", "nahalamos",      "point", "jpg"],
['ואדי בקור', "31.633667189856027", "35.239306129646366",        "4", "vadibakor",      "point", "jpg"],
['גבעת המנזר', "31.639028400207103", "35.12629929943091",        "2", "givathaminzar",  "point", "jpg"],
['נתיב האבות', "31.660810932075023", "35.132436193656986",       "1", "netivhaavot",    "point", "jpg"],
['עין אל-קסיס', "31.689914834636458", "35.14779452247626",       "9", "einelkasis",     "point", "jpg"],
['דקל', "31.67399441805061", "35.16387704772956",                "1", "dekel",          "point", "jpg"],
['מערה', "31.663155560651408", "35.11018995208747",              "1", "meara",          "point", "jpg"]
];


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 31.67007854996975, lng: 35.149426079718296}
    });
    setMarkers(map);
}

function setMarkers(map) {
    // Adds markers to the map.

    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.

    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    var image = {
        /*url: 'images/icon2.png',*/
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(32, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
        coords: [1, 1, 1, 32, 32, 32, 32, 1],
        type: 'poly'
    };
    
    /* Reading locations from array */
        locations.forEach(function(point) {
			
			if (point[5] != null) {
				image.url = 'images/map/icon_'+point[5]+'.png';
			}
			
            var marker = new google.maps.Marker({
                position: {lat: parseFloat(point[1]), lng: parseFloat(point[2])},
                map: map,
                icon: image,
                shape: shape,
                title: point[4],    // Base name of file for all photos
                zIndex: parseInt(point[3]),
                label: point[0],    // title in Hebrew
                animation: google.maps.Animation.DROP,
                
            });
            marker.addListener('click', showInfoWindow);
        });

} /* setMarkers */

function showInfoWindow() {
    // Close previous infowindow if it was not closed by user
    if (infowindow) {
        infowindow.close();
    }
    
    var name = this.getTitle();
    var locationsEntryIndex = findEntryByName(name);
    var infoWindowImageExtension = locations[locationsEntryIndex][6];
    
    var label = this.getLabel();
    var numOfPhotos = this.getZIndex();
    var photos = [];
    for (var i=1; i<=numOfPhotos; i++) {
        photos.push({href: 'images/map/big/'+name+i+'.jpg', title: label});
    }
    /*console.log(photos);*/
    var contentHtml = '<p align="center">'+label+'<br><a href="#"><img src="images/map/'+name+'.'+infoWindowImageExtension+'" id="'+name+'"></a></p>';

    infowindow = new google.maps.InfoWindow({
            content: contentHtml,
            maxWidth: 400
        });
    
    google.maps.event.addListener(infowindow, 'domready', function() {
        /*console.log(infowindow);*/
        var elem = document.getElementById(name);
        elem.onclick = function( e ) {
                            e.preventDefault();
                            jQuery(function($) {
                                $.swipebox(photos);
                            });
                        }
    });

    infowindow.open(map, this);

} /* showInfoWindow */


/* returns index of entry in locations array */
function findEntryByName(name) {
    
    for (var i=0; i<locations.length; i++)
    {
        if (name == locations[i][4]) {
            return i;
        }
    }
}
