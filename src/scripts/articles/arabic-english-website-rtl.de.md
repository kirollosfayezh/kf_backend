---
title: Arabisch-englische Websites: die RTL-Details, an denen es scheitert
summary: Eigene URLs, gespiegelte Layouts, arabische Schriften, Zahlen, Telefonfelder und echte arabische Texte: was eine zweisprachige Website ausmacht.
tags: zweisprachige Website, arabische Website, RTL, hreflang, Ägypten, Golfstaaten
alt: Zweisprachiges Straßenschild auf Arabisch und Englisch nach Al Raffa und Al Satwa in Dubai
caption: Zwei Schriften, zwei Leserichtungen, ein Schild: Eine zweisprachige Website muss dieselben Details beherrschen.
stats: 1|URL pro Sprachversion einer Seite; 3|Wege, hreflang anzugeben: HTML, HTTP-Header, Sitemap; 0|automatische Weiterleitungen anhand einer vermuteten Sprache
---

Eine zweisprachige arabisch-englische Website funktioniert, wenn jede Sprache eine eigene URL hat, die arabischen Seiten im Markup von rechts nach links gesetzt sind statt mit ein paar CSS-Regeln umgedreht zu werden, und die arabischen Texte auf Arabisch geschrieben statt Zeile für Zeile übersetzt sind. Die meisten fehlerhaften zweisprachigen Websites erledigen die Übersetzung und übersehen alles drumherum: Pfeile in die falsche Richtung, verdrehte Telefonnummern, eine fehlende Schrift und gedrängte Zeilenabstände.

Einige dieser Erfahrungen stammen aus unserer eigenen Website in vier Sprachen.

## Geben Sie jeder Sprache eine eigene URL

Google empfiehlt für jede Sprachversion einer Seite eine eigene URL, statt die Sprache auf derselben Adresse über Cookies oder Browsereinstellungen zu wechseln.

Ein einfaches Muster ist ein Sprachpräfix, etwa /ar/services für Arabisch und /services für Englisch. Dann gilt:

- Verknüpfen Sie jede Sprachversion per hreflang mit allen anderen, und lassen Sie jede Seite auch sich selbst aufführen. Verweist Seite A auf Seite B, aber B nicht zurück, kann Google die Tags ignorieren.
- Reine Sprachcodes wie „ar“ und „en“ sind gültig; ein Ländercode allein ist es nicht.
- Ergänzen Sie x-default für Besucher, deren Sprache zu keiner Ihrer Versionen passt.
- Leiten Sie Besucher nicht automatisch auf eine andere Sprache um. Google rät davon ab; bieten Sie stattdessen einen gut sichtbaren Sprachwechsler an.

Ein verbreitetes Missverständnis: Google nutzt weder hreflang noch das lang-Attribut, um die Sprache einer Seite zu erkennen. Google liest den Inhalt. Hreflang sagt Google nur, welche Seiten Versionen voneinander sind, deshalb muss die arabische Seite vollständig auf Arabisch sein; Google warnt, dass es eine schlechte Nutzererfahrung ergibt, wenn nur Menü und Fußzeile übersetzt werden. Für das Gesamtbild lesen Sie [wie Sie bei Google, ChatGPT, Gemini und Claude gefunden werden](/blog/get-found-on-google-chatgpt-gemini).

## Legen Sie die Richtung im Markup fest, nicht nur in CSS

Jede arabische Seite sollte lang="ar" und dir="rtl" am html-Element angeben. Das W3C empfiehlt, die Grundrichtung im Markup statt in CSS festzulegen, damit sie auch dann stimmt, wenn das Stylesheet nicht lädt.

Bauen Sie das Layout dann mit logischen Eigenschaften wie margin-inline-start und text-align: start statt mit links und rechts. So bedient ein einziges Stylesheet beide Richtungen, und das Layout spiegelt sich von selbst. Werte mit links und rechts brauchen für jede Regel eine RTL-Überschreibung, und diese Überschreibungen laufen mit der Zeit auseinander.

## Spiegeln Sie das Layout, aber nicht alles

Das Spiegeln kehrt die Leserichtung um, doch nicht jedes Element sollte sich umdrehen.

| Element | Auf der arabischen Seite |
|---|---|
| Navigation, Spalten, Reihenfolge der Karten | Spiegeln |
| Pfeile für „Weiter“ und „Zurück“ | Spiegeln |
| Slider, Karussells, Schrittanzeigen | Spiegeln |
| Logos, Fotos, Produktbilder | Unverändert lassen |
| Telefonnummern, E-Mail-Adressen, Code | Von links nach rechts lassen |

Pfeile werden am häufigsten übersehen. Ein Pfeil, der als Zeichen getippt oder als Bild gespeichert ist, zeigt auf Arabisch in die falsche Richtung, wenn ihn nicht jemand auf jeder Seite korrigiert. Auf unserer eigenen Website ist der Pfeil ein einziges gestyltes Element, das das Stylesheet in RTL spiegelt, sodass keine Seite daran denken muss. Schreiben Sie im Sprachwechsler jeden Sprachnamen in der jeweiligen Sprache, etwa „العربية“ und „English“.

## Laden Sie die arabische Schrift richtig

Viele Webschriften enthalten keine arabischen Buchstaben. Der Browser greift dann auf eine Systemschrift zurück, die sich unter Windows, Mac, Android und iPhone unterscheidet.

- Wählen Sie eine Schriftfamilie, die mit Arabisch entworfen wurde, oder kombinieren Sie Ihre lateinische Schrift mit einer arabischen von ähnlichem Gewicht und Charakter.
- Laden Sie die arabische Schrift nur auf arabischen Seiten, damit englische Besucher sie nicht herunterladen.
- Wenn Sie die Schrift vorladen, muss die Preload-URL exakt der URL in der font-face-Regel entsprechen, sonst lädt der Browser die Datei zweimal.
- Geben Sie Arabisch mehr Zeilenhöhe als Englisch. Die arabische Schrift hat Punkte und Zeichen über und unter den Buchstaben, und englische Abstände lassen arabische Absätze gedrängt wirken.
- Ersetzen Sie auf arabischen Seiten rein lateinische Zier- oder Monospace-Stile durch die arabische Textschrift.

Auf unserer eigenen Website hieß das: eine arabische Schrift, die nur auf arabischen Seiten lädt, großzügigere Zeilenabstände für Arabisch und die Textschrift anstelle von Monospace-Stilen. Schriften beeinflussen auch die Geschwindigkeitswerte, weil ein später Schriftwechsel Text auf dem Bildschirm verschiebt; lesen Sie dazu [was Ihr PageSpeed-Insights-Wert wirklich bedeutet](/blog/pagespeed-insights-score-explained).

## Zahlen, Datumsangaben und Telefonfelder

- **Ziffern.** Arabischer Text kann westliche Ziffern (1, 2, 3) oder arabisch-indische Ziffern (١، ٢، ٣) verwenden. Wählen Sie eine Variante und nutzen Sie sie überall, von den Seiten bis zu Rechnungen und E-Mails.
- **Datumsangaben.** Schreiben Sie den Monat als Wort statt eines mehrdeutigen 05/06, und formatieren Sie Daten mit den eingebauten Werkzeugen des Browsers (Intl.DateTimeFormat) für das richtige Gebietsschema.
- **Gemischter Text.** Ein englischer Produktname in einem arabischen Satz kann Satzzeichen an die falsche Stelle schieben. Setzen Sie Namen und Benutzereingaben in ein bdi-Element oder versehen Sie sie mit dir="auto", wie das W3C vorschlägt.
- **Telefon- und E-Mail-Felder.** Setzen Sie dir="ltr", damit bei +20 100 000 0000 das Pluszeichen nicht am falschen Ende erscheint.
- **Freitextfelder.** Verwenden Sie dir="auto", damit sich jede Eingabe nach ihrem ersten Buchstaben ausrichtet; das W3C weist darauf hin, dass dies hilfreich, aber nicht narrensicher ist.
- **Arabische Tastaturen.** Akzeptieren Sie arabisch-indische Ziffern und wandeln Sie sie vor der Prüfung um, sonst wird eine korrekte Telefonnummer abgelehnt.
- **Meldungen.** Übersetzen Sie Beschriftungen, Platzhalter, Fehlermeldungen und Bestätigungs-E-Mails. Eine englische Fehlermeldung unter einem arabischen Formular ist ein häufiger Fehler.

## Schreiben Sie auf Arabisch, statt Englisch zu übersetzen

Übersetztes Englisch liest sich wie eine Übersetzung. Für Unternehmenswebsites ist formelles modernes Hocharabisch die sichere Wahl, geschrieben oder zumindest geprüft von jemandem, der den Markt kennt.

- Schreiben Sie wichtige Überschriften und Handlungsaufforderungen zuerst auf Arabisch und prüfen Sie dann, ob beide Versionen dasselbe sagen.
- Beginnen Sie eine arabische Überschrift oder einen Seitentitel nicht mit einem lateinischen Wort; das verändert die Darstellung der Zeile und kann in Suchergebnissen verdreht wirken.
- Legen Sie einmal fest, ob jeder Markenname in lateinischen oder arabischen Buchstaben geschrieben wird, und bleiben Sie dabei.
- Lassen Sie Schaltflächen und Menüs mitwachsen, denn arabischer Text ist nicht so lang wie englischer.
- Übersetzen Sie Seitentitel, Meta-Beschreibungen und Alt-Texte von Bildern, denn sie sehen Menschen in den Suchergebnissen.

Testen Sie vor dem Start jede arabische Seite auf einem echten Smartphone, nicht nur im Desktop-Browser.

## Was KF Tech Solutions hier macht

Wir gestalten und entwickeln Websites auf Arabisch und Englisch, mit einem Rechts-nach-links-Layout, das ab dem ersten Entwurf geplant ist, eigenen Seiten pro Sprache, damit beide Versionen in der Suche erscheinen, und einem Dashboard, in dem Sie die Inhalte selbst bearbeiten. Unsere eigene Website läuft auf Englisch, Arabisch, Deutsch und Französisch. Lernen Sie unseren [Service für Webentwicklung](/services/web-development) kennen, und für die Budgetplanung lesen Sie, [was eine Firmenwebsite in Ägypten tatsächlich kostet](/blog/company-website-cost-egypt).

## Häufige Fragen

### Sollten Arabisch und Englisch auf getrennten URLs liegen?

Ja. Google empfiehlt für jede Sprachversion eine eigene URL, verknüpft per hreflang, statt die Sprache über Cookies oder Browsereinstellungen zu wechseln.

### Teilt hreflang Google mit, dass meine Seite auf Arabisch ist?

Nein. Google erkennt die Sprache am Inhalt. Hreflang teilt Google mit, welche Seiten Versionen voneinander sind, damit jeder Suchende die passende sieht.

### Sollte die Website für Besucher aus arabischsprachigen Ländern automatisch auf Arabisch umschalten?

Nein. Google rät von automatischen Weiterleitungen zwischen Sprachversionen ab. Bieten Sie einen klaren Sprachwechsler an und lassen Sie jeden Besucher auf der Version, die er wählt.

### Reicht es, das englische Design per CSS zu spiegeln?

Das Spiegeln ist nur der Anfang. Sie brauchen außerdem die Richtung im Markup, gespiegelte Pfeile, ungespiegelte Bilder, eine arabische Schrift, passende Zeilenabstände und Formulare, die Telefonnummern korrekt verarbeiten.

### Westliche oder arabisch-indische Ziffern?

Beides funktioniert. Entscheidend ist, eine Variante einheitlich auf der Website, bei Preisen, Rechnungen und Nachrichten zu verwenden.

Planen Sie eine zweisprachige Website? [Buchen Sie ein kostenloses Gespräch](/book) oder [kontaktieren Sie uns](/contact), und wir sagen Ihnen, was die arabische Version braucht.

## Quellen

- [Google Search Central: Lokalisierte Versionen einer Seite für Google angeben](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google Search Central: Mehrsprachige und länderspezifische Websites verwalten](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- [W3C: Structural markup and right-to-left text in HTML](https://www.w3.org/International/questions/qa-html-dir)
- [MDN: Intl.DateTimeFormat](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
