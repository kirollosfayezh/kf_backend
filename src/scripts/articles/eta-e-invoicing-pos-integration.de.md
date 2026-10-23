---
title: Ihr Kassensystem an Ägyptens ETA-E-Rechnungssystem anbinden
summary: Was die Anbindung tatsächlich umfasst, wo sie meistens scheitert und wie Sie erkennen, ob sich Ihr aktuelles System konform machen lässt oder ersetzt werden muss.
---

Die meisten Inhaber begegnen Ägyptens Vorschriften zur E-Rechnung auf dieselbe
Weise: Ein Buchhalter leitet ein Rundschreiben weiter, der Kassenanbieter sagt "wird
unterstützt", und sechs Wochen später kann niemand erklären, warum die Hälfte der
Belege abgelehnt wird.

Die Vorschriften selbst sind nicht das Schwierige. Schwierig ist, dass Compliance
eine Softwareintegration ist — und dass sie jede Abkürzung offenlegt, die Ihr
aktuelles System genommen hat.

## Was das ETA-System eigentlich ist

Die ägyptische Steuerbehörde betreibt zwei verwandte Systeme, und Unternehmen
verwechseln sie regelmäßig:

- **E-Rechnung** (الفاتورة الإلكترونية) umfasst Verkäufe zwischen Unternehmen sowie
  von Unternehmen an staatliche Stellen. Jede Rechnung wird als strukturiertes
  Dokument übermittelt, signiert und mit einer eindeutigen Kennung zurückgegeben.
- **E-Quittung** (الإيصال الإلكتروني) umfasst Verkäufe an Verbraucher — die Belege,
  die ein Geschäft, ein Café oder eine Apotheke einem Laufkunden aushändigt. Sie
  stammen von registrierten Kassengeräten und werden nahezu in Echtzeit übermittelt.

Wenn Sie über die Ladentheke an Verbraucher verkaufen, ist die E-Quittung das, was
Ihr Kassensystem betrifft. Wenn Sie zusätzlich Unternehmen Rechnungen stellen,
brauchen Sie beides, und es ist nicht dieselbe Integration.

> Die stufenweise Einführung wurde mehrfach verschoben und richtet sich nach
> Steuerzahlergruppen. Klären Sie mit Ihrem Buchhalter oder direkt mit der Behörde,
> welche Phase und welche Frist für Ihre Registrierungsnummer gilt — übernehmen Sie
> kein Datum von der Marketingseite eines Anbieters.

## Die fünf Dinge, die eine Integration leisten muss

Was auch immer Sie kaufen oder bauen, die Arbeit besteht aus denselben fünf
Schritten.

1. **Registrieren.** Das Unternehmen wird im Portal der Behörde angemeldet und
   erhält Zugangsdaten. Für die E-Quittung werden Kassengeräte einzeln registriert.
2. **Ein Signaturmittel beschaffen.** Dokumente werden kryptografisch signiert. In
   der Praxis bedeutet das ein elektronisches Siegel (E-Seal) — einen Hardware-Token
   oder ein HSM —, das im Besitz des Unternehmens ist.
3. **Den Artikelkatalog offiziellen Codes zuordnen.** Jeder Artikel, den Sie
   verkaufen, braucht einen anerkannten Code, und jede Position braucht die korrekte
   Steuerart und Steuerunterart. Hier steckt der größte Teil des Aufwands.
4. **Das Dokument erstellen und signieren.** Das Dokument wird vor dem Signieren in
   eine exakte kanonische Form serialisiert. Ist darin auch nur ein einziges Zeichen
   falsch, ist die Signatur gültig, aber das Dokument wird abgelehnt.
5. **Übermitteln und abgleichen.** Senden, die zurückgegebene Kennung speichern und
   einen Plan für die Dokumente haben, die fehlschlagen.

Schritt fünf wird gern übersprungen, und genau der tut weh. Ein System, das
übermittelt, aber nie abgleicht, sammelt monatelang unbemerkt abgelehnte Dokumente
an.

## Wo Integrationen tatsächlich scheitern

| Was bricht | Warum es passiert | Wie es aussieht |
|---|---|---|
| Artikelcodierung | Der Katalog wurde für den Verkaufsraum gebaut, nicht für eine Tabelle mit Steuercodes | Ablehnungen bei einem Teil der Produkte, scheinbar zufällig |
| Steuerunterart | Die richtige Steuerart mit der falschen Unterart | Ganze Kategorien werden abgelehnt, während alles andere durchgeht |
| Kanonisierung | Das Dokument wurde nach dem Signieren geändert oder uneinheitlich serialisiert | "Ungültige Signatur" bei Dokumenten, die korrekt aussehen |
| Ablauf des Tokens | Niemand ist für die Verlängerung zuständig | Monatelang funktioniert alles, dann hört es an einem bestimmten Tag auf |
| Zeitstempel | Ortszeit übermittelt, wo das Format etwas anderes erwartet | Abweichungen um Stunden, schlimmer rund um die Zeitumstellung |
| Keine Warteschlange für Wiederholungen | Die Integration ging davon aus, dass das Netz immer verfügbar ist | Stille Lücken im Datenbestand, entdeckt bei der Prüfung |

Nichts davon ist exotisch. Alles davon lässt sich bei der Entwicklung günstig
abfangen und nach einem Jahr fehlerhafter Daten nur noch teuer beheben.

## Lässt sich Ihr aktuelles Kassensystem konform machen?

Drei ehrliche Fragen:

**Hat es eine API oder einen Export, den Sie auslesen können?** Wenn die einzige
Möglichkeit, einen Verkauf aus dem System zu bekommen, ein gedruckter Bericht ist,
lautet die Antwort nein, und daran ändert auch keine Middleware etwas.

**Speichert es die Felder, die die Behörde verlangt?** Die Steuernummer des Käufers
bei B2B, Artikelcodes, die Steueraufschlüsselung pro Position. Ein Kassensystem, das
pro Verkauf nur eine einzige "Summe" speichert, kann kein konformes Dokument
erzeugen, weil die Information nie erfasst wurde.

**Lässt es sich ändern?** Viele Unternehmen betreiben ein System, dessen Anbieter
verschwunden ist. Funktionierende Software, die Sie nicht ändern können, ist eine
Wand, kein Vermögenswert.

Wenn alle drei Antworten ja lauten, ist die Integration in ein bestehendes System
meist ein Projekt von vier bis sechs Wochen. Lautet eine davon nein, ersetzen Sie
das Kassensystem, und die Compliance-Frist ist dann der Anlass, nicht das Projekt.

## Bauen, kaufen oder überbrücken

| Ansatz | Am besten, wenn | Nachteil |
|---|---|---|
| **Modul des Anbieters** — Ihr Kassenanbieter liefert die Compliance mit | Ihr Kassensystem aktuell und der Anbieter aktiv ist | Sie übernehmen seine Roadmap und seinen Zeitplan |
| **Middleware-Brücke** — ein Dienst sitzt zwischen Kassensystem und Behörde | Das Kassensystem funktioniert, sich aber nicht ändern lässt | Laufende Kosten pro Dokument; ein weiteres System, das am Leben gehalten werden muss |
| **Direkte Integration** — in Ihr eigenes System eingebaut | Sie bereits Individualsoftware betreiben oder das Kassensystem ohnehin ersetzen | Höhere Anfangskosten, keine laufende Gebühr pro Dokument |

Es gibt keine allgemein richtige Antwort. Die eine durchweg falsche Antwort ist,
darauf zu warten, dass der Anbieter etwas ankündigt, während die Frist näher rückt.

## Was Sie zuerst tun sollten

Keine Demo. Bevor Sie mit irgendjemandem sprechen, exportieren Sie die Verkäufe von
drei Monaten und prüfen Sie, ob jede Position Folgendes hat: einen Artikelcode, eine
Steueraufschlüsselung und — bei allem, was an ein Unternehmen verkauft wurde — die
Steuernummer des Käufers.

Wenn diese drei Felder vorhanden und korrekt sind, haben Sie ein
Integrationsprojekt. Wenn nicht, haben Sie zuerst ein Datenprojekt, und jedes
Angebot, das Sie erhalten, bevor das behoben ist, wird falsch sein.

## Häufige Fragen

### Gilt das auch für ein kleines Unternehmen?

Die Phasen werden nach Steuerzahlergruppen definiert, nicht allein nach Größe, und
der Geltungsbereich ist mit der Zeit gewachsen. Prüfen Sie Ihre eigene
Registrierung, statt anzunehmen, dass ein Schwellenwert Sie schützt.

### Können wir unseren bisherigen Drucker weiter verwenden?

In der Regel ja. Die E-Quittung ändert, was übermittelt wird, nicht was gedruckt
wird — allerdings muss der gedruckte Beleg normalerweise die zurückgegebene Kennung
tragen.

### Was passiert mit Verkäufen, während das Internet ausgefallen ist?

Eine konforme Integration stellt sie in eine Warteschlange und übermittelt sie,
sobald die Verbindung zurück ist. Wenn die vorgeschlagene Lösung auf diese Frage
keine Antwort hat, ist sie nicht fertig.

### Wie lange dauert es?

Vier bis sechs Wochen sind bei einem modernen Kassensystem mit funktionierender API
üblich. Die Variable ist fast nie der Code für die Übermittlung — sondern wie lange
es dauert, den Produktkatalog korrekt zu codieren.
