---
title: Was Ihr PageSpeed-Insights-Wert wirklich bedeutet
summary: Laborwert gegen echte Besucherdaten, die Core-Web-Vitals-Grenzen, die zählen, und wie Sie einen Bericht lesen, bevor Sie für eine Korrektur zahlen.
tags: PageSpeed Insights, Core Web Vitals, Website-Geschwindigkeit, SEO, Ägypten
alt: Sprinter mit gelber Kappe stößt sich an der Startlinie einer roten Laufbahn ab
caption: Entscheidend ist, wie schnell echte Besucher die Seite sehen, nicht ein Laborwert aus einem einzigen Probelauf.
stats: 2,5 s|LCP-Grenze für einen guten Seitenaufbau; 200 ms|INP-Grenze für eine gute Reaktion auf einen Tipp; 0,1|CLS-Grenze für eine Seite, die stillhält
---

Die große Zahl oben in PageSpeed Insights ist ein Laborwert: ein simulierter
Aufruf Ihrer Seite auf einem Mittelklasse-Smartphone, bewertet von 0 bis 100.
Was Google tatsächlich zu bestehen empfiehlt, steht in einem anderen Teil
desselben Berichts: die Core Web Vitals, gemessen bei echten Chrome-Besuchern
in den letzten 28 Tagen. Eine Seite kann im Labor 60 Punkte erreichen und
trotzdem bestehen, oder 95 erreichen und durchfallen.

Zuletzt geprüft: 6. November 2026

## Labordaten und Felddaten sind zwei verschiedene Tests

Jeder PageSpeed-Insights-Bericht hat zwei Teile, und die meisten
Missverständnisse entstehen, wenn man sie verwechselt.

| | Felddaten (echte Nutzer) | Labordaten (der Wert von 0 bis 100) |
|---|---|---|
| Quelle | Chrome User Experience Report (CrUX): echte Besucher | Lighthouse: ein simulierter Seitenaufruf |
| Zeitraum | Die letzten 28 Tage | Der Moment, in dem Sie auf „Analysieren“ klicken |
| Gerät | Die echten Smartphones und Netze Ihrer Besucher | Ein emuliertes Mittelklasse-Smartphone in einem gedrosselten Mobilfunknetz |
| Nützlich für | Die Frage, ob Menschen tatsächlich ein Problem haben | Die Ursache einer langsamen Seite finden und eine Korrektur testen |
| Angezeigt, wenn | Ihre Seite oder Website genug Chrome-Besuche hat | Immer |

Hat eine Seite zu wenige Besuche, zeigt PageSpeed Insights stattdessen Daten
für die gesamte Website (den Ursprung). Eine neue oder kleine Website hat
manchmal gar keine Felddaten, dann ist der Laborwert das Einzige, was Sie sehen.
Für die Fehlersuche ist das in Ordnung, aber es ist ein Testergebnis, keine
Messung Ihrer Kunden.

## Die drei Core Web Vitals und ihre Grenzwerte

Die Core Web Vitals von Google sind drei Messwerte. Jeder wird am 75. Perzentil
bewertet: Drei von vier Besuchen müssen den Grenzwert erreichen
oder unterschreiten, damit die Seite als „gut“ gilt.

| Messwert | Was er misst | Gut | Verbesserungsbedürftig | Schlecht |
|---|---|---|---|---|
| **LCP** (Largest Contentful Paint) | Wann das größte Bild oder der größte Textblock erscheint | Bis 2,5 s | 2,5–4 s | Über 4 s |
| **INP** (Interaction to Next Paint) | Wie schnell die Seite auf Tippen und Klicken reagiert | Bis 200 ms | 200–500 ms | Über 500 ms |
| **CLS** (Cumulative Layout Shift) | Wie stark die Seite beim Laden springt | Bis 0,1 | 0,1–0,25 | Über 0,25 |

INP lässt sich nur mit echten Menschen messen, die tippen, und erscheint daher
nur in den Felddaten. Der Laborbericht nutzt stattdessen die Total Blocking
Time (TBT): die Zeit, in der der Browser so mit Skripten beschäftigt ist, dass
er nicht reagieren kann.

Google empfiehlt gute Core Web Vitals „dringend“ und schreibt, dass sie dem
entsprechen, was die zentralen Ranking-Systeme belohnen wollen. Ein Ranking
verspricht Google dafür nicht. Eine schnelle Seite mit dünnem Inhalt überholt
keine nützliche Seite, wie wir in
[So werden Sie bei Google, ChatGPT und Gemini gefunden](/blog/get-found-on-google-chatgpt-gemini)
erklären.

## Wie der Wert von 0 bis 100 berechnet wird

Der Laborwert ist ein gewichteter Durchschnitt aus fünf Lighthouse-Messwerten:

| Labormesswert | Gewichtung |
|---|---|
| Total Blocking Time | 30 % |
| Largest Contentful Paint | 25 % |
| Cumulative Layout Shift | 25 % |
| First Contentful Paint | 10 % |
| Speed Index | 10 % |

Werte von 90 bis 100 sind grün („gut“), 50 bis 89 orange und 0 bis 49 rot. Weil
TBT am stärksten gewichtet ist, kostet schweres JavaScript wie Chat-Widgets,
Tracking-Tags und Slider meist mehr Punkte als ein etwas zu großes Bild.

## Warum sich der Wert bei jedem Test ändert

Testen Sie dieselbe Seite dreimal, erhalten Sie womöglich drei verschiedene
Werte. Laut Googles eigener Dokumentation liegt der Großteil dieser Schwankung
nicht an Lighthouse, sondern an Netzwerk-Routing, Anzeigen und A/B-Tests, die
sich zwischen den Aufrufen ändern, am Rechner, der den Test ausführt, an
Browser-Erweiterungen und an Antivirensoftware. Betrachten Sie den Wert als
Spanne: Führen Sie den Test drei- bis fünfmal aus, nehmen Sie das mittlere
Ergebnis, und beurteilen Sie eine Korrektur nie nach einem einzigen Lauf.

Felddaten verhalten sich umgekehrt: Sie bewegen sich langsam. Da sie die
letzten 28 Tage abdecken, mischt sich eine heute veröffentlichte Korrektur mit
drei Wochen Besuchen auf der alten Seite. Rechnen Sie mit einer allmählichen
Veränderung und geben Sie einer Korrektur etwa vier Wochen, bevor Sie
entscheiden, ob sie gewirkt hat. Zeigt Ihnen jemand am selben Nachmittag ein
besseres Ergebnis, ist es ein Laborergebnis.

## Was die Werte auf unserer eigenen Website verbessert hat

Als wir an kftechsolutions.dev gearbeitet haben, wies der Bericht auf vier Änderungen hin, für die kein stärkerer Server nötig war:

- **Das Pop-up war zum größten Element geworden.** LCP misst das größte Element auf dem Bildschirm, und ein Pop-up war größer als die eigentliche Überschrift der Seite. LCP maß also das Pop-up, deshalb haben wir geändert, wie es geladen wird.
- **Tracking-Pixel laden jetzt nach der ersten Interaktion.** Analyse- und Werbe-Tags konkurrierten während des Ladens mit der Seite um die Aufmerksamkeit des Browsers. Sie erst nach der ersten Interaktion des Besuchers zu starten, nahm sie aus dem Ladezeitraum heraus.
- **Bildflächen sind reserviert.** Jedes Bild hat vorab eine feste Breite und Höhe, sodass der Text nicht nach unten springt, wenn das Foto ankommt. Das ist die klassische CLS-Korrektur.
- **Die arabische Schrift wird vorab geladen.** Arabische Seiten nutzen eine eigene Schriftdatei. Lädt sie früh, erscheint der Text nicht erst in einer Schrift und wechselt dann in eine andere, was das Layout verschiebt und den Haupttext verzögert.

Nichts davon ist exotisch. Es sind genau die Korrekturen, auf die der Abschnitt
zur Diagnose von Leistungsproblemen im Bericht hinweist, wenn man ihn liest
statt nur auf den Wert zu schauen.

## So lesen Sie einen Bericht, bevor Sie für eine Korrektur zahlen

Bevor Sie jemanden bezahlen, der Sie „auf 100 bringt“, gehen Sie den Bericht selbst durch:

1. **Beginnen Sie mit dem Tab „Mobilgeräte“.** Er ist der strengere der beiden Tests, und eine Seite, die dort gut abschneidet, schneidet auch auf dem Desktop gut ab.
2. **Schauen Sie zuerst auf die Felddaten.** Steht bei den Core Web Vitals „Bestanden“, geht es Ihren echten Besuchern gut, und der Laborwert ist ein Diagnosewerkzeug, kein Notfall.
3. **Finden Sie den Messwert, der durchfällt.** Ein rotes LCP, INP oder CLS zeigt die Art des Problems: langsamer Hauptinhalt, langsame Reaktion oder eine springende Seite.
4. **Prüfen Sie, welches Element LCP misst.** Der Bericht nennt es. Ist es ein Pop-up, ein Cookie-Banner oder eine versteckte Folie, liegt die Lösung im Design, nicht beim Server.
5. **Lesen Sie die drei wichtigsten Diagnosen.** Sie nennen meist konkrete Skripte, Bilder oder Schriften. Selbst eingebundene Drittanbieter-Skripte stehen oft weit oben.
6. **Fragen Sie, was eine Korrektur an den Felddaten ändert.** Ein guter Entwickler spricht über LCP, INP und CLS bei echten Besuchern. Wer nur eine Zahl verspricht, verkauft die Zahl.

Ein Wert von 100 lohnt die Jagd selten. Eine Shopseite mit Bezahlknopf und
WhatsApp-Widget erreicht ihn vielleicht nie und braucht ihn auch nicht.
Entscheidend ist, dass die Seite schnell erscheint, auf Tippen reagiert und
beim Lesen nicht springt. Bei Seiten für Werbekampagnen hängt das direkt mit
den Abschlüssen zusammen; siehe
[was eine Landingpage behebt, wenn Anzeigen Klicks, aber keine Verkäufe bringen](/blog/landing-page-for-ads-egypt).

## Was KF Tech Solutions hier tut

Wir bauen Websites von Anfang an mit diesen Grundlagen: reservierte
Bildflächen, optimierte Bilder, bewusst geladene Schriften für Arabisch und
Englisch und Drittanbieter-Skripte außerhalb des Ladepfads. Unser
[Angebot für Webentwicklung](/services/web-development) umfasst neue Websites,
und wir prüfen auch bestehende und sagen Ihnen, welche Korrekturen sich lohnen,
bevor irgendeine Arbeit beginnt. Zweisprachige Websites haben eigene
Fallstricke, die wir in
[Eine Website auf Arabisch und Englisch bauen](/blog/arabic-english-website-rtl)
behandeln.

## Häufige Fragen

### Schadet ein niedriger PageSpeed-Wert meinem Google-Ranking?

Google verweist auf die Core Web Vitals echter Besucher, nicht auf den
Laborwert. Ein niedriger Laborwert bei bestandenen Felddaten ist kein
Ranking-Problem. Relevanz und nützliche Inhalte stehen weiterhin an erster
Stelle.

### Warum ist mein Mobilwert so viel niedriger als der Desktop-Wert?

Der Mobiltest emuliert ein Mittelklasse-Smartphone in einem langsamen
Mobilfunknetz, der Desktop-Test nutzt eine schnelle kabelgebundene Verbindung.
Dieselbe Seite hat im Mobiltest einfach weniger Rechenleistung und Bandbreite.

### Der Bericht zeigt keine Felddaten. Was nun?

Ihre Seite und Website haben noch nicht genug Chrome-Besuche für den Bericht.
Nutzen Sie die Laborergebnisse zur Fehlersuche und prüfen Sie den
Core-Web-Vitals-Bericht in der Google Search Console, sobald der Traffic wächst.

### Behebt ein neuer Hosting-Tarif meinen Wert?

Nur wenn der Server der langsame Teil ist, was der Bericht als langsame erste
Serverantwort zeigt. Meist liegen die Kosten in Skripten, Bildern und Schriften
auf der Seite, und ein schnellerer Hoster ändert daran nichts.

### Wie oft sollte ich prüfen?

Nach jeder größeren Änderung an der Website, etwa einem neuen Widget,
Tracking-Tag oder Theme. Die Geschwindigkeit sinkt oft, wenn ein neues Werkzeug
hinzukommt. Unser Artikel über
[Wartungspläne für Software](/blog/software-maintenance-plan) erklärt, wie Sie
das dauerhaft im Griff behalten.

Wenn Sie vor einer bezahlten Korrektur eine zweite Meinung zu einem Bericht
möchten, [buchen Sie ein kostenloses Gespräch](/book) oder
[senden Sie uns den Link zur Seite](/contact), und wir sagen Ihnen, was sich lohnt.

## Quellen

- [About PageSpeed Insights (Google for Developers)](https://developers.google.com/speed/docs/insights/v5/about)
- [Web Vitals (web.dev)](https://web.dev/articles/vitals)
- [Lighthouse performance scoring (Chrome for Developers)](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)
- [Understanding Core Web Vitals and Google search results (Google Search Central)](https://developers.google.com/search/docs/appearance/core-web-vitals)
