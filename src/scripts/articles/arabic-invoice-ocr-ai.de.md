---
title: Arabische Rechnungen und Belege mit KI auslesen
summary: Wie OCR und KI Lieferant, Mehrwertsteuer und Summen aus arabischen Rechnungen auslesen, wie Sie jede Zahl prüfen und wie die Daten in die Buchhaltung gelangen.
tags: KI, OCR, arabische Rechnungen, Datenextraktion, Buchhaltung, GCC, Ägypten
alt: Eine Hand füllt mit einem Füller ein Papierformular aus, daneben ein Taschenrechner und Geldscheine
caption: Jede Papierrechnung muss jemand abtippen, es sei denn, eine Software liest sie und prüft zuerst die Summen.
stats: 3|Summen, die auf jeder Rechnung stimmen müssen: Positionen, Steuer, Gesamtbetrag; 15%|Regelsteuersatz in Saudi-Arabien, eine nützliche Gegenprüfung; 0|Rechnungen, die nach einer fehlgeschlagenen Prüfung in die Bücher gelangen sollten
---

Ja, KI kann arabische Rechnungen und Belege zuverlässig genug für den
Arbeitsalltag lesen, allerdings nicht als einzelne Schaltfläche „Scannen und
fertig“. Es funktioniert als Ablauf: OCR wandelt das Bild in Text um, ein
KI-Modell füllt die Felder, einfache Rechenprüfungen kontrollieren Summen und
Mehrwertsteuer, und ein Mitarbeiter prüft alles, was durchfällt, bevor etwas in
Ihre Buchhaltung gelangt.

Sauber gedruckte Rechnungen laufen meist ohne Probleme durch. Verblasste
Thermobelege, schiefe Handyfotos und Handschrift sind die Stellen, an denen
Fehler entstehen.

## OCR und KI-Extraktion sind zwei verschiedene Aufgaben

**OCR** (optische Zeichenerkennung) wandelt ein Bild oder PDF in Text um. Sie
weiß nicht, welche Zahl der Gesamtbetrag ist und welche eine Telefonnummer.

**KI-Extraktion** liest diesen Text, oft zusammen mit dem Seitenlayout, und
liefert strukturierte Felder: Lieferant, Rechnungsnummer, Datum, Positionen,
Nettobetrag, Mehrwertsteuer und Gesamtbetrag. Viele Werkzeuge erledigen beides in
einem Schritt, doch wenn etwas schiefgeht, unterscheiden sich die Korrekturen.

Arabische Dokumente bringen eigene Schwierigkeiten mit:

- **Verbundene Buchstaben und Zeilen von rechts nach links**, oft mit Arabisch und Englisch in derselben Zeile.
- **Zwei Ziffernsysteme.** Manche Rechnungen drucken arabisch-indische Ziffern (٠١٢٣), andere westliche Ziffern, manche beides.
- **Dezimal- und Tausendertrennzeichen**, die sich je nach Lieferant unterscheiden, darunter das arabische Dezimalzeichen (٫).
- **Hidschri- und gregorianische Daten**, manchmal beide auf einer Rechnung.
- **Derselbe Lieferant in mehreren Schreibweisen**, mit oder ohne „شركة“ oder „مؤسسة“ am Anfang.

## Der Ablauf Schritt für Schritt

1. **Erfassen.** Rechnungen kommen als PDF per E-Mail, als Foto über WhatsApp oder als Scan vom Bürokopierer.
2. **Bild aufbereiten.** Vor dem Lesen begradigen, zuschneiden und den Kontrast verbessern, besonders bei Handyfotos.
3. **Lesen und extrahieren.** OCR und ein KI-Modell liefern die Felder mit einem Konfidenzwert für jedes Feld.
4. **Validieren.** Rechen- und Geschäftsregeln prüfen das Ergebnis (siehe unten).
5. **Prüfen.** Alles, was eine Regel verletzt oder eine niedrige Konfidenz hat, geht an einen Menschen.
6. **Exportieren.** Freigegebene Rechnungen werden als Entwurf in Ihre Buchhaltung oder Ihr ERP gebucht, mit dem Originalbild als Anhang.

### Was ausgelesen wird und wo es schiefgeht

| Feld | Warum es wichtig ist | Typisches Problem bei arabischen Dokumenten |
|---|---|---|
| Name des Lieferanten | Abgleich mit Ihrer Lieferantenliste | Dieselbe Firma unterschiedlich geschrieben |
| Steuernummer | Abgleich des Lieferanten und Vorsteuerabzug | Arabisch-indische Ziffern falsch gelesen |
| Rechnungsnummer und Datum | Dubletten und die richtige Periode | Hidschri-Daten, Tag und Monat vertauscht |
| Positionen | Kosten, Lager und Bestellungen | Beschreibungen über mehrere Zeilen in zwei Sprachen |
| Nettobetrag, Steuer, Gesamtbetrag | Die Beträge, die Sie buchen | Trennzeichen als Ziffern gelesen |
| Währung | Richtige Buchung und Umrechnung | ر.س, SAR, ج.م und $ in ähnlichen Layouts |

## Jede Zahl prüfen, bevor man ihr vertraut

KI-Extraktion kann eine falsche Zahl mit hoher Sicherheit liefern. Einfache
Rechenprüfungen fangen die meisten dieser Fehler ganz ohne KI ab:

- **Jede Position:** Menge × Einzelpreis = Positionsbetrag.
- **Die Positionen:** Die Positionsbeträge ergeben zusammen den Nettobetrag.
- **Die Rechnung:** Nettobetrag + Steuer = Gesamtbetrag.
- **Der Satz:** Steuer geteilt durch Nettobetrag sollte dem geltenden Satz entsprechen. Der Regelsatz beträgt 15 % in Saudi-Arabien und 5 % in den VAE; nullbesteuerte und steuerfreie Positionen brauchen eine eigene Regel.
- **Bruttopreise:** Bei einem Preis in den VAE, der 5 % Mehrwertsteuer bereits enthält, ist der Steueranteil der Preis geteilt durch 21, wie der Leitfaden der Federal Tax Authority erklärt.
- **Dubletten:** Derselbe Lieferant mit derselben Rechnungsnummer darf nie zweimal gebucht werden.
- **Der Lieferant:** Die Steuernummer muss zu einem bekannten Lieferanten passen.

Vereinfachte Steuerrechnungen in Saudi-Arabien tragen einen QR-Code, der laut
ZATCA den Namen des Verkäufers, seine Umsatzsteuer-Registrierungsnummer, den
Zeitstempel der Rechnung, den Gesamtbetrag inklusive Steuer und den Steuerbetrag
enthält. Den QR-Code zuerst zu lesen und mit dem OCR-Ergebnis zu vergleichen, ist
eine starke Prüfung. Kann ein Lieferant die strukturierte E-Rechnungsdatei statt
eines PDFs senden, nutzen Sie diese und verzichten Sie bei diesen Rechnungen ganz
auf OCR.

Dies sind allgemeine Informationen, keine Steuerberatung. Ihr Steuerberater
sollte bestätigen, welche Sätze und Regeln für Ihre Einkäufe gelten.

## Die Prüfwarteschlange für Menschen

In der Prüfwarteschlange gewinnt das System das Vertrauen Ihres Teams. Eine gute
Warteschlange:

- Zeigt das Rechnungsbild neben den ausgelesenen Feldern und hebt das zweifelhafte Feld hervor.
- Erklärt, warum die Rechnung dort liegt, etwa „Steuer entspricht nicht 15 %“ oder „mögliche Dublette“.
- Erlaubt die Korrektur eines Feldes mit einem Klick und protokolliert, wer was geändert hat.
- Hält fehlgeschlagene Rechnungen aus der Buchhaltung heraus, bis jemand sie freigibt.

Fällt derselbe Lieferant jede Woche durch, ergänzen Sie eine Regel für diesen
Lieferanten, statt ihn dauerhaft von Hand zu korrigieren.

## Genauigkeit ehrlich messen

Eine einzelne Angabe wie „98 % Genauigkeit“ eines Anbieters sagt wenig aus.
Stellen Sie einen Testsatz aus echten Rechnungen Ihrer eigenen Lieferanten
zusammen, einschließlich der schlechten Fotos, und messen Sie:

- **Feldgenauigkeit** bei den Feldern, die Sie buchen: Lieferant, Datum, Rechnungsnummer, Steuer und Gesamtbetrag.
- **Dunkelverarbeitungsquote:** den Anteil der Rechnungen, die jede Prüfung ohne Korrektur bestehen.
- **Prüfzeit** pro Rechnung, die einen Menschen braucht.
- **Durchgerutschte Fehler:** alles Falsche, das die Buchhaltung erreicht hat, was null sein sollte.

Messen Sie erneut, wenn Sie Lieferanten hinzufügen oder das Modell wechseln.
Genauigkeit ist eine Eigenschaft Ihrer Dokumente, nicht nur der Software.

## Die Ergebnisse in Buchhaltung oder ERP übernehmen

Die Extraktion nützt nur, wenn die Daten am richtigen Ort ankommen. Ordnen Sie
jeden Lieferanten seinem Stammsatz und jede Position einem Konto oder Artikel zu,
und buchen Sie Rechnungen als Entwurf, damit die Finanzabteilung das letzte Wort
behält. Die Verbindung läuft meist über die API des Buchhaltungssystems oder eine
geplante Importdatei; unser Leitfaden zum
[Verbinden der Systeme, die Sie bereits nutzen](/blog/api-integration-connecting-business-systems)
erklärt die Möglichkeiten. Wo Sie mit Bestellungen arbeiten, gleichen Sie die
Rechnung vor der Zahlungsfreigabe mit Bestellung und Wareneingang ab.

Rechnungen enthalten zudem Steuernummern und Bankverbindungen. Fragen Sie vor der
Wahl eines Werkzeugs, wo die Dokumente verarbeitet werden, wie lange sie
gespeichert bleiben und wer sie einsehen kann.

## Was KF Tech Solutions hier leistet

Wir entwickeln [KI-Lösungen](/services/ai-solutions) und die individuelle
Software rund um sie: Pipelines zur Dokumentenextraktion mit Prüfregeln, eine
Prüfansicht in einem Web-Dashboard und die Integration, die freigegebene
Rechnungen in Ihre Buchhaltung oder Ihr ERP bucht. Wir arbeiten mit Unternehmen
in Ägypten und am Golf. Wenn das Thema neu für Sie ist, beginnen Sie mit
[einem praktischen Leitfaden zum Einsatz von KI im Unternehmen](/blog/a-practical-guide-to-adding-ai-to-your-business)
oder sehen Sie, wie derselbe Ansatz es Ihrem Team ermöglicht,
[einem KI-Assistenten Fragen zu Ihren eigenen Dokumenten zu stellen](/blog/ai-assistant-own-documents).

## Häufige Fragen

### Kann KI handschriftliche arabische Rechnungen lesen?

Manchmal, aber nicht zuverlässig genug, um ohne Prüfung zu buchen. Behandeln Sie
handschriftliche Rechnungen als „immer prüfen“ und messen Sie sie getrennt.

### Brauchen wir weiterhin jemanden aus der Finanzabteilung zur Kontrolle?

Ja, für alles, was eine Prüfung nicht besteht. Ziel ist, dass Menschen die
Ausnahmen prüfen, nicht jede Rechnung.

### Unsere Lieferanten schicken Fotos über WhatsApp. Funktioniert das?

Meistens, wenn das Foto scharf ist und die ganze Rechnung im Bild ist. Die
Bildaufbereitung hilft, eine kurze Anleitung für Lieferanten hilft noch mehr.

### Ab wie vielen Rechnungen lohnt sich das?

Es gibt keine feste Zahl. Vergleichen Sie die Stunden, die Ihr Team monatlich mit
dem Abtippen von Rechnungen verbringt, mit den Kosten für Aufbau und Betrieb des
Ablaufs.

Wenn Sie sehen möchten, wie das mit Ihren eigenen Rechnungen funktioniert,
[buchen Sie ein kostenloses Gespräch](/book) oder
[senden Sie uns einige Beispiele](/contact), und wir sagen Ihnen, was sich
automatisieren lässt.

## Quellen

- [ZATCA: Detailed Guidelines for E-Invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Guideline for Tax Invoicing and Records under VAT Provisions](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-for-Tax-Invoicing-and-Records-under-VAT-Provisions.pdf)
- [Federal Tax Authority (VAE): VAT](https://tax.gov.ae/en/taxes/vat.aspx)
- [Federal Tax Authority (VAE): Taxable Person Guide for VAT](https://tax.gov.ae/-/media/Files/EN/PDF/Guides/Taxable-Person-Guide-June-2018.pdf)
