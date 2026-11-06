---
title: ZATCA Phase 2: Integration für Ihr eigenes Kassen- oder ERP-System
summary: Behalten Sie Ihr Kassensystem oder ERP und erfüllen Sie ZATCA Phase 2: Onboarding, Clearance, Meldung binnen 24 Stunden, Hash-Kette und Checkliste.
tags: ZATCA, E-Rechnung, FATOORA, Kassensystem, ERP, Saudi-Arabien
alt: Kartenzahlungsterminal druckt einen langen Papierbeleg vor einfarbig orangefarbenem Hintergrund
caption: In Phase 2 muss jede Rechnung, die Ihre Kasse ausstellt, auch als XML bei der ZATCA ankommen: vorab freigegeben oder innerhalb von 24 Stunden gemeldet.
stats: 24 Std.|Frist für die Meldung jeder vereinfachten Rechnung an FATOORA; 1. Feb. 2027|Integrationsfrist für Unternehmen der Welle 25; 10.000 SAR|2021 veröffentlichtes Bußgeld für das Löschen oder Ändern einer ausgestellten E-Rechnung
---

Ja, ein saudisches Unternehmen kann unter ZATCA Phase 2 sein eigenes Kassensystem oder ERP behalten. Jede Einheit, die Rechnungen ausstellt, muss auf ZATCAs Plattform FATOORA eingebunden werden, Rechnungen als UBL-2.1-XML erzeugen, jede Steuerrechnung von ZATCA freigeben lassen, bevor der Käufer sie erhält, und jede vereinfachte Rechnung innerhalb von 24 Stunden melden. Dafür gibt es drei Wege: das System ersetzen, eine Middleware davorschalten oder die Anbindung direkt einbauen.

Zuletzt geprüft: 6. November 2026

Dieser Leitfaden richtet sich an Inhaber, die ein für sie entwickeltes Kassenprogramm, ein ERP mit eigenen Modulen oder ein selbst gebautes System betreiben. Er erklärt, was Phase 2 von diesem System verlangt, wie Sie einen Weg wählen und was Sie vor Ihrer Frist prüfen sollten. Es handelt sich um allgemeine Informationen, nicht um Steuerberatung.

## Was Phase 2 von Ihrem System verlangt

Phase 1, die Erzeugungsphase, gilt seit dem 4. Dezember 2021 für alle Steuerpflichtigen außer Gebietsfremden: Rechnungen müssen elektronisch erzeugt werden, eine eingescannte oder kopierte Papierrechnung zählt nicht. Phase 2, die Integrationsphase, fügt eine Live-Verbindung zu ZATCA hinzu. Ihr System druckt Rechnungen nicht mehr nur aus. Es stempelt sie, übermittelt sie und belegt, was mit jeder einzelnen geschehen ist.

ZATCA behandelt zwei Rechnungsarten unterschiedlich, und viele Unternehmen stellen beide aus:

| | Steuerrechnung | Vereinfachte Steuerrechnung |
|---|---|---|
| Üblich für | Verkäufe an Unternehmen und Behörden (B2B, B2G) | Verkäufe an Verbraucher (B2C) |
| Integrationsmodell | Clearance, in Echtzeit | Meldung (Reporting), innerhalb von 24 Stunden |
| Wer stempelt | ZATCA fügt bei der Clearance ihren kryptografischen Stempel und einen QR-Code hinzu | Ihr System stempelt mit seiner eigenen CSID und fügt einen QR-Code mit 9 Tags hinzu |
| Wann der Kunde sie erhält | Erst wenn ZATCA das freigegebene XML zurückgibt | Sofort, meist als Ausdruck |
| Gutschriften und Belastungsanzeigen | Werden ebenso freigegeben | Werden ebenso gemeldet |

In der Praxis kann ein Ladengeschäft weiterverkaufen, wenn die Verbindung langsam ist, weil vereinfachte Rechnungen lokal gestempelt und nachträglich gemeldet werden. Eine B2B-Rechnung erreicht den Kunden erst nach der Freigabe durch ZATCA. Die Clearance gehört deshalb in den Rechnungsablauf selbst, nicht in einen nächtlichen Batch.

## Wer integrieren muss und bis wann

Phase 2 begann am 1. Januar 2023 und wird in Wellen nach umsatzsteuerpflichtigem Umsatz eingeführt. ZATCA kündigt jede Welle mindestens sechs Monate vor ihrem Termin an. Die jüngste, Welle 25, betrifft Unternehmen, deren umsatzsteuerpflichtiger Umsatz in einem der Jahre 2022 bis 2025 über 187.500 SAR lag. Sie müssen bis zum 1. Februar 2027 an FATOORA angebunden sein. Details finden Sie in [ZATCA Welle 25: wer bis zum 1. Februar 2027 integrieren muss](/blog/zatca-wave-25-e-invoicing).

| Welle | Umsatzsteuerpflichtiger Umsatz über | Integration bis |
|---|---|---|
| 22 | 1 Mio. SAR | 31. Dezember 2025 |
| 23 | 750.000 SAR | 1. Januar bis 31. März 2026 |
| 24 | 375.000 SAR | 30. Juni 2026 |
| 25 | 187.500 SAR | 1. Februar 2027 |

Fiel Ihr Unternehmen in eine frühere Welle, ist Ihre Frist bereits verstrichen, und die folgenden Arbeiten sind überfällig, nicht bevorstehend.

## Drei Wege für ein bestehendes System

ZATCA zertifiziert keine Software. Ihr Verzeichnis der Lösungsanbieter ist ausdrücklich eine rechtlich nicht bindende Orientierungsliste und keine Genehmigung durch ZATCA. Steuerpflichtige dürfen jede Lösung nutzen, die die Anforderungen erfüllt. Damit haben Sie eine technische Entscheidung vor sich, keine Einkaufsentscheidung.

| Weg | Wann er passt | Worauf Sie achten sollten |
|---|---|---|
| **Ersetzen** durch ein Paket, das Phase 2 bereits abdeckt | Das bestehende System hat keine API, niemanden, der es pflegt, oder müsste ohnehin neu geschrieben werden | Datenmigration, Schulung und der Verlust der eigenen Abläufe, für die das System gebaut wurde |
| **Middleware**: Ein separater Dienst übernimmt die Rechnungsdaten aus Ihrem System, erzeugt das XML, stempelt es und kommuniziert mit ZATCA | Ihr System funktioniert und kann jeden Verkauf zuverlässig exportieren, aber sein Code ist schwer änderbar | Die Middleware wird Teil Ihrer Rechnungsstellung. Fällt sie aus, stehen B2B-Rechnungen still. Regeln, die Ihr System verletzt, etwa das Ändern ausgestellter Rechnungen, kann sie nicht beheben |
| **Anbindung einbauen**: Ihr eigenes System erzeugt, stempelt, übermittelt und archiviert jede Rechnung | Sie besitzen den Quellcode und haben Entwickler oder können welche beauftragen | Mehr Aufwand zu Beginn, dafür wird jede Regel dort durchgesetzt, wo die Rechnung entsteht |

Middleware wird oft als schnelle Lösung verkauft. Schnell ist sie nur, wenn das System dahinter sich bereits so verhält, wie Phase 2 es erwartet. Können Kassierer einen abgeschlossenen Verkauf noch ändern, übermittelt eine vorgeschaltete Anbindung getreu fehlerhafte Daten. Die allgemeinen Abwägungen finden Sie unter [Individualsoftware oder Standardsoftware](/blog/custom-software-vs-off-the-shelf-how-to-choose). Bei Phase 2 entscheidet meist die Frage, ob Sie den Code kontrollieren.

## Was die Anbindung tatsächlich leistet

Welchen Weg Sie auch wählen: Dieselben Aufgaben müssen irgendwo erledigt werden.

### Onboarding jeder Rechnungseinheit

ZATCA nennt das, was Rechnungen ausstellt, eine E-Invoice Generation Solution (EGS). Jede EGS-Einheit wird im FATOORA-Portal eingebunden. Das Portal stellt ihren Cryptographic Stamp Identifier (CSID) aus, und dort wird eine CSID auch erneuert oder widerrufen.

Legen Sie daher früh fest, wo Rechnungen erzeugt werden: an jeder Kasse oder auf einem zentralen Server, den die Kassen aufrufen. Was Rechnungen erzeugt und stempelt, binden Sie ein, erneuern Sie und überwachen Sie. Eine spätere Änderung ist teuer, also klären Sie das vor dem Bau.

### Das XML erzeugen

Rechnungen der Phase 2 sind XML-Dateien in der Struktur UBL 2.1, mit Prüfregeln auf Basis der europäischen Norm EN 16931. Sie werden als XML oder als PDF/A-3 mit eingebettetem XML erzeugt, aber alles, was an ZATCA geht, muss XML über eine API sein. Hier tun sich ältere Systeme schwer: Das XML braucht Angaben, die eine Kassenmaske nie abgefragt hat, etwa die steuerliche Behandlung jeder Position und bei Steuerrechnungen die Angaben zum Käufer.

### Stempel, QR-Code und Hash-Kette

Jede Rechnung trägt eine 128-Bit-UUID und den Hash der vorherigen Rechnung. Die Hashes verbinden alle Rechnungen einer EGS-Einheit zu einer einzigen Kette, sodass ihre Reihenfolge später nicht mehr geändert werden kann, und der Rechnungszähler lässt sich nicht zurücksetzen. Bei vereinfachten Rechnungen bringt Ihr System den kryptografischen Stempel selbst an und erzeugt den QR-Code, kodiert als TLV in Base64. Bei Steuerrechnungen übernimmt ZATCA beides während der Clearance, und Ihr System verwendet das freigegebene XML, das es zurückerhält.

### Übermitteln, archivieren, abgleichen

Die Anbindung sendet Steuerrechnungen zur Clearance und vereinfachte Rechnungen zur Meldung und speichert die Antwort von ZATCA beim jeweiligen Verkauf. Ein abgelehntes Dokument sollte noch am selben Tag jemandem auffallen, nicht erst bei der nächsten Prüfung. Jede Rechnung, jede Antwort und jeder Versuch wird aufbewahrt, damit sie später abrufbar sind.

Die Technik dahinter, von Webhooks bis zu Wiederholungswarteschlangen, ist dieselbe Art Arbeit wie in [Die Systeme verbinden, die Sie bereits nutzen](/blog/api-integration-connecting-business-systems).

## Die Regeln, an denen ältere Kassensysteme scheitern

Das XML ist der sichtbare Teil der Arbeit. Die Regeln gegen Manipulation sind der Teil, der Änderungen im Inneren des Systems erzwingt:

- **Kein Ändern oder Löschen gespeicherter Rechnungen.** Ein Fehler wird mit einer Gutschrift oder Belastungsanzeige korrigiert, nicht durch Änderung des Originals. Die im November 2021 veröffentlichten Bußgelder von ZATCA nennen 10.000 SAR für das Löschen oder Ändern einer E-Rechnung nach der Ausstellung.
- **Kein Ändern des Systemdatums.** Benutzer dürfen kein anderes Datum auf Rechnungen setzen können.
- **Kein Zurücksetzen des Rechnungszählers.** Die Nummerierung läuft weiter, ohne neu zu beginnen.
- **Protokolle mit Zeitstempel.** Aktivitäten werden mit Zeitstempel protokolliert, und Manipulationsversuche müssen erkennbar sein.

Viele Kassenprogramme haben eine „Storno“-Taste, eine Manager-Freigabe nach dem Druck oder eine Möglichkeit, die Nummerierung neu zu starten. All das muss entfallen oder als Gutschriftsablauf neu gebaut werden.

Auch die Sprache ist eine Regel. Die lesbare Rechnung muss auf Arabisch sein, weitere Sprachen dürfen ergänzt werden. Arabische und hindische Ziffern gelten beide als arabisch.

## Wenn Internet oder FATOORA ausfallen

Phase 2 setzt eine Verbindung voraus, und Ihr Design muss deren Ausfall einplanen. Bei vereinfachten Rechnungen verschafft die 24-Stunden-Meldefrist Spielraum: Das Geschäft verkauft weiter, gestempelte Rechnungen warten in einer Warteschlange auf dem Gerät oder Server, und das System versucht es so lange, bis FATOORA jede bestätigt. Steuerrechnungen sind schwieriger, weil sie vor der Übergabe an den Käufer freigegeben sein müssen. Die ausführlichen Leitlinien von ZATCA beschreiben, was zu tun ist, wenn ihre oder Ihre Systeme nicht verfügbar sind. Bauen Sie Ihr Ausweichverfahren auf diesem Dokument auf. Das Nichtmelden einer Störung steht ebenfalls auf ZATCAs veröffentlichter Bußgeldliste, zunächst mit einer Verwarnung.

Technisch bedeutet das: eine dauerhafte Warteschlange, die einen Neustart übersteht, gestaffelte Wiederholungen, eine Warnung deutlich bevor eine Rechnung die 24-Stunden-Grenze erreicht, und ein Protokoll jedes Versuchs.

## Checkliste vor Ihrer Frist

1. Bestätigen Sie Ihre Welle und Ihren Termin anhand der Mitteilung von ZATCA, nicht anhand von Anbieterwerbung.
2. Erfassen Sie jede Stelle, die Rechnungen ausstellt: jede Kasse, das ERP, den Onlineshop, die Lieferdienst-Anbindung und jeden manuellen Rechnungsblock.
3. Prüfen Sie Ihre Daten: Umsatzsteuernummern von Verkäufer und Käufer, Käuferangaben für Steuerrechnungen, die steuerliche Behandlung jedes Artikels und arabische Artikelbezeichnungen.
4. Wählen Sie Ihren Weg (Ersetzen, Middleware oder eingebaut) danach, wer den Code kontrolliert.
5. Ersetzen Sie Änderungs-, Storno- und Löschfunktionen durch Gutschriften und Belastungsanzeigen.
6. Sperren Sie Systemdatum und Rechnungszähler und machen Sie Manipulationen an Protokollen erkennbar.
7. Bauen Sie Warteschlange, Wiederholungen und Warnungen für die Meldung binnen 24 Stunden.
8. Testen Sie jede Dokumentart mit dem Testwerkzeug von ZATCA, auch Gutschriften und Offline-Verkäufe.
9. Binden Sie jede EGS-Einheit in FATOORA ein und notieren Sie, wann jede CSID erneuert werden muss.
10. Schulen Sie Kassierer und Buchhaltung zu den Änderungen: Korrekturen, der gedruckte QR-Code und das Vorgehen ohne Verbindung.

KF Tech Solutions entwickelt Kassen-, ERP- und andere [Unternehmenssysteme](/services/business-systems), und wir arbeiten mit Unternehmen in Ägypten und am Golf ([unsere Seite für saudische Unternehmen](/saudi-arabia)). Unsere nächstliegende Erfahrung stammt aus Ägypten: Wir haben ein Kassensystem an das E-Receipt-System der ägyptischen Steuerbehörde angebunden ([was diese Art von Arbeit umfasst](/blog/eta-e-invoicing-pos-integration)). Die Regeln von ZATCA sind andere, aber die Technik ist ähnlich: strukturierte Dokumente, Signaturen, Nummernfolgen, Warteschlangen und Abgleich. Wir beginnen mit einer Prüfung Ihres heutigen Systems, empfehlen dann Ersetzen, Anbinden oder Einbauen und begründen die Empfehlung.

## Häufige Fragen

### Braucht jede Kasse eine eigene CSID?

Jede EGS-Einheit wird eingebunden und erhält ihre eigene CSID und ihre eigene Hash-Kette. Ob eine Einheit jede Kasse oder ein zentraler Server ist, hängt davon ab, wo Ihre Rechnungen erzeugt und gestempelt werden. Klären Sie dieses Design vor dem Bau und prüfen Sie es anhand der Leitlinien von ZATCA.

### Sollten wir stattdessen ein System aus dem ZATCA-Verzeichnis kaufen?

ZATCA zertifiziert keine Software. Ihr Verzeichnis der Lösungsanbieter ist eine nicht bindende Orientierungsliste, keine Genehmigung. Entscheidend ist, ob das System Onboarding, Clearance, Meldung und die Regeln gegen Manipulation tatsächlich umsetzt.

### Kann eine freigegebene Rechnung korrigiert werden?

Nicht durch Bearbeiten. Gespeicherte Rechnungen dürfen weder geändert noch gelöscht werden. Sie stellen stattdessen eine Gutschrift oder Belastungsanzeige aus, die wie das Original freigegeben oder gemeldet wird.

### Unser Kassensystem druckt Belege auf Englisch. Ist das ein Problem?

Ja. Die lesbare Rechnung muss auf Arabisch sein, Englisch darf daneben stehen. Planen Sie arabische Artikelnamen, arabische Beschriftungen und ein Belegformat für beide Sprachen, und testen Sie den Ausdruck auf den Druckern, die Sie tatsächlich verwenden.

### Welche Bußgelder drohen, wenn unser System Fehler macht?

Die am 16. November 2021 veröffentlichten Bußgelder von ZATCA nennen 5.000 SAR für das Nichtausstellen von E-Rechnungen und 10.000 SAR für das Löschen oder Ändern nach der Ausstellung. Manche Verstöße, etwa ein fehlender QR-Code, beginnen mit einer Verwarnung. Mehr dazu in [Bußgelder bei der ZATCA-E-Rechnung](/blog/zatca-e-invoicing-penalties).

Unsicher, welcher Weg zu Ihrem System passt? [Buchen Sie ein kostenloses Gespräch](/book), und wir sehen uns an, was Sie heute nutzen, bevor jemand Code schreibt.

## Quellen

- [ZATCA: Welle 25 der E-Invoicing-Integration (angekündigt am 24. Juli 2026)](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Ankündigung der Welle 24](https://zatca.gov.sa/en/Pages/news-1426.aspx)
- [ZATCA: Ankündigung der Welle 22](https://zatca.gov.sa/en/MediaCenter/News/Pages/e-invoicing-wave-22-2025.aspx)
- [EY: Saudi-Arabien kündigt die 23. Welle der Phase-2-Integration an](https://www.ey.com/en_gl/technical/tax-alerts/saudi-arabia-announces-23rd-wave-of-phase-2-e-invoicing-integration)
- [ZATCA: Einführungsphasen der E-Rechnung](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: Was ist E-Invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Ausführliche Leitlinien zur E-Rechnung, Version 2 (Mai 2023)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: XML-Implementierungsstandard für E-Rechnungen, Version 1.2 (Mai 2023)](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA: Verzeichnis der Lösungsanbieter](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA: Verstöße und Bußgelder bei der E-Rechnung (16. November 2021)](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
