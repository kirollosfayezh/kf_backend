---
title: Eine Botendienst-App wie Mrsool entwickeln: So funktioniert es
summary: Wie eine Botendienst-App wie Mrsool funktioniert: Anfrage, Kurierangebote, Chat, Zahlung, der Unterschied zur Essenslieferung und der richtige Start.
tags: Botendienst-App, Kurier-App, Lieferung auf Abruf, Marktplatz-App, MVP, Saudi-Arabien
alt: Zwei Händepaare reichen eine braune Papiertüte vor einem weißen Gebäude mit Bogenfenstern weiter
caption: In einer Botendienst-App ist die Übergabe das letzte Glied einer Kette aus Anfrage, Angebot, Chat und Zahlung.
stats: 3|Apps in einer Botendienst-Plattform: Kunde, Kurier, Verwaltung; 1|Stadt für den Start, bevor eine zweite dazukommt; 72 Std.|Frist, um SDAIA eine Datenpanne nach dem PDPL zu melden
---

Mit einer Botendienst-App wie Mrsool lässt ein Kunde fast alles kaufen, abholen oder liefern, und Kuriere in der Nähe bieten an, den Auftrag gegen eine Gebühr zu übernehmen. Sie brauchen drei Teile Software: eine Kunden-App, eine Kurier-App und ein Admin-Dashboard. Schwierig sind nicht die Bildschirme, sondern die Regeln für Angebote, Chat, Bargeld und Vertrauen. Sinnvoll ist daher der Start in einer Stadt mit einer schlanken ersten Version und manueller Steuerung über das Dashboard, bis echte Aufträge zeigen, was sich zu automatisieren lohnt.

Zuletzt geprüft: 6. November 2026

## So funktioniert eine Botendienst-App, Schritt für Schritt

Mrsool dient hier nur als Referenz für ein bekanntes Modell. Der Ablauf hinter den meisten Botendienst-Apps sieht so aus:

1. **Der Kunde stellt eine Anfrage.** Freier Text wie „zwei Schawarma-Sandwiches aus dem Laden in dieser Straße“ oder „ein Paket an dieser Adresse abholen“, mit Abholort, Zielort und optionalen Fotos.
2. **Kuriere in der Nähe sehen die Anfrage.** Die App zeigt sie Kurieren, die innerhalb einer festgelegten Entfernung online sind.
3. **Kuriere senden Angebote.** Jeder Kurier schlägt eine Liefergebühr vor. Der Kunde sieht die Angebote, meist mit Bewertung und Entfernung des Kuriers, und nimmt eines an.
4. **Kunde und Kurier chatten.** Sie klären Details, der Kurier schickt ein Foto des Kassenbons, und der Endbetrag für die Ware wird vereinbart.
5. **Der Kurier kauft oder holt ab und liefert.** Der Kunde verfolgt den Status und oft auch die Position des Kuriers auf einer Karte.
6. **Zahlung und Bewertung.** Der Kunde bezahlt Ware und Liefergebühr, die Plattform behält ihre Provision, und beide Seiten bewerten einander.

Hinter jedem Schritt steckt eine geschäftliche Entscheidung. Wer darf eine Anfrage sehen, und aus welcher Entfernung? Darf ein Kurier die Gebühr nach der Annahme ändern? Wer bezahlt den Laden, und wann? Diese Antworten prägen die Software stärker als jedes Bildschirmdesign.

## Der Unterschied zu einer Restaurant-Liefer-App

Auf dem Handy sehen eine Botendienst-App und eine Essensliefer-App ähnlich aus, doch es sind unterschiedliche Geschäfte mit unterschiedlichen Risiken.

| | Restaurant-Liefer-App | Botendienst-App |
|---|---|---|
| Was bestellt wird | Artikel aus einer festen Speisekarte | Alles, was der Kunde beschreibt |
| Preis der Ware | Vor dem Bezahlen bekannt | Erst bekannt, wenn der Kurier eingekauft hat |
| Liefergebühr | Von der Plattform festgelegt | Von Kurieren angeboten oder nach Entfernungsregeln berechnet |
| Händlerseite | Restaurant-Bildschirm zur Auftragsannahme | Meist keine: Der Laden weiß nichts von der App |
| Wer das Geld für die Ware bewegt | Das Restaurant wird über die Plattform bezahlt | Oft zahlt der Kurier den Laden zuerst |
| Hauptrisiko | Verzögerungen der Restaurants und Last zu Stoßzeiten | Streitfälle, Bargeld und Vertrauen zwischen Fremden |

Ohne Händlerseite ist der Start einer Botendienst-App günstiger: keine Restaurantverträge, keine Speisekarten, keine Tablets. Die offene Anfrage macht den Betrieb dagegen schwieriger: Jeder Auftrag ist anders, und der Warenpreis steht erst fest, wenn der Kurier im Laden ist. Wenn Sie ein Restaurant sind und eine eigene Bestell-App möchten, ist das ein anderes, kleineres Projekt; lesen Sie [Braucht Ihr Restaurant eine eigene Bestell- und Liefer-App?](/blog/restaurant-delivery-app-egypt). Für einen Marktplatz mit vielen Restaurants lesen Sie [Eine Liefer-App wie Jahez entwickeln: Umfang und Kosten](/blog/delivery-app-like-jahez).

## Was Sie bauen müssen, und die schwierigen Teile

| Teil | Wer es nutzt | Was es leisten muss |
|---|---|---|
| Kunden-App | Personen, die Anfragen stellen | Anfrage mit Text, Fotos und Orten, Angebote vergleichen, Chat, Verfolgung, Zahlung, Bewertung, gespeicherte Adressen |
| Kurier-App | Kuriere | Online und offline gehen, Anfragen in der Nähe sehen, Angebote senden, Chat, Navigation, Belege hochladen, Lieferung bestätigen, Einnahmen einsehen |
| Admin-Dashboard | Ihr Team | Kuriere freigeben, Zonen und Gebührenregeln festlegen, laufende Aufträge beobachten, bei Streitfällen eingreifen, Erstattungen, Auszahlungen, Berichte |

Dahinter steht der Server, der Anfragen und Kuriere zusammenbringt, die Chatnachrichten überträgt und alle Bildschirme synchron hält. Dort steckt der größte Teil des technischen Aufwands, nicht in den Apps selbst. Vier Bereiche beanspruchen den Großteil der Konzeptarbeit.

### Angebote und Preise

Kuriere bieten zu lassen ist leicht zu programmieren und schwer auszubalancieren. Zu wenige Angebote, und Kunden springen ab; zu viele niedrige Angebote, und Kuriere hören auf. Viele Teams starten mit einer entfernungsabhängigen Gebühr mit Mindestbetrag und ergänzen Angebote später, oder sie lassen Kuriere nur innerhalb einer Spanne bieten, die Sie im Dashboard festlegen.

### Chat

Im Chat wird der Auftrag tatsächlich vereinbart, deshalb muss er zuverlässig sein: Text, Fotos, Lesestatus und ein Verlauf, den Ihr Support bei Streitfällen prüfen kann. Verbergen Sie private Telefonnummern und legen Sie fest, wie lange der Chatverlauf gespeichert wird.

### Das Geld für die Ware

Das ist die größte Designfrage. Zahlen Kuriere den Laden aus eigener Tasche, tragen sie das Risiko, wenn ein Kunde storniert oder die Ware ablehnt. Zahlen Kunden im Voraus, ist der Betrag eine Schätzung, bis der Beleg vorliegt. Übliche Lösungen sind eine Obergrenze für den Warenwert je Auftrag, eine Vorauszahlung bei größeren Aufträgen und eine klare Stornoregel, sobald der Kurier eingekauft hat.

### Vertrauen und Sicherheit

Kuriere sind Fremde, die an Haustüren kommen und mit Geld umgehen. Sie brauchen eine Kurierregistrierung, bei der Ihr Team die Ausweisdokumente prüft, Bewertungen in beide Richtungen, eine Möglichkeit, ein Problem direkt im Auftrag zu melden, und die Möglichkeit, ein Konto über das Dashboard zu sperren. Prüfen Sie vor dem Start mit der zuständigen Behörde und Ihrem Anwalt die aktuellen Regeln für freie Kuriere und für Waren, die Sie ausschließen.

## Eine erste Version für eine Stadt

Starten Sie mit einer Stadt, wenigen Anfragearten und Kurieren, die Sie direkt erreichen. Ein Stufenplan hält den ersten Bau klein.

| Phase | Was Sie starten | Was warten kann |
|---|---|---|
| 1. Erste Version | Kunden- und Kurier-App, Anfrage mit Text und Foto, entfernungsabhängige Gebühr, Chat, Statusmeldungen, Karte und Barzahlung, Admin-Dashboard mit manueller Zuweisung | Kurierangebote, Wallets, Aktionen, weitere Städte |
| 2. Wachsen | Kurierangebote mit Grenzen, Live-Kartenverfolgung, Bewertungen, Gutscheincodes, Einnahmen- und Auszahlungsberichte für Kuriere | Abonnements, automatische Zuweisungsregeln |
| 3. Skalieren | Intelligenteres Matching, mehr Zonen und Städte, Wallets, Geschäftskonten, tiefere Auswertungen | Nur, was die Daten als nötig zeigen |

Phase 1 muss beweisen, dass Kunden wiederkommen, dass Kuriere genug verdienen, um online zu bleiben, und dass Streitfälle beherrschbar bleiben. Scheitert einer dieser Punkte, helfen weitere Funktionen nicht. Diesen Ansatz erklären wir in [Eine App-Idee? Starten Sie klein mit einem MVP](/blog/mobile-app-mvp-egypt).

Die manuelle Steuerung über das Dashboard ist die nützlichste Abkürzung: Ein Mitarbeiter kann einen Kurier zuweisen, eine Gebühr anpassen oder einen Streit von Hand klären, und diese Entscheidungen werden zu den Regeln, die Sie später automatisieren.

## Was die Kosten Ihrer Version bestimmt

Einen ehrlichen Einheitspreis für „eine App wie Mrsool“ gibt es nicht, denn der Begriff reicht vom Dienst in einer Stadt mit festen Gebühren bis zur landesweiten Plattform mit Angeboten, Wallets und Geschäftskonten. Diese Entscheidungen bewegen die Zahl am stärksten.

| Entscheidung | Kleinerer Umfang | Größerer Umfang |
|---|---|---|
| Preisbildung | Gebühr nach Entfernungsregeln | Kurierangebote mit Grenzen und Gegenangeboten |
| Anfragearten | Wenige, etwa Lebensmittel und Pakete | Offene Anfragen jeder Art |
| Zuweisung | Manuell über das Dashboard | Automatisches Matching nach Entfernung, Bewertung und Auslastung |
| Verfolgung | Statusmeldungen | Live-Karte mit Ankunftsschätzung |
| Zahlungen | Ein Gateway, Karte und Bargeld | Wallets, geteilte Auszahlungen, regelbasierte Erstattungen |
| Abdeckung | Eine Stadt | Viele Städte mit zonenabhängigen Gebühren |

Nach dem Start laufen Betriebskosten weiter: Server, Kartendienste, SMS für Anmeldecodes, Push-Benachrichtigungen, App-Store-Entwicklerkonten, Gebühren des Zahlungs-Gateways und Support. Bitten Sie jeden Anbieter, diese getrennt vom Entwicklungspreis aufzuführen.

Projekte beginnen bei 200 $ (etwa 750 SAR / 735 AED); der Endpreis hängt vom Umfang ab, mit einem festen schriftlichen Angebot nach einem kostenlosen Gespräch.

## Zahlungen und personenbezogene Daten in Saudi-Arabien

Dieser Abschnitt ist eine allgemeine Information und keine Rechts- oder Steuerberatung. Klären Sie die Einzelheiten für Ihr Unternehmen mit Ihrem Steuerberater und Ihrem Anwalt.

- **Zahlungen.** mada, das nationale Zahlungsnetz im Besitz der SAMA, unterstützt Apple Pay, mada Pay, Samsung Pay und Google Pay sowie Online-Zahlungen über 3-D Secure. Apps nehmen diese meist über ein lizenziertes Gateway an; Tap, PayTabs und Telr führen jeweils mada und Apple Pay. Fragen Sie bei einer Botendienst-App früh, wie das Gateway Erstattungen, Reservierungen und Auszahlungen an Kuriere abwickelt. Unser Leitfaden [Payment-Gateways in Saudi-Arabien](/blog/payment-gateways-saudi-arabia) vergleicht die Optionen.
- **Personenbezogene Daten.** Eine Botendienst-App speichert Namen, Telefonnummern, Wohnadressen, Chatnachrichten, Belegfotos und Kurierstandorte. Saudi-Arabiens Datenschutzgesetz (PDPL) gilt seit dem 14. September 2023, wird von der SDAIA beaufsichtigt, verlangt eine Meldung von Datenpannen innerhalb von 72 Stunden und gilt auch für ausländische Anbieter, die Personen im Königreich bedienen. Erheben Sie nur, was Sie brauchen, und legen Sie fest, wo die Daten gehostet werden.
- **Pflichtangaben im E-Commerce.** Das E-Commerce-Gesetz verpflichtet einen Online-Shop, Namen, Kontaktdaten und Handelsregistereintrag anzugeben und Kunden die Vertragsbedingungen bereitzustellen. Stellen Sie Bedingungen, Stornoregeln und Kontaktdaten vom ersten Tag an in die App.

## Was KF Tech Solutions hier übernimmt

KF Tech Solutions entwickelt mobile Apps und Web-Dashboards, und wir haben bereits Software für Anfrage und Disposition gebaut: Die Abschlepp- und Pannenhilfe-Plattform [Eltayib](/projects/eltayib) lässt Fahrer mit wenigen Taps Hilfe anfordern, verfolgt den Auftrag in Echtzeit und gibt dem Betreiber einen Ort, um Leistungen, Abdeckung und Flotte zu verwalten. Für eine Botendienst-App planen wir eine erste Version für eine Stadt mit Kunden- und Kurier-App und einem Admin-Dashboard auf Arabisch und Englisch und leiten die nächste Phase aus echten Aufträgen ab. Wir arbeiten mit Unternehmen in Ägypten und am Golf. Mehr dazu in unserem [Service für mobile Apps](/services/mobile-applications) und auf unserer Seite für [Unternehmen in Saudi-Arabien](/saudi-arabia).

## Häufige Fragen

### Darf ich Design und Namen von Mrsool übernehmen?

Nein. Nutzen Sie die App als Referenz dafür, was Kunden erwarten, etwa klare Angebote und einen einfachen Chat, aber Marke, Bildschirme und Inhalte müssen Ihre eigenen sein. Name und Logo gehören ihrem Inhaber.

### Brauche ich Kuriere, bevor die App fertig ist?

Sie brauchen vor dem Start eine erste Gruppe, denn Kunden, die kein Angebot erhalten, versuchen es selten erneut. Viele Teams gewinnen und schulen Kuriere während der Entwicklung in einem Gebiet und öffnen die App für Kunden zunächst nur dort.

### Sollen Kuriere bieten, oder legt die App die Gebühr fest?

Für eine erste Version ist eine Gebühr nach Entfernungsregeln leichter zu erklären und zu betreuen. Angebote lassen sich ergänzen, sobald Sie die üblichen Gebühren kennen, und funktionieren besser mit Grenzen, die Sie im Dashboard festlegen.

### Eine App für iOS und Android oder zwei native Apps?

Für die meisten ersten Versionen hält eine plattformübergreifende Codebasis für iOS und Android Kosten und Wartung gering. Native Apps lohnen sich später, wenn aufwendige Karten- oder Gerätefunktionen es erfordern.

### Gehört mir der Quellcode?

Das sollte er. Verlangen Sie im Vertrag die vollständige Übertragung von Quellcode und geistigem Eigentum, dazu eine Geheimhaltungsvereinbarung, die Rückgabe oder sichere Löschung Ihrer Daten zum Vertragsende und ein Verfahren zur Meldung von Sicherheitsvorfällen.

Wenn Sie eine Botendienst- oder Kurier-App für Saudi-Arabien planen, [erzählen Sie uns von Ihrer Idee](/contact) oder [buchen Sie ein kostenloses Gespräch](/book), und wir helfen Ihnen, sie auf eine erste Phase zu reduzieren, die Sie starten können.

## Quellen

- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap](https://www.tap.company/en-sa), [PayTabs](https://www.paytabs.com/en/) und [Telr](https://telr.com/)
- [DLA Piper: Datenschutzgesetze in Saudi-Arabien](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers TMT 2026: Trends und Entwicklungen in Saudi-Arabien](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Saudisches E-Commerce-Gesetz (offizielle Übersetzung)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
