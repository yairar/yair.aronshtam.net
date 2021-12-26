var items = [
{src:'images/map/big/helmoniyot21.jpg', w:1263, h:947, title:'מלכת הסתיו', tags: 'helmonit'},
{src:'images/map/big/helmoniyot3.jpg',  w:1400, h:933, title:'מלכת הסתיו', tags: 'helmonit'},
{src:'images/map/big/helmoniyot2.jpg',  w:1400, h:932, title:'מלכת הסתיו', tags: 'helmonit'},
{src:'images/map/big/helmoniyot9.jpg',  w:849,  h:1200,title:'מלכת הסתיו', tags: 'helmonit'},
{src:'images/map/big/vadihelmoniyot5.jpg',w:1400, h:933, title:'מלכת הסתיו', tags: 'helmonit'},
{src:'images/map/big/helmoniyot20.jpg', w:1400, h:934, title:'מלכת הסתיו', tags: 'helmonit'},
{src:'images/map/big/helmoniyot29.jpg', w:1400, h:935, title:'מלכת הסתיו', tags: 'helmonit'},
{src:'images/map/big/helmoniyot30.jpg', w:1400, h:934, title:'מלכת הסתיו', tags: 'helmonit'},
{src:'images/map/big/helmoniyot31.jpg', w:1400, h:934, title:'מלכת הסתיו', tags: 'helmonit'},

{src:'images/map/big/helmoniyot8.jpg',  w:1400, h:1050, title:'נחל החלמוניות', tags: 'nahal'},
{src:'images/map/big/helmoniyot25.jpg', w:1400, h:1050, title:'נחל החלמוניות', tags: 'nahal'},
{src:'images/map/big/helmoniyot7.jpg',  w:1400, h:1050, title:'נחל החלמוניות', tags: 'nahal'},
{src:'images/map/big/helmoniyot24.jpg',  w:1400, h:1050, title:'נחל החלמוניות', tags: 'nahal'},
{src:'images/map/big/vadihelmoniyot3.jpg',w:1400, h:788, title:'נחל החלמוניות', tags: 'nahal'},

{src:'images/map/big/helmoniyot32.jpg', w:1400, h:789, title:'מעלה רחבעם', tags: 'maalerehavam'},
];

function openPhotoSwipe(subsetTag) {
    
	//console.log('Input tag = '+subsetTag);
	
// build subset of items according to TAG
	var itemsSubset = [];
	if (subsetTag == 'ALL') {
		itemsSubset = items;
	}
	else {
		for (i = 0; i < items.length; i++) {
			//console.log('item['+i+'].tags='+items[i].tags);
			x = items[i].tags.indexOf(subsetTag);
			//console.log('x='+x);
			if (x != -1) {
				itemsSubset.push(items[i]);
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

//openPhotoSwipe(1);

//document.getElementById('btn1').onclick = openPhotoSwipe(1);
//document.getElementById('btn2').onclick = openPhotoSwipe(2);