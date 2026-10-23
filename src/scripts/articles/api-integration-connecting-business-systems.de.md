---
title: Die Systeme verbinden, die Sie bereits betreiben
summary: Warum Integration kostet, was sie kostet, die vier Wege, Systeme zu verbinden, und wie Sie vor der Zusage erkennen, welcher Fall bei Ihnen vorliegt.
---

Die meisten Unternehmen brauchen keine neue Software. Sie brauchen vielmehr, dass die
Software, die sie bereits haben, aufhört, sich selbst zu widersprechen.

Das Kassensystem weiß, was verkauft wurde. Die Buchhaltungssoftware weiß, was in
Rechnung gestellt wurde. Die Lagerverwaltung weiß, was im Regal steht. Keines davon
stimmt mit den anderen überein, und ein Mensch verbringt seine Woche damit, drei
Bildschirme abzugleichen.

Das ist ein Integrationsproblem, und sein Preis hängt ganz entscheidend von einer
Sache ab, die Sie an einem Nachmittag prüfen können.

## Die vier Wege, zwei Systeme zu verbinden

Absteigend sortiert danach, wie gut sie funktionieren.

### 1. Eine dokumentierte API

Das System bietet einen definierten Weg, über den andere Software seine Daten lesen
und schreiben kann. Das ist der gute Fall: berechenbar, vom Hersteller unterstützt,
und er übersteht das nächste Update des Anbieters.

**Typischer Aufwand:** Tage bis zwei Wochen pro Integration.

### 2. Eine undokumentierte, aber echte API

Das System hat eine Schnittstelle, aber sie ist nicht veröffentlicht — oft ist es
die, die die eigene Mobile-App des Anbieters nutzt. Sie funktioniert, aber nichts
hindert den Anbieter daran, sie ohne Vorwarnung zu ändern.

**Typischer Aufwand:** zwei bis vier Wochen, dazu dauerhafte Anfälligkeit. Als
Brücke akzeptabel, nicht als Fundament.

### 3. Zeitgesteuerter Dateiaustausch

Das System exportiert in festen Abständen eine Datei; Sie lesen sie ein. Grob, aber
wirklich robust — viele ernsthafte Unternehmen laufen auf einer nächtlichen
CSV-Datei.

Die Grenze ist die Zeit: Ihre Daten sind so aktuell wie der letzte Export. Wenn
Entscheidungen Live-Zahlen brauchen, reicht das nicht.

**Typischer Aufwand:** eine bis drei Wochen.

### 4. Screen Scraping oder manueller Export

Überhaupt keine Schnittstelle. Jemand lädt einen Bericht herunter, oder eine
Software gibt sich als Nutzer aus, der sich durch die Seiten klickt.

**Typischer Aufwand:** schwankend, und es bricht jedes Mal, wenn der Anbieter eine
Bildschirmmaske ändert. Betrachten Sie das als Übergangslösung mit einem Plan, sie
zu ersetzen — oder als Beleg dafür, dass das System selbst ersetzt werden muss.

## Die Frage, die Sie zuerst stellen sollten

Bevor Sie den Umfang einer Integration festlegen, fragen Sie den Anbieter des
**älteren** Systems:

**"Haben Sie eine API-Dokumentation, und kann ich sie jetzt sehen?"**

Nicht "Unterstützen Sie Integrationen?" — das bejaht jeder Anbieter. Fragen Sie nach
dem Dokument. Die Antwort ordnet Sie in die Liste oben ein, und diese Einordnung,
nicht das neue Projekt, bestimmt die Kosten.

| Antwort | Was sie bedeutet |
|---|---|
| Schickt Ihnen sofort einen Link | Fall 1. Weitermachen. |
| "Ja, unsere Partner haben Zugang" | Möglicherweise Fall 1, mit einer kommerziellen Hürde. Fragen Sie nach Kosten und Bedingungen. |
| "Wir können Ihnen einen Export bauen" | Fall 3. Planen Sie das Budget entsprechend. |
| "Was soll die Schnittstelle denn können?" | Es gibt keine. Fall 4. |
| Keine Antwort | Fall 4, und ein Grund, das System zu überdenken. |

## Wo die Kosten tatsächlich liegen

Nicht im Lesen der Daten. Das Lesen ist der einfache Teil, und genau das zeigen
Demos.

Die Kosten stecken in allem, was passiert, wenn die Wirklichkeit nicht mitspielt:

- **Das andere System ist nicht erreichbar.** Stellen Sie die Daten in eine
  Warteschlange und versuchen es erneut, oder brechen Sie ab und schlagen Alarm?
- **Derselbe Datensatz kommt zweimal an.** Entsteht dann eine doppelte Bestellung?
- **Die beiden Systeme widersprechen sich.** Welches gewinnt, und wer wird
  informiert?
- **Ein Datensatz ändert sich, nachdem Sie ihn kopiert haben.** Bemerken Sie das?
- **Jemand bearbeitet beide Seiten gleichzeitig.** Welche Änderung bleibt bestehen?

Das sind geschäftliche Entscheidungen, keine technischen, und sie müssen von
jemandem aus dem Unternehmen getroffen werden. Eine Integration, die gebaut wird,
ohne diese Fragen zu beantworten, funktioniert im Test und erzeugt im Betrieb
stille, sich aufschaukelnde Datenfehler — die Art, die ein Jahr später bei der
Prüfung auffällt.

> Bei Integration geht es nicht darum, Daten zu bewegen. Es geht darum zu
> entscheiden, was wahr ist, wenn zwei Systeme sich widersprechen.

## Eine sinnvolle Reihenfolge

1. **Zuerst eine Richtung.** Lesen Sie aus dem alten System in das neue. Eine
   Zwei-Wege-Synchronisation ist deutlich schwieriger und oft unnötig.
2. **Zuerst ein Datensatztyp.** Produkte, dann Kunden, dann Bestellungen. Jeder
   lehrt Sie etwas über den nächsten.
3. **Protokollieren Sie alles ab dem ersten Tag.** Wenn im vierten Monat eine Zahl
   falsch ist, finden Sie über das Protokoll heraus, warum.
4. **Gleichen Sie gezielt ab.** Ein täglicher Job, der beide Seiten vergleicht und
   Abweichungen meldet. Ohne ihn vertrauen Sie, statt zu wissen.

## Häufige Fragen

### Sollten wir eine Integrationsplattform nutzen, statt selbst zu entwickeln?

Für gängige Systeme mit fertigen Konnektoren oft ja — das ist günstiger und
schneller. Zur falschen Antwort wird es, wenn Ihre Logik ungewöhnlich ist, wenn die
Preise pro Datensatz die Kosten einer Eigenentwicklung übersteigen oder wenn der
Konnektor die Felder nicht abdeckt, die Sie tatsächlich brauchen.

### Unser Anbieter verlangt Geld für den API-Zugang. Ist das normal?

Verbreitet, und es gehört in den Vergleich eingepreist. Nicht akzeptabel ist ein
Anbieter, der Geld für den Zugriff auf **Ihre eigenen Daten** verlangt. Das ist ein
Grund, den Ausstieg zu planen, und
[Kaufen oder selbst bauen](/blog/custom-software-vs-off-the-shelf-how-to-choose) ist
das, was Sie als Nächstes lesen sollten.

### Wie vermeiden wir das beim nächsten Mal?

Machen Sie "dokumentierte API und vollständiger Datenexport" bei jedem künftigen
Softwarekauf zur schriftlichen Anforderung. Beim Kauf kostet das nichts, und es ist
der eine Punkt, der darüber entscheidet, ob Ihre Systeme jemals zusammenarbeiten
können.
