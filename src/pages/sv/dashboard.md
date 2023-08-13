---
layout: ../../layouts/toc.astro
title: "The RIM Management Dashboard"
author: "Jack Falejczyk - Pneuma Solutions"
date: "13 Jul 2023"
---
RIM har en webbaserad instrumentpanel som underlättar olika maskin- och kontohanteringsuppgifter. Du kan hantera dina befintliga obevakade datorer, skapa förkonfigurerade installationsprogram för måldatorer och mycket mer.  
Det bör noteras att funktionerna i instrumentpanelen till stor del beror på vilken prenumerationsnivå ditt konto är under. Företagsanvändare kan t.ex. tilldela maskiner till målgrupper och skapa tysta och/eller MSI-baserade installationsprogram. Å andra sidan är det möjligt att skapa anpassade standardinstallatörer (ej tysta) för obevakade maskiner med en pro-prenumeration eller högre.
## Hitta instrumentpanelen
Om du är en styrenhet är det enklaste sättet att komma till instrumentpanelen via RIM:s huvudgränssnitt. Om du klickar på knappen RIM Dashboard öppnas instrumentpanelen automatiskt i din standardwebbläsare, med inloggningen redan hanterad.  
Om du är en nätverksadministratör som inte har RIM installerat, kan du helt enkelt logga in på ditt konto på RIM-webbplatsen och din instrumentpanel kommer att visas.
## Hantering av mål
När du klickar på länken "Configure Targets" kommer du till en sida där du kan hantera alla maskiner som du har konfigurerat för obevakad åtkomst. Du kan klicka på vilken som helst av dessa maskiner för att hantera den. När du är inne kommer du att kunna:
* Byta namn på målet
* Flytta målet till en annan grupp (mer om målgrupper senare)
* Ta bort målet
<!-- end -->
## Målgrupper (för Pro-konton och högre)
Låt oss säga att din arbetsgrupp är utspridd på flera olika platser. Eller så kanske du vill utse grupper av maskiner till dina rutinunderhållstekniker. Med målgrupper kan du göra just det. För att göra detta klickar du helt enkelt på knappen "Skapa målgrupp", namnger din grupp och skickar in.  
Du kan ha så många målgrupper som behövs för ditt användningsfall. 
### Åtkomstkontroll (för företagsorganisationer)
Om din organisation tilldelar en supporttekniker en viss uppsättning maskiner vill du förmodligen se till att de bara har åtkomst till den specifika uppsättningen. Det är här inställningen för åtkomstkontroll för målgrupper kommer in i bilden.  
När du klickar på en målgrupp får du alternativ för att hantera maskinerna i gruppen, liksom själva gruppen. I avsnittet för åtkomstkontroll kan du ge åtkomst till den här gruppen per konto. Ange bara e-postadressen för det konto du vill lägga till och klicka sedan på knappen "Ge åtkomst". När detta är gjort visas en tabell med konton som ges åtkomst till den här gruppen. Under varje konto finns en knapp för "Återkalla åtkomst". Denna knapp kräver ingen ytterligare bekräftelse.  
Det bör noteras att alla organisationsadministratörer automatiskt beviljas åtkomst för att hantera alla grupper som skapas under organisationen.
## Konfigurera en förkonfigurerad RIM Installer (Pro eller högre, endast Windows-mål)
Ett av de enklaste sätten att konfigurera en maskin för obevakade eller uppmanade anslutningar är att skapa ett anpassat installationsprogram. Detta är mycket användbart om du konfigurerar massdistributioner, eller som ett enklare sätt att få igång RIM på en slutanvändares dator som du planerar att ge support för regelbundet.
FÖR att göra detta:
1. Klicka på knappen "Build Target Installer" på skärmen för målhantering.
1. Du kommer först att få frågan om du vill att maskinen ska konfigureras för helt obevakad åtkomst, eller för åtkomst med uppmaning där användaren måste acceptera en uppmaning för att initiera anslutningen.
1. Du kommer sedan att bli ombedd att ange en målgrupp. Observera att målgruppsvalet automatiskt kommer att gå till din valda målgrupp om du initierar installationsprogrammets konfiguration från din grupps sida.
1. Du kommer att bli tillfrågad om hur länge du vill att installationsprogrammet ska vara giltigt. Den kan vara giltig i mellan 7 och 30 dagar. Observera att denna tidsram endast påverkar installationspaketets funktionalitet. Med andra ord kommer maskinens RIM-konfiguration inte att inaktiveras när installationen löper ut.
1. Du får sedan möjlighet att tilldela ett basnamn. Alla maskiner som tillhandahålls via det här installationspaketet kommer att tilldelas detta basnamn.
1. Om du är företagsadministratör kommer du att se en kryssruta som låter dig bygga installationsprogrammet som ett MSI-paket. Det här alternativet är användbart för massdistribution av ett anpassat installationsprogram till ett maskinkluster som kommer att tilldelas den givna målgruppen.
1. Du kommer att bli ombedd att ange ett namn på installationsprogrammet, och eventuellt några anteckningar. Dessa är för internt bruk och kommer inte att visas i det skapade installationsprogrammet.
1. Klicka på "Bygg installationsprogrammet" Du kommer att se nedladdningslänken som du antingen kan kopiera till urklipp och skicka till din slutanvändare. Alternativt kan du ladda ner installationsprogrammet direkt för användning i massdistributioner.
<!-- end -->
Nu när du har ditt installationsprogram kan det köras på ett av två sätt. I båda fallen kommer maskinen att läggas till i listan över maskiner både i ditt konto och i RIM-klienten när installationsprogrammet är klart.
### Normal körning
Användaren får ett meddelande när installationsprogrammet körs, med följande information:
* Teknikerns namn tillsammans med dennes organisation, om tillämpligt
* typ av anslutning, dvs. om ett meddelande krävs eller inte
<!-- end -->
Användaren kan välja att antingen svara ja eller nej till installationen. Om användaren svarar nej avbryts installationen. När installationen är klar får användaren ett meddelande om att maskinen nu är konfigurerad för fjärråtkomst.
### Tyst installation (endast Enterprise-installatörer)
En tyst installation kan initieras genom att köra det körbara installationsprogrammet med kommandoradsparametern */S*. Detta är användbart när RIM installeras som en del av en rutin för massdistribution.
## Sessionshistorik
Du kan visa hela din sessionshistorik via RIM:s instrumentpanel. Sessionshistoriken innehåller för närvarande datum och tid för varje session, namnet på den dator du anslöt till och hur länge sessionen varade. Du kan också välja att lägga till kommentarer till en session via länken "Lägg till kommentar" i sessionsraden. Detta är användbart för att lägga till anteckningar om den aktuella statusen för en incident för din egen skull såväl som för organisationsadministratörer.
## Hantera din prenumeration (Personlig )och Pro-planer)
I instrumentpanelen kan du enkelt visa och hantera uppgifter om din RIM-prenumeration. När du klickar på länken "Hantera prenumeration" kan du:
* Uppgradera din plan
* Uppdatera din betalningsmetod
* Avbryt återkommande betalningar
<!-- end -->
### Uppgradera din plan
Du kan enkelt uppgradera din prenumeration. Om du har en månatlig plan kommer du att debiteras den återstående avgiften proportionellt från det nya beloppet, och hela det nya beloppet debiteras för efterföljande månader. Om du klickar på "Uppgradera abonnemang" visas en sida som är nästan identisk med den första sidan för val av abonnemang. Det finns några anmärkningsvärda skillnader som vi kommer att beskriva nedan:
* Du kan inte nedgradera din plan till en plan med färre maskiner. Du kan dock uppgradera från en månads- till en årsplan med samma antal maskiner som din nuvarande plan. För att nedgradera måste du säga upp din plan, vänta på att den löper ut och sedan initiera en ny plan med färre maskiner.
* Företagsplaner, inklusive företagstillägget, kan inte förvärvas direkt via denna sida.
<!-- end -->
### Annullera återkommande betalningar
När du klickar på "Avbryt automatisk förnyelse" kommer du att bli ombedd att bekräfta, varefter din prenumeration kommer att löpa ut i slutet av den aktuella perioden.