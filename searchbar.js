        const searchInput = document.getElementById("searchInput");
        const suggestionsDiv = document.getElementById("suggestions");
        const searchResults = document.getElementById("searchResults");

        // Define specific sentences and their corresponding answers
        const queries = {
            "Předmět se nachází v říši, který má malý ostrůvek na východ od pevniny": "Pyungmoo",
            "Předmět byl naposled spatřen poblíž města, které leží na rohu dvou spojujících se řek.":  "Pyungmoo",
            "Obchodní velmoc": "Pyungmoo",
            "Předmět se nachází v říši s řekou pramenící v západních horách, která končí svou pouť vodopádem, který spadá přímo do prameniště další řeky": "Pyungmoo",
            "Předmět se nachází ve městě, z kterého vedou 3 mosty": "Pyungmoo",
            "Předmět se nachází v nejzalidnatější oblasti Stellarie": "Pyungmoo",
            "Předmět se nachází v říši, který má malý ostrůvek na východ od pevniny.": "Pyungmoo",
            "Předmět byl naposled spatřen poblíž města, které leží na rohu dvou spojujících se řek.": "Pyungmoo",
            "Předmět se nachází v říši s řekou pramenící v západních horách, která končí svou pouť vodopádem, který spadá přímo do prameniště další řeky.": "Pyungmoo",
            "Předmět se nachází ve městě, z kterého vedou 3 mosty.": "Pyungmoo",
            "Předmět se nachází v nejzalidnatější oblasti Stellarie.": "Pyungmoo",
            "Předmět byl naposled spatřen v jednom z vedlejších měst, v kterém se nachází skupina bojovníků bílé přísahy na severovýchodě mapy.": "Bakra",
            "Předmět se nachází poblíž města, jehož obyvatelé jsou uctívači černého větru a je známo pověstnou loukou.": "Bakra",
            "Předmět se nachází z vedlejších měst, jehož boss obývá jihovýchodní část mapy.": "Bakra",
            "Předmět byl naposled spatřen v jednom z vedlejších měs, v kterém se stařec nachází na jihozápadě mapy.": "Bakra",
            "Předmět se nachází ve městě, jehož jižní pláž obklopuje moře.": "Yongan",
            "Předmět se nachází v hornatém městě se spoustou zeleně obklopeného řekou.": "Yongan",
            "Předmět se nachází poblíž města označeného rudou vlajkou.": "Yongan",
            "Předmět se nachází poblíž města s nejvíce rybáři.": "Yongan",
            "Předmět byl naposled spatřen v jednom z vedlejších měst, v kterém se nachází nefunkční portál do opičí jeskyně na východní straně mapy.": "Yayang",
            "Předmět se nachází poblíž města, jehož obyvatelé jsou uctívači černého větru a je známo pověstnými vodopády v severní části mapy.": "Yayang",
            "Předmět byl naposled spatřen v jednom z vedlejších měst, které obklopuje řeka ze všech stran.": "Yayang",
            "Předmět byl naposled spatřen v jednom z vedlejších měst, v kterém se nachází rozbitý most.": "Yayang" ,
            "Předmět byl naposled spatřen poblíž města, jehož západní část obklopuje moře.": "Joan",
            "Předmět se nachází v městské oblasti, kde lze nalézt Tigrise u pláže.": "Joan",
            "Předmět se nachází v městské oblasti, kde teleportér obývá okolí vysoké věže.": "Joan",
            "Předmět se nachází ve městě s 2 jezery.": "Joan",
            "Předmět se nachází v oblasti, která má na severu nefunkční portál do jeskyně.": "Joan",
            "Předmět se nachází v jednom z vedlejších měst, kde je brutální velitel v ruinách.": "Bokjung",
            "Předmět se nachází ve vedlejším městě s nejvíce jezery.": "Bokjung",
            "Předmětbyl naposledy spatřen v jednom z vedlejších měst kterým neprotéká žádná řeka.": "Bokjung",
            "Předmět se nachází blízko města, kterého obyvatelé uctívají černý vítr a je známé pověstnými vodopády na jihu města.": "Bokjung",
            "Předmět byl naposled spatřen v oblasti, v které řádí nakažlivý mor.": "Ledová Země",
            "Předmět byl naposled spatřen v oblasti se spoustou sněhu.": "Ledová Země" ,
            "Předmět se nachází v mapě, ze které se lze přímo dostat do kouzelného lesa.": "Ledová Země",
            "Příšery na krajích vystavené radiaci.": "Ledová Země",
            "Předmět byl naposled spatřen v oblasti, v které se teplota málokdy dostane nad nulu.": "Ledová Země",
            "Předmět byl naposled spatřen v oblasti, která může mnohým připomínat Severní pól.": "Ledová Země",
            "Předmět byl naposled spatřen v oblasti, kde se zapotíte i při nic nedělání.": "Ohnivá Země",
            "Předmět byl naposled spatřen v oblasti s kamennými mosty.": "Ohnivá Země",
            "Předmět se nachází v oblasti, kde všechna tráva shořela po výbuchu sopky.": "Ohnivá Země",
            "Předmět byl naposled spatřen v oblasti, kterou si mnozí pletou se samotným peklem.": "Ohnivá Země",
            "Předmět se nachází v ohnivé oblasti, kde lze spatřit pouze jeden druh meteorů.": "Ohnivá Země",
            "Lesnatá oblast kde jsou pozůstatky koster dinosaurů.": "Červený Les",
            "Předmět se nachází v travnaté oblasti, spousta lidí se nedostane na konec mapy.": "Červený Les",
            "Předmět se nachází v lesnaté oblasti, která je rozpůlená řekou na 2 části.": "Červený Les, Zelený Les",
            "Předmět se nachází v oblasti, kde je těžké najít konec.": "Červený Les",
            "Průchod soutěskami prastarého stromu.": "Červený Les",
            "Předmět se nachází v lesnaté oblasti, v které lze spatřit obří Jehličnaté stromy.": "Červený Les",
            "Oblast, kde je vstup do nejstrašidelnějšího lesa.": "Zelený Les",
            "Přezdívka Kouzelný les.": "Zelený Les",
            "Předmět byl naposled spatřen v lesnaté oblasti, v které si každý myslí, že se točí v kruzích.": "Zelený Les",
            "Předmět byl naposled spatřen v oblasti, v které lze po krajích mapy spatřit vodopády.": "Červený Les, Zelený Les",
            "Předmět byl naposled spatřen v oblasti, kterou obývá jedna z nejmocnějších čarodějnic.": "Jeskyně Vyhnanství 1.",
            "Předmět se nachází ve starodávné jeskyni, kterou obývají stvůry z ledových krajin.": "Jeskyně Vyhnanství 1.",
            "Předmět se nachází ve starodávných katakombách, na jejímž konci se nachází vstup do dalších katakomb.": "Jeskyně Vyhnanství 1.",
            "Předmět byl naposled spatřen v oblasti, na jejímž konci se nachází vstup do dračí komnaty.": "Jeskyně Vyhnanství 2.",
            "Předmět se nachází ve starodávné jeskyni, kterou obývají uctívači ďábla.": "Jeskyně Vyhnanství 2.",
            "Předmět se nachází v podzemních katakombách, které se skládají z více než 80 místností.": "Jeskyně Vyhnanství 2.",
            "Předmět se nachází v oblasti, z které mnozí odchází s arachnofobií.": "Pavoučí jeskyně 3., Pavoučí Jeskyně 2.",
            "Předmět se nachází v pavoučí jeskyní se spoustou barikád.": "Pavoučí Jeskyně 2.",
            "Předmět se nachází pavoučí jeskyní,kde nejsou žádní hadi.": "Pavoučí Jeskyně 3.",
            "Předmět byl naposled spatřen v oblasti, která se hemží hady a pavouky.": "Pavoučí Jeskyně 2.",
            "Oblast, která se hemží pavouky.": "Pavoučí Jeskyně 3.",
            "Předmět byl naposled spatřen v pavoučí jeskyni, v které lze nalézt líheň baronky.": "Pavoučí Jeskyně 3.",
            "Předmět byl naposled spatřen v oblasti, která se hemží jedovatými pavouky.": "Pavoučí Jeskyně 3.",
            "Předmět byl naposled spatřen v pavoučí jeskyni s nejvíce místnostmi.": "Pavoučí Jeskyně 2.",
            "Předmět se nachází v oblasti, o které tvrdí, že v ní lze spatřit duchy.": "Hřbitov",
            "Oblast připomínající halloween.": "Hřbitov",
            "Předmět se nachází v oblasti, z která mnoha lidí má noční můry ještě dlouhé týdny.": "Hřbitov",
            "Předmět se nachází  v temné oblasti, v jejímž pravém dolním rohu lze spatřit kostlivce.": "Hřbitov",
            "Oblast, ve které lidi umírají žízní.": "Poušť Yongbi",
            "Předmět byl naposled spatřen v oblasti se spoustou písku.": "Poušť Yongbi",
            "Oblast, kde jsou banditi.": "Poušť Yongbi",
            "Předmět se nachází v oblastní,kde lze spatřit vstup bránou zasypaný kameny.": "Poušť Yongbi",
            "Předmět byl naposledy spatřen v oblasti,  kterou lze považovat za domov štírů a hadů.": "Poušť Yongbi",
            "Předmět se nachází v oblasti, z které se lze přímo dostat do míst obývaných primáty.": "Poušť Yongbi",
            "Oblast, kde se na pláži objevují krabi a žraloci.": "Nefritový Záliv",
            "Předmět byl naposled spatřen v oblasti, v které se vyskytují příšery připomínající lidi křížené se žralokem.": "Nefritový Záliv",
            "Kult Vrahů a zlodějů.": "Nefritový Záliv",
            "Předmět se nachází v oblasti,kterou na západu obklopuje pláž,na které je spoustu ztroskotaných lodí.": "Nefritový Záliv",
            "Předmět se nachází v oblasti, jejímž místní jsou starodávní uctívači fanatismu.": "Chrám Hwang",
            "Předmět byl naposled spatřen v oblasti, v které lze spatřit přerostlé žáby.": "Chrám Hwang",
            "Předmět je v oblasti, v které se nachází vstup do jedné z nejstarších démonických oblastí.": "Chrám Hwang",
            "Předmět byl naposled spatřen v oblasti, kterou obývají obojživelní bojovníci.": "Chrám Hwang",
            "Předmět byl naposled spatřen v oblasti, v které se boss dokáže po smrti znovuzrodit silnější a ovládá element větru.": "Chrám Hwang",
            "Předmět se nachází v oblasti, na jejímž konci se nachází prastará věž.": "Chrám Hwang",
            "Předmět byl naposled spatřen v oblasti, v jejímž středu se nachází prastarý chrám.": "Údolí Orků",
            "Předmět se nachází v oblasti, kde lze spatřit meteory z nichž vychází příšery které do dané mapy nepatří.": "Údolí Orků, Ledová Země, Poušť Yongbi",
            "Předmět se nachází v oblasti skládající se z několika ostrovů.": "Údolí Orků",
            "Předmět byl naposled spatřen v oblasti, v které se vyskytují příšery připomínající přerostlé gobliny.": "Údolí Orků",
            "Předmět byl naposled spatřen v oblasti, o které se dá říct, že čím více se blížíte ke středu, tím potkáváte silnější příšery.": "Údolí Orků",
            "Předmět byl naposled spatřen v oblasti, v které se nachází vstup do prastaré jeskyně.": "Údolí Orků",
            "Předmět se nachází v oblasti, plné živých mrtvých.": "Zombieland",
            "Předmět byl naposled spatřen v oblasti, o které se tvrdí, že si místní pochutnávají na mozcích.": "Zombieland",
            "Předmět se nachází v mapě, na jejímž konci se nachází vstup do katedrály schované ve skále.": "Zombieland",
            "Předmět byl naposled spatřen v oblasti s mnoha hroby.": "Zombieland",
            "Předmět byl naposled spatřen v oblasti, v které se nachází aktivní sopka uprostřed mapy.": "Sunshine",
            "Předmět se nachází v oblasti,v které slunce vypálilo veškerou vegetaci.": "Sunshine",
            "Předmět se nachází v oblasti, kde jsou dva druhy ezoteriků.": "Sunshine",
            "Předmět se nachází v malé mapě, která může připomínat ohnivou zemi.": "Sunshine",
            "Předmět se nachází v podzemí, kde lze všude cítit smrt a hnilobu.": "Andunské Katakomby",
            "Předmět se nachází v oblasti, ve které smrt mágové proměňují na život v utrpení.": "Andunské Katakomby",
            "Mrtvoly ve zdech.": "Andunské Katakomby",
            "Předmět se nachází v údolí, kterým protékají řeky plné lávy.": "Lávové Pole",
            "Předmět se nachází v oblasti, kde lze na zemi spatřit  pentagram.": "Lávové Pole",
            "Předmět se nachází v oblasti, v které se monstra rodí z lávy.": "Lávové Pole",
            "Předmět byl naposled spatřen v oblasti, o které se tvrdí, že se vás příroda snaží zabít.": "Příroda",
            "Předmět byl naposled spatřen v oblasti, která může svým tvarem připomínat Útes Gautama.": "Příroda",
            "Místo, kde se doslova příroda probouzí k životu.": "Příroda",
            "Předmět se nachází v oblasti, kde lze spatřit oživlé houby.": "Příroda",
            "Předmět byl naposled spatřen v oblasti, jejíž značnou část tvoří civilizace prastarých hadů.": "Saharská Poušť",
            "Předmět byl naposled spatřen v oblasti s ještěřími válečníky.": "Saharská Poušť",
            "Předmět se nachází v oblasti, ve které se nachází Šalamounova hrobka.": "Saharská Poušť",
            "Předmět se nachází v rozsáhlé oblasti, které po celé své délce víceméně rovinka a je rozdělené na 3 části.": "Saharská Poušť",
            "Předmět je v oblasti, kterou obývají bojovníci malého vzrůstu připomínající hyeny křížené s člověkem.": "Pohoří Gnollů",
            "Předmět se nachází v malém údolí obklopeného vysokými horami.": "Pohoří Gnollů",
            "Předmět byl naposled spatřen v oblasti s civilizací obrů.": "Pohoří Gnollů",
            "Předmět se nachází v údolí, které obývají 2 různé druhy monster.": "Pohoří Gnollů",
            "Předmět se nachází v oblasti, kde se vyskytuje chrám uctívaný starodávnou civilizací primátů.": "Útes Gautama",
            "Předmět byl naposled spatřen v oblasti, kde lze nalézt starodávné kyklopy.": "Útes Gautama",
            "Předmět se nachází v mapě, V které lze uprostřed spatřit ostrov,na kterém se nachází svatyně.": "Útes Gautama",
            "Předmět byl naposled spatřen v oblasti, kterou sdílí opice s orky.": "Útes Gautama",
            "Předmět se nachází v oblasti, v které se nachází věž, od které je výhled na celé údolí.": "Údolí Draků",
            "Předmět se nachází v oblasti, v které ze začátku procházíte obydlenou oblastí a poté se dostanete do volné přírody.": "Údolí Draků",
            "Předmět se nachází v oblasti, která je obklopena oceánem ze všech stran.": "Přeludný Ostrov ",
            "Předmět se nachází v oblasti, kde lze spatřit nejvíce druhů meteorů.": "Přeludný Ostrov",
            "Předmět se nachází v oblasti, která je rozdělena na 4 systematické časti.": "Přeludný Ostrov",
            "Předmět se nachází v oblasti, kterou stráží dračí bojovníci.": "Údolí Draků",
            "Předmět byl naposled spatřen v oblasti, kde se na pobřeží nachází krabi a žraloci.": "Nefritový Záliv",
            // new lines
            "Předmět byl naposled spatřen v oblasti, kterou obývají pouze 2 národy ezoteriků tmavší rasy.": "Sunshine"
        };

         // Event listener for input changes
        searchInput.addEventListener("input", function() {
            const inputValue = searchInput.value.toLowerCase();

        // Clear previous suggestions
        suggestions.innerHTML = "";

        // Check if the input matches any specific sentence and provide the corresponding answer
        const answer = queries[inputValue];

        // Display the answer if found, or a message if not found
        if (answer) {
            searchResults.textContent = `Svitek se náchází v: ${answer}`;
            const button = document.getElementById(asnwer);
            button.click();
        } else {
            searchResults.textContent = "";
            // Generate and display suggestions
            generateSuggestions(inputValue);
        }
    });

    // Event listener for "Enter" key press
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const inputValue = searchInput.value;
            const answer = queries[inputValue];
            if (answer) {
                searchResults.textContent = `Svitek se náchází v: ${answer}`;
                const button = document.getElementById(asnwer);
                button.click();
            } else {
                searchResults.textContent = "Žádná schoda nebyla nalezena.";
            }
        }
    });

    // Generate and display autocomplete suggestions
    function generateSuggestions(inputValue) {
        const matchingQueries = Object.keys(queries).filter(query =>
            query.toLowerCase().includes(inputValue)
        );

        if (matchingQueries.length > 0) {
            matchingQueries.forEach(query => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.textContent = query;
                suggestionItem.addEventListener("click", () => {
                    // Set the selected suggestion as the input value
                    searchInput.value = query;
                    // Clear suggestions
                    suggestions.innerHTML = "";

                    // Check if the clicked suggestion has a corresponding answer
                    const clickedAnswer = queries[query];
                    if (clickedAnswer) {
                        searchResults.textContent = `Svitek se náchází v: ${clickedAnswer}`;
                        const button = document.getElementById(clickedAnswer);
                        button.click();
                    }
                });
                suggestions.appendChild(suggestionItem);
            });

            // Show suggestions
            suggestions.style.display = "block";
        } else {
            // Hide suggestions if no matches
            suggestions.style.display = "none";
        }
    }
    