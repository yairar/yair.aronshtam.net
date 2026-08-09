/* Calendar catalog data
 * Every calendar = 1 cover (שער) + 13 month pages: ספטמבר 2026 עד ספטמבר 2027.
 * Month labels are generated in catalog.html from START (see the top of the
 * inline script there) - photos[0] gets the first month, photos[12] the last.
 * To add a calendar: copy a block, set id/title/thumb/cover and 13 photos.
 */
var CALENDARS = [
  {
    id: 'israel',
    title: 'נופי ישראל',
    subtitle: 'מהחרמון ועד המכתשים',
    thumb: 'images/grid2_1.jpg',
    demo: 'israel/',
    cover: { src: '../chrome_extension/golanphotos/arbel1.jpg', w: 1600, h: 1200, caption: 'צוק ארבל' },
    photos: [
	  { src: '../catalog/image/sea1.jpg', w: 1600, h: 1067, caption: 'שקיעה בים התיכון' },
      { src: '../catalog/image/jerusalem1.jpg', w: 1600, h: 1065, caption: 'העיר העתיקה, ירושלים' },
      { src: '../catalog/image/sahne1.jpg', w: 1600, h: 1200, caption: 'הסחנה, גן השלושה' },
      { src: '../catalog/image/marsaba1.jpg', w: 1600, h: 1067, caption: 'מנזר מר סבא' },
      { src: '../chrome_extension/golanphotos/zavitan2.jpg', w: 1600, h: 1200, caption: 'נחל זוויתן' },
      { src: '../catalog/image/bloom32.jpg', w: 1600, h: 1067, caption: 'כלניות ביער שוקדה, דרום אדום' },
      { src: '../chrome_extension/golanphotos/gamla3.jpg', w: 1600, h: 902, caption: 'גמלא, רמת הגולן' },
      { src: '../chrome_extension/golanphotos/hermon23.jpg', w: 1600, h: 1200, caption: 'נוף לחרמון' },
      { src: '../catalog/image/deadsea1.jpg', w: 1600, h: 1066, caption: 'בריכות ים המלח' },
      { src: '../catalog/image/einmigdal.jpg', w: 1600, h: 1144, caption: 'עין מגדל, עמק המעיינות' },
      { src: '../catalog/image/arugot3.jpg', w: 1400, h: 933, caption: 'נחל ערוגות' },
      { src: '../chrome_extension/golanphotos/banias27.jpg', w: 1600, h: 1200, caption: 'מפל הבניאס' },
      { src: '../catalog/image/bloom1.jpg', w: 1600, h: 1065, caption: 'פרדס רימונים' },
    ]
  },
  {
    id: 'golan',
    title: 'רמת הגולן 1',
    subtitle: 'זרימות, פריחה ומפלים',
    thumb: 'images/grid2_2.jpg',
    demo: 'israel/',
    cover: { src: '../chrome_extension/golanphotos/orvim2.jpg', w: 1600, h: 1200, caption: 'מפל עורבים' },
    photos: [
	  { src: '../chrome_extension/golanphotos/elal6.jpg', w: 1600, h: 1200, caption: 'מפל השחור, נחל אל על' },
	  { src: '../chrome_extension/golanphotos/eintut7.jpg', w: 1600, h: 1200, caption: 'עין תות' },
      { src: '../chrome_extension/golanphotos/kineret3.jpg', w: 1600, h: 1200, caption: 'נוף לכנרת' },
      { src: '../chrome_extension/golanphotos/zavitan3.jpg', w: 1600, h: 1200, caption: 'נחל זוויתן' },
      { src: '../chrome_extension/golanphotos/mapaleliad3.jpg', w: 1600, h: 1200, caption: 'מפל אליעד' },
      { src: '../chrome_extension/golanphotos/irusim1.jpg', w: 1600, h: 1200, caption: 'מפל האירוסים' },
      { src: '../chrome_extension/golanphotos/wadinov4.jpg', w: 1600, h: 1200, caption: 'ואדי נוב' },
      { src: '../chrome_extension/golanphotos/priha34.jpg', w: 1600, h: 1200, caption: 'פריחה בגולן' },
      { src: '../chrome_extension/golanphotos/zavitan12.jpg', w: 1600, h: 1200, caption: 'נחל זוויתן' },
      { src: '../chrome_extension/golanphotos/yehudiya16.jpg', w: 1600, h: 1200, caption: 'נחל יהודיה' },
      { src: '../chrome_extension/golanphotos/zrimot45.jpg', w: 1600, h: 1200, caption: 'זרימות בגולן' },
      { src: '../chrome_extension/golanphotos/einpik1.jpg', w: 1600, h: 1200, caption: 'עין פיק' },
      { src: '../chrome_extension/golanphotos/einoteden1.jpg', w: 1600, h: 1200, caption: 'עיינות עדן' },
    ]
  },
  {
    id: 'golan',
    title: 'רמת הגולן 2',
    subtitle: 'זרימות, פריחה ומפלים',
    thumb: 'images/golan2.jpg',
    demo: 'israel/',
    cover: { src: '../chrome_extension/golanphotos/gilabun14.jpg', w: 1120, h: 1400, caption: 'מפל גילבון' },
    photos: [
	  { src: '../chrome_extension/golanphotos/butamiya7.jpg', w: 1600, h: 1200, caption: 'מאגר בוטמיה' },
	  { src: '../chrome_extension/golanphotos/daliyot1.jpg', w: 1600, h: 1200, caption: 'יער דליות' },
      { src: '../chrome_extension/golanphotos/hamatgader23.jpg', w: 1600, h: 1200, caption: 'כביש חמת גדר' },
      { src: '../chrome_extension/golanphotos/kineret36.jpg', w: 1600, h: 1200, caption: 'נוף לכינרת' },
	  { src: '../chrome_extension/golanphotos/mapaleliad3.jpg', w: 1600, h: 1200, caption: 'מפל אליעד' },
      { src: '../chrome_extension/golanphotos/zrimot61.jpg', w: 1600, h: 1200, caption: 'זרימות בגולן' },
      { src: '../chrome_extension/golanphotos/mapalayit1.jpg', w: 1600, h: 1199, caption: 'מפל עיט' },
      { src: '../chrome_extension/golanphotos/yehudiya16.jpg', w: 1600, h: 1200, caption: 'נחל יהודיה' },
      { src: '../chrome_extension/golanphotos/tzirhamaim12.jpg', w: 1600, h: 1200, caption: 'ציר המים' },
      { src: '../chrome_extension/golanphotos/katzr10.jpg', w: 1600, h: 1198, caption: 'מצוק ליד עין הקשתות' },
      { src: '../chrome_extension/golanphotos/mifgashhanahalim25.jpg', w: 1600, h: 1200, caption: 'מפגש הנחלים, סמך ואל על' },
      { src: '../chrome_extension/golanphotos/klali21.jpg', w: 1600, h: 1200, caption: 'זריחה בקיץ' },
      { src: '../chrome_extension/golanphotos/fares4.jpg', w: 1600, h: 1067, caption: 'נוף מתל פארס' },
    ]
  },
  {
    id: 'gush',
    title: 'גוש עציון',
    subtitle: 'הרים, מעיינות ודרך האבות',
    thumb: 'images/grid2_3.jpg',
    demo: 'gush-etzion/',
    cover: { src: '../images/map/big/anavim2.jpg', w: 1600, h: 1067, caption: 'שלוחת המשואות' },
    photos: [
      { src: '../catalog/image/bloom1.jpg', w: 1600, h: 1065, caption: 'פרדס רימונים, נווה דניאל' },
      { src: '../images/map/big/einlivne4.jpg', w: 1400, h: 999, caption: 'עין ליבנה' },
      { src: '../images/map/big/vadihelmoniyot8.jpg', w: 1400, h: 933, caption: 'ואדי חלמוניות' },
      { src: '../images/map/big/eindubek2.jpg', w: 1400, h: 933, caption: 'בריכת דובק' },
      { src: '../images/map/big/nevedaniel6.jpg', w: 1600, h: 999, caption: 'נווה דניאל' },
      { src: '../images/map/big/herodion2.jpg', w: 1600, h: 1068, caption: 'הרודיון' },
      { src: '../images/map/big/nevedaniel2.jpg', w: 1800, h: 955, caption: 'קשת בנווה דניאל' },
      { src: '../images/map/big/nahalpirim2.jpg', w: 1600, h: 1068, caption: 'נחל הפירים' },
      { src: '../images/map/big/mitzporhabanim1.jpg', w: 1600, h: 1067, caption: 'מצפור לזכר הבנים' },
      { src: '../images/map/big/derehavot2.jpg', w: 1400, h: 933, caption: 'דרך האבות, אבן המיל ה-11' },
      { src: '../images/map/big/einsajme7.jpg', w: 1400, h: 1050, caption: 'עין יצחק (סג\'מה)' },
	  { src: '../images/map/big/anavim3.jpg', w: 1600, h: 1200, caption: 'ענבים ביקב גוש עציון' },
	  { src: '../images/map/big/shluhathamasuot12.jpg', w: 1400, h: 785, caption: 'שלוחת המשואות' },
    ]
  }
];
