---
title: Waagen und Barcode-Etiketten mit dem Kassensystem verbinden
summary: Wie Ware nach Gewicht an die Kasse gelangt: Etiketten mit Preis im Barcode, eine Waage am Kassensystem oder Live-Gewichtsdaten, und was Sie vorher prüfen.
tags: Kassensystem, Waage, Barcode-Etiketten, Waagenanbindung, Einzelhandel, Ägypten
alt: Etikettendruckende Obst- und Gemüsewaage mit Tastenfeld zwischen Gemüse in einem Supermarkt
caption: Eine Waage, die Gewicht und Preis in den Barcode druckt, lässt die Kasse lose Ware ohne erneute Eingabe abrechnen.
stats: 13|Ziffern hat ein Standard-Waagenetikett im EAN-13-Format; 20–29|GS1-Präfixe für interne Nummern im Geschäft, etwa für gewogene Ware; 1|Artikelnummer, die Waage und Kassensystem für jedes Produkt teilen sollten
---

Es gibt drei Wege, eine Waage mit Ihrem Kassensystem zu verbinden. Die Waage druckt ein Barcode-Etikett, in dem Gewicht oder Preis steckt, und die Kasse scannt es. Die Waage steht an der Kasse und sendet ihren Messwert direkt auf den Kassenbildschirm. Oder die Waage überträgt das Gewicht live an eine App oder einen Server. Welcher Weg passt, hängt davon ab, wo gewogen wird und wer wiegt.

Ganz gleich, wofür Sie sich entscheiden: Waage und Kassensystem müssen sich in einem Punkt einig sein, der Artikelnummer. Sonst landen gewogene Verkäufe unter „Sonstiges“, und Ihre Bestandszahlen verlieren ihre Aussagekraft.

## Drei Wege, wie gewogene Ware an die Kasse kommt

| Methode | Wo gewogen wird | Geeignet für | Worauf es ankommt |
| --- | --- | --- | --- |
| Barcode-Etikett mit Preis | An der Theke, vor der Kasse | Feinkost, Metzgereien, Bäckereien, Supermärkte mit Bedientheke | Das Etikettenformat, das die Kasse liest |
| Waage am Kassensystem | Direkt an der Kasse | Lose verkauftes Obst und Gemüse, kleine Geschäfte mit einer Kasse | Kabel, Treiber und Protokoll |
| Live-Gewichtsdaten | Überall, mit einer vernetzten Waage | Lager, Produktion, Fernüberwachung | Zuverlässiges Netz und Verhalten ohne Verbindung |

Viele Geschäfte nutzen zwei Wege gleichzeitig: etikettierte Packungen von der Theke und eine Kassenwaage für lose Ware.

## Barcode-Etiketten mit eingebettetem Preis

Eine Etikettenwaage wiegt die Ware, berechnet den Preis aus dem Kilopreis und druckt ein Barcode-Etikett. Beim Scannen liest die Kasse den Artikel und den Preis oder das Gewicht direkt aus dem Barcode, ohne Eintippen.

Diese Etiketten sind meist 13-stellige EAN-Barcodes, die mit einer Ziffernfolge von 20 bis 29 beginnen. GS1, die Organisation hinter den Handels-Barcodes, nennt sie **Restricted Circulation Numbers**: Nummern für die Verwendung innerhalb eines Geschäfts oder eines Landes, nicht weltweit eindeutig und keine GTIN (der normale Produkt-Barcode). Jede nationale GS1-Organisation legt fest, was diese Präfixe in ihrem Markt bedeuten.

Ein verbreiteter Aufbau sieht so aus:

| Ziffern | Bedeutung |
| --- | --- |
| 2 Ziffern | Präfix, das der Kasse „Waagenetikett“ signalisiert |
| 5 Ziffern | Ihre interne Artikelnummer (oft PLU genannt) |
| 5 Ziffern | Preis oder Gewicht in Gramm |
| 1 Ziffer | Prüfziffer, die Lesefehler erkennt |

Das ist nur ein möglicher Aufbau. Manche Waagen codieren das Gewicht statt des Preises, nutzen ein anderes Präfix oder ergänzen eine Preisprüfziffer. Stellen Sie deshalb **auf der Waage und im Kassensystem dasselbe Format ein** und testen Sie es mit einem echten Etikett.

### Preis oder Gewicht im Barcode?

- **Preis im Barcode** ist an der Kasse am einfachsten, aber das System muss das Gewicht für den Bestand zurückrechnen, was Rundungsdifferenzen erzeugen kann.
- **Gewicht im Barcode** hält den Bestand in Kilo genau, und die Kasse wendet den aktuellen Preis an, auch auf Etiketten, die heute Morgen gedruckt wurden.

Für die Bestandsführung ist das Gewicht meist die bessere Wahl.

### Neuere Etikettenformate

Der GS1-Leitfaden für Frischware beschreibt den Wechsel von diesen internen Nummern zu einer echten GTIN mit Zusatzdaten wie Nettogewicht, Preis und Verfallsdatum, codiert in GS1 DataBar oder in 2D-Codes (GS1 QR Code, GS1 DataMatrix). Mit dem Verfallsdatum kann die Kasse den Verkauf einer abgelaufenen Packung blockieren. Fragen Sie vor dem Kauf eines neuen Scanners, ob er 2D-Codes liest.

## Eine Waage direkt am Kassensystem

Für lose Ware, die an der Kasse gewogen wird, wird die Waage mit dem Kassenrechner verbunden, meist per serieller Schnittstelle (RS-232) oder USB, manche Modelle auch über das Netzwerk. Die Kassenkraft wählt den Artikel, das System fragt das Gewicht bei der Waage ab, und die Position wird mit dem Gewicht als Menge gebucht.

Prüfen Sie vor dem Kauf:

- **Welches Protokoll die Waage spricht** und ob Ihr Kassensystem es direkt unterstützt oder eine Sonderprogrammierung braucht.
- **Dass das System nur einen stabilen Messwert übernimmt**, nicht die Zahl, während sich die Tüte noch bewegt.
- **Die Tara-Funktion**, damit der Behälter nicht als Ware berechnet wird.

Wenn Sie nach Gewicht an Endkunden verkaufen, fragen Sie Ihren Lieferanten außerdem nach der Kalibrierung und Eichung, die die Waage für den gewerblichen Einsatz benötigt.

## Live-Gewichtsdaten

Manche Unternehmen brauchen das Gewicht auf einem Bildschirm abseits der Kasse: im Lager, an der Produktionslinie, bei der Wareneingangskontrolle oder auf dem Smartphone. Dann liest die Waage ihre Wägezelle aus und sendet jeden Messwert über das Netzwerk an einen Server oder eine App. Unser Prototyp [Smart Balance](/projects/smart-balance) funktioniert so: Ein Raspberry Pi liest die Wägezelle in Python aus und überträgt das Gewicht live an eine Mobile-App, sodass der Messwert verfügbar ist, sobald er sich ändert.

Eine vernetzte Waage kann auch ein Gewicht an die Kasse senden, den Wareneingang gegen eine Bestellung buchen oder jeden Wiegevorgang protokollieren. Die Designfragen drehen sich um Zuverlässigkeit: Was zeigt die App bei Verbindungsabbruch, wie werden Messwerte mit Zeitstempel versehen, und wer darf ein Gewicht von Hand ändern?

## Artikelnummern und Preise an einem Ort pflegen

Der typische Fehler sind zwei Listen, eine auf der Waage und eine im Kassensystem, gepflegt von verschiedenen Personen. Eine Woche später verkauft die Waage zum Preis des Vormonats.

- **Pflegen Sie Artikel und Preise im Kassensystem** und übertragen Sie sie an die Waage, über die Software des Waagenherstellers oder eine direkte Anbindung.
- **Verwenden Sie überall dieselbe Artikelnummer**: im Kassensystem, auf der Waage und auf dem Etikett.
- **Protokollieren Sie, wer einen Preis wann geändert hat**, besonders bei Artikeln von der Theke.

Das ist ein großer Teil dessen, worum es bei der [Wahl eines Kassensystems](/blog/pos-cashier-system-for-shops-egypt) für ein Geschäft mit gewogener Ware geht.

## Bestand und Berichte für gewogene Ware

Bei gewogener Ware weicht der Bestand am stärksten ab: durch Zuschnitt, Austrocknung und die paar Gramm extra für Stammkunden. Das System sollte:

- Gewogene Artikel in Kilo oder Gramm mit Dezimalstellen führen, nicht in ganzen Stück.
- Verderb und Zuschnitt als eigene Bewegung buchen, nicht als versteckten Verkauf.
- Das verkaufte Gewicht pro Artikel und Tag zeigen, damit Sie es mit dem Wareneingang vergleichen können.

Wenn die Summen nicht stimmen, erklärt der [Leitfaden zur Lagerverwaltung](/blog/inventory-management-system-egypt), wohin Bestand meist verschwindet. Und wenn Ihre Kasse auch Karten oder Wallets annimmt, lesen Sie [Zahlungsanbieter in Ägypten](/blog/payment-gateways-egypt).

## Wie KF Tech Solutions hilft

Wir entwickeln [Unternehmenssysteme](/services/business-systems), darunter Kassen- und Lagerverwaltungssoftware, und wir haben eine vernetzte Waage gebaut, die das Gewicht live an eine App überträgt. Für ein Geschäft oder Lager heißt das: Wir können das Etikettenformat oder die Verbindung Ihrer Waage im Kassensystem auslesen, Artikelnummern und Preise an einem Ort zusammenführen und gewogenen Bestand korrekt buchen. Wir arbeiten mit Unternehmen in Ägypten und am Golf.

## Häufige Fragen

### Kann ich meine vorhandene Waage mit einem neuen Kassensystem nutzen?

Oft ja. Druckt sie Barcode-Etiketten, muss das System nur ihr Etikettenformat lesen. Ist sie per Kabel angeschlossen, prüfen Sie, welches Protokoll sie nutzt und ob das System es unterstützt.

### Brauche ich eine GS1-Mitgliedschaft für Waagenetiketten?

Die Präfixe 20 bis 29 sind für den internen Gebrauch im Geschäft gedacht, daher verwenden Etiketten, die nur in Ihrem eigenen Laden gedruckt und verkauft werden, normalerweise keine GTINs Ihres Unternehmens. Wenden Sie sich an GS1 Ägypten, wenn Sie gewogene Packungen auch an andere Händler liefern, denn dann braucht das Produkt einen richtigen Barcode.

### Warum lehnt die Kasse manche Waagenetiketten ab?

Meist passt das Etikettenformat der Waage nicht zur Einstellung im Kassensystem, oder die Artikelnummer auf dem Etikett fehlt im System. Drucken und testen Sie ein Etikett pro Artikelart.

### Funktioniert das mit elektronischen Belegen?

Das sollte es. Ein gewogener Artikel wird zu einer Belegposition mit dem Gewicht als Menge und Kilogramm als Einheit. Prüfen Sie daher, ob Ihr Kassensystem Dezimalmengen auf elektronischen Belegen korrekt übermittelt.

Sie verkaufen nach Gewicht und möchten an der Kasse keine Preise mehr eintippen? [Schildern Sie uns, wie Ihr Geschäft arbeitet](/contact) oder [buchen Sie ein kostenloses Gespräch](/book), und wir helfen Ihnen, die Verbindung zwischen Ihren Waagen und Ihrem Kassensystem zu planen.

## Quellen

- [GS1 Fresh Foods Sold at Point-of-Sale Implementation Guideline](https://ref.gs1.org/guidelines/fresh-foods/)
- [GS1-Übersicht der Präfixe 20–29 nach GS1-Mitgliedsorganisation](https://www.gs1.org/docs/barcodes/SummaryOfGS1MOPrefixes20-29.pdf)
