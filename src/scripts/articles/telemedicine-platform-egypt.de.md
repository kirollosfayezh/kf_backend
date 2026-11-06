---
title: Eine Telemedizin-Plattform in Ägypten aufbauen
summary: Was eine Plattform für Online-Sprechstunden in Ägypten braucht: Buchung, Videositzungen, Zahlungen, Prüfung der Behandler und Schutz von Gesundheitsdaten.
tags: Telemedizin, Online-Sprechstunde, Gesundheits-App, Videositzungen, Patientendaten, Ägypten
alt: Eine Ärztin im weißen Kittel führt in ihrer Praxis eine Videosprechstunde am Laptop
caption: Die Videositzung ist nur der sichtbare Teil; Buchung, Zahlung, Prüfung der Behandelnden und Datenschutz tragen die Plattform.
stats: 4|Bausteine jeder Online-Sprechstunde: Buchung, Video, Zahlung, Notizen; 2|Genehmigungswege im PDPC-Portal: juristische Person oder freier Beruf; 151|von 2020: die Nummer des ägyptischen Datenschutzgesetzes
---

Eine Telemedizin-Plattform in Ägypten besteht aus vier Systemen, die wie eines arbeiten: einem Buchungskalender für jeden Behandler, einer Videositzung, die auch über mobile Daten stabil bleibt, einem Zahlungsablauf für Erstattungen und nicht erschienene Patienten und einer Patientenakte, die nur Berechtigte öffnen können. Das Video ist meist der einfachste Teil. Die meiste Arbeit steckt in der Prüfung der Behandler, den Terminregeln und dem Schutz der Gesundheitsdaten, den das ägyptische Datenschutzgesetz Nr. 151 von 2020 und seine Durchführungsverordnung inzwischen regeln.

Zuletzt geprüft: 6. November 2026

## Beginnen Sie mit der Sprechstunde, nicht mit der App

Bevor Sie Funktionen auswählen, schreiben Sie auf, wie eine Sprechstunde von Anfang bis Ende abläuft. Wer bucht sie? Ist es ein Erstgespräch oder eine Nachsorge? Braucht der Behandler frühere Notizen oder Laborbefunde? Was folgt nach dem Gespräch: ein Rezept, eine Überweisung, eine zweite Sitzung?

Die Antworten bestimmen, was Sie bauen. Psychotherapeutische Sitzungen sind lang und wiederkehrend; allgemeine Sprechstunden sind kurz und brauchen einen Weg, den Patienten an eine Klinik zu überweisen.

| Baustein | Erste Version | Kann warten |
|---|---|---|
| Buchung | Behandlerprofile, freie Termine, Erinnerungen | Wartelisten, Sitzungspakete |
| Video | Anrufe in der App oder im Browser, Wechsel auf Audio | Gruppensitzungen, Bildschirmfreigabe |
| Zahlung | Zahlung vor der Sitzung, automatische Erstattungen | Guthaben, Abonnements |
| Akten | Sitzungsnotizen, vom Patienten hochgeladene Dateien | Anbindung an Labore und Apotheken |
| Verwaltung | Freigabe der Behandler, Übersicht der Buchungen | Detaillierte Berichte, Auszahlungen je Behandler |

Eine erste Version nur mit der mittleren Spalte ist bereits ein echtes Produkt. Wenn Sie die Nachfrage testen, erklärt unser Leitfaden zum [Start mit einem MVP](/blog/mobile-app-mvp-egypt), wie Sie den Umfang reduzieren, ohne an Qualität zu sparen.

## Buchung und der Kalender des Behandlers

Jeder Behandler legt eigene Arbeitszeiten, Sitzungsdauer und Pausen fest, und die Plattform zeigt Patienten nur freie Termine. Bauen Sie von Anfang an die Regeln ein, die später Ärger machen: wie weit im Voraus gebucht werden kann, bis wann eine Absage möglich ist und was passiert, wenn ein Behandler erkrankt und zehn Sitzungen verlegt werden müssen.

Erinnerungen sind wichtiger als die meisten Funktionen: eine bei der Buchung, eine am Vortag und eine kurz vor der Sitzung. Behandelt der Behandler auch vor Ort, müssen Online-Kalender und Praxiskalender derselbe Kalender sein, sonst kommt es zu Doppelbuchungen. Unser Artikel über [Praxisverwaltungssoftware in Ägypten](/blog/clinic-management-system-egypt) behandelt die Seite vor Ort.

## Videositzungen, die mit ägyptischen Verbindungen funktionieren

Die meisten Plattformen entwickeln Video nicht selbst. Sie nutzen WebRTC, den Standard hinter Videoanrufen im Browser, meist über einen verwalteten Videodienst. Wichtiger ist, was Sie darum herum bauen:

- Eine Prüfung von Kamera, Mikrofon und Verbindung vor dem Anruf.
- Ein automatischer Wechsel auf Audio bei schwacher Verbindung, damit die Sitzung weiterläuft.
- Ein Wartezimmer, damit der Patient nicht beitritt, während der Behandler noch mit jemand anderem spricht.
- Ein Sitzungslink, der nur für diesen Patienten und zu diesem Termin funktioniert.
- Standardmäßig keine Aufzeichnung. Falls Sie je aufzeichnen, holen Sie vorher eine klare Einwilligung ein und behandeln Sie die Datei als Teil der Patientenakte.

Testen Sie auf Android-Smartphones der Mittelklasse mit mobilen Daten, nicht nur im Büro-WLAN. So werden die meisten Patienten teilnehmen.

## Zahlungen, Erstattungen und nicht erschienene Patienten

Patienten zahlen meist vor der Sitzung per Karte oder mobiler Geldbörse, und die Plattform bestätigt die Buchung erst nach erfolgreicher Zahlung. Legen Sie die Erstattungsregeln vor dem Code fest: volle Erstattung, wenn der Behandler absagt, teilweise Erstattung bei später Absage durch den Patienten, keine bei Nichterscheinen, jeweils automatisch angewendet.

Werden Behandler pro Sitzung bezahlt, braucht die Plattform eine klare Aufstellung, was jeder verdient hat, abzüglich des Plattformanteils. Unser Vergleich der [Zahlungsanbieter in Ägypten](/blog/payment-gateways-egypt) behandelt die lokalen Zahlungsarten und den Aufwand für die Anbindung.

## Behandler prüfen, bevor sie freigeschaltet werden

Patienten vertrauen der Plattform, nicht dem einzelnen Profil. Deshalb sollte jeder Behandler vor seiner ersten Sitzung geprüft werden. Verlangen Sie die Berufszulassung oder die Kammermitgliedschaft, die Fachrichtung und Ausweisdokumente, und halten Sie fest, wer wann geprüft hat. Richten Sie Erinnerungen für ablaufende Dokumente ein.

Führen Sie die Prüfung im Verwaltungsbereich durch, nicht in einem E-Mail-Verlauf, und geben Sie jedem Behandler nur Zugriff auf die Akten seiner eigenen Patienten.

## Gesundheitsdaten und das Gesetz 151/2020

Gesundheitsdaten gehören zu den sensibelsten Daten, die ein Unternehmen speichern kann, und eine Telemedizin-Plattform speichert viele davon. Das ägyptische Datenschutzgesetz Nr. 151 von 2020 regelt, wie personenbezogene Daten erhoben, verarbeitet und gespeichert werden. Das Ministerium für Kommunikation und Informationstechnologie hat erklärt, dass es Datenerheber und -verarbeiter verpflichtet, die nötigen Lizenzen, Genehmigungen und Zulassungen einzuholen.

Das Personal Data Protection Center (PDPC) betreibt inzwischen ein Portal, das eine Genehmigung oder Lizenz für juristische Personen und eine eigene Genehmigung für freie Berufe anbietet, mit einem Fragebogen, der Ihre Pflichten nach dem Gesetz ermittelt. Auf seiner Website heißt es außerdem, dass die Durchführungsverordnung zum Gesetz erlassen wurde. Ein Plattformunternehmen und ein selbstständiger Arzt können also unterschiedliche Formalitäten haben. Klären Sie Ihre Lage daher früh.

Technisch sollten Sie Folgendes von der ersten Version an einplanen:

- Einwilligungsbildschirme, die klar sagen, was Sie erheben und warum, mit einem gespeicherten Nachweis jeder Einwilligung.
- Verschlüsselung bei der Übertragung und im Speicher sowie rollenbasierte Zugriffe, damit Mitarbeitende nur sehen, was ihre Aufgabe erfordert.
- Ein Zugriffsprotokoll, das zeigt, wer welche Akte wann geöffnet hat.
- Eine Möglichkeit, die Daten eines Patienten auf Anfrage zu exportieren oder zu löschen.
- Einen schriftlichen Ablauf für Datenpannen: wer entscheidet, wer informiert wird und wie schnell.

Dies sind allgemeine Informationen, keine Rechtsberatung. Lassen Sie von einem Anwalt klären, welche Pflichten für Ihren Dienst gelten, einschließlich etwaiger Regeln des Gesundheitssektors über das Datenschutzgesetz hinaus. Unser Artikel zum [ägyptischen Datenschutzgesetz für Apps](/blog/egypt-data-protection-law-apps) geht die Checkliste ausführlicher durch.

## Wie KF Tech Solutions hilft

Wir haben Horus gebaut, eine Plattform für eine Klinik für psychische Gesundheit mit mehreren Standorten, die Patienten mit lizenzierten Therapeuten verbindet: Patienten finden einen Arzt, buchen eine Online- oder Vor-Ort-Sitzung und bleiben zur Nachsorge in Kontakt, und die Klinik präsentiert ihre Standorte, Ärzte und Leistungen auf einer Website. Sie läuft produktiv mit Next.js und React. Über unseren [Service für App-Entwicklung](/services/mobile-applications) planen und bauen wir solche Sprechstunden-Plattformen, von den Buchungsregeln bis zum Verwaltungsbereich und der App selbst.

## Häufige Fragen

### Brauche ich eine App, oder reicht eine Website?

Für den Anfang reicht eine Web-App, die im Browser des Smartphones läuft, und Sie können die Nachfrage günstiger testen. Native Apps für iOS und Android lohnen sich, sobald Patienten regelmäßig buchen, weil sie Push-Erinnerungen und ein flüssiges Videoerlebnis erleichtern.

### Sollten wir Videositzungen aufzeichnen?

In der Regel nicht. Aufzeichnungen bringen Risiken und Speicherkosten mit sich. Wenn Sie aufzeichnen, holen Sie vorher eine klare Einwilligung ein und schützen Sie die Datei wie jeden anderen Teil der Patientenakte.

### Wie verhindern wir, dass Unqualifizierte Sitzungen anbieten?

Geben Sie jeden Behandler manuell frei, bevor sein Profil sichtbar wird, bewahren Sie seine Dokumente und das Freigabedatum im Verwaltungsbereich auf und erinnern Sie Ihr Team, bevor ein Dokument abläuft.

### Gilt das Gesetz 151/2020 auch für eine kleine Plattform?

Das Gesetz regelt die Verarbeitung personenbezogener Daten allgemein, und das PDPC-Portal bietet Genehmigungen sowohl für Unternehmen als auch für einzelne Berufsträger an. Nutzen Sie den Fragebogen des PDPC und lassen Sie sich von einem Anwalt bestätigen, was in Ihrem Fall gilt.

Planen Sie einen Dienst für Online-Sprechstunden in Ägypten? [Beschreiben Sie uns Ihren Ablauf](/contact) oder [buchen Sie ein kostenloses Gespräch](/book), und wir helfen Ihnen zu entscheiden, was die erste Version braucht.

## Quellen

- [Personal Data Protection Center (PDPC), Ägypten](https://pdpc.gov.eg/home)
- [Pressemitteilung des MCIT zum Gesetz Nr. 151 von 2020](https://mcit.gov.eg/en/Media_Center/Press_Room/Press_Releases/63220)
