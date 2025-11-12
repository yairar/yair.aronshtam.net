var photo_items = [
{src:'../catalog/image/einyorkeam.jpg', w:1600, h:1200, title:'January', tags: 'israel1'},
{src:'../catalog/image/bloom32.jpg', w:1600, h:1067, title:'February', tags: 'israel1'},
{src:'../catalog/image/golan68.jpg', w:1600, h:902, title:'March', tags: 'israel1'},
{src:'../catalog/image/golan62.jpg', w:1600, h:1200, title:'April', tags: 'israel1'},
{src:'../catalog/image/deadsea1.jpg', w:1600, h:1066, title:'May', tags: 'israel1'},
{src:'../catalog/image/einmigdal.jpg', w:1600, h:1144, title:'June', tags: 'israel1'},
{src:'../catalog/image/arugot3.jpg', w:1400, h:933, title:'July', tags: 'israel1'},
{src:'../catalog/image/banias1.jpg', w:1600, h:1200, title:'August', tags: 'israel1'},
{src:'../catalog/image/sea1.jpg', w:1600, h:1067, title:'September', tags: 'israel1'},
{src:'../catalog/image/jerusalem1.jpg', w:1600, h:1065, title:'October', tags: 'israel1'},
{src:'../catalog/image/sahne1.jpg', w:1600, h:1200, title:'November', tags: 'israel1'},
{src:'../catalog/image/marsaba1.jpg', w:1600, h:1067, title:'December', tags: 'israel1'},
{src:'../catalog/image/golan16.jpg', w:1600, h:1200, title:'January', tags: 'israel1'},

{src:'../catalog/image/golan6.jpg', w:1600, h:1200, title:'January', tags: 'golan1'},
{src:'../catalog/image/golan7.jpg', w:1600, h:1200, title:'February', tags: 'golan1'},
{src:'../catalog/image/golan8.jpg', w:1600, h:1200, title:'March', tags: 'golan1'},
{src:'../catalog/image/golan62.jpg', w:1600, h:1200, title:'April', tags: 'golan1'},
{src:'../catalog/image/golan10.jpg', w:1600, h:1200, title:'May', tags: 'golan1'},
{src:'../catalog/image/golan11.jpg', w:1600, h:1200, title:'June', tags: 'golan1'},
{src:'../catalog/image/golan12.jpg', w:1600, h:1200, title:'July', tags: 'golan1'},
{src:'../catalog/image/golan13.jpg', w:1600, h:1200, title:'August', tags: 'golan1'},
{src:'../catalog/image/golan69.jpg', w:1600, h:1200, title:'September', tags: 'golan1'},
{src:'../catalog/image/golan70.jpg', w:1600, h:1200, title:'October', tags: 'golan1'},
{src:'../catalog/image/golan4.jpg', w:1600, h:1200, title:'November', tags: 'golan1'},
{src:'../catalog/image/golan5.jpg', w:1600, h:1200, title:'December', tags: 'golan1'},
{src:'../catalog/image/golan1.jpg', w:1600, h:1200, title:'January', tags: 'golan1'},

{src:'../gush-etzion-album/image/nevedaniel1.jpg', w:1600, h:999, title:'January', tags: 'gush1'},
{src:'../gush-etzion-album/image/herodion1.jpg', w:1600, h:1068, title:'February', tags: 'gush1'},
{src:'../gush-etzion-album/image/nevedaniel6.jpg', w:1800, h:955, title:'March', tags: 'gush1'},
{src:'../gush-etzion-album/image/nahalhapirim8.jpg', w:1600, h:1068, title:'April', tags: 'gush1'},
{src:'../gush-etzion-album/image/tazpithabanim1.jpg', w:1600, h:901, title:'May', tags: 'gush1'},
{src:'../images/map/big/derehavot2.jpg', w:1400, h:633, title:'June', tags: 'gush1'},
{src:'../gush-etzion-album/image/einlivne5.jpg', w:1600, h:1200, title:'July', tags: 'gush1'},
{src:'../gush-etzion-album/image/anavim3.jpg', w:1600, h:1200, title:'August', tags: 'gush1'},
{src:'../gush-etzion-album/image/anavim1.jpg', w:1600, h:897, title:'September', tags: 'gush1'},
{src:'../gush-etzion-album/image/einlivne3.jpg', w:1400, h:1200, title:'October', tags: 'gush1'},
{src:'../gush-etzion-album/image/helmoniyot2.jpg', w:1600, h:1067, title:'November', tags: 'gush1'},
{src:'../gush-etzion-album/image/brihatdubek1.jpg', w:1600, h:1066, title:'December', tags: 'gush1'},
{src:'../gush-etzion-album/image/nevedaniel18.jpg', w:1600, h:1200, title:'January', tags: 'gush1'},

];

function openPhotoSwipe(subsetTag) {
    
//console.log('Input tag = '+subsetTag);
	if (subsetTag == '') {
		return;
	}
// build subset of items according to TAG
	var itemsSubset = [];
	if (subsetTag == 'ALL') {
		itemsSubset = photo_items;
	}
	else {
		for (i = 0; i < photo_items.length; i++) {
			//console.log('item['+i+'].tags='+photo_items[i].tags);
			x = photo_items[i].tags.indexOf(subsetTag);
			//console.log('x='+x);
			if (x != -1) {
				itemsSubset.push(photo_items[i]);
			}
		}
	}
	if (itemsSubset == [])
	{
		return;
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
