
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
