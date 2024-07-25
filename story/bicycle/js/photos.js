var items = [
	{src:'photo/adom1.jpg', w:1600, h:1070, title:'דרום אדום', tags: 'adom'},
	{src:'photo/adom2.jpg', w:1600, h:945, title:'דרום אדום', tags: 'adom'},
	{src:'photo/adom3.jpg', w:1600, h:1067, title:'דרום אדום', tags: 'adom'},
	{src:'photo/adom4.jpg', w:1600, h:1200, title:'דרום אדום', tags: 'adom'},
	{src:'photo/adom5.jpg', w:1600, h:1067, title:'דרום אדום', tags: 'adom'},
	{src:'photo/adom6.jpg', w:1600, h:1200, title:'דרום אדום', tags: 'adom'},
	{src:'photo/adom7.jpg', w:1600, h:1200, title:'דרום אדום', tags: 'adom'},

	{src:'photo/adulam1.jpg', w:1600, h:1200, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam2.jpg', w:1600, h:900, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam3.jpg', w:1600, h:900, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam4.jpg', w:1600, h:900, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam5.jpg', w:1600, h:1200, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam6.jpg', w:1600, h:1200, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam7.jpg', w:1600, h:900, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam8.jpg', w:1600, h:900, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam9.jpg', w:1600, h:900, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam10.jpg', w:1600, h:1067, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam11.jpg', w:1600, h:1200, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam12.jpg', w:1600, h:1200, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam13.jpg', w:1600, h:1200, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam14.jpg', w:1600, h:1200, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam15.jpg', w:1600, h:1200, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam16.jpg', w:1600, h:900, title:'אזור עדולם', tags: 'adulam'},
	{src:'photo/adulam17.jpg', w:1600, h:900, title:'אזור עדולם', tags: 'adulam'},

	{src:'photo/c1.jpg', w:1600, h:1200, title:'מטע', tags: 'c'},
	{src:'photo/c2.jpg', w:1600, h:1068, title:'פארק קנדה', tags: 'c'},
	{src:'photo/c3.jpg', w:1600, h:1200, title:'מטע', tags: 'c'},
	{src:'photo/c4.jpg', w:1600, h:1200, title:'מטע', tags: 'c'},
	{src:'photo/c5.jpg', w:1600, h:1200, title:'חורבת חנות', tags: 'c'},
	{src:'photo/c6.jpg', w:1600, h:900, title:'חירבת בית לויה', tags: 'c'},
	{src:'photo/c7.jpg', w:1600, h:1200, title:'הר סנסן', tags: 'c'},
	{src:'photo/c8.jpg', w:1600, h:1067, title:'דרך בורמה', tags: 'c'},
	{src:'photo/c9.jpg', w:1600, h:1200, title:'מצפה הראל', tags: 'c'},
	{src:'photo/c10.jpg', w:1600, h:1200, title:'יער חורשן', tags: 'c'},
	{src:'photo/c11.jpg', w:1600, h:1067, title:'מאגר האשלים', tags: 'c'},
	{src:'photo/c12.jpg', w:1600, h:1200, title:'מצפה שמש', tags: 'c'},
	{src:'photo/c13.jpg', w:1600, h:1200, title:'גן לאומי חורבת בית עיטאב', tags: 'c'},
	{src:'photo/c14.jpg', w:1600, h:1067, title:'טיילת הצוק', tags: 'c'},
	{src:'photo/c15.jpg', w:1600, h:1067, title:'יפה', tags: 'c'},
	{src:'photo/c16.jpg', w:1600, h:1202, title:'שדות ים', tags: 'c'},

	{src:'photo/golan1.jpg', w:1600, h:1200, title:'עליה מחמת גדר', tags: 'golan'},
	{src:'photo/golan2.jpg', w:1600, h:1067, title:'רמת הגולן', tags: 'golan'},
	{src:'photo/golan3.jpg', w:1600, h:1200, title:'רמת הגולן', tags: 'golan'},
	{src:'photo/golan4.jpg', w:1600, h:1067, title:'רמת הגולן', tags: 'golan'},
	{src:'photo/golan5.jpg', w:1600, h:1200, title:'רמת הגולן', tags: 'golan'},
	{src:'photo/golan6.jpg', w:1600, h:1067, title:'רמת הגולן', tags: 'golan'},
	{src:'photo/golan7.jpg', w:1600, h:1200, title:'רמת הגולן', tags: 'golan'},
	{src:'photo/golan8.jpg', w:1600, h:1200, title:'אירוס הגולן', tags: 'golan'},
	{src:'photo/golan9.jpg', w:1600, h:1200, title:'ציר המים', tags: 'golan'},
	{src:'photo/golan10.jpg', w:675, h:900, title:'עין פיק', tags: 'golan'},
	{src:'photo/golan11.jpg', w:1600, h:1200, title:'נחל גמלא', tags: 'golan'},
	{src:'photo/golan12.jpg', w:1600, h:1200, title:'תל פארס', tags: 'golan'},
	{src:'photo/golan13.jpg', w:1600, h:1200, title:'רמת הגולן', tags: 'golan'},

	{src:'photo/gush1.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush2.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush3.jpg', w:1600, h:1156, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush4.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush5.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush6.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush7.jpg', w:599, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush8.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush9.jpg', w:1600, h:1066, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush10.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush11.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush12.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush13.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush14.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush15.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush16.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush17.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush18.jpg', w:1600, h:1199, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush19.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush20.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush21.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush22.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush23.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush24.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush25.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush26.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush27.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush28.jpg', w:1600, h:1066, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush29.jpg', w:1600, h:930, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush30.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush31.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush32.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush33.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush34.jpg', w:562, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush35.jpg', w:1600, h:901, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush36.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush37.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush38.jpg', w:1600, h:1069, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush39.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush40.jpg', w:1600, h:1199, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush41.jpg', w:1600, h:1201, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush42.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush43.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush44.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush45.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush46.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush47.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush48.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush49.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush50.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush51.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush52.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush53.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush54.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush55.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush56.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush57.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush58.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush59.jpg', w:675, h:900, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush60.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush61.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush62.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush63.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush64.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush65.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush66.jpg', w:1600, h:1202, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush67.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush68.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush69.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush70.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush71.jpg', w:1600, h:1200, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush72.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush73.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush74.jpg', w:1600, h:1067, title:'גוש עציון', tags: 'gush'},
	{src:'photo/gush75.jpg', w:1600, h:900, title:'גוש עציון', tags: 'gush'},


	{src:'photo/jer1.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer2.jpg', w:1600, h:902, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer3.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer4.jpg', w:1600, h:1067, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer5.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer6.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer7.jpg', w:1600, h:1199, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer8.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer9.jpg', w:558, h:900, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer10.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer11.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer12.jpg', w:1600, h:1040, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer13.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer14.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer15.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer16.jpg', w:1600, h:1067, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer17.jpg', w:1600, h:1280, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer18.jpg', w:675, h:900, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer19.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer20.jpg', w:1600, h:1199, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer21.jpg', w:1600, h:1067, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer22.jpg', w:1600, h:900, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer23.jpg', w:1600, h:900, title:'הרי ירושלים', tags: 'jer'},
	{src:'photo/jer24.jpg', w:1600, h:1200, title:'הרי ירושלים', tags: 'jer'},

	{src:'photo/kelt1.jpg', w:1600, h:1200, title:'אזור וואדי קלט', tags: 'kelt'},
	{src:'photo/kelt2.jpg', w:1600, h:1200, title:'אזור וואדי קלט', tags: 'kelt'},
	{src:'photo/kelt3.jpg', w:1600, h:1200, title:'אזור וואדי קלט', tags: 'kelt'},
	{src:'photo/kelt4.jpg', w:1600, h:1200, title:'אזור וואדי קלט', tags: 'kelt'},
	{src:'photo/kelt5.jpg', w:1600, h:1067, title:'אזור וואדי קלט', tags: 'kelt'},
	{src:'photo/kelt6.jpg', w:1600, h:1200, title:'אזור וואדי קלט', tags: 'kelt'},
	{src:'photo/kelt7.jpg', w:1600, h:1066, title:'אזור וואדי קלט', tags: 'kelt'},
	{src:'photo/kelt8.jpg', w:1600, h:1067, title:'אזור וואדי קלט', tags: 'kelt'},
	{src:'photo/kelt9.jpg', w:1600, h:1200, title:'אזור וואדי קלט', tags: 'kelt'},

	{src:'photo/kineret1.jpg', w:1600, h:1200, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret2.jpg', w:1600, h:1200, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret3.jpg', w:1600, h:1200, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret4.jpg', w:1600, h:1200, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret5.jpg', w:1600, h:1200, title:'יער שוויץ', tags: 'kineret'},
	{src:'photo/kineret6.jpg', w:1600, h:1200, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret7.jpg', w:1600, h:1200, title:'יער שוויץ', tags: 'kineret'},
	{src:'photo/kineret8.jpg', w:1600, h:1200, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret9.jpg', w:1600, h:1200, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret10.jpg', w:1600, h:1200, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret11.jpg', w:675, h:900, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret12.jpg', w:1600, h:1200, title:'סביב הכנרת', tags: 'kineret'},
	{src:'photo/kineret13.jpg', w:1600, h:1200, title:'יער שוויץ', tags: 'kineret'},

	{src:'photo/midbar1.jpg', w:1600, h:1200, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar2.jpg', w:1600, h:942, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar3.jpg', w:1600, h:1067, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar4.jpg', w:1600, h:1200, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar5.jpg', w:1600, h:899, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar6.jpg', w:1600, h:1068, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar7.jpg', w:1600, h:1200, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar8.jpg', w:1600, h:1200, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar9.jpg', w:1600, h:1200, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar10.jpg', w:1600, h:1067, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar11.jpg', w:1600, h:1200, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar12.jpg', w:1600, h:902, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar13.jpg', w:1600, h:902, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar14.jpg', w:1600, h:1200, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar15.jpg', w:1600, h:1135, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar16.jpg', w:1600, h:940, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar17.jpg', w:1600, h:1069, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar18.jpg', w:1600, h:902, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar19.jpg', w:1600, h:1067, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar20.jpg', w:1600, h:900, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	{src:'photo/midbar21.jpg', w:1600, h:1200, title:'תקוע ומדבר יהודה', tags: 'midbar'},
	
	{src:'photo/yatir1.jpg', w:1600, h:1200, title:'חבל יתיר', tags: 'yatir'},
	{src:'photo/yatir2.jpg', w:1600, h:1067, title:'חבל יתיר', tags: 'yatir'},
	{src:'photo/yatir3.jpg', w:1600, h:1200, title:'חבל יתיר', tags: 'yatir'},
	{src:'photo/yatir4.jpg', w:1600, h:1200, title:'חבל יתיר', tags: 'yatir'},
	{src:'photo/yatir5.jpg', w:1600, h:1200, title:'חבל יתיר', tags: 'yatir'},
	
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
