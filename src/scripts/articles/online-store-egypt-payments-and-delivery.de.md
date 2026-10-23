---
title: Onlineshop in Ägypten: Zahlung, Lieferung und was wirklich hakt
summary: Die zwei Probleme, die über den Erfolg eines E-Commerce-Projekts in Ägypten entscheiden — und keines davon ist die Website.
---

Die meisten, die in Ägypten einen Onlineshop planen, stecken ihr Budget in die
Shop-Oberfläche: das Design, die Produktseiten, die Animationen. Dieser Teil ist
weitgehend gelöst — zahlreiche Plattformen erledigen ihn gut und günstig.

Die zwei Dinge, die darüber entscheiden, ob das Geschäft funktioniert, sind der
Geldeingang und der Warenausgang. Beides ist hier schwieriger, als die Tutorials
vermuten lassen, und keines davon ist wirklich ein Website-Problem.

## Problem eins: Barzahlung bei Lieferung

Ein erheblicher Teil der E-Commerce-Bestellungen in Ägypten wird an der Haustür bar
bezahlt. Jedes System, das Kartenzahlung als Normalfall und Barzahlung als Sonderfall
behandelt, wird Ihnen ab der ersten Woche Probleme bereiten.

Barzahlung bei Lieferung verändert das gesamte Modell:

- **Die Bestellung ist bei Aufgabe nicht bezahlt.** Sie ist ein Versprechen. Ihr
  Bestand muss reserviert werden, Ihr Umsatz darf aber noch nicht verbucht werden.
- **Annahmeverweigerung an der Tür ist Alltag.** Die Ware kommt zurück, der Bestand
  muss zurückgebucht werden, und die Kuriergebühr ist so oder so ausgegeben.
- **Der Kurierdienst hält Ihr Geld**, manchmal wochenlang, und überweist es in
  Sammelzahlungen, die nicht eins zu eins zu Ihren Bestellungen passen.
- **Der Abgleich ist eine echte Aufgabe.** Welche der 340 Bestellungen in dieser
  Überweisung wurden tatsächlich kassiert, und welche kamen zurück?

**Was Sie dafür bauen sollten:** einen Bestelllebenszyklus mit ausdrücklichen Status —
aufgegeben, bestätigt, versendet, zugestellt, kassiert, retourniert, überwiesen. Die
meisten fertigen Warenkorbsysteme bilden zwei oder drei davon ab und unterstellen den
Rest. In der Lücke zwischen "zugestellt" und "Geld auf unserem Konto" verstecken sich
die Verluste.

Bauen Sie den Abgleichbericht am ersten Tag, nicht erst, wenn die Streitfälle beginnen.

## Problem zwei: Lieferung

Sie werden Kurierdienste nutzen, und wahrscheinlich mehr als einen. Jeder hat seine
eigene API, sein eigenes Statusvokabular und seine eigene Definition von "zugestellt".

Die Falle besteht darin, auf das Modell eines einzelnen Kurierdienstes hin zu bauen.
Wenn Sie einen zweiten hinzunehmen, passen die Status nicht zusammen, und am Ende haben
Sie zwei parallele Systeme und eine Person, die im Kopf zwischen ihnen übersetzt.

**Was Sie dafür bauen sollten:** zuerst Ihr eigenes Statusmodell, dann jeden
Kurierdienst darauf abbilden. Mehr Arbeit am ersten Tag, dramatisch weniger an dem Tag,
an dem Sie den Kurierdienst wechseln oder einen weiteren hinzunehmen — und das werden
Sie, weil Abdeckung und Preise je nach Gouvernement variieren.

## Kartenzahlungen

| Aspekt | Was Sie prüfen sollten |
|---|---|
| Auszahlungsdauer | Wie viele Tage, bis das Geld auf Ihrem Konto ist? |
| Gebühren | Prozentsatz, Fixanteil und was Sie eine Erstattung kostet |
| Fehlgeschlagene Zahlungen | Werden sie erneut versucht, und wird der Kunde informiert? |
| Erstattungen | Per API oder durch eine Person, die sich in ein Portal einloggt? |
| Testumgebung | Gibt es eine echte Sandbox, oder testen Sie im Live-Betrieb? |
| Ratenzahlung | Bei höherwertigen Artikeln zunehmend erwartet |

Diese letzte Zeile ist kaufmännisch wichtig. Bei allem, was mehr als ein paar tausend
Pfund kostet, beeinflussen Ratenzahlungsoptionen in diesem Markt die Conversion
spürbar.

Die Frage nach Erstattungen erwischt viele kalt: Ein Gateway, bei dem Erstattungen
manuellen Zugriff auf ein Portal erfordern, skaliert ab einem gewissen Bestellvolumen
nicht mehr, und das merken Sie genau im falschen Moment.

## Was das für die Umsetzung bedeutet

Ein ehrlicher Leistungsumfang für einen ägyptischen Onlineshop ist nicht "eine
Website". Er umfasst:

1. Eine Shop-Oberfläche — der wirklich einfache Teil, oft eine fertige Plattform
2. Ein Bestellsystem, das Barzahlung bei Lieferung richtig abbildet
3. Eine Kurieranbindung hinter Ihrem eigenen Statusmodell
4. Eine Zahlungsintegration, bei der Erstattungen programmatisch abgewickelt werden
5. Einen Abgleichbericht zwischen den Überweisungen der Kurierdienste und Ihren
   Bestellungen
6. Eine Bestandsführung, die beim Versand abbucht statt bei der Bestellung und bei
   Annahmeverweigerung zurückbucht
7. Die Übermittlung elektronischer Belege (E-Receipts), da es sich um Verkäufe an
   Verbraucher handelt — siehe
   [Ihr Kassensystem an das ETA-System anbinden](/blog/eta-e-invoicing-pos-integration)

Bei den Punkten zwei, drei und fünf liegen die Kosten, und genau sie fehlen am
häufigsten in einem Angebot. Wenn ein Angebot nur Punkt eins bepreist, bepreist es ein
anderes Projekt.

> Ein Shop, der Ihnen nicht sagen kann, für welche zugestellten Bestellungen Sie
> tatsächlich bezahlt wurden, ist kein Onlineshop. Er ist ein Katalog mit Formular.

## Sollten Sie eine fertige Plattform nutzen?

Oft ja, zu Beginn. Eine gehostete Plattform erledigt Shop-Oberfläche, Warenkorb und
Kartenzahlung kompetent, und ein Start in Wochen mit etwas Unvollkommenem schlägt
einen Start in Monaten mit einer Maßanfertigung.

Die Grenzen kommen vorhersehbar: wenn der Abgleich der Barzahlungen über das
hinauswächst, was die Plattform abbildet, wenn Sie einen zweiten Kurierdienst brauchen
oder wenn die Gebühren pro Bestellung die Kosten einer Eigenentwicklung übersteigen.
Den allgemeinen Rahmen finden Sie unter
[Individualentwicklung oder Standardsoftware](/blog/custom-software-vs-off-the-shelf-how-to-choose).

Die Anforderung, die Sie vom ersten Tag an absichern sollten, sind eine dokumentierte
API und ein vollständiger Datenexport. Ohne beides bedeutet ein späterer Wechsel einen
Neuanfang.

## Häufige Fragen

### Was kostet die Entwicklung eines Onlineshops?

Eine fertige Plattform mit sauberer Abwicklung der Barzahlung bei Lieferung und einem
Kurierdienst: überschaubar. Eine Individualentwicklung mit mehreren Kurierdiensten,
Abgleich und Bestandsführung: erheblich mehr. Die Variable sind die Punkte zwei bis
fünf oben, nicht das Design. Siehe
[was eine Webanwendung wirklich kostet](/blog/what-does-a-web-app-actually-cost-to-build).

### Brauchen wir zusätzlich eine App?

Nicht zu Beginn. Eine schnelle, responsive Website erreicht dieselben Kunden. Erwägen
Sie eine App, wenn die Wiederkaufrate sie rechtfertigt —
[die App-Kosten im Einzelnen finden Sie hier](/blog/app-development-cost-egypt).

### Was ist der häufigste Fehler überhaupt?

Umsatz zu verbuchen, wenn eine Bestellung aufgegeben wird, statt wenn das Bargeld
überwiesen wurde. Das lässt die ersten Monate weit besser aussehen, als sie sind, und
die Korrektur ist schmerzhaft.
