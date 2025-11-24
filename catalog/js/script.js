var items = [
{src:'image/adulam1.jpg', w:1600, h:1044, title:'פארק עדולם', tags: 'adulam bloom spring israel'},

{src:'image/anavim1.jpg', w:1600, h:897, title:'כרמים של יקב גוש עציון', tags: 'vineyard summer best gush'},
{src:'image/anavim2.jpg', w:1600, h:1067, title:'כרמים של יקב גוש עציון', tags: 'vineyard summer gush'},
{src:'image/anavim3.jpg', w:1600, h:1200, title:'כרמים של יקב גוש עציון', tags: 'vineyard summer gush'},
{src:'image/anavim6.jpg', w:1600, h:1067, title:'כרמים בנחל הפירים', tags: 'vineyard autumn gush'},

{src:'image/arugot1.jpg', w:1600, h:1066, title:'נחל ערוגות', tags: 'arugot autumn israel best'},
{src:'image/arugot2.jpg', w:1400, h:933, title:'נחל ערוגות', tags: 'arugot summer israel best'},
{src:'image/arugot3.jpg', w:1400, h:933, title:'נחל ערוגות', tags: 'arugot summer israel best'},
{src:'image/arugot4.jpg', w:1600, h:1200, title:'נחל ערוגות', tags: 'arugot winter israel best'},

{src:'image/arugot8.jpg', w:1600, h:1001, title:'נחל ערוגות', tags: 'arugot autumn israel best'},
{src:'image/arugot10.jpg', w:875, h:1200, title:'נחל ערוגות', tags: 'arugot autumn israel best'},

{src:'image/autumn1.jpg', w:799, h:1200, title:'פרדס רימונים בנווה דניאל', tags: 'rimon autumn gush best'},
{src:'image/autumn2.jpg', w:1600, h:744, title:'נחל הפירים', tags: 'nahalhapirim autumn gush best'},
{src:'image/autumn3.jpg', w:1600, h:1067, title:'פרדס רימונים בנווה דניאל', tags: 'rimon autumn gush best'},
{src:'image/autumn4.jpg', w:1600, h:1065, title:'על הקצה', tags: 'leaf autumn gush best'},
{src:'image/autumn5.jpg', w:1600, h:1067, title:'פרדס רימונים בנווה דניאל', tags: 'rimon autumn gush'},
{src:'image/autumn6.jpg', w:1600, h:1066, title:'נחל הפירים', tags: 'nahalhapirim autumn gush best'},

{src:'image/autumn11.jpg', w:1600, h:1065, title:'סטף', tags: 'autumn'},
{src:'image/autumn12.jpg', w:1600, h:1200, title:'עין חמד', tags: 'autumn'},

{src:'image/banias1.jpg', w:1600, h:1200, title:'מפל בניאס', tags: 'banias summer israel best'},
{src:'image/banias2.jpg', w:1600, h:1198, title:'בניאס', tags: 'banias winter israel best'},
{src:'image/banias3.jpg', w:1600, h:1066, title:'מפל בניאס', tags: 'banias summer israel'},

{src:'image/batayin1.jpg', w:1600, h:975, title:'נוף על בת עין', tags: 'batayin winter landscape gush'},
{src:'image/batayin3.jpg', w:1400, h:1050, title:'צוקי בת עין', tags: 'batayin winter bloom gush'},

{src:'image/beitzait1.jpg', w:1600, h:900, title:'מאגר בית זית', tags: 'beitzait winter israel'},

{src:'image/bloom1.jpg', w:1600, h:1065, title:'פרדס רימונים בנווה דניאל', tags: 'bloom autumn best gush'},
{src:'image/bloom2.jpg', w:1600, h:1065, title:'עלה נידף', tags: 'autumn best gush'},
{src:'image/bloom3.jpg', w:1600, h:1067, title:'דרום אדום', tags: 'bloom daromadom spring israel best'},
{src:'image/bloom4.jpg', w:1600, h:1002, title:'כורכום חורפי ליד שדה בועז', tags: 'bloom winter gush'},
{src:'image/bloom5.jpg', w:785, h:1000, title:'נחל תקוע', tags: 'bloom spring gush'},
{src:'image/bloom6.jpg', w:1600, h:1200, title:'כרכום חורפי ביער ארץ האיילים', tags: 'bloom spring gush best'},
{src:'image/bloom7.jpg', w:1600, h:1067, title:'שקדיות באפרת', tags: 'bloom spring gush'},
{src:'image/bloom8.jpg', w:1600, h:1067, title:'אמת הביאר', tags: 'bloom spring gush'},
{src:'image/bloom9.jpg', w:1600, h:1067, title:'נחל תקוע', tags: 'bloom winter gush'},
{src:'image/bloom10.jpg', w:1600, h:1068, title:'פריחת השקדיות', tags: 'bloom spring gush'},
{src:'image/bloom11.jpg', w:1600, h:900, title:'סתווניות ליד אלעזר', tags: 'bloom autumn gush'},
{src:'image/bloom12.jpg', w:1600, h:1067, title:'רקפות ביער', tags: 'bloom spring israel'},
{src:'image/bloom13.jpg', w:800, h:1200, title:'פארק עדולם', tags: 'bloom spring israel'},
{src:'image/bloom14.jpg', w:1600, h:1067, title:'דרום אדום', tags: 'bloom daromadom spring israel'},
{src:'image/bloom15.jpg', w:1600, h:1066, title:'דרום אדום', tags: 'bloom daromadom spring israel'},
{src:'image/bloom16.jpg', w:1600, h:1067, title:'פארק עדולם', tags: 'bloom adulam spring israel'},
{src:'image/bloom17.jpg', w:1600, h:1067, title:'פארק עדולם', tags: 'bloom spring israel'},
{src:'image/bloom18.jpg', w:1600, h:1069, title:'ליפתא, ירושלים', tags: 'bloom nahaltkoa spring gush'},
{src:'image/bloom19.jpg', w:1600, h:1067, title:'שקדיה בנחל תקוע', tags: 'bloom nahaltkoa spring gush'},
{src:'image/bloom20.jpg', w:1600, h:1198, title:'שקדיה פורחת', tags: 'bloom spring gush'},
{src:'image/bloom21.jpg', w:1600, h:1200, title:'כורכום חורפי', tags: 'bloom autumn gush'},
{src:'image/bloom22.jpg', w:1400, h:933, title:'שקדיה בשלג', tags: 'bloom winter gush'},
{src:'image/bloom23.jpg', w:1400, h:1054, title:'כורכום חורפי', tags: 'bloom autumn gush'},
{src:'image/bloom24.jpg', w:1600, h:1066, title:'סתווניות', tags: 'bloom autumn gush'},
{src:'image/bloom25.jpg', w:1050, h:1576, title:'כורכום חורפי', tags: 'bloom autumn'},
{src:'image/bloom26.jpg', w:1600, h:1067, title:'פרפר על סתווניות', tags: 'bloom autumn gush'},
{src:'image/bloom27.jpg', w:749, h:1000, title:'מצפה הסלע אחרי הגשם', tags: 'bloom spring gush rain'},
{src:'image/bloom28.jpg', w:1600, h:1200, title:'מצפה הסלע', tags: 'bloom spring gush'},
{src:'image/bloom29.jpg', w:1600, h:1201, title:'טל הבוקר', tags: 'bloom spring gush'},
{src:'image/bloom30.jpg', w:749, h:1000, title:'צהרון מצוי', tags: 'bloom spring gush'},
{src:'image/bloom31.jpg', w:1600, h:1068, title:'פארק עדולם', tags: 'bloom spring adulam'},
{src:'image/bloom32.jpg', w:1600, h:1067, title:'דרום אדום', tags: 'bloom spring daromadom'},
{src:'image/bloom37.jpg', w:1600, h:900, title:'מטע שקדיות', tags: 'bloom spring almond'},
{src:'image/bloom39.jpg', w:1600, h:1067, title:'עלה נידף', tags: 'bloom spring reflection'},
{src:'image/bloom40.jpg', w:1600, h:1068, title:'פריחת שקדיות', tags: 'bloom spring almond'},
{src:'image/bloom41.jpg', w:901, h:1200, title:'פריחת שקדיות', tags: 'bloom spring almond'},
{src:'image/bloom42.jpg', w:1600, h:1067, title:'תורמוסים', tags: 'bloom spring lupine'},
{src:'image/bloom43.jpg', w:1600, h:1067, title:'פרפר', tags: 'bloom spring butterfly'},

{src:'image/bluecave2.jpg', w:1400, h:1050, title:'מערה הכחולה', tags: 'bluecave summer israel best'},

{src:'image/brihatdubek1.jpg', w:1600, h:1066, title:'בריכת דובק', tags: 'brihatdubek maayan winter gush best'},

{src:'image/cesaria1.jpg', w:1600, h:1065, title:'קיסריה', tags: 'cesaria spring sunset'},

{src:'image/deadsea1.jpg', w:1600, h:1066, title:'ים המלח', tags: 'deadsea spring israel best'},
{src:'image/deadsea2.jpg', w:1600, h:904, title:'ים המלח', tags: 'deadsea summer israel best'},
{src:'image/deadsea3.jpg', w:1400, h:934, title:'ים המלח', tags: 'deadsea winter israel best'},
{src:'image/deadsea4.jpg', w:1400, h:790, title:'ים המלח', tags: 'deadsea winter israel best'},
{src:'image/deadsea5.jpg', w:1600, h:1200, title:'ים המלח', tags: 'deadsea summer israel sunrise best'},

{src:'image/derehavot3.jpg', w:1600, h:899, title:'גבעת החי"ש', tags: 'derehavot blooom spring gush'},
{src:'image/derehavot5.jpg', w:1600, h:883, title:'דרך האבות', tags: 'derehavot blooom spring gush'},
{src:'image/derehavot11.jpg', w:1600, h:1200, title:'סינגל דרך האבות', tags: 'derehavot spring gush'},
{src:'image/derehavot13.jpg', w:1600, h:1067, title:'סינגל דרך האבות', tags: 'derehavot autumn gush'},
{src:'image/derehavot15.jpg', w:1600, h:1067, title:'סינגל דרך האבות', tags: 'derehavot bicycle summer gush'},
{src:'image/derehavot16.jpg', w:1600, h:1200, title:'סינגל דרך האבות', tags: 'derehavot summer gush sunset'},

{src:'image/efrat1.jpg', w:1600, h:900, title:'אפרת - נוף על תמר מזית', tags: 'efrat winter landscape gush'},
{src:'image/efrat2.jpg', w:1600, h:1066, title:'אפרת - מבט על זית מנחל הפירים', tags: 'efrat spring landscape gush'},
{src:'image/efrat3.jpg', w:1600, h:1067, title:'נוף מאפרת לנווה דניאל', tags: 'efrat summer landscape gush best'},
{src:'image/efrat4.jpg', w:1600, h:901, title:'אפרת - נוף על תמר מדקל', tags: 'efrat autumn landscape gush'},

{src:'image/einabukleb1.jpg', w:1600, h:899, title:'עין אבו כלאב', tags: 'maayan einabukleb spring gush best'},
{src:'image/einabukleb2.jpg', w:1400, h:933, title:'עין אבו כלאב', tags: 'maayan einabukleb autumn gush'},


{src:'image/einelkasis5.jpg', w:1600, h:1067, title:'עין אל-קסיס', tags: 'maayan sdeboaz bloom spring gush best'},
	
{src:'image/einitzhak4.jpg', w:1600, h:1200, title:"עין יצחק (עין סג'מה)", tags: 'maayan summer gush'},
{src:'image/einitzhak7.jpg', w:1600, h:1067, title:"עין יצחק (עין סג'מה)", tags: 'maayan summer gush'},

{src:'image/einkshatot1.jpg', w:1600, h:1200, title:'עין הקשתות', tags: 'maayan winter'},

{src:'image/einlivne4.jpg', w:1400, h:999, title:"עין ליבנה", tags: 'maayan autumn gush'},
{src:'image/einlivne5.jpg', w:1600, h:1200, title:"עין ליבנה", tags: 'maayan summer gush'},

{src:'image/einmaim1.jpg', w:1400, h:1050, title:'עין מי"ם', tags: 'maayan einmaim spring gush'},
{src:'image/einmigdal.jpg', w:1600, h:1144, title:'עין מגדל', tags: 'maayan einmigdal spring north best'},

{src:'image/einprat1.jpg', w:1600, h:1529, title:"עין פרת", tags: 'maayan winter israel'},
{src:'image/einprat2.jpg', w:1600, h:1200, title:"עין פרת", tags: 'maayan winter israel best'},

{src:'image/einyorkeam.jpg', w:1600, h:1200, title:"עין ירקעם", tags: 'maayan winter israel best'},

{src:'image/foresteretzayalim1.jpg', w:1600, h:1068, title:"יער ארץ האיילים", tags: 'forest spring landscape gush'},
{src:'image/foresteretzayalim4.jpg', w:1600, h:1068, title:"יער ארץ האיילים", tags: 'forest bloom autumn gush'},

{src:'image/gesherkantra1.jpg', w:1600, h:1200, title:"גשר הקנטרה", tags: 'gesherkantra summer landscape israel'},

{src:'image/golan1.jpg', w:1600, h:1200, title:"מפל עורבים", tags: 'golan winter landscape israel'},
{src:'image/golan2.jpg', w:1600, h:1200, title:"נחל אל על", tags: 'golan summer maayan israel'},
{src:'image/golan3.jpg', w:1600, h:1200, title:"עין תות", tags: 'golan summer maayan israel'},
{src:'image/golan4.jpg', w:1600, h:1068, title:"שקיעה מעל כנרת", tags: 'golan autumn landscape israel'},
{src:'image/golan5.jpg', w:1600, h:1200, title:"נחל זוויתן", tags: 'golan winter maayan israel'},
{src:'image/golan6.jpg', w:1600, h:1200, title:"מפל האירוסים", tags: 'golan winter landscape maayan israel best'},
{src:'image/golan7.jpg', w:1600, h:1067, title:"ואדי נוב", tags: 'golan winter landscape maayan israel best'},
{src:'image/golan8.jpg', w:1600, h:1067, title:"פריחה בטיילת דרום הגולן", tags: 'golan spring bloom israel'},
{src:'image/golan9.jpg', w:1600, h:1200, title:"נחל זוויתן", tags: 'golan spring maayan israel'},
{src:'image/golan10.jpg', w:1600, h:1200, title:"בריכת קשת", tags: 'golan spring maayan israel'},
{src:'image/golan11.jpg', w:1600, h:1066, title:"עיינות פאחם", tags: 'golan spring maayan israel'},
{src:'image/golan12.jpg', w:1600, h:1200, title:"עין פיק", tags: 'golan summer maayan israel'},
{src:'image/golan13.jpg', w:1600, h:1200, title:"עיינות עדן", tags: 'golan summer maayan israel'},
{src:'image/golan14.jpg', w:1600, h:1200, title:"פריחת חצבים בטיילת דרום הגולן", tags: 'golan autumn bloom israel'},
{src:'image/golan15.jpg', w:1600, h:1201, title:"זריחה בנוב", tags: 'golan winter landscape israel sunrise'},
{src:'image/golan16.jpg', w:1600, h:1200, title:"נחל זוויתן", tags: 'golan winter landscape israel'},
{src:'image/golan17.jpg', w:1600, h:1200, title:"בוקר במושב בגולן", tags: 'golan spring sunrise israel'},
{src:'image/golan18.jpg', w:1600, h:1068, title:"זריחה בנוב", tags: 'golan spring landscape sunrise israel'},
{src:'image/golan19.jpg', w:1600, h:1067, title:"שקיעה מעל כנרת", tags: 'golan sunset landscape autumn israel'},
{src:'image/golan20.jpg', w:1600, h:1200, title:"אירוס הגולן", tags: 'golan spring bloom israel'},
{src:'image/golan21.jpg', w:1600, h:1200, title:"השפיץ של עיר גמלא", tags: 'golan spring landscape israel'},
{src:'image/golan22.jpg', w:1050, h:1400, title:"אירוס ארם נהריים בגולן", tags: 'golan spring bloom israel'},
{src:'image/golan23.jpg', w:1600, h:901, title:"נוף לחרמון ממאגר רוויה", tags: 'golan spring landscape israel'},
{src:'image/golan24.jpg', w:1600, h:1200, title:"רקפות ביהודיה", tags: 'golan winter bloom maayan israel'},
{src:'image/golan25.jpg', w:1050, h:1400, title:"מפל ג'ילבון", tags: 'golan spring maayan israel'},
{src:'image/golan26.jpg', w:1600, h:1200, title:"ואדי נוב", tags: 'golan winter landscape maayan israel'},
{src:'image/golan27.jpg', w:1600, h:1200, title:"תצפית נחל מיצר", tags: 'golan spring landscape israel'},
{src:'image/golan28.jpg', w:1600, h:1200, title:"ואדי נוב", tags: 'golan winter landscape maayan israel'},
{src:'image/golan29.jpg', w:1600, h:1200, title:"זריחה בואדי נוב", tags: 'golan winter sunrise landscape israel'},
{src:'image/golan30.jpg', w:1600, h:1200, title:"זרימת ואדי נוב לנחל אל על", tags: 'golan winter landscape israel'},
{src:'image/golan31.jpg', w:1600, h:1067, title:"מפל הנסתר בואדי נוב", tags: 'golan winter landscape israel'},
{src:'image/golan32.jpg', w:1600, h:1200, title:"על הסוס בנוב", tags: 'golan winter landscape horse israel'},
{src:'image/golan33.jpg', w:1600, h:1200, title:"עין נוב", tags: 'golan summer maayan israel'},
{src:'image/golan34.jpg', w:1600, h:1067, title:"קן חסידות בנוב", tags: 'golan summer bird israel'},
{src:'image/golan35.jpg', w:600, h:900, title:"גידול הדסים בנוב", tags: 'golan hadasim nov summer sunset israel'},
{src:'image/golan36.jpg', w:1600, h:1131, title:"קולאג' נוב", tags: 'golan collage nov israel'},
{src:'image/golan37.jpg', w:636, h:900, title:"קולאג' מפלים", tags: 'golan waterfall lanscape collage israel'},
{src:'image/golan38.jpg', w:1517, h:1080, title:"שקיעה בבונקר של נוב", tags: 'golan spring landscape sunset lupine israel'},
{src:'image/golan39.jpg', w:1600, h:1067, title:"נוף מתחת לטיילת מבוא חמה", tags: 'golan winter landscape kineret israel'},
{src:'image/golan40.jpg', w:1600, h:1200, title:"נוף מטיילת מבוא חמה", tags: 'golan winter landscape kineret israel'},
{src:'image/golan41.jpg', w:1600, h:1068, title:"ואדי נוב בחורף", tags: 'golan winter landscape israel'},
{src:'image/golan42.jpg', w:1600, h:1200, title:"שלולית חורף בג'וריה", tags: 'golan winter landscape israel'},
{src:'image/golan43.jpg', w:1600, h:1200, title:"עין תות", tags: 'golan winter landscape israel'},
{src:'image/golan44.jpg', w:1600, h:1200, title:"מפל קצרין", tags: 'golan winter landscape waterfall israel'},
{src:'image/golan45.jpg', w:1600, h:1200, title:"נוף לחרמון מציר המים", tags: 'golan winter landscape hermon israel'},
{src:'image/golan46.jpg', w:1600, h:1198, title:"קצר ברדוויל", tags: 'golan winter landscape israel'},
{src:'image/golan47.jpg', w:1600, h:1200, title:"גלישת מאגר בני ישראל", tags: 'golan winter landscape israel'},
{src:'image/golan48.jpg', w:1600, h:1200, title:"ג'יפ צבאי על ציר המים", tags: 'golan winter landscape israel'},
{src:'image/golan49.jpg', w:1600, h:1200, title:"שלולית חורף", tags: 'golan winter landscape israel'},
{src:'image/golan50.jpg', w:1600, h:1200, title:"שלולית חורף", tags: 'golan winter landscape israel'},
{src:'image/golan51.jpg', w:1600, h:1200, title:"מפל נסתר ליד יונתן", tags: 'golan winter waterfall landscape israel'},
{src:'image/golan52.jpg', w:1600, h:899, title:"שקיעה בתצפית פישגופ באפיק", tags: 'golan winter sunset viewpoint landscape israel'},
{src:'image/golan53.jpg', w:1600, h:1200, title:"ירידה למפגש הנחלים", tags: 'golan winter bloom landscape israel'},
{src:'image/golan54.jpg', w:1600, h:1200, title:"ירידה למפגש הנחלים", tags: 'golan winter bloom landscape israel'},
{src:'image/golan55.jpg', w:1600, h:1067, title:"נוף לחרמון", tags: 'golan spring hermon landscape israel'},
{src:'image/golan56.jpg', w:1600, h:1200, title:"תצפית לכנרת מטיילת מבוא חמה", tags: 'golan spring kineret landscape israel'},
{src:'image/golan57.jpg', w:1600, h:1200, title:"נוף לכנרת וטבריה", tags: 'golan spring kineret landscape israel'},
{src:'image/golan58.jpg', w:1600, h:1200, title:"גשר הרכבת אל חמה", tags: 'golan spring landscape israel'},
{src:'image/golan59.jpg', w:1600, h:1200, title:"עליה לגולן מחמת גדר", tags: 'golan spring landscape israel'},
{src:'image/golan60.jpg', w:1600, h:1131, title:"קוגאז' פריחה בגולן", tags: 'golan spring bloom collage israel'},
{src:'image/golan61.jpg', w:1600, h:1131, title:"קוגאז' פריחה בגולן", tags: 'golan spring bloom collage israel'},
{src:'image/golan62.jpg', w:1600, h:1200, title:"נוף לחרמון", tags: 'golan spring horse israel best'},
{src:'image/golan63.jpg', w:1120, h:1400, title:"מפל ג'ילבון", tags: 'golan winter waterfall israel'},
{src:'image/golan64.jpg', w:1600, h:1200, title:"בית כנסת בעין הקשתות", tags: 'golan winter archeology israel'},

{src:'image/golan66.jpg', w:1600, h:1200, title:"נוף לחרמון", tags: 'golan spring landscape bloom israel'},

{src:'image/golan68.jpg', w:1600, h:902, title:"גמלא", tags: 'golan spring landscape israel'},
{src:'image/golan69.jpg', w:1600, h:1200, title:"קצר ברדוויל", tags: 'golan autumn landscape israel'},
{src:'image/golan70.jpg', w:1600, h:1200, title:"חלמוניות בשקיעה על רקע כנרת", tags: 'golan	bloom autumn landscape israel'},
{src:'image/golan71.jpg', w:1600, h:1200, title:"פרות בגולן", tags: 'golan cow spring landscape israel'},
{src:'image/golan72.jpg', w:1600, h:1200, title:"גידול הדסים בנוב", tags: 'golan hadasim nov winter	israel'},

{src:'image/golan74.jpg', w:1600, h:1200, title:"חלמוניות בשקיעה על רקע כנרת", tags: 'golan	bloom autumn landscape israel'},
{src:'image/golan75.jpg', w:1600, h:1200, title:"חלמוניות בשקיעה על רקע כנרת", tags: 'golan	bloom autumn landscape israel'},
{src:'image/golan76.jpg', w:1600, h:1200, title:"שקיעה מעל כנרת", tags: 'golan autumn sunset landscape israel'},

{src:'image/havatsfarhamidbar2.jpg', w:1600, h:900, title:"חוות ספר המדבר", tags: 'farm spring landscape gush'},

{src:'image/helmoniyot1.jpg', w:1600, h:901, title:"חלמוניות במעלה רחבעם", tags: 'helmoniyot bloom autumn gush'},
{src:'image/helmoniyot2.jpg', w:1600, h:1067, title:"חלמוניות במעלה רחבעם", tags: 'helmoniyot bloom autumn gush best'},
{src:'image/helmoniyot3.jpg', w:1600, h:1067, title:"חלמוניות במעלה רחבעם", tags: 'helmoniyot bloom autumn gush'},
{src:'image/helmoniyot5.jpg', w:1600, h:1066, title:"חלמוניות במעלה רחבעם", tags: 'helmoniyot bloom autumn gush'},

{src:'image/herodion1.jpg', w:1600, h:1068, title:"הרודיון", tags: 'herodion bloom spring gush'},
{src:'image/herodion2.jpg', w:1600, h:1200, title:"הרודיון", tags: 'herodion rainbow winter gush'},

{src:'image/jerusalem1.jpg', w:1600, h:1065, title:"ירושלים", tags: 'jerusalem spring israel best'},
{src:'image/jerusalem11.jpg', w:866, h:1200, title:"ילדים ברחובות ירושלים", tags: 'jerusalem spring israel'},
{src:'image/jerusalem15.jpg', w:1600, h:1066, title:"שקיעה בהרי ירושלים", tags: 'jerusalem autumn landscape israel'},

{src:'image/kanvas1.jpg', w:900, h:739, title:"הדפסה על קנבס גדול", tags: 'kanvas'},
{src:'image/kanvas2.jpg', w:1600, h:1004, title:"הדפסה על קנבס", tags: 'kanvas'},
{src:'image/kanvas3.jpg', w:900, h:579, title:"הדמיה", tags: 'kanvas'},
{src:'image/kanvas4.jpg', w:900, h:579, title:"הדמיה", tags: 'kanvas'},
{src:'image/kanvas5.jpg', w:900, h:579, title:"הדמיה", tags: 'kanvas'},
{src:'image/kanvas6.jpg', w:1600, h:1143, title:"הדמיה", tags: 'kanvas'},
{src:'image/kanvas7.jpg', w:1600, h:1200, title:"הדפסה על זכוכית למשרד", tags: 'kanvas'},
{src:'image/kanvas8.jpg', w:1600, h:961, title:"הדפסה על זכוכית למשרד", tags: 'kanvas'},
{src:'image/kanvas9.jpg', w:1120, h:1400, title:"הדפסה על קנבס", tags: 'kanvas'}, 

{src:'image/kineret2.jpg', w:1600, h:1066, title:"עין איוב בכנרת", tags: 'golan kineret waterfall winter israel'},
{src:'image/kineret3.jpg', w:1600, h:1200, title:"שקיעה בכנרת", tags: 'golan kineret sunset spring israel'},

{src:'image/maayanharod1.jpg', w:1600, h:1066, title:"מעיין חרוד", tags: 'maayanharod summer landscape israel'},

{src:'image/marsaba1.jpg', w:1600, h:1067, title:"מנזר מר סבא", tags: 'marsaba winter landscape desert israel'},

{src:'image/metzada1.jpg', w:1600, h:1200, title:"מצדה", tags: 'metzada winter landscape israel'},
{src:'image/metzada2.jpg', w:1600, h:1068, title:"מצדה", tags: 'metzada winter landscape israel sunset'},

{src:'image/mitzporzvika1.jpg', w:1600, h:1067, title:'מצפור צביקה', tags: 'mitzporzvika sunset landscape summer gush'},	
	
{src:'image/nahalhapirim1.jpg', w:1600, h:847, title:'נחל הפירים', tags: 'nahalhapirim spring gush'},
{src:'image/nahalhapirim2.jpg', w:1600, h:1200, title:'נחל הפירים', tags: 'nahalhapirim spring gush bloom'},
{src:'image/nahalhapirim7.jpg', w:1600, h:1067, title:'נחל הפירים', tags: 'nahalhapirim summer gush'},
{src:'image/nahalhapirim8.jpg', w:1600, h:1068, title:'נחל הפירים', tags: 'nahalhapirim spring gush'},
{src:'image/nahalhapirim11.jpg', w:1600, h:900, title:'נחל הפירים', tags: 'nahalhapirim autumn gush'},
{src:'image/nahalhapirim21.jpg', w:1600, h:1066, title:'נחל הפירים', tags: 'nahalhapirim winter gush'},
{src:'image/nahalhapirim22.jpg', w:750, h:1000, title:'נחל הפירים', tags: 'nahalhapirim winter gush'},

{src:'image/nahalkziv1.jpg', w:1600, h:1066, title:'נחל כזיב', tags: 'nahalkziv summer landscape israel'},
{src:'image/nahalkziv2.jpg', w:1600, h:1066, title:'נחל כזיב', tags: 'nahalkziv summer landscape israel'},
{src:'image/nahalkziv3.jpg', w:1600, h:1066, title:'נחל כזיב', tags: 'nahalkziv summer landscape israel'},
{src:'image/nahalkziv4.jpg', w:1600, h:1200, title:'נחל כזיב', tags: 'nahalkziv spring landscape israel'},
{src:'image/nahalkziv5.jpg', w:1600, h:1200, title:'נחל כזיב', tags: 'nahalkziv spring landscape israel'},

{src:'image/nahaltkoa1.jpg', w:1600, h:1066, title:'נחל תקוע', tags: 'nahaltkoa spring gush'},
{src:'image/nahaltkoa8.jpg', w:1600, h:830, title:'נחל תקוע', tags: 'nahaltkoa bloom spring gush'},

{src:'image/nevedaniel5.jpg', w:1600, h:1067, title:'נווה דניאל', tags: 'nevedaniel snow winter gush'},		
{src:'image/nevedaniel6.jpg', w:1800, h:955, title:'נווה דניאל', tags: 'nevedaniel spring landscape gush'},		

{src:'image/ofanaim1.jpg', w:1600, h:1067, title:'סינגל עין אבו כלאב', tags: 'forest bicycle autumn israel gush'},

{src:'image/parpar1.jpg', w:1600, h:1067, title:'פרפר בתקוע', tags: 'butterfly spring israel gush'},		

{src:'image/rain1.jpg', w:1600, h:1067, title:'גשם ביער של בת עין', tags: 'rain winter israel gush'},		

{src:'image/sahne1.jpg', w:1600, h:1200, title:'סחנה - גן השלושה', tags: 'sahne summer israel'},		
{src:'image/sahne2.jpg', w:1600, h:1200, title:'סחנה - גן השלושה', tags: 'sahne summer israel best'},		

{src:'image/sdeboaz1.jpg', w:1600, h:1201, title:'שקיעה מעל שדה בועז (נוף מאפרת)', tags: 'sdeboaz sunset summer gush'},		
{src:'image/sdeboaz2.jpg', w:1600, h:1066, title:'שקיעה מעל שדה בועז (נוף מאפרת)', tags: 'sdeboaz sunset summer gush'},

{src:'image/sea1.jpg', w:1600, h:1067, title:'שקיעה בים', tags: 'sea sunset summer israel best'},
{src:'image/sea2.jpg', w:1600, h:1066, title:'שקיעה בים', tags: 'sea sunset summer israel best'},
{src:'image/sea3.jpg', w:1600, h:1200, title:'חוף דור', tags: 'sea summer israel'},
{src:'image/sea4.jpg', w:1600, h:1200, title:'שקיעה בים', tags: 'sea sunset summer israel best'},

{src:'image/sunset1.jpg', w:1600, h:1067, title:'שקיעה מעל כפר עציון', tags: 'sunset summer gush'},
	
{src:'image/tazpithabanim1.jpg', w:1600, h:901, title:'תצפית לזכר שלושת הבנים', tags: 'tazpithabanim sunset landscape spring gush best'},
{src:'image/tazpithabanim2.jpg', w:1600, h:900, title:'תצפית לזכר שלושת הבנים', tags: 'tazpithabanim sunset landscape spring gush'},

{src:'image/telazeka1.jpg', w:1600, h:1065, title:'תל עזקה', tags: 'telazeka landscape spring israel'},

{src:'../chrome_extension/golanphotos/tzalmon7.jpg',w:961, h:1200, title:'נחל צלמון', tags: 'sun summer israel best'},
{src:'../chrome_extension/golanphotos/tayeletmavohama38.jpg',w:1600, h:1200, title:'חלמונית בטיילת מבוא חמה', tags: 'sunset autumn golan israel'},
{src:'../chrome_extension/golanphotos/tayeletmavohama39.jpg',w:1600, h:1200, title:'חלמוניות בטיילת מבוא חמה', tags: 'sunset autumn golan israel best'},

{src:'image/yaartkoa1.jpg', w:1600, h:1003, title:'יער תקוע', tags: 'yaartkoa forest spring gush'},
{src:'image/yaartkoa2.jpg', w:1600, h:1200, title:'ביציאה מיער תקוע לנחל תקוע', tags: 'yaartkoa bloom spring gush'},
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
			{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
		]
        
    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, itemsSubset, options);
    gallery.init();
};

//openPhotoSwipe(1);

//document.getElementById('btn1').onclick = openPhotoSwipe(1);
//document.getElementById('btn2').onclick = openPhotoSwipe(2);