var lang = [
	  "Datoteke torrent||*.torrent||Vse datoteke (*.*)||*.*||"
	, "V redu"
	, "Prekliči"
	, "Uporabi"
	, "Nastavitve"
	, "Jezik"
	, "Jezik:"
	, "Zasebnost"
	, "Samodejno preverjaj posodobitve"
	, "Posodobi v razvojne (beta) verzije"
	, "Ko preverjam za posodobitve, pošiljam informacije anonimno"
	, "Ko prenašam"
	, "Pripni končnico .!ut nedokončanim datotekam"
	, "Vnaprej zasedi prostor na disku"
	, "Prepreči stanje pripravljenosti, če so torrenti še dejavni"
	, "Možnosti prikaza"
	, "Zahtevaj potrditev, ko brišem torrente"
	, "Zahtevaj potrditev, ko brišem sledilnike"
	, "Zahtevaj potrditev izhoda"
	, "Izmenjujoča barva ozadja seznama"
	, "Prikaži trenutno hitrost v naslovni vrstici"
	, "Prikaži omejitve v statusni vrstici"
	, "Ob dodajanju torrentov"
	, "Ne začni prenosa samodejno"
	, "Aktiviraj okno programa"
	, "Pokaži okno s seznamom datotek v torrentu"
	, "Odzivi na dvojni klik"
	, "Za torrente, ki se sejejo:"
	, "Za torrente ki se prenašajo:"
	, "Mesto sprejetih datotek"
	, "Shrani nove datoteke v:"
	, "Prikaži pog. okno ob ročnem dodajanju"
	, "Premakni končane prenose v:"
	, "Dodaj oznako torrenta"
	, "Premakni le iz privzete mape za prenose"
	, "Mesto .torrent datotek"
	, "Shrani .torrente v:"
	, "Ob koncu prejema premakni .torrent v:"
	, "Samodejno naloži .torrente v mapi:"
	, "Zbriši naložene .torrente"
	, "Vrata za komunikacijo"
	, "Vrata za prihajajoče povezave:"
	, "Naključna vrata"
	, "Naključna vrata ob vsakem zagonu"
	, "Omogoči UPnP preslikovanje vrat"
	, "Omogoči NAT-PMP preslikovanje vrat"
	, "Proxy strežnik"
	, "Tip:"
	, "Proxy:"
	, "Vrata"
	, "Avtentikacija"
	, "Uporabniško ime:"
	, "Geslo:"
	, "Razreši naslove gostiteljev skozi posredovalnik"
	, "Uporabi proxy strežnik za povezave med soležniki"
	, "Dodaj izjeme Požarnega zidu programa Windows"
	, "Globalno omejevanje pasovne širine"
	, "Največja hitrost oddajanja (kB/s): [0: neomejeno]"
	, "Avtomatična"
	, "Alternativna hitrost oddajanja, ko ne prejemam (kB/s):"
	, "Globalno omejevanje hitrosti prejemanja"
	, "Največja hitrost prejemanja (kB/s): [0: neomejeno]"
	, "Število povezav"
	, "Največje skupno število povezav:"
	, "Največje število povezav s soležniki na torrent:"
	, "Število oddajnih povezav na torrent:"
	, "Oddajaj večim, če je hitrost oddajanja < 90%"
	, "Global Rate Limit Options"
	, "Uporabi omejitev hitrosti za presežek transporta"
	, "Uporabi omejitev hitrosti za uTP povezave"
	, "Splošne posebnosti BitTorrenta"
	, "Omogoči omrežje DHT"
	, "Vprašaj sledilnik po povzetkih"
	, "Omogoči DHT za nove torrente"
	, "Omogoči izmenjavo soležnikov"
	, "Omogoči odkrivanje lokalnih soležnikov"
	, "Omeji pasovno širino lokalnih prenosov"
	, "IP/ime gostitelja za oddajo sledilniku:"
	, "Šifriranje protokola"
	, "Izhodne:"
	, "Dovoli dohodne nešifrirane povezave"
	, "Omogoči upravljanje pasovne širine [uTP]"
	, "Omogoči podporo UDP sledilnika"
	, "Omogoči Omejitev prenosov"
	, "Nastavitve omejitev"
	, "Ustavi torrente ko:"
	, "doseže"
	, "v zadnjih"
	, "dneh"
	, "Nastavitve čakalne vrste"
	, "Največje število dejavnih torrentov (sprejemanje ali oddajanje):"
	, "Največje število dejavnih prejemanj:"
	, "Oddajaj, dokler [privzete nastavitve]"
	, "Razmerje:  <="
	, "%  ali je čas oddajanja:"
	, "Oddajanje ima prednost pred prejemanjem"
	, "Ko µTorrent doseže cilj sejanja"
	, "meji hitrost oddajanja na: (kB/s): [0: ustavi]"
	, "Vklopi urnik"
	, "Tabela urnika"
	, "Nastavitve urnika"
	, "Omeji hitrost oddajanja (kB/s):"
	, "Omeji hitrost prejemanja (kB/s):"
	, "Onemogoči DHT ob ugašanju"
	, "Omogoči spletni UV"
	, "Avtentikacija"
	, "Uporabniško ime:"
	, "Geslo:"
	, "Omogoči gosta z uporabniškim imenom:"
	, "Povezljivost"
	, "Alternativna vrata za vmesnik (privzeta so vrata za povezavo):"
	, "Omeji dostop do naslednjih IP-jev (ločite vnose z vejico):"
	, "Napredne možnosti [POZOR: Ne spreminjajte!]"
	, "Nastavi:"
	, "Vklop"
	, "Izklop"
	, "Nastavi"
	, "Seznam omejitev hitrosti [ločite različne vrednosti z vejico]"
	, "Povozi privzeti seznam s hitrostmi"
	, "Seznam oddajanja:"
	, "Seznam prejemanja:"
	, "Stalne oznake [ločite več oznak z znakom | ]"
	, "Iskalniki [oblika: ime|URL]"
	, "Osnovne nastavitve predpomnilnika"
	, "Diskovni predpomnilnik se uporablja za hranjenje pogosto uporabljenih podatkov v pomnilniku, saj se tako zmanjša število branj in pisanj na disk. S temi nastavitvami lahko vplivate na samodejno upravljanje predpomnilnika, ki ga izvaja µTorrent."
	, "Povozi privzeto velikost predpomnilnika in določite velikost ročno (MB):"
	, "Zmanjšaj uporabo pomnilnika, ko predpomnilnik ni potreben"
	, "Napredne nastavitve predpomnilnika"
	, "Omogoči predpomnjenje pisanja na disk"
	, "Zapiši nedotaknjene bloke vsaki 2 minuti"
	, "Takoj zapiši dokončane kose"
	, "Omogoči predpomnjenje branja iz diska"
	, "Izklopi predpomnjenje pisanja ko je hitrost oddajanja nizka"
	, "Odstrani stare bloke iz predpomnilnika"
	, "Ob 'thrashingu' predpomnilnika povečaj samodejno velikost predpomnilnika"
	, "Onemogoči Windows predpomnjenje pisanja na disk"
	, "Onemogoči Windows predpomnjenje branja iz diska"
	, "Lastnosti torrenta"
	, "Sledilniki (loči jih s prazno vrstico)"
	, "Nastavitve pasovne širine"
	, "Največja hitrost oddajanja (kB/s): [privzeto 0]"
	, "Največja hitrost prejemanja (kB/s): [privzeto 0]"
	, "Število sejalnih mest: [privzeto 0]"
	, "Sejaj, dokler je"
	, "Povozi privzete nastavitve"
	, "delilnik:  <="
	, "%  ali čas oddajanja:"
	, "Druge nastavitve"
	, "Začetno oddajanje"
	, "Vklopi DHT"
	, "Izmenjava soležnikov"
	, "Opravljeno"
	, "Ime"
	, "Odst."
	, "Prednost"
	, "Velikost"
	, "preskoči"
	, "nizka"
	, "običajna"
	, "visoka"
	, "Prejeto:"
	, "Oddano:"
	, "Semena:"
	, "Ostaja:"
	, "Hitrost prejemanja:"
	, "Hitrost oddajanja:"
	, "Odjemalci:"
	, "Delilno razmerje:"
	, "Izvleček:"
	, "Prenos"
	, "%d od %d povezanih (%d v roju)"
	, "P:%s O:%s - %s"
	, "Pokaži seznam kategorij"
	, "Pokaži podrobnosti"
	, "Ponastavi"
	, "Ne prenesi"
	, "Visoka prednost"
	, "Nizka prednost"
	, "Običajna prednost"
	, "Zbriši podatke"
	, "Vsili preverbo"
	, "Vsili začetek"
	, "Oznaka"
	, "Premor"
	, "Lastnosti"
	, "Premakni dol v vrsti"
	, "Premakni gor v vrsti"
	, "Odstrani"
	, "Odstrani in"
	, "Začni"
	, "Prenehaj"
	, "Dejavni"
	, "Vsi"
	, "Dokončani"
	, "Nedokončani"
	, "Nedejavni"
	, "Brez oznake"
	, "||Razp.||Razpoložljivost"
	, "Opravljeno"
	, "Prejeto"
	, "Prejemanje"
	, "Čas"
	, "Oznaka"
	, "Ime"
	, "Št."
	, "Soležniki"
	, "Ostaja"
	, "Semena"
	, "Semena/soležniki"
	, "Delilnik"
	, "Velikost"
	, "Stanje"
	, "Oddano"
	, "Oddajanje"
	, "Ali ste prepričani, da želite odstraniti %d izbranih torrentov in vse pridružene podatke?"
	, "Ali ste prepričani, da želite odstraniti izbrani torrent in vse pridružene podatke?"
	, "Ali ste prepričani, da želite odstraniti %d izbranih torrentov?"
	, "Ali ste prepričani, da želite odstraniti izbrani torrent?"
	, "Preveril %:.1d%%"
	, "Prejemanje"
	, "Napaka: %s"
	, "Dokončano"
	, "Premor"
	, "Čakam"
	, "Čakam sejanje"
	, "Oddajanje"
	, "Ustavljen"
	, "Vnesite oznako"
	, "Vnesite novo oznako za izbrane torrente:"
	, "Nova oznaka …"
	, "Odstrani oznako"
	, "Splošno||Sledilniki||Soležniki||Kosi||Datoteke||Hitrost||Dnevnik||"
	, "Dodaj torrent"
	, "Dodaj torrent iz URL naslova"
	, "Premor"
	, "Nastavitve"
	, "Premakni dol v vrsti"
	, "Premakni gor v vrsti"
	, "Odstrani"
	, "Začni"
	, "Ustavi"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Napredno"
	, "Pasovna širina"
	, "Povezava"
	, "Medpomnilnik diska"
	, "Imeniki"
	, "Splošno"
	, "Urnik"
	, "Čakalna vrsta"
	, "Drugo o vmesniku"
	, "Nastavitve vmesnika"
	, "BitTorrent"
	, "Spletni vmesnik"
	, "Omejitev prenosov"
	, "Pokaži lastnosti||Ustavi/Poženi||Odpri mapo||Prikazi vrstico stanja prenosa||"
	, "Izklopljeno||Vklopljeno||Vsiljeno||"
	, "(prazno)||Socks4||Socks5||HTTPS||HTTP||"
	, "oddano||prejeto||oddano + prejeto||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Ime"
	, "Vrednost"
	, "Pon||Tor||Sre||Čet||Pet||Sob||Ned||"
	, "Ponedeljek||Torek||Sreda||Četrtek||Petek||Sobota||Nedelja||"
	, "Polna hitrost"
	, "Polna hitrost - Uporabi normalno globalne omejitve pasovne širine"
	, "Omejena"
	, "Omejena - Uporabi omejitve pasovne širine po urniku"
	, "Samo oddajanje"
	, "Samo oddajanje - Samo naloži podatke (tudi nedokončane)"
	, "Izklop"
	, "Izklop - Ustavi vse torrente ki niso vsiljeni"
	, "<= %d ur"
	, "(Prezri)"
	, "<= %d minut"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dt %dd"
	, "%dl %dt"
];