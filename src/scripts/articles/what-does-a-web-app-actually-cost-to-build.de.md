---
title: Was kostet eine Webanwendung wirklich?
summary: Die Posten, die den Preis bewegen, die Posten, die in jedem Angebot fehlen, und wie Sie zwei völlig unterschiedliche Angebote vergleichbar machen.
---

Lassen Sie dieselbe Webanwendung von drei Anbietern kalkulieren, und Sie erhalten
drei Zahlen, die um den Faktor vier auseinanderliegen. Der Reflex ist, jemandem
Wucher zu unterstellen. Meist ist die Wahrheit langweiliger: Es werden drei
verschiedene Projekte kalkuliert, weil das Briefing drei Lesarten zuließ.

## Was der Auftraggeber sieht

Die Oberflächen. Die kalkulieren alle — und sie sind die kleinere Hälfte der
Arbeit.

- Wie viele eigenständige Ansichten, und wie viele Zustände hat jede? Eine Liste ist
  eine Ansicht; eine Liste mit Suche, Filtern, Leerzustand, Fehlerzustand,
  Ladezustand und Blätterfunktion sind eher sechs.
- Wie viel davon ist eigenes Design, wie viel Komponentenbibliothek?
- Muss es auf dem Telefon richtig funktionieren, oder nur überleben?

## Was der Auftraggeber nicht sieht

Rund 40 % der meisten Projekte — und der übliche Grund, warum Angebote
auseinanderlaufen.

**Anmeldung und Berechtigungen.** "Nutzer können sich anmelden" ist ein
Nachmittag. "Filialleiter sehen ihre Filiale, Regionalleiter ihre Region, die
Buchhaltung sieht alles, darf aber nichts ändern" ist eine Woche — und berührt
danach jede einzelne Abfrage im System.

**Datenmodellierung.** Hier falsch zu liegen ist der teuerste Fehler in der
Softwareentwicklung, weil jede spätere Funktion ihn erbt. Im Demo unsichtbar, im
zweiten Jahr entscheidend.

**Die Verwaltungsseite.** Irgendjemand muss Produkte anlegen, Fehler korrigieren,
Bestellungen erstatten und beantworten, warum ein Kunde den falschen Preis sieht.
Fehlt im Angebot ein Administrationsbereich, werden Sie entweder dauerhaft
Entwickler um Datenbankabfragen bitten — oder die Kosten sind versteckt.

**Fehlerbehandlung.** Was passiert, wenn der Zahlungsdienstleister nach dem
Einzug in eine Zeitüberschreitung läuft? Ein System ohne Antwort darauf ist nicht
fertig, es ist vorgeführt.

## Was niemand erwähnt

| Posten | Übliche Spanne | Anmerkung |
|---|---|---|
| Hosting und Infrastruktur | 30 – 400 € / Monat | Wächst mit der Nutzung |
| Domain und Zertifikate | 15 – 60 € / Jahr | Zertifikate sind meist kostenlos |
| Transaktions-E-Mail | 0 – 80 € / Monat | Kostenlose Kontingente enden schnell |
| Fehler-Monitoring | 0 – 100 € / Monat | Bei echten Systemen nicht optional |
| Backups und Rücksicherungstests | Klein, aber nicht null | Ein nie getestetes Backup ist eine Hoffnung |
| Wartung | 15 – 20 % der Baukosten / Jahr | Abhängigkeiten und Browser bewegen sich |

Die Wartungszeile wird am häufigsten bestritten und ist nie falsch. Software
altert, weil sich die Umgebung ändert — Browser, Bibliotheken, Zahlungs-APIs,
Steuerregeln. Eine Anwendung, die zwei Jahre niemand anfasst, ist nicht stabil,
sondern ungewartet.

## Wie der Umfang den Preis bewegt

| Umfang | Was es ist | Relative Kosten |
|---|---|---|
| Prototyp | Klickbar, ohne echte Daten, zum Zeigen | 1x |
| MVP | Echte Daten, ein Nutzertyp, der Kernablauf | 3 – 4x |
| Produktion v1 | Rechte, Verwaltung, Zahlung, Fehlerbehandlung | 8 – 12x |
| Integriertes System | Spricht mit Ihren Bestandssystemen | 15x+ |

Der Sprung von MVP auf Produktion überrascht am meisten und besteht fast
vollständig aus der unsichtbaren Hälfte oben. Der Sprung zu "integriert" hängt an
Ihren Bestandssystemen, nicht an der neuen Anwendung: eine dokumentierte
Schnittstelle bedeutet Tage, ein geschlossenes System Wochen.

## Zwei unvergleichbare Angebote vergleichbar machen

Vier Fragen genügen:

1. **Ist eine Verwaltungsoberfläche enthalten?** Wenn nein, rechnen Sie sie hinzu.
2. **Wem gehört der Code, und wie wird übergeben?** Repository und Zugänge, nicht
   eine ausgelieferte URL.
3. **Was passiert in den ersten drei Monaten nach dem Start?** Ist die Behebung des
   Gefundenen enthalten, und wie lange?
4. **Was ist ausdrücklich nicht enthalten?** Ein gutes Angebot beantwortet das
   schriftlich, ohne gefragt zu werden.

Dann über drei Jahre inklusive Hosting und Wartung vergleichen. Der günstigste Bau
ist häufig nicht das günstigste System.

> Ein Angebot ist eine Umfangsbeschreibung mit einer Zahl daran. Wenn zwei Zahlen
> stark abweichen, lesen Sie die Beschreibungen, nicht die Zahlen.

## Was den Preis ehrlich senkt

- **Streichen Sie Nutzertypen vor Funktionen.** Drei Rollen kosten deutlich mehr als
  eine, und eine Rolle lässt sich später leichter ergänzen als entfernen.
- **Nutzen Sie eine Komponentenbibliothek.** Eigenes Design auf jeder Ansicht ist
  der Ort, an dem Budgets verschwinden.
- **Verschieben Sie Integrationen.** Erst starten, dann verbinden.
- **Schreiben Sie die eine Seite.** Wer es nutzt, welche drei Dinge sie tun, und mit
  welchen Systemen es sprechen muss — das verändert Ihren Preis mehr als jede
  Verhandlung.

## Häufige Fragen

### Bekommen wir einen Festpreis?

Für einen klar definierten Umfang ja, und den sollten Sie wollen. Für "bauen Sie
uns eine Plattform" kann das kein seriöser Anbieter — und wer es doch tut, hat das
Risiko eingepreist, das Sie dann in jedem Fall bezahlen.

### Sollten wir stattdessen etwas kaufen?

Durchaus möglich. Arbeiten Sie vorher
[Standardsoftware oder Individualentwicklung](/blog/custom-software-vs-off-the-shelf-how-to-choose)
durch.
