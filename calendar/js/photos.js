var photo_items = [
{src:'../catalog/image/einyorkeam.jpg', w:1600, h:1200, title:'January', tags: 'israel1'},
{src:'../catalog/image/bloom32.jpg', w:1600, h:1067, title:'February', tags: 'israel1'},
{src:'../chrome_extension/golanphotos/gamla3.jpg', w:1600, h:902, title:'March', tags: 'israel1'},
{src:'../chrome_extension/golanphotos/hermon23.jpg', w:1600, h:1200, title:'April', tags: 'israel1'},
{src:'../catalog/image/deadsea1.jpg', w:1600, h:1066, title:'May', tags: 'israel1'},
{src:'../catalog/image/einmigdal.jpg', w:1600, h:1144, title:'June', tags: 'israel1'},
{src:'../catalog/image/arugot3.jpg', w:1400, h:933, title:'July', tags: 'israel1'},
{src:'../chrome_extension/golanphotos/banias27.jpg', w:1600, h:1200, title:'August', tags: 'israel1'},
{src:'../catalog/image/sea1.jpg', w:1600, h:1067, title:'September', tags: 'israel1'},
{src:'../catalog/image/jerusalem1.jpg', w:1600, h:1065, title:'October', tags: 'israel1'},
{src:'../catalog/image/sahne1.jpg', w:1600, h:1200, title:'November', tags: 'israel1'},
{src:'../catalog/image/marsaba1.jpg', w:1600, h:1067, title:'December', tags: 'israel1'},
{src:'../chrome_extension/golanphotos/zavitan2.jpg', w:1600, h:1200, title:'January', tags: 'israel1'},

{src:'../chrome_extension/golanphotos/irusim1.jpg', w:1600, h:1200, title:'January', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/wadinov4.jpg', w:1600, h:1200, title:'February', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/priha34.jpg', w:1600, h:1200, title:'March', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/zavitan12.jpg', w:1600, h:1200, title:'April', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/yehudiya16.jpg', w:1600, h:1200, title:'May', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/zrimot45.jpg', w:1600, h:1200, title:'June', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/einpik1.jpg', w:1600, h:1200, title:'July', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/einoteden1.jpg', w:1600, h:1200, title:'August', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/hatzavim1.jpg', w:1600, h:1200, title:'September', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/eintut7.jpg', w:1600, h:1200, title:'October', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/kineret3.jpg', w:1600, h:1200, title:'November', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/zavitan3.jpg', w:1600, h:1200, title:'December', tags: 'golan1'},
{src:'../chrome_extension/golanphotos/mapaleliad3.jpg', w:1600, h:1200, title:'January', tags: 'golan1'},

{src:'../images/map/big/nevedaniel6.jpg', w:1600, h:999, title:'January', tags: 'gush1'},
{src:'../images/map/big/herodion2.jpg', w:1600, h:1068, title:'February', tags: 'gush1'},
{src:'../images/map/big/nevedaniel2.jpg', w:1800, h:955, title:'March', tags: 'gush1'},
{src:'../images/map/big/nahalpirim2.jpg', w:1600, h:1068, title:'April', tags: 'gush1'},
{src:'../images/map/big/mitzporhabanim1.jpg', w:1600, h:1067, title:'May', tags: 'gush1'},
{src:'../images/map/big/derehavot2.jpg', w:1400, h:933, title:'June', tags: 'gush1'},
{src:'../images/map/big/einsajme7.jpg', w:1400, h:1050, title:'July', tags: 'gush1'},
{src:'../images/map/big/anavim3.jpg', w:1600, h:1200, title:'August', tags: 'gush1'},
{src:'../images/map/big/shluhathamasuot12.jpg', w:1400, h:785, title:'September', tags: 'gush1'},
{src:'../images/map/big/einlivne4.jpg', w:1400, h:999, title:'October', tags: 'gush1'},
{src:'../images/map/big/vadihelmoniyot8.jpg', w:1400, h:933, title:'November', tags: 'gush1'},
{src:'../images/map/big/eindubek2.jpg', w:1400, h:933, title:'December', tags: 'gush1'},
{src:'../images/map/big/nevedaniel15.jpg', w:1400, h:933, title:'January', tags: 'gush1'},

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
