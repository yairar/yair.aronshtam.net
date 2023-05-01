
var allPhotos = [
/*oct*/
{src:'hatzav1', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav'},
{src:'hatzav2', w:1400, h:1050, title:'עליה לשדה בועז', tags: 'hatzav'},
{src:'hatzav3', w:675, h:900, title:'נחל תקוע', tags: 'hatzav'},
{src:'hatzav4', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav'},
{src:'hatzav5', w:675, h:900, title:'נחל תקוע', tags: 'hatzav'},
{src:'hatzav6', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav'},
{src:'hatzav7', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav'},
{src:'hatzav8', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav'},
{src:'hatzav9', w:1400, h:1050, title:'עליה לשדה בועז', tags: 'hatzav'},
{src:'hatzav10', w:1400, h:1050, title:'עליה לשדה בועז', tags: 'hatzav'},

/*nov*/
{src:'helmoniyot1', w:1400, h:934, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot2',  w:1400, h:932, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot3',  w:1400, h:933, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot4',  w:849,  h:1200,title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot5', w:1263, h:947, title:'מלכת הסתיו', tags: 'helmonit'},
{src:'helmoniyot6', w:1400, h:1011, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot7', w:1400, h:1050, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot8', w:1400, h:1050, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot9', w:1400, h:934, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot10',  w:1400, h:935, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot11', w:1400, h:934, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot12',  w:1400, h:934, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot13',  w:1400, h:933, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot14',w:1400, h:1050, title:'נחל החלמוניות', tags: 'helmonit'},
{src:'helmoniyot15', w:1400, h:1053, title:'נחל החלמוניות', tags: 'helmonit'},

{src:'sitvanit1', w:1400, h:933, title:'גבעת עוז', tags: 'sitvanit11'},
{src:'sitvanit2', w:1400, h:934, title:'נבי דניאל', tags: 'sitvanit11'},
{src:'sitvanit3', w:600, h:900, title:'נבי דניאל', tags: 'sitvanit11'},
{src:'sitvanit4', w:1400, h:934, title:'נבי דניאל', tags: 'sitvanit11'},
{src:'sitvanit5', w:1400, h:1051, title:'שדה בועז', tags: 'sitvanit11'},
{src:'sitvanit6', w:675, h:900, title:'שדה בועז', tags: 'sitvanit11'},
{src:'sitvanit7', w:1400, h:1050, title:'גבעת עוז', tags: 'sitvanit11'},
{src:'sitvanit8', w:1400, h:1050, title:'גבעת עוז', tags: 'sitvanit11'},
{src:'sitvanit9', w:1400, h:788, title:'מעבר מתחת לכביש הישן', tags: 'sitvanit11'},
{src:'sitvanit10', w:1400, h:933, title:'מצוק האבות', tags: 'sitvanit11'},
{src:'sitvanit11', w:1400, h:1051, title:'מצוק האבות', tags: 'sitvanit11'},
{src:'sitvanit12', w:1400, h:1050, title:'מצוק האבות', tags: 'sitvanit11'},
{src:'sitvanit13', w:1400, h:933, title:'נחל תקוע', tags: 'sitvanit11'},
{src:'sitvanit14', w:1400, h:1050, title:'יער תקוע', tags: 'sitvanit11'},
{src:'sitvanit15', w:1400, h:933, title:'יער תקוע', tags: 'sitvanit11'},
{src:'sitvanit16', w:1400, h:933, title:'יער תקוע', tags: 'sitvanit11'},
/*dec*/
{src:'sitvanit20', w:1400, h:1120, title:'מורדות הדגן', tags: 'sitvanit12'},
{src:'sitvanit21', w:1400, h:1050, title:'מורדות הדגן', tags: 'sitvanit12'},
{src:'sitvanit22', w:1400, h:933, title:'סיתוונית טוביה בנחל תקוע', tags: 'sitvanit12'},
{src:'sitvanit23', w:1400, h:933, title:'סיתוונית טוביה בנחל תקוע', tags: 'sitvanit12'},

{src:'kurkum1', w:1400, h:915, title:'חורבת ברכות, מגדל עוז', tags: 'kurkum11'},
{src:'kurkum2', w:1400, h:988, title:'יער ארץ האיילים', tags: 'kurkum12'},
{src:'kurkum3', w:1400, h:1054, title:'יער ארץ האיילים', tags: 'kurkum11'},
{src:'kurkum4', w:1400, h:1050, title:'יער ארץ האיילים', tags: 'kurkum11'},
{src:'kurkum5', w:1400, h:933, title:'יער ארץ האיילים', tags: 'kurkum11'},
{src:'kurkum6', w:1400, h:1050, title:'יער ארץ האיילים', tags: 'kurkum11'},
/*dec*/
{src:'kurkum10', w:1400, h:876, title:'שדה בועז', tags: 'kurkum12'},
{src:'kurkum11', w:1400, h:1050, title:'גבעת עוז', tags: 'kurkum12'},
{src:'kurkum12', w:1400, h:935, title:'יער ארץ האיילים', tags: 'kurkum12'},
{src:'kurkum13', w:1400, h:1050, title:'מצוק עדן', tags: 'kurkum12'}, /*********/
{src:'kurkum14', w:1400, h:1051, title:'מצוק עדן', tags: 'kurkum12'}, /*********/
{src:'kurkum15', w:1400, h:1050, title:'שמורת הר כנוב (נחל עוזררים)', tags: 'kurkum12'},
{src:'kurkum16', w:600, h:900, title:'פארק אמות המים', tags: 'kurkum12'},

{src:'narkis1', w:1400, h:1050, title:'צוקי בת עין', tags: 'narkis11'},
{src:'narkis2', w:1400, h:1050, title:'צוקי בת עין', tags: 'narkis11'},
{src:'narkis3', w:675, h:900, title:'צוקי בת עין', tags: 'narkis11'},
{src:'narkis4', w:675, h:900, title:'צוקי בת עין', tags: 'narkis11'},
/*dec*/
{src:'narkis10', w:1400, h:1050, title:'צוקי בת עין', tags: 'narkis12'},
{src:'narkis11', w:1400, h:1049, title:'צוקי בת עין', tags: 'narkis12'},
{src:'narkis12', w:1400, h:1050, title:'מצפה הסלע', tags: 'narkis12'},
{src:'narkis13', w:1400, h:933, title:'צוקי בת עין', tags: 'narkis12'},
{src:'narkis14', w:1400, h:1050, title:'צוקי בת עין', tags: 'narkis12'},
{src:'narkis15', w:675, h:900, title:'צוקי בת עין', tags: 'narkis12'},

/*jan*/
{src:'shkediya1', w:1400, h:1050, title:'חורבת סוויר (גבעת החי"ש)', tags: 'shkediya01'},
{src:'shkediya2', w:1400, h:1050, title:'חורבת סוויר (גבעת החי"ש)', tags: 'shkediya01'},
{src:'shkediya3', w:1400, h:1050, title:'נחל הפירים', tags: 'shkediya01'},
{src:'shkediya4', w:1400, h:1048, title:'שלוחת המשואות', tags: 'shkediya01'},
{src:'shkediya5', w:1400, h:1050, title:'שלוחת המשואות', tags: 'shkediya01'},
{src:'shkediya6', w:1400, h:1050, title:'שלוחת המשואות', tags: 'shkediya01'},
{src:'shkediya7', w:1400, h:1050, title:'שלוחת המשואות', tags: 'shkediya01'},
{src:'shkediya8', w:1400, h:1050, title:'שלוחת המשואות', tags: 'shkediya01'},

{src:'kalanit1', w:1400, h:1050, title:'נחל רבדים', tags: 'kalanit01'},
{src:'kalanit2', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit01'},
{src:'kalanit3', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit01'},
{src:'kalanit4', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit01'},
{src:'kalanit5', w:1400, h:1048, title:'מצפה הסלע', tags: 'kalanit01'},
{src:'kalanit6', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit01'},
{src:'kalanit7', w:600, h:900, title:'מצפה הסלע', tags: 'kalanit01'},
{src:'kalanit8', w:600, h:900, title:'מצפה הסלע', tags: 'kalanit01'},
{src:'kalanit9', w:1400, h:1050, title:'חורבת ברכות, מגדל עוז', tags: 'kalanit01'},
{src:'kalanit10', w:1400, h:1050, title:'נחל רבדים', tags: 'kalanit01'},

{src:'irus1', w:1400, h:1050, title:'עין חובלה', tags: 'irus01'},
{src:'irus2', w:1400, h:1050, title:"חירבת ג'ומג'ום", tags: 'irus01'},
{src:'irus3', w:675, h:900, title:"חירבת ג'ומג'ום", tags: 'irus01'},
{src:'irus4', w:1400, h:1050, title:"חירבת ג'ומג'ום", tags: 'irus01'},

{src:'rakafot1', w:1400, h:1049, title:'מצפה רבדים', tags: 'rakafot01'},
{src:'rakafot2', w:1400, h:1050, title:'מצפה הסלע', tags: 'rakafot01'},
{src:'rakafot3', w:1400, h:931, title:'מצפה הסלע', tags: 'rakafot01'},
{src:'rakafot4', w:600, h:900, title:'מצפה הסלע', tags: 'rakafot01'},

{src:'irit1', w:1400, h:933, title:'מצפה רבדים', tags: 'irit01'},
{src:'irit2', w:1400, h:1050, title:'מצפה הסלע', tags: 'irit01'},
{src:'irit3', w:1400, h:1050, title:'מצפה רבדים', tags: 'irit01'},
{src:'irit4', w:1400, h:1050, title:'מצפה הסלע', tags: 'irit01'},
{src:'irit5', w:1400, h:1050, title:'מצפה רבדים', tags: 'irit01'},

{src:'narkis20', w:1400, h:1050, title:'נחל העץ', tags: 'narkis01'},
{src:'narkis21', w:1400, h:1050, title:'נחל העץ', tags: 'narkis01'},
{src:'narkis22', w:1400, h:1050, title:'נחל העץ', tags: 'narkis01'},
{src:'narkis23', w:1400, h:1050, title:'נחל העץ', tags: 'narkis01'},

/*feb*/


];

// create full image urls:
for (var i = 0; i < allPhotos.length; i++) {
	allPhotos[i].src = 'images/map/big/'+allPhotos[i].src+'.jpg';
}

function openPhotoSwipe(subsetTag) {
    
	//console.log('Input tag = '+subsetTag);
	
// build subset of allPhotos according to TAG
	var itemsSubset = [];
	if (subsetTag == 'ALL') {
		itemsSubset = allPhotos;
	}
	else {
		for (i = 0; i < allPhotos.length; i++) {
			//console.log('item['+i+'].tags='+allPhotos[i].tags);
			tagIndex = allPhotos[i].tags.indexOf(subsetTag);
			//console.log('x='+x);
			if (tagIndex != -1) {
				itemsSubset.push(allPhotos[i]);
			}
		}
	}
	
	var pswpElement = document.querySelectorAll('.pswp')[0];
    // define options (if needed)
    var options = {
      	history: false,
      	//focus: false,

        //showAnimationDuration: 0,
        //hideAnimationDuration: 0,
		
		shareButtons: [
			{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'}
		]
        
    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, itemsSubset, options);
    gallery.init();
};

function openPhotoSwipeVideo(id) {
	
	var itemsSubset =[
	  {
		html: '<video controls autoplay><source src="images/video/'+id+'.mp4" type="video/mp4"></video>'
	  },
	];
	
	var pswpElement = document.querySelectorAll('.pswp')[0];
    // define options (if needed)
    var options = {
      	history: false,
	
		shareButtons: [
			{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'}
		]
        
    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, itemsSubset, options);
    gallery.init();	
}
