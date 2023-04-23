
const loc_title_index = 0;
const loc_pos1_index = 1;
const loc_pos2_index = 2;
const loc_numofphotos_index = 3;
const loc_markertype_index = 4;
const loc_ext_index = 5;
const loc_hebtitle_index = 6;

let all_locations = [
["aliyalesdeboaz","31.687242221358566","35.15778575105672","6","point","jpg","עליה לשדה בועז"],
["alonhaboded","31.65737218581017","35.12124601764684","1","point","jpg","האלון הבודד"],
["amathabiyar","31.656467565110308","35.14638981911344","7","point","jpg","אמת הביאר"],
["amatmaim","31.677454915713902","35.16824904842382","3","point","jpg","אמת המים"],
["artas","31.686559791116537", "35.18639151020055","1","point","jpg","ארטס"],
["batain","31.65766121612098", "35.10247898987954","7","point","jpg","בת עין"],
["birkatslav","31.64723512312848", "35.1110268013001","4","point","jpg","ברכת שלו"],
["brihatnaamanim","31.666947478320214", "35.13321403427129","4","point","jpg","בריכת נעמנים"],
["brihatnofelazar","31.662372502381672","35.13753239078527","4","point","jpg","בריכת נוף אלעזר"],
["brihotshlomo","31.687719234836052", "35.17292682094579","3","point","jpg","בריכות שלמה"],
["derehavot","31.671707131791216","35.136631168556264","6","point","jpg","דרך האבות - אבן המיל ה-11"],
["direlbanat","31.67764208935171","35.17065230770116","5","point","jpg","דיר אל בנת"],
["efratdagan","31.680360629771215", "35.17141405506139","3","point","jpg","דגן"],
["efratdekel","31.668773753094715","35.16083542270667","2","point","jpg","דקל"],
["efratgefen","31.654491326924113", "35.14673773212438","1","point","jpg","גפן"],
["efratparkhaasor","31.65733611566918", "35.153073109817555","2","point","jpg","פארק העשור"],
["efratparktzvika","31.674466934238794", "35.16823831958776","2","point","jpg","פארק צביקה"],
["efratrimon","31.6501476645803","35.14941535088224","1","point","jpg","אפרת - רימון"],
["efrattamar","31.68038802020158","35.16397897167212","5","point","jpg","תמר"],
["efratzait","31.674278786670797","35.16704282852811","1","point","jpg","זית"],
["einabukleb","31.66941978919852","35.113218166065266","9","point","jpg","עין אבו כלאב"],
["eindubek","31.65990588537998","35.113264537779514","7","point","jpg","בריכת דובק"],
["einelkasis","31.689914834636458","35.14779452247626","14","point","jpg","עין אל-קסיס"],
["einelmeara","31.67050868087125","35.15433374805457","10","point","jpg","עין אל מערה"],
["einhubela","31.659049072956652","35.10770700070066","6","point","jpg","עין חובלה"],
["einlivne","31.66331083992055","35.09675554129274","7","point","jpg","עין ליבנה"],
["einsajme","31.659591495439255","35.11299796358264","7","point","jpg","עין יצחק-סג'מה"],
["eintzurim","31.669294234830453","35.12202385826116","10","point","jpg","עין צורים"],
["ekevhaarbaa","31.667762196247086", "35.136126913261464","4","point","jpg","יקב הארבעה"],
["elazar","31.662052884864345", "35.13995710773473","1","point","jpg","אלעזר"],
["givathahish","31.65734981428064","35.134184993934696","5","point","jpg","גבעת החיש"],
["givathaminzar","31.639028400207103","35.12629929943091","5","point","jpg","גבעת המנזר"],
["givatoz","31.63684529907876","35.13628248138433","5","point","jpg","גבעת עוז"],
["givatseuba","31.658824686307618", "35.118644274902394","3","point","jpg","הגבעה הצהובה"],
["hanarugot","31.59889317281462","35.21685067577367","4","point","jpg","חאן ערוגות"],
["haukaf","31.627285176025502","35.26408974094396","8","point","jpg","האוכף"],
["havateden","31.687875335092667", "35.141759940902645","3","point","jpg","חוות עדן"],
["havateitam","31.674298015684574", "35.192544497680714","3","point","jpg","חוות עיטם"],
["havatharkanub","31.585916099857286", "35.19993130130773","7","point","jpg","חוות הר כנוב"],
["havatkashuela","31.675549819120103", "35.102782079498226","5","point","jpg","חוות קשואלה"],
["havatneveori","31.711929321531922", "35.16495529575353","2","point","jpg","חוות נווה אורי"],
["havatsfarhamidbar","31.63344795598882","35.24662176029722","6","point","jpg","חוות ספר המדבר"],
["herodion","31.66572385413287","35.24166647357947","11","point","gif","הרודיון"],
["hirbethubela","31.659992466979684", "35.10773841304784","2","point","jpg","חירבת חובלה"],
["hirbetjumjum","31.668648","35.101899","19","point","jpg","חירבת ג'ומג'ום"],
["hurvasdeboaz","31.69290346003697", "35.14543954296117","2","point","jpg","חורבה ליד שדה בועז"],
["hurvatariv","31.68342830774587","35.154537595939686","3","point","jpg","חורבת עריב"],
["hurvatbrachot","31.643440117590835","35.14324013156896","20","point","jpg","חורבת ברכות במגדל עוז"],
["hurvathaklili","31.65502787079065","35.10645363492971","2","point","jpg","חורבת חכלילי"],
["kivshansid","31.679171420792592","35.15014413757329","3","point","jpg","כבשן סיד מודרני"],
["maaleamos","31.596297902840682","35.22976819438939","3","point","jpg","מעלה עמוס"],
["maalerehavam","31.647141711621387", "35.25984112186437","3","point","jpg","מעלה רחבעם"],
["matzokavot","31.671102143614863","35.13614837093358","20","point","jpg","מצוק האבות"],
["meara","31.663155560651408","35.11018995208747","1","point","jpg","מערה"],
["mearatidba","31.669605837631902","35.08245859308248","3","point","jpg","מערת אידבע"],
["mikvederehavot","31.6610072713047", "35.13063911361699","5","point","jpg","מקווה בדרך אבות"],
["mikvegivatahish","31.6554328895618", "35.13052416733926","5","point","jpg","מקווה בגבעת החיש"],
["mikvesdeboaz","31.693712506257572","35.15053574008947","1","point","jpg","מקווה שדה בועז"],
["minzarrusi","31.645577396082345","35.125462450218265","14","point","jpg","מנזר הרוסי"],
["mishlathamesh","31.671286","35.108558","12","point","jpg","משלט הנקודה החמישית"],
["mitzpehasela","31.664591530824907","35.10027114315038","17","point","jpg","מצפה הסלע"],
["mitzperevadim","31.674161954829643", "35.114798375884945","9","point","jpg","מצפה רבדים"],
["mitzpetzurim","31.66667555524874", "35.12051645679479","2","point","jpg","מצפה צורים"],
["mitzporhabanim","31.65986575834977","35.122866071891835","8","point","jpg","מצפור לזכר הבנים"],
["mitzporhaelef","31.683083711474527","35.14508791260869","2","point","jpg","מצפור האלף"],
["mitzportzvika","31.65560550817159","35.11019531650548","6","point","jpg","מצפור צביקה"],
["nahalamos","31.61155778365477","35.260656513404896","3","point","jpg","נחל עמוס"],
["nahaletziona","31.701131405910562", "35.14700595302587","1","point","jpg","נחל עציונה"],
["nahalhaetz","31.6726270750532","35.11404696865087","16","point","jpg","נחל העץ"],
["nahalhelets","31.719748843873173","35.16027752323157","10","point","jpg","נחל חלץ"],
["nahallivne","31.661414547015998", "35.09977800540155","11","point","jpg","נחל ליבנה"],
["nahalnaamanim","31.66683904212615","35.131746865940144","3","point","jpg","נחל נעמנים"],
["nahalozrarim","31.58311939529301","35.217011608314564","6","point","jpg","נחל עוזררים"],
["nahalpirim","31.674398300128082","35.161425508689945","26","point","jpg","נחל הפירים"],
["nahalrevadim","31.675522168083937","35.11805955333715","12","point","jpg","נחל רבדים"],
["nahalshvut","31.64402924413138","35.118102468681386","1","point","jpg","נחל שבות"],
["nahaltkoa","31.64042592339606","35.23539010448462","48","point","jpg","נחל תקוע"],
["nahaltsofit","31.65564203847803","35.09877447052007","9","point","jpg","נחל צופית"],
["nebidaniel","31.687536646234864","35.146099366378834","5","point","jpg","נבי דניאל"],
["netivhaavot","31.660810932075023","35.132436193656986","1","point","jpg","נתיב האבות"],
["netzer","31.656272184005502","35.13943675918584","4","point","jpg","נצר"],
["nevedaniel","31.67790230573368","35.142750061480115","8","point","jpg","נווה דניאל"],
["otobus","31.662171140609168","35.103393234443715","2","point","jpg","אוטובוס"],
["ozvegaon","31.641550053820243","35.13378880116147","9","point","jpg","עוז וגאון"],
["parkamothamaim","31.678128282525968","35.17247620983129","13","point","jpg","פארק אמות המים"],
["pirhaama","31.66501158785595", "35.15386167926793","3","point","jpg","פיר האמה"],
["pneikedem","31.590997478962343", "35.19357983036046","1","point","jpg","פני קדם"],
["rojumasabit","31.653030085369252","35.14042917652135","12","point","jpg","שלולית חורף רוג'ום א-סבית"],
["roshtzurim","31.668116298312334","35.12577358646398","3","point","jpg","ראש צורים"],
["sdebar","31.6609399224298","35.244335271549275","1","point","jpg","שדה בר"],
["sdeboaz","31.693816346658057","35.147842802238515","5","point","jpg","שדה בועז"],
["shluhathamasuot","31.664438780664813","35.103371776771596","12","point","jpg","שלוחת המשואות"],
["shvilhanofhamaaravi","31.659021930242", "35.10699582986062","6","point","jpg","שביל הנוף המערבי"],
["shviltzvika","31.656291590593515","35.10961327714925","6","point","jpg","שביל צביקה"],
["singlederehavot","31.667156","35.134505","14","point","jpg","סינגל דרך האבות"],
["singlenevedaniel","31.682376087362503","35.13958428068166","3","point","jpg","סינגל נווה דניאל"],
["singlesovevroshtzurim","31.671681227912007","35.11882934732442","1","point","jpg","סינגל סובב ראש צורים"],
["sovevdagan","31.682072554314008","35.176170385805676","5","point","jpg","מורדות הדגן"],
["tazpitzofit","31.649349481394115","35.10384384555822","6","point","jpg","תצפית צופית"],
["tekoad","31.63549972582843","35.24271789951331","1","point","jpg","תקוע ד"],
["teleitam","31.685062535279727","35.17943922443395","7","point","jpg","תל עיטם"],
["tkoa","31.648792354941072","35.22953215999608","5","point","jpg","תקוע"],
["tzometnahalhelmoniyot","31.639178654927477","35.25851074619298","3","point","jpg","צומת נחל החלמוניות"],
["tzukeibatain","31.660116892403202","35.09559337062841","12","point","jpg","צוקי בת עין (מצלעת בת עין)"],
["ukafamuhtar","31.644399158888454","35.11032942695623","5","point","jpg","אוכף המוכתר"],
["vadibakor","31.633667189856027","35.239306129646366","4","point","jpg","ואדי בקור"],
["vadifukin","31.69433782910991", "35.085647739601185","10","point","jpg","ואדי פוקין"],
["vadihelmoniyot","31.64339855604563","35.25780264301305","7","point","jpg","ואדי חלמויות"],
["wadiganeden","31.66776930641217","35.105903782081654","6","point","jpg","ואדי גן עדן (נחל משואות)"],
["waditau","31.690464","35.142448","9","point","jpg","ואדי טאו"],
["yaareretzayalim","31.66090315318798", "35.11733842782205","8","point","jpg","יער ארץ האיילים"],
["yaartkoa","31.658915549405734","35.2285987512589","26","point","jpg","יער תקוע"],
["yaarzait","31.666673534006847","35.162305273246815","4","point","jpg","יער בזית"],
];
