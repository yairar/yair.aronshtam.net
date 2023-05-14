
var allPhotos = [
/*oct*/
{src:'hatzav1', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav', month:'10'},
{src:'hatzav2', w:1400, h:1050, title:'עליה לשדה בועז', tags: 'hatzav', month:'10'},
{src:'hatzav3', w:675, h:900, title:'נחל תקוע', tags: 'hatzav', month:'10'},
{src:'hatzav4', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav', month:'10'},
{src:'hatzav5', w:675, h:900, title:'נחל תקוע', tags: 'hatzav', month:'10'},
{src:'hatzav6', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav', month:'10'},
{src:'hatzav7', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav', month:'10'},
{src:'hatzav8', w:1400, h:1050, title:'נחל תקוע', tags: 'hatzav', month:'10'},
{src:'hatzav9', w:1400, h:1050, title:'עליה לשדה בועז', tags: 'hatzav', month:'10'},
{src:'hatzav10', w:1400, h:1050, title:'עליה לשדה בועז', tags: 'hatzav', month:'10'},

/*nov*/
{src:'helmoniyot1', w:1400, h:934, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot2',  w:1400, h:932, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot3',  w:1400, h:933, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot4',  w:849,  h:1200,title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot5', w:1263, h:947, title:'מלכת הסתיו', tags: 'helmonit', month:'11'},
{src:'helmoniyot6', w:1400, h:1011, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot7', w:1400, h:1050, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot8', w:1400, h:1050, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot9', w:1400, h:934, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot10',  w:1400, h:935, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot11', w:1400, h:934, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot12',  w:1400, h:934, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot13',  w:1400, h:933, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot14',w:1400, h:1050, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},
{src:'helmoniyot15', w:1400, h:1053, title:'נחל החלמוניות', tags: 'helmonit', month:'11'},

{src:'sitvanit1', w:1400, h:933, title:'גבעת עוז', tags: 'sitvanit11', month:'11'},
{src:'sitvanit2', w:1400, h:934, title:'נבי דניאל', tags: 'sitvanit11', month:'11'},
{src:'sitvanit3', w:600, h:900, title:'נבי דניאל', tags: 'sitvanit11', month:'11'},
{src:'sitvanit4', w:1400, h:934, title:'נבי דניאל', tags: 'sitvanit11', month:'11'},
{src:'sitvanit5', w:1400, h:1051, title:'שדה בועז', tags: 'sitvanit11', month:'11'},
{src:'sitvanit6', w:675, h:900, title:'שדה בועז', tags: 'sitvanit11', month:'11'},
{src:'sitvanit7', w:1400, h:1050, title:'גבעת עוז', tags: 'sitvanit11', month:'11'},
{src:'sitvanit8', w:1400, h:1050, title:'גבעת עוז', tags: 'sitvanit11', month:'11'},
{src:'sitvanit9', w:1400, h:788, title:'מעבר מתחת לכביש הישן', tags: 'sitvanit11', month:'11'},
{src:'sitvanit10', w:1400, h:933, title:'מצוק האבות', tags: 'sitvanit11', month:'11'},
{src:'sitvanit11', w:1400, h:1051, title:'מצוק האבות', tags: 'sitvanit11', month:'11'},
{src:'sitvanit12', w:1400, h:1050, title:'מצוק האבות', tags: 'sitvanit11', month:'11'},
{src:'sitvanit13', w:1400, h:933, title:'נחל תקוע', tags: 'sitvanit11', month:'11'},
{src:'sitvanit14', w:1400, h:1050, title:'יער תקוע', tags: 'sitvanit11', month:'11'},
{src:'sitvanit15', w:1400, h:933, title:'יער תקוע', tags: 'sitvanit11', month:'11'},
{src:'sitvanit16', w:1400, h:933, title:'יער תקוע', tags: 'sitvanit11', month:'11'},
/*dec*/
{src:'sitvanit20', w:1400, h:1120, title:'מורדות הדגן', tags: 'sitvanit12', month:'12'},
{src:'sitvanit21', w:1400, h:1050, title:'מורדות הדגן', tags: 'sitvanit12', month:'12'},
{src:'sitvanit22', w:1400, h:933, title:'סיתוונית טוביה בנחל תקוע', tags: 'sitvanit12', month:'12'},
{src:'sitvanit23', w:1400, h:933, title:'סיתוונית טוביה בנחל תקוע', tags: 'sitvanit12', month:'12'},

{src:'kurkum1', w:1400, h:915, title:'חורבת ברכות, מגדל עוז', tags: 'kurkum11', month:'11'},
{src:'kurkum2', w:1400, h:988, title:'יער ארץ האיילים', tags: 'kurkum12', month:'11'},
{src:'kurkum3', w:1400, h:1054, title:'יער ארץ האיילים', tags: 'kurkum11', month:'11'},
{src:'kurkum4', w:1400, h:1050, title:'יער ארץ האיילים', tags: 'kurkum11', month:'11'},
{src:'kurkum5', w:1400, h:933, title:'יער ארץ האיילים', tags: 'kurkum11', month:'11'},
{src:'kurkum6', w:1400, h:1050, title:'יער ארץ האיילים', tags: 'kurkum11', month:'11'},
/*dec*/
{src:'kurkum10', w:1400, h:876, title:'שדה בועז', tags: 'kurkum12', month:'12'},
{src:'kurkum11', w:1400, h:1050, title:'גבעת עוז', tags: 'kurkum12', month:'12'},
{src:'kurkum12', w:1400, h:935, title:'יער ארץ האיילים', tags: 'kurkum12', month:'12'},
{src:'kurkum13', w:1400, h:1050, title:'מצוק עדן', tags: 'kurkum12', month:'12'}, /*****חסר מיקום****/
{src:'kurkum14', w:1400, h:1051, title:'מצוק עדן', tags: 'kurkum12', month:'12'}, /*****חסר מיקום****/
{src:'kurkum15', w:1400, h:1050, title:'שמורת הר כנוב (נחל עוזררים)', tags: 'kurkum12', month:'12'},
{src:'kurkum16', w:600, h:900, title:'פארק אמות המים', tags: 'kurkum12'},

{src:'narkis1', w:1400, h:1050, title:'צוקי בת עין', tags: 'narkis11', month:'11'},
{src:'narkis2', w:1400, h:1050, title:'צוקי בת עין', tags: 'narkis11', month:'11'},
{src:'narkis3', w:675, h:900, title:'צוקי בת עין', tags: 'narkis11', month:'11'},
{src:'narkis4', w:675, h:900, title:'צוקי בת עין', tags: 'narkis11', month:'11'},
{src:'narkis5', w:1400, h:1050, title:'מצפה הסלע', tags: 'narkis11', month:'11'},
/*dec*/
{src:'narkis10', w:1400, h:1050, title:'צוקי בת עין', tags: 'narkis12', month:'12'},
{src:'narkis11', w:1400, h:1049, title:'צוקי בת עין', tags: 'narkis12', month:'12'},
{src:'narkis12', w:1400, h:1050, title:'מצפה הסלע', tags: 'narkis12', month:'12'},
{src:'narkis13', w:1400, h:933, title:'צוקי בת עין', tags: 'narkis12', month:'12'},
{src:'narkis14', w:1400, h:1050, title:'צוקי בת עין', tags: 'narkis12', month:'12'},
{src:'narkis15', w:675, h:900, title:'צוקי בת עין', tags: 'narkis12', month:'12'},

/*jan*/
{src:'shkediya1', w:1400, h:1050, title:'חורבת סוויר (גבעת החי"ש)', tags: 'shkediya01', month:'1'},
{src:'shkediya2', w:1400, h:1050, title:'חורבת סוויר (גבעת החי"ש)', tags: 'shkediya01', month:'1'},
{src:'shkediya3', w:1400, h:1050, title:'נחל הפירים', tags: 'shkediya01', month:'1'},
{src:'shkediya4', w:1400, h:1048, title:'שלוחת המשואות', tags: 'shkediya01', month:'1'},
{src:'shkediya5', w:1400, h:1050, title:'שלוחת המשואות', tags: 'shkediya01', month:'1'},
{src:'shkediya6', w:1400, h:1050, title:'שלוחת המשואות', tags: 'shkediya01', month:'1'},
{src:'shkediya7', w:1400, h:1050, title:'שלוחת המשואות', tags: 'shkediya01', month:'1'},
{src:'shkediya8', w:1400, h:1050, title:'שלוחת המשואות', tags: 'shkediya01', month:'1'},

{src:'kalanit1', w:1400, h:1050, title:'נחל רבדים', tags: 'kalanit01', month:'1'},
{src:'kalanit2', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit01', month:'1'},
{src:'kalanit3', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit01', month:'1'},
{src:'kalanit4', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit01', month:'1'},
{src:'kalanit5', w:1400, h:1048, title:'מצפה הסלע', tags: 'kalanit01', month:'1'},
{src:'kalanit6', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit01', month:'1'},
{src:'kalanit7', w:600, h:900, title:'מצפה הסלע', tags: 'kalanit01', month:'1'},
{src:'kalanit8', w:600, h:900, title:'מצפה הסלע', tags: 'kalanit01', month:'1'},
{src:'kalanit9', w:1400, h:1050, title:'חורבת ברכות, מגדל עוז', tags: 'kalanit01', month:'1'},
{src:'kalanit10', w:1400, h:1050, title:'נחל רבדים', tags: 'kalanit01', month:'1'},

{src:'irus1', w:1400, h:1050, title:'עין חובלה', tags: 'irus01', month:'1'},
{src:'irus2', w:1400, h:1050, title:"חירבת ג'ומג'ום", tags: 'irus01', month:'1'},
{src:'irus3', w:675, h:900, title:"חירבת ג'ומג'ום", tags: 'irus01', month:'1'},
{src:'irus4', w:1400, h:1050, title:"חירבת ג'ומג'ום", tags: 'irus01', month:'1'},

{src:'rakafot1', w:1400, h:1049, title:'מצפה רבדים', tags: 'rakafot01', month:'1'},
{src:'rakafot2', w:1400, h:1050, title:'מצפה הסלע', tags: 'rakafot01', month:'1'},
{src:'rakafot3', w:1400, h:931, title:'מצפה הסלע', tags: 'rakafot01', month:'1'},
{src:'rakafot4', w:600, h:900, title:'מצפה הסלע', tags: 'rakafot01', month:'1'},

{src:'irit1', w:1400, h:933, title:'מצפה רבדים', tags: 'irit01', month:'1'},
{src:'irit2', w:1400, h:1050, title:'מצפה הסלע', tags: 'irit01', month:'1'},
{src:'irit3', w:1400, h:1050, title:'מצפה רבדים', tags: 'irit01', month:'1'},
{src:'irit4', w:1400, h:1050, title:'מצפה הסלע', tags: 'irit01', month:'1'},
{src:'irit5', w:1400, h:1050, title:'מצפה רבדים', tags: 'irit01', month:'1'},

{src:'narkis20', w:1400, h:1050, title:'נחל העץ', tags: 'narkis01', month:'1'},
{src:'narkis21', w:1400, h:1050, title:'נחל העץ', tags: 'narkis01', month:'1'},
{src:'narkis22', w:1400, h:1050, title:'נחל העץ', tags: 'narkis01', month:'1'},
{src:'narkis23', w:1400, h:1050, title:'נחל העץ', tags: 'narkis01', month:'1'},

/*feb*/
{src:'shkediya20', w:1400, h:933, title:'אפרת', tags: 'shkediya02', month:'2'},
{src:'shkediya21', w:1400, h:933, title:"עין יצחק (עין סג'מה)", tags: 'shkediya02', month:'2'},
{src:'shkediya22', w:1400, h:1050, title:'נחל ליבנה', tags: 'shkediya02', month:'2'},
{src:'shkediya23', w:1400, h:1050, title:'נחל נעמנים', tags: 'shkediya02', month:'2'},
{src:'shkediya24', w:1400, h:1050, title:'חורבת ברכות, מגדל עוז', tags: 'shkediya02', month:'2'},
{src:'shkediya25', w:1400, h:933, title:'חורבת ברכות, מגדל עוז', tags: 'shkediya02', month:'2'},
{src:'shkediya26', w:1400, h:1050, title:'חורבת ברכות, מגדל עוז', tags: 'shkediya02', month:'2'},
{src:'shkediya27', w:1400, h:1050, title:'חורבת ברכות, מגדל עוז', tags: 'shkediya02', month:'2'},
{src:'shkediya28', w:1400, h:1050, title:'חורבת ברכות, מגדל עוז', tags: 'shkediya02', month:'2'},
{src:'shkediya29', w:1400, h:1049, title:'נחל הפירים', tags: 'shkediya02', month:'2'},
{src:'shkediya30', w:1400, h:1050, title:'נחל הפירים', tags: 'shkediya02', month:'2'},
{src:'shkediya31', w:1400, h:933, title:'נחל הפירים', tags: 'shkediya02', month:'2'},
{src:'shkediya32', w:1400, h:933, title:'אמת הביאר', tags: 'shkediya02', month:'2'},
{src:'shkediya33', w:720, h:900, title:'אמת הביאר', tags: 'shkediya02', month:'2'},
{src:'shkediya34', w:1400, h:935, title:'אמת הביאר', tags: 'shkediya02', month:'2'},
{src:'shkediya35', w:1400, h:935, title:'נחל תקוע', tags: 'shkediya02', month:'2'},
{src:'shkediya36', w:1400, h:933, title:'נחל תקוע', tags: 'shkediya02', month:'2'},
{src:'shkediya37', w:675, h:900, title:'נחל תקוע', tags: 'shkediya02', month:'2'},
{src:'shkediya38', w:1400, h:1050, title:'שלוחת המשואות', tags: 'shkediya02', month:'2'},

{src:'irit10', w:675, h:900, title:'נחל תקוע', tags: 'irit02', month:'2'},
{src:'irit11', w:1400, h:1050, title:'מצפה הסלע', tags: 'irit02', month:'2'},
{src:'irit12', w:1400, h:1050, title:'מצפה הסלע', tags: 'irit02', month:'2'},
{src:'irit13', w:1400, h:1050, title:'אזור בת עין ב', tags: 'irit02', month:'2'}, /*****חסר מיקום****/
{src:'irit14', w:1400, h:1050, title:'אזור בת עין ב', tags: 'irit02', month:'2'}, /*****חסר מיקום****/
{src:'irit15', w:1800, h:625, title:'אזור בת עין ב', tags: 'irit02', month:'2'},  /*****חסר מיקום****/
{src:'irit16', w:1400, h:933, title:'נחל תקוע', tags: 'irit02', month:'2'},
{src:'irit17', w:600, h:900, title:'נחל תקוע', tags: 'irit02', month:'2'},

{src:'kalanit30', w:1400, h:932, title:'סינגל דרך האבות', tags: 'kalanit02', month:'2'},
{src:'kalanit31', w:1400, h:788, title:'חוות ספר המדבר, תקוע ה', tags: 'kalanit02', month:'2'},
{src:'kalanit32', w:1400, h:1050, title:'חורבת ברכות, מגדל עוז', tags: 'kalanit02', month:'2'},
{src:'kalanit33', w:1400, h:1050, title:'שלוחת המשואות', tags: 'kalanit02', month:'2'},
{src:'kalanit34', w:1400, h:1050, title:'ואדי גן עדן', tags: 'kalanit02', month:'2'},
{src:'kalanit35', w:1400, h:1050, title:"חירבת ג'ומג'ום", tags: 'kalanit02', month:'2'},
{src:'kalanit36', w:675, h:900, title:'יער בבת עין', tags: 'kalanit02', month:'2'}, /*****חסר מיקום****/
{src:'kalanit37', w:1400, h:1050, title:'יער בבת עין', tags: 'kalanit02', month:'2'}, /*****חסר מיקום****/
{src:'kalanit38', w:1400, h:1050, title:'יער בבת עין', tags: 'kalanit02', month:'2'}, /*****חסר מיקום****/
{src:'kalanit39', w:1400, h:1050, title:'נחל ליבנה', tags: 'kalanit02', month:'2'},
{src:'kalanit40', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit02', month:'2'},
{src:'kalanit41', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit02', month:'2'},
{src:'kalanit42', w:1400, h:1050, title:'עין מסלע (עין אבו כלאב)', tags: 'kalanit02', month:'2'},
{src:'kalanit43', w:1400, h:1050, title:"חירבת ג'ומג'ום", tags: 'kalanit02', month:'2'},
{src:'kalanit44', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit02', month:'2'},
{src:'kalanit45', w:1400, h:933, title:'מצפה הסלע', tags: 'kalanit02', month:'2'},
{src:'kalanit46', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit02', month:'2'},

{src:'tzivoni1', w:1400, h:933, title:'חוות ספר המדבר, תקוע ה', tags: 'tzivoni02', month:'2'},
{src:'tzivoni2', w:506, h:900, title:'חוות ספר המדבר, תקוע ה', tags: 'tzivoni02', month:'2'},
{src:'tzivoni3', w:1400, h:933, title:'חוות ספר המדבר, תקוע ה', tags: 'tzivoni02', month:'2'},

{src:'tzipornit1', w:1400, h:1127, title:'נצר', tags: 'tzipornit02', month:'2'},
{src:'tzipornit2', w:1400, h:788, title:'דרך האבות, ליד אלון שבות', tags: 'tzipornit02', month:'2'}, /*****חסר מיקום****/
{src:'tzipornit3', w:1400, h:787, title:'גבעת החי"ש', tags: 'tzipornit02', month:'2'},

/*march*/
{src:'irusshahum1', w:1400, h:1052, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},
{src:'irusshahum2', w:675, h:900, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},
{src:'irusshahum3', w:1400, h:933, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},
{src:'irusshahum4', w:1400, h:1050, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},
{src:'irusshahum5', w:675, h:900, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},
{src:'irusshahum6', w:1400, h:1050, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},
{src:'irusshahum7', w:600, h:900, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},
{src:'irusshahum8', w:1400, h:1050, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},
{src:'irusshahum9', w:1400, h:1050, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},
{src:'irusshahum10', w:1400, h:1000, title:'נחל תקוע', tags: 'irushashahum03', month:'3'},

{src:'kalanit50', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit03', month:'3'},
{src:'kalanit51', w:1400, h:875, title:'נבי דניאל', tags: 'kalanit03', month:'3'},
{src:'kalanit52', w:1400, h:573, title:'נבי דניאל', tags: 'kalanit03', month:'3'},
{src:'kalanit53', w:1400, h:1050, title:'נבי דניאל', tags: 'kalanit03', month:'3'},
{src:'kalanit54', w:1400, h:1050, title:'יער תקוע', tags: 'kalanit03', month:'3'},
{src:'kalanit55', w:1400, h:1050, title:'יער תקוע', tags: 'kalanit03', month:'3'},
{src:'kalanit56', w:1400, h:1050, title:'יער תקוע', tags: 'kalanit03', month:'3'},
{src:'kalanit57', w:1400, h:1050, title:'יער תקוע', tags: 'kalanit03', month:'3'},
{src:'kalanit58', w:1400, h:1050, title:'עליה לשדה בועז', tags: 'kalanit03', month:'3'},
{src:'kalanit59', w:1400, h:1050, title:'עליה לשדה בועז', tags: 'kalanit03', month:'3'},
{src:'kalanit60', w:1400, h:1050, title:'עין מסלע (עין אבו כלאב)', tags: 'kalanit03', month:'3'},
{src:'kalanit61', w:1400, h:933, title:'עין מסלע (עין אבו כלאב)', tags: 'kalanit03', month:'3'},
{src:'kalanit62', w:1400, h:1050, title:'עין מסלע (עין אבו כלאב)', tags: 'kalanit03', month:'3'},
{src:'kalanit63', w:1400, h:1050, title:'מצפה הסלע', tags: 'kalanit03', month:'3'},
{src:'kalanit64', w:1400, h:1050, title:'נחל רבדים', tags: 'kalanit03', month:'3'},
{src:'kalanit65', w:1400, h:1050, title:'נחל רבדים', tags: 'kalanit03', month:'3'},
{src:'kalanit66', w:1400, h:1050, title:'נחל רבדים', tags: 'kalanit03', month:'3'},
{src:'kalanit67', w:1400, h:1050, title:'יער באפרת', tags: 'kalanit03', month:'3'}, /*****חסר מיקום****/
{src:'kalanit68', w:1400, h:1050, title:'דרך האבות - אבן המיל ה-11', tags: 'kalanit03', month:'3'},
{src:'kalanit69', w:1400, h:1050, title:'דרך האבות - אבן המיל ה-11', tags: 'kalanit03', month:'3'},

{src:'sahlav1', w:1400, h:933, title:'יער ארץ האיילים', tags: 'sahlav03', month:'3'},
{src:'sahlav2', w:1400, h:1050, title:'יער ארץ האיילים', tags: 'sahlav03', month:'3'},
{src:'sahlav3', w:1400, h:1050, title:'דרך האבות - אבן המיל ה-11', tags: 'sahlav03', month:'3'},
{src:'sahlav4', w:1400, h:1050, title:'אפרת, דגן', tags: 'sahlav03', month:'3'},
{src:'sahlav5', w:1400, h:1050, title:'נבי דניאל', tags: 'sahlav03', month:'3'},
{src:'sahlav6', w:1400, h:1050, title:'אוכף המוכתר', tags: 'sahlav03', month:'3'}, /*****חסר מיקום****/
{src:'sahlav7', w:1400, h:1050, title:'נחל הפירים', tags: 'sahlav03', month:'3'},
{src:'sahlav8', w:1400, h:1120, title:'יער בזית', tags: 'sahlav03', month:'3'},
{src:'sahlav9', w:1400, h:933, title:'יער בזית', tags: 'sahlav03', month:'3'},
{src:'sahlav10', w:1400, h:1050, title:'יער בזית', tags: 'sahlav03', month:'3'},
{src:'sahlav11', w:1300, h:975, title:'מצפה הסלע', tags: 'sahlav03', month:'3'},
{src:'sahlav12', w:1400, h:1050, title:'מצפה הסלע', tags: 'sahlav03', month:'3'},
{src:'sahlav13', w:1400, h:933, title:'מצפה הסלע', tags: 'sahlav03', month:'3'},
{src:'sahlav14', w:1400, h:1118, title:'מצפה הסלע', tags: 'sahlav03', month:'3'},
{src:'sahlav15', w:599, h:900, title:'מצפה הסלע', tags: 'sahlav03', month:'3'},
{src:'sahlav16', w:1400, h:1011, title:'דרך האבות - אבן המיל ה-11', tags: 'sahlav03', month:'3'},

{src:'tzivoni10', w:1400, h:1050, title:'מצפה הסלע', tags: 'tzivoni03', month:'3'},
{src:'tzivoni11', w:1400, h:1052, title:'מצפה הסלע', tags: 'tzivoni03', month:'3'},
{src:'tzivoni12', w:1400, h:1050, title:'מצפה הסלע', tags: 'tzivoni03', month:'3'},
{src:'tzivoni13', w:1400, h:1050, title:'מצפה הסלע', tags: 'tzivoni03', month:'3'},
{src:'tzivoni14', w:1400, h:1050, title:'שמורת הר כנוב (נחל עוזררים)', tags: 'tzivoni03', month:'3'},

{src:'tzaharon1', w:1400, h:1050, title:'עין מסלע (עין אבו כלאב)', tags: 'tzaharonim03', month:'3'},
{src:'tzaharon2', w:506, h:900, title:'עין מסלע (עין אבו כלאב)', tags: 'tzaharonim03', month:'3'},
{src:'tzaharon3', w:675, h:900, title:'עין מסלע (עין אבו כלאב)', tags: 'tzaharonim03', month:'3'},
{src:'tzaharon4', w:675, h:900, title:'עין מסלע (עין אבו כלאב)', tags: 'tzaharonim03', month:'3'},
{src:'tzaharon5', w:1400, h:1049, title:'עין מסלע (עין אבו כלאב)', tags: 'tzaharonim03', month:'3'},

{src:'tzipornit10', w:1400, h:788, title:'נצר', tags: 'tzipornit03', month:'3'},
{src:'tzipornit11', w:1400, h:788, title:'נחל נעמנים', tags: 'tzipornit03', month:'3'},
{src:'tzipornit12', w:1400, h:933, title:'גבעת החי"ש', tags: 'tzipornit03', month:'3'},
{src:'tzipornit13', w:1400, h:1050, title:"רוג'ום א-סבית", tags: 'tzipornit03', month:'3'}, /*****חסר מיקום****/

];


function openPhotoSwipe(subsetTag) {
    
	//console.log('Input tag = '+subsetTag);
	
// build subset of allPhotos according to TAG
	let itemsSubset = [];
	let photoItem = {};
	if (subsetTag == 'ALL') {
		itemsSubset = allPhotos;
		// create full image urls
		itemsSubset.forEach(item => {
			item.src = 'images/map/big/'+item.src+'.jpg';
		});
	}
	else {
		for (i = 0; i < allPhotos.length; i++) {
			//console.log('item['+i+'].tags='+allPhotos[i].tags);
			tagIndex = allPhotos[i].tags.indexOf(subsetTag);
			//console.log('x='+x);
			if (tagIndex != -1) {
				photoItem = {};
				// object copy is needed here in order not to change original allPhotos array
				Object.assign(photoItem, allPhotos[i]); 
				// create full image url before adding to itemsSubset
				photoItem.src = 'images/map/big/'+photoItem.src+'.jpg';
				itemsSubset.push(photoItem);
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
