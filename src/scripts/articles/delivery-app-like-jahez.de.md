---
title: Eine Liefer-App wie Jahez entwickeln: Umfang und Kosten
summary: Die vier Apps hinter einer Liefer-Plattform in Saudi-Arabien, warum Plattformen wie Jahez so teuer sind und wie Sie zuerst in einer Stadt starten.
tags: Liefer-App, Essenslieferung, Marktplatz-App, App-Entwicklungskosten, MVP, Saudi-Arabien
alt: Blick eines Lieferfahrers vom Motorrad im Verkehr, mit zwei am Lenker befestigten Smartphones
caption: Hinter dem Smartphone jedes Fahrers stehen Disposition, Live-Tracking und Auszahlungen – die Teile, die eine Lieferplattform teuer machen.
stats: 150 Mio.+|Bestellungen überschritt Keeta 2025 in Saudi-Arabien; 68,7 Mio.|Bestellungen wickelte Jahez in den ersten neun Monaten 2025 ab; 4|Apps in einer Liefer-Plattform: Kunde, Fahrer, Restaurant, Verwaltung
---

Wer eine Liefer-App wie Jahez bauen will, baut nicht ein Produkt, sondern vier: eine Kunden-App, eine Fahrer-App, einen Restaurant-Bildschirm und ein Verwaltungs-Dashboard. Speisekarte und Kasse sind der günstige Teil. Teuer machen die großen Plattformen die Auftragsverteilung, die Live-Verfolgung, die Abrechnungen und der Betrieb in vielen Städten. Der vernünftige Weg ist daher eine Stadt, eine schlanke erste Version und der Rest erst dann, wenn echte Bestellungen ihn rechtfertigen.

Zuletzt geprüft: 6. November 2026

## Was „eine App wie Jahez“ wirklich bedeutet

Wer „eine App wie Jahez“ bestellt, denkt meist an die Kunden-App: Restaurants durchsuchen, bestellen, bezahlen und den Fahrer auf der Karte verfolgen. Hinter diesem Bildschirm stehen drei weitere Programme mit jeweils eigenen Nutzern.

| Teil | Wer ihn nutzt | Was er leisten muss |
|---|---|---|
| Kunden-App | Bestellende | Restaurants und Speisekarten, Warenkorb, Zahlung, Bestellstatus, Bewertungen, gespeicherte Adressen |
| Fahrer-App | Fahrer | An- und Abmelden, Aufträge annehmen, Navigation, Abholung und Zustellung bestätigen, Verdienst |
| Restaurant-Bildschirm | Restaurantpersonal | Bestellalarm, annehmen oder ablehnen, Zubereitungszeit, Artikel als nicht verfügbar markieren |
| Verwaltungs-Dashboard | Ihr Team | Restaurants, Speisekarten, Fahrer, Liefergebiete und Gebühren, Provisionen, Erstattungen, Support, Berichte |

Dazu kommt ein fünfter Teil, den niemand sieht: der Server, der alles verbindet, entscheidet, welcher Fahrer welche Bestellung bekommt, und alle Bildschirme synchron hält. Dort steckt der größte Teil des Entwicklungsaufwands.

Ein Marktplatz muss außerdem drei Gruppen gleichzeitig gewinnen: Menschen, die bestellen, Restaurants, die mitmachen, und Fahrer, die ausliefern. Die Software kann lange vor dem Betrieb fertig sein, planen Sie daher beides gemeinsam.

## Warum die großen Plattformen so viel kosten

Die Größe des saudischen Marktes erklärt, warum die führenden Apps große Entwicklungsteams beschäftigen. Keeta, im Herbst 2024 in Saudi-Arabien gestartet, überschritt 2025 im Königreich 150 Millionen Bestellungen, in 23 Städten und mit mehr als 50.000 Restaurants. Jahez wickelte in den ersten neun Monaten 2025 rund 68,7 Millionen Bestellungen ab. HungerStation, die andere führende lokale Plattform, veröffentlicht keine saudischen Bestellzahlen. Für den Start brauchen Sie nichts annähernd Vergleichbares, aber die Zahlen zeigen, wohin das Geld fließt.

### Auftragsverteilung

Den richtigen Fahrer für jede Bestellung zu wählen, ist der schwierigste Teil. Eine einfache Version bietet die Bestellung Fahrern in der Nähe an, und wer zuerst annimmt, übernimmt sie. Eine ausgereifte Version gewichtet Entfernung, Zubereitungszeit, Verkehr, die Bündelung zweier Bestellungen auf einer Fahrt und Fairness zwischen den Fahrern. Diese Logik wird über Jahre mit echten Daten abgestimmt.

### Live-Verfolgung

Damit der Fahrer sich auf der Karte bewegt, sendet die Fahrer-App alle paar Sekunden ihren Standort, der Server gibt ihn weiter, und die Kunden-App zeichnet ihn neu, ohne den Akku zu leeren. Multiplizieren Sie das mit Tausenden Fahrern zur Mittagsspitze, und Sie brauchen eine dafür ausgelegte Infrastruktur sowie Karten- und Routing-Dienste, die nach Nutzung abrechnen.

### Abrechnungen und Geldflüsse

Jede Bestellung teilt Geld zwischen Restaurant, Fahrer, Ihrer Provision, Liefergebühren, Rabatten und Mehrwertsteuer auf. Hinzu kommen Erstattungen, stornierte Bestellungen, von Fahrern kassiertes Bargeld und wöchentliche Abrechnungen mit jedem Restaurant. Die Buchhaltung ist oft größer als die App selbst.

### Viele Städte

Jede neue Stadt bringt Liefergebiete, Gebührenregeln, Fahrerangebot, Support-Zeiten und das Onboarding von Restaurants mit sich. Die Software muss unterschiedliche Regeln pro Gebiet abbilden, und Ihr Team muss sie betreiben.

### Zuverlässigkeit zur Spitzenzeit

Eine Liefer-App wird in kurzen, intensiven Phasen rund um die Essenszeiten genutzt. Ein Ausfall zur Abendessenszeit kostet sofort Bestellungen und das Vertrauen der Restaurants. Überwachung, Tests und Support-Bereitschaft gehören deshalb zum Projekt und sind keine Extras.

## Ein Stufenplan für eine Stadt

Beginnen Sie dort, wo Sie die Qualität steuern können: eine Stadt, eine begrenzte Zahl von Restaurants und Fahrer, mit denen Sie direkt sprechen können. Ein typischer Plan sieht so aus.

| Phase | Was Sie starten | Was warten kann |
|---|---|---|
| 1. Erste Version | Kunden-App, einfacher Restaurant-Bildschirm, Fahrer-App mit manueller Zuweisung oder an den nächsten Fahrer, Basis-Dashboard, Karten- und Barzahlung | Automatische Bündelung, Treueprogramm, Aktions-Engine, weitere Städte |
| 2. Wachstum | Live-Verfolgung auf der Karte, Bewertungen, Rabattcodes, Restaurantberichte, Abrechnungsberichte | Fortgeschrittene Verteilung, Abonnements |
| 3. Skalierung | Intelligentere Verteilung, mehr Gebiete und Städte, Abonnements, Marketing-Werkzeuge, tiefere Auswertungen | Nur, was die Daten als nötig zeigen |

Phase 1 muss drei Dinge beweisen: Kunden bestellen erneut, Restaurants lassen ihre Tablets eingeschaltet, und Fahrer verdienen genug, um zu bleiben. Scheitert einer dieser Punkte, helfen zusätzliche Funktionen nicht. Den Ansatz erklären wir ausführlicher in [Eine App-Idee? Starten Sie klein mit einem MVP](/blog/mobile-app-mvp-egypt).

Zwei Abkürzungen sparen in Phase 1 viel:

- **Manuelle Verteilung über das Dashboard.** Anfangs weist ein Mitarbeiter die Bestellungen von Hand zu und lernt dabei, wie die automatischen Regeln aussehen sollten.
- **Ein browserbasierter Restaurant-Bildschirm.** Ein Tablet mit einer Webseite im Browser reicht für den Bestelleingang; eine eigene native Restaurant-App kann warten.

## Was die Kosten Ihrer Version bestimmt

Einen ehrlichen Einheitspreis für „eine App wie Jahez“ gibt es nicht, denn zwei Projekte mit demselben Namen können sich im Umfang um ein Mehrfaches unterscheiden. Diese Entscheidungen bewegen die Zahl am stärksten.

| Entscheidung | Kleineres Projekt | Größeres Projekt |
|---|---|---|
| Wer verkauft | Ein Restaurant oder eine Kette | Viele unabhängige Restaurants |
| Fahrer | Eigene Fahrer des Restaurants oder ein Lieferpartner | Ihr eigenes Netz freier Fahrer |
| Zuweisung | Manuell oder an den nächsten Fahrer | Automatische Verteilung mit Bündelung |
| Verfolgung | Statusmeldungen: angenommen, unterwegs, zugestellt | Live-Karte mit voraussichtlicher Ankunft |
| Zahlungen | Ein Zahlungsanbieter, Karte und bar | Wallets, geteilte Abrechnungen, Kauf auf Raten |
| Abdeckung | Eine Stadt | Viele Städte mit gebietsabhängigen Gebühren |

Die erste Zeile zählt am meisten. Wenn Sie ein Restaurant oder eine Kette sind und eine eigene Bestell-App statt eines Marktplatzes wollen, schrumpft der Umfang deutlich; diesen Fall behandeln wir in [Braucht Ihr Restaurant eine eigene Bestell- und Liefer-App?](/blog/restaurant-delivery-app-egypt). Allgemeine App-Budgets im Königreich finden Sie in [Was kostet die App-Entwicklung in Saudi-Arabien?](/blog/app-development-cost-saudi-arabia), und wie vergleichbare Arbeit aus Ägypten kalkuliert wird, in [Was eine mobile App in Ägypten 2026 wirklich kostet](/blog/app-development-cost-egypt).

Nach dem Start laufen Betriebskosten weiter: Server, Karten- und SMS-Dienste, Entwicklerkonten in den App-Stores, Gebühren des Zahlungsanbieters und Support. Bitten Sie jeden Anbieter, diese getrennt vom Entwicklungspreis aufzuführen.

Projekte beginnen ab 200 $ (etwa 750 SAR / 735 AED); der endgültige Preis hängt vom Umfang ab, mit einem festen schriftlichen Angebot nach einem kostenlosen Gespräch.

## Zahlungen, Rechnungen und personenbezogene Daten in Saudi-Arabien

Dieser Abschnitt ist eine allgemeine Information und keine Rechts- oder Steuerberatung. Klären Sie die Einzelheiten für Ihr Unternehmen mit Ihrem Steuerberater und Ihrem Anwalt.

- **Zahlungen.** mada, das nationale Zahlungsnetz im Besitz der SAMA, unterstützt Apple Pay, mada Pay, Samsung Pay und Google Pay sowie Online-Zahlungen über 3-D Secure. Apps akzeptieren diese meist über einen lizenzierten Zahlungsanbieter; Tap, PayTabs und Telr nennen jeweils mada und Apple Pay, einige auch Tabby oder Tamara. Fragen Sie den Anbieter früh, wie er Erstattungen und Abrechnungen mit Restaurants handhabt.
- **E-Rechnungen.** In Saudi-Arabien ansässige, umsatzsteuerlich registrierte Unternehmen stellen elektronische Rechnungen nach den FATOORA-Regeln der ZATCA aus, und der ausführliche Leitfaden erfasst auch Dritte, die Rechnungen im Namen eines Steuerpflichtigen ausstellen. Legen Sie früh fest, wer in Ihrem Modell welche Rechnung ausstellt; unser Leitfaden zur [ZATCA-Phase-2-Anbindung für eigene POS- oder ERP-Systeme](/blog/zatca-phase-2-integration-custom-pos-erp) erklärt, was das System leisten muss.
- **Personenbezogene Daten.** Eine Liefer-App speichert Namen, Telefonnummern, Wohnadressen und Fahrerstandorte. Das saudische Datenschutzgesetz (PDPL) gilt seit dem 14. September 2023, verlangt die Meldung von Datenpannen an die SDAIA innerhalb von 72 Stunden und gilt auch für ausländische Anbieter, die Personen im Königreich bedienen. Erheben Sie nur, was Sie brauchen, und legen Sie fest, wo die Daten gehostet werden.
- **Pflichtangaben im E-Commerce.** Das E-Commerce-Gesetz verpflichtet einen Online-Shop, seinen Namen, seine Kontaktdaten und seine Handelsregistrierung anzugeben und den Kunden die Vertragsbedingungen bereitzustellen. Nehmen Sie diese Angaben vom ersten Tag an in die App und die zugehörige Website auf.

## Was KF Tech Solutions hier übernimmt

KF Tech Solutions entwickelt mobile Apps und Web-Dashboards, und wir planen Liefer-Plattformen in Stufen: eine erste Version für eine Stadt mit Kunden-App, Fahrer-App, Restaurant-Bildschirm und Verwaltungs-Dashboard auf Arabisch und Englisch, danach die nächste Phase, sobald Bestellungen eingehen. Wir arbeiten mit Unternehmen in Ägypten und am Golf; Kairo arbeitet von Ende April bis Ende Oktober zur Riad-Zeit und im Winter eine Stunde dahinter. Mehr dazu auf unserer Seite zur [Entwicklung mobiler Apps](/services/mobile-applications) und unserer Seite für [Unternehmen in Saudi-Arabien](/saudi-arabia).

## Häufige Fragen

### Wie lange dauert die Entwicklung einer Liefer-App?

Das hängt davon ab, wie viele der vier Teile Sie vom ersten Tag an brauchen und wie viel der Auftragsverteilung zunächst manuell läuft. Eine erste Version für eine Stadt mit manueller Verteilung ist deutlich schneller fertig als eine Plattform für mehrere Städte mit automatischer Verteilung. Nach dem ersten Gespräch sollten Sie einen schriftlichen Plan mit einem Termin für jede Phase erhalten.

### Darf ich das Design von Jahez oder Keeta kopieren?

Nein. Nutzen Sie die großen Apps als Maßstab dafür, was Kunden erwarten, etwa einen klaren Bestellstatus und gespeicherte Adressen. Ihre Marke, Ihre Bildschirme und Ihre Inhalte müssen jedoch Ihre eigenen sein. Namen und Logos gehören den jeweiligen Unternehmen.

### Brauche ich von Anfang an eigene Fahrer?

Nicht unbedingt. Viele Projekte beginnen mit den eigenen Fahrern der Restaurants oder einem Lieferpartner und bauen ein eigenes Fahrernetz auf, sobald das Bestellvolumen in einem Gebiet die Fahrer auslasten kann.

### Eine App für iOS und Android oder zwei native Apps?

Für die meisten ersten Versionen hält eine plattformübergreifende Codebasis für iOS und Android Kosten und Wartung niedrig. Native Apps lohnen sich später, wenn aufwendige Karten- oder Gerätefunktionen sie erfordern.

### Gehört mir der Quellcode?

Das sollte er. Verlangen Sie im Vertrag die vollständige Übertragung von Quellcode und geistigem Eigentum, dazu eine Geheimhaltungsvereinbarung, die Rückgabe oder sichere Löschung Ihrer Daten am Vertragsende und ein Verfahren zur Meldung von Sicherheitsvorfällen.

Wenn Sie eine Liefer-App für Saudi-Arabien planen, [erzählen Sie uns von Ihrer Idee](/contact) oder [buchen Sie ein kostenloses Gespräch](/book). Wir helfen Ihnen, sie auf eine erste Phase zu reduzieren, die Sie starten können.

## Quellen

- [Argaam: Bestellzahlen von Keeta und Jahez für 2025](https://www.argaam.com/en/article/articledetail/id/1886411)
- [Rest of World: Keeta, HungerStation und Jahez in Saudi-Arabien](https://restofworld.org/2025/delivery-app-keeta-hungerstation-saudi-arabia/)
- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap](https://www.tap.company/en-sa), [PayTabs](https://www.paytabs.com/en/) und [Telr](https://telr.com/)
- [ZATCA: Was ist E-Invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: ausführlicher E-Invoicing-Leitfaden](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [DLA Piper: Datenschutzgesetze in Saudi-Arabien](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers TMT 2026: Trends und Entwicklungen in Saudi-Arabien](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Saudisches E-Commerce-Gesetz (offizielle Übersetzung)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
