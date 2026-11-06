---
title: Software-Wartungsvertrag: Was ein fairer Vertrag enthält
summary: Reaktions- vs. Lösungszeit, Fehler vs. Änderungen, Hosting, Updates, Backups und Preise: Was ein fairer Wartungsvertrag für Software festlegen sollte.
tags: Softwarewartung, Supportvertrag, SLA, Individualsoftware, Hosting, Ägypten
stats: 3|übliche Preismodelle: Pauschale, Stundenkontingent, pro Vorfall; 2|Uhren für jedes Problem: Reaktionszeit und Lösungszeit; 36|Android-API-Level, das neue Apps und Updates bei Google Play ab 31. Aug. 2026 brauchen
---

Ein fairer Wartungsplan für Software legt genau fest, was abgedeckt ist, wie schnell jemand antwortet, wie schnell das Problem behoben wird und was Sie für Arbeiten außerhalb des Plans bezahlen. Er trennt Fehlerbehebungen von neuen Funktionen, benennt, wer für Hosting, Backups und App-Store-Updates verantwortlich ist, und bepreist all das so, dass Sie damit planen können. Steht in Ihrem Vertrag nur „12 Monate Support“, sagt er fast nichts.

Zuletzt geprüft: 6. November 2026

Software ist am Tag des Starts nicht fertig. Smartphones erhalten Updates, Browser ändern sich, externe Dienste stellen alte Versionen ihrer Schnittstellen ein, und Ihre Mitarbeitenden finden Sonderfälle, die niemand getestet hat. Der Plan entscheidet, ob Sie solche Momente einen Nachmittag oder eine Woche kosten.

## Was ein Wartungsplan abdecken sollte

Die meisten Streitigkeiten entstehen, weil beide Seiten unter „Wartung“ etwas anderes verstanden haben. Schreiben Sie den Umfang als Liste, nicht als einen Satz:

- **Fehlerbehebung**: Das System tut nicht, was vereinbart und dokumentiert wurde.
- **Sicherheitsupdates**: Patches für Server, Framework und die verwendeten Bibliotheken.
- **Kompatibilitätsupdates**: Anpassungen, weil sich Android, iOS, ein Browser oder ein externer Dienst geändert hat.
- **Hosting und Monitoring**: Server betreiben, verlängern und überwachen.
- **Backups und Wiederherstellungstests**: Kopien Ihrer Daten und der Nachweis, dass sie sich wiederherstellen lassen.
- **Kleine Änderungen**: Texte, Preise, ein neues Formularfeld, innerhalb eines vereinbarten Stundenrahmens.

Alles, was nicht auf der Liste steht, ist neue Arbeit und wird separat angeboten. Das ist kein Trick, sondern genau das, was den Monatspreis ehrlich hält.

## Reaktionszeit ist nicht Lösungszeit

Ein Plan, der „Reaktion innerhalb von 2 Stunden“ verspricht, verspricht nur, dass jemand antwortet. Er verspricht nicht, dass das Problem behoben wird. Ein brauchbarer Plan hat für jedes Problem zwei Uhren, und beide hängen vom Schweregrad ab:

| Schweregrad | Beispiel | Reaktion | Angestrebte Lösung |
|---|---|---|---|
| Kritisch | System ausgefallen, keine Verkäufe oder Buchungen möglich | Nach Vereinbarung in Stunden | Am selben Tag oder eine Übergangslösung |
| Hoch | Eine Kernfunktion ist für alle Nutzer defekt | Am selben Arbeitstag | Innerhalb weniger Arbeitstage |
| Mittel | Eine Funktion ist defekt, es gibt einen Umweg | Am nächsten Arbeitstag | Im nächsten geplanten Update |
| Niedrig | Optisches Problem, Formulierung, Layout | Innerhalb einer Woche | Nach Möglichkeit |

Die genauen Werte verhandeln Sie selbst; die Tabelle zeigt die Struktur, keinen Standard. Vereinbaren Sie außerdem **Arbeitszeiten und Zeitzone**, den Meldeweg (Ticketsystem, E-Mail, WhatsApp-Gruppe) und wer auf Ihrer Seite ein Problem als kritisch melden darf. Ein kritisches Problem, das Freitag um Mitternacht gemeldet wird, ist nur abgedeckt, wenn der Plan das vorsieht.

## Fehler oder Änderung?

An dieser Grenze entstehen die meisten Diskussionen. Eine einfache Regel hilft: **Tut das System nicht, was im unterschriebenen Leistungsumfang oder in der Dokumentation steht, ist es ein Fehler und die Behebung ist abgedeckt. Wollen Sie, dass es etwas anderes tut, ist es eine Änderung.**

Beispiele machen es greifbar. Ein Bericht mit falschen Summen ist ein Fehler. Ein Bericht, den Sie jetzt nach Filialen aufgeteilt haben möchten, ist eine Änderung. Ein Login, der auf dem neuen iPhone scheitert, ist ein Kompatibilitätsupdate. Die Anmeldung mit Apple hinzuzufügen, ist eine Änderung. Nehmen Sie einige solcher Beispiele in den Vertrag auf; sie ersparen später stundenlange Diskussionen. Unser Leitfaden, [worauf Sie bei einem Softwareentwicklungsvertrag achten sollten](/blog/software-development-contract-what-to-check), zeigt, wie Umfang und Abnahme von Anfang an formuliert werden, und genau darauf beruht diese Regel.

## Hosting, Monitoring und Backups

### Konten und Alarme

Stellen Sie drei Fragen: Auf wessen Namen läuft das Hosting, wer bezahlt die Rechnung, und wer erhält den Alarm, wenn der Server ausfällt? Die sicherste Antwort für Sie: Hosting, Domain und App-Store-Konten laufen auf Ihr Unternehmen, und Ihr Entwickler erhält Zugriff. So legt weder ein Streit noch ein verlorener Kontakt Ihr System lahm.

Monitoring bedeutet, dass das System automatisch geprüft wird und jemand benachrichtigt wird, bevor Ihre Kunden etwas merken. Der Plan sollte festlegen, was überwacht wird (Erreichbarkeit, Fehler, Speicherplatz, Ablauf von Zertifikaten) und wer die Alarme erhält. Auch die Verlängerung von Domains und SSL-Zertifikaten gehört auf die Liste; ein abgelaufenes Zertifikat lässt eine funktionierende Website für jeden Besucher defekt wirken.

### Backups, die Sie wirklich wiederhergestellt haben

Ein Backup, das nie wiederhergestellt wurde, ist eine Hoffnung, kein Backup. Der Plan sollte festhalten:

1. Was gesichert wird: die Datenbank, hochgeladene Dateien und die Konfiguration.
2. Wie oft gesichert wird und wie viele Kopien aufbewahrt werden.
3. Wo die Kopien liegen, idealerweise getrennt vom Hauptserver.
4. Wie oft eine Wiederherstellung getestet wird und wer bestätigt, dass sie funktioniert hat.

Fragen Sie auch, wie viele Daten Sie im schlimmsten Fall verlieren könnten. Läuft das Backup einmal pro Nacht, kann ein Ausfall um 18 Uhr die Verkäufe eines ganzen Tages kosten.

## Updates für Betriebssysteme, Frameworks und App Stores

Mobile Apps brauchen regelmäßige Arbeit, auch wenn nichts defekt ist. Google Play verlangt zum Beispiel, dass neue Apps und App-Updates ab dem 31. August 2026 Android 16 (API-Level 36) oder höher anvisieren, und bestehende Apps, die zu weit zurückfallen, sind für neue Nutzer auf neueren Android-Versionen nicht mehr verfügbar ([Android Developers](https://developer.android.com/google/play/requirements/target-sdk)). Auch Apple veröffentlicht jedes Jahr eine neue iOS-Version, und eine App, die nie neu gebaut wird, veraltet nach und nach.

Für Websites und Backends gilt dasselbe: Programmiersprache, Framework und jede Bibliothek haben unterstützte Versionen, und wer alte Versionen betreibt, erhält keine Sicherheitskorrekturen. Ein guter Plan enthält eine regelmäßige Überprüfung, etwa vierteljährlich, bei der diese Updates geprüft und eingespielt werden, statt zu warten, bis etwas kaputtgeht.

## Preismodelle: Pauschale, Stundenkontingent, pro Vorfall

Es gibt drei übliche Arten, Wartung zu bepreisen, und jede passt zu einem anderen Unternehmen:

| Modell | So funktioniert es | Passt zu | Achten Sie auf |
|---|---|---|---|
| Monatliche Pauschale | Fester Monatsbetrag für einen definierten Umfang und Reaktionszeiten | Systeme, mit denen Ihr Unternehmen täglich arbeitet | Ungenutzte Stunden, die stillschweigend verfallen |
| Stundenkontingent | Sie kaufen einen Stundenblock und verbrauchen ihn nach und nach | Regelmäßige kleine Änderungen und Updates | Wer die Stunden erfasst und wie Sie sie einsehen |
| Pro Vorfall | Sie zahlen für jede einzelne Behebung | Einfache Websites, die sich selten ändern | Keine garantierte Reaktionszeit |

Unabhängig vom Modell: Verlangen Sie einen monatlichen Bericht darüber, was erledigt wurde und wie viele Stunden es gedauert hat. Wenn Sie auch abwägen, wie die ursprüngliche Entwicklung bepreist werden soll, erklärt unser Vergleich [Festpreis vs. Aufwandsabrechnung](/blog/fixed-price-vs-time-and-materials) dieselben Abwägungen auf Projektebene.

## Was passiert, wenn der Plan endet

Pläne enden: Sie wechseln den Anbieter, holen die Entwicklung ins eigene Haus oder zahlen einfach nicht weiter. Der Vertrag sollte festlegen, dass Sie den Quellcode, die Datenbank, die Zugangsdaten und die Dokumentation erhalten und dass es eine kurze Übergabephase gibt. Das ist viel einfacher, wenn die Übergabe schon beim Start sauber erfolgt ist; unsere [Checkliste für die Übergabe eines Softwareprojekts](/blog/software-project-handover-checklist) zeigt, was Sie bereits haben sollten. Welche Prüfungen ein Projekt von Anfang an gesund halten, lesen Sie unter [warum Softwareprojekte scheitern](/blog/why-software-projects-fail).

KF Tech Solutions entwickelt [Individualsoftware](/services/custom-software), Websites und mobile Apps und betreut sie nach dem Start weiter mit Fehlerbehebungen, Updates und neuen Funktionen. Wir arbeiten mit Unternehmen in Ägypten und am Golf und formulieren Wartungsbedingungen so klar wie hier beschrieben: ein aufgelisteter Umfang, zwei Uhren pro Problem, Konten auf Ihren Namen und ein klarer Satz für alles außerhalb des Plans.

## Häufige Fragen

### Ist die Wartung im Preis für die Entwicklung enthalten?

Meist ist nur eine kurze Gewährleistungsphase enthalten, in der Fehler in der gelieferten Arbeit behoben werden. Laufendes Hosting, Updates und Support sind eine eigene Vereinbarung. Prüfen Sie, wie lange die Gewährleistung läuft und was sie umfasst.

### Brauche ich für eine einfache Website einen Wartungsplan?

Auch eine einfache Unternehmenswebsite braucht Hosting, die Verlängerung von Domain und Zertifikat, Backups und gelegentliche Updates. Oft reicht ein schlanker Plan oder eine Abrechnung pro Vorfall; eine volle Pauschale ist nicht nötig.

### Was ist, wenn ich später den Anbieter wechseln möchte?

Stellen Sie sicher, dass der Vertrag Ihnen Quellcode, Datenbank und alle Zugangsdaten zusichert und dass Hosting- und App-Store-Konten auf Ihr Unternehmen laufen. Dann kann jeder kompetente Entwickler übernehmen.

### Wem gehört der Code, der im Rahmen der Wartung entsteht?

Das sollte der Vertrag regeln. Die übliche faire Lösung: Code, der für Ihr System geschrieben wird, gehört Ihnen, genau wie die ursprüngliche Entwicklung.

### Können ungenutzte Stunden der Pauschale übertragen werden?

Manche Pläne erlauben das für ein oder zwei Monate, viele nicht. Vereinbaren Sie es schriftlich vor der Unterschrift, nicht erst, wenn die Stunden verfallen sind.

Wenn Sie kurz davor stehen, einen Wartungsvertrag zu unterschreiben, oder bei Ihrem aktuellen Vertrag unsicher sind, was er abdeckt, [kontaktieren Sie uns](/contact) oder [buchen Sie ein kostenloses Gespräch](/book), und wir gehen ihn gemeinsam mit Ihnen durch.

## Quellen

- [Android Developers: Anforderungen von Google Play an das Ziel-API-Level](https://developer.android.com/google/play/requirements/target-sdk)
