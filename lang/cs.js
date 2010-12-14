var lang = [
	  "Torrent soubory||*.torrent||Všechny soubory (*.*)||*.*||"
	, "OK"
	, "Zrušit"
	, "Použít"
	, "Možnosti"
	, "Jazyk"
	, "Jazyk:"
	, "Soukromí"
	, "Kontrolovat aktualizace automaticky"
	, "Aktualizovat na BETA verze"
	, "Odeslat anonymní informace při ověření aktualizace"
	, "Při stahování"
	, "Přidat .!ut k nekompletním souborům"
	, "Vymezovat místo souborům"
	, "Zamezit standby, jsou-li aktivní torrenty"
	, "Možnosti zobrazení"
	, "Potvrzovat mazání torrentů"
	, "Potvrzovat mazání trackerů"
	, "Potvrzovat ukončení programu"
	, "Šedé pozadí pro sudé řádky"
	, "Zobrazovat rychlost v záhlaví okna"
	, "Rychlostní limity ve stavové liště"
	, "Při přidávání torrentů"
	, "Nespouštět stahování automaticky"
	, "Aktivovat okno programu"
	, "Zobrazit okno se seznamem souborů obsažených v torrentu"
	, "Akce pro dvojité kliknutí"
	, "Pro torrenty Seeduji:"
	, "Pro torrenty Stahování:"
	, "Umístění stahovaných souborů"
	, "Soubory stahovat do:"
	, "Vždy zobrazovat dialog"
	, "Kompletně stažené přesunout do:"
	, "Připojit kategorii torrentu"
	, "Přesouvat soubory jen z výchozí složky stahování"
	, "Umístění torrentů"
	, "Ukládat torrenty do:"
	, "Přesouvat dokončené torrenty do:"
	, "Automaticalky nahrávat torrenty z:"
	, "Smazat načtené torrenty"
	, "Port pro naslouchání"
	, "Port používaný pro příchozí spojení:"
	, "Náhodný port"
	, "Náhodný port při každém spuštění"
	, "Zapnout UPnP mapování portu"
	, "Zapnout NAT-PMP mapování portu"
	, "Proxy server"
	, "Typ:"
	, "Proxy:"
	, "Port:"
	, "Ověření uživatele"
	, "Jméno:"
	, "Heslo:"
	, "Hostname zjišťovat přes proxy"
	, "Používat proxy server pro peer-to-peer spojení"
	, "Povolit ve Windows Firewall"
	, "Proxy soukromí"
	, "Vypnout všechny lokální DNS lookup"
	, "Zakázat funkce s rizikem uníku identifikačních údajů"
	, "Zakázat spojení, která nejsou podporována proxy"
	, "Celkové rychlostní limity odesílání"
	, "Maximální upload (kB/s): [0: neomezeno]"
	, "Automaticky"
	, "Limit uploadu, když není stahování (kB/s):"
	, "Celkové rychlostní limity stahování"
	, "Maximální download (kB/s): [0: neomezeno]"
	, "Počet spojení"
	, "Maximální počet všech spojení:"
	, "Maximální počet připojených peerů na torrent:"
	, "Počet odesílacích slotů na torrent:"
	, "Použít další slot, pokud je rychlost uploadu < 90%"
	, "Global Rate Limit Options"
	, "Aplikovat limity na transport overhead"
	, "Aplikovat limity na uTP spojení"
	, "Základní BitTorrent možnosti"
	, "Povolit DHT"
	, "Žádat tracker o scrape informace"
	, "Zapínat DHT u nových torrentů"
	, "Zapínat Peer Exchange"
	, "Zapínat Hledání lokálních peerů"
	, "Limity i pro lokální peery"
	, "IP/Hostname odesílané trackeru:"
	, "Kódování přenosu"
	, "Odchozí:"
	, "Povolit nekódovaná příchozí spojení"
	, "Povolit řízení šířky pásma [uTP]"
	, "Zapnout podporu UDP trackerů"
	, "Zapnout datové limity"
	, "Přenos dat"
	, "Typ limitu:"
	, "Množství přenesených dat:"
	, "Za období (dny):"
	, "Statistika přenosu dat za období:"
	, "Odesláno:"
	, "Staženo:"
	, "Celkem:"
	, "Období:"
	, "posledních %d dnů"
	, "Vynulovat"
	, "Nastavení čekání ve frontě"
	, "Maximální počet aktivních torrentů (seedování nebo stahování):"
	, "Maximální počet aktivních stahování:"
	, "Seeduj dokud [výchozí hodnoty]"
	, "Minimální ratio (%):"
	, "Minimální čas seedování (minuty):"
	, "Seedování má vyšší prioritu než stahování"
	, "Limit uploadu po dosažení hodnoty Ratio nebo seed čas"
	, "Limit uploadování (kB/s): [0: zastavit]"
	, "Povolit plánování"
	, "Tabulka plánování"
	, "Rychlost v režimu Omezeno"
	, "Limit rychlosti upload (kB/s):"
	, "Limit rychlosti download (kB/s):"
	, "Vyp. DHT v režimu Zastaveno"
	, "Zapnout Web UI"
	, "Ověření uživatele"
	, "Jméno:"
	, "Heslo:"
	, "Povolit Guest účet s uživatelským jménem:"
	, "Připojení"
	, "Alternativní naslouchací port (výchozí port viz. Připojení):"
	, "Přístup k Web UI je možný pouze z těchto IP adres (více IP oddělujte čárkou ,):"
	, "Rozšířené nastavení [VAROVÁNÍ: Úpravy na vlastní riziko!]"
	, "Hodnota:"
	, "True"
	, "False"
	, "Nastav"
	, "Hodnoty rychlostních omezení [oddělujte čárkou, dvě čárky udělají linku]"
	, "Ignoruj automatický seznam rychlostí"
	, "Rychlosti Upload:"
	, "Rychlosti Download:"
	, "Trvalé kategorie [Zadané kategorie oddělujte bez mezer znakem | (Alt+124)]"
	, "Vyhledávací pluginy [Formát: název|URL]"
	, "Základní nastavení cache"
	, "Disková cash uchovává často používaná data v paměti pro snížení počtu čtení a zápisů na hard disk. µTorrent spravuje cache automaticky, ale vy můžete měnit jeho chování tím, že modifikuje tato nastavení."
	, "Nepoužívat automatickou velikost cache. Cache nastavit na (MB):"
	, "Omezit používání paměti, pokud cache není potřeba"
	, "Rozšířené nastavení cache"
	, "Zapnout cache pro zápisy na disk"
	, "Zapisovat nedotčené bloky každé 2 minuty"
	, "Zapisovat dokončené části okamžitě"
	, "Zapnout cache pro čtení z disku"
	, "Vypnout cache čtení, je-li rychlost uploadu nízká"
	, "Vymazat staré bloky z cache"
	, "Zvětšit automatickou velikost cache při potížích"
	, "Vypnout Windows cache pro zápis na disk"
	, "Vypnout Windows cache pro čtení z disku"
	, "Spustit program"
	, "Po dokončení stahování torrentu spustit tento program:"
	, "Po změně stavu torrentu spustit tento program:"
	, "Můžete použít tyto příkazy:\r\n%F - Jméno stahovaného souboru\r\n%D - Složka pro uložení souborů\r\n%N - Titulek torrentu\r\n%S - Stav torrentu\r\n%L - Kategorie\r\n%T - Tracker\r\n%M - Řetězec stavové zprávy (shodné se sloupcem Stav)\r\n%I - Hex encoded info-hash\r\n\r\nStav je kombinací:\r\nspuštěno = 1, kontrolováno = 2, spuštěno po zkontrolování = 4,\r\nzkontrolováno = 8, chyba = 16, pauza = 32, auto = 64, zavedeno = 128"
	, "Vlastnosti torrentu"
	, "Trackery (oddělujte prázdnou řádkou)"
	, "Rychlostní limity"
	, "Maximální rychlost uploadu (kB/s): [0: výchozí]"
	, "Maximální rychlost dowloadu (kB/s): [0: výchozí]"
	, "Počet odesílacích slotů: [0: výchozí]"
	, "Seedovat dokud"
	, "Ignoruj výchozí nastavení"
	, "Minimální ratio (%):"
	, "Minimální čas seedování (minuty):"
	, "Další nastavení"
	, "Počáteční Seed"
	, "Povolit DHT"
	, "Peer Exchange"
	, "IP"
	, "Port"
	, "Klient"
	, "Směr"
	, "Procent"
	, "Důležitost"
	, "Rychlost Down"
	, "Rychlost Up"
	, "Požadavky"
	, "Čekání"
	, "Odesláno"
	, "Staženo"
	, "Hash chyb"
	, "Peer Down"
	, "MaxUp"
	, "MaxDown"
	, "Ve frontě"
	, "Neaktivní"
	, "Hotovo"
	, "Název"
	, "Procent"
	, "Priorita"
	, "Velikost"
	, "preskočit"
	, "nízká"
	, "normální"
	, "vysoká"
	, "Staženo:"
	, "Odesláno:"
	, "Seedů:"
	, "Zbývající čas:"
	, "Rychlost Down.:"
	, "Rychlost Up.:"
	, "Peerů:"
	, "Ratio:"
	, "Hash:"
	, "Přenos"
	, "%d z %d připojeno (%d ve swarmu)"
	, "D:%s U:%s - %s"
	, "Reset"
	, "Neomezeno"
	, "Překládat IP"
	, "Get File(s)"
	, "Nestahovat"
	, "Vysoká priorita"
	, "Nízká priorita"
	, "Normální priorita"
	, "vymazat data"
	, "vymazat torrent"
	, "vymazat torrent + data"
	, "Zkontrolovat soubory"
	, "Vynucený Start"
	, "Kategorie"
	, "Pauza"
	, "Vlastnosti"
	, "Přesun ve frontě dolu"
	, "Přesun ve frontě nahoru"
	, "Smazat úkol"
	, "Smazat úkol a ..."
	, "Start"
	, "Stop"
	, "Aktivní"
	, "Všechny"
	, "Dokončené"
	, "Stahované"
	, "Neaktivní"
	, "Bez kategorie"
	, "||Dostup.||Dostupnost"
	, "Procent"
	, "Staženo"
	, "Rychlost Down"
	, "Čas"
	, "Kategorie"
	, "Jméno"
	, "#"
	, "Peerů"
	, "Zbývá"
	, "Seedů"
	, "Seeds/Peers"
	, "Ratio"
	, "Velikost"
	, "Stav"
	, "Odesláno"
	, "Rychlost Up"
	, "Opravdu si přejete odstranit vybrané torrenty (%d) a jimi sdílená data?"
	, "Opravdu si přejete odstranit vybraný torrent a jím sdílená data?"
	, "Opravdu si přejete odstranit vybrané torrenty (%d) ?"
	, "Opravdu si přejete odstranit vybraný torrent?"
	, "Kontroluji %:.1d%%"
	, "Stahování"
	, "Chyba: %s"
	, "Dokončeno"
	, "Pozastaveno"
	, "Ve frontě"
	, "Seed ve frontě"
	, "Seeduji"
	, "Zastaveno"
	, "Zadej kategorii"
	, "Zadej novou kategorii pro vybrané torrenty:"
	, "Nová kategorie..."
	, "Odstranit kategorii"
	, "Hlavní||Trackery||Uživatelé||Části||Soubory||Rychlost||Záznamy||"
	, "Přidat torrent"
	, "Přidat torrent z URL"
	, "Pauza"
	, "Možnosti"
	, "Přesun ve frontě dolu"
	, "Přesun ve frontě nahoru"
	, "Odstranit"
	, "Start"
	, "Stop"
	, "Soubor"
	, "Přidat torrent (výchozí složka)..."
	, "Přidat torrent z URL..."
	, "Nastavení"
	, "Možnosti"
	, "Zobrazit Postranní panel"
	, "Zobrazit Detailní informace"
	, "Zobrazit Stavovou lištu"
	, "Zobrazit Nástrojovou lištu"
	, "Ikony na záložkách"
	, "Nápověda"
	, "µTorrent na Internetu"
	, "µTorrent Fórum"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrenty"
	, "Pozastavit všechny torrenty"
	, "Obnovit všechny torrenty"
	, "D: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " C: %Z"
	, "U: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Rozšířené"
	, "Rychlost"
	, "Připojení"
	, "Cache"
	, "Složky"
	, "Hlavní"
	, "Plánovač"
	, "Fronta"
	, "Nabídky"
	, "Rozhraní"
	, "BitTorrent"
	, "Web UI"
	, "FUP"
	, "Spustit"
	, "Zobrazit vlastnosti torrentu||Start / Stop torrentu||Otevřít složku||Zobrazit Lištu stahování||"
	, "Zakázáno||Povoleno||Vynuceno||"
	, "(není)||Socks4||Socks5||HTTPS||HTTP||"
	, "odesílání||stahování||odesílání + stahování||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Název"
	, "Hodnota"
	, "Po||Út||St||Čt||Pá||So||Ne||"
	, "Pondělí||Úterý||Středa||Čtvrtek||Pátek||Sobota||Neděle||"
	, "Nejrychleji"
	, "Nejrychleji - Plná rychlost daná celkovými rychlostními limity"
	, "Omezeno"
	, "Omezeno - Omezená rychlost daná nastavením plánovače"
	, "Jen seedování"
	, "Jen seedování - Pouze odesílání dat (včetně nedokončených)"
	, "Zastaveno"
	, "Zastaveno - Zastaví všechny torrenty, kromě spuštěných vynuceně"
	, "<= %d hodin"
	, "neomezený"
	, "<= %d minut"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dt %dd"
	, "%dr %dt"
];