
# Installatiehandleiding

Dit project is gegenereerd met [Create React App].

## Beschikbare scripts

Om dit project te runnen gebruik je het volgende:

### `npm start`

Daarmee runt de app de development server. Deze wordt automatsch geopend, maar is altijd te bereiken via:\
[http://localhost:3000](http://localhost:3000).

Bij wijzigingen wordt deze automatisch herladen.\
Tevens worden er gebruik gemaakt van Eslint en error of aanwijzigingen getoond in de console.
Om zaken te testen kan het volgende gerund worden:

### `npm test`

## Inleiding

Deze applicatie is de Frontend van een naaiatelier genaamd Tailorism. Deze applicatie sluit aan op de Backend die gemaakt is in de vorige leerlijn.  
Het naaiatelier wordt gerund door een team van naaisters, operators (backoffice medewerkers) en niet te vergeten klanten.  
Een klant registreert zichzelf (eenmalig) en logt vervolgens in. Daarna kan de klant zijn profiel bekijken, met inhoud die enkel voor hem zichtbaar is. De klant kan artikelen bestellen en een naaiopdracht indienen om een kledingstuk een te herstellen en/of mooier te maken. 

De operator kan een lijst met producten ophalen die de klant besteld heeft. Hierdoor is het mogelijk om de verzending voor te bereiden en opdrachten te geven aan de naaisters. Deze lijst kan de operator ophalen als deze is ingelogd. 

De naaisters doen het werk in opdracht van de operator zodat hun werkschema zo efficient mogelijk wordt ingedeeld. Indien nodig hebben ze contact met de klant als de opdracht extra communicatie vereist. 

## Belangrijkste pagina's

De Homepagina:

![Homepagina](../tailorism_sewingstudio/src/assets/Homepage.png "Homepage")

De Login pagina:

![Loginpagina](../tailorism_sewingstudio/src/assets/Loginpage.png "Loginpage")

De Profiel pagina:

![Profielpagina](../tailorism_sewingstudio/src/assets/Profilepage.png "Profilepage")

De pagina van het Naaiatelier:

![Naaiatelierpagina](../tailorism_sewingstudio/src/assets/Sewingstudiopage.png "Sewingorderpage")

## Benodigdheden voor gebruik

- De frontend broncode of repository https://github.com/jd-create/tailorism_sewingstudio.git
- De backend broncode of repository https://github.com/jd-create/Tailorism_Backend.git
  
- Postgres met PGadmin
- De inloggegevens voor de database:
  - naam database: Jennifer
  - wachtwoord: Jennifer
- Eventueel postman, dit is vooral bij testen prettig
- Gebruikersgegevens om in te loggen als een user/customer/operator

## Opzet applicatie

### Frontend

1. Installeer Webstorm via de download op [download](https://jetbrains.com/webstorm/download). Open de exe file in je downloads en sta toe dat de app wijzigingen aanbrengt op je apparaat. Volg de setup van Webstorm. Geef aan waar je de installatie wilt plaatsen en selecteer je installatie opties (in mijn geval alle vinkjes behalve de 32 bit launcher). Kies vervolgens een startmenu folder en klik op install. Daarna moet je herstarten en is webstorm beschikbaar. Zorg eerst dat de backend klaar staat. Daarna ga je met stap 10 verder.

### Backend

2. Download eerst Java SE Development Kit 15, deze vind je op de site van Oracle. Zoek de versie die voor jou geschikt is, bijv. Windows 64 bit. Accepteer de voorwaarden van Oracle, sta toe dat de app wijzigingen aanbrengt op je pc en volg de wizard. Kies een doelmap voor installatie.

3. Download vervolgens IntelliJ IDEA, zowel de ultimate 2020.3 als de community 2020.3.2 voldoen.
Kies een OS en klik de exe aan. Sta toe dat de applicatie wijzigingen aanbrengt en volg het setup venster. Het is verstandig alle andere applicaties te sluiten, dan kan de installatie zonder herstart plaatsvinden. Selecteer de volgende opties:
  - add launchers dir to the PATH
  - add 'Open Folder as Project'
- .java


Het is verstandig om te controleren of je PATH goed staat. Je kunt dit laten doen door de wizard met de optie Add launchers dir to the PATH. Hiermee kun je namelijk gebruik maken van de terminal voor commando's en klopt de verwijzing met je systeem. Klik de install en herstart erna je pc. Accepteer de user agreement en kies voor data sharing (ik adviseer anonymous statistics).
  
4. Dan volgt PostgreSQL met pgAdmin. Ga naar [download](https://postgresql.org/download) en klik je OS aan (in mijn geval Windows, 64 bit). Klik op uitvoeren en sta weer toe dat de applicatie wijzigingen aanbrengt op je systeem. Ga in het startup venster naar next, selecteer de plek van installatie. Selecteer de PostgreSQL Server, PgAdmin 4 (volgens mij is 5 er ook al) en de command line tools. Stack Builder is optioneel en niet nodig voor de applicatie. Kies de plek voor de installatie en klik next. Vervolgens mag je een wachtwoord bedenken. Dit is het wachtwoord van de superuser. Als je intensief met de database aan de slag gaat raad ik je een kort wachtwoord aan, omdat je deze regelmatig moet invullen. Mijn applicatie heeft een aparte user (Jennifer en wachtwoord Jennifer, op een database Jennifer). Kies de poort waarop je postgreSQL wilt gebruiken, in mijn geval standaard 5432. Kies je lokale instellingen, Nederland staat onder Dutch, Netherlands. Kies 3 keer op next waarna PostgreSQL geïnstalleerd wordt. Stack Builder zou ik gewoon uitvinken. 


5. Wanneer je wilt kun je Postman gebruiken. Ga naar [download](https://www.postman.com/downloads/) en download de app. Ik zou niet kiezen voor web version, Postman Desktop Agent of Postman Canary. Kies de bitversie en de OS. Nadat je de download in je downloads opent wordt Postman gestart. Onderin, bijna onopvallend staat de vraag Create your account or sign in later? De zin: Skip and go to the app, dat is de variant die ik aanraad als je geen nodeloos account wilt hebben of nog niet hebt. 


6. Database instellen. Start pgAdmin op vanuit je startmenu. Log in met je aangemaakte account in de installatie. pgAdmin vraagt niet op om een gebruikersaccount omdat dit standaard postgres is. Klap Servers open door op het pijltje te klikken. Ga naar Login/Group Roles en klik op create. Klik op Login/Group Role. Geef in het tabblad General een naam voor de gebruiker op. In dit geval Jennifer. Onder het tabblad Definition geef je een wachtwoord op. In dit geval Jennifer. Onder het tabblad Priveleges moet je de optie Can login aanpassen naar Yes. Klik op Save. De gebruiker is nu aangemaakt. 
Klik met je rechtermuis op database, kies Create en dan Database. Geef in het venster Create Database een naam op. In dit geval Jennifer. Selecteer vervolgens de owner, in dit geval Jennifer. Klik vervolgens op Save. Je hebt nu een database aangemaakt genaamd Jennifer, waarbij de user Jennifer toegang heeft met het wachtwoord Jennifer. Check.
   

7. Backend configuratie instellen en opstarten. Er zijn twee manieren om de applicatie te starten, via de repository of via mijn broncode. Ga in de backend naar  [repository](https://github.com/jd-create/Tailorism_Backend.git). In het openingsvenster van IntelliJ is een knop Get from VCS. Deze geeft je de mogelijkheid een repository te clonen. Voer hier de url in https://github.com/jd-create/Tailorism_Backend.git en klik op Clone. Kan ook via File, New, Project from Version Control. Het kan zijn dat je Github nog niet geïnstalleerd hebt, dan kun je kiezen voor Download and Install. 
De andere optie om het project te openen is via het bronbestand. Ga naar het bestand pom.xml en klik rechts om deze vanuit de verkenner te openen met IntelliJ. Als je het project geopend hebt moeten nog enkele zaken ingesteld worden alvorens het project werkt. Ga naar File, New, Project Structure... of Ctrl+Alt+Shift+S. Selecteer hier de SDK die je eerder geïnstalleerd hebt, versie 15.0.2. Zet het Project Language level op SDK default en klik op OK. Daarna ga je in het Project venster, linker deel van IntelliJ dat lijkt op verkenner, selecteer Main en klik op het groene pijltje in de regelbalk met nummers ter hoogte van public class Main {. Het is mogelijk dat je een beveiligingsvenster krijgt klik op toegang toestaan. Tussen hamer en playpijl op de tweede titelbalk is nu Main komen te staan. Als je de database goed hebt in gesteld kun je in het project scherm kijken naar application.properties. Regel 1 t/m 3 moet het volgende bevatten:
   
- spring.datasource.url= jdbc.postgresql://localhost:1532/Jennifer
- spring.datasource.username= Jennifer
- spring.datasource.password= Jennifer

Als dit klopt gaan we naar de volgende stap.

8. De backend applicatie draaien. Klik op Run Main, het playpijltje in de tweede titelbalk. Als alles goed staan ingesteld verschijnt er Spring Data repository initialized!


9. Start pgAdmin, voer je wachtwoord in en open de Server, dan de Server Jennifer en vervolgens de Schemas (1), dan de Tables, dit zijn de database tabellen. Wil je er 1 bekijken bijvoorbeeld de users: klik dan rechts op app_user (user is een gereserveerd keyword die niet gebruikt mag worden in PostgreSQL, vandaar de naam app_user). Klik rechts, klik View/Edit Data en All Rows. 


10. Start dan nu de Frontend. Ook hier weer twee manieren. Via de [repository](https://github.com/jd-create/tailorism_sewingstudio.git) of via het bronbestand. 
In het welkom scherm van Webstom kun je kiezen voor Get from VCS. Of als je al in Webstorm zit via VCS, Get from Version Control. Of als je Git toevallig al geïnstalleerd hebt dan via Git, Clone en dan plak je daar deze link: https://github.com/jd-create/tailorism_sewingstudio.git. De andere manier is via mijn bronbestand. Open hierbij de src map met rechtermuisklik met de optie Open Folder als Webstom Project.
    
11. Yes we zijn er bijna. Nu moet je de dependencies installeren. Soms opent zich onderin een informatievenster Install dependencies en kun je daarin klikken op Run 'npm install'. Als je dit niet ziet dan open je onderin een Terminal venster en typ je het commando npm install. Zodra je ziet Process finished with exit code 0 is het goed. Nog beter is happy hacking, maar volgens mij is dat afhankelijk van het project. 

12. De laatste stap is nu het starten van de Frontend applicatie met npm start, met het groene pijltje bovenin de tweede titelbalk of in het terminal venster met het commando npm start. Dan opent zich de website in je browser op [http://localhost:3000](http://localhost:3000). Lees onderstaande informatie even goed door, maar daarna raad ik je aan naar de Happy Flow te gaan onderin. Voor een fijne belevenis met mijn applicatie (voorzover mogelijk met deze basics)

### Backoffice medewerker
Gebruikersnaam: operator
Wachtwoord: password

### Nieuwe klant
Gebruikersnaam: zelf te verzinnen, bijvoorbeeld: user2
Email: zelf te verzinnen, bijvoorbeeld: user2@mail.nl
Wachtwoord: zelf te verzinnen óf password

### Bestaande klant
Dit is een feature die op de backlog staat voor een volgende sprint omdat dit een openstaand issue is. Dit is nu op te lossen door de token in de lokale opslag te verwijderen. Wel kun je inloggen met een door jezelf aangemaakte user.

## Profielpagina met private content

Via de inlogpagina word je na succesvolle inlog doorgeleid naar de profielpagina.
Deze is ook bereikbaar via [http://localhost:3000](http://localhost:3000/profile) en er staat een link op de Homepagina.

Op deze pagina is als klant zichtbaar, diens gebruikersnaam en email. 

Op deze pagina is als operator zichtbaar wat de beschrijving is van een naaiopdracht en de prijs hiervan. Dit is een voorbeeld van private content die zichtbaar is voor een specifieke rol. Deze functie zou ik graag uitbreiden in een volgende update. 

## Winkelwagentje

Via het winkelwagentje word je naar de Bestel pagina geleid. Momenteel zijn hier nog geen gegevens beschikbaar. In een volgende update wil ik het bestelproces vervolmaken. Ik vind het spijtig dit nu nog niet bereikt te hebben. Het maken van een dynamische frontend vereist veel kunde en tijd om alle issues aan te pakken. De aansluiting op de backend is op een basic niveau gelukt en dat is al een hele kunst. Ervaring is een groot goed die in kleine stappen en veel tijd verworven wordt. 

## Happy flow

Ga naar het Naaiatelier en kijk lekker rond. Je kunt de links artikelen, stoffenmarkt of naaiopdracht bekijken. Je bent enthousiast geworden en gaat je registreren. 

Klik op Registreren.
Gebruikersnaam: user2
Email: user2@mail.nl
Wachtwoord: password

Bericht registreren is succesvol en je wordt doorgeleid naar de loginpagina.

Log vervolgens in met
Gebruikersnaam: user2
Wachtwoord: password

Je wordt vanzelf doorgestuurd naar de profielpagina. Van daaruit kun je naar de Loguit knop.

## Postman

Voor de backend is het prettig met Postman te werken. Speciaal daarvoor heb ik de endpoints beschikbaar gemaakt. Een import staat in de root van de backend, de file heet Tailorism.postman_collection.json. In Postman kun je kiezen voor import, kies vervolgens voor upload files en selecteer daarna het importbestand in je verkenner (tip: je kunt de verkenner openen vanuit de backend, door rechts te klikken op het bestand en te kiezen voor open in explorer). Voila, alle endpoints in je postman. Happy testing. 


