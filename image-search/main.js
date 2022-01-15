const all_images = [
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz1","2020","9","גוש עציון,עליה לשדב בועז,פריחה,חצב"],
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz2","2020","9","גוש עציון,עליה לשדב בועז"],
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz3","2020","9","גוש עציון,עליה לשדב בועז,פריחה,חצב"],
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz4","2021","9","עליה לשדה בועז,חצב,פריחה,סתיו,גוש עציון,"],
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz5","2021","3","עליה לשדה בועז,פריחה,אביב,גוש עציון,"],
["aliyalesdeboaz","../images/map/big/aliyalesdeboaz6","2021","3","עליה לשדה בועז,פריחה,אביב,גוש עציון,אופניים,"],
["alonhaboded","../images/map/big/alonhaboded1","2020","11","אלון הבודד,גוש עציון,סתיו,"],
["alonhaboded","../images/map/big/alonhaboded2","2021","2","אלון הבודד,שלג,גוש עציון,חורף,"],
["alonhaboded","../images/map/big/alonhaboded3","2021","1","אלון הבודד,גוש עציון,"],
["alonhaboded","../images/map/big/alonhaboded4","2021","6","אלון הבודד,גוש עציון,קיץ,"],
["amathabiyar","../images/map/big/amathabiyar1","2021","2","אמת הביאר,גוש עציון,אביב,פריחה,"],
["amathabiyar","../images/map/big/amathabiyar4","2021","2","אמת הביאר,גוש עציון,אביב,פריחה,"],
["amathabiyar","../images/map/big/amathabiyar5","2021","2","אמת הביאר,גוש עציון,אביב,פריחה,"],
["amathabiyar","../images/map/big/amathabiyar3","2018","3","אמת הביאר,גוש עציון,אביב,פריחה,"],
["amathabiyar","../images/map/big/amathabiyar2","2017","12","אמת הביאר,גוש עציון,חורף,"],
["amathabiyar","../images/map/big/amathabiyar6","2021","1","אמת הביאר,חורף,גוש עציון,"],
["amathabiyar","../images/map/big/amathabiyar7","2021","2","אמת הביאר,שקדיה,פריחה,חורף,גוש עציון,"],
["amatmaim","../images/map/big/amatmaim1","2020","12","אמת מים,אפרת,חורף,גוש עציון,"],
["amatmaim","../images/map/big/amatmaim2","2020","12","אמת מים,אפרת,חורף,גוש עציון,"],
["amatmaim","../images/map/big/amatmaim3","2020","12","אמת מים,אפרת,חורף,גוש עציון,"],
["batain","../images/map/big/batain1","2019","4","בת עין,שקיעה,נוף,תצפית,אביב,גוש עציון,"],
["batain","../images/map/big/batain3","2017","2","בת עין,אופניים,נוף,תצפית,אביב,גוש עציון,"],
["batain","../images/map/big/batain4","2021","8","גוש עציון,בת עין,שביל הנוף המערבי,נוף,קיץ"],
["batain","../images/map/big/batain4","2021","8","בת עין,שביל הנוף המערבי,בוקר,קיץ,גוש עציון,נוף,"],
["batain","../images/map/big/batain5","2021","3","בת עין,נוף,אביב,גוש עציון,"],
["batain","../images/map/big/batain6","2021","3","בת עין,ים,נוף,תצפית,אביב,גוש עציון,"],
["batain","../images/map/big/batain7","2021","5","בת עין,תצפית,נוף,שקיעה,אביב,גוש עציון,"],
["brihotshlomo","../images/map/big/brihotshlomo1","2021","3","בריכות שלמה,ארכאולוגיה,אביב,גוש עציון,"],
["brihotshlomo","../images/map/big/brihotshlomo2","2021","3","בריכות שלמה,ארכאולוגיה,אביב,גוש עציון,"],
["brihotshlomo","../images/map/big/brihotshlomo3","2021","3","בריכות שלמה,ארכאולוגיה,אביב,גוש עציון,"],
["derehavot","../images/map/big/derehavot1","2020","3","דרך האבות,אביב,נוף,תצפית,גוש עציון,פריחה,"],
["derehavot","../images/map/big/derehavot2","2020","6","דרך האבות,שקיעה,קיץ,גוש עציון,נוף,תצפית,"],
["derehavot","../images/map/big/derehavot3","2020","3","דרך האבות,נוף,תצפית,אביב,גוש עציון,"],
["derehavot","../images/map/big/derehavot4","2021","4","דרך אבות,אבן המיל,שקיעה,תצפית,נוף,אביב,גוש עציון,"],
["derehavot","../images/map/big/derehavot5","2021","4","דרך אבות,אבן המיל,שקיעה,תצפית,נוף,אביב,גוש עציון,"],
["derehavot","../images/map/big/derehavot6","2021","4","דרך אבות,נוף,קיץ,גוש עציון,"],
["direlbanat","../images/map/big/direlbanat1","2018","3","דיר אל בנת,ארכאולוגיה,אביב,גוש עציון,"],
["direlbanat","../images/map/big/direlbanat2","2018","3","דיר אל בנת,ארכאולוגיה,אביב,גוש עציון,"],
["direlbanat","../images/map/big/direlbanat5","2018","3","דיר אל בנת,ארכאולוגיה,אביב,גוש עציון,פריחה,"],
["direlbanat","../images/map/big/direlbanat3","2020","12","דיר אל בנת,ארכאולוגיה,חורף,גוש עציון,"],
["direlbanat","../images/map/big/direlbanat4","2020","12","דיר אל בנת,ארכאולוגיה,חורף,גוש עציון,"],
["efratdagan","../images/map/big/efratdagan1","2021","3","אפרת,דגן,פריחה,נוף,אביב,גוש עציון,"],
["efratdagan","../images/map/big/efratdagan2","2021","3","אפרת,דגן,פריחה,נוף,אביב,גוש עציון,"],
["efratdagan","../images/map/big/efratdagan3","2021","3","אפרת,דגן,פריחה,אביב,גוש עציון,"],
["efratdekel","../images/map/big/efratdekel1","2019","5","אפרת,דקל,אביב,גוש עציון,פריחה,"],
["efratdekel","../images/map/big/efratdekel2","2021","4","אפרת,דקל,שקיעה,נוף,אביב,גוש עציון,"],
["efratparkhaasor","../images/map/big/efratparkhaasor1","2021","8","אפרת,פארק העשור,קיץ,גוש עציון,"],
["efratparkhaasor","../images/map/big/efratparkhaasor2","2021","2","אפרת,פארק העשור,שלג,פריחה,חורף,גוש עציון,"],
["efratparkhaasor","../images/map/big/efratparkhaasor3","2022","1","אפרת,פארק העשור,חורף,גוש עציון,"],
["efratparkhaasor","../images/map/big/efratparkhaasor4","2022","1","אפרת,פארק העשור,חורף,גוש עציון,"],
["efratparktzvika","../images/map/big/efratparktzvika1","2021","6","פארק צביקה,אפרת,זית,שקיעה,קיץ,גוש עציון,"],
["efratparktzvika","../images/map/big/efratparktzvika2","2021","6","פארק צביקה,אפרת,זית,שקיעה,קיץ,גוש עציון,"],
["efratrimon","../images/map/big/efratrimon1","2017","11","אפרת,סתיו,גוש עציון,"],
["efrattamar","../images/map/big/efrattamar1","2018","11","אפרת,תמר,סתיו,גוש עציון,נוף,"],
["efrattamar","../images/map/big/efrattamar2","2018","3","אפרת,תמר,אופניים,פריחה,אביב,גוש עציון,"],
["efrattamar","../images/map/big/efrattamar3","2021","2","אפרת,תמר,שלג,לילה,חורף,גוש עציון,"],
["efrattamar","../images/map/big/efrattamar4","2021","2","אפרת,תמר,שלג,לילה,חורף,גוש עציון,"],
["efrattamar","../images/map/big/efrattamar5","2021","2","אפרת,תמר,שלג,פריחה,חורף,גוש עציון,"],
["efratzait","../images/map/big/efratzait1","2018","4","אפרת,זית,אביב,גוש עציון,"],
["einabukleb","../images/map/big/einabukleb1","2017","4","עין אבו כלאב,מעיין,אביב,גוש עציון,נוף,"],
["einabukleb","../images/map/big/einabukleb2","2020","11","עין אבו כלאב,מעיין,סתיו,גוש עציון,"],
["einabukleb","../images/map/big/einabukleb3","2019","2","עין אבו כלאב,מעיין,חורף,גוש עציון,"],
["einabukleb","../images/map/big/einabukleb4","2019","2","עין אבו כלאב,מעיין,חורף,גוש עציון,"],
["einabukleb","../images/map/big/einabukleb5","2021","2","עין אבו כלאב,פריחה,אביב,גוש עציון,"],
["einabukleb","../images/map/big/einabukleb6","2021","4","עין אבו כלאב,מעיין,אביב,גוש עציון,"],
["einabukleb","../images/map/big/einabukleb7","2021","6","עין אבו כלאב,מעיין,קיץ,גוש עציון,"],
["einabukleb","../images/map/big/einabukleb8","2021","6","עין אבו כלאב,מעיין,קיץ,גוש עציון,"],
["einabukleb","../images/map/big/einabukleb9","2021","6","עין אבו כלאב,מעיין,קיץ,גוש עציון,"],
["eindubek","../images/map/big/eindubek1","2021","6","גוש עציון,בריכת דובק,מעיין,קיץ"],
["eindubek","../images/map/big/eindubek2","2020","2","בריכת דובק,מעיין,אביב,גוש עציון,"],
["eindubek","../images/map/big/eindubek3","2021","1","בריכת דובק,מעיין,חורף,גוש עציון,"],
["eindubek","../images/map/big/eindubek4","2021","2","בריכת דובק,מעיין,חורף,גוש עציון,"],
["eindubek","../images/map/big/eindubek5","2021","2","בריכת דובק,מעיין,חורף,גוש עציון,פריחה,"],
["eindubek","../images/map/big/eindubek6","2021","2","בריכת דובק,קפה,מעיין,חורף,גוש עציון,"],
["eindubek","../images/map/big/eindubek7","2021","2","בריכת דובק,פריחה,מעיין,חורף,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis1","2019","4","עין אל קסיס,מעיין,אביב,גוש עציון,פריחה,"],
["einelkasis","../images/map/big/einelkasis2","2019","3","עין אל קסיס,מעיין,אביב,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis3","2019","4","עין אל קסיס,מעיין,אביב,גוש עציון,פריחה,"],
["einelkasis","../images/map/big/einelkasis4","2019","3","עין אל קסיס,מעיין,אביב,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis5","2019","4","עין אל קסיס,מעיין,אביב,גוש עציון,פריחה,אופניים,"],
["einelkasis","../images/map/big/einelkasis6","2019","3","עין אל קסיס,מעיין,אביב,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis7","2019","4","עין אל קסיס,מעיין,אביב,פריחה,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis8","2019","4","עין אל קסיס,מעיין,אביב,פריחה,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis9","2019","4","עין אל קסיס,מעיין,אביב,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis10","2021","8","גוש עציון,עין אל קסיס,מעיין,קיץ,זריחה"],
["einelkasis","../images/map/big/einelkasis11","2021","11","עין אל קסיס,מעיין,סתיו,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis12","2021","3","עין אל קסיס,מעיין,אביב,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis13","2021","3","עין אל קסיס,מעיין,אביב,גוש עציון,"],
["einelkasis","../images/map/big/einelkasis14","2021","3","עין אל קסיס,פריחה,אביב,גוש עציון,"],
["einelmeara","../images/map/big/einelmeara3","2021","3","עין אל מערה,מערה,אביב,גוש עציון,"],
["einelmeara","../images/map/big/einelmeara1","2021","3","עין אל מערה,מערה,אביב,גוש עציון,מעיין,"],
["einelmeara","../images/map/big/einelmeara2","2021","3","עין אל מערה,מערה,אביב,גוש עציון,מעיין,"],
["einelmeara","../images/map/big/einelmeara4","2019","12","עין אל מערה,נחל הפירים,מעיין,סתיו,גוש עציון,"],
["einelmeara","../images/map/big/einelmeara6","2019","12","עין אל מערה,נחל הפירים,מעיין,סתיו,גוש עציון,נוף,"],
["einelmeara","../images/map/big/einelmeara7","2019","12","עין אל מערה,נחל הפירים,מעיין,סתיו,גוש עציון,"],
["einelmeara","../images/map/big/einelmeara5","2021","1","עין אל מערה,נחל הפירים,חורף,גוש עציון,נוף,"],
["einelmeara","../images/map/big/einelmeara8","2021","1","עין אל מערה,נוף,מעיין,חורף,גוש עציון,"],
["einelmeara","../images/map/big/einelmeara9","2021","3","עין אל מערה,נוף,מעיין,אביב,גוש עציון,"],
["einelmeara","../images/map/big/einelmeara10","2021","3","עין אל מערה,פריחה,אביב,גוש עציון,"],
["einhubela","../images/map/big/einhubela1","2021","3","עין חובלה,מעיין,אביב,גוש עציון,"],
["einhubela","../images/map/big/einhubela2","2021","3","עין חובלה,לילה,אביב,גוש עציון,"],
["einhubela","../images/map/big/einhubela3","2021","1","עין חובלה,מעיין,חורף,גוש עציון,"],
["einhubela","../images/map/big/einhubela4","2021","1","עין חובלה,פריחה,חורף,גוש עציון,"],
["einhubela","../images/map/big/einhubela5","2021","5","עין חובלה,מעיין,אביב,גוש עציון,"],
["einhubela","../images/map/big/einhubela6","2021","5","עין חובלה,מעיין,אביב,גוש עציון,"],
["einlivne","../images/map/big/einlivne1","2017","5","עין ליבנה,אביב,גוש עציון,מעיין,"],
["einlivne","../images/map/big/einlivne2","2018","11","עין ליבנה,סתיו,מעיין,גוש עציון,"],
["einlivne","../images/map/big/einlivne3","2018","11","עין ליבנה,סתיו,מעיין,גוש עציון,"],
["einlivne","../images/map/big/einlivne4","2020","10","עין ליבנה,סתיו,מעיין,גוש עציון,"],
["einlivne","../images/map/big/einlivne5","2020","10","עין ליבנה,סתיו,מעיין,גוש עציון,"],
["einlivne","../images/map/big/einlivne6","2020","10","עין ליבנה,סתיו,מעיין,גוש עציון,"],
["einlivne","../images/map/big/einlivne7","2020","10","עין ליבנה,סתיו,מעיין,גוש עציון,"],
["einsajme","../images/map/big/einsajme2","2017","1","עין סג'מה,עין יצחק,אופניים,מעיין,חורף,גוש עציון,"],
["einsajme","../images/map/big/einsajme5","2018","10","עין סג'מה,עין יצחק,סתיו,גוש עציון,מעיין,"],
["einsajme","../images/map/big/einsajme3","2018","10","עין סג'מה,עין יצחק,סתיו,גוש עציון,מעיין,"],
["einsajme","../images/map/big/einsajme1","2018","2","עין סג'מה,עין יצחק,מעיין,אביב,גוש עציון,"],
["einsajme","../images/map/big/einsajme4","2017","4","עין סג'מה,עין יצחק,לילה,מעיין,קיץ,גוש עציון,אופניים,"],
["einsajme","../images/map/big/einsajme6","2016","10","עין סג'מה,עין יצחק,מעיין,סתיו,גוש עציון,"],
["einsajme","../images/map/big/einsajme7","2020","7","עין סג'מה,עין יצחק,מעיין,קיץ,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim1","2017","4","עין צורים,מעיין,מערה,אביב,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim2","2017","4","עין צורים,כרמים,נוף,אביב,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim3","2021","6","עין צורים,מעיין,קיץ,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim4","2021","6","עין צורים,מעיין,קיץ,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim5","2021","1","עין צורים,מעיין,חורף,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim6","2021","1","עין צורים,מעיין,חורף,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim7","2021","1","עין צורים,מערה,מעיין,חורף,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim8","2021","1","עין צורים,נוף,חורף,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim9","2021","1","עין צורים,מעיין,אביב,גוש עציון,"],
["eintzurim","../images/map/big/eintzurim10","2021","1","עין צורים,מעיין,אביב,גוש עציון,"],
["givathahish","../images/map/big/givathahish1","2019","2","גבעת החיש,פריחה,נוף,אביב,גוש עציון,"],
["givathahish","../images/map/big/givathahish3","2019","2","גבעת החיש,פריחה,אביב,גוש עציון,"],
["givathahish","../images/map/big/givathahish2","2019","3","גבעת החיש,פריחה,אביב,גוש עציון,"],
["givathahish","../images/map/big/givathahish4","2021","1","גבעת החיש,מערה,חורף,גוש עציון,"],
["givathahish","../images/map/big/givathahish5","2021","2","גבעת החיש,פריחה,חורף,גוש עציון,"],
["givathaminzar","../images/map/big/givathaminzar1","2019","3","גבעת המנזר הרוסי,פנורמה,תצפית,נוף,אביב,גוש עציון,"],
["givathaminzar","../images/map/big/givathaminzar2","2019","3","גבעת המנזר הרוסי,נוף,אופניים,אביב,גוש עציון,"],
["givathaminzar","../images/map/big/givathaminzar4","2019","3","גבעת המנזר הרוסי,נוף,אביב,גוש עציון,"],
["givathaminzar","../images/map/big/givathaminzar3","2016","10","גבעת המנזר הרוסי,נוף,סתיו,גוש עציון,"],
["givathaminzar","../images/map/big/givathaminzar5","2021","6","גבעת המנזר,שקיעה,נוף,קיץ,גוש עציון,"],
["givatoz","../images/map/big/givatoz1","2019","5","גבעת עוז,תצפית,נוף,אביב,גוש עציון,"],
["givatoz","../images/map/big/givatoz3","2019","4","גבעת עוז,תצפית,נוף,אביב,גוש עציון,"],
["givatoz","../images/map/big/givatoz2","2016","12","גבעת עוז,חורף,גוש עציון,"],
["givatoz","../images/map/big/givatoz4","2021","6","גבעת עוז,תצפית,שקיעה,קיץ,גוש עציון,"],
["givatoz","../images/map/big/givatoz5","2021","6","גבעת עוז,תצפית,שקיעה,קיץ,גוש עציון,"],
["givatseuba","../images/map/big/givatseuba1","2021","1","גבעה צהובה,נוף,חורף,גוש עציון,"],
["givatseuba","../images/map/big/givatseuba2","2021","1","גבעה צהובה,נוף,חורף,גוש עציון,"],
["givatseuba","../images/map/big/givatseuba3","2021","6","גבעה צהובה,נוף,קיץ,גוש עציון,"],
["hanarugot","../images/map/big/hanarugot4","2021","12","גוש עציון,חאן ערוגות,חורף"],
["hanarugot","../images/map/big/hanarugot3","2021","12","גוש עציון,חאן ערוגות,חורף"],
["hanarugot","../images/map/big/hanarugot2","2021","12","גוש עציון,חאן ערוגות,חורף"],
["hanarugot","../images/map/big/hanarugot1","2021","12","גוש עציון,חאן ערוגות,חורף"],
["haukaf","../images/map/big/haukaf1","2020","11","האוכף,נחל תקוע,סתיו,גוש עציון,נוף,"],
["haukaf","../images/map/big/haukaf2","2020","11","האוכף,נחל תקוע,סתיו,גוש עציון,"],
["haukaf","../images/map/big/haukaf3","2021","11","גוש עציון,נחל תקוע,אוכף,אופניים,סתיו"],
["haukaf","../images/map/big/haukaf4","2021","11","גוש עציון,נחל תקוע,אוכף,פנורמה,סתיו"],
["haukaf","../images/map/big/haukaf5","2021","11","גוש עציון,נחל תקוע,אוכף,לילה,סתיו"],
["haukaf","../images/map/big/haukaf6","2021","3","אוכף,נחל תקוע,אביב,גוש עציון,"],
["haukaf","../images/map/big/haukaf7","2021","3","אוכף,נחל תקוע,אביב,גוש עציון,"],
["haukaf","../images/map/big/haukaf8","2021","3","אוכף,נחל תקוע,אביב,גוש עציון,"],
["havateden","../images/map/big/havateden1","2021","9","חוות עדן,סתיו,גוש עציון,"],
["havateden","../images/map/big/havateden2","2021","5","חוות עדן,נוף,אביב,גוש עציון,"],
["havateden","../images/map/big/havateden3","2021","5","חוות עדן,נוף,אביב,גוש עציון,"],
["havatkashuela","../images/map/big/havatkashuela1","2019","9","חוות קשואלה,זריחה,יער,סתיו,גוש עציון,"],
["havatkashuela","../images/map/big/havatkashuela2","2019","7","חוות קשואלה,יער,קיץ,גוש עציון,"],
["havatkashuela","../images/map/big/havatkashuela3","2019","7","חוות קשואלה,יער,קיץ,גוש עציון,"],
["havatkashuela","../images/map/big/havatkashuela4","2021","10","חוות קשואלה,יער,לילה,סתיו,גוש עציון,"],
["havatkashuela","../images/map/big/havatkashuela5","2021","10","חוות קשואלה,יער,לילה,סתיו,גוש עציון,"],
["havatsfarhamidbar","../images/map/big/havatsfarhamidbar1","2019","2","חוות ספר המדבר,תקוע,אביב,גוש עציון,נוף,תצפית,"],
["havatsfarhamidbar","../images/map/big/havatsfarhamidbar2","2019","2","חוות ספר המדבר,תקוע,אביב,גוש עציון,נוף,תצפית,"],
["havatsfarhamidbar","../images/map/big/havatsfarhamidbar3","2019","2","חוות ספר המדבר,תקוע,אביב,גוש עציון,פריחה,"],
["havatsfarhamidbar","../images/map/big/havatsfarhamidbar4","2019","3","חוות ספר המדבר,תקוע,נוף,אביב,גוש עציון,"],
["havatsfarhamidbar","../images/map/big/havatsfarhamidbar5","2021","11","גוש עציון,תקוע ה,חוות ספר המדבר,סתיו"],
["havatsfarhamidbar","../images/map/big/havatsfarhamidbar6","2021","11","גוש עציון,תקוע ה,חוות ספר המדבר,סתיו"],
["herodion","../images/map/big/herodion1","2019","2","הרודיון,פריחה,אביב,גוש עציון,נוף,"],
["herodion","../images/map/big/herodion2","2019","2","הרודיון,פריחה,אביב,גוש עציון,נוף,"],
["herodion","../images/map/big/herodion3","2019","2","הרודיון,נוף,אביב,גוש עציון,"],
["herodion","../images/map/big/herodion4","2017","2","הרודיון,נוף,אביב,גוש עציון,פריחה,"],
["herodion","../images/map/big/herodion5","2017","2","הרודיון,ארכאולוגיה,סתיו,גוש עציון,נוף,"],
["herodion","../images/map/big/herodion6","2021","12","גוש עציון,הרודיון,קשת,חורף"],
["herodion","../images/map/big/herodion7","2021","12","גוש עציון,הרודיון,קשת,תקוע,חורף"],
["herodion","../images/map/big/herodion8","2021","3","הרודיון,ארכאולוגיה,אביב,גוש עציון,"],
["herodion","../images/map/big/herodion9","2021","3","הרודיון,ארכאולוגיה,אביב,גוש עציון,"],
["herodion","../images/map/big/herodion10","2021","3","הרודיון,ארכאולוגיה,אביב,גוש עציון,"],
["herodion","../images/map/big/herodion11","2021","3","הרודיון,ארכאולוגיה,אביב,גוש עציון,נוף,"],
["hirbetjumjum","../images/map/big/hirbetjumjum1","2016","9","חירבת ג'ומג'ום,תצפית,נוף,סתיו,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum2","2018","10","חירבת ג'ומג'ום,סתיו,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum3","2018","10","חירבת ג'ומג'ום,סתיו,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum4","2018","10","חירבת ג'ומג'ום,סתיו,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum5","2018","10","חירבת ג'ומג'ום,סתיו,גוש עציון,אופניים,"],
["hirbetjumjum","../images/map/big/hirbetjumjum6","2020","11","חירבת ג'ומג'ום,סתיו,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum7","2021","8","גוש עציון,חירבת ג'ומג'ום,שריפה,קיץ"],
["hirbetjumjum","../images/map/big/hirbetjumjum8","2021","10","חירבת ג'ומג'ום,ארכאולוגיה,סתיו,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum9","2021","2","חירבת ג'ומג'ום,פריחה,נוף,חורף,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum10","2021","2","חירבת ג'ומג'ום,נוף,חורף,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum11","2021","2","חירבת ג'ומג'ום,נוף,חורף,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum12","2021","2","חירבת ג'ומג'ום,נוף,חורף,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum13","2021","2","חירבת ג'ומג'ום,נוף,חורף,גוש עציון,ארכאולוגיה,"],
["hirbetjumjum","../images/map/big/hirbetjumjum14","2021","2","חירבת ג'ומג'ום,נוף,חורף,גוש עציון,ארכאולוגיה,"],
["hirbetjumjum","../images/map/big/hirbetjumjum15","2021","2","חירבת ג'ומג'ום,מקווה,ארכאולוגיה,נוף,גוש עציון,חורף,"],
["hirbetjumjum","../images/map/big/hirbetjumjum16","2021","2","חירבת ג'ומג'ום,ארכאולוגיה,חורף,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum17","2021","2","חירבת ג'ומג'ום,פריחה,חורף,גוש עציון,"],
["hirbetjumjum","../images/map/big/hirbetjumjum18","2021","2","חירבת ג'ומג'ום,פריחה,חורף,גוש עציון,אופניים,"],
["hirbetjumjum","../images/map/big/hirbetjumjum19","2021","6","חירבת ג'ומג'ום,שריפה,נוף,קיץ,גוש עציון,"],
//hurvasdeboaz
["hurvatariv","../images/map/big/hurvatariv1","2020","6","חורבת עריב,מבנה,קיץ,גוש עציון,"],
["hurvatariv","../images/map/big/hurvatariv2","2020","6","חורבת עריב,מבנה,קיץ,גוש עציון,"],
["hurvatariv","../images/map/big/hurvatariv3","2021","2","חורבת עריב,שלג,מבנה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot1","2020","10","חורבת ברכות,ארכאולוגיה,סתיו,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot2","2020","10","חורבת ברכות,ארכאולוגיה,סתיו,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot3","2020","10","חורבת ברכות,ארכאולוגיה,סתיו,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot4","2020","10","חורבת ברכות,ארכאולוגיה,סתיו,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot5","2021","2","חורבת ברכות,ארכאולוגיה,אביב,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot6","2021","1","חורבת ברכות,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot8","2021","1","חורבת ברכות,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot7","2021","1","חורבת ברכות,פריחה,נוף,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot9","2021","1","חורבת ברכות,ארכאולוגיה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot10","2021","1","חורבת ברכות,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot11","2021","2","חורבת ברכות,ארכאולוגיה,פריחה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot13","2021","2","חורבת ברכות,ארכאולוגיה,פריחה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot12","2021","2","חורבת ברכות,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot14","2021","2","חורבת ברכות,ארכאולוגיה,פריחה,מערה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot15","2021","2","חורבת ברכות,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot16","2021","2","חורבת ברכות,פריחה,נוף,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot17","2021","2","חורבת ברכות,פריחה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot18","2021","2","חורבת ברכות,פריחה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot19","2021","2","חורבת ברכות,פריחה,חורף,גוש עציון,"],
["hurvatbrachot","../images/map/big/hurvatbrachot20","2021","2","חורבת ברכות,פריחה,חורף,גוש עציון,ארכאולוגיה,"],
["kivshansid","../images/map/big/kivshansid1","2020","10","כבשן סיד,ארכאולוגיה,סתיו,גוש עציון,"],
["kivshansid","../images/map/big/kivshansid2","2020","10","כבשן סיד,ארכאולוגיה,סתיו,גוש עציון,"],
["kivshansid","../images/map/big/kivshansid3","2020","10","כבשן סיד,ארכאולוגיה,סתיו,גוש עציון,"],
["maaleamos","../images/map/big/maaleamos2","2021","12","גוש עציון,מעלה עמוס,קשת,חורף"],
["maaleamos","../images/map/big/maaleamos1","2021","12","גוש עציון,מעלה עמוס,קשת,חורף"],
["maaleamos","../images/map/big/maaleamos3","2021","12","גוש עציון,מעלה עמוס,קשת,חורף"],
["maalerehavam","../images/map/big/maalerehavam1","2019","11","מעלה רחבעם,סתיו,גוש עציון,"],
["maalerehavam","../images/map/big/maalerehavam2","2021","11","מעלה רחבעם,ג'יפ,לילה,סתיו,גוש עציון,"],
["maalerehavam","../images/map/big/maalerehavam3","2021","11","מעלה רחבעם,ג'יפ,לילה,סתיו,גוש עציון,"],
["matzokavot","../images/map/big/matzokavot7","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot8","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot9","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot10","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot11","2021","11","גוש עציון,מצוק האבות,ספסל,שקיעה,תצפית,סתיו"],
["matzokavot","../images/map/big/matzokavot12","2020","11","גוש עציון,מצוק האבות,סתיו,פריחה,נוף,תצפית"],
["matzokavot","../images/map/big/matzokavot6","2021","8","גוש עציון,מצוק אבות,זריחה,קיץ"],
["matzokavot","../images/map/big/matzokavot2","2021","4","גוש עציון,מצוק אבות,אביב"],
["matzokavot","../images/map/big/matzokavot1","2021","4","גוש עציון,מצוק אבות,נוף,תצפית,אביב,שקיעה"],
["matzokavot","../images/map/big/matzokavot4","2021","4","גוש עציון,מצוק אבות,פריחה,אביב"],
["matzokavot","../images/map/big/matzokavot5","2021","4","גוש עציון,מצוק אבות,נוף,תצפית,אביב,שקיעה"],
["matzokavot","../images/map/big/matzokavot3","2021","4","גוש עציון,מצוק אבות,נוף,אביב"],
["matzokavot","../images/map/big/matzokavot13","2021","10","מצוק אבות,נוף,סתיו,גוש עציון,"],
["matzokavot","../images/map/big/matzokavot14","2021","10","מצוק אבות,שקיעה,נוף,גוש עציון,סתיו,"],
["matzokavot","../images/map/big/matzokavot15","2021","3","מצוק אבות,פריחה,אביב,גוש עציון,"],
["matzokavot","../images/map/big/matzokavot16","2021","4","מצוק אבות,אביב,גוש עציון,"],
["matzokavot","../images/map/big/matzokavot17","2021","4","מצוק אבות,שקיעה,נוף,אביב,גוש עציון,"],
["matzokavot","../images/map/big/matzokavot18","2021","4","מצוק אבות,פריחה,אביב,גוש עציון,"],
["matzokavot","../images/map/big/matzokavot19","2021","5","מצוק אבות,שקיעה,נוף,אביב,גוש עציון,"],
["matzokavot","../images/map/big/matzokavot20","2021","5","מצוק אבות,ים,שקיעה,נוף,אביב,גוש עציון,"],
["meara","../images/map/big/meara1","2019","5","מערה,אביב,גוש עציון,פריחה,"],
//mearatidba
["mikvederehavot","../images/map/big/mikvederehavot1","2021","1","מקווה דרך אבות,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["mikvederehavot","../images/map/big/mikvederehavot2","2021","1","מקווה דרך אבות,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["mikvederehavot","../images/map/big/mikvederehavot3","2021","1","מקווה דרך אבות,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["mikvederehavot","../images/map/big/mikvederehavot4","2021","1","מקווה דרך אבות,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["mikvederehavot","../images/map/big/mikvederehavot5","2021","2","מקווה דרך אבות,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["mikvegivatahish","../images/map/big/mikvegivatahish1","2021","1","מקווה גבעת החיש,ארכאולוגיה,פריחה,חורף,גוש עציון,"],
["mikvegivatahish","../images/map/big/mikvegivatahish2","2021","1","מקווה גבעת החיש,ארכאולוגיה,חורף,גוש עציון,"],
["mikvegivatahish","../images/map/big/mikvegivatahish3","2021","1","מקווה גבעת החיש,ארכאולוגיה,חורף,גוש עציון,פריחה,"],
["mikvegivatahish","../images/map/big/mikvegivatahish4","2021","1","מקווה גבעת החיש,חורף,גוש עציון,"],
["mikvegivatahish","../images/map/big/mikvegivatahish5","2021","1","מקווה גבעת החיש,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi7","2021","9","גוש עציון,מנזר הרוסי,תצפית,סתיו"],
["minzarrusi","../images/map/big/minzarrusi5","2021","9","גוש עציון,מנזר הרוסי,תצפית,סתיו"],
["minzarrusi","../images/map/big/minzarrusi1","2021","9","גוש עציון,מנזר הרוסי,תצפית,סתיו"],
["minzarrusi","../images/map/big/minzarrusi2","2017","1","מנזר הרוסי,מערה,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi3","2017","1","מנזר הרוסי,מערה,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi4","2017","1","מנזר הרוסי,מערה,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi6","2019","4","מנזר הרוסי,אביב,גוש עציון,ארכאולוגיה,"],
["minzarrusi","../images/map/big/minzarrusi8","2021","1","מנזר הרוסי,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi9","2021","1","מנזר הרוסי,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi10","2021","1","מנזר הרוסי,ארכאולוגיה,מערה,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi11","2021","1","מנזר הרוסי,נוף,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi12","2021","1","מנזר הרוסי,מערה,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi13","2021","1","מנזר הרוסי,מערה,חורף,גוש עציון,"],
["minzarrusi","../images/map/big/minzarrusi14","2021","1","מנזר הרוסי,מערה,חורף,גוש עציון,"],
["mishlathamesh","../images/map/big/mishlathamesh1","2021","7","גוש עציון,משלט הנקודה החמישית,נוף,תצפית,קיץ,זריחה,מצוק"],
["mishlathamesh","../images/map/big/mishlathamesh2","2021","2","משלט הנקודה החמישית,תצפית,נוף,אביב,גוש עציון,"],
["mishlathamesh","../images/map/big/mishlathamesh3","2021","2","משלט הנקודה החמישית,תצפית,נוף,אביב,גוש עציון,"],
["mishlathamesh","../images/map/big/mishlathamesh4","2021","8","משלט הנקודה החמישית,קיץ,גוש עציון,נוף,תצפית,"],
["mishlathamesh","../images/map/big/mishlathamesh5","2021","8","גוש עציון,משלט הנקודה החמישית,נוף,תצפית,קיץ,מצוק"],
["mishlathamesh","../images/map/big/mishlathamesh6","2021","10","גוש עציון,משלט הנקודה החמישית,אופניים,תצפית,נוף,סתיו"],
["mishlathamesh","../images/map/big/mishlathamesh7","2021","8","גוש עציון,שרידי מבנה אבן,נוף,אופניים,קיץ,משלט הנקודה החמישית"],
["mishlathamesh","../images/map/big/mishlathamesh8","2021","10","משלט הנקודה החמישית,נוף,סתיו,גוש עציון,"],
["mishlathamesh","../images/map/big/mishlathamesh9","2021","2","משלט הנקודה החמישית,פריחה,חורף,גוש עציון,"],
["mishlathamesh","../images/map/big/mishlathamesh10","2021","2","משלט הנקודה החמישית,פריחה,חורף,גוש עציון,"],
["mishlathamesh","../images/map/big/mishlathamesh11","2021","2","משלט הנקודה החמישית,פריחה,חורף,גוש עציון,"],
["mishlathamesh","../images/map/big/mishlathamesh12","2021","6","משלט הנקודה החמישית,נוף,קיץ,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela1","2020","9","גוש עציון,מצפה הסלע,סתיו"],
["mitzpehasela","../images/map/big/mitzpehasela2","2020","9","מצפה הסלע,פריחה,תצפית,נוף,סתיו,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela3","2020","9","מצפה הסלע,פריחה,תצפית,נוף,סתיו,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela4","2020","12","גוש עציון,מצפה הסלע,פריחה,נרקיס,חורף"],
["mitzpehasela","../images/map/big/mitzpehasela5","2021","10","מצפה הסלע,שריפה,נוף,תצפית,סתיו,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela5","2021","10","מצפה הסלע,שריפה,נוף,תצפית,סתיו,גוש עציון,אופניים,"],
["mitzpehasela","../images/map/big/mitzpehasela6","2021","9","מצפה הסלע,חצב,פריחה,נוף,סתיו,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela7","2021","9","מצפה הסלע,שריפה,תצפית,נוף,סתיו,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela8","2021","9","מצפה הסלע,שריפה,תצפית,נוף,סתיו,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela9","2021","1","מצפה הסלע,פריחה,חורף,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela10","2021","1","מצפה הסלע,נוף,תצפית,חורף,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela11","2021","1","מצפה הסלע,פריחה,נוף,חורף,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela12","2021","1","מצפה הסלע,קפה,נוף,חורף,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela13","2021","2","מצפה הסלע,פריחה,חורף,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela14","2021","2","מצפה הסלע,פריחה,נוף,חורף,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela15","2021","5","מצפה הסלע,פריחה,אביב,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela16","2021","5","מצפה הסלע,תצפית,נוף,אביב,גוש עציון,"],
["mitzpehasela","../images/map/big/mitzpehasela17","2021","6","מצפה הסלע,שריפה,נוף,קיץ,גוש עציון,תצפית,"],
["mitzperevadim","../images/map/big/mitzperevadim1","2021","11","מצפה רבדים,תצפית,נוף,סתיו,גוש עציון,"],
["mitzperevadim","../images/map/big/mitzperevadim2","2021","11","מצפה רבדים,תצפית,נוף,סתיו,גוש עציון,"],
["mitzperevadim","../images/map/big/mitzperevadim3","2021","10","מצפה רבדים,תצפית,נוף,סתיו,גוש עציון,"],
["mitzperevadim","../images/map/big/mitzperevadim4","2021","10","מצפה רבדים,תצפית,נוף,סתיו,גוש עציון,"],
["mitzperevadim","../images/map/big/mitzperevadim5","2021","1","מצפה רבדים,פריחה,יער,חורף,גוש עציון,"],
["mitzperevadim","../images/map/big/mitzperevadim6","2021","1","מצפה רבדים,תצפית,נוף,חורף,גוש עציון,"],
["mitzperevadim","../images/map/big/mitzperevadim7","2021","1","מצפה רבדים,פריחה,יער,חורף,גוש עציון,"],
["mitzperevadim","../images/map/big/mitzperevadim8","2021","1","מצפה רבדים,תצפית,נוף,חורף,גוש עציון,"],
["mitzperevadim","../images/map/big/mitzperevadim9","2021","1","מצפה רבדים,פריחה,חורף,גוש עציון,"],
["mitzporhabanim","../images/map/big/mitzporhabanim1","2016","5","מצפור לזכר הבנים,שקיעה,תצפית,נוף,כרמים,אביב,גוש עציון,"],
["mitzporhabanim","../images/map/big/mitzporhabanim2","2019","5","מצפה לזכר הבנים,פריחה,אביב,גוש עציון,"],
["mitzporhabanim","../images/map/big/mitzporhabanim3","2019","5","מצפה לזכר הבנים,כרמים,נוף,אביב,גוש עציון,"],
["mitzporhabanim","../images/map/big/mitzporhabanim4","2019","5","מצפה לזכר הבנים,פריחה,נוף,כרמים,אביב,גוש עציון,"],
["mitzporhabanim","../images/map/big/mitzporhabanim5","2020","6","מצפה לזכר הבנים,שקיעה,כרמים,תצפית,נוף,קיץ,גוש עציון,"],
["mitzporhabanim","../images/map/big/mitzporhabanim6","2021","6","מצפה לזכר הבנים,כרמים,תצפית,נוף,קיץ,גוש עציון,"],
["mitzporhabanim","../images/map/big/mitzporhabanim7","2021","6","מצפה לזכר הבנים,כרמים,תצפית,נוף,קיץ,גוש עציון,"],
["mitzporhabanim","../images/map/big/mitzporhabanim8","2021","6","מצפה לזכר הבנים,כרמים,תצפית,נוף,קיץ,גוש עציון,"],
["mitzporhaelef","../images/map/big/mitzporhaelef1","2018","2","מצפור האלף,נווה דניאל,פנורמה,תצפית,נוף,חורף,גוש עציון,"],
["mitzporhaelef","../images/map/big/mitzporhaelef2","2018","12","מצפור האלף,ים,שקיעה,תצפית,נוף,חורף,גוש עציון,"],
["mitzportzvika","../images/map/big/mitzportzvika1","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","../images/map/big/mitzportzvika2","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","../images/map/big/mitzportzvika3","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","../images/map/big/mitzportzvika4","2021","8","גוש עציון,מצפור צביקה,תצפית,נוף,בת עין,שקיעה,קיץ"],
["mitzportzvika","../images/map/big/mitzportzvika5","2021","8","מצפור צביקה,ירח,קיץ,גוש עציון,"],
["mitzportzvika","../images/map/big/mitzportzvika6","2021","5","מצפור צביקה,שקיעה,תצפית,נוף,אביב,גוש עציון,"],
["nahalamos","../images/map/big/nahalamos1","2019","2","נחל עמוס,נוף,אביב,גוש עציון,"],
["nahalamos","../images/map/big/nahalamos2","2019","2","נחל עמוס,נוף,אביב,גוש עציון,"],
["nahalamos","../images/map/big/nahalamos3","2019","2","נחל עמוס,נוף,אביב,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz1","2021","1","נחל העץ,יער,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz2","2021","1","נחל העץ,יער,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz3","2021","1","נחל העץ,יער,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz4","2021","1","נחל העץ,יער,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz5","2021","1","נחל העץ,יער,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz6","2022","1","נחל העץ,יער,צניר,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz7","2022","1","נחל העץ,יער,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz8","2022","1","נחל העץ,יער,צניר,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz9","2022","1","נחל העץ,יער,פריחה,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz10","2022","1","נחל העץ,יער,פריחה,חורף,גוש עציון,"],
["nahalhaetz","../images/map/big/nahalhaetz11","2021","1","נחל העץ,אופניים,חורף,גוש עציון,יער"],
["nahalhaetz","../images/map/big/nahalhaetz12","2021","1","נחל העץ,נוף,חורף,גוש עציון,יער"],
["nahalhaetz","../images/map/big/nahalhaetz13","2021","1","נחל העץ,נוף,חורף,גוש עציון,יער"],
["nahalhaetz","../images/map/big/nahalhaetz14","2021","1","נחל העץ,נוף,חורף,גוש עציון,יער"],
["nahalhaetz","../images/map/big/nahalhaetz15","2021","6","נחל העץ,יער,קיץ,גוש עציון,יער"],
["nahalhaetz","../images/map/big/nahalhaetz16","2021","6","נחל העץ,יער,קיץ,גוש עציון,יער"],
["nahalhelets","../images/map/big/nahalhelets1","2019","9","נחל חלץ,יער,סתיו,גוש עציון,"],
["nahalhelets","../images/map/big/nahalhelets2","2019","9","נחל חלץ,יער,סתיו,גוש עציון,זריחה,"],
["nahalhelets","../images/map/big/nahalhelets3","2019","9","נחל חלץ,יער,סתיו,גוש עציון,"],
["nahalhelets","../images/map/big/nahalhelets4","2019","9","נחל חלץ,יער,סתיו,גוש עציון,"],
["nahalhelets","../images/map/big/nahalhelets5","2019","9","נחל חלץ,יער,סתיו,גוש עציון,זריחה,"],
["nahalhelets","../images/map/big/nahalhelets6","2019","9","נחל חלץ,יער,סתיו,גוש עציון,"],
["nahalhelets","../images/map/big/nahalhelets7","2019","9","נחל חלץ,יער,סתיו,גוש עציון,"],
["nahalhelets","../images/map/big/nahalhelets8","2019","9","נחל חלץ,יער,סתיו,גוש עציון,"],
["nahalhelets","../images/map/big/nahalhelets9","2021","6","נחל חלץ,פנורמה,יער,קיץ,גוש עציון,"],
["nahalhelets","../images/map/big/nahalhelets10","2021","6","נחל חלץ,צניר,יער,קיץ,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne1","2021","7","נחל ליבנה,יער,שקיעה,קיץ,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne2","2021","7","נחל ליבנה,יער,שקיעה,קיץ,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne3","2021","9","נחל ליבנה,יער,סתיו,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne4","2021","9","נחל ליבנה,שקיעה,נוף,סתיו,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne5","2021","1","נחל ליבנה,פריחה,יער,חורף,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne6","2021","2","נחל ליבנה,פריחה,יער,חורף,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne7","2021","2","נחל ליבנה,פריחה,יער,חורף,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne8","2021","2","נחל ליבנה,פריחה,יער,חורף,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne9","2021","2","נחל ליבנה,פריחה,יער,חורף,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne10","2021","3","נחל ליבנה,נוף,יער,אביב,גוש עציון,"],
["nahallivne","../images/map/big/nahallivne11","2021","3","נחל ליבנה,פריחה,יער,אביב,גוש עציון,"],
["nahalnaamanim","../images/map/big/nahalnaamanim1","2021","2","נחל נעמנים,פריחה,אביב,גוש עציון,"],
["nahalnaamanim","../images/map/big/nahalnaamanim2","2021","2","נחל נעמנים,אופניים,פריחה,אביב,גוש עציון,"],
["nahalnaamanim","../images/map/big/nahalnaamanim3","2021","2","נחל נעמנים,פריחה,אביב,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim1","2017","12","נחל הפירים,נוף,סתיו,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim2","2018","4","נחל הפירים,אביב,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim3","2018","4","נחל הפירים,אביב,גוש עציון,נוף,"],
["nahalpirim","../images/map/big/nahalpirim4","2017","12","נחל הפירים,כרמים"],
["nahalpirim","../images/map/big/nahalpirim5","2017","11","נחל הפירים,כרמים,סתיו,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim6","2018","4","נחל הפירים,כרמים,אביב,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim7","2018","12","נחל הפירים,שקיעה,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim8","2019","3","נחל הפירים,אביב,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim9","2019","3","נחל הפירים,אביב,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim10","2021","9","גוש עציון,נחל הפירים,פריחה,חצב,סתיו"],
["nahalpirim","../images/map/big/nahalpirim11","2021","9","גוש עציון,נחל הפירים,פריחה,חצב,סתיו"],
["nahalpirim","../images/map/big/nahalpirim12","2021","2","נחל הפירים,אפרת,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim13","2021","2","נחל הפירים,אפרת,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim14","2021","2","נחל הפירים,אפרת,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim15","2021","2","נחל הפירים,אפרת,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim16","2021","2","נחל הפירים,אפרת,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim17","2021","2","נחל הפירים,אפרת,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim18","2021","2","נחל הפירים,אפרת,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim19","2021","2","נחל הפירים,אפרת,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim20","2021","2","נחל הפירים,שלג,נוף,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim21","2021","2","נחל הפירים,שלג,פנורמה,אפרת,נוף,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim22","2021","2","נחל הפירים,שלג,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim23","2021","2","נחל הפירים,שלג,אפרת,נוף,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim24","2021","3","נחל הפירים,נוף,אביב,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim25","2021","2","נחל הפירים,אפרת,פריחה,נוף,חורף,גוש עציון,"],
["nahalpirim","../images/map/big/nahalpirim26","2021","6","נחל הפירים,אפרת,שקיעה,נוף,תצפית,קיץ,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim1","2021","1","נחל רבדים,יער,חורף,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim2","2021","1","נחל רבדים,יער,חורף,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim3","2021","1","נחל רבדים,יער,חורף,גוש עציון,נוף,"],
["nahalrevadim","../images/map/big/nahalrevadim4","2021","10","נחל רבדים,יער,סתיו,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim5","2021","1","נחל רבדים,יער,חורף,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim6","2021","1","נחל רבדים,יער,חורף,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim7","2021","1","נחל רבדים,יער,חורף,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim8","2021","1","נחל רבדים,יער,חורף,גוש עציון,נוף,"],
["nahalrevadim","../images/map/big/nahalrevadim9","2021","1","נחל רבדים,פריחה,יער,חורף,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim10","2021","1","נחל רבדים,פריחה,יער,חורף,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim11","2021","1","נחל רבדים,פריחה,יער,חורף,גוש עציון,"],
["nahalrevadim","../images/map/big/nahalrevadim12","2021","1","נחל רבדים,פריחה,יער,חורף,גוש עציון,נוף,"],
["nahaltkoa","../images/map/big/nahaltkoa1","2017","2","נחל תקוע,נוף,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa2","2018","12","נחל תקוע,פנורמה,נוף,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa3","2018","12","נחל תקוע,קפה,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa4","2018","12","נחל תקוע,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa5","2018","12","נחל תקוע,פריחה,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa6","2017","2","נחל תקוע,פריחה,נוף,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa7","2018","12","נחל תקוע,נוף,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa8","2019","4","נחל תקוע,פריחה,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa9","2018","12","נחל תקוע,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa10","2019","4","נחל תקוע,פריחה,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa11","2020","12","נחל תקוע,נוף,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa12","2020","12","נחל תקוע,ארכאולוגיה,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa13","2020","12","נחל תקוע,נוף,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa14","2021","12","נחל תקוע,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa15","2021","9","גוש עציון,נחל תקוע,ארכאולוגיה,סתיו,נוף"],
["nahaltkoa","../images/map/big/nahaltkoa16","2021","9","גוש עציון,נחל תקוע,פריחה,חצב,סתיו"],
["nahaltkoa","../images/map/big/nahaltkoa17","2021","9","גוש עציון,נחל תקוע,ארכאולוגיה,סתיו"],
["nahaltkoa","../images/map/big/nahaltkoa18","2021","1","נחל תקוע,נוף,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa19","2021","1","נחל תקוע,מערה,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa20","2021","1","נחל תקוע,מערה,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa21","2021","1","נחל תקוע,פנורמה,נוף,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa22","2021","1","נחל תקוע,מערה,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa23","2021","1","נחל תקוע,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa24","2021","2","נחל תקוע,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa25","2021","2","נחל תקוע,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa26","2021","2","נחל תקוע,מערה,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa27","2021","2","נחל תקוע,מערה,חורף,גוש עציון,נוף,"],
["nahaltkoa","../images/map/big/nahaltkoa28","2021","2","נחל תקוע,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa29","2021","2","נחל תקוע,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa30","2021","2","נחל תקוע,חורף,גוש עציון,נוף,"],
["nahaltkoa","../images/map/big/nahaltkoa31","2021","2","נחל תקוע,חורף,גוש עציון,נוף,"],
["nahaltkoa","../images/map/big/nahaltkoa32","2021","2","נחל תקוע,מערת חריטון,נוף,מערה,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa33","2021","2","נחל תקוע,נוף,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa34","2021","2","נחל תקוע,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa35","2021","2","נחל תקוע,חורף,גוש עציון,נוף,"],
["nahaltkoa","../images/map/big/nahaltkoa36","2021","2","נחל תקוע,פריחה,חורף,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa37","2021","3","נחל תקוע,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa38","2021","3","נחל תקוע,אביב,גוש עציון,מערה,"],
["nahaltkoa","../images/map/big/nahaltkoa39","2021","3","נחל תקוע,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa40","2021","3","נחל תקוע,גב,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa41","2021","3","נחל תקוע,פנורמה,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa42","2021","3","נחל תקוע,מערה,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa43","2021","3","נחל תקוע,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa44","2021","3","נחל תקוע,קפה,נוף,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa45","2021","3","נחל תקוע,קפה,נוף,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa46","2021","3","נחל תקוע,מערה,אביב,גוש עציון,"],
["nahaltkoa","../images/map/big/nahaltkoa47","2021","3","נחל תקוע,ארכאולוגיה,אביב,גוש עציון,נוף,"],
["nahaltkoa","../images/map/big/nahaltkoa48","2021","3","נחל תקוע,אביב,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit1","2018","12","נחל צופית,נוף,חורף,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit2","2021","3","נחל צופית,נוף,אביב,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit3","2021","3","נחל צופית,נוף,אביב,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit4","2021","3","נחל צופית,נוף,אביב,גוש עציון,פנורמה"],
["nahaltsofit","../images/map/big/nahaltsofit5","2021","11","נחל צופית,נוף,יער,סתיו,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit6","2021","11","נחל צופית,נוף,סתיו,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit7","2021","3","נחל צופית,פריחה,אביב,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit8","2021","3","נחל צופית,נוף,אביב,גוש עציון,"],
["nahaltsofit","../images/map/big/nahaltsofit9","2021","3","נחל צופית,נוף,אביב,גוש עציון,יער,"],
["nebidaniel","../images/map/big/nebidaniel1","2021","3","נבי דניאל,פריחה,אביב,גוש עציון,"],
["nebidaniel","../images/map/big/nebidaniel2","2019","1","נבי דניאל,פריחה,אביב,גוש עציון,"],
["nebidaniel","../images/map/big/nebidaniel4","2019","3","נבי דניאל,פריחה,אביב,גוש עציון,"],
["nebidaniel","../images/map/big/nebidaniel5","2019","3","נבי דניאל,פריחה,אביב,גוש עציון,אופניים,"],
["nebidaniel","../images/map/big/nebidaniel3","2016","6","נבי דניאל,תה,קיץ,גוש עציון,"],
["netzer","../images/map/big/netzer1","2017","3","נצר,פריחה,אביב,גוש עציון,"],
["netzer","../images/map/big/netzer2","2019","2","נצר,פריחה,חורף,גוש עציון,"],
["netzer","../images/map/big/netzer3","2021","1","נצר,קפה,תצפית,נוף,חורף,גוש עציון,"],
["netzer","../images/map/big/netzer4","2021","4","נצר,פריחה,תצפית,אביב,גוש עציון,"],
["nevedaniel","../images/map/big/nevedaniel1","2018","12","נווה דניאל,חורף,גוש עציון,"],
["nevedaniel","../images/map/big/nevedaniel2","2018","12","נווה דניאל,קשת,חורף,גוש עציון,נוף,"],
["nevedaniel","../images/map/big/nevedaniel3","2015","1","נווה דניאל,שלג,חורף,גוש עציון,"],
["nevedaniel","../images/map/big/nevedaniel4","2016","11","נווה דניאל,קרח,סתיו,גוש עציון,"],
["nevedaniel","../images/map/big/nevedaniel5","2016","11","נווה דניאל,קרח,סתיו,גוש עציון,"],
["nevedaniel","../images/map/big/nevedaniel6","2015","12","נווה דניאל,שלג,חורף,גוש עציון,"],
["nevedaniel","../images/map/big/nevedaniel7","2015","12","נווה דניאל,שלג,חורף,גוש עציון,פנורמה,"],
["nevedaniel","../images/map/big/nevedaniel8","2016","3","נווה דניאל,נוף,פנורמה,אביב,גוש עציון,"],
["nevedaniel","../images/map/big/nevedaniel9","2021","8","נווה דניאל,ירח,קיץ,גוש עציון,"],
["otobus","../images/map/big/otobus1","2020","10","אוטובוס,סתיו,גוש עציון,"],
["otobus","../images/map/big/otobus2","2021","1","אוטובוס,חורף,גוש עציון,"],
["ozvegaon","../images/map/big/ozvegaon1","2015","8","עוז וגאון,פיקניק,קיץ,גוש עציון,"],
["ozvegaon","../images/map/big/ozvegaon2","2015","8","עוז וגאון,פיקניק,קיץ,גוש עציון,"],
["ozvegaon","../images/map/big/ozvegaon3","2015","8","עוז וגאון,קיץ,גוש עציון,"],
["ozvegaon","../images/map/big/ozvegaon4","2015","8","עוז וגאון,פארק,קיץ,גוש עציון,"],
["ozvegaon","../images/map/big/ozvegaon5","2015","8","עוז וגאון,קיץ,גוש עציון,"],
["ozvegaon","../images/map/big/ozvegaon6","2021","5","עוז וגאון,יער,אביב,גוש עציון,"],
["ozvegaon","../images/map/big/ozvegaon7","2021","5","עוז וגאון,פארק,יער,אביב,גוש עציון,"],
["ozvegaon","../images/map/big/ozvegaon8","2021","5","עוז וגאון,פארק,יער,אביב,גוש עציון,"],
["ozvegaon","../images/map/big/ozvegaon9","2021","7","עוז וגאון,פארק,מדורה,יער,קיץ,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit1","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit2","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit3","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit4","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit5","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit6","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit7","2021","2","רוג'ום א-סבית,שלולית חורף,חורף,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit8","2021","3","רוג'ום א-סבית,שלולית חורף,אופניים,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit9","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,"],
["rojumasabit","../images/map/big/rojumasabit10","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,פריחה,"],
["rojumasabit","../images/map/big/rojumasabit11","2021","3","רוג'ום א-סבית,שלולית חורף,אביב,גוש עציון,פריחה,"],
["rojumasabit","../images/map/big/rojumasabit12","2021","3","רוג'ום א-סבית,שלולית חורף,פריחה,אביב,גוש עציון,"],
//sdebar
["sdeboaz","../images/map/big/sdeboaz1","2016","2","שדה בועז,נוף,חורף,גוש עציון,"],
["sdeboaz","../images/map/big/sdeboaz2","2018","12","שדה בועז,נוף,חורף,גוש עציון,פנורמה,"],
["sdeboaz","../images/map/big/sdeboaz3","2021","8","שדה בועז,שקיעה,נוף,קיץ,גוש עציון,"],
["sdeboaz","../images/map/big/sdeboaz4","2021","4","שדה בועז,פריחה,אביב,גוש עציון,"],
["sdeboaz","../images/map/big/sdeboaz5","2021","4","שדה בועז,נוף,קיץ,גוש עציון,"],
["shluhathamasuot","../images/map/big/shluhathamasuot1","2021","8","גוש עציון,שלוחת המשואות,כרמים,שקיעה,קיץ"],
["shluhathamasuot","../images/map/big/shluhathamasuot2","2021","9","שלוחת המשואות,נוף,פנורמה,סתיו,גוש עציון,"],
["shluhathamasuot","../images/map/big/shluhathamasuot3","2021","8","שלוחת המשואות,כרמים,קיץ,גוש עציון,"],
["shluhathamasuot","../images/map/big/shluhathamasuot4","2021","2","שלוחת המשואות,פריחה,נוף,פנורמה,חורף,גוש עציון,"],
["shluhathamasuot","../images/map/big/shluhathamasuot5","2021","2","שלוחת המשואות,פריחה,חורף,גוש עציון,"],
["shluhathamasuot","../images/map/big/shluhathamasuot6","2021","2","שלוחת המשואות,נוף,חורף,גוש עציון,פריחה,"],
["shluhathamasuot","../images/map/big/shluhathamasuot7","2021","2","שלוחת המשואות,פריחה,חורף,גוש עציון,"],
["shluhathamasuot","../images/map/big/shluhathamasuot8","2021","2","שלוחת המשואות,פריחה,חורף,גוש עציון,"],
["shluhathamasuot","../images/map/big/shluhathamasuot9","2021","2","שלוחת המשואות,פריחה,חורף,גוש עציון,"],
["shluhathamasuot","../images/map/big/shluhathamasuot10","2021","2","שלוחת המשואות,פריחה,חורף,גוש עציון,פנורמה,"],
["shluhathamasuot","../images/map/big/shluhathamasuot11","2021","2","שלוחת המשואות,פריחה,חורף,גוש עציון,"],
["shluhathamasuot","../images/map/big/shluhathamasuot12","2015","9","שלוחת המשואות,כרמים,סתיו,גוש עציון,"],

["shviltzvika","../images/map/big/shviltzvika1","2021","8","גוש עציון,שביל צביקה,נוף,שקיעה,קיץ"],
["shviltzvika","../images/map/big/shviltzvika2","2021","8","גוש עציון,שביל צביקה,נוף,שקיעה,קיץ"],
["shviltzvika","../images/map/big/shviltzvika3","2021","8","גוש עציון,שביל צביקה,נוף,שקיעה,קיץ"],
["tazpitzofit","../images/map/big/tazpitzofit3","2021","9","גוש עציון,תצפית צופית,תצפית,נוף,סתיו,אופניים"],
["tazpitzofit","../images/map/big/tazpitzofit4","2021","9","גוש עציון,תצפית צופית,תצפית,נוף,סתיו"],
["tazpitzofit","../images/map/big/tazpitzofit1","2021","3","תצפית צופית,תצפית,נוף,אביב,גוש עציון,"],
["tazpitzofit","../images/map/big/tazpitzofit2","2021","3","תצפית צופית,פריחה,תצפית,נוף,אביב,גוש עציון,"],
["tkoa","../images/map/big/tkoa1","2021","12","גוש עציון,תקוע,נוף למדבר,חורף,תצפית,חורף"],
["wadiganeden","../images/map/big/wadiganeden1","2021","8","גוש עציון,ואדי גן עדן,נחל משואות,קיץ"],
["wadiganeden","../images/map/big/wadiganeden2","2021","8","גוש עציון,ואדי גן עדן,נחל משואות,קיץ"],
["waditau","../images/map/big/waditau4","2021","11","גוש עציון,צניר,רכס טאו,חורף"],
["waditau","../images/map/big/waditau5","2021","11","גוש עציון,צניר,רכס טאו,חורף"],
["waditau","../images/map/big/waditau6","2021","11","גוש עציון,צניר,רכס טאו,חורף"],
["waditau","../images/map/big/waditau7","2021","9","גוש עציון,רכס טאו,נוף,סתיו"],
["waditau","../images/map/big/waditau1","2021","8","גוש עציון,ואדי טאו,נוף,תצפית,שקיעה,קיץ"],
["waditau","../images/map/big/waditau2","2021","8","גוש עציון,ואדי טאו,נוף,תצפית,שקיעה,קיץ"],
];
	

const LOCATION_INDEX = 0;
const IMAGENAME_INDEX = 1;
const YEAR_INDEX = 2;
const MONTH_INDEX = 3;
const TAGS_INDEX = 4;

const form = document.querySelector('form');
const input = document.querySelector('input');
const loadingImage = document.querySelector('#loadingImage');
const imageSection = document.querySelector('#nanogallery2');

///////////////////////////////////////////////////

loadingImage.style.display = 'none';

form.addEventListener('submit', formSubmitted);

//var all_sorted = sortArray(all_locations__);
//printArray(all_sorted);

initMap();

///////////////////////////////////////////////////

function formSubmitted(event) {

	event.preventDefault();
	const searchTerm = input.value;
	if (searchTerm == '') {
		return;
	}
	//console.log('searchFor: '+searchTerm);

	searchFor(searchTerm);
}

function searchFor(searchTerm) {

	searchStart();

	var searchResult = performSearch(all_images, searchTerm);
	//console.log(searchResult);

	displayImages(searchResult);
	loadingImage.style.display = 'none';

	var locationsResult = searchForLocations(all_locations, searchResult);
	//console.log(locationsResult);

	if (locationsResult[0]) {
		setMarkers(locationsResult);
		mymap.panTo(L.latLng(locationsResult[0][1], locationsResult[0][2]), {animate: true});
	}
}

function searchByYear(year) {

	searchStart();

	var searchResult = performSearchByYear(all_images, year);
	//console.log(searchResult);

	displayImages(searchResult);
	loadingImage.style.display = 'none';

	var locationsResult = searchForLocations(all_locations, searchResult);
	//console.log(locationsResult);

	if (locationsResult[0]) {
		setMarkers(locationsResult);
		mymap.panTo(L.latLng(locationsResult[0][1], locationsResult[0][2]), {animate: true});
	}
}

function searchByMonth(month) {

	searchStart();

	var searchResult = performSearchByMonth(all_images, month);
	//console.log(searchResult);

	displayImages(searchResult);
	loadingImage.style.display = 'none';

	var locationsResult = searchForLocations(all_locations, searchResult);
	//console.log(locationsResult);

	if (locationsResult[0]) {
		setMarkers(locationsResult);
		mymap.panTo(L.latLng(locationsResult[0][1], locationsResult[0][2]), {animate: true});
	}
}

function searchStart() {
	jQuery("#nanogallery2").nanogallery2('destroy');
	loadingImage.style.display = '';
	imageSection.innerHTML = '';

	clearMarkers();
}

function performSearch(images, searchTerm) {

	searchResult = [];
	images.forEach(image => {
		const tags = image[TAGS_INDEX].split(",");
		isMatch = false;
		tags.forEach(tag => {
			if (tag.includes(searchTerm.toLowerCase())) {
				isMatch = true;
			}
		});
		// if there is a match, add it to the result
		if (isMatch) {
			searchResult.push(image);
		}
	});
	return searchResult;
}

function performSearchByYear(images, year) {

	searchResult = [];
	images.forEach(image => {
		if (year === image[YEAR_INDEX]) {
			searchResult.push(image);
		}
	});
	return searchResult;
}

function performSearchByMonth(images, month) {

	searchResult = [];
	images.forEach(image => {
		if (month === image[MONTH_INDEX]) {
			searchResult.push(image);
		}
	});
	return searchResult;
}

function displayImages(images, searchTerm) {
	
	items = [];
	totalImages = 0;
	images.forEach(image => {
		totalImages++;
		const item = Object.create( {} );
		item.src = image[IMAGENAME_INDEX]+'.jpg';
		item.srct = image[IMAGENAME_INDEX]+'.jpg';
		item.title = getLocationHebrewName(image[LOCATION_INDEX]);
		item.description = image[TAGS_INDEX];
		items.push(item);
	});
	
	//console.log('totalImages: '+totalImages);
	if (totalImages == 0) {
		jQuery("#total-img").text('לא נמצאו תמונות');
	}
	else {
		jQuery("#total-img").text('נצמאו ' + totalImages + ' תמונות');
		
		jQuery("#nanogallery2").nanogallery2( {

			itemsBaseURL:'',
			items,
			
			// GALLERY AND THUMBNAIL LAYOUT
			galleryDisplayMode: 'fullContent',
			gallerySorting: 'random',
			thumbnailHeight: 'auto', thumbnailWidth: '300',
			thumbnailBaseGridHeight: 50,
			thumbnailAlignment: 'fillWidth',
			thumbnailL1GutterWidth: 4,
			thumbnailL1GutterHeight: 4,
			thumbnailBorderHorizontal: 5,
			thumbnailBorderVertical: 5,

			// THUMBNAIL TOOLS & LABEL
			thumbnailLabel: { display: true, position:'onBottom', hideIcons: true, titleFontSize: '1em', align: 'right', titleMultiLine:true, displayDescription: false},
			thumbnailToolbarAlbum: null,
			thumbnailToolbarImage :  { bottomRight : 'display' },
			// replace the default DISPLAY tool icon
			icons: {thumbnailDisplay: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'},

			// DISPLAY ANIMATION
			thumbnailDisplayTransition: 'slideDown',
			thumbnailDisplayTransitionDuration: 500,
			thumbnailDisplayInterval: 30,

			// THUMBNAIL'S HOVER ANIMATION
			thumbnailHoverEffect2: 'image_scale_1.00_1.10',
			touchAnimation: true,
			touchAutoOpenDelay: 800,

			// GALLERY THEME
			galleryTheme : { 
				thumbnail: { background: '#444', backgroundImage: 'linear-gradient(315deg, #111 0%, #557 90%)', borderColor: '#000', labelOpacity : 1, labelBackground: '#444', titleColor: '#eee', titleBgColor: '#444', titleShadow: '' },
			},

			// DEEP LINKING
			locationHash: false,

			viewerToolbar: { display:true },
			viewerTools: { bottom:'label'}
		});
	}
}

function searchForLocations(locations, searchResult) {

	var locationsResult = [];

	// find all location names using HashMap
	var locationNames = new Map();
	searchResult.forEach(image => {
		locationNames.set(image[LOCATION_INDEX], 1);
	});

	// for each location name
	locationNames.forEach((value,key) => {
		//console.log(key);
		// find location by name
		for (var i = 0; i < all_locations.length; i++) {
			if (key === all_locations[i][0]) {
				locationsResult.push(all_locations[i]);
				break;
			}
		}
	});
	return locationsResult;
}
