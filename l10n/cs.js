OC.L10N.register(
    "cookbook",
    {
    "No image with the matching MIME type was found on the server." : "Na serveru nebyl nalezen žádný obrázek s odpovídajícím MIME typem.",
    "Recipe with ID %d was not found in database." : "Recept s identif. %d nebyl nalezen v databázi. ",
    "Downloading of a file failed returned the following error message: %s" : "Stahování souboru se nezdařilo, přičemž byla vráceno následující hlášení chyby: %s",
    "No content encoding was detected in the content." : "V obsahu nebylo zjištěno žádné enkódování obsahu.",
    "The given image for the recipe %s cannot be parsed. Aborting and skipping it." : "Daný obrázek pro recept %s není možné zpracovat. Přerušuje se a přeskakuje.",
    "No valid recipe was left after heuristics of recipe %s." : "Po heuristické analýze receptu %s nezbyl žádný platný recept.",
    "Heuristics failed for image extraction of recipe %s." : "Heuristika se při vytahování obrázku z receptu %s nezdařila.",
    "Could not guess image URL as no recipe URL was found." : "Nedaří se odhadnout URL adresu obrázku, protože nebyla nalezena žádná URL receptu.",
    "Could not guess image URL scheme from recipe URL %s" : "Nedaří se odhadnout schéma URL adresy obrázku z URL receptu %s",
    "Could not parse recipe ingredients. It is no array." : "Nedaří se zpracovat přísady receptu. Nejedná se o datové pole.",
    "Could not parse recipe instructions as they are no array." : "Nedaří se zpracovat pokyny receptu, protože se nejedná o datové pole.",
    "Cannot parse recipe: Unknown object found during flattening of instructions." : "Nedaří se zpracovat recept. Při zplošťování pokynů nalezen neznámý objekt.",
    "Did not find any p or li entries in the raw string of the instructions." : "Nepodařilo se nalézt žádné položky p nebo li v nezpracovaném řetězci pokynů.",
    "Could not parse the keywords for recipe {recipe}." : "Nepodařilo se zpracovat klíčová slova pro recept {recipe}.",
    "Could not parse the nutrition information successfully for recipe {name}." : "Nedaří se zpracovat výživové údaje u receptu {name}.",
    "Using heuristics to parse the \"recipeYield\" field representing the number of servings of recipe {name}." : "Pro zpracování kolonky „recipeYield“ (výtěžnost), představující počet porcí z receptu {name}, použít heuristiku.",
    "_Only a single number was found in the \"recipeYield\" field. Using it as number of servings._::_There are %n numbers found in the \"recipeYield\" field. Using the highest number found as number of servings._" : ["V kolonce „recipeYield“ nalezeno pouze jedno číslo. Bude použito jako počet porcí.","V kolonce „recipeYield“ nalezena %n čísla. Nejvyšší z nich bude použito jako počet porcí.","V kolonce „recipeYield“ nalezeno %n čísel. Nejvyšší z nich bude použito jako počet porcí. ","V kolonce „recipeYield“ nalezena %n čísla. Nejvyšší z nich bude použito jako počet porcí."],
    "Could not parse \"recipeYield\" field. Falling back to 1 serving." : "Nedaří se zpracovat kolonku „recipeYield“. Náhradně je předpokládána jedna porce.",
    "Could not parse recipe tools. It is no array." : "Nedaří se zpracovat nástroje receptu. Nejedná se o datové pole.",
    "Could not find recipe in HTML code." : "V HTML zdrojovém kódu se nedaří najít recept.",
    "JSON cannot be decoded." : "JSON se nedaří dekódovat.",
    "No recipe was found." : "Nebyl nalezen žádný recept.",
    "Parsing of HTML failed." : "Zpracovávání HTML se nezdařilo.",
    "Unsupported error level during parsing of XML output." : "Nepodporovaný chybová úroveň při zpracovávání XML výstupu.",
    "_Warning %u occurred while parsing %s._::_Warning %u occurred %n times while parsing %s._" : ["Při zpracovávání %s se vyskytlo varování %u.","Při zpracovávání %s se vyskytla varování %u.","Při zpracovávání %s se vyskytlo varování %u.","Při zpracovávání %s se vyskytlo varování %u – %n krát."],
    "_Error %u occurred while parsing %s._::_Error %u occurred %n times while parsing %s._" : ["Při zpracovávání %s se vyskytla chyba %u.","Při zpracovávání %s se vyskytly chyby %u.","Při zpracovávání %s se vyskytly chyby %u.","Při zpracovávání %s se vyskytla chyba %u – %n krát."],
    "_Fatal error %u occurred while parsing %s._::_Fatal error %u occurred %n times while parsing %s._" : ["Při zpracovávání %s se vyskytla zásadní chyba %u.","Při zpracovávání %s se vyskytly zásadní chyby %u.","Při zpracovávání %s se vyskytly zásadní chyby %u.","Při zpracovávání %s se vyskytla zásadní chyba %u – %n krát."],
    "First time it occurred in line %u and column %u" : "Poprvé se objevilo na řádku %u, ve sloupci %u",
    "Could not parse duration {duration}" : "Nedaří se zpracovat dobu přípravy {duration}",
    "The recipe has already an image file. Cannot create a new one." : "Recept už obsahuje obrázek. Není možné vytvořit další.",
    "There is no primary image for the recipe present." : "U receptu se nenachází žádný hlavní obrázek.",
    "Cannot parse non-POST multipart encoding. This is a bug." : "Nedaří se zpracovat ne-POST znakovou sadu z více částí. Toto je chyba.",
    "Cannot detect type of transmitted data. This is a bug, please report it." : "Nezjištěn typ přenášených dat. Toto je chyba – prosíme, nahlaste ji.",
    "Invalid URL-encoded string found. Please report a bug." : "Nalezen neplatný řetězec v URL. Prosím nahlaste chybu.",
    "The user is not logged in. No user configuration can be obtained." : "Uživatel není přihlášený. Není proto možné získat žádná nastavení pro něho.",
    "Recipes" : "Recepty",
    "The user folder cannot be created due to missing permissions." : "Složku uživatele není možné vytvořit kvůli chybějícím oprávněním.",
    "The configured user folder is a file." : "Nastavená složka uživatele je ve skutečnosti soubor.",
    "User cannot create recipe folder" : "Uživatel nemůže vytvořit složku receptů",
    "in %s" : "v %s",
    "The JSON file in the folder with ID %d does not have a valid name." : "JSON soubor ve složce s identif. %d nemá platný název.",
    "Could not parse URL" : "Nepodařilo se zpracovat URL",
    "Exception while downloading recipe from %s." : "Při stahování receptu z %s došlo k výjimce.",
    "Download from %s failed as HTTP status code %d is not in expected range." : "Stažení z %s se nezdařilo, protože HTTP stavový kód %d není v očekávaném rozsahu.",
    "Could not find a valid encoding when parsing %s." : "Při zpracovávání %s nebylo nalezeno platné enkódování.",
    "No parser found for the given import." : "Nenalezen žádný nástroj pro zpracování daného importu.",
    "No recipe name was given. A unique name is required to store the recipe." : "Nebyl zadán žádný název pro recept. Aby recept bylo možné uložit, je zapotřebí ho nazvat a to tak, aby se nejmenoval stejně, jako nějaký jiný.",
    "Another recipe with that name already exists" : "Pod tímto názvem už existuje jiný recept",
    "No recipe data found. This is a bug" : "Nenalezena žádná data. Toto je chyba",
    "Recipe with ID %d not found." : "Recept s identif. %d nenalezen.",
    "Image size \"%s\" is not recognized." : "Velikost obrázku „%s“ nerozpoznána.",
    "The full-sized image is not a thumbnail." : "Obrázek v plné velikosti není náhled.",
    "The thumbnail type %d is not known." : "Typ náhledového obrázku %d není znám.",
    "Cookbook" : "Kuchařka",
    "An integrated cookbook using schema.org JSON files as recipes" : "Vestavěná kuchařka používající pro recepty JSON soubory schema.org",
    "A library for all your recipes. It uses JSON files following the schema.org recipe format. To add a recipe to the collection, you can paste in the URL of the recipe, and the provided web page will be parsed and downloaded to whichever folder you specify in the app settings." : "Knihovna pro všechny vaše recepty. Používá JSON soubory podle formátu receptů schema.org. Recept přidáte do sbírky vložením URL adresy receptu a zadaná webová stránka bude zpracována a staženo do složky, kterou určíte v nastavení aplikace.",
    "Editing recipe" : "Upravování receptu",
    "Viewing recipe" : "Zobrazování receptu",
    "All recipes" : "Všechny recepty",
    "Loading app" : "Načítání aplikace",
    "Loading recipe" : "Načítání receptu",
    "Recipe not found" : "Recept nenalezen",
    "Page not found" : "Stránka nenalezena",
    "Creating new recipe" : "Vytváření nového receptu",
    "Edit" : "Upravit",
    "Save" : "Uložit",
    "Search" : "Hledat",
    "Reload recipe" : "Načíst recept znovu",
    "Print recipe" : "Vytisknout recept",
    "Delete recipe" : "Smazat recept",
    "Filter" : "Filtr",
    "Category" : "Kategorie",
    "Recipe name" : "Název receptu",
    "Tags" : "Štítky",
    "Search for recipes" : "Hledat recepty",
    "Are you sure you want to delete this recipe?" : "Opravdu chcete tento recept smazat?",
    "Delete failed" : "Smazání se nezdařilo",
    "Cannot access recipe folder." : "Bez přístupu ke složce receptů.",
    "You are logged in with a guest account. Therefore, you are not allowed to generate arbitrary files and folders on this Nextcloud instance. To be able to use the Cookbook app as a guest, you need to specify a folder where all recipes are stored. You will need write permission to this folder." : "Jste přihlášeni přes účet pro hosty. Proto na této instanci Nextcloudu nemůžete svévolně vytvářet složky a soubory. Abyste mohli používat aplikaci Kuchařka jako host, musíte určit složku, do které se mají všechny recepty ukládat. Budete potřebovat práva pro zápis do této složky.",
    "Select recipe folder" : "Vybrat složku receptů",
    "Path to your recipe collection" : "Popis umístění sbírky receptů",
    "Create recipe" : "Vytvořit recept",
    "Uncategorized recipes" : "Nezařazené recepty",
    "Categories" : "Kategorie",
    "Rename" : "Přejmenovat",
    "Enter new category name" : "Zadejte nový název kategorie",
    "Download recipe from URL" : "Stáhnout si recept z URL adresy",
    "Toggle editing" : "Přepnout do upravování",
    "Failed to load category {category} recipes" : "Nepodařilo se načíst recepty z kategorie {category}",
    "The server reported an error. Please check." : "Tento server ohlásil chybu – podívejte se na to.",
    "Could not query the server. This might be a network problem." : "Nepodařilo se dotázat serveru. To může být způsobeno problémem na síti.",
    "Loading category recipes …" : "Načítání receptů v této kategorii…",
    "Failed to fetch categories" : "Nepodařilo se získat kategorie",
    "Rescan library" : "Znovu projít knihovnu",
    "Please pick a folder" : "Vyberte složku",
    "Recipe folder" : "Složka pro recepty",
    "Update interval in minutes" : "Interval aktualizace (v minutách)",
    "Print image with recipe" : "Vytisknout obrázek s receptem",
    "Show keyword cloud in recipe lists" : "V seznamech receptů zobrazovat mrak klíčových slov",
    "Could not set preference for image printing" : "Nedaří se nastavit předvolby pro tisk obrázku",
    "Could not set recipe update interval to {interval}" : "Nepodařilo se nastavit interval aktualizace receptů na {interval}",
    "Could not set recipe folder to {path}" : "Nepodařilo se nastavit složku pro recepty na {path}",
    "Loading config failed" : "Načítání nastavení se nezdařilo",
    "Enter URL or select from your Nextcloud instance on the right" : "Zadejte URL adresu nebo napravo vyberte z vámi využívané instance Nextcloud",
    "Pick a local image" : "Vyberte místní obrázek",
    "Path to your recipe image" : "Popis umístění obrázku k receptu",
    "Move entry up" : "Přesunout položku nahoru",
    "Move entry down" : "Přesunout položku dolů",
    "Insert entry above" : "Vložit položku nad",
    "Delete entry" : "Smazat položku",
    "Add" : "Přidat",
    "Close" : "Zavřít",
    "The page was not found" : "Stránka nebyla nalezena",
    "Name" : "Název",
    "Description" : "Popis",
    "URL" : "URL",
    "Image" : "Obrázek",
    "Preparation time (hours:minutes)" : "Doba přípravy (hodin:minut):",
    "Cooking time (hours:minutes)" : "Doba vaření (hodin:minut):",
    "Total time (hours:minutes)" : "Celková doba (hodin:minut):",
    "Choose category" : "Vyberte kategorii",
    "Keywords" : "Klíčová slova",
    "Choose keywords" : "Vyberte klíčová slova",
    "Servings" : "Porce",
    "Toggle if the number of servings is present" : "Zapnout pokud je k dispozici počet porcí",
    "Nutrition Information" : "Výživové informace",
    "Pick option" : "Vybrat možnost",
    "Tools" : "Nástroje",
    "Ingredients" : "Přísady",
    "Instructions" : "Pokyny",
    "You have unsaved changes! Do you still want to leave?" : "Jsou zde neuložené změny! Opravdu chcete odejít?",
    "Calories" : "Kalorie",
    "E.g.: 450 kcal (amount & unit)" : "Např.: 450 kcal (množství a jednotka)",
    "Carbohydrate content" : "Obsah sacharidů",
    "E.g.: 2 g (amount & unit)" : "Např.: 2 g (množství a jednotka)",
    "Cholesterol content" : "Obsah cholesterolu",
    "Fat content" : "Obsah tuku",
    "Fiber content" : "Obsah vlákniny",
    "Protein content" : "Obsah bílkovin",
    "Saturated-fat content" : "Obsah nasycených tuků",
    "Serving size" : "Velikost porce",
    "Enter serving size (volume or mass)" : "Zadejte velikost porce (objem nebo hmotnost)",
    "Sodium content" : "Obsah sodíku",
    "Sugar content" : "Obsah cukru",
    "Trans-fat content" : "Obsah trans mastných kyselin",
    "Unsaturated-fat content" : "Obsah nenasycených tuků",
    "Failed to fetch keywords" : "Načtení klíčových slov se nezdařilo",
    "Loading recipe failed" : "Načítání receptu se nezdařilo",
    "Unknown answer returned from server. See logs." : "Ze serveru byla přijata neznámá odpověď. Prohlédněte si záznamy událostí.",
    "No answer for request was received." : "Na požadavek nebyla obdržena žádná odpověď",
    "Could not start request to save recipe." : "Požadavek na uložení receptu nebyl odeslán.",
    "Recipe image" : "Obrázek receptu",
    "Select order" : "Vyberte pořadí",
    "Creation date" : "Datum vytvoření",
    "Modification date" : "Datum změny",
    "Toggle keyword" : "Přepnout klíčové slovo",
    "Keyword not contained in visible recipes" : "Klíčové slovo není obsaženo ve viditelných receptech",
    "Toggle keyword area size" : "Přepnout velikost oblasti s klíčovými slovy",
    "Order keywords by number of recipes" : "Seřadit klíčová slova podle počtu receptů",
    "Order keywords alphabetically" : "Seřadit klíčová slova abecedně",
    "Cooking time is up!" : "Čas vaření je u konce!",
    "Search recipes with this keyword" : "Vyhledat recepty s tímto klíčovým slovem",
    "Date created" : "Datum vytvoření",
    "Last modified" : "Naposledy změněno",
    "Preparation time (H:MM)" : "Doba přípravy (H:MM):",
    "Cooking time (H:MM)" : "Doba vaření (H:MM):",
    "Total time (H:MM)" : "Celková doba (H:MM):",
    "Serving Size" : "Velikost porce",
    "Energy" : "Energetická hodnota",
    "Sugar" : "Cukry",
    "Carbohydrate" : "Sacharidy",
    "Cholesterol" : "Cholesterol",
    "Fiber" : "Vláknina",
    "Protein" : "Bílkoviny",
    "Sodium" : "Sodík",
    "Fat total" : "Tuky celkem",
    "Saturated Fat" : "Nasycené mastné kyseliny",
    "Unsaturated Fat" : "Nenasycené mastné kyseliny",
    "Trans Fat" : "Trans mastné kyseliny",
    "Source" : "Zdroj",
    "Loading…" : "Načítání…",
    "Failed to load recipes with keywords: {tags}" : "Nepodařilo se načíst recepty, obsahující klíčová slova: {tags}",
    "Failed to load search results" : "Nepodařilo se načíst výsledky vyhledávání",
    "Dismiss" : "Zahodit",
    "Cancel" : "Storno",
    "OK" : "OK",
    "None" : "Žádná",
    "Abort editing" : "Přerušit úpravy",
    "Cookbook settings" : "Nastavení pro Kuchařku",
    "Recipe display settings" : "Nastavení zobrazení receptu",
    "Preparation time" : "Doba přípravy",
    "Cooking time" : "Doba vaření",
    "Total time" : "Celková doba"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
