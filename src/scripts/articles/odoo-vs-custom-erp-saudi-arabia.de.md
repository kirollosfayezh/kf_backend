---
title: Odoo oder individuelles ERP in Saudi-Arabien: die echten Kosten
summary: Was Odoo pro Nutzer kostet, was Partner und Hosting hinzufügen, welche Rolle E-Invoicing Phase 2 spielt und wie Sie Odoo und Eigenbau über 3 Jahre vergleichen.
tags: Odoo, ERP, individuelles ERP, ERP-Preise, ZATCA, Saudi-Arabien
alt: Die Skyline von Riad bei Tag, ein spitzer Glasturm hinter niedrigen Bürogebäuden und Palmen
caption: Die Lizenz ist der kleinste Posten im ERP-Budget; vergleichen Sie Partnerkosten und Lokalisierung über drei Jahre.
stats: 11,20 US$|Odoo-Standard-Listenpreis pro Nutzer und Monat; 36|Monate vergleichen, nicht nur das erste Jahr; 24 Stunden|Frist für die Meldung einer B2C-Rechnung an FATOORA in Phase 2
---

Laut Odoos eigener Preisseite kostet der Standard-Tarif 11,20 US$ pro Nutzer und Monat und der Custom-Tarif 20,90 US$, mit einem Rabatt in den ersten 12 Monaten. Einführung, Anpassungen, Datenübernahme und einige Hosting-Optionen kosten extra. Ein individuelles ERP ist am Anfang teurer, hat aber keine Lizenzgebühr pro Nutzer. Was für ein Unternehmen in Saudi-Arabien günstiger ist, hängt daher von der Zahl der Nutzer ab, davon, wie stark Odoo angepasst werden müsste, und davon, ob Sie drei Jahre vergleichen oder nur das erste.

Zuletzt geprüft: 6. November 2026

## Was Odoo selbst verlangt

Dies sind die Zahlen auf Odoos Preisseite zum Zeitpunkt unserer Prüfung. Die Seite zeigte Preise in US-Dollar und bot jährliche und monatliche Abrechnung an. Prüfen Sie sie also selbst, bevor Sie budgetieren: Preise und Aktionen ändern sich.

| Tarif | Listenpreis pro Nutzer und Monat | Erste 12 Monate | Enthalten | Hosting |
|---|---|---|---|---|
| One App Free | 0 US$ | 0 US$ | Eine App, unbegrenzt viele Nutzer | Odoo Online |
| Standard | 11,20 US$ (etwa 42 SAR) | 8,95 US$ | Alle Apps | Odoo Online |
| Custom | 20,90 US$ (etwa 78 SAR) | 16,40 US$ | Alle Apps, dazu Odoo Studio, Multi-Company und die externe API | Odoo Online, Odoo.sh oder On-Premise |

Die SAR-Beträge beruhen auf dem offiziellen Wechselkurs von 3,75 Riyal pro US-Dollar. Drei Details auf der Seite sind für Ihr Budget wichtig:

- **Der Rabatt ist befristet.** Laut Odoos Fußnote gilt er 12 Monate lang und nur für die zu Beginn bestellten Nutzer. Ab Monat 13 und für später hinzugefügte Nutzer zahlen Sie den Listenpreis.
- **Anpassungen und Schnittstellen erfordern den Custom-Tarif.** Odoo Studio, Multi-Company und die externe API stehen nur unter Custom. Wenn Sie Odoo mit Ihrem Kassensystem, Onlineshop oder Ihrer Bank verbinden wollen, kalkulieren Sie mit Custom, nicht mit Standard.
- **Odoo.sh-Hosting kostet extra.** Der Custom-Tarif kann auf Odoo.sh laufen, laut Seite sind die Hosting-Kosten dafür aber nicht enthalten. On-Premise bedeutet, dass Sie einen eigenen Server bezahlen und betreiben.

Die Seite hält außerdem fest, dass Einführungsleistungen in keinem Tarif enthalten sind.

## Was die Lizenz nicht abdeckt

Die Lizenz ist in einem ERP-Projekt meist der kleinste Posten. Laut Odoos Seite arbeiten Unternehmen mit weniger als 50 Beschäftigten meist direkt mit Odoo über Success Packs, Unternehmen mit mehr als 50 meist mit einem Partner, der lokales Projektmanagement anbietet, und Unternehmen mit mehr als 250 sollten Odoo direkt kontaktieren. In jedem Fall liegen diese Kosten außerhalb der Lizenz:

- **Einführung:** Kontenplan, Lager, Preislisten, Steuern, Freigaberegeln und Benutzerrechte einrichten.
- **Datenübernahme:** Artikel, Kunden, Lieferanten, Eröffnungssalden und offene Rechnungen aus dem bisherigen System oder aus Tabellen.
- **Anpassungen:** Änderungen in Odoo Studio oder individuelle Module, die ein Entwickler schreibt.
- **Schnittstellen:** Verbindungen zu Kassensystem, Onlineshop, Liefer-Apps oder anderen Systemen über die externe API.
- **Schulung:** für jede Abteilung, nicht nur für eine Person.
- **Support nach dem Start:** wer Fehler behebt, wie schnell und zu welchem Satz.
- **Upgrades:** Jedes individuelle Modul muss beim Wechsel auf eine neue Odoo-Version geprüft und oft angepasst werden.

Wenn Sie einen Partner um ein Angebot bitten, verlangen Sie jeden dieser Punkte als eigene Position, mit Festpreis oder Anzahl der Tage, sowie eine schriftliche Liste dessen, was nicht enthalten ist. Fragen Sie auch, wem der Code individueller Module gehört, die für Sie geschrieben werden.

## E-Invoicing in Saudi-Arabien: fragen Sie nach dem Wie, statt es anzunehmen

Seit 2023 überführt die ZATCA mehrwertsteuerpflichtige Unternehmen in Wellen in Phase 2. Welle 25 umfasst Unternehmen mit steuerpflichtigem Umsatz über 187.500 SAR in einem der Jahre 2022 bis 2025 und muss bis zum 1. Februar 2027 an FATOORA angebunden sein. Da Rechnungen meist im ERP entstehen, gehört dieser Punkt in jeden Vergleich, egal welches System Sie wählen.

Die ZATCA zertifiziert keine Software. Ihr Verzeichnis der Lösungsanbieter ist eine Orientierungsliste und gilt nach Worten der ZATCA nicht als Genehmigung durch die Behörde. Ein Anbieter, der „konform“ sagt, verrät Ihnen also wenig. Lassen Sie sich vom Partner oder Entwickler in einer Testumgebung zeigen, wie das System Folgendes umsetzt:

- Jede Rechnungseinheit im FATOORA-Portal registrieren, ihren Cryptographic Stamp Identifier (CSID) speichern und klären, wer ihn erneuert.
- Rechnungen als UBL-2.1-XML erzeugen und über die API an die ZATCA senden.
- Steuerrechnungen (meist B2B) vor dem Versand an den Käufer von der ZATCA freigeben lassen, einschließlich Gut- und Lastschriften.
- Vereinfachte Rechnungen (meist B2C) innerhalb von 24 Stunden an FATOORA melden, mit dem QR-Code der Phase 2 auf dem Ausdruck.
- Jede Rechnung über UUID und Hashwert mit der vorherigen verketten und das Ändern oder Löschen gespeicherter Rechnungen verhindern.
- Die Rechnung auf Arabisch drucken.

Dies ist eine allgemeine Information, keine Steuerberatung. Die technischen Details finden Sie in unserem Leitfaden zur [ZATCA-Phase-2-Anbindung eines individuellen POS oder ERP](/blog/zatca-phase-2-integration-custom-pos-erp).

## Odoo oder Eigenbau: was zu Ihrem Unternehmen passt

Prüfen Sie vor dem Preisvergleich, ob Sie überhaupt ein ERP brauchen. Viele kleine Unternehmen brauchen zuerst eine gute Lager- und Rechnungsverwaltung. Unser Artikel darüber, [ob ein kleines Unternehmen ein ERP braucht](/blog/erp-for-small-business-egypt), geht dieser Frage nach.

### Wann Odoo besser passt

- Ihre Abläufe sind Standard: einkaufen, lagern, verkaufen, fakturieren, bezahlen.
- Ihr Team ist klein, und Sie möchten in Wochen statt Monaten starten.
- Sie sind bereit, einige Gewohnheiten an die Arbeitsweise von Odoo anzupassen.
- Sie wollen Buchhaltung, Lager, Verkauf und Einkauf an einem Ort, ohne vorab für eine Entwicklung zu zahlen.

### Wann ein individuelles ERP sinnvoller ist

- Ihre Arbeitsweise ist Ihr Vorteil, und Odoo müsste stark angepasst werden, um ihr zu folgen.
- Sie haben viele Nutzer, die jeweils nur eine eng begrenzte Aufgabe erledigen, sodass sich die Lizenzen pro Nutzer jeden Monat summieren.
- Sie nutzen bereits ein gut funktionierendes Kassen- oder Buchhaltungssystem und brauchen nur die fehlenden Teile.
- Sie wollen den Code besitzen und selbst entscheiden, wann er geändert oder aktualisiert wird.

Unser Artikel [Individualsoftware oder Standardsoftware](/blog/custom-software-vs-off-the-shelf-how-to-choose) behandelt diese Abwägung ausführlicher.

## Der Mittelweg: individuelle Module oder ein Connector

Die Wahl wird oft als „ganz Odoo“ oder „komplett individuelles ERP“ dargestellt, doch viele Unternehmen brauchen keines von beiden. Drei günstigere Optionen sind ein Angebot wert:

1. **Ein Connector.** Behalten Sie die Systeme, die funktionieren (Kassensystem, Onlineshop, Buchhaltungssoftware), und bauen Sie eine Verbindung, die Verkäufe, Bestände und Rechnungen automatisch zwischen ihnen überträgt. Das beseitigt doppelte Erfassung, ohne etwas zu ersetzen.
2. **Ein einzelnes individuelles Modul.** Wenn ein Ablauf in kein Standardsystem passt, etwa Projektkalkulation, Vermietung oder ein besonderer Freigabeprozess, entwickeln Sie nur diesen Teil und verbinden ihn mit dem Bestehenden.
3. **Ein fokussiertes Lager- oder Kassensystem.** Wenn Sie beim Lager Geld verlieren, fangen Sie dort an. Unser Leitfaden, [wohin der Bestand wirklich verschwindet](/blog/inventory-management-system-egypt), zeigt die üblichen Lecks, und [Fertiges oder individuelles Kassensystem in Saudi-Arabien](/blog/ready-made-vs-custom-pos-saudi-arabia) vergleicht die Kassenseite.

Ein Connector oder ein einzelnes Modul kostet meist nur einen Bruchteil eines vollständigen ERP-Projekts, und ein späterer Wechsel zu Odoo oder zu einem individuellen ERP bleibt möglich.

## So vergleichen Sie die Kosten über drei Jahre

Die meisten Fehlkäufe entstehen, wenn ein Jahr Lizenzgebühren mit dem vollen Preis einer Entwicklung verglichen wird. Setzen Sie beide Optionen in dieselbe Rechnung über 36 Monate.

Hier die reinen Odoo-Lizenzkosten zu den Preisen auf der Preisseite am 6. November 2026, unter der Annahme, dass sie gleich bleiben, alle Nutzer zu Beginn bestellt werden und der Rabatt im ersten Jahr gilt:

| Nutzer | Standard, 3 Jahre | Custom, 3 Jahre |
|---|---|---|
| 10 | 3.762 US$ (etwa 14.100 SAR) | 6.984 US$ (etwa 26.200 SAR) |
| 25 | 9.405 US$ (etwa 35.300 SAR) | 17.460 US$ (etwa 65.500 SAR) |

Die Rechnung für 10 Standard-Nutzer lautet 10 × 8,95 US$ × 12 Monate plus 10 × 11,20 US$ × 24 Monate. Dann kommen die Posten hinzu, die die Lizenz nicht abdeckt:

- **Seite Odoo:** Einführung, Datenübernahme, Anpassungen, Schnittstellen, Odoo.sh- oder Server-Hosting, falls genutzt, Schulung, Support und die Kosten für das Anpassen individueller Module bei jedem Upgrade.
- **Seite Eigenbau:** Entwicklung, Datenübernahme, Hosting, ein monatlicher Wartungs- und Supportplan und alle Änderungen, die Sie absehen können.

Vergleichen Sie die beiden Summen und fragen Sie dann, welche Option sich günstiger ändern lässt, wenn sich Ihr Geschäft ändert. Projekte beginnen bei 200 $ (etwa 750 SAR / 735 AED); der endgültige Preis hängt vom Umfang ab, mit einem schriftlichen Festpreisangebot nach einem kostenlosen Gespräch.

## Was KF Tech Solutions hier beiträgt

Wir entwickeln individuelle Unternehmenssysteme: ERP-Module, Kassen- und Lagersysteme sowie die Connectoren, die sie mit den Werkzeugen verbinden, die Sie behalten. In Ägypten haben wir ein Kassensystem an das [E-Receipt-System der Steuerbehörde ETA](/projects/egypt-eta) angebunden. Wir arbeiten mit Unternehmen in Ägypten und am Golf, und wenn ein Standardsystem wie Odoo besser zu Ihnen passt, sagen wir Ihnen das. Mehr dazu auf unserer Seite zu [Unternehmenssystemen](/services/business-systems) und auf unserer Seite für [Unternehmen in Saudi-Arabien](/saudi-arabia).

## Häufige Fragen

### Was kostet Odoo in Saudi-Arabien?

Bei unserer Prüfung am 6. November 2026 zeigte Odoos Preisseite Standard mit 11,20 US$ pro Nutzer und Monat (etwa 42 SAR) und Custom mit 20,90 US$ (etwa 78 SAR), mit niedrigeren Preisen in den ersten 12 Monaten. Einführung, Anpassungen und Odoo.sh-Hosting kommen hinzu, die Lizenz ist also nur ein Teil der Kosten.

### Gibt es eine kostenlose Version von Odoo?

Die Preisseite nennt One App Free: eine App mit unbegrenzt vielen Nutzern, gehostet auf Odoo Online. Sobald Sie eine zweite App brauchen, wechseln Sie in einen kostenpflichtigen Tarif.

### Funktioniert Odoo mit ZATCA Phase 2?

Die ZATCA zertifiziert oder genehmigt keine Software, verlassen Sie sich also auf kein Etikett. Lassen Sie sich vor der Unterschrift Registrierung, Freigabe, 24-Stunden-Meldung und die Hash-Kette der Rechnungen in einer Testumgebung vorführen. Dasselbe gilt für ein individuelles ERP.

### Ist ein individuelles ERP teurer als Odoo?

Am Anfang meist ja, weil Sie die Entwicklung bezahlen. Über drei Jahre kann sich der Abstand verringern oder umkehren, wenn Sie viele Nutzer haben, starke Anpassungen brauchen oder statt eines ganzen ERP ein Modul oder ein Connector genügt.

### Kann ich mit Odoo beginnen und später individuelle Teile ergänzen?

Ja. Der Custom-Tarif enthält Odoo Studio und die externe API, mit denen Sie Felder ergänzen und andere Systeme anbinden können. Halten Sie individuellen Code klein, denn jedes Stück muss bei jedem Odoo-Upgrade geprüft werden.

Sie sind unsicher, welcher Weg zu Ihrem Unternehmen passt? [Buchen Sie ein kostenloses Gespräch](/book) oder [schicken Sie uns Ihre aktuelle Systemlandschaft](/contact), und wir helfen Ihnen, die Optionen in einer Übersicht zu vergleichen.

## Quellen

- [Odoo: Preise](https://www.odoo.com/pricing)
- [ZATCA: Einführungsphasen der E-Rechnung](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: Ankündigung der Welle 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Detaillierter Leitfaden zur E-Rechnung](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Verzeichnis der Lösungsanbieter](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [SAMA: Wechselkurs des Saudi-Riyal](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx)
