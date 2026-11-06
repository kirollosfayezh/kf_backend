---
title: Zahlungsanbieter in den VAE: So wählen Sie das richtige Gateway
summary: Wie sich Zahlungs-Gateways in den VAE bei Gebühren, Zahlungsarten, Auszahlung und Datenregeln unterscheiden, was Aani und Jaywan sind und was Sie fragen.
tags: Payment-Gateway, Onlinezahlungen, Checkout, E-Commerce, VAE
alt: Eine Hand im dunklen Ärmel hält ein Smartphone an ein kontaktloses Zahlungsterminal
caption: Fragen Sie einen Anbieter in den VAE, welche Karten und Wallets er annimmt, wann er auszahlt und wo er Zahlungsdaten speichert.
stats: 50.000 AED|Höchstbetrag einer einzelnen Aani-Sofortzahlung; 750.000|Händler nutzen Aani bereits, laut The National; 5 %|Mehrwertsteuer zusätzlich zu den veröffentlichten Gateway-Gebühren
---

Das richtige Payment-Gateway in den VAE akzeptiert die Zahlungsarten, die Ihre Kunden tatsächlich nutzen, zahlt das Geld nach einem Zeitplan aus, mit dem Ihr Unternehmen leben kann, und gibt Ihren Entwicklern saubere Webhooks und Erstattungen. Der beworbene Prozentsatz zählt weniger, als die meisten Inhaber erwarten: Die echten Unterschiede liegen in Monatsgebühren, Aufschlägen für ausländische Karten, Auszahlungsfristen und darin, wie viel Handarbeit jede Erstattung oder Rückbuchung verursacht. Wählen Sie zwei oder drei lizenzierte Anbieter aus, verlangen Sie schriftliche Gebührenaufstellungen und testen Sie jede Sandbox, bevor Sie unterschreiben.

Zuletzt geprüft: 6. November 2026

Dieser Leitfaden ist eine allgemeine Information für Unternehmer und keine Rechts- oder Steuerberatung. Gebühren und Bedingungen ändern sich häufig; lassen Sie sich daher jede Zahl unten schriftlich vom Anbieter bestätigen.

## Was ein Payment-Gateway tatsächlich tut

Ein Payment-Gateway sitzt zwischen Ihrem Checkout und den Kartennetzwerken. Der Kunde gibt seine Kartendaten ein oder bezahlt mit Apple Pay, und zwar auf einer Seite, die das Gateway kontrolliert. Das Gateway holt die Freigabe ein, meldet Ihrem System, ob die Zahlung erfolgreich war, und überweist das Geld später abzüglich seiner Gebühren auf Ihr Bankkonto.

Drei Aufgaben werden oft gebündelt, und es hilft zu wissen, welche Sie kaufen:

- **Das Gateway** leitet die Zahlungsanfrage weiter und gibt das Ergebnis an Ihre Website, App oder Kasse zurück.
- **Der Acquirer** ist die Bank oder der lizenzierte Anbieter, der die Händlerbeziehung führt und Ihnen das Geld auszahlt.
- **Der Zahlungsdienstleister** ist das Unternehmen, mit dem Sie den Vertrag schließen. In den VAE ist er oft alles zugleich, was einfacher ist; trotzdem sollten Sie wissen, wer Ihr Geld auszahlt und wann.

Manche internationalen Zahlungsabwickler arbeiten bei bestimmten lokalen Zahlungsarten anders. Checkout.com etwa führt KNET und OmanNet als „Gateway only“, mit dem Hinweis „Direct contract with local provider required“. Wenn Sie auch in Kuwait oder Oman verkaufen, bedeutet das zwei Verträge statt einem.

## Wie Kunden in den VAE bezahlen, einschließlich Aani und Jaywan

Karten und Smartphone-Wallets wie Apple Pay decken die meisten Online-Zahlungen ab. Zwei nationale Zahlungssysteme sollten Sie inzwischen kennen, weil sie wachsen und der Staat sie bereits akzeptiert.

- **Aani** ist die Plattform für Sofortzahlungen in den VAE und wurde 2023 vorgestellt. Eine einzelne Zahlung kann bis zu 50.000 AED betragen; The National berichtet von rund 12,5 Millionen Nutzern und 750.000 Händlern.
- **Jaywan** ist das inländische Kartensystem der VAE. Es funktioniert an Kassen, online, an Geldautomaten und in Wallets.

Beide werden von Al Etihad Payments betrieben, einer Tochter der Zentralbank der VAE, und am 3. August 2026 hat das Finanzministerium beide in seine eigenen Zahlungskanäle aufgenommen. Für ein Unternehmen heißt das nicht, dass Sie sie heute akzeptieren müssen. Es heißt aber, dass Sie jedes Gateway fragen sollten, ob es Jaywan-Karten und Aani-Zahlungen schon annimmt und, falls nicht, ab wann.

Die andere Zahlungsart, nach der Kunden fragen, ist „Jetzt kaufen, später bezahlen“. Gateways bieten sie meist über einen Partner an: Telr beschreibt sein Ratenzahlungsprodukt zum Beispiel als „in partnership with Tabby“. Prüfen Sie, welche Ratenzahlungsanbieter speziell für Händler in den VAE verfügbar sind, denn das Angebot unterscheidet sich von Land zu Land.

## Die Anbieter, denen Sie begegnen werden

In fast jedem Gespräch fallen dieselben Namen. Die Tabelle enthält nur, was wir auf den Seiten der Anbieter selbst oder in einer zitierten Quelle bestätigen konnten; sie ist keine Rangliste.

| Anbieter | Was wir bestätigen konnten | Was Sie fragen sollten |
|---|---|---|
| Network International | Sitz in Dubai; im September 2024 von Brookfield übernommen und 2025 mit Magnati fusioniert | Mit welcher Gesellschaft Sie nach der Fusion den Vertrag schließen, und die Auszahlungsfristen |
| Telr | Adresse in Dubai; nach eigener Aussage „licensed and regulated by the Central Bank of the UAE“; veröffentlicht VAE-Tarife nach Monatsvolumen | Welcher Tarif zu Ihrem Volumen passt, und der Aufschlag für ausländische Karten |
| PayTabs | Führt die VAE als Markt; „Products and features may vary by country“; auf der Hauptpreisseite fanden wir keine öffentlichen Gateway-Preise für die VAE | Ein schriftliches Angebot für die VAE und die dort aktiven Zahlungsarten |
| Checkout.com | Internationaler Zahlungsabwickler; manche regionalen Zahlungsarten sind „Gateway only“ und erfordern einen Direktvertrag mit dem lokalen Anbieter | Welche VAE-Zahlungsarten er selbst abwickelt und welche einen zweiten Vertrag brauchen |

Auch Ihre eigene Bank bietet möglicherweise ein Gateway an. Ein Bankprodukt kann bei der Auszahlung bequem sein, aber vergleichen Sie dessen Entwicklerdokumentation und Erstattungsfunktionen mit denen der Spezialisten, bevor Sie sich entscheiden.

## Wie Gateway-Gebühren funktionieren

Gateway-Preise haben mehr Bestandteile als den beworbenen Prozentsatz. Die veröffentlichten VAE-Tarife von Telr zeigen die typische Struktur: Stufen nach Monatsvolumen, eine Monatsgebühr, die mit steigendem Volumen sinkt, ein Prozentsatz plus ein fester AED-Betrag pro Transaktion, ein zusätzlicher Prozentsatz für internationale Karten und der Hinweis, dass alle Gebühren der Mehrwertsteuer von 5 % unterliegen. Ab 500.000 AED im Monat bittet Telr Händler, sich für einen individuellen Tarif zu melden.

Wenn Sie Angebote vergleichen, tragen Sie jede Position in eine Tabelle ein:

| Gebühr | Was Sie prüfen sollten |
|---|---|
| Einrichtungsgebühr | Ob es eine gibt und ob sie erstattet wird, wenn die Freischaltung scheitert |
| Monatsgebühr | Ob sie auch in Monaten ohne Umsatz anfällt |
| Transaktionsgebühr | Prozentsatz und fester Betrag, für inländische und ausländische Karten |
| Wallets und Ratenzahlung | Ob Apple Pay oder „Jetzt kaufen, später bezahlen“ anders bepreist sind |
| Erstattungen | Ob die ursprüngliche Gebühr zurückkommt und ob Erstattungen extra kosten |
| Rückbuchungen | Die Gebühr pro Streitfall und wer die Nachweise sammelt |
| Auszahlung | Wie viele Tage bis zum Eingang auf Ihrem Konto, und ob eine Sicherheitsreserve einbehalten wird |
| Währung | Ob Sie in AED ausgezahlt werden und welche Umrechnungsmarge für andere Währungen gilt |

Ein kleiner Shop mit einigen hundert Bestellungen im Monat zahlt unter Umständen mehr an festen Monatsgebühren als an Prozenten. Rechnen Sie die Kosten deshalb mit Ihrem echten Volumen durch, nicht mit dem Beispiel des Anbieters, und planen Sie die 5 % Mehrwertsteuer auf die Gebühren ein.

## Lizenz-, Daten- und Rechnungsregeln, die Ihre Wahl beeinflussen

Wählen Sie einen Anbieter, der für die Tätigkeit in den VAE lizenziert ist, und prüfen Sie das auf seiner eigenen Website. Die folgenden Regeln bestimmen, was Sie fragen sollten, auch wenn die meisten Pflichten beim Anbieter liegen.

- **Zahlungsdaten bleiben in den VAE.** Nach den sektoralen Regeln der VAE, wie DLA Piper sie zusammenfasst, müssen Zahlungsdienstleister personenbezogene Daten und Zahlungsdaten in den VAE speichern. Fragen Sie, wo Ihre Transaktionsdaten gespeichert und verarbeitet werden.
- **Personenbezogene Daten.** Das Datenschutzgesetz der VAE (Federal Decree-Law 45/2021) gilt für das Festland, nicht aber für DIFC und ADGM, die eigene Gesetze haben. Die Durchführungsbestimmungen wurden noch nicht erlassen; fragen Sie daher Ihren Anwalt, was für Sie gilt, statt sich auf die Zusammenfassung eines Anbieters zu verlassen.
- **Ihre E-Commerce-Lizenz.** Wer in den VAE online verkauft, braucht eine Lizenz, die E-Commerce umfasst, und eine Genehmigung der TDRA; jede Transaktion braucht eine klare digitale Rechnung. Rechnen Sie damit, dass das Gateway die Lizenz bei der Freischaltung verlangt. Mehr dazu in [unserem Leitfaden zur E-Commerce-Lizenz in den VAE](/blog/uae-ecommerce-licence-online-store).
- **E-Rechnungen.** Das E-Invoicing-System des Finanzministeriums umfasst B2B- und B2G-Umsätze und startet am 1. Januar 2027 für Unternehmen mit einem Umsatz ab 50 Millionen AED und am 1. Juli 2027 für alle übrigen. B2C ist vorerst ausgenommen. Ein Gateway-Beleg oder ein PDF ist keine E-Rechnung; wenn Sie an andere Unternehmen verkaufen, braucht Ihr Rechnungssystem daher eine eigene Anbindung an einen akkreditierten Dienstleister.

Eine praktische Regel schützt Sie unabhängig von der Rechtslage: Lassen Sie Kartennummern nie über Ihre eigenen Server laufen. Nutzen Sie die gehostete Zahlungsseite des Gateways oder dessen Tokenisierung, sodass Ihr System nur eine Referenz speichert.

## Was die Anbindung tatsächlich umfasst

Der größte Aufwand steckt nicht im Bezahlknopf, sondern in allem drumherum.

1. **Checkout-Typ wählen.** Eine gehostete Seite (der Kunde wird zum Gateway weitergeleitet) ist am schnellsten und sichersten. Ein eingebettetes Formular wirkt eleganter, braucht aber mehr Sorgfalt. Zahlungen in nativen Apps erfordern meist das mobile SDK des Gateways.
2. **Webhooks verarbeiten.** Das Gateway meldet Ihrem Server jede Zahlung, Erstattung und Rückbuchung im Hintergrund. Ihr System muss diese Nachrichten annehmen, prüfen und die Bestellung aktualisieren, auch wenn der Kunde den Browser geschlossen hat.
3. **Erstattungen aus Ihrer eigenen Verwaltungsoberfläche.** Mitarbeiter sollten über Ihr System erstatten, das das Gateway aufruft, statt sich in ein separates Portal einzuloggen.
4. **Abgleich.** Jede Auszahlung sollte einer Liste von Bestellungen abzüglich Gebühren entsprechen, damit Ihr Buchhalter den Monat ohne Rätselraten abschließen kann.
5. **Arabisch und Englisch.** Zahlungsseite, Fehlermeldungen und Belege sollten in beiden Sprachen funktionieren, einschließlich Rechts-nach-links-Layout.
6. **Testen.** Testen Sie in der Sandbox Ablehnungen, Zeitüberschreitungen, doppelte Webhooks, Teilerstattungen und 3-D Secure, bevor Sie live gehen.

Wenn das Gateway auch eine Kasse, eine Buchhaltung oder ein ERP-System versorgen soll, planen Sie diese Verbindungen gemeinsam; wie das geht, erklären wir in [Die Systeme verbinden, die Sie bereits nutzen](/blog/api-integration-connecting-business-systems). Viele derselben Lehren finden Sie in unserem Leitfaden zum [Aufbau eines Onlineshops in Ägypten](/blog/online-store-egypt-payments-and-delivery), wo Zahlungen und Erstattungen meist zuerst Probleme machen. Wenn Sie noch das Budget für die Website selbst planen, lesen Sie [Was eine Website in den VAE kostet](/blog/website-design-cost-uae).

Bei KF Tech Solutions entwickeln wir das [Backend und die Schnittstellen](/services/api-and-backend) hinter Websites, Apps und Geschäftssystemen, darunter Anbindungen von Payment-Gateways mit Webhooks, Erstattungen und Abgleich sowie Verbindungen zu Buchhaltungssystemen und Behördenplattformen. Wir arbeiten mit Unternehmen in Ägypten und am Golf; mehr über [die Zusammenarbeit mit uns aus den VAE](/uae).

## Fragen an ein Gateway, bevor Sie unterschreiben

Schicken Sie jedem Anbieter dieselbe Liste und vergleichen Sie die schriftlichen Antworten:

1. Mit welcher Gesellschaft schließen wir den Vertrag, und welche VAE-Lizenz hat sie?
2. Welche Zahlungsarten sind für Händler in den VAE heute aktiv: Karten, Apple Pay, Jaywan, Aani, Ratenzahlung?
3. Wie lautet die vollständige Gebührenliste, einschließlich Monats-, Auslandskarten-, Erstattungs- und Rückbuchungsgebühren, vor Mehrwertsteuer?
4. Wie viele Tage bis zur Auszahlung, in welcher Währung, und wird eine Reserve einbehalten?
5. Wo werden unsere Transaktionsdaten gespeichert und verarbeitet?
6. Bieten Sie eine Sandbox, signierte Webhooks, Erstattungen per API und einen herunterladbaren Auszahlungsbericht?
7. Welche Unterlagen brauchen Sie für die Freischaltung, und wie lange dauert die Genehmigung üblicherweise?
8. Welche Kündigungsfrist gilt, und können wir unsere Transaktionshistorie exportieren?

## Häufige Fragen

### Welches Payment-Gateway ist in den VAE das beste?

Ein einzelnes bestes gibt es nicht. Die richtige Wahl hängt von Ihrem Volumen ab, von den Zahlungsarten Ihrer Kunden, davon, wie schnell Sie Auszahlungen brauchen, und von der Qualität der Entwicklerwerkzeuge. Vergleichen Sie zwei oder drei lizenzierte Anbieter anhand derselben schriftlichen Fragenliste.

### Muss ich Aani oder Jaywan akzeptieren?

In den von uns geprüften Quellen steht nicht, dass private Unternehmen sie akzeptieren müssen. Sie werden von einer Tochter der Zentralbank betrieben, und das Finanzministerium akzeptiert bereits beide; fragen Sie daher jedes Gateway, ob und ab wann es sie unterstützt.

### Kann ein Freizonen-Unternehmen ein Gateway in den VAE nutzen?

Fragen Sie das Gateway direkt; rechnen Sie damit, dass es bei der Freischaltung Ihre Handelslizenz verlangt. Wenn Sie an Kunden auf dem Festland verkaufen, prüfen Sie, ob Ihre Lizenz und Ihre Struktur das erlauben, denn Freizonen-Unternehmen brauchen dafür einen lizenzierten Vertriebspartner, eine Niederlassung oder eine Gesellschaft auf dem Festland.

### Wie lange dauert die Anbindung?

Eine gehostete Zahlungsseite lässt sich bei einem einfachen Shop schnell anbinden, sobald das Händlerkonto genehmigt ist. Webhooks, Erstattungen, Abgleich und Verbindungen zu Kasse oder Buchhaltung dauern länger, und auch die Genehmigung durch das Gateway braucht Zeit; beginnen Sie die Freischaltung daher früh.

### Reicht ein Gateway-Beleg als Rechnung?

Nach den E-Commerce-Regeln der VAE braucht jede Online-Transaktion eine klare digitale Rechnung, und ein Gateway-Beleg ist dafür nicht gedacht. Für B2B-Umsätze müssen Rechnungen ab 2027 über das E-Invoicing-System laufen, was weder ein Gateway-Beleg noch ein PDF erfüllt.

Sie wählen gerade ein Gateway und möchten es an Ihren Shop, Ihre App oder Ihr Geschäftssystem anbinden? [Schreiben Sie uns](/contact) oder [buchen Sie ein kostenloses Gespräch](/book) und erzählen Sie uns, was Sie verkaufen und wie Ihre Kunden bezahlen.

## Quellen

- [The National: VAE erweitern staatliche Zahlungskanäle um Aani und Jaywan](https://thenationalnews.com/business/banking/2026/08/03/uae-expands-federal-payment-channels-with-aani-and-jaywan)
- [Network International (Wikipedia)](https://en.wikipedia.org/wiki/Network_International)
- [Telr: Preise für die VAE](https://telr.com/pricing)
- [Telr VAE](https://telr.com/)
- [PayTabs](https://www.paytabs.com/en/) und [PayTabs-Preise](https://paytabs.com/en/pricing)
- [Checkout.com: KNET](https://www.checkout.com/payment-methods/knet)
- [DLA Piper: Datenschutzrecht in den VAE](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
- [Legal 500: Daten- und KI-Governance in den VAE](https://www.legal500.com/intelligence/united-arab-emirates/strategy/the-uae-artificial-intelligence-and-data-authority-what-it-means-for-ai-data-and-digital-governance)
- [Regierungsportal der VAE: E-Commerce](https://u.ae/en/information-and-services/business/Managing-and-growing-your-business/ecommerce)
- [Regierungsportal der VAE: Geschäftstätigkeit in einer Freizone](https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-)
- [Finanzministerium der VAE: E-Invoicing](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
