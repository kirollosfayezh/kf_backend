---
title: Software-Briefing schreiben, das Anbieter kalkulieren können
summary: Eine einseitige Vorlage für Ihr Software-Briefing: Nutzer, Abläufe, Prioritäten, Schnittstellen, Daten, Erfolgskriterien und wie daraus ein Angebot wird.
tags: Softwareanforderungen, Projektbriefing, MoSCoW, Festpreisangebot, Individualsoftware, Ägypten, Golfstaaten
alt: Von Hand skizzierte Website-Wireframes auf Papier neben einem orangefarbenen Stift
caption: Ein kalkulierbares Briefing beschreibt Nutzer und Abläufe; grobe Skizzen wie diese sagen mehr als eine lange Funktionsliste.
stats: 1|Seite genügt für ein erstes Angebot; 4|Prioritätsstufen: muss, sollte, könnte, diesmal nicht; 60%|übliche Obergrenze für den Muss-Aufwand laut DSDM-Leitfaden
---

Ein Software-Briefing, das Anbieter kalkulieren können, passt auf eine Seite. Es nennt, wer das System nutzt, welche Hauptaufgaben diese Personen darin erledigen, welche Funktionen unverzichtbar sind und welche warten können, womit es verbunden sein muss, welche Daten es enthält und woran Sie den Erfolg messen. Die Wahl der Technologie überlässt es dem Anbieter.

Die meisten ersten Briefings bestehen entweder aus einer Zeile („Wir brauchen eine App wie X“) oder aus einer vierzigseitigen Wunschliste. Die erste Variante bringt Angebote, die weit auseinanderliegen, weil jeder Anbieter anders rät. Die zweite bringt aufgeblähte Angebote, weil jeder Anbieter das Risiko jedes einzelnen Punkts einpreist. Ein einseitiges Briefing liegt dazwischen.

## Wozu ein Briefing dient

Ein Briefing hat eine Aufgabe: Mehrere Anbieter sollen dasselbe Projekt kalkulieren können. Wenn zwei Anbieter Ihr Briefing lesen und sich unterschiedliche Systeme vorstellen, lassen sich ihre Angebote nicht vergleichen, und das günstigere ist oft nur günstiger, weil der Anbieter weniger verstanden hat.

Es ist weder ein Vertrag noch ein vollständiges Lastenheft. Die detaillierte Spezifikation entsteht meist später, gemeinsam mit dem gewählten Anbieter, in einer Analyse- oder Designphase. Das Briefing muss nur so klar sein, dass ein Anbieter gute Fragen stellen und Ihnen eine Preisspanne nennen kann, oder einen Festpreis für einen gut verstandenen Umfang.

## Die einseitige Vorlage

Übernehmen Sie diese Struktur in ein Dokument und füllen Sie jede Zeile in einfacher Sprache aus.

| Abschnitt | Was Sie schreiben | Beispiel |
|---|---|---|
| Hintergrund | Das Unternehmen und das Problem in zwei oder drei Sätzen | Ein Großhändler mit drei Lagern verwaltet Aufträge in Tabellen, und die Bestandszahlen stimmen nie überein |
| Nutzer | Jede Nutzergruppe und ihre ungefähre Größe | 12 Außendienstmitarbeiter, 4 Lagermitarbeiter, 2 Führungskräfte, etwa 300 Kunden |
| Abläufe | Die Hauptaufgaben als kurze Schritte | Außendienst erfasst Auftrag, Lager kommissioniert, Fahrer liefert, Rechnung wird erstellt |
| Prioritäten | Muss, sollte, könnte, diesmal nicht | Muss: Aufträge und Bestand. Könnte: eine Kunden-App |
| Schnittstellen | Die Systeme, mit denen es kommunizieren muss | Buchhaltungssoftware, WhatsApp, ein Zahlungsanbieter |
| Daten | Was es speichert und was aus dem heutigen Stand übernommen wird | 2.000 Artikel und fünf Jahre Kundendaten in Excel |
| Erfolg | Woran Sie erkennen, dass es funktioniert | Inventur stimmt eine Woche nach dem Start mit den Regalen überein |
| Rahmenbedingungen | Termin, Budgetspanne, Sprachen, Geräte | Live in vier Monaten, Arabisch und Englisch, Mitarbeiter mit Android-Smartphones |

## Nutzer und Abläufe

Beginnen Sie mit den Nutzern, denn jede Funktion gehört zu jemandem. „Admin“ genügt nicht: Schreiben Sie, ob Rabatte vom Inhaber, von einer Filialleitung oder von der Buchhaltung freigegeben werden, denn jede Rolle braucht in der Regel eigene Berechtigungen und Bildschirme.

Beschreiben Sie dann jeden Ablauf als kurze Schrittfolge, in der Reihenfolge, in der er heute stattfindet. „Ein Kunde bestellt per WhatsApp, der Außendienst erfasst den Auftrag, das Lager bestätigt den Bestand, der Fahrer liefert und kassiert bar“ sagt einem Anbieter mehr als eine Liste von Bildschirmen. Es zeigt auch die schwierigen Fälle: ein Artikel ist ausverkauft, ein Kunde zahlt nur die Hälfte, ein Auftrag wird nach der Kommissionierung storniert. Notieren Sie diese Ausnahmen jeweils in einer Zeile. Dort steckt der meiste versteckte Aufwand.

## Muss, sollte, könnte, diesmal nicht

Teilen Sie die Funktionen in vier Gruppen. Das ist die MoSCoW-Methode, die in agilen Projekten weit verbreitet ist:

- **Muss (Must have):** Ohne diese Funktion ist das System zum Start nutzlos.
- **Sollte (Should have):** Wichtig, aber in den ersten Wochen gibt es eine Übergangslösung.
- **Könnte (Could have):** Nützlich, wenn Zeit und Budget reichen.
- **Diesmal nicht (Won't have this time):** Einvernehmlich vorerst ausgeschlossen.

Seien Sie bei der Muss-Liste streng. Das Agile Business Consortium, das das DSDM-Framework pflegt, aus dem die Methode stammt, empfiehlt, den Muss-Aufwand typischerweise auf höchstens 60 % des Gesamtaufwands zu begrenzen, damit die Sollte- und Könnte-Punkte als Puffer dienen, wenn sich Schätzungen als falsch erweisen. Auch die Diesmal-nicht-Liste zählt: Sie verhindert, dass Umfang später unbemerkt zurückkehrt.

## Schnittstellen, Daten und Erfolg

**Schnittstellen** sind die häufigste Quelle unerwarteter Kosten. Nennen Sie für jede das genaue Produkt (nicht „die Buchhaltung“, sondern welche Software), ob Daten in eine oder in beide Richtungen fließen und ob das sofort oder einmal täglich geschehen muss. Wenn Sie wissen, dass das andere System keine API hat, schreiben Sie es dazu.

**Daten** umfassen, was das System speichert und was am ersten Tag übernommen werden muss. Ein Anbieter muss wissen, ob er eine saubere Tabelle mit 500 Kunden importiert oder zehn Jahre Datensätze aus einem Altsystem voller Dubletten.

**Erfolgskriterien** machen das Briefing für beide Seiten überprüfbar. Wählen Sie zwei oder drei beobachtbare: ein Auftrag in unter einer Minute erfasst, Monatsabschluss an einem statt an vier Tagen, keine Lieferscheine mehr auf Papier. Vermeiden Sie „benutzerfreundlich“ und „schnell“ ohne Zahl.

## Was nicht hineingehört

Ein gutes Briefing beschreibt das Problem, nicht die Lösung. Lassen Sie weg:

- **Programmiersprachen, Frameworks und Datenbanken**, es sei denn, Ihr eigenes Team wartet den Code später und nutzt sie bereits.
- **Fertige Bildschirmentwürfe**, es sei denn, Sie haben ein Corporate Design. Eine grobe Skizze eines wichtigen Bildschirms hilft; ausgefeilte Mock-ups werden meist neu gemacht.
- **Funktionslisten aus der Broschüre eines Wettbewerbers.** Die Hälfte passt nicht zu Ihrer Arbeitsweise.
- **Jeden denkbaren Sonderfall.** Notieren Sie die Ausnahmen, die jede Woche vorkommen; die seltenen findet man in der Analysephase.

Nehmen Sie dagegen auf, was nur Sie wissen: steuerliche oder rechtliche Pflichten, die Sie bereits erfüllen, die benötigten Sprachen, die Geräte, die Ihre Mitarbeiter tatsächlich nutzen, und ob mit schwacher Internetverbindung gearbeitet wird.

## Wie ein Anbieter daraus einen Festpreis macht

Ein sorgfältiger Anbieter liest das Briefing und stellt dann Fragen, meist in einem Gespräch. Aus den Antworten zerlegt er jeden Ablauf in Bildschirme und Funktionen, schätzt jeden Teil und rechnet Schnittstellen, Datenübernahme, Tests und Bereitstellung hinzu. Ein Risikozuschlag deckt ab, was noch unklar ist.

Ist das Briefing klar und der Umfang stabil, entsteht ein Festpreis mit schriftlichem Leistungsumfang. Sind große Teile unbekannt, wird ein seriöser Anbieter entweder zuerst eine bezahlte Analysephase anbieten oder Abrechnung nach Aufwand vorschlagen. Unser Leitfaden zu [Festpreis oder Abrechnung nach Aufwand](/blog/fixed-price-vs-time-and-materials) erklärt, wann sich was eignet, und [was eine Web-App tatsächlich kostet](/blog/what-does-a-web-app-actually-cost-to-build) zeigt, wohin das Geld fließt.

Vergleichen Sie Angebote auf Basis desselben Briefings und fragen Sie jeden Anbieter, was ausgeschlossen ist. Wenn Sie nicht technisch versiert sind, liefert [wie Sie ein Softwareunternehmen auswählen](/blog/how-to-choose-a-software-company) die passenden Fragen, und [warum Softwareprojekte scheitern](/blog/why-software-projects-fail) behandelt die Fehler, die ein klares Briefing verhindert.

Bei KF Tech Solutions entwickeln wir [Individualsoftware](/services/custom-software) und arbeiten mit Unternehmen in Ägypten und am Golf. In einem Gespräch gehen wir Ihr Briefing mit Ihnen durch und fragen nach allem, was es offenlässt. Projekte beginnen bei 200 $ (etwa 750 SAR / 735 AED); der Endpreis hängt vom Umfang ab, mit einem festen schriftlichen Angebot nach einem kostenlosen Gespräch.

## Häufige Fragen

### Wie lang sollte ein Software-Briefing sein?

Ein bis zwei Seiten für ein erstes Angebot. Längere Dokumente bringen in dieser Phase selten mehr Klarheit, sondern meist ungetestete Lösungen. Fügen Sie stattdessen Beispiele bei: eine Musterrechnung, eine aktuelle Tabelle, einen Screenshot des Werkzeugs, das Sie heute nutzen.

### Sollte ich mein Budget nennen?

Eine Spanne hilft. Sie zeigt den Anbietern, ob sie eine einfache erste Version oder ein umfassenderes System vorschlagen sollen, und spart beiden Seiten Zeit. Ein Angebot, das genau am oberen Rand Ihrer Spanne liegt, verdient ein paar zusätzliche Fragen.

### Was, wenn sich meine Anforderungen nach dem Angebot ändern?

Das ist meist so. Vereinbaren Sie im Vertrag, wie Änderungen beantragt, bepreist und freigegeben werden, bevor daran gearbeitet wird. Eine klare Diesmal-nicht-Liste macht diese Gespräche deutlich einfacher.

### Kann mir ein Anbieter beim Schreiben helfen?

Ja, viele tun das im ersten Gespräch. Schreiben Sie trotzdem zuerst einen eigenen Entwurf, damit der Umfang Ihre Arbeitsweise abbildet und nicht das, was der Anbieter am leichtesten bauen kann.

Haben Sie einen Entwurf oder nur ein Problem, das Sie beschreiben möchten? [Schicken Sie es uns](/contact) oder [buchen Sie ein kostenloses Gespräch](/book), und wir gehen es gemeinsam mit Ihnen durch.

## Quellen

- [MoSCoW-Priorisierung, DSDM Project Framework, Agile Business Consortium](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)
