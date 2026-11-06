---
title: E-Invoicing in den VAE für individuelle Kassen- und ERP-Systeme
summary: So funktioniert E-Invoicing in den VAE aus Sicht Ihres eigenen Systems: fünf Ecken, PINT-AE-Daten, ASP-Auswahl und welche Daten Sie vorab bereinigen.
tags: E-Invoicing, PINT AE, ASP, Kassensystem, ERP, VAE
alt: Ein Taschenrechner, gedruckte Belege, ein Stift und eine Gebetskette auf einem Schreibtisch neben einem blauen Ordner
caption: Ein gedrucktes oder gemailtes PDF ist in den VAE keine E-Rechnung; die Daten laufen als PINT AE über einen ASP.
stats: 5|Ecken im E-Invoicing-Austauschmodell der VAE; 86|akkreditierte Dienstleister auf der Liste des Finanzministeriums am 6. November 2026; 0|PDFs, Scans oder E-Mails, die als E-Rechnung gelten
---

Ja, Sie können Ihr eigenes Kassen- oder ERP-System unter dem E-Invoicing der VAE weiter nutzen. Ihr System muss jede B2B- und B2G-Rechnung als strukturierte Daten im Format PINT AE an einen akkreditierten Dienstleister (Accredited Service Provider, ASP) senden, der sie prüft, an den ASP des Käufers weiterleitet und die Steuerdaten meldet. Unternehmen mit einem Umsatz ab 50 Mio. AED starten am 1. Januar 2027, übrige Unternehmen am 1. Juli 2027 und Behörden am 1. Oktober 2027.

Zuletzt geprüft: 6. November 2026

Dieser Leitfaden ist aus Sicht des Integrators geschrieben: was Ihr eigenes System leisten muss, was der ASP für Sie übernimmt und welche Daten Sie bereinigen sollten, bevor die Anbindung gebaut wird. Es handelt sich um allgemeine Informationen, nicht um Steuer- oder Rechtsberatung. Klären Sie Ihre eigene Lage mit Ihrem Steuerberater.

## Was sich an Ihren Rechnungen ändert

Das System der VAE beruht auf den Ministerialbeschlüssen 243/2025 und 244/2025, die 2026 mehrfach geändert wurden. Für ein Unternehmen mit eigener Software sind dies die praktischen Änderungen:

- **Geltungsbereich.** Alle B2B- und B2G-Transaktionen. Sowohl das Unternehmen, das die Rechnung ausstellt, als auch das Unternehmen, das sie erhält, muss einen ASP benennen.
- **B2C ist vorerst ausgenommen.** Verkäufe an Verbraucher bleiben außen vor, bis der Minister etwas anderes beschließt.
- **Ein PDF ist keine E-Rechnung.** PDFs, Word-Dateien, Scans und E-Mails zählen nicht. Die Rechnung sind die strukturierten Daten, die Ihr System an den ASP sendet.
- **Aufschub für Steuergruppen.** Transaktionen innerhalb einer Steuergruppe sind ab dem 1. Januar 2027 für 24 Monate ausgenommen (Ministerialbeschluss 197/2026).
- **Keine Pflicht zur lokalen Speicherung.** Dieselbe Änderung von 2026 hat die Pflicht gestrichen, Rechnungsdaten in den VAE zu speichern, ebenso die Pflicht, der FTA einen Systemausfall zu melden.

Ein Verkauf an der Kasse an einen Laufkunden ist also noch nicht betroffen, eine Rechnung Ihres Kassensystems an ein Unternehmen oder eine Behörde dagegen schon.

## Die fünf Ecken aus Sicht Ihres Systems

Das Ministerium nennt das Modell „Decentralized Continuous Transaction Control and Exchange“. Vereinfacht gibt es fünf Beteiligte, die Ecken genannt werden:

1. **Ecke 1: Sie, der Lieferant.** Ihr Kassen- oder ERP-System erstellt die Rechnungsdaten im Format PINT AE.
2. **Ecke 2: Ihr ASP.** Er prüft die Daten und leitet sie weiter.
3. **Ecke 3: der ASP Ihres Käufers.** Er empfängt die Rechnung von Ihrem ASP.
4. **Ecke 4: Ihr Käufer.** Sein ASP stellt die Rechnung in seinem System zu.
5. **Ecke 5: die Steuerseite.** Ihr ASP meldet die Steuerdaten.

| Ecke | Wer | Was Ihr System abdecken muss |
|---|---|---|
| 1 | Ihr Unternehmen | Vollständige Rechnungsdaten erstellen und an Ihren ASP senden |
| 2 | Ihr ASP | Einen Status entgegennehmen: angenommen oder abgelehnt mit Gründen |
| 3 | ASP des Käufers | Nichts direkt: Ihr ASP übernimmt das |
| 4 | Ihr Käufer | Nichts direkt, außer Sie kaufen auch bei ihm |
| 5 | Steuermeldung | Nichts direkt: Ihr ASP meldet für Sie |

Ihr System spricht nur mit Ecke 2. Das ist der entscheidende Punkt für ein individuelles Kassen- oder ERP-System: Sie bauen keine Verbindung zur Behörde und keine zu jedem Kunden, sondern eine einzige Verbindung zu dem ASP, den Sie wählen. Da auch jeder Käufer einen ASP benennen muss, muss dieselbe Verbindung meist auch in die andere Richtung funktionieren, damit Rechnungen Ihrer eigenen Lieferanten als Daten in Ihrem System ankommen.

Das Ministerium erwähnt außerdem OpenPeppol für den grenzüberschreitenden Austausch. Wenn Sie Kunden außerhalb der VAE Rechnungen stellen, fragen Sie Ihren ASP vor Vertragsabschluss, wie er das handhabt.

## Fristen und Bußgelder

Der Zeitplan stammt aus dem geänderten Ministerialbeschluss 244/2025. Umsatz bedeutet die Bruttoeinnahmen in Ihrer letzten Rechnungsperiode.

| Gruppe | ASP benennen bis | Start |
|---|---|---|
| Umsatz ab 50 Mio. AED | 30. Oktober 2026 | 1. Januar 2027 |
| Umsatz unter 50 Mio. AED | 31. März 2027 | 1. Juli 2027 |
| Behörden | 31. März 2027 | 1. Oktober 2027 |

Derzeit läuft eine freiwillige Pilotphase, und laut Ministerium ist das Fünf-Ecken-Modell darin in Betrieb. Liegt Ihr Umsatz bei 50 Mio. AED oder mehr, ist Ihre Frist zur Benennung eines ASP bereits verstrichen. Die Fristen nach Unternehmensgröße finden Sie in unserem Leitfaden zu den [E-Invoicing-Fristen in den VAE für KMU](/blog/uae-e-invoicing-deadlines-smes).

Die Bußgelder legt der Kabinettsbeschluss 173/2026 fest, bekannt gegeben am 30. Oktober 2026:

- System nicht umgesetzt oder keinen ASP benannt: 5.000 AED, danach 5.000 AED pro Monat, höchstens 50.000 AED in 12 Monaten.
- Jede nicht ausgestellte oder nicht übermittelte E-Rechnung oder Gutschrift: 100 AED, höchstens 5.000 AED pro Monat.
- Geänderte Registrierungsdaten nicht an den ASP gemeldet: 250 AED pro Tag, höchstens 5.000 AED pro Monat.

Den zweiten Punkt steuert ein individuelles System selbst. Ein Verkauf, der den ASP nie erreicht, weil ein Synchronisationsjob unbemerkt fehlgeschlagen ist, kann ein Bußgeld bedeuten. Fehler müssen deshalb sichtbar sein.

## Wo Ihr Kassen- oder ERP-System ins Bild passt

Es gibt drei Wege, ein bestehendes System anzubinden:

1. **Portal oder App des ASP nutzen**, sofern vorhanden, und B2B-Rechnungen von Hand eingeben. Das funktioniert für eine Handvoll Rechnungen im Monat und stößt danach an Grenzen.
2. **Dateien exportieren** und regelmäßig an den ASP übergeben. Günstiger in der Umsetzung, aber Ablehnungen kommen spät zurück, und jemand muss sie dem ursprünglichen Verkauf zuordnen.
3. **Direkt über die API des ASP anbinden.** Ihr Kassen- oder ERP-System sendet jede Rechnung bei der Ausstellung, speichert die Antwort und zeigt den Status in der Rechnungsansicht.

Für ein individuelles System ist der dritte Weg meist der richtige. Der Aufwand auf Ihrer Seite ist unabhängig vom gewählten ASP gleich:

- Rechnungs-, Kunden- und Artikeldaten den Feldern zuordnen, die Ihr ASP verlangt.
- Jede B2B-Rechnung und Gutschrift bei Ausstellung senden, nicht am Ende des Tages.
- Die Antwort des ASP zur Rechnung speichern, einschließlich der Ablehnungsgründe.
- Nach einem Netzwerkausfall automatisch erneut senden und Alarm geben, wenn eine Rechnung weiterhin nicht angenommen ist.
- Eingehende Rechnungen Ihrer Lieferanten empfangen und mit Bestellungen abgleichen.

Ein Kassensystem, das Laufkunden und Unternehmen bedient, braucht an der Kasse eine klare Regel: Ein Verkauf an ein Unternehmen oder eine Behörde ist eine B2B- oder B2G-Rechnung und geht an den ASP, ein Verkauf an Privatkunden bleibt ein B2C-Beleg. Hinterlegen Sie die Käuferart im Kundenstamm, damit diese Entscheidung nicht allein beim Kassierer liegt. Zum allgemeinen Muster der Systemanbindung lesen Sie [die Verbindung der Systeme, die Sie bereits nutzen](/blog/api-integration-connecting-business-systems).

## Bereinigen Sie Ihre Daten vor der Anbindung

Rechnen Sie damit, dass die meisten Probleme aus den Daten kommen, nicht aus dem Code. Klären Sie Folgendes, bevor die Anbindung gebaut wird:

- **TRNs der Kunden.** Jeder Geschäftskunde braucht in Ihrem System einen korrekten rechtlichen Namen und eine Adresse, dazu seine Steuernummer (TRN), wenn er umsatzsteuerlich registriert ist. Machen Sie die TRN für registrierte B2B-Kunden zum Pflichtfeld.
- **Ihre eigenen Registrierungsdaten.** Halten Sie sie in Ihrem System, auf EmaraTax und bei Ihrem ASP identisch. Änderungen müssen Ihren ASP erreichen, sonst droht ein tägliches Bußgeld.
- **Artikelnummern und Einheiten.** Jedes Produkt und jede Leistung braucht eine einheitliche Nummer, Beschreibung und Mengeneinheit. Freitextpositionen an der Kasse lassen sich schwer prüfen.
- **Steuerliche Behandlung je Position.** Der allgemeine Mehrwertsteuersatz beträgt 5 %. Jeder Artikel sollte seine steuerliche Behandlung im Artikelstamm tragen, damit der Kassierer sie nie selbst wählen muss.
- **Gutschriften.** Jede Gutschrift sollte auf die ursprüngliche Rechnung verweisen. Wenn Ihr System Retouren durch Löschen oder Ändern von Rechnungen abbildet, ändern Sie das zuerst.
- **Rechnungsnummern.** Eine lückenlose Folge je Nummernkreis, ohne Wiederverwendung nach Stornierungen.

Liegen Ihre Daten an mehreren Orten, etwa ein Kassensystem für den Laden und Tabellen für den Großhandel, planen Sie, sie vor der Anbindung in einem System zusammenzuführen. Ob dieses System ein vollständiges ERP sein sollte, ist eine eigene Frage, die wir in [Braucht ein kleines Unternehmen wirklich ein ERP?](/blog/erp-for-small-business-egypt) behandeln. Die Überlegungen gelten in den VAE genauso.

## So wählen Sie einen ASP von der Liste des Ministeriums

Nur Anbieter auf der Liste des Finanzministeriums dürfen als Ihr ASP tätig sein. Am 6. November 2026 standen dort 86 akkreditierte ASPs, gegenüber 32 im Mai. Die Schritte, die das Ministerium nennt, sind kurz: einen ASP wählen, sich auf EmaraTax registrieren, dann anbinden.

Nutzen Sie die Liste, um die Akkreditierung zu prüfen, und vergleichen Sie die Anbieter danach, wie gut sie zu Ihrem System passen:

- **API-Dokumentation.** Fordern Sie sie vor Vertragsabschluss an. Ihr Entwickler sollte sie lesen und den Aufwand schätzen können.
- **Eine Testumgebung.** Sie brauchen eine Sandbox, um Testrechnungen zu senden und echte Ablehnungsmeldungen zu sehen.
- **Eingehende Rechnungen.** Klären Sie, ob der ASP Rechnungen Ihrer Lieferanten über dieselbe API in Ihr System liefert.
- **Fehlerbehandlung.** Fragen Sie, wie Ablehnungen zurückgemeldet werden und wie lange der ASP den Verlauf aufbewahrt.
- **Preise.** Prüfen Sie, ob Sie pro Rechnung, pro Monat oder pro angebundenem System zahlen und was oberhalb Ihres Tarifs passiert.
- **Support und Sprache.** Klären Sie, wer antwortet, wenn am Starttag eine Rechnung hängen bleibt.

Ein ASP, der für große ERP-Systeme gebaut ist, passt nicht unbedingt zu einem kleinen individuellen Kassensystem, und umgekehrt. Wählen Sie zwei oder drei aus und machen Sie einen kleinen Test, bevor Sie sich festlegen.

## Was KF Tech Solutions hier übernimmt

KF Tech Solutions ist kein ASP und steht nicht auf der Liste des Ministeriums. Wir entwickeln und betreuen individuelle Kassen- und ERP-Systeme, bereiten die Daten in diesen Systemen auf und binden sie über dessen API an den ASP Ihrer Wahl an. Wir haben bereits ein Kassensystem an Ägyptens E-Beleg-System angebunden, beschrieben in [So verbinden Sie Ihr Kassensystem mit Ägyptens ETA-E-Invoicing](/blog/eta-e-invoicing-pos-integration), und hier geht es um dieselbe Arbeit: saubere Stammdaten, zuverlässiges Senden und sichtbare Fehler. Wir arbeiten mit Unternehmen in Ägypten und am Golf. Mehr dazu auf unserer Seite zu [Business-Systemen](/services/business-systems) und unserer [VAE-Seite](/uae).

## Häufige Fragen

### Gilt das E-Invoicing der VAE für mein Kassensystem im Einzelhandel?

Vorerst nur für dessen B2B- und B2G-Verkäufe. Verkäufe an Verbraucher sind ausgenommen, bis der Minister etwas anderes beschließt. Stellt Ihr Geschäft auch Unternehmen Rechnungen, fallen diese Rechnungen darunter.

### Kann ich weiterhin PDF-Rechnungen per E-Mail versenden?

Sie können ein PDF weiterhin als Kopie zur Information senden, aber es ist nicht die E-Rechnung. Die E-Rechnung sind die PINT-AE-Daten, die Ihr System an Ihren ASP sendet.

### Brauche ich einen eigenen ASP, wenn ich nur bei Lieferanten einkaufe?

Laut Ministerium müssen sowohl der Aussteller als auch der Empfänger einen ASP benennen. Klären Sie Ihre Lage mit Ihrem Steuerberater, denn die Fristen hängen von Ihrer Umsatzgruppe ab.

### Müssen meine Rechnungsdaten in den VAE gespeichert werden?

Nach den E-Invoicing-Regeln nicht mehr. Der Ministerialbeschluss 197/2026 hat diese Pflicht gestrichen. Andere Branchenregeln, etwa für Zahlungsdienstleister oder Gesundheitsdaten, können weiterhin gelten.

### Wie lange dauert die Anbindung eines individuellen Systems?

Das hängt vom Zustand Ihrer Daten und von der API des ASP ab. Das Bereinigen von Kunden-TRNs und Artikelnummern dauert meist länger als das Schreiben der Anbindung. Beginnen Sie deshalb mit den Daten.

### Was passiert, wenn der ASP eine Rechnung ablehnt?

Ihr System sollte den Grund speichern, die Rechnung einer verantwortlichen Person anzeigen und ein korrigiertes Dokument senden. Wiederholte Ablehnungen deuten meist auf fehlende oder falsche Stammdaten hin. Die technischen Details des Formats finden Sie in unserem [PINT-AE-Leitfaden für Entwickler](/blog/uae-pint-ae-developer-guide).

Sie möchten wissen, wie viel Arbeit Ihr System bis zum Start braucht? [Buchen Sie ein kostenloses Gespräch](/book) oder [senden Sie uns Ihre Angaben](/contact), und wir sehen uns an, womit Sie heute arbeiten.

## Quellen

- [Finanzministerium der VAE: eInvoicing (Seite aktualisiert am 5. November 2026)](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
- [Finanzministerium der VAE: Beschlüsse zu Geltungsbereich und Zeitplan (29. September 2025)](https://mof.gov.ae/en/news/ministry-of-finance-announces-the-issuance-of-two-ministerial-decisions-on-the-scope-of-obligations-and-the-timelines-for-implementing-the-electronic-invoicing-system-2/)
- [Ministerialbeschluss Nr. 244 von 2025 zur Umsetzung des E-Invoicing-Systems](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Finanzministerium der VAE: gezielte Änderungen der E-Invoicing-Beschlüsse](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [Finanzministerium der VAE: Änderungen zur Entlastung der Unternehmen (19. Oktober 2026)](https://mof.gov.ae/en/news/ministry-of-finance-amends-electronic-invoicing-regulations-to-ease-the-burden-on-businesses/)
- [Finanzministerium der VAE: aktualisierte E-Invoicing-Bußgelder (30. Oktober 2026)](https://mof.gov.ae/en/news/mof-announces-updated-administrative-penalties-related-to-the-uae-einvoicing-system-to-enhance-clarity-and-support-business-compliance/)
- [Finanzministerium der VAE: akkreditierte Dienstleister (ASPs)](https://mof.gov.ae/en/about-us/initiatives/einvoicing/einvoicing-accredited-service-providers-asps/)
- [Finanzministerium der VAE: Informationsveranstaltung zu E-Invoicing-Neuerungen (27. September 2026)](https://mof.gov.ae/en/news/ministry-of-finance-hosts-awareness-event-in-ras-al-khaimah-on-latest-einvoicing-updates/)
- [PwC Worldwide Tax Summaries: Vereinigte Arabische Emirate, weitere Steuern](https://taxsummaries.pwc.com/united-arab-emirates/corporate/other-taxes)
- [DLA Piper: Data Protection Laws of the World, VAE](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
