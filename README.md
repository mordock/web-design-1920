# Week 1 verslag

-Beschrijf je ‘mens’, wie is hij/zij? Wat doen ze? Opvallende dingen? Karakter beschrijving, irritaties, type humor, schoenmaat …  
-Een verslagje van de testsessie.  
-Beschrijf de test. Hoe kun je (remote) user testen? Welke dingen gingen goed, welke dingen kunnen beter, tips & trick.  
## Roger
Roger is een specialist in duurzame energie, specifiek warmte pompen die onderandere gebruikt worden voor grote kantoren. Hier is hij enkele jaren geleden mee gestopt omdat de programma die hij nodig had om onderandere te lezen niet goed te gebruiken waren op de beveiligde systemen waar hij op moest werken. Sindsdien besteed hij meer tijd aan beeldhouwen en heeft hij nu ook een passie voor accessibility. 
De aandoening die hij heeft is erfelijk, in het begin van zijn leven had hij er nog weinig last van maar het is over de jaren erger geworden. 
In het allendaagse leven liggen zijn irritaties onderandere bij de technologien die hij gebruikt. Hij gebruikt bijvoorbeeld een darkmode omdat hij hiermee beter kan lezen, maar dit invert ook plaatjes die praktisch niet meer te zienzijn. Of zijn text to speech die niet altijd goed werkt waardoor sommige websites erg inaccessible worden. 

## Sessie
De test sessie begon dat wij vroegen dat Roger zelf zijn aandoening kon beschrijven en wat dingen kon vertellen. Hier leerde wij precies wat hij had en wat hij nog wel kon. Hier leerde wij bijvoorbeeld dat zijn rechter oog nog maar voor 2% werkt, maar de linker voor nu nog redelijk werkt, maar wel achteruit gaat. 
Daarna zij we dingen over de technologies die hij gebruikt gaan vragen zoals wat voor screenreader hij gebruikt en hoe hij zijn computer gebruikt. 
Aan het einde hebben we wat over de cases gepraat, wat hij wil in een grafiek of tabel en wat effectief voor hem zou zijn. Hier kwam uit dat hij moeite heeft met het bekijken van grafieken en een conclusie hier uit halen. Het zou bijvoorbeeld helpen als er in tekst wordt uitgelegd wat er gebeurd met de data. Deze tekst moet dan wel alleen harde cijfer bevatten zoals 'lijn x stijgt'. Ook zo zouden grafieken en tabellen geen plaatjes moeten zijn zodat hij er doorheen kan tabben.   

## Remote testen
Deze week hebben we nog geen echte test gedaan met websites, we hebben vooral informatie verzamelt. We hebben Roger wel geprobeert zijn screen te laten sharen zodat wij met een voorbeeld konden meekijken. Dit duurde even en iets ging niet helemaal goed wat veel interessante informatie gaf. Hoewel hij goed met computer kan omgaan heeft hij vanwege zijn aandoening soms moeite met UI elementen op het scherm vinden. Dit is iets waar wij de volgende keer op moeten letten voor het echte testen. 

# Week 2 verslag

## Mijn plan
Voor deze test sessie had ik enkele verschillende tabellen gemaakt die andere kleuren en contrast hadden en andere layouts hadden. Hiermee wilde ik kijken wat Roger het prettigst vond. 
Met het team hadden we ook enkele dingen voorbereid zoals wie in welk team zat en alle test link klaargezet. Daarnaast hadden we ook weer afgesproken dat Bas de basis van het gesprek zou leiden. Dit zorgde ervoor dat het gesprek erg gestroomlijnd was voor Roger en voor ons.

## Sessie
Het begon een beetje moeilijk omdat de mic van Roger niet werkte, maar nadat dat was opgelost gingen de tests voorspoedig. We begonnen met alle grafieken en daarna degene met tabellen. 
Tijdens meerdere testen zijn we er achter gekomen dat zijn screenreader niet altijd alles leest zoals wij dat verwachtte. Hierdoor werkte veel concepten niet helemaal. Ditzelfde probleem had ik met mijn tabellen. Ik was er vanuit gegaan dat de screenreader een voor een elementen voorlas, en alleen als ze geselecteerd waren. Dit was niet het geval en hij las de hele pagina in een keer voor. 
Dit in combinatie met enkele voorbeelden van anderen heeft ervoor gezorgd dat ik mijn concept heb veranderd. Meer hadden de ingebouwde voice van javascript gebruikt als vervanging van zijn screenreader. Hier ga ik ook mee werken en dan een site maken die een voor een informatie laat zien. Dit zorgt ervoor dat het niet te veel wordt voor Roger als hij zijn eigen screen reader gebruikt. 

# Week 3 verslag

## Mijn plan
Na de feedback en test van vorige week had ik gezien dat de screenreader van Roger niet altijd perfect doet wat hij wil. Dit is ook iets waar ik geen invloed op heb als developer. Daarom had ik het idee om zelf een mini screenreader te maken specifiek voor mijn site. Hiermee had ik invloed over wanneer de screen reader wat zei, wanneer die wat zei hoe snel die sprak en of die op pauze kon. 
Voor mijn test had ik een paar simpele pagina's gemaakt die het concept en gebruik van de screen reader uitlegde. Daarnaast had ik een tabel gemaakt over energie in Nederland waar de screenreader doorheen kon werken. 

## Sessie
We hadden als team weer afgesproken om dezelfde opzet als vorige week te gebruiken. Éen persoon deed de intro en introduceerde de mensen en een voor een deden we onze test. Deze week hadden we ook het probleem dat we Roger niet konden horen maar dat was dit keer binnen 5 minuten opgelost. 
Mijn test begon oke en de screen reader deed wat hij moest doen. Bij de tabel ging het jammer genoeg een beetje mis omdat de tab toets niet goed werkte. Daardoor kon Roger niet door de  tabel heen, hij kon wel de muis gebruiken maar dat gaf niet hetzelfde effect. Hij gaf wel goede feedback dat hij er niet op tegen was om een andere screenreader te gebruiken voor een site, maar dat het hem dus wel tijd zou kosten om de nieuwe toetsen te leren. Het was dus belangrijk om herkenbare toetsen te gebruiken. 
Na deze test ben ik van plan om wel met dit design door te gaan. Ik heb genoeg feedback om verbeteringen te kunnen maken en het hopelijk bruikbaar voor Roger te krijgen. 

# User scenario
Roger heeft intresse in groene energie en energie gebruik in Nederland. Hij wil informatie weten over de Kolencentrales die nog actief zijn in Nederland om te kijken of hij Q42 kan helpen met een app maken die mensen hierover zou moeten informeren. Roger vindt wat grafieken maar zijn screenreader kan de informatie niet goed voor hem oplezen waardoor hij heel veel energie moet steken in het zelf proberen te lezen. 
In plaats daarvan gaat hij naar de site die een student van de HvA had gemaakt. Deze heeft een screenreader die speciaal gemaakt is voor tabellen. Hiermee kan hij vakje voor vakje door de tabel heen en zo de informatie goed tot zich innemen. Hiervoor moet hij heel even zijn eigen screenreader uitzetten zodat hij dingen niet dubbel hoort. 
Na het gebruik van de site denkt Roger dat hij deze tabel goed kan gebruiken voor de app en laat deze bij Q42 zien.

# Reflectie
Na de laatste testronde waren er meerdere dingen die beter hadden kunnen gaat tijdens het testen 
## voorbereiding vragen
Voor de tests had ik altijd wel een product klaar om te testen, maar ik had meestal weinig vragen echt voorbereid. Dit is iets wat ik bij andere beter zag gaan. Zij hadden misschien geen volledig product maar wisten precies wat ze wilden vragen waardoor de test alsnog heel goed ging. Dit is iets wat ik de volgende keer het voornaamst beter wil doen. Je kan een product hebben om te laten zien, maar als je niet weet wat je er mee wilt doen, gaat je test alsnog erg middelmatig.

## task based testen
De paar dingen die ik wel had voorbereid waren vooral hele algemene dingen zoals wat hij van dingen vond etc. De laatste test had mogelijk effectiefer kunnen zijn als ik meer gebruik had gemaakt van task based testing. Hiermee had Roger echt de app moeten gebruiken en had ik meer te te weten kunnen komen. Vooral bij de functionaliteit van de custom screen reader had dit handig geweest. Vragen zoals 'zet het volgende stuk tekst op pauze en start deze dan opnieuw op'. Dit had meer duidelijkheid kunnen geven of de toetsen duidelijk waren. 

## testpersoon laten ontdekken
Dit is iets wat vooral bij de laatste test van pas kwam omdat er daar wat meer te testen was, maar ik wilde soms iets te snel iets zeggen of Roger helpen. Hierdoor ben ik mogelijk wat interessant informatie verloren omdat hij het zelf niet kon uitzoeken. Hoewel dit deels ook weer samen komt bij de voorbereiding wil ik er ook voor zorgen dat ik mijn testpersoon de ruimte geef om zelf de website te ontdekken.

# exclusive design principles
## Study situation
Roger heeft een Windows PC waar hij alleen Chrome op gebruikt en een Iphone 11 waar hij Safari op gebruikt. Voor dit van heb ik iets gemaakt wat speciaal voor zijn Chrome browser werkt.

## Prioritise identity
Binnen de site probeer is Roger zoveel mogelijk persoonlijk aan de te spreken. Dit doe ik door zijn eigen naar te gebruiken en de jij vorm aan te houden. Hierdoor hoop ik dat het voor hem als zijn site aanvoelt zodat hij er een persoonlijk connectie mee legt. 

## Ignore conventions
De meeste sites zijn is een erg professionele manier geschreven en praat niet tegen de gebruiker zelf. Dit doe ik juist om de site een persoonlijk gevoel te geven.
Wat ook vaak wordt gedaan is dat je een overzicht of home page hebt en dat je via daar verder door kan. Dit werkt voor een screen reader niet altijd lekker omdat deze dan als een malle door de pagina heen gaat. Daarom heb ik besloten om mijn website in delen op te splitsen. Dit zorgt ervoor dat er niet te veel tekst tegelijkertijd op het scherm is. 

## Add nonsense


# Web Design @cmda-minor-web 1920
//Interactie ontwerpen: Rapid prototypen en testen met echte mensen

Web Design gaat over het ontwerpen en testen van Interactie. Het voordeel van een Frontend Developer (en Web Designer) is dat die techniek begrijpt, kan toepassen én verstand heeft van UX en design. Als je Web technieken begrijpt kun je je ideeën snel prototypen en testen met echte gebruikers, in een browser. Je kan dan aanpassingen doorvoeren, uitproberen en weer testen ...

In het vak Web design gaan we dingen ontwerpen voor echte mensen. Is er goede interactie? Kan je 'mens' je product op een prettige manier bedienen? Wat voor principes heb je gebruikt en getest? En zit er wel _nonsense_ in?


## Opdracht 1 - Ontwerpen met en voor echte mensen
Voor dit vak krijg je een ontwerp-opdracht die je gaat maken voor 1 mens. Een echt mens. Je moet je ontwerp 3 keer testen. Door te testen en te itereren ga je je ontwerp verbeteren. Uiteindelijk heb je een ontwerp dat exclusief gemaakt is voor 1 persoon. Een _exclusive design_ ... Wie is deze persoon dan voor wie je dit gaat maken? Wat vindt deze persoon leuk of juist niet? En hoe bedient deze persoon een computer?

- [Opdracht 1 - Ontwerpen met en voor echte mensen](Opdracht1.md)


## Leerdoelen
- _Leren hoe je (design) principles in een ontwerp kan toepassen._
- _User needs begrijpen en gebruiken in je ontwerp._
- _Leren hoe je moet testen en de resultaten gebruiken voor het verbeteren van je ontwerp._

[Rubric](https://docs.google.com/spreadsheets/d/1no32c9YyAP78VMcqfA5i5at2OrxP9ce1d8dVGnii4Vs/)



## Planning

| Planning  | Woensdag  |  Donderdag | Vrijdag  |
|---|---|---|---|
| <a href=#web-design---week-1>Week 1</a>  | Introductie, College Exclusive design + Briefing opdracht 1 <p>Aannames testen met echte mensen| Gastcollege _Usability and Accessibility_ van Marie van Driessche - VPRO <p>Coachingsgesprekken | Goede vrijdag  |
| <a href=#web-design---week-2>Week 2</a>  | College Principles, User Needs & Testen <p>Prototype Testen met echte mensen |  Gastcollege Toegankelijkheid Johan Huijkman - Q42 en Roger Ravelli <p>Coachingsgesprekken | Feedbackgesprekken  |
| <a href=#web-design---week-3>Week 3</a>  | College Web Design <p>Prototype testen met echte mensen | Gastcollege Experimental features van Léonie Watson - W3C <p>Coachingsgesprekken  | Feedbackgesprekken  |
| Meivakantie |  |  |   |
| <a href=#web-design---week-4>Week 4</a>  | Beoordelingsgesprekken | Beoordelingsgesprekken  | Beoordelingsgesprekken  |




## Programma

### Web Design - Week 1
Deze week krijg je een college over _Exclusive Design Principles_. Deze Principles ga je toepassen in de opdracht. Op woensdag gaan we kennis maken met de echte mensen voor wie we gaan ontwerpen. Je kan dan al een kleine interactieve demo maken om te testen.


#### Woensdag 8 april
Woensdag is de eerste les van het vak Web Design. Je krijgt een intro college over het vak en Vasilis gaat vertellen over _Exclusive Design_. [Planning week 1](./slides/Week1.png)

- [Videocollege Les 1](https://bongo-eu.youseeu.com/spa/external-player/62056/b828fbe7358f76c01e7d6cb2ebe6217a/)
- [Slides Les 1 Introduktie en briefing opdracht 1](./slides/WD1920%20Les1%20-%20kickoff.pdf)
- [Slides College over Exclusive Design](./slides/exclusive-design.pdf)

's Middags gaan we kennismaken met mensen met wie jullie gaan samenwerken. Wie zijn deze mensen? Wat vinden ze leuk of juist niet? En hoe bedienen ze een computer?

1. Marie van Driessche om 14:00
2. Larissa Klaassen om 14:00.
3. Roger Ravelli om 14:00.
4. Marijn Meijles om 16:00.



#### Donderdag 9 april
Donderdag begint de les met een Q&A. Hoe gingen de gesprekken jullie mensen? Hoe kun je testen nu we remote werken? Bedenk alvast vragen en opmerkingen om te bespreken.
Marie van Driessche van de VPRO geeft een gastcollege over Design.

Deze les gaan we onderstaande artikelen bespreken:
- [Exclusive Design van Vasilis van Gemert](https://exclusive-design.vasilis.nl/)


In de middag zijn er coachingsgesprekken in groepjes.

#### Vrijdag 10 april
Vrijdag is het Goede vrijdag. Geen les.




### Web Design - Week 2
Deze week heb je het tweede gesprek met je mens. Wat ga je testen? Wat wil je weten? [Planning week 2](./slides/Week2.png)

- [College over Principles, User needs & Testen]()



#### Woensdag 15 april
Woensdag krijg je een college over principles, user needs & testen.

- [Les 2 principles, user needs & testen]()

Deze les gaan we dit artikel bespreken:
- [Design for Both Needs and Wants: Applying Anderson’s User Experience Hierarchy of Needs](https://thevisualcommunicationguy.com/2018/11/08/design-for-both-needs-and-wants-applying-andersons-user-experience-hierarchy-of-needs/)
-  [10 Usability Lessons van Steve Krug](https://www.uxbooth.com/articles/10-usability-lessons-from-steve-krugs-dont-make-me-think/)

's Middags gaan we testen.

1. Marie van Driessche om 14:00
2. Larissa Klaassen om 14:00.
3. Roger Ravelli om 14:00.
4. Marijn Meijles om 16:00.


#### Donderdag 16 april
Donderdag begint de les met een Q&A. Tips en triks voor remote testen?
Johan Huijkman van Q42 geeft samen met Roger Ravelli een gastcollege over toegankelijkheid.

In de middag zijn er coachingsgesprekken in groepjes.


Deze les gaan we dit artikel bespreken:
- [How User Scenarios Help To Improve Your UX van Sabina Idler](https://usabilla.com/blog/how-user-scenarios-help-to-improve-your-ux/)


#### Vrijdag 17 april
Vrijdag zijn er feedbackgesprekken met Vasilis en Koop.






### Web Design - Week 3
In week 3 gaan we verder met testen, itereren en reflecteren. Woensdag is de laatste sessie met je mens. [Planning week 3](./slides/Week3.png)


#### Woensdag 22 april
Woensdag beginnen we met een college. Dan gaan we twee artikelen bespreken.

- [Les 3 college Web Design]()


Deze les gaan we dit artikel bespreken:
- [Design for Fingers, Touch, and People van Steven Hoober](https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php)



's Middags gaan we voor de laatste keer testen.

1. Marie van Driessche om 14:00
2. Larissa Klaassen om 14:00.
3. Roger Ravelli om 14:00.
4. Marijn Meijles om 16:00.


#### Donderdag 23 april
Donderdag begint de les met een Q&A.
Léonie Watson van W3C geeft een gastcollege over experimental features.

In de middag zijn er weer coachingsgesprekken in groepjes.




Deze les gaan we dit artikel bespreken:
- [Designing for Interaction Modes van Andrew Grimes](https://alistapart.com/article/designing-for-interaction-modes/)


#### Vrijdag 24 april
Vrijdag zijn er feedbackgesprekken met Vasilis en Koop.




### Web Design - Week 4

Deze week hebben we een gesprek waarin we je vorderingen en bevindingen bespreken. We verwachten dat je op Github je tests en iteraties hebt beschreven. Belangrijk is dat je reflecteert op de leerdoelen van het vak. [Planning week 4](./slides/Week4.png)

Lees hier de [criteria van opdracht 1](Opdracht1.md)





<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
