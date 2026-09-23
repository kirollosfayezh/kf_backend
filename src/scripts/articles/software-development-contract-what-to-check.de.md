---
title: Neun Punkte, die in jedem Softwareentwicklungsvertrag stehen sollten
summary: Die Klauseln, die darüber entscheiden, ob Ihnen gehört, wofür Sie bezahlt haben — geschrieben für die Person, die unterschreibt, nicht für die Kanzlei, die prüft.
---

Über Softwareverträge wird meist um Preis und Termin gestritten. Genau das geht
selten schief. Schief geht, was man achtzehn Monate später entdeckt, wenn man etwas
ändern will und es nicht kann — wegen einer Klausel, die niemand gelesen hat, oder
einer, die nie drinstand.

Dies ist für die unterschreibende Person geschrieben. Holen Sie juristischen Rat
für Ihre Rechtsordnung ein; nutzen Sie das hier, um zu wissen, worauf Sie zeigen.

## 1. Wem gehören die Rechte am Code

Die wichtigste Klausel und die am häufigsten unklare.

Sie wollen: **ausschließliche, zeitlich und räumlich unbeschränkte, übertragbare
und unterlizenzierbare Nutzungsrechte an allen Arbeitsergebnissen einschließlich
des Quellcodes**, eingeräumt mit vollständiger Zahlung.

Nach deutschem Recht ist das Urheberrecht selbst nicht übertragbar — übertragen
werden Nutzungsrechte. Die Formulierung muss also die Arbeit leisten, die anderswo
ein schlichtes "wir besitzen es" erledigt. Achten Sie auf "Recht zur Nutzung": eine
einfache Lizenz kann nach Nutzerzahl, Gebiet und Zeit begrenzt sein.

**Fragen Sie direkt:** Könnten wir morgen jemand anderen beauftragen, dieses System
zu ändern, ohne Sie um Erlaubnis zu fragen?

## 2. Was bei Zahlungsverzug gilt

Viele Verträge räumen Rechte erst mit der Schlusszahlung ein. Das ist vertretbar.
Nicht vertretbar ist es, wenn die Schlusszahlung von einem Abnahmeverfahren abhängt,
das der Auftragnehmer kontrolliert.

## 3. Drittkomponenten und Lizenzen

Jedes reale System nutzt Open-Source-Bibliotheken. Das ist normal und gut. Sie
brauchen eine Liste und die Zusicherung, dass keine Lizenz mit Ihrer beabsichtigten
Nutzung kollidiert.

Die Klausel, auf der Sie bestehen: Der Auftragnehmer sichert zu, dass die Leistung
keine Rechte Dritter verletzt, und stellt Sie andernfalls frei.

## 4. Wie übergeben wird

"Lieferung" muss als Artefakte definiert sein, nicht als laufende URL.

- Quellcode in einem Repository, **das Ihnen gehört**, mit vollständiger Historie
- Zugangsdaten zu allen Diensten, auf Ihren Namen und von Ihnen bezahlt
- Anleitung, um alles auf einem neuen Rechner von Grund auf zu bauen und zu starten
- Datenbankschema und Migrationsskripte
- Liste aller Drittdienste samt Kosten

Der Test: Könnte eine fachkundige Person, die das Projekt nie gesehen hat, es aus
dem Gelieferten zum Laufen bringen? Wenn nein, haben Sie eine Abhängigkeit als
Lieferung erhalten.

## 5. Abnahmekriterien

"Zur Zufriedenheit des Auftraggebers" schützt niemanden. Definieren Sie die Abnahme
als prüfbare Liste. Sie muss nicht vollständig sein, sie muss objektiv sein.

## 6. Gewährleistung

Wer behebt nach der Abnahme Mängel, wie lange, und auf wessen Kosten?

Mindestens drei Monate. Wer sich dagegen wehrt, sagt Ihnen etwas Nützliches über
den Code, bevor Sie ihn gesehen haben.

Trennen Sie **Mangel** (es tut nicht, was vereinbart war — kostenfrei zu beheben)
von **Änderung** (Sie wollen etwas anderes — vergütungspflichtig). Verträge, die das
vermengen, erzeugen jeden späteren Streit.

## 7. Vertraulichkeit, beidseitig

Gegenseitig, nicht einseitig. Sie geben preis, wie Ihr Geschäft funktioniert.

Bei personenbezogenen Daten kommt ein Auftragsverarbeitungsvertrag hinzu — und bei
Verarbeitung außerhalb der EU gehört das Transferinstrument in den Vertrag. Details
in [Nearshoring nach Ägypten](/blog/nearshoring-software-development-egypt).

## 8. Kündigung

Wie kommt jede Seite heraus, mit welcher Frist, und was geschieht mit angefangener
Arbeit?

Die vergessene Klausel: **Bei Beendigung übergibt der Auftragnehmer alles aus Punkt
vier innerhalb einer festgelegten Frist — unabhängig vom Grund der Beendigung und
von laufenden Streitigkeiten.** Ohne sie kann ein Streit Ihr System blockieren.

## 9. Schlüsselpersonen und Unterauftragnehmer

Sie haben den Anbieter auch nach den Menschen ausgewählt, die Sie getroffen haben.
Benennen Sie sie und verlangen Sie eine Mitteilung bei Wechsel. Unteraufträge nur
nach Offenlegung und Zustimmung.

## Übersicht

| Klausel | Was Sie wollen | Warnzeichen |
|---|---|---|
| Rechte | Ausschließlich, unbefristet, übertragbar | "Recht zur Nutzung" |
| Übergabe | Repository, Zugänge, Bauanleitung | "Auf Ihrem Server bereitgestellt" |
| Abnahme | Objektive, prüfbare Liste | "Zur Zufriedenheit" |
| Gewährleistung | 3+ Monate, Mängel kostenfrei | Keine, oder 30 Tage |
| Mangel vs. Änderung | Getrennt definiert | Nicht unterschieden |
| Drittlizenzen | Aufgelistet und zugesichert | Nicht erwähnt |
| Vertraulichkeit | Gegenseitig | Einseitig |
| Kündigung | Übergabe unabhängig vom Grund | Fehlt oder an Zahlung geknüpft |
| Personal | Benannt, Mitteilung bei Wechsel | Anonymes Team |

> Ein Vertrag soll keinen Streit gewinnen. Er soll die teuren Streitigkeiten
> unmöglich machen.

## Häufige Fragen

### Lohnt sich eine Quellcode-Hinterlegung?

Selten, wenn Punkt eins und Punkt vier stehen. Hinterlegung löst ein Problem, das
saubere Rechte und laufende Übergabe gar nicht erst entstehen lassen.

### Festpreis oder Aufwand?

Festpreis bei definiertem Umfang, Aufwand bei echter Exploration. Festpreis auf
unklarem Umfang heißt: Das Risiko ist eingepreist, und Sie bezahlen es in jedem
Fall.

### Der Anbieter sagt, das sei alles Standard und nicht verhandlungswürdig.

Dann kostet es ihn nichts, es schriftlich festzuhalten.
