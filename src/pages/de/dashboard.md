---
layout: ../../layouts/toc.astro
title: "Das RIM Management Dashboard"
author: "Jack Falejczyk - Pneuma Solutions"
date: "13 Jul 2023"
---
RIM bietet ein webbasiertes Dashboard, das verschiedene Aufgaben der Computer- und Kontoverwaltung erleichtert. Sie können Ihre vorhandenen unbeaufsichtigten Computer verwalten, vorkonfigurierte Installationsprogramme für Zielcomputer erstellen und vieles mehr.  
Es ist zu beachten, dass der Funktionsumfang des Dashboards weitgehend davon abhängt, welche Abonnementstufe Ihr Konto hat. Enterprise-Benutzer können beispielsweise Computer zu Zielgruppen zuordnen sowie Silent- und/oder MSI-basierte Installer erstellen. Andererseits ist die Erstellung von standardmäßigen (nicht stummen) benutzerdefinierten Installern für unbeaufsichtigte Rechner nur mit einem Pro-Abonnement oder höher möglich.
## Auffinden des Dashboards
Wenn Sie ein Controller sind, gelangen Sie am einfachsten über die RIM-Hauptschnittstelle zum Dashboard. Wenn Sie auf die Schaltfläche RIM-Dashboard klicken, wird das Dashboard automatisch in Ihrem Standardbrowser geöffnet, wobei die Anmeldung bereits erledigt ist.  
Wenn Sie ein Netzwerkadministrator sind, der RIM nicht installiert hat, können Sie sich einfach bei Ihrem Konto auf der RIM-Website anmelden und Ihr Dashboard wird angezeigt.
## Ziele verwalten
Wenn Sie auf den Link "Configure Targets" (Ziele konfigurieren) klicken, gelangen Sie auf eine Seite, auf der Sie alle Rechner verwalten können, die Sie für den unbeaufsichtigten Zugriff konfiguriert haben. Sie können auf jeden dieser Rechner klicken, um ihn zu verwalten. Dort können Sie Folgendes tun:
* Das Ziel umbenennen
* Das Ziel in eine andere Gruppe verschieben (mehr über Zielgruppen später)
* Die Zielperson löschen
<!-- end -->
## Zielgruppen (für Pro-Konten und höher)
Nehmen wir an, Ihre Arbeitsgruppe ist über mehrere Standorte verteilt. Oder vielleicht möchten Sie Gruppen von Rechnern für Ihre routinemäßigen Wartungstechniker bestimmen. Mit Zielgruppen können Sie genau das tun. Klicken Sie dazu einfach auf die Schaltfläche "Zielgruppe erstellen", benennen Sie Ihre Gruppe und senden Sie sie ab.  
Sie können so viele Zielgruppen erstellen, wie Sie für Ihren Anwendungsfall benötigen. 
### Zugriffskontrolle (für Unternehmensorganisationen)
Wenn Ihre Organisation einen Supporttechniker einer bestimmten Gruppe von Rechnern zuweist, möchten Sie wahrscheinlich sicherstellen, dass er nur auf diese bestimmte Gruppe Zugriff hat. Hier kommt die Zugriffskontrolle für Zielgruppen ins Spiel.  
Wenn Sie auf eine Zielgruppe klicken, erhalten Sie Optionen zur Verwaltung der Maschinen in der Gruppe sowie der Gruppe selbst. Im Abschnitt "Zugriffskontrolle" können Sie den Zugriff auf diese Gruppe für einzelne Konten gewähren. Geben Sie einfach die E-Mail-Adresse des Kontos ein, das Sie hinzufügen möchten, und klicken Sie dann auf die Schaltfläche "Zugriff gewähren". Daraufhin wird eine Tabelle mit den Konten angezeigt, die Zugriff auf diese Gruppe haben. Unter jedem Konto befindet sich eine Schaltfläche "Zugriff widerrufen". Für diese Schaltfläche ist keine weitere Bestätigung erforderlich.  
Es ist zu beachten, dass alle Organisationsadministratoren automatisch Zugriff auf die Verwaltung aller Gruppen erhalten, die unter der Organisation erstellt werden.
## Einrichten eines vorkonfigurierten RIM-Installers (Pro oder höher, nur Windows-Ziele)
Eine der einfachsten Möglichkeiten, einen Rechner für unbeaufsichtigte oder angeforderte Verbindungen einzurichten, ist die Erstellung eines benutzerdefinierten Installationsprogramms. Dies ist unglaublich nützlich, wenn Sie Massenverteilungen konfigurieren oder auch als einfachere Möglichkeit, RIM auf dem Computer eines Endbenutzers zum Laufen zu bringen, für den Sie regelmäßig Support anbieten wollen.
Um dies zu tun:
1. Klicken Sie im Bildschirm "Zielverwaltung" auf die Schaltfläche "Zielinstallationsprogramm erstellen".
1. Sie werden zunächst gefragt, ob Sie diesen Rechner für einen völlig unbeaufsichtigten Zugriff konfigurieren wollen oder für einen Zugriff mit Eingabeaufforderung, bei dem der Benutzer eine Eingabeaufforderung akzeptieren muss, um die Verbindung zu initiieren.
1. Dann werden Sie nach einer Zielgruppenzuweisung gefragt. Beachten Sie, dass die Zielgruppenauswahl automatisch auf die von Ihnen gewählte Zielgruppe übergeht, wenn Sie die Konfiguration des Installationsprogramms von der Seite Ihrer Gruppe aus starten.
1. Sie werden gefragt, wie lange dieser Installer gültig sein soll. Die Gültigkeitsdauer kann zwischen 7 und 30 Tagen liegen. Beachten Sie, dass dieser Zeitrahmen nur die Funktionalität des Installationspakets betrifft. Mit anderen Worten: Die RIM-Konfiguration des Rechners wird nicht deaktiviert, wenn die Installation abläuft.
1. Sie erhalten dann die Möglichkeit, einen Bassnamen zu vergeben. Jeder Maschine, die über dieses Installationspaket bereitgestellt wird, wird dieser Basisname zugewiesen.
1. Wenn Sie ein Unternehmensadministrator sind, wird ein Kontrollkästchen angezeigt, mit dem Sie das Installationsprogramm als MSI-Paket erstellen können. Diese Option ist nützlich für die Massenbereitstellung eines benutzerdefinierten Installationsprogramms für einen Computer-Cluster, der der angegebenen Zielgruppe zugewiesen wird.
1. Sie werden aufgefordert, einen Installer-Namen und optional einige Notizen anzugeben. Diese sind für interne Zwecke bestimmt und werden nicht im erstellten Installer angezeigt.
1. Klicken Sie auf "Installer erstellen" Es wird ein Download-Link angezeigt, den Sie entweder in die Zwischenablage kopieren und an Ihren Endbenutzer senden können. Alternativ können Sie das Installationsprogramm auch direkt herunterladen, um es für Massenverteilungen zu verwenden.
<!-- end -->
Nachdem Sie das Installationsprogramm erhalten haben, können Sie es auf eine der beiden folgenden Arten ausführen. In beiden Fällen wird der Rechner nach Abschluss der Installation sowohl in Ihrem Konto als auch im RIM-Client in die Liste der Rechner aufgenommen.
### Normale Ausführung
Der Benutzer erhält beim Ausführen des Installationsprogramms eine Eingabeaufforderung mit den folgenden Informationen:
* Den Namen des Technikers und ggf. seine Organisation
* die Art der Verbindung, d.h. ob eine Eingabeaufforderung erforderlich ist oder nicht
<!-- end -->
Der Benutzer kann wählen, ob er die Installation mit Ja oder Nein beantwortet. Wenn er mit Nein antwortet, wird die Installation abgebrochen. Nach Beendigung des Installationsprogramms erhält der Benutzer eine Meldung, dass sein Rechner nun für den Fernzugriff eingerichtet ist.
### Stille Installation (nur Enterprise Installer)
Eine stille Installation kann durch Ausführen des ausführbaren Installationsprogramms mit dem Befehlszeilenparameter */S* eingeleitet werden. Dies ist nützlich, wenn Sie RIM als Teil einer Massenverteilungsroutine installieren.
## Sitzungsverlauf
Über das RIM-Dashboard können Sie den gesamten Verlauf Ihrer vergangenen Sitzungen einsehen. Der Sitzungsverlauf enthält derzeit das Datum und die Uhrzeit jeder Sitzung, den Namen des Computers, mit dem Sie sich verbunden haben, und die Dauer der Sitzung. Über den Link "Kommentar hinzufügen" in der Sitzungszeile können Sie außerdem Kommentare zu einer Sitzung hinzufügen. Dies ist nützlich, um Notizen zum aktuellen Status eines Vorfalls sowohl für Sie selbst als auch für die Administratoren der Organisation hinzuzufügen.
## Verwaltung Ihres Abonnements (Personal )und Pro-Pläne)
Über das Dashboard können Sie die Details Ihres RIM-Abonnements einfach anzeigen und verwalten. Wenn Sie auf den Link "Abonnement verwalten" klicken, können Sie:
* Ihr Abonnement aktualisieren
* Ihre Zahlungsmethode aktualisieren
* Wiederkehrende Zahlungen stornieren
<!-- end -->
### Ihr Abonnement aufwerten
Sie können Ihr Abonnement ganz einfach aktualisieren. Wenn Sie ein Monatsabonnement abgeschlossen haben, wird der neue Betrag anteilig berechnet, während für die Folgemonate der volle neue Betrag berechnet wird. Wenn Sie auf "Abonnement aktualisieren" klicken, öffnet sich eine Seite, die fast identisch ist mit der Seite zur Auswahl des ursprünglichen Tarifs. Es gibt jedoch ein paar bemerkenswerte Unterschiede, die wir im Folgenden erläutern werden:
* Sie können Ihren Tarif nicht auf einen Tarif mit weniger Rechnern herabstufen. Sie können jedoch von einem Monatstarif auf einen Jahrestarif mit der gleichen Anzahl von Rechnern wie Ihr aktueller Tarif umsteigen. Um ein Downgrade vorzunehmen, müssen Sie Ihren Plan kündigen, dessen Ablauf abwarten und dann einen neuen Plan mit weniger Rechnern abschließen.
* Enterprise-Tarife, einschließlich des Enterprise-Addons, können nicht direkt über diese Seite erworben werden.
<!-- end -->
### Wiederkehrende Zahlungen kündigen
Wenn Sie auf "Automatische Verlängerung kündigen" klicken, werden Sie um eine Bestätigung gebeten, woraufhin Ihr Abonnement am Ende der aktuellen Laufzeit ausläuft.