---
layout: ../../layouts/toc.astro
title: "Il cruscotto di gestione RIM"
author: "Jack Falejczyk - Pneuma Solutions"
date: "13 Jul 2023"
---
RIM dispone di un dashboard basato sul Web per facilitare varie attività di gestione dei computer e degli account. È possibile gestire i computer non presidiati esistenti, creare programmi di installazione preconfigurati per i computer di destinazione e molto altro ancora.  
Va notato che le funzionalità del dashboard dipendono in larga misura dal livello di abbonamento dell'account. Ad esempio, gli utenti aziendali possono assegnare i computer a gruppi di destinazione e creare installatori silenziosi e/o MSI. D'altra parte, la creazione di programmi di installazione personalizzati standard (non silenziosi) per le macchine non presidiate è possibile con un abbonamento pro o superiore.
## Individuazione della dashboard
Se si è un controllore, il modo più semplice per raggiungere la dashboard è attraverso l'interfaccia principale di RIM. Facendo clic sul pulsante RIM Dashboard si aprirà automaticamente il dashboard nel browser predefinito, con il login già effettuato.  
Se siete un amministratore di rete che non ha installato RIM, potete semplicemente accedere al vostro account sul sito web di RIM e la vostra dashboard apparirà.
## Gestione degli obiettivi
Facendo clic sul link "Configura obiettivi", si accede a una pagina che consente di gestire tutti i computer configurati per l'accesso non presidiato. È possibile fare clic su uno qualsiasi di questi computer per gestirlo. Una volta entrati, sarà possibile
* Rinominare il target
* Spostare il target in un gruppo diverso (maggiori informazioni sui gruppi di target in seguito)
* Eliminare il target
<!-- end -->
## Gruppi di destinazione (per gli account Pro e superiori)
Supponiamo, ad esempio, che il vostro gruppo di lavoro sia distribuito in diverse sedi. Oppure che si vogliano designare gruppi di macchine per i tecnici della manutenzione ordinaria. I gruppi di destinazione consentono di fare proprio questo. Per farlo, è sufficiente fare clic sul pulsante "Crea gruppo di destinazione", assegnare un nome al gruppo e inviare.  
È possibile avere tutti i gruppi di destinazione necessari per il proprio caso d'uso. 
### Controllo degli accessi (per le organizzazioni aziendali)
Se la vostra organizzazione assegna un tecnico di assistenza a un gruppo specifico di macchine, probabilmente vorrete assicurarvi che abbia accesso solo a quel gruppo specifico. È qui che entra in gioco l'impostazione del controllo degli accessi per i gruppi di destinazione.  
Quando si fa clic su un gruppo di destinazione, vengono offerte le opzioni per gestire i computer del gruppo e il gruppo stesso. Nella sezione di controllo dell'accesso è possibile concedere l'accesso al gruppo in base all'account. È sufficiente inserire l'indirizzo e-mail dell'account che si desidera aggiungere, quindi fare clic sul pulsante "Dai accesso". Una volta fatto ciò, verrà presentata una tabella di account a cui è stato concesso l'accesso a questo gruppo. Sotto ogni account è presente il pulsante "Revoca accesso". Questo pulsante non richiede ulteriori conferme.  
Si noti che a tutti gli amministratori dell'organizzazione viene automaticamente concesso l'accesso alla gestione di tutti i gruppi creati nell'organizzazione.
## Impostazione di un programma di installazione RIM preconfigurato (Pro o superiore, solo obiettivi Windows)
Uno dei modi più semplici per impostare un computer per connessioni non presidiate o richieste è creare un programma di installazione personalizzato. Questo è incredibilmente utile se si stanno configurando distribuzioni di massa o anche come modo più semplice per rendere RIM attivo e funzionante sul computer di un utente finale per il quale si intende fornire assistenza regolarmente.
Per fare questo:
1. Nella schermata di gestione dei target, fare clic sul pulsante "Build Target Installer".
1. Per prima cosa vi verrà chiesto se volete che questo computer sia configurato per un accesso completamente non presidiato o per un accesso guidato in cui l'utente deve accettare una richiesta per avviare la connessione.
1. Verrà quindi richiesto di assegnare un gruppo di destinazione. Si noti che la selezione del gruppo di destinazione andrà automaticamente al gruppo di destinazione scelto se si avvia la configurazione del programma di installazione dalla pagina del gruppo.
1. Verrà chiesto per quanto tempo si desidera che il programma di installazione sia valido. La validità può variare da 7 a 30 giorni. Si noti che questo periodo di tempo influisce solo sulla funzionalità del pacchetto di installazione. In altre parole, la configurazione RIM della macchina non verrà disattivata alla scadenza dell'installazione.
1. Viene quindi data la possibilità di assegnare un nome basso. A qualsiasi macchina approvvigionata tramite questo pacchetto di installazione verrà assegnato questo nome di base.
1. Se siete un amministratore aziendale, vedrete una casella di controllo che consente di creare il programma di installazione come pacchetto MSI. Questa opzione è utile per la distribuzione di massa di un programma di installazione personalizzato a un cluster di macchine che saranno designate al gruppo di destinazione indicato.
1. Verrà richiesto di fornire il nome del programma di installazione e, facoltativamente, alcune note. Queste sono per i registri interni e non appariranno nel programma di installazione creato.
1. Fare clic su "Build Installer" Verrà visualizzato il link per il download che può essere copiato negli appunti e inviato all'utente finale. In alternativa, è possibile scaricare direttamente il programma di installazione per utilizzarlo nelle distribuzioni di massa.
<!-- end -->
Una volta ottenuto il programma di installazione, è possibile eseguirlo in due modi. In entrambi i casi, al termine dell'installazione il computer verrà aggiunto all'elenco dei computer dell'account e del client RIM.
### Esecuzione normale
Durante l'esecuzione del programma di installazione, l'utente riceverà un prompt contenente le seguenti informazioni:
* Il nome del tecnico e la sua organizzazione, se applicabile
* la natura della connessione, ovvero se è richiesto un prompt o meno
<!-- end -->
L'utente può scegliere se rispondere sì o no all'installazione. Rispondendo no, l'installazione viene annullata. Al termine dell'installazione, l'utente riceverà un prompt che lo informerà che il suo computer è ora configurato per l'accesso remoto.
### Installazione silenziosa (solo per gli installatori Enterprise)
È possibile avviare un'installazione silenziosa eseguendo il programma di installazione eseguibile con il parametro della riga di comando */S*. Questo è utile quando si installa RIM come parte di una routine di distribuzione di massa.
## Cronologia delle sessioni
È possibile visualizzare l'intera cronologia delle sessioni passate attraverso il cruscotto di RIM. La cronologia delle sessioni contiene attualmente la data e l'ora di ogni sessione, il nome del computer a cui ci si è connessi e la durata della sessione. Si può anche scegliere di aggiungere commenti a una sessione tramite il link "Aggiungi commento" nella riga della sessione. Questo è utile per aggiungere note sullo stato attuale di un incidente, sia per sé che per gli amministratori dell'organizzazione.
## Gestione dell'abbonamento (piani Personal )e Pro)
Il cruscotto consente di visualizzare e gestire facilmente i dettagli dell'abbonamento RIM. Facendo clic sul link "Gestisci abbonamento", è possibile:
* Aggiornare il proprio piano
* Aggiornare il metodo di pagamento
* Annullare i pagamenti ricorrenti
<!-- end -->
### Aggiornamento del piano
È possibile aggiornare facilmente il proprio abbonamento. Se avete un piano mensile, vi verrà addebitato il costo residuo del nuovo importo, mentre l'intero importo verrà addebitato per i mesi successivi. Facendo clic su "Aggiorna abbonamento" si apre una pagina quasi identica a quella di selezione del piano iniziale. Ci sono alcune differenze degne di nota che illustreremo di seguito:
* Non è possibile effettuare il downgrade a un piano con meno macchine. È invece possibile passare da un piano mensile a uno annuale con lo stesso numero di macchine del piano attuale. Per effettuare il downgrade, è necessario annullare il piano, attendere la sua scadenza e avviare un nuovo piano con un numero inferiore di macchine.
* I piani Enterprise, compreso l'addon Enterprise, non possono essere acquistati direttamente da questa pagina.
<!-- end -->
### Annullamento dei pagamenti ricorrenti
Quando si fa clic su "Annullamento del rinnovo automatico", viene richiesta una conferma, dopodiché l'abbonamento viene impostato per scadere alla fine del periodo corrente.