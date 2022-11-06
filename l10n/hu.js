OC.L10N.register(
    "cookbook",
    {
    "No image with the matching MIME type was found on the server." : "Nem található egyező MIME-típusú kép a kiszolgálón.",
    "Recipe with ID %d was not found in database." : "A(z) „%d” azonosítójú recept nem található az adatbázisban.",
    "Downloading of a file failed returned the following error message: %s" : "A fájl letöltése sikertelen, a következő hibaüzenetet adta vissza: %s",
    "No content encoding was detected in the content." : "Nem észlelhető tartalomkódolás a tartalomban.",
    "The given image for the recipe %s cannot be parsed. Aborting and skipping it." : "A(z) %s recepthez megadott kép nem dolgozható fel. Megszakítás és kihagyás.",
    "No valid recipe was left after heuristics of recipe %s." : "A(z) %s recept heurisztikája után nem maradt érvényes recept.",
    "Heuristics failed for image extraction of recipe %s." : "A(z) %s recept képének kinyeréséhez használt heurisztika sikertelen volt.",
    "Could not guess image URL as no recipe URL was found." : "A kép webcíme nem található ki, mert nem található webcím a recepthez.",
    "Could not guess image URL scheme from recipe URL %s" : "A kép webcímsémája nem található ki a recept webcíméből: %s",
    "Could not parse recipe ingredients. It is no array." : "A recept hozzávalói nem dolgozhatók fel. Nem tömb.",
    "Could not parse recipe instructions as they are no array." : "A recept utasításai nem dolgozhatók fel, mert nem alkotnak tömböt.",
    "Cannot parse recipe: Unknown object found during flattening of instructions." : "A recept nem dolgozható fel: ismeretlen objektum az utasítások összeállításakor.",
    "Did not find any p or li entries in the raw string of the instructions." : "Nem találhatók p vagy li elemek az utasítások nyers szövegében.",
    "Could not parse the keywords for recipe {recipe}." : "A(z) {recipe} recept kulcsszavai nem dolgozhatók fel.",
    "Could not parse the nutrition information successfully for recipe {name}." : "A(z) {recipe} recept tápértékadatai nem dolgozhatók fel.",
    "Using heuristics to parse the \"recipeYield\" field representing the number of servings of recipe {name}." : "Heurisztika használata a(z) {name} recept „recipeYield” mezőjének feldolgozásához.",
    "_Only a single number was found in the \"recipeYield\" field. Using it as number of servings._::_There are %n numbers found in the \"recipeYield\" field. Using the highest number found as number of servings._" : ["%n szám található a „recipeYield” mezőben. A legnagyobb szám lesz adagszámként használva.","%n szám található a „recipeYield” mezőben. A legnagyobb szám lesz adagszámként használva."],
    "Could not parse \"recipeYield\" field. Falling back to 1 serving." : "A „recipeYield” mező nem dolgozható fel. Visszaállás 1 adagra.",
    "Could not parse recipe tools. It is no array." : "A recept eszközei nem dolgozhatók fel. Nem tömb.",
    "Could not find recipe in HTML code." : "Nem található recept a HTML kódban.",
    "JSON cannot be decoded." : "A JSON nem dekódolható.",
    "No recipe was found." : "Nem található recept.",
    "Parsing of HTML failed." : "A HTML feldolgozása sikertelen.",
    "Unsupported error level during parsing of XML output." : "Nem támogatott hibaszint az XML kimenet feldolgozása során.",
    "_Warning %u occurred while parsing %s._::_Warning %u occurred %n times while parsing %s._" : ["%u kódú figyelmeztetést történt a(z) %s feldolgozása során.","%u kódú figyelmeztetést történt %n alkalommal a(z) %s feldolgozása során."],
    "_Error %u occurred while parsing %s._::_Error %u occurred %n times while parsing %s._" : ["%u kódú hiba történt a(z) %s feldolgozása során.","%u kódú hiba történt %n alkalommal a(z) %s feldolgozása során."],
    "_Fatal error %u occurred while parsing %s._::_Fatal error %u occurred %n times while parsing %s._" : ["%u kódú végzetes hiba történt a(z) %s feldolgozása során.","%u kódú végzetes hiba történt %n alkalommal a(z) %s feldolgozása során."],
    "First time it occurred in line %u and column %u" : "Először itt történt: %u. sor, %u. oszlop",
    "Could not parse duration {duration}" : "A hossz nem dolgozható fel: {duration}",
    "The recipe has already an image file. Cannot create a new one." : "A receptnek már van képfájlja. Nem hozhat létre újat.",
    "There is no primary image for the recipe present." : "Nincs elsődleges kép a recepthez.",
    "Cannot parse non-POST multipart encoding. This is a bug." : "Nem elemezhető a nem POST többrészes kódolás. Ez egy hiba.",
    "Cannot detect type of transmitted data. This is a bug, please report it." : "Az átadott adatok típusa nem érzékelhető. Ez egy hiba, kérjük, jelezze.",
    "Invalid URL-encoded string found. Please report a bug." : "Érvénytelen URL-kódolású karakterlánc található. Jelentse be a hibát.",
    "The user is not logged in. No user configuration can be obtained." : "A felhasználó nincs bejelentkezve. Nem szerezhetők meg a felhasználói beállítások.",
    "Recipes" : "Receptek",
    "The user folder cannot be created due to missing permissions." : "A felhasználói mappa a hiányzó jogosultságok miatt nem hozható létre.",
    "The configured user folder is a file." : "A beállított felhasználói mappa egy fájl.",
    "User cannot create recipe folder" : "A felhasználó nem hozhat létre receptmappát",
    "in %s" : "itt:  %s",
    "The JSON file in the folder with ID %d does not have a valid name." : "A(z) %d azonosítójú mappában lévő JSON-fájl neve érvénytelen.",
    "Could not parse URL" : "Nem sikerült az URL feldolgozása",
    "Exception while downloading recipe from %s." : "Kivétel a recept letöltésekor innen: %s.",
    "Download from %s failed as HTTP status code %d is not in expected range." : "A(z) %s helyről történő letöltés sikertelen, mert a HTTP állapotkód (%d) nem a várt tartományba esik.",
    "Could not find a valid encoding when parsing %s." : "Nem található érvényes kódolása a(z) %s feldolgozásakor.",
    "No parser found for the given import." : "Nem található értelmező a megadott importáláshoz.",
    "No recipe name was given. A unique name is required to store the recipe." : "Nincs receptnév megadva. Egyedi név szükséges a recept tárolásához.",
    "Another recipe with that name already exists" : "Ezzel a névvel már létezik egy másik recept",
    "No recipe data found. This is a bug" : "Nem találhatók receptadatok. Ez egy hiba.",
    "Recipe with ID %d not found." : "A(z) „%d” azonosítójú recept nem található.",
    "Image size \"%s\" is not recognized." : "A(z) „%s” képméret nem ismerhető fel.",
    "The full-sized image is not a thumbnail." : "A teljes méretű kép nem bélyegkép.",
    "The thumbnail type %d is not known." : "A(z) „%d” bélyegképtípus nem ismerhető fel.",
    "Cookbook" : "Receptkönyv",
    "An integrated cookbook using schema.org JSON files as recipes" : "Egy integrát receptkönyv schema.org JSON fájlok használatával",
    "A library for all your recipes. It uses JSON files following the schema.org recipe format. To add a recipe to the collection, you can paste in the URL of the recipe, and the provided web page will be parsed and downloaded to whichever folder you specify in the app settings." : "Egy könyvtár az összes receptjének. A schema.org receptformátumot követve JSON-fájlokat használ. Egy recept gyűjteményhez adásához csak be kell illesztenie a recept URL-jét, és a megadott honlap letöltődik az alkalmazás beállításaiban megadott mappába.",
    "Editing recipe" : "Recept szerkesztése",
    "Viewing recipe" : "Recept megtekintése",
    "All recipes" : "Összes recept",
    "Loading app" : "Alkalmazás betöltése",
    "Loading recipe" : "Recept betöltése",
    "Recipe not found" : "A recept nem található",
    "Page not found" : "Az oldal nem található",
    "Creating new recipe" : "Új recept létrehozása",
    "Edit" : "Szerkesztés",
    "Save" : "Mentés",
    "Search" : "Keresés",
    "Reload recipe" : "Recept újratöltése",
    "Print recipe" : "Recept nyomtatása",
    "Delete recipe" : "Recept törlése",
    "Filter" : "Szűrés",
    "Category" : "Kategória",
    "Recipe name" : "Recept neve",
    "Tags" : "Címkék",
    "Search for recipes" : "Receptek keresése",
    "Are you sure you want to delete this recipe?" : "Biztos, hogy törli ezt a receptet?",
    "Delete failed" : "Törlés sikertelen",
    "Cannot access recipe folder." : "A receptmappához nem lehet hozzáférni.",
    "You are logged in with a guest account. Therefore, you are not allowed to generate arbitrary files and folders on this Nextcloud instance. To be able to use the Cookbook app as a guest, you need to specify a folder where all recipes are stored. You will need write permission to this folder." : "Vendégfiókkal van bejelentkezve, ezért nem hozhat létre tetszőleges fájlokat és mappákat ezen a Nextcloud példányon. Ahhoz, hogy vendégként használhassa a Receptkönyv alkalmazást, meg kell adnia egy mappát, ahol az összes recept tárolásra kerül. Írási jogosultságra lesz szüksége ebben a mappában.",
    "Select recipe folder" : "Válassza ki a receptmappát",
    "Path to your recipe collection" : "A receptgyűjteménye útvonala",
    "Create recipe" : "Recept létrehozása",
    "Uncategorized recipes" : "Kategória nélküli receptek",
    "Categories" : "Kategóriák",
    "Rename" : "Átnevezés",
    "Enter new category name" : "Írja be az új kategória nevét",
    "Download recipe from URL" : "Recept letöltése az URL-ről",
    "Toggle editing" : "Szerkesztés be/ki",
    "Failed to load category {category} recipes" : "Nem sikerült betölteni a(z) {category} kategória receptjeit",
    "The server reported an error. Please check." : "A kiszolgáló hibát jelentett. Ellenőrizze.",
    "Could not query the server. This might be a network problem." : "Nem sikerült lekérdezni a kiszolgálót. Ez hálózati problémát jelenthet.",
    "Loading category recipes …" : "Kategória receptjeinek betöltése…",
    "Failed to fetch categories" : "Hiba a kategóriák letöltésekor",
    "Rescan library" : "Könyvtár újbóli átvizsgálása",
    "Please pick a folder" : "Válasszon mappát",
    "Recipe folder" : "Receptmappa",
    "Update interval in minutes" : "Frissítési időszak percben",
    "Print image with recipe" : "Kép nyomtatása a recepttel",
    "Show keyword cloud in recipe lists" : "Kulcsszófelhő megjelenítése a receptlistákban",
    "Could not set preference for image printing" : "A képnyomtatás beállításai nem adható meg",
    "Could not set recipe update interval to {interval}" : "A recept frissítési idejét nem lehet erre állítani: {interval}",
    "Could not set recipe folder to {path}" : "A recept mappát nem lehet erre állítani: {path}",
    "Loading config failed" : "A konfiguráció betöltése sikertelen",
    "Enter URL or select from your Nextcloud instance on the right" : "Adja meg az URL-t vagy válasszon a Nexcloud példányáról a jobb oldalon",
    "Pick a local image" : "Válasszon egy helyi képet",
    "Path to your recipe image" : "Útvonal a recept képéhez",
    "Move entry up" : "Mozgatás felfelé",
    "Move entry down" : "Mozgatás lefelé",
    "Insert entry above" : "Bejegyzés beillesztése fent",
    "Delete entry" : "Bejegyzés törlése",
    "Add" : "Hozzáadás",
    "Close" : "Bezárás",
    "The page was not found" : "Az oldal nem található",
    "Name" : "Név",
    "Description" : "Leírás",
    "URL" : "URL",
    "Image" : "Kép",
    "Preparation time (hours:minutes)" : "Előkészítési idő (óra:perc)",
    "Cooking time (hours:minutes)" : "Főzési idő (óra:perc)",
    "Total time (hours:minutes)" : "Teljes idő (óra:perc)",
    "Choose category" : "Válasszon kategóriát",
    "Keywords" : "Kulcsszavak",
    "Choose keywords" : "Válasszon kulcsszavakat",
    "Servings" : "Adagok",
    "Toggle if the number of servings is present" : "Kapcsolja be, ha szerepel az adagok száma",
    "Nutrition Information" : "Táplálkozási információk",
    "Pick option" : "Válasszon egy lehetőséget",
    "Tools" : "Eszközök",
    "Ingredients" : "Hozzávalók",
    "Instructions" : "Leírások",
    "You have unsaved changes! Do you still want to leave?" : "Nem mentett módosításai vannak! Elhagyja az oldalt?",
    "Calories" : "Kalória",
    "E.g.: 450 kcal (amount & unit)" : "Például 450 kcal (mennyiség és egység)",
    "Carbohydrate content" : "Szénhidráttartalom",
    "E.g.: 2 g (amount & unit)" : "Például 2 g (mennyiség és egység)",
    "Cholesterol content" : "Koleszterintartalom",
    "Fat content" : "Zsírtartalom",
    "Fiber content" : "Rosttartalom",
    "Protein content" : "Fehérjetartalom",
    "Saturated-fat content" : "Telített zsírtartalom",
    "Serving size" : "Adag",
    "Enter serving size (volume or mass)" : "Adja meg az adag méretét (mennyiség vagy tömeg)",
    "Sodium content" : "Nátriumtartalom",
    "Sugar content" : "Cukortartalom",
    "Trans-fat content" : "Transzzsírtartalom",
    "Unsaturated-fat content" : "Telítetlen zsírtartalom",
    "Failed to fetch keywords" : "Nem sikerült beolvasni a kulcsszavakat",
    "Loading recipe failed" : "A recept betöltése sikertelen",
    "Unknown answer returned from server. See logs." : "Ismeretlen válasz érkezett a kiszolgálótól. Nézze meg a naplókat.",
    "No answer for request was received." : "A kérésre nem érkezett válasz.",
    "Could not start request to save recipe." : "Nem lehet recept mentési kérést indítani.",
    "Recipe image" : "Recept kép",
    "Select order" : "Válassza ki a sorrendet",
    "Creation date" : "Létrehozás dátuma",
    "Modification date" : "Módosítás dátuma",
    "Toggle keyword" : "Kulcsszó be/ki",
    "Keyword not contained in visible recipes" : "A kulcsszó nem szerepel a látható receptekben",
    "Toggle keyword area size" : "A kulcsszavak területének méretének váltása",
    "Order keywords by number of recipes" : "Receptek száma szerinti felsorolás",
    "Order keywords alphabetically" : "Betűrendbeni felsorolás",
    "Cooking time is up!" : "Lejárt a főzési idő.",
    "Search recipes with this keyword" : "Receptek keresése ezzel a kulcsszóval",
    "Date created" : "Létrehozás dátuma",
    "Last modified" : "Utoljára módosítva",
    "Preparation time (H:MM)" : "Előkészítési idő (ó:pp)",
    "Cooking time (H:MM)" : "Főzési idő (ó:pp)",
    "Total time (H:MM)" : "Teljes odő (ó:pp)",
    "Serving Size" : "Adag",
    "Energy" : "Energia",
    "Sugar" : "Cukor",
    "Carbohydrate" : "Szénhidrát",
    "Cholesterol" : "Koleszterin",
    "Fiber" : "Rost",
    "Protein" : "Fehérje",
    "Sodium" : "Nátrium",
    "Fat total" : "Zsír összesen",
    "Saturated Fat" : "Telített zsír",
    "Unsaturated Fat" : "Telítetlen zsír",
    "Trans Fat" : "Transzzsír",
    "Source" : "Forrás",
    "Loading…" : "Betöltés…",
    "Failed to load recipes with keywords: {tags}" : "Nem sikerült betölteni a kulcsszavakkal ellátott recepteket: {tags}",
    "Failed to load search results" : "Nem sikerült betölteni a találatokat",
    "Dismiss" : "Eltüntetés",
    "Cancel" : "Mégse",
    "OK" : "Rendben",
    "Abort editing" : "Szerkesztés megszakítása"
},
"nplurals=2; plural=(n != 1);");
