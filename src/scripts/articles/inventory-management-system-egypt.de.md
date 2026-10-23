---
title: Warenwirtschaft in Ägypten: wo Ihr Lagerbestand wirklich bleibt
summary: Woran Sie merken, dass Excel nicht mehr reicht, was ein Warenwirtschaftssystem erfassen muss, Inventuren, die funktionieren, Meldebestände, Bewertung, die Anbindung an Kassensystem, Onlineshop und Buchhaltung, und wie Sie umstellen, ohne einen Monat zu verlieren.
---

Fragen Sie einen Inhaber, wie viel Ware er auf Lager hat, und Sie bekommen meist zwei
Antworten: was in der Excel-Tabelle steht und was tatsächlich im Lager liegt. Die
Lücke dazwischen ist Geld: verkaufte Artikel, die nie erfasst wurden, Umlagerungen
zwischen Filialen, die unvollständig ankamen, beschädigte Ware, die niemand
ausgebucht hat, und gelegentlich Diebstahl.

Ein Warenwirtschaftssystem schließt diese Lücke, indem es jede Bewegung erfasst,
sodass die Zahl auf dem Bildschirm der Zahl im Regal entspricht. Was dafür nötig ist,
lesen Sie hier.

## Woran Sie merken, dass Excel nicht mehr reicht

- **Tabelle und Regal stimmen nicht überein**, und niemand kann sagen, warum.
- **Sie merken erst, dass ein Artikel ausverkauft ist**, wenn ein Kunde danach fragt.
- **Filialen rufen sich gegenseitig an**, um zu fragen, wer noch Bestand hat.
- **Die monatliche Inventur dauert Tage**, und das Ergebnis wird stillschweigend
  ignoriert.
- **Niemand kennt die tatsächlichen Kosten** des Verkauften, also kennt auch niemand
  den tatsächlichen Gewinn.

Wenn Ihnen drei davon bekannt vorkommen, ist eine Tabellenkalkulation nicht mehr das
richtige Werkzeug.

## Jede Bewegung hat einen Beleg

Die Regel, mit der ein Warenwirtschaftssystem funktioniert, ist einfach: Der Bestand
ändert sich nie, ohne dass festgehalten wird, warum. Jede Bewegung gehört zu einem von
wenigen Typen:

1. **Wareneingang** von einem Lieferanten, auf Grundlage einer Bestellung
2. **Verkäufe** aus dem Kassensystem (POS), dem Onlineshop oder über Rechnungen
3. **Umlagerungen** zwischen Lagern, Filialen oder Regalen, erst versendet, dann
   empfangen
4. **Retouren**, von Kunden und an Lieferanten
5. **Bruch und Abschreibungen**, mit Begründung
6. **Korrekturen** nach einer Zählung, mit Angabe, wer sie freigegeben hat

> Wenn sich der Bestand ohne Beleg ändern kann, ist das System nur eine hübschere
> Excel-Tabelle.

Eine Umlagerung besteht aus zwei Schritten, Versand und Empfang, und das hat einen
Grund: Wenn zehn Kartons das Lager verlassen und neun ankommen, wollen Sie das am
selben Tag wissen, nicht am Jahresende.

## Artikel, Einheiten und Lagerorte

Gute Bestandsdaten beginnen mit einem sauberen Artikelstamm:

- **Eine Nummer pro Artikel**, wo immer möglich mit Barcode
- **Einheiten und Umrechnungen**: eingekauft im Karton, gelagert in der Schachtel,
  verkauft als Stück
- **Varianten** wie Größe und Farbe, jeweils mit eigenem Bestand
- **Lagerorte**: welches Lager, welche Filiale und bei größeren Lagern welches Regal
  oder welcher Lagerplatz

Doppelt angelegte Artikel mit leicht unterschiedlichen Namen sind der häufigste Grund
für falsche Bestandszahlen. Den Artikelstamm vor der Umstellung zu bereinigen, lohnt
den Aufwand.

## Inventuren, die wirklich funktionieren

Die jährliche Vollinventur bei geschlossenem Betrieb findet Probleme zwölf Monate zu
spät. Besser ist die **rollierende Inventur** (Cycle Counting): Zählen Sie jede Woche
einige Lagerorte oder Artikelgruppen, sodass alles mehrmals im Jahr gezählt wird und
die wertvollsten Artikel noch häufiger.

Das System sollte:

- Eine Zählliste erstellen oder eine Zählmaske auf dem Handy mit Scanner bieten
- **Die erwartete Menge vor der zählenden Person verbergen**, damit sie zählt, statt
  nur zu bestätigen
- Die Differenzen anzeigen und vor einer Bestandskorrektur eine Freigabe verlangen

Differenzen, die immer wieder am selben Ort auftreten, deuten auf ein Prozessproblem
hin, nicht nur auf einen Zählfehler.

## Meldebestände und Einkauf

Legen Sie für jeden wichtigen Artikel einen **Mindestbestand** fest: den Bestand, den
Sie brauchen, um die Verkäufe zu decken, bis eine neue Lieferung eintrifft. Fällt der
Bestand darunter, schlägt das System eine Bestellung vor, gruppiert nach Lieferant.

Saisonartikel und neue Produkte brauchen weiterhin das Urteil eines Menschen, aber
Bestellvorschläge beseitigen den häufigsten Fehler: das Nachbestellen zu vergessen,
bis es zu spät ist.

## Kosten, damit Sie Ihren Gewinn kennen

Die Bewertungsmethode legt Ihr Buchhalter fest, meist den gewogenen
Durchschnittspreis. Aufgabe des Systems ist es, sie bei jedem Wareneingang und jedem
Verkauf konsequent anzuwenden, damit der Wareneinsatz und damit der Gewinn pro
Artikel, pro Filiale und pro Monat stimmt.

## Mit allem verbinden, was verkauft

Ein Warenwirtschaftssystem, das nicht mit Ihren Verkäufen verbunden ist, ist in dem
Moment veraltet, in dem es aktualisiert wird. Es sollte Verkäufe aus diesen Quellen
übernehmen:

- **Kassensystem** in Ihren Läden, behandelt in
  [Kassensystem für Geschäfte auswählen](/blog/pos-cashier-system-for-shops-egypt)
- **Onlineshop**, damit die Website nie etwas verkauft, das Sie nicht haben
- **Buchhaltung oder ERP**, damit Einkäufe und Kosten in die Bücher gelangen, wie in
  [ERP für kleine Unternehmen](/blog/erp-for-small-business-egypt)

Wie diese Verbindungen funktionieren, erklärt
[Geschäftssysteme über APIs verbinden](/blog/api-integration-connecting-business-systems).

## Umstellen, ohne einen Monat zu verlieren

1. **Bereinigen Sie den Artikelstamm** und einigen Sie sich auf Nummern und Einheiten.
2. **Zählen Sie einmal alles**, um einen korrekten Anfangsbestand zu erhalten.
3. **Beginnen Sie mit Wareneingang und Verkauf**, ergänzen Sie danach Umlagerungen und
   Inventuren.
4. **Schulen Sie alle, die mit dem Bestand arbeiten**, nicht nur das Büro.
5. **Prüfen Sie die Differenzen wöchentlich**, in den ersten zwei Monaten.

KF Tech Solutions entwickelt [Geschäftssysteme](/services/business-systems),
einschließlich Warenwirtschaft, und verbindet sie mit dem Kassensystem, dem
Onlineshop und der Buchhaltung, die Unternehmen in Ägypten bereits nutzen. Sie können
[uns erzählen, wie sich Ihr Bestand heute bewegt](/contact).

## Häufige Fragen

### Brauchen wir Barcodes?

Nicht vom ersten Tag an, aber sie machen Wareneingang, Zählung und Verkauf deutlich
schneller und viel genauer. Die meisten Artikel tragen bereits einen Barcode des
Herstellers; für den Rest kann das System Etiketten drucken.

### Kann das Lagerteam Handys statt Computer nutzen?

Ja. Wareneingang, Umlagerungen und Zählungen funktionieren gut auf einem Handy mit
Kamera-Scanner oder mit einem kleinen Handscanner, was auch weniger Wege zurück ins
Büro bedeutet.

### Standardsoftware oder Individualentwicklung?

Ein fertiges Lagermodul reicht für ein einzelnes Geschäft oder ein einfaches Lager oft
aus. Individualentwicklung lohnt sich, wenn Sie mehrere Filialen, eine eigene
Fertigung oder Montage, ungewöhnliche Einheiten oder mehrere Vertriebskanäle haben,
die sich eine einzige Bestandszahl teilen müssen.

### Wie lange dauert es, bis die Zahlen verlässlich sind?

Ab der ersten Vollinventur meist ein bis zwei Monate mit wöchentlicher Prüfung,
während sich das Team daran gewöhnt, jede Bewegung zu erfassen.
