var photo_items = [
{src:'images/map/big/ahunov1.jpg', w:1600, h:1201, title:'זריחה באחו נוב', tags: 'ahunov sunrise winter'},
{src:'images/map/big/ahunov2.jpg', w:1600, h:1200, title:'זריחה באחו נוב', tags: 'ahunov sunrise winter'},

{src:'images/map/big/einkef1.jpg', w:1600, h:1200, title:'עין כיף', tags: 'einkef maayan autumn'},

{src:'images/map/big/einnov1.jpg', w:1600, h:1200, title:'עין נוב', tags: 'einnov maayan summer'},

{src:'images/map/big/einoteden1.jpg', w:1600, h:1200, title:'עיינות עדן', tags: 'einoteden maayan autumn'},

{src:'images/map/big/elal1.jpg', w:1600, h:1200, title:'נחל אל על', tags: 'elal autumn waterfall'},
{src:'images/map/big/elal2.jpg', w:1600, h:1200, title:'נחל אל על', tags: 'elal autumn waterfall waterfall_lavan'},
{src:'images/map/big/elal5.jpg', w:1600, h:1200, title:'נחל אל על', tags: 'elal autumn'},

{src:'images/map/big/katzr1.jpg', w:1600, h:1198, title:'קצר ברדוויל', tags: 'katzr viewpoint winter'},
{src:'images/map/big/katzr2.jpg', w:1600, h:1200, title:'קצר ברדוויל', tags: 'katzr viewpoint autumn'},

{src:'images/map/big/mitzpefishgop1.jpg', w:1600, h:1200, title:'מצפה פישגופ, אפיק', tags: 'fishgop afik mitzpe'},

{src:'images/map/big/meitzar1.jpg', w:1600, h:1200, title:'נחל מיצר', tags: 'meitzar spring viewpoint'},

{src:'images/map/big/nov1.jpg', w:1600, h:1201, title:'נוב', tags: 'nov autumn'},
{src:'images/map/big/nov5.jpg', w:1600, h:1200, title:'נוב', tags: 'nov spring sunset'},

{src:'images/map/big/wadinov1.jpg', w:1600, h:1200, title:'', tags: 'wadinov winter flow'},
{src:'images/map/big/wadinov2.jpg', w:1600, h:1200, title:'', tags: 'wadinov winter'},


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
