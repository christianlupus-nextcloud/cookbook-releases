OC.L10N.register(
    "cookbook",
    {
    "No image with the matching MIME type was found on the server." : "Ingen bild med matchande MIME-typ hittades på servern.",
    "Recipe with ID %d was not found in database." : "Recept med ID %d hittades inte i databasen.",
    "Downloading of a file failed returned the following error message: %s" : "Nedladdning av fil misslyckades och returnerade följande felmeddelande: %s",
    "No content encoding was detected in the content." : "Ingen teckenkodning upptäcktes i innehållet.",
    "The given image for the recipe %s cannot be parsed. Aborting and skipping it." : "Den angivna bilden för receptet %s kunde inte tolkas. Avbryter och skippar den.",
    "No valid recipe was left after heuristics of recipe %s." : "Inget giltigt recept fanns kvar efter heuristiskt sökning av recept %s.",
    "Heuristics failed for image extraction of recipe %s." : "Heuristisk sökning misslyckades för bildextrahering från recept %s.",
    "Could not guess image URL as no recipe URL was found." : "Kunde inte gissa bildens URL då ingen URL för recept hittades.",
    "Could not guess image URL scheme from recipe URL %s" : "Kunde inte gissa bildens URL-schema från recept-URL %s.",
    "Could not parse recipe ingredients. It is no array." : "Kunde inte tolka receptets ingredienser, det är ingen array.",
    "Could not parse recipe instructions as they are no array." : "Kunde inte tolka receptets instruktioner då de är ingen array.",
    "Cannot parse recipe: Unknown object found during flattening of instructions." : "Kunde inte tolka recept: Okänt objekt upptäcktes när instruktionsdata skulle plattas ut.",
    "Did not find any p or li entries in the raw string of the instructions." : "Kunde inte hitta några p- eller li-taggar i instruktionernas råa sträng.",
    "Could not parse the keywords for recipe {recipe}." : "Kunde inte tolka nyckelord för recept {recipe}.",
    "Could not parse the nutrition information successfully for recipe {name}." : "Kunde inte framgångsrikt tolka näringsfakta för recept {name}.",
    "Using heuristics to parse the \"recipeYield\" field representing the number of servings of recipe {name}." : "Använder heuristisk sökning för att tolka \"recipeYield\"-fältet som representerar antalet portioner för recept {name}.",
    "_Only a single number was found in the \"recipeYield\" field. Using it as number of servings._::_There are %n numbers found in the \"recipeYield\" field. Using the highest number found as number of servings._" : ["Hittade endast ett nummer i \"recipeYield\"-fältet. Använder detta för antalet portioner."," Fann %nnummer under \"recipeYield\"-fältet. Använder högsta värdet som antalet portioner."],
    "Could not parse \"recipeYield\" field. Falling back to 1 serving." : "Kunde inte tolka \"recipeYield\"-fältet. Faller tillbaka mot 1 portion.",
    "Could not parse recipe tools. It is no array." : "Kunde inte tolka receptverktyg. Det är ingen array.",
    "Could not find recipe in HTML code." : "Kunde inte hitta recept i HTML-kod.",
    "JSON cannot be decoded." : "JSON kunde inte tolkas.",
    "No recipe was found." : "Inget recept funnet.",
    "Parsing of HTML failed." : "Tolkning av HTML misslyckades.",
    "Unsupported error level during parsing of XML output." : "Osupporterad felnivå under tolkning av XML-utdata.",
    "_Warning %u occurred while parsing %s._::_Warning %u occurred %n times while parsing %s._" : ["Varning %u inträffade under tolkning av %s.","Varning %u inträffade %n gånger under tolkning av %s."],
    "_Error %u occurred while parsing %s._::_Error %u occurred %n times while parsing %s._" : ["Fel %uinträffade under tolkning av %s.","Fel %u inträffade %n gånger under tolkning av %s."],
    "_Fatal error %u occurred while parsing %s._::_Fatal error %u occurred %n times while parsing %s._" : ["Kritiskt fel %u inträffade under tolkning av %s.","Kritiskt fel %u inträffade %n gånger under tolkning av %s."],
    "First time it occurred in line %u and column %u" : "Första gången inträffade det på rad %u och kolumn %u.",
    "Could not parse duration {duration}" : "Kunde inte tolka varaktighet {duration}",
    "The recipe has already an image file. Cannot create a new one." : "Receptet har redan en bild. Kan inte skapa en ny.",
    "There is no primary image for the recipe present." : "Det finns ingen huvudbild för receptet tillgängligt.",
    "Cannot parse non-POST multipart encoding. This is a bug." : "Kunde inte tolka icke-POST multipart teckenkodning. Detta är en bugg.",
    "Cannot detect type of transmitted data. This is a bug, please report it." : "Kunde inte identifiera typen av skickad data. Detta är en bugg, vänligen rapportera.",
    "Invalid URL-encoded string found. Please report a bug." : "Ogiltig URL-kodad sträng funnen. Vänligen rapportera en bugg.",
    "The user is not logged in. No user configuration can be obtained." : "Användaren är inte inloggad. Ingen användarkonfiguration kunde hämtas.",
    "Recipes" : "Recept",
    "The user folder cannot be created due to missing permissions." : "Användarens mapp kunde inte skapas på grund av avsaknade rättigheter.",
    "The configured user folder is a file." : "Den konfigurerade användarmappen är en fil.",
    "User cannot create recipe folder" : "Användare kan inte skapa receptmapp",
    "in %s" : "om %s",
    "The JSON file in the folder with ID %d does not have a valid name." : "JSON-fil i mappen med ID %d har inte ett giltigt namn.",
    "Could not parse URL" : "Kunde inte tolka URL",
    "Exception while downloading recipe from %s." : "Undantagsfel under nedladdning av recept från %s.",
    "Download from %s failed as HTTP status code %d is not in expected range." : "Nedladdning från %s misslyckades eftersom HTTP-statuskoden %d inte faller inom förväntat intervall.",
    "Could not find a valid encoding when parsing %s." : "Kunde inte hitta giltig teckenkodning under tolkning av %s.",
    "No parser found for the given import." : "Ingen tolk funnen för den givna importen.",
    "No recipe name was given. A unique name is required to store the recipe." : "Inget receptnamn angivet. Ett unikt namn krävs för att spara receptet.",
    "Another recipe with that name already exists" : "Ett annat recept med det namnet finns redan",
    "No recipe data found. This is a bug" : "Ingen receptdata funnen. Detta är en bugg",
    "Recipe with ID %d not found." : "Recept med ID %d inte funnen.",
    "Image size \"%s\" is not recognized." : "Bildstorlek \"%s\" känns inte igen.",
    "The full-sized image is not a thumbnail." : "Den fullstora bilden är inte en tumnagelbild.",
    "The thumbnail type %d is not known." : "Tumnagelbildstyp %d är okänd.",
    "Cookbook" : "Kokbok",
    "An integrated cookbook using schema.org JSON files as recipes" : "En integrerad kokbok som använder JSON-filer av typen schema.org för recept",
    "A library for all your recipes. It uses JSON files following the schema.org recipe format. To add a recipe to the collection, you can paste in the URL of the recipe, and the provided web page will be parsed and downloaded to whichever folder you specify in the app settings." : "Ett bibliotek för alla dina recept. Det använder JSON-filer som följer schema.org-formatet. För att lägga till ett recept i din samling, kopiera in webblänken till receptet, så kommer webbsidan med receptet att analyseras och hämtas till den mapp du valt under inställningarna.",
    "Editing recipe" : "Redigerar recept",
    "Viewing recipe" : "Visar recept",
    "All recipes" : "Alla recept",
    "Loading app" : "Laddar applikation",
    "Loading recipe" : "Läser in recept",
    "Recipe not found" : "Receptet hittades inte",
    "Page not found" : "Sidan hittades inte",
    "Creating new recipe" : "Skapar nytt recept",
    "Edit" : "Redigera",
    "Save" : "Spara",
    "Search" : "Sök",
    "Reload recipe" : "Hämta recept igen",
    "Print recipe" : "Skriv ut recept",
    "Delete recipe" : "Ta bort recept",
    "Filter" : "Filter",
    "Category" : "Kategori",
    "Recipe name" : "Namn på recept",
    "Tags" : "Taggar",
    "Search for recipes" : "Sök efter recept",
    "Are you sure you want to delete this recipe?" : "Är du säker på att du vill ta bort detta recept?",
    "Delete failed" : "Radering misslyckades",
    "Cannot access recipe folder." : "Kommer inte åt recept-mappen.",
    "You are logged in with a guest account. Therefore, you are not allowed to generate arbitrary files and folders on this Nextcloud instance. To be able to use the Cookbook app as a guest, you need to specify a folder where all recipes are stored. You will need write permission to this folder." : "Du är inloggad med ett gästkonto. Du är därför inte tillåten att generera godtyckliga filer och mappar på denna Nextcloud-instans. För att kunna nyttja Kokboks-appen som gäst behöver du specificera en mapp där alla recept är lagrade. Du behöver skrivrättigheter till denna mapp.",
    "Select recipe folder" : "Välj mapp för recept",
    "Path to your recipe collection" : "Sökväg till din receptsamling",
    "Create recipe" : "Skapa recept",
    "Uncategorized recipes" : "Okategoriserade recept",
    "Categories" : "Kategorier",
    "Rename" : "Döp om",
    "Enter new category name" : "Mata in nytt kategorinamn",
    "Download recipe from URL" : "Ladda ner recept från URL",
    "Toggle editing" : "Slå av/på redigering",
    "Failed to load category {category} recipes" : "Kunde inte läsa in recepten i kategorin {category}",
    "The server reported an error. Please check." : "Servern rapporterade ett fel. Vänligen kontrollera.",
    "Could not query the server. This might be a network problem." : "Kunde inte skicka anrop mot servern. Det kan finnas ett nätverksproblem.",
    "Loading category recipes …" : "Läser in recept från kategori…",
    "Failed to fetch categories" : "Kunde inte hämta kategorier",
    "Rescan library" : "Uppdatera bibliotek",
    "Please pick a folder" : "Vänligen välj en mapp",
    "Recipe folder" : "Receptmapp",
    "Update interval in minutes" : "Uppdateringsintervall",
    "Print image with recipe" : "Skriv ut bild med recept",
    "Show keyword cloud in recipe lists" : "Visa nyckelords-moln i receptlistor",
    "Could not set preference for image printing" : "Valen för bildutskrift gick inte att ställa in",
    "Could not set recipe update interval to {interval}" : "Kunde inte ställa in uppdateringsintervall till {interval}",
    "Could not set recipe folder to {path}" : "Kunde inte ange {path} som receptmapp",
    "Loading config failed" : "Laddning av konfiguration misslyckades",
    "Enter URL or select from your Nextcloud instance on the right" : "Mata in URL eller välj din Nextcloud-instans till höger",
    "Pick a local image" : "Välj en lokal bild",
    "Path to your recipe image" : "Sökväg till din receptbild",
    "Move entry up" : "Flytta upp inlägg",
    "Move entry down" : "Flytta ned inlägg",
    "Insert entry above" : "Infoga inlägg ovan",
    "Delete entry" : "Radera inlägg",
    "Add" : "Lägg till",
    "Close" : "Stäng",
    "The page was not found" : "Sidan hittades inte",
    "Name" : "Namn",
    "Description" : "Beskrivning",
    "URL" : "Webbadress",
    "Image" : "Bild",
    "Preparation time (hours:minutes)" : "Förberedelse (timmar:minuter)",
    "Cooking time (hours:minutes)" : "Tillagning (timmar:minuter)",
    "Total time (hours:minutes)" : "Total tid (timmar:minuter)",
    "Choose category" : "Välj kategori",
    "Keywords" : "Nyckelord",
    "Choose keywords" : "Välj nyckelord",
    "Servings" : "Portioner",
    "Toggle if the number of servings is present" : "Växla om antalet portioner är angivet",
    "Nutrition Information" : "Näringsinformation",
    "Pick option" : "Gör ett val",
    "Tools" : "Verktyg",
    "Ingredients" : "Ingredienser",
    "Instructions" : "Instruktioner",
    "You have unsaved changes! Do you still want to leave?" : "Du har osparade förändringar! Vill du fortfarande lämna?",
    "Calories" : "Kalorier",
    "E.g.: 450 kcal (amount & unit)" : "T.ex.: 450 kcal (mängd och enhet)",
    "Carbohydrate content" : "Kolhydrater",
    "E.g.: 2 g (amount & unit)" : "T.ex.: 2 g (mängd och enhet)",
    "Cholesterol content" : "Mängd kolesterol",
    "Fat content" : "Mängd fett",
    "Fiber content" : "Mängd fiber",
    "Protein content" : "Mängd protein",
    "Saturated-fat content" : "Mängd mättade fetter",
    "Serving size" : "Portionstorlek",
    "Enter serving size (volume or mass)" : "Mata in portionstorlek (volym eller massa)",
    "Sodium content" : "Mängd natrium",
    "Sugar content" : "Mängd socker",
    "Trans-fat content" : "Mängd transfetter",
    "Unsaturated-fat content" : "Mängd omättade fetter",
    "Failed to fetch keywords" : "Misslyckades att hämta nyckelord",
    "Loading recipe failed" : "Misslyckades med att ladda recept",
    "Unknown answer returned from server. See logs." : "Okänt svar returnerat från server. Se loggar.",
    "No answer for request was received." : "Inget svar från anropet mottogs.",
    "Could not start request to save recipe." : "Kunde inte starta anrop för att spara recept.",
    "Recipe image" : "Receptbild",
    "Select order" : "Välj ordning",
    "Creation date" : "Skapat datum",
    "Modification date" : "Ändringsdatum",
    "Toggle keyword" : "Växla nyckelord",
    "Keyword not contained in visible recipes" : "Nyckelord fanns inte inom synliga recept",
    "Toggle keyword area size" : "Växla storlek på nyckelordsområde",
    "Order keywords by number of recipes" : "Sortera nyckelord efter antal recept",
    "Order keywords alphabetically" : "Sortera nyckelord i alfabetisk ordning",
    "Cooking time is up!" : "Tillagningstiden är slut!",
    "Search recipes with this keyword" : "Sök recept med detta nyckelord",
    "Date created" : "Skapad datum",
    "Last modified" : "Senast ändrad",
    "Preparation time (H:MM)" : "Förberedelse (T:MM)",
    "Cooking time (H:MM)" : "Tillagning (T:MM)",
    "Total time (H:MM)" : "Total tid (T:MM)",
    "Serving Size" : "Portionstorlek",
    "Energy" : "Energi",
    "Sugar" : "Socker",
    "Carbohydrate" : "Kolhydrater",
    "Cholesterol" : "Kolesterol",
    "Fiber" : "Fiber",
    "Protein" : "Protein",
    "Sodium" : "Natrium",
    "Fat total" : "Fett totalt",
    "Saturated Fat" : "Mättat fett",
    "Unsaturated Fat" : "Omättat fett",
    "Trans Fat" : "Transfett",
    "Source" : "Källa",
    "Loading…" : "Läser in…",
    "Failed to load recipes with keywords: {tags}" : "Misslyckades med att ladda recept med nyckelorden: {tags}",
    "Failed to load search results" : "Misslyckades att ladda sökresultat",
    "Dismiss" : "Avfärda",
    "Cancel" : "Avbryt",
    "OK" : "OK",
    "None" : "Ingen",
    "Abort editing" : "Avbryt redigering",
    "Cookbook settings" : "Kokboksinställningar",
    "Recipe display settings" : "Visningsinställningar för recept",
    "Preparation time" : "Förberedningstid",
    "Cooking time" : "Tillagningstid",
    "Total time" : "Total tid"
},
"nplurals=2; plural=(n != 1);");
