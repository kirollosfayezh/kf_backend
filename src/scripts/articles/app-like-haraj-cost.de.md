---
title: Eine App wie Haraj entwickeln: Umfang, Phasen und Kosten
summary: Was eine Kleinanzeigen-App wie Haraj braucht: Anzeigen, Suche, Chat, Moderation, Identitätsprüfung und Einnahmen, und was MVP und Vollversion trennt.
tags: Kleinanzeigen-App, Marktplatz-App, App-Entwicklungskosten, MVP, Saudi-Arabien
alt: Käufer beugen sich auf einem Freiluftmarkt über Tische mit gebrauchten Haushaltswaren
caption: Eine Kleinanzeigen-App verlagert dieses Stöbern ins Netz – Suche, Chat und Moderation tragen dann das gesamte Erlebnis.
stats: 4|Funktionen, auf die kein Kleinanzeigen-MVP verzichten kann: Anzeigen, Suche, Chat, Meldungen; 72|Stunden, um SDAIA eine Datenpanne nach dem PDPL zu melden; 96,1 %|der Suchanfragen in Saudi-Arabien liefen im Oktober 2026 über Google
---

Eine App wie Haraj ist ein Kleinanzeigen-Marktplatz: Verkäufer stellen Anzeigen ein, Käufer suchen und schreiben ihnen, und die Plattform hält Betrug fern und verdient an hervorgehobenen Anzeigen oder Provisionen. Die Kosten hängen weit weniger von den Bildschirmen ab als von Moderation, Chat, Identitätsprüfung und Zahlungen. Deshalb ist der sinnvolle Weg ein fokussiertes MVP für eine Stadt oder eine Kategorie und danach die Vollversion, sobald echte Nutzer zeigen, was sie brauchen. Haraj dient hier nur als bekannte Referenz für diese Art von Produkt, nicht als Beschreibung seiner internen Funktionsweise.

Zuletzt geprüft: 6. November 2026

## Was Sie tatsächlich bauen

Eine Kleinanzeigen-App bedient drei Gruppen gleichzeitig, und jede braucht eigene Werkzeuge:

- **Verkäufer** stellen eine Anzeige mit Fotos, Preis, Kategorie und Ort ein und bearbeiten, verlängern oder schließen sie anschließend.
- **Käufer** stöbern, suchen, filtern, merken sich Anzeigen und kontaktieren den Verkäufer.
- **Ihr Team** prüft Meldungen, entfernt problematische Anzeigen, sperrt Konten und verwaltet Kategorien, Gebühren und Aktionen über ein Dashboard.

Die meisten ersten Angebote decken die ersten beiden Gruppen ab und vergessen die dritte. Über die Verwaltungsseite wird ein Marktplatz sauber gehalten, und sie ist ein großer Teil der eigentlichen Arbeit.

## Die Kernfunktionen: MVP oder Vollversion

| Funktion | MVP | Vollversion |
|---|---|---|
| Anzeigen | Fotos, Titel, Preis, Kategorie, Stadt | Kategoriespezifische Felder (Autos, Immobilien, Handys), Video, Entwürfe, automatischer Ablauf und Verlängerung |
| Suche | Stichwort, Filter nach Kategorie und Stadt | Gespeicherte Suchen, Benachrichtigungen bei neuen Treffern, Sortierung, Kartenansicht |
| Kontakt | In-App-Chat mit Text und Fotos | Chat mit Sprachnachrichten, Preisangeboten, Lesebestätigungen, Blockieren und Spamfiltern |
| Konten | Telefonnummer mit Einmalcode | Verifizierungsabzeichen, Verkäuferbewertungen, Geschäftskonten |
| Moderation | Melde-Button und Prüfwarteschlange | Automatische Prüfungen, Listen gesperrter Wörter, Duplikaterkennung, Moderatorenrollen |
| Einnahmen | Eine bezahlte Option, etwa hervorgehobene Anzeigen | Mehrere Pakete, Provisionen, Abonnements, Rechnungen |
| Plattformen | Eine App plus einfache Webseite je Anzeige | iOS, Android und vollständige Website |
| Sprachen | Arabisch | Arabisch und Englisch |

Die MVP-Spalte genügt, um herauszufinden, ob Verkäufer in Ihrem Zielmarkt inserieren und Käufer antworten. Alles in der rechten Spalte lohnt sich erst, wenn Sie sehen, wo Nutzer hängen bleiben. Diesen Ansatz erklären wir ausführlicher in [Eine App-Idee? Fangen Sie klein mit einem MVP an](/blog/mobile-app-mvp-egypt).

### Warum Anzeigen Webseiten brauchen, nicht nur App-Bildschirme

Google wickelte im Oktober 2026 96,1 % der Suchanfragen in Saudi-Arabien ab. Viele suchen zuerst nach dem Artikel selbst, etwa einem Automodell in einer bestimmten Stadt, bevor sie an eine bestimmte App denken. Wenn jede Anzeige zusätzlich als schnelle, indexierbare Webseite existiert, können Ihre Anzeigen in diesen Ergebnissen erscheinen und Käufer bringen, die die App noch nicht installiert haben. Das ist ein Grund, warum ein Marktplatz neben der mobilen App meist auch eine Website braucht.

## Vertrauen und Sicherheit: Moderation, Betrug und Identität

Ein Marktplatz steht und fällt damit, ob Käufer dem vertrauen, was sie sehen. Dieser Teil verdient vom ersten Tag an Budget, auch im MVP.

### Moderation

Mindestens brauchen Sie einen Melde-Button bei jeder Anzeige und in jedem Chat, eine Warteschlange, in der Ihr Team Meldungen prüft, und die Möglichkeit, eine Anzeige mit einem Schritt auszublenden oder ein Konto zu sperren. Später können Regeln hinzukommen, die Anzeigen automatisch zur Prüfung zurückhalten, etwa wenn ein Preis weit unter dem Üblichen der Kategorie liegt, eine Telefonnummer in der Beschreibung steht oder dieselben Fotos von mehreren Konten eingestellt werden.

### Betrugsabwehr

Typische Muster bei Kleinanzeigen sind gefälschte Anzeigen mit gestohlenen Fotos, Anzahlungsforderungen vor einer Besichtigung und Versuche, das Gespräch sofort auf einen anderen Kanal zu verlagern. Die App kann helfen, indem sie:

- Den Kontakt so lange wie möglich im In-App-Chat hält, damit Meldungen den vollständigen Verlauf enthalten.
- Sicherheitshinweise im Chat genau dann zeigt, wenn es darauf ankommt, etwa wenn eine Zahlung erwähnt wird.
- Begrenzt, wie viele Anzeigen ein neues Konto in den ersten Tagen einstellen kann.
- Geräte- und Kontoverlauf protokolliert, damit Ihr Team Wiederholungstäter erkennen kann.

### Optionen für die Identitätsprüfung

Die Optionen reichen von leicht bis streng:

1. **Telefonnummer mit Einmalcode.** Das übliche Minimum und für ein MVP ausreichend.
2. **Manuelle Prüfung von Geschäftsunterlagen** für Händler und Unternehmen, die ein Verifizierungsabzeichen möchten.
3. **Nationale digitale Identität.** Nafath, das nationale Single Sign-on Saudi-Arabiens, ist mit mehr als 530 staatlichen und privaten Plattformen verbunden. Ob und zu welchen Bedingungen Ihre App angebunden werden kann, sollten Sie klären, bevor Sie einen Release darauf aufbauen.

Strengere Prüfungen verringern Betrug, verlangsamen aber die Registrierung. Viele Marktplätze halten die Registrierung schlank und verlangen eine strengere Prüfung nur von Verkäufern, die ein Abzeichen oder ein höheres Anzeigenlimit wünschen.

## Wie eine solche App Geld verdient

Kleinanzeigen-Apps kombinieren meist einige dieser Modelle:

- **Hervorgehobene oder beworbene Anzeigen**, die für einen bestimmten Zeitraum oben in einer Kategorie oder Suche erscheinen.
- **Kostenpflichtige Kategorien oder Einstellgebühren** für hochwertige Artikel wie Autos oder Immobilien.
- **Provisionen** auf abgeschlossene Verkäufe, entweder über In-App-Zahlung eingezogen oder vom Verkäufer gemeldet.
- **Abonnements** für Händler und Unternehmen, die in großer Zahl inserieren.
- **Werbeflächen** für Marken, die eine Kategorie erreichen wollen.

Um in Saudi-Arabien Zahlungen einzuziehen, arbeiten Sie mit einem Zahlungsanbieter. Anbieter wie Tap, PayTabs und Telr nennen Unterstützung für mada und Apple Pay, und die saudische Zentralbank SAMA hat Tamara und Tabby für „Jetzt kaufen, später zahlen“ lizenziert. Bevor Sie bezahlte Hervorhebungen in der iOS- oder Android-App planen, prüfen Sie die aktuellen Regeln von Apple und Google zu Zahlungen für digitale Funktionen, denn sie bestimmen, welche Zahlungswege die App selbst nutzen darf. Unser Leitfaden zu [Zahlungsanbietern in Saudi-Arabien](/blog/payment-gateways-saudi-arabia) vergleicht die wichtigsten Optionen.

Provisionsmodelle sind schwieriger, als sie aussehen. Findet der Verkauf persönlich statt, kennt die Plattform den Preis nur, wenn der Verkäufer ihn meldet. Planen Sie deshalb von Anfang an, wie Sie abrechnen, erinnern und durchsetzen.

## Daten, Hosting und Recht

Eine Kleinanzeigen-App speichert Telefonnummern, Chats, Standorte und manchmal Ausweisdokumente. Das sind personenbezogene Daten, und das saudische Datenschutzgesetz (PDPL) gilt seit dem 14. September 2023; die Übergangsfrist endete am 14. September 2024. Zuständig ist die Behörde SDAIA. Zu den Pflichten gehört, eine Datenpanne innerhalb von 72 Stunden an SDAIA zu melden, und die Bußgelder reichen bis zu 5 Millionen SAR. Juristische Fachbeiträge weisen darauf hin, dass das Gesetz auch für ausländische Anbieter gilt, die Personen im Königreich bedienen.

Zum Hosting: SDAIA hat vom 6. Oktober bis 5. November 2026 Änderungsentwürfe zum PDPL zur Konsultation gestellt, darunter den Vorschlag, dass Verantwortliche personenbezogene Daten im Königreich speichern müssen. Das ist noch ein Entwurf, kein geltendes Recht. Wenn Sie trotzdem lokal hosten möchten: Google Cloud hat eine Region in Dammam, und AWS gibt an, dass seine erste saudische Region im Dezember 2026 starten soll.

Wenn Ihre Plattform Waren oder Dienstleistungen verkauft oder dafür Zahlungen annimmt, lesen Sie auch das E-Commerce-Gesetz (Königlicher Erlass M/126). Es verpflichtet einen Shop, Namen, Kontaktdaten und Handelsregistereintrag offenzulegen, und sieht Geldbußen bis zu 1 Million SAR vor. Lassen Sie anwaltlich prüfen, ob und wie es auf Ihr Modell anwendbar ist. Dies ist eine allgemeine Information, keine Rechtsberatung.

## Vom MVP zur Vollversion: Phasen und Kostentreiber

Ein realistischer Plan verläuft in Phasen:

1. **Analyse.** Eine Stadt oder eine Kategorie wählen, Anzeigenfelder, Moderationsregeln und das eine Erlösmodell festlegen, das Sie testen.
2. **Design.** Arabisch-zuerst-Bildschirme für Inserieren, Suchen und Chatten sowie das Admin-Dashboard, geprüft, bevor Code geschrieben wird.
3. **MVP-Entwicklung.** Eine App, Webseiten für Anzeigen, Chat, Meldungen und die Prüfwarteschlange.
4. **Testlauf.** Die Kategorie mit echten Anzeigen füllen, Meldungen beobachten, beheben, was das Inserieren bremst.
5. **Vollversion.** Zweite Plattform, reichere Kategorien, Verifizierung, weitere Erlösoptionen und automatisierte Moderation.

Die wichtigsten Kostentreiber sind die Zahl der Plattformen, der Funktionsumfang des Chats, wie viele Kategorien eigene Felder brauchen, wie stark die Moderation automatisiert ist, welche Identitäts- und Zahlungsanbindungen Sie hinzufügen und ob Sie Arabisch und Englisch brauchen. Ein kleines MVP und eine vollständige Plattform in der Größe von Haraj unterscheiden sich im Aufwand um ein Vielfaches. Deshalb sagt ein Einheitspreis für „eine App wie Haraj“ wenig, solange der Umfang nicht schriftlich festgelegt ist. Typische Spannen finden Sie in [Was eine App in Saudi-Arabien kostet](/blog/app-development-cost-saudi-arabia) und [Was eine mobile App in Ägypten kostet](/blog/app-development-cost-egypt).

Projekte beginnen ab 200 $ (etwa 750 SAR / 735 AED); der Endpreis hängt vom Umfang ab, mit einem festen schriftlichen Angebot nach einem kostenlosen Gespräch.

## Wie KF Tech Solutions hilft

Wir gestalten und entwickeln [mobile Apps](/services/mobile-applications) zusammen mit den Web-Dashboards und Websites dahinter, auf Arabisch und Englisch. Bei einer Kleinanzeigen-Idee schreiben wir in der Regel zuerst gemeinsam mit Ihnen den MVP-Umfang, damit die erste Version einen Markt mit den entscheidenden Funktionen testet und der Rest auf echte Nutzung wartet. Wir arbeiten mit Unternehmen in Ägypten und am Golf, und Kairo arbeitet von Ende April bis Ende Oktober zur Zeit von Riad und im Winter eine Stunde dahinter. Mehr zu unserer Zusammenarbeit mit saudischen Kunden finden Sie auf unserer [Seite zu Saudi-Arabien](/saudi-arabia).

## Häufige Fragen

### Darf ich Design und Funktionen von Haraj kopieren?

Sie können ein Produkt derselben Art bauen, aber nicht Marke, Design oder Inhalte eines anderen Unternehmens kopieren. Ein klarer Umfang, der auf Ihrem eigenen Markt und Ihrer Kategorie beruht, ist zudem nützlicher als eine Kopie, denn Ihre Nutzer und Ihr Erlösmodell werden sich unterscheiden.

### Sollte das MVP eine App oder eine Website sein?

Viele Marktplätze starten mit einer mobilen App plus Webseiten für jede Anzeige, damit Anzeigen bei Google gefunden und als Link geteilt werden können. Eine vollständige Website und die zweite App-Plattform können folgen, sobald das MVP Zuspruch findet.

### Brauche ich vom ersten Tag an eine Identitätsprüfung?

Meist nicht. Eine Telefonnummer mit Einmalcode, ein Melde-Button und eine aktiv betreute Prüfwarteschlange decken die meisten frühen Risiken ab. Ergänzen Sie Dokumentenprüfung oder nationale digitale Identität, wenn Betrugsmuster oder gewerbliche Verkäufer dies rechtfertigen.

### Wie lange dauert ein MVP?

Das hängt vom Umfang ab: Zahl der Kategorien, Chatfunktionen und Admin-Werkzeuge. Nach einem Gespräch zur Klärung des Umfangs erhalten Sie einen schriftlichen Plan mit Phasen und Terminen statt einer Schätzung ins Blaue.

### Muss ich die Daten in Saudi-Arabien hosten?

Das geltende PDPL erlaubt Übermittlungen ins Ausland unter Bedingungen, und der Vorschlag einer Speicherpflicht im Königreich ist noch ein Entwurf. Viele Gründer wählen ein Hosting-Setup, das sich später umziehen lässt. Klären Sie Ihren Fall mit einem Rechtsberater.

Haben Sie eine Idee für Kleinanzeigen oder einen Marktplatz? [Buchen Sie ein kostenloses Gespräch](/book) oder [schicken Sie uns Ihre Idee](/contact), und wir helfen Ihnen, daraus ein klar umrissenes MVP mit festem schriftlichem Angebot zu machen.

## Quellen

- [Unified National Access (Nafath)](https://en.wikipedia.org/wiki/Unified_national_access)
- [DLA Piper: Data protection laws, Saudi Arabia](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers: TMT 2026, Saudi Arabia trends and developments](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Clyde & Co: SDAIA publishes draft amendments to the PDPL](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [Ministry of Investment: E-Commerce Law (englische Übersetzung)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [SAMA: Lizenz für Tamara Finance](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx)
- [SAMA: Lizenz für Tabby Finance](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)
- [Tap Payments](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
- [Telr](https://telr.com/)
- [StatCounter: Marktanteile der Suchmaschinen, Saudi-Arabien](https://gs.statcounter.com/search-engine-market-share/all/saudi-arabia)
- [Google Cloud: Zugang zur Region Dammam](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon: AWS-Region in Saudi-Arabien](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
