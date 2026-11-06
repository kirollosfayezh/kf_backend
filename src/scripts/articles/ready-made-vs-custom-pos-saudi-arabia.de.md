---
title: Kassensystem in Saudi-Arabien: fertige Lösung oder Eigenentwicklung?
summary: Wer trägt ZATCA Phase 2, wie Kartenterminals angebunden werden, arabische Rechnungen und Filialbestand: die saudischen Kriterien für die Kassenwahl.
tags: Kassensystem, POS, ZATCA, E-Rechnung, Einzelhandel, Saudi-Arabien
alt: Hände tippen auf ein weißes Tablet an einer Ladentheke, dahinter eine Glasvitrine
caption: Welches Kassensystem auch auf der Theke steht: Jemand trägt die Phase-2-Pflichten, der Anbieter oder Sie.
stats: 1. Feb. 2027|Frist für Welle 25 zur Anbindung an FATOORA; 24 Std.|zur Meldung jeder vereinfachten Rechnung (B2C); 1|Hash-Kette pro Einheit, nie zurückgesetzt
---

Für die meisten Geschäfte und Restaurants in Saudi-Arabien ist ein fertiges Kassensystem (SaaS) der richtige Einstieg, sofern es für Ihren Betrieb bereits E-Rechnungen nach Phase 2 ausstellt, mit den Kartenterminals Ihrer Bank zusammenarbeitet und eine saubere arabische Rechnung druckt. Eine Eigenentwicklung lohnt sich, wenn Ihre Abläufe, Ihre Filialstruktur oder Ihre Schnittstellen in kein Paket passen, und der Mittelweg, also die SaaS-Kasse zu behalten und nur die fehlenden Teile zu entwickeln, ist oft die günstigste der drei Varianten. Wofür Sie sich auch entscheiden: Die Pflicht zur E-Rechnung bleibt bei Ihrem Unternehmen, nicht beim Softwareanbieter.

Zuletzt geprüft: 6. November 2026

Dieser Artikel behandelt nur die Faktoren, die speziell für Saudi-Arabien gelten. Den allgemeinen Rahmen (Funktionen, Verträge und Gesamtkosten über die Zeit) finden Sie in [Fertiges oder eigenes Kassensystem: so entscheiden Gastronomen](/blog/ready-made-vs-custom-pos-restaurants). Das meiste davon gilt auch für den Einzelhandel.

## E-Rechnung Phase 2: Die Pflicht bleibt bei Ihnen

Die E-Rechnungsregeln der ZATCA (Zakat-, Steuer- und Zollbehörde) gelten für in Saudi-Arabien ansässige Mehrwertsteuerpflichtige sowie für Dritte, die in deren Auftrag Rechnungen ausstellen. Phase 1 (elektronische Erstellung von Rechnungen) gilt seit dem 4. Dezember 2021; eine eingescannte oder kopierte Papierrechnung zählt nicht. Phase 2 (Anbindung an die ZATCA-Plattform FATOORA) begann am 1. Januar 2023 und erfasst Unternehmen in Wellen. Welle 25 betrifft Unternehmen mit mehrwertsteuerpflichtigem Umsatz über 187.500 SAR in einem beliebigen Jahr von 2022 bis 2025; sie müssen bis zum 1. Februar 2027 angebunden sein. Die ZATCA kündigt jede Welle mindestens sechs Monate im Voraus an. Verfolgen Sie daher ihre Nachrichtenseite statt der Zusammenfassung eines Anbieters.

In Phase 2 muss die Kasse echte technische Arbeit leisten:

- Jede Rechnung als UBL-2.1-XML erzeugen und über eine API an die ZATCA senden.
- Vereinfachte Rechnungen (meist B2C) mit dem kryptografischen Stempel versehen, den QR-Code der Phase 2 ergänzen und das XML innerhalb von 24 Stunden melden.
- Steuerrechnungen (meist B2B) vor der Übergabe an den Käufer zur Freigabe (Clearance) senden, einschließlich der zugehörigen Gut- und Lastschriften.
- Jeder Rechnung eine UUID und den Hash der vorherigen Rechnung geben und verhindern, dass Benutzer das Systemdatum ändern oder gespeicherte Rechnungen bearbeiten.

Jede Rechnungseinheit, von der ZATCA „E-Invoice Generation Solution“ (EGS) genannt, wird im FATOORA-Portal registriert, und das Portal stellt ihren Cryptographic Stamp Identifier (CSID) aus. Die ZATCA zertifiziert keine Software. Ihr Verzeichnis der Lösungsanbieter ist eine Orientierungsliste und gilt nach eigenen Worten der Behörde nicht als Genehmigung. Ein Siegel auf der Website eines Anbieters beweist daher nichts. Lassen Sie sich eine Registrierung auf einem Testkonto, eine freigegebene B2B-Rechnung und eine gemeldete B2C-Rechnung zeigen.

Bei einer fertigen Kasse entwickelt und pflegt der Anbieter diese Regeln, und das ist ein echter Vorteil. Bei einer Eigenentwicklung tragen Sie sie über Ihren Entwickler, solange Sie das System nutzen. In beiden Fällen treffen Bußgelder das Unternehmen. Der von der ZATCA veröffentlichte Katalog (16. November 2021) nennt 5.000 SAR für das Nichtausstellen von E-Rechnungen und 10.000 SAR für das Löschen oder Ändern einer Rechnung nach der Ausstellung. Dies sind allgemeine Informationen und keine Steuerberatung; klären Sie Ihre Welle und Ihre Pflichten mit Ihrem Steuerberater. Die technischen Details finden Sie in unserem Leitfaden zur [Anbindung einer eigenen Kasse oder eines ERP an ZATCA Phase 2](/blog/zatca-phase-2-integration-custom-pos-erp).

## Kartenzahlung: mada und Apple Pay kommen über Ihren Acquirer

mada, das nationale Debitnetz im Besitz der saudischen Zentralbank (SAMA), unterstützt kontaktloses Bezahlen sowie Apple Pay, mada Pay, Samsung Pay und Google Pay. Ihre Kunden erwarten, mit Karte oder Smartphone zu bezahlen. Das Kartenterminal stammt jedoch nicht vom Kassenanbieter, sondern von Ihrem Acquirer: der Bank oder dem lizenzierten Zahlungsdienstleister, der Kartenzahlungen auf Ihrem Konto gutschreibt.

Die eigentliche Frage lautet also, ob die Kasse mit dem Terminal kommuniziert, das Ihr Acquirer Ihnen stellt. Wenn ja, geht der Betrag von der Kasse an das Terminal, und das Ergebnis kommt zurück auf die Rechnung. Wenn nein, tippt der Kassierer den Betrag in ein eigenständiges Terminal, und jeder Tippfehler wird zu einer Differenz beim Tagesabschluss. Fragen Sie vor der Wahl einer Kasse, mit welchen Acquirern und Terminalmodellen sie verbunden ist, und stellen Sie Ihrer Bank dieselbe Frage von der anderen Seite.

Wenn Sie auch online verkaufen, ist das Zahlungsgateway eine eigene Entscheidung. Gateways wie Tap und PayTabs führen mada, Apple Pay, Tabby und Tamara unter ihren Zahlungsarten. Unser Vergleich der [Zahlungsgateways in Saudi-Arabien](/blog/payment-gateways-saudi-arabia) behandelt diese Wahl.

## Arabische Rechnungen und eine arabische Oberfläche

Die lesbare Rechnung muss auf Arabisch sein; weitere Sprachen dürfen ergänzt werden. Viele internationale Kassensysteme drucken eine übersetzte Rechnung, die gut aussieht, bis Sie lange Produktnamen, die Ausrichtung von rechts nach links auf einem schmalen 80-mm-Bon oder Arabisch und Englisch in einer Zeile prüfen. Drucken Sie vor der Unterschrift einen echten Bon aus der Demo, mit Ihren eigenen Produktnamen.

Der Kassenbildschirm ist ebenso wichtig wie der Bon. Wenn Ihr Personal auf Arabisch arbeitet, testen Sie den gesamten Ablauf auf Arabisch: Suche nach arabischem Produktnamen, eine Rückgabe, einen Schichtabschluss und den Tagesbericht. Eine halb übersetzte Oberfläche bremst jeden neuen Kassierer.

## Mehrere Filialen, ein Bestand

Beim Bestand über mehrere Filialen unterscheiden sich fertige Systeme am stärksten. Prüfen Sie, ob jede Filiale den Bestand der anderen sieht, ob eine Umlagerung zwischen Filialen ein Beleg mit Absender und Empfänger ist und ob sich ein Zentrallager überhaupt abbilden lässt. Fragen Sie, wie die E-Rechnung pro Filiale und pro Kasse funktioniert, denn die Hash-Kette läuft pro EGS-Einheit, und jede Einheit wird einzeln registriert.

Fragen Sie dann, was passiert, wenn in einer Filiale das Internet ausfällt. Der Verkauf sollte weiterlaufen, und gespeicherte Rechnungen sollten gemeldet werden, sobald die Verbindung zurück ist, innerhalb der 24-Stunden-Frist für vereinfachte Rechnungen. Wie Bestand typischerweise zwischen Lager und Kasse verloren geht, beschreibt [wohin Ihr Bestand wirklich verschwindet](/blog/inventory-management-system-egypt). Der Artikel ist für Ägypten geschrieben, doch die Bestandsprobleme sind in Riad oder Dschidda dieselben.

## Fertig oder Eigenentwicklung: der Vergleich

| Faktor | Fertige Kasse (SaaS) | Eigenentwicklung |
|---|---|---|
| E-Rechnung Phase 2 | Vom Anbieter entwickelt und gepflegt; Sie prüfen, ob es für Ihre Einrichtung funktioniert | Von Ihrem Entwickler gebaut; Sie zahlen Anpassungen, wenn die ZATCA ihre Spezifikationen ändert |
| Kartenterminals | Nur die vom Anbieter unterstützten Acquirer | Der Acquirer Ihrer Wahl, sofern er eine Anbindung anbietet |
| Arabische Rechnung und Bildschirme | Je nach Produkt unterschiedlich; mit eigenen Artikeln testen | Auf Ihre Bons und Ihr Personal zugeschnitten |
| Filialen und Lager | Feste Struktur; jede weitere Filiale erhöht meist das Abo | Abgebildet, wie Ihr Betrieb Ware tatsächlich bewegt |
| Laufende Kosten | Monatliches Abo pro Filiale oder Gerät | Hosting plus Wartungsvertrag |
| Zeit bis zum Start | Tage | Wochen bis Monate |
| Ihre Daten | Im System des Anbieters; Exportmöglichkeiten prüfen | In einer Datenbank unter Ihrer Kontrolle, Quellcode vertraglich an Sie übertragen |

### Der Mittelweg: SaaS behalten, nur die Lücken entwickeln

Viele saudische Unternehmen müssen ihre Kasse gar nicht ersetzen. Sie brauchen etwas, das sie nicht kann: einen Küchen- oder Produktionsablauf, ein Treueprogramm in der eigenen App, eine Großhandelspreisliste, Berichte über mehrere Gesellschaften hinweg oder einen Kanal für Online-Bestellungen. Hat die Kasse eine API oder einen zuverlässigen Datenexport, lassen sich diese Teile darum herum entwickeln, während der Anbieter weiterhin die Arbeit für Phase 2 trägt.

Eine vollständige Eigenentwicklung lohnt sich, wenn die Lücken im Verkauf selbst liegen, etwa ein Preismodell, ein Serviceablauf oder ein Gerät, das die SaaS-Kasse nicht abbildet, oder wenn die Abos über viele Filialen und Geräte mehr kosten als ein eigenes System. Unser Vergleich [Odoo oder eigenes ERP](/blog/odoo-vs-custom-erp-saudi-arabia) behandelt dieselbe Entscheidung eine Ebene höher.

Ein einfacher Test: Notieren Sie die fünf Dinge, die Ihr Personal wegen des aktuellen Systems auf Papier oder in einer Tabelle erledigt. Geschehen sie rund um den Verkauf, entwickeln Sie die Lücken. Sind sie der Verkauf selbst, erwägen Sie eine eigene Kasse.

## Fragen an jeden Kassenanbieter in Saudi-Arabien

1. Können Sie mir auf einem Testkonto eine Registrierung nach Phase 2, eine freigegebene Steuerrechnung und eine gemeldete vereinfachte Rechnung zeigen?
2. Wer registriert jede Kasse oder Filiale in FATOORA, und wer erneuert den CSID?
3. Mit welchen Acquirern und Terminalmodellen ist Ihr System verbunden?
4. Kann ich heute einen arabischen Probebon mit meinen eigenen Produktnamen drucken?
5. Wie funktionieren Umlagerungen zwischen Filialen, und was passiert, wenn eine Filiale offline ist?
6. Wie exportiere ich Verkäufe, Rechnungen und Bestand, wenn ich wechsle?

Für die alltäglichen Funktionen jeder Kasse (Barcodes, Rückgaben, Schichten und Kassenlade) gilt die Checkliste aus [So wählen Sie ein Kassensystem für Ihr Geschäft](/blog/pos-cashier-system-for-shops-egypt) auch in Saudi-Arabien.

## Was KF Tech Solutions dabei übernimmt

KF Tech Solutions entwickelt individuelle Kassen-, Lager- und Geschäftssysteme und hat eine Kasse an das ägyptische E-Beleg-System der ETA angebunden. Wir arbeiten mit Unternehmen in Ägypten und am Golf, aus der Ferne. Für ein saudisches Unternehmen können wir klären, ob eine SaaS-Kasse genügt, die fehlenden Teile darum herum entwickeln oder ein eigenes System nach den veröffentlichten Anforderungen der ZATCA für Phase 2 bauen, mit Übertragung des Quellcodes an Sie. Projekte beginnen bei 200 $ (etwa 750 SAR / 735 AED); der endgültige Preis hängt vom Umfang ab, mit einem festen schriftlichen Angebot nach einem kostenlosen Gespräch. Sehen Sie sich unseren [Service für Geschäftssysteme](/services/business-systems) an und [was wir Unternehmen in Saudi-Arabien bieten](/saudi-arabia).

## Häufige Fragen

### Erfüllt eine fertige Kasse automatisch ZATCA Phase 2?

Nein. Die ZATCA zertifiziert keine Software, und ihr Verzeichnis der Lösungsanbieter ist keine Genehmigung. Prüfen Sie, ob der Anbieter tatsächlich Einheiten registriert hat und ob Freigabe und Meldung für Ihre Rechnungsarten funktionieren. Die Pflicht bleibt bei Ihrem Unternehmen.

### Wann muss mein Unternehmen für Phase 2 angebunden sein?

Das hängt von Ihrer Welle ab. Die ZATCA wählt Unternehmen nach ihrem mehrwertsteuerpflichtigen Umsatz in Referenzjahren aus und kündigt jede Welle mindestens sechs Monate vorher an. Welle 25, für Umsätze über 187.500 SAR in einem beliebigen Jahr von 2022 bis 2025, muss bis zum 1. Februar 2027 angebunden sein.

### Funktioniert eine eigene Kasse mit mada und Apple Pay?

Ja, über das Terminal Ihres Acquirers, sofern dieser eine Anbindung dafür anbietet. Ohne sie arbeitet das Terminal eigenständig, und der Kassierer gibt den Betrag zweimal ein.

### Muss ich meine Kasse ersetzen, um Funktionen zu ergänzen?

In der Regel nicht. Hat sie eine API oder exportiert sie ihre Daten, lassen sich neue Funktionen darum herum entwickeln, und der Anbieter pflegt weiterhin die E-Rechnung.

### Muss die Rechnung auf Arabisch sein?

Ja. Die lesbare Rechnung muss auf Arabisch sein, und Sie dürfen Englisch oder eine andere Sprache ergänzen.

Unsicher, welcher Weg für Ihr Unternehmen passt? [Buchen Sie ein kostenloses Gespräch](/book) und bringen Sie einen Beispielbon und Ihre Filialliste mit, oder [schreiben Sie uns](/contact).

## Quellen

- [ZATCA: What is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: E-Invoicing Detailed Guideline (PDF)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Ankündigung Welle 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA: Verstöße und Bußgelder bei E-Rechnungen](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap Payments](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
