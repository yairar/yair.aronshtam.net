// The following example creates complex markers retrieved from array

// Globals
var infowindow;

var locations = [
["עין אבו כלאב", "31.67472884881077", "35.11300869279057", "3", "einabukleb", 	"point"],
["נחל הפירים", "31.673444933876777", "35.16139409634275", "7", "nahalpirim", 	"point"],
["חירבת ג'ומג'ום", "31.67120691075308", "35.101196243917116", "5", "hirbetjumjum", "point"],
["בת עין", "31.655733364181664", "35.11108121964128", "3", "batain", 			"point"],
["עין יצחק-סג'מה", "31.659591495439255", "35.11299796358264", "6", "einsajme", 	"point"],
["עין ליבנה", "31.66331083992055", "35.09675554129274", "4", "einlivne", 		"point"],
["מנזר הרוסי", "31.64585516703987", "35.124207950560276", "6", "minzarrusi", 	"point"],
["כרמים", "31.659979910276387", "35.12301168533952", "1", "kramim", 			"point"],
["נצר", "31.658796991800315", "35.14056034341968", "2", "netzer", 				"point"],
["עין חובלה", "31.659049072956652", "35.10770700070066", "1", "einhubela", 	    "point"],
["גבעת התמר", "31.676973284252718", "35.16549173755652", "2", "givathatamar", 	"point"],
["סובב דגן", "31.682072554314008", "35.176170385805676", "5", "sovevdagan", 	"point"],
["מצפור האלף", "31.683083711474527", "35.14508791260869", "2", "mitzporhaelef", "point"],
["נווה דניאל", "31.67790230573368", "35.142750061480115", "8", "nevedaniel", 	"point"],
["תל עיטם", "31.682836391980853", "35.17830438904912", "2", "teleitam", 		"point"],
["עין צורים", "31.66833548860177", "35.12196562382371", "2", "eintzurim", 		"point"],
["עוז וגאון", "31.641550053820243", "35.13378880116147", "5", "ozvegaon", 		"point"],
["גבעת עוז", "31.637193053100415", "35.13731322380704", "1", "givatoz", 		"point"],
["שדה בועז", "31.69270441115536", "35.14691553208036", "4", "sdeboaz", 		    "point"],
["נחל צופית", "31.655759794152385", "35.103249169317905", "1", "nahaltsofit", 	"point"],
["גבעת הזית", "31.674278786670797", "35.16704282852811", "1", "givathazait", 	"point"],
["אמת הביאר", "31.656467565110308", "35.14638981911344", "2", "amathabiyar", 	"point"],
["אפרת - רימון", "31.6501476645803", "35.14941535088224", "1", "efratrimon", 	"point"],
["עין דובק", "31.65990588537998", "35.113264537779514", "1", "eindubek", 		"point"],
["נחל תקוע", "31.64042592339606", "35.23539010448462", "8", "nahaltkoa",        "point"],
['גבעת החי"ש', "31.65734981428064", "35.134184993934696", "3", "givathahish",    "point"],
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
                title: point[4],
                zIndex: parseInt(point[3]),
                label: point[0],
                animation: google.maps.Animation.DROP
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
    var label = this.getLabel();
    var numOfPhotos = this.getZIndex();
    var photos = [];
    for (var i=1; i<=numOfPhotos; i++) {
        photos.push({href: 'images/map/big/'+name+i+'.jpg', title: label});
    }
    /*console.log(photos);*/
    var contentHtml = '<p align="center">'+label+'<br><a href="#"><img src="images/map/'+name+'.jpg" id="'+name+'"></a></p>';

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

