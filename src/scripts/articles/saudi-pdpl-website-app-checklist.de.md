---
title: Saudisches PDPL für Websites und Apps: eine technische Checkliste
summary: Was das saudische Datenschutzgesetz von Website oder App verlangt: Einwilligung, Datensparsamkeit, Zugriffsprotokolle, 72-Stunden-Meldung, Hosting.
tags: PDPL, Datenschutz, Privatsphäre, Datenlokalisierung, SDAIA, Saudi-Arabien
alt: Eine Frau mit Kopftuch blickt auf das Smartphone in ihren Händen
caption: Unter dem saudischen PDPL entsteht Datenschutz im Code: Einwilligungen, Datensparsamkeit, Zugriffsprotokolle, Meldung binnen 72 Stunden.
stats: 72|Stunden, um SDAIA eine Datenpanne zu melden; 5 Mio. SAR|Höchstbußgeld, bei Wiederholung verdoppelbar; 48|förmliche Verstoßentscheidungen der SDAIA-Ausschüsse
---

Das saudische Gesetz zum Schutz personenbezogener Daten (PDPL) gilt seit dem 14. September 2024 in vollem Umfang und erfasst nicht nur saudische Unternehmen, sondern auch Anbieter im Ausland, die Menschen im Königreich bedienen. Für eine Website oder App bedeutet Compliance vor allem Dinge, die das System tatsächlich leisten muss: offenlegen, was Sie erheben, Einwilligungen nachweisen, nur das Nötige speichern, protokollieren, wer Daten einsieht, Datenpannen innerhalb von 72 Stunden an SDAIA melden und kontrollieren, wohin die Daten gehen. Dieser Leitfaden macht daraus eine technische Checkliste. Er ist eine allgemeine Information und keine Rechtsberatung.

Zuletzt geprüft: 6. November 2026

## Was das Gesetz ist und wen es betrifft

Das PDPL wurde im September 2021 durch das Königliche Dekret M/19 erlassen und im März 2023 durch das Königliche Dekret M/148 geändert. Es trat am 14. September 2023 in Kraft, mit einer einjährigen Übergangsfrist, die am 14. September 2024 endete. Zuständige Behörde ist die Saudi Data and AI Authority (SDAIA).

Für Unternehmer zählen vor allem drei Punkte:

- **Es erfasst ausländische Anbieter.** Das Gesetz gilt für Anbieter außerhalb des Königreichs, die Personen in Saudi-Arabien bedienen. Eine im Ausland entwickelte oder gehostete Plattform fällt also nicht aus dem Anwendungsbereich.
- **Es wird durchgesetzt.** Die Ausschüsse der SDAIA haben bereits 48 förmliche Verstoßentscheidungen erlassen.
- **Die Sanktionen sind erheblich.** Bußgelder reichen bis 5 Millionen SAR, und ein Gericht kann sie bei Wiederholung verdoppeln. Die Offenlegung sensibler Daten in Schädigungsabsicht kann bis zu zwei Jahre Haft und/oder eine Geldstrafe bis 3 Millionen SAR nach sich ziehen.

Die meisten Pflichten treffen den „Verantwortlichen“: das Unternehmen, das über Zweck und Art der Verarbeitung personenbezogener Daten entscheidet. Wenn Sie die Website oder App betreiben, sind das in der Regel Sie, nicht Ihr Entwickler oder Ihr Hosting-Anbieter. Aufgabe des Entwicklers ist es, ein System zu bauen, mit dem Sie diese Pflichten erfüllen können.

## Die Checkliste im Überblick

| Bereich | Was das System leisten sollte | Warum es wichtig ist |
|---|---|---|
| Datenschutzhinweis | Auf Arabisch und Englisch erklären, was Sie erheben, wozu, wer es erhält und wie man Sie erreicht | Menschen sollen wissen, worin sie einwilligen, bevor sie Daten angeben |
| Einwilligungsnachweise | Speichern, wer wann in was eingewilligt hat und zu welcher Version des Hinweises | Sie können die Einwilligung später belegen, statt sie anzunehmen |
| Datensparsamkeit | Nur die Felder erheben, die Sie tatsächlich nutzen | Weniger Daten heißt weniger zu schützen und weniger zu verlieren |
| Zugriffsrechte | Jeder Rolle nur die Daten geben, die sie braucht | Begrenzt den Schaden durch ein einzelnes geleaktes Passwort |
| Zugriffsprotokolle | Festhalten, wer personenbezogene Daten angesehen, geändert, exportiert oder gelöscht hat | Sie können Vorfälle untersuchen und Fragen beantworten |
| Pannenprozess | Ein schriftlicher Plan, um einen Vorfall zu bewerten und SDAIA innerhalb von 72 Stunden zu informieren | Die Frist ist kurz, der Plan muss vor dem Vorfall stehen |
| Übermittlung ins Ausland | Eine Liste aller externen Dienste, die Daten erhalten, und wo sie diese speichern | Übermittlungen erfordern ein angemessenes Schutzniveau oder geeignete Garantien |
| Registrierung | Prüfen, ob Sie sich auf der National Data Governance Platform registrieren müssen | In der Praxis betrifft das die meisten Verantwortlichen |

## Datenerhebung: Hinweis, Einwilligung und weniger Daten

Die meisten personenbezogenen Daten kommen über Formulare (Registrierung, Kasse, Buchung, Kontakt) herein. Beginnen Sie dort.

- **Schreiben Sie einen verständlichen Datenschutzhinweis.** In klarem Arabisch und Englisch, auf einer eigenen Seite, verlinkt von jedem Formular, das personenbezogene Daten erhebt: was Sie erheben, wozu, welche externen Dienste es erhalten, wie lange Sie es aufbewahren und wie man Sie erreicht.
- **Versionieren Sie den Hinweis.** Bewahren Sie bei jeder Änderung den alten Text mit Datum auf, denn ein Einwilligungsnachweis nützt nur, wenn Sie zeigen können, was die Person gesehen hat.
- **Speichern Sie Einwilligungen als Daten, nicht nur als Häkchen.** Nutzer- oder Kontakt-ID, Gegenstand der Einwilligung, Version des Hinweises, Datum und Uhrzeit sowie Kanal (Website, App oder WhatsApp).
- **Trennen Sie die Zwecke.** Die Einwilligung in Werbenachrichten gehört getrennt von den Daten, die Sie für eine Bestellung oder Buchung brauchen.
- **Machen Sie den Widerruf so einfach wie die Einwilligung.** Ein Abmeldelink oder eine Kontoeinstellung, die denselben Einwilligungsnachweis aktualisiert.
- **Streichen Sie Felder, die Sie nicht nutzen.** Eine Ausweisnummer oder ein Geburtsdatum „für alle Fälle“ sind Daten, die Sie schützen, erklären und irgendwann löschen müssen.
- **Behandeln Sie Gesundheits-, Finanz- und Identitätsdaten mit besonderer Sorgfalt.** Bei diesen Kategorien richtet ein Leck den größten Schaden an.

In einer Praxissoftware zum Beispiel sollten deutlich weniger Personen Patientenakten sehen als den Terminkalender; mehr dazu in unserem Leitfaden zur [Praxisverwaltungssoftware](/blog/clinic-management-system-egypt).

## Im System: Zugriff, Protokolle und Löschung

Der Rest der Checkliste liegt im Admin-Dashboard und in der Datenbank.

### Rollen und Berechtigungen

Jeder Mitarbeitende sollte sich mit einem eigenen Konto anmelden, nie mit einem geteilten, und nur sehen, was seine Aufgabe erfordert. Eine Kassiererin braucht Name und Bestellung des Kunden, eine Marketingassistenz vielleicht eine E-Mail-Liste, aber nicht die Bestellhistorie, und nur sehr wenige Personen brauchen einen Export des gesamten Kundenstamms. Aktivieren Sie die Zwei-Faktor-Anmeldung für alle Admin-Konten.

### Zugriffsprotokolle

Protokollieren Sie, wer personenbezogene Datensätze angesehen, bearbeitet, exportiert oder gelöscht hat, mit Zeitstempel und betroffenem Datensatz. Speichern Sie das Protokoll so, dass normale Administratoren es nicht ändern können. Ohne dieses Protokoll können Sie nach einem Vorfall nicht sagen, wessen Daten von wem eingesehen wurden.

### Die Daten einer Person finden, exportieren und löschen

Früher oder später fragt ein Kunde, was Sie über ihn gespeichert haben, oder bittet um Berichtigung oder Löschung. Bauen Sie eine Funktion, die alles zu einer Person findet (Bestellungen, Nachrichten, Buchungen und Dateien), exportiert, berichtigt und löscht oder anonymisiert, einschließlich der Kopien in externen Tools.

### Aufbewahrung

Legen Sie fest, wie lange jede Datenart aufbewahrt wird, und lassen Sie das System das durchsetzen, damit alte Leads, abgebrochene Warenkörbe und abgelaufene Bewerbungen nicht für immer in der Datenbank liegen. Für manche Unterlagen gelten gesetzliche Aufbewahrungsfristen; klären Sie diese zuerst mit Ihrem Berater.

## Der 72-Stunden-Prozess für Datenpannen

Das PDPL verlangt, Verletzungen des Schutzes personenbezogener Daten innerhalb von 72 Stunden an SDAIA zu melden. Ein im Oktober 2026 veröffentlichter Änderungsentwurf würde diese Meldung unabhängig vom wahrscheinlichen Schaden vorschreiben. Technisch ist es daher sicherer, davon auszugehen, dass jede echte Panne gemeldet werden muss.

72 Stunden sind kurz, wenn ein Wochenende dazwischenliegt. Bereiten Sie sich vor:

1. **Erkennen.** Warnungen bei ungewöhnlichen Anmeldungen, Massenexporten und wiederholten Fehlern auf Admin-Seiten.
2. **Eindämmen.** Wissen, wie man einen geleakten Schlüssel sperrt, Passwortänderungen erzwingt und eine Funktion abschaltet.
3. **Bewerten.** Mit den Zugriffsprotokollen klären, welche Daten, wie viele Personen und seit wann.
4. **Entscheiden und melden.** Festlegen, wer entscheidet, wer die Meldung an SDAIA schreibt und wer betroffene Kunden bei Bedarf informiert.
5. **Dokumentieren und beheben.** Den Vorfall, seine Ursache und die vorgenommene Änderung schriftlich festhalten.

Benennen Sie für jeden Schritt eine verantwortliche Person und stellen Sie sicher, dass Ihr Vertrag den Entwickler verpflichtet, Ihnen jeden entdeckten Vorfall umgehend zu melden.

## Datenübermittlung ins Ausland und Hosting

### Was das geltende Recht sagt

Übermittlungen ins Ausland sind in Länder mit angemessenem Schutzniveau zulässig, andernfalls mit geeigneten Garantien. In beiden Fällen dürfen nur die mindestens erforderlichen Daten übermittelt werden. Die aktualisierte Übermittlungsverordnung stammt vom 1. August 2024, die Leitlinien der SDAIA zu Binding Common Rules vom 1. September 2024.

Der Hauptserver ist nur eine von vielen Übermittlungen. Listen Sie jeden externen Dienst auf, der personenbezogene Daten erhält: Hosting, Datenbank, Backups, E-Mail, SMS, WhatsApp, Analyse, Live-Chat, Zahlungsanbieter und Fehlertracking. Notieren Sie jeweils, welche Daten er erhält und in welchem Land sie gespeichert werden. Diese Liste ist die Grundlage für die Prüfung durch Ihren Berater und für Ihren Datenschutzhinweis.

### Der Entwurf zur Speicherung im Königreich

Die SDAIA hat Änderungsentwürfe zum PDPL vom 6. Oktober bis 5. November 2026 auf der Plattform Istitlaa zur öffentlichen Konsultation gestellt. Die wichtigsten Vorschläge:

- Ein neuer Artikel 23, der Verantwortliche verpflichtet, personenbezogene Daten im Königreich zu speichern, während Übermittlungen nach dem Gesetz weiter zulässig bleiben.
- Eine Registrierungspflicht für jeden Verantwortlichen, der Daten ins Ausland übermittelt.
- Meldung von Datenpannen innerhalb von 72 Stunden unabhängig vom wahrscheinlichen Schaden.

Das ist noch ein Entwurf. Wird er angenommen, treten die Änderungen 60 Tage nach Veröffentlichung im Amtsblatt in Kraft; das Ergebnis der Konsultation konnten wir bei der Prüfung dieser Seite nicht bestätigen. Sagen Sie Ihren Kunden nicht, dass saudisches Recht bereits eine lokale Speicherung vorschreibt, berücksichtigen Sie den Entwurf aber bei der Wahl des Hostings für ein System, das jahrelang laufen soll.

### Hosting-Optionen in Saudi-Arabien

- **Google Cloud Dammam (me-central2).** Kunden mit Sitz in Saudi-Arabien kaufen den Zugang über CNTXT; Kunden anderswo benötigen eine Abrechnung per Rechnung.
- **AWS.** Amazon gibt an, seine erste saudische Region sei „on track to launch in December 2026“. Prüfen Sie, ob sie gestartet ist, bevor Sie darauf planen.

Die Essential Cybersecurity Controls (ECC-2:2024) der National Cybersecurity Authority binden Behörden und Betreiber kritischer nationaler Infrastruktur; allen anderen wird die Anwendung nur nachdrücklich empfohlen. Die Fassung von 2024 hat die alte Vorgabe zum Hosting im Königreich gestrichen und die Datenlokalisierung an das National Data Management Office der SDAIA verwiesen.

## Registrierung, Verträge und Zuständigkeiten

**Registrierung.** Bestimmte Verantwortliche müssen sich auf der National Data Governance Platform der SDAIA registrieren, was in der Praxis die meisten Verantwortlichen betrifft. In bestimmten Fällen ist ein Datenschutzbeauftragter vorgeschrieben. Fragen Sie Ihren Berater, was für Sie gilt: Die Registrierung ist eine unternehmerische Aufgabe, keine Programmieraufgabe.

**Verträge mit Entwicklern und Dienstleistern.** Wer Ihr System baut oder betreibt, sieht oft personenbezogene Daten. Für Behörden und Betreiber kritischer Infrastruktur legt ECC-Control 4-1-2 die Mindestklauseln fest: Vertraulichkeit, sichere Löschung Ihrer Daten bei Vertragsende, ein Verfahren zur Meldung von Cybersicherheitsvorfällen und die Pflicht, Ihre Sicherheitsanforderungen umzusetzen. Diese Klauseln sind für jedes Unternehmen sinnvoll. Unser Artikel dazu, [was Sie in einem Softwareentwicklungsvertrag prüfen sollten](/blog/software-development-contract-what-to-check), behandelt den Rest, und [wie Sie ein Softwareunternehmen in Saudi-Arabien auswählen](/blog/choose-software-company-saudi-arabia) nennt die Fragen, die Sie vor der Unterschrift stellen sollten.

**Was KF hier leistet.** KF Tech Solutions entwickelt Websites, Apps und [individuelle Software](/services/custom-software), und wir arbeiten mit Unternehmen in Ägypten und am Golf. In einem System, das personenbezogene Daten verarbeitet, können wir diese Checkliste ins Produkt einbauen: versionierte Datenschutzhinweise, Einwilligungsnachweise, rollenbasierte Zugriffe, Zugriffsprotokolle, Export- und Löschfunktionen sowie eine schriftliche Liste aller Dienste, die Daten erhalten, und ihres Hosting-Standorts. Wir sind keine Juristen und stellen keine Compliance-Zertifikate aus. Ihr Berater bestätigt, was das Gesetz von Ihrem Unternehmen verlangt, und wir setzen es um. Mehr auf unserer [Seite zu Saudi-Arabien](/saudi-arabia) und in unserem Leitfaden zu den [Kosten der App-Entwicklung in Saudi-Arabien](/blog/app-development-cost-saudi-arabia), falls Sie eine neue App budgetieren.

## Häufige Fragen

### Gilt das PDPL, wenn mein Unternehmen oder mein Entwickler außerhalb Saudi-Arabiens sitzt?

Das kann es. Das Gesetz gilt für ausländische Anbieter, die Personen im Königreich bedienen. Entscheidend ist, wessen Daten Sie verarbeiten, nicht wo Ihre Server oder Ihr Entwickler stehen.

### Muss ich personenbezogene Daten in Saudi-Arabien hosten?

Nach dem Gesetz, wie es die von uns geprüften Quellen zusammenfassen, nein: Übermittlungen ins Ausland sind in Länder mit angemessenem Schutzniveau oder mit geeigneten Garantien zulässig. Ein Änderungsentwurf würde die Speicherung im Königreich vorschreiben, ist aber noch ein Entwurf. Projekte für Behörden und kritische Infrastruktur können eigene Anforderungen haben; klären Sie Ihren Fall mit Ihrem Berater.

### Muss ich mich bei der SDAIA registrieren?

Bestimmte Verantwortliche müssen sich auf der National Data Governance Platform registrieren, was in der Praxis die meisten betrifft. Der Änderungsentwurf würde die Registrierung für jeden Verantwortlichen vorschreiben, der Daten ins Ausland übermittelt. Ihr Berater kann Ihren Fall bestätigen.

### Kann mir mein Entwickler ein PDPL-Zertifikat ausstellen?

Wir haben keine offizielle PDPL-Zertifizierung für Softwareanbieter gefunden. Fragen Sie stattdessen, wie er Einwilligungsnachweise, Protokolle und Löschfunktionen baut. Ob Ihr Unternehmen die Vorgaben erfüllt, klären Sie mit Ihrem Berater.

Wenn Sie Ihre Website oder App anhand dieser Liste prüfen oder von Anfang an danach bauen lassen möchten, [senden Sie uns die Details](/contact) oder [buchen Sie ein kostenloses Gespräch](/book).

## Quellen

- [DLA Piper: Data protection laws of the world, Saudi Arabia](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Securiti: Saudi Arabia guidelines for Binding Common Rules](https://securiti.ai/saudi-arabia-guidelines-for-binding-common-rules-bcr-for-personal-data-transfer/)
- [Chambers TMT 2026: Saudi Arabia, trends and developments](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Clyde & Co: SDAIA publishes draft amendments to the PDPL](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [National Cybersecurity Authority: Essential Cybersecurity Controls (ECC-2:2024)](https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf)
- [Google Cloud: Dammam region access](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon: AWS cloud region in Saudi Arabia](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
