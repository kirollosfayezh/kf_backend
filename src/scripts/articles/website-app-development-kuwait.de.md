---
title: Website oder App für Kuwait: KNET und CITRA
summary: Was sich ändert, wenn Ihre Kunden in Kuwait sind: KNET-Zahlungen, Datenschutz nach CITRA, AGB auf Arabisch und Englisch, keine MwSt. und die Wahl des Anbieters.
tags: Webdesign, App-Entwicklung, KNET, CITRA, Datenschutz, Kuwait
alt: Die Kuwait Towers ragen über grüne Baumkronen in einen klaren blauen Himmel
caption: Eine Website für Kuwait muss KNET annehmen, AGB auf Arabisch und Englisch bieten und die CITRA-Datenregeln einhalten.
stats: ~80 %|der Online-Transaktionen in Kuwait laufen über KNET-Karten; 24 Std.|Frist für die Meldung einer Datenpanne nach CITRA-Beschluss 26/2024; 2|Sprachen für Ihre Bedingungen: Arabisch und Englisch
---

Eine Website oder App für Kunden in Kuwait braucht zwei Dinge, die bei einem Standardprojekt oft fehlen: KNET an der Kasse, denn fast 80 % der Online-Transaktionen in Kuwait laufen über KNET-Karten, und einen Datenschutz, der dem CITRA-Beschluss 26/2024 folgt, also Bedingungen auf Arabisch und Englisch, Einwilligung und eine Meldung von Datenpannen innerhalb von 24 Stunden. Steuerlich ist es einfacher als in Saudi-Arabien: Kuwait erhebt keine Mehrwertsteuer, und wir haben keine E-Rechnungspflicht gefunden. Dieser Leitfaden zeigt, was Sie planen sollten, was Sie einen Entwickler fragen sollten und wo der eigentliche Aufwand liegt.

Zuletzt geprüft: 6. November 2026

## Was sich ändert, wenn die Kunden in Kuwait sind

Das meiste an einer guten Website oder App ist überall gleich: schnelle Seiten, klare Inhalte, ein Bezahlvorgang, der auf dem Handy funktioniert. Die Unterschiede für Kuwait liegen an wenigen, klar benennbaren Stellen, und jede davon ist günstiger vor dem Design zu planen als nach dem Start nachzurüsten.

| Thema | Kuwait heute | Was das für das Projekt bedeutet |
|---|---|---|
| Kartenzahlung | KNET wickelt fast 80 % der Online-Transaktionen ab | KNET gehört an die Kasse, nicht nur Visa und Mastercard |
| Personenbezogene Daten | CITRA-Verwaltungsbeschluss 26/2024 | Zweisprachige Bedingungen, Einwilligung, 24-Stunden-Meldeverfahren |
| Mehrwertsteuer | Keine; die GCC-MwSt. wird noch im Parlament beraten | Vorerst keine MwSt.-Positionen auf Rechnungen |
| E-Rechnung | Keine Pflicht gefunden | Heute keine Anbindung an eine Steuerbehörde nötig |
| Essenslieferung | talabat und Keeta sind beide aktiv | Entscheiden Sie: über sie verkaufen, direkt oder beides |
| Zeitzone | Ganzjährig UTC+3, keine Zeitumstellung | Im Sommer wie Kairo, im Winter eine Stunde voraus |

Der Rest dieses Leitfadens geht die Punkte einzeln durch, beginnend mit dem einfachsten.

### Steuern und Rechnungen: einfacher als in Saudi-Arabien

Kuwait erhebt keine Mehrwertsteuer. Die Steuerübersicht von PwC, im Juli 2026 überprüft, beschreibt den GCC-Mehrwertsteuerrahmen als weiterhin „under discussion in the Parliament“. Eine E-Rechnungspflicht haben wir in Kuwait zum 6. November 2026 ebenfalls nicht gefunden.

Für Ihr Projekt heißt das: Ein Onlineshop oder eine Buchungs-App für Kuwait braucht heute weder MwSt.-Berechnung noch eine Anbindung an eine Steuerbehörde. Verkaufen Sie auch in Saudi-Arabien, den VAE oder Oman, sieht es anders aus: Dort gibt es Mehrwertsteuer und Zeitpläne für die E-Rechnung, und ein System für mehrere Golfmärkte sollte Steuereinstellungen pro Land führen, statt eine einzige fest einzubauen. Dies sind allgemeine Informationen, keine Steuerberatung; fragen Sie Ihren Steuerberater, was für Ihr Unternehmen gilt.

## Zahlungen: KNET vom ersten Tag an einplanen

KNET ist das lokale Kartennetz Kuwaits. Laut Checkout.com laufen fast 80 % der Online-Transaktionen in Kuwait über KNET-Karten; das Netz hat 11 Mitgliedsbanken und akzeptiert lokale Debitkarten. Nimmt Ihre Kasse nur Visa und Mastercard an, erreicht ein großer Teil der Kunden in Kuwait die Zahlungsseite und bricht dort ab.

In der Praxis bedeutet das drei Dinge:

- **Wählen Sie den Zahlungsdienstleister vor dem Design.** KNET wird über ein lizenziertes Payment-Gateway eingebunden, das es unterstützt, und diese Wahl prägt die Kassenseiten, den Erstattungsablauf und die Berichte für Ihre Buchhaltung.
- **Beginnen Sie die Händler-Registrierung früh.** Das Gateway muss Ihr Unternehmen als Händler freigeben. Die Unterlagen können länger dauern als die Programmierung, also starten Sie damit, während die Website gestaltet wird.
- **Testen Sie vor dem Start mit echten KNET-Karten.** Testkarten zeigen, dass die Anbindung funktioniert. Eine kleine echte Zahlung mit anschließender Erstattung zeigt, dass Ihr Händlerkonto richtig eingerichtet ist.

Wenn Sie Shopify nutzen möchten: Shopify Payments, die integrierte Zahlungsoption von Shopify, ist in Kuwait nicht verfügbar. Ein Shopify-Shop dort braucht einen externen Zahlungsanbieter, prüfen Sie also vor der Entscheidung für die Plattform, ob dieser Anbieter KNET unterstützt.

## Personenbezogene Daten: CITRA-Beschluss 26/2024

Die Datenschutzregeln Kuwaits stammen von der Regulierungsbehörde für Kommunikation und Informationstechnologie (CITRA), im Verwaltungsbeschluss 26/2024. Dieser Abschnitt ist eine allgemeine Information, keine Rechtsberatung. Laut der Übersicht von DLA Piper ist die Definition von „Dienstanbieter“ so weit gefasst, dass sie jeden umfasst, der eine Website, eine App oder einen Cloud-Dienst betreibt, der personenbezogene Daten erhebt. Wenn Ihr Kontaktformular Name und Telefonnummer abfragt, sollten Sie davon ausgehen, dass der Beschluss für Sie gilt.

Diese Punkte betreffen die Umsetzung direkt:

- **Bedingungen auf Arabisch und Englisch.** Datenschutzerklärung und Bedingungen müssen in beiden Sprachen vorliegen. Das ist Inhaltsarbeit, aber die Website muss auch so gebaut sein, dass beide Fassungen leicht zu finden sind und übereinstimmen.
- **Einwilligung.** Nutzer müssen zustimmen, bevor ihre Daten erhoben werden. Das bedeutet einen klaren Einwilligungsschritt in Registrierungs- und Kontaktformularen und eine Aufzeichnung, wann jede Person zugestimmt hat.
- **Meldung einer Datenpanne innerhalb von 24 Stunden.** Datenpannen müssen innerhalb von 24 Stunden an CITRA und an die Betroffenen gemeldet werden. Ohne Protokolle, Warnmeldungen und einen schriftlichen Plan, wer im Ernstfall was tut, ist diese Frist nicht einzuhalten.

Die Übersicht von DLA Piper nennt außerdem Strafen von 1 bis 5 Jahren Haft und/oder Geldstrafen von 500 bis 20.000 Kuwait-Dinar. Lassen Sie den endgültigen Text Ihrer Datenschutzerklärung von einem Anwalt in Kuwait prüfen; Aufgabe Ihres Entwicklers ist es, dass die Website kann, was die Erklärung verspricht.

## Website, Web-App oder mobile App?

Beginnen Sie bei dem, was Ihre Kunden tun müssen, nicht beim Format:

- **Eine Unternehmenswebsite** erklärt Ihr Angebot und macht aus Besuchen Anrufe, WhatsApp-Nachrichten und Angebotsanfragen. Für die meisten Dienstleister ist sie der richtige erste Schritt. Unser Leitfaden zu den [Kosten einer Unternehmenswebsite](/blog/company-website-cost-egypt) erklärt, was den Umfang bestimmt.
- **Ein Onlineshop oder eine Web-App** passt zu Unternehmen, die Bestellungen, Buchungen oder Zahlungen annehmen. Sie läuft im Browser auf jedem Handy und braucht keine Freigabe im App Store.
- **Eine mobile App** lohnt sich, wenn Kunden oft wiederkommen: Treueprogramme, Nachbestellungen, Buchungen, Sendungsverfolgung. Sie bringt Arbeit für zwei App Stores und für Updates mit sich. Unsere Aufstellung, [was eine mobile App kostet](/blog/app-development-cost-egypt), zeigt, wohin dieser Aufwand fließt.

Restaurants und Geschäfte haben eine zusätzliche Frage. talabat und Keeta sind beide in Kuwait aktiv (Keeta startete dort am 15. September 2025, als dritter Markt im Nahen Osten). Viele Betriebe verkaufen über diese Plattformen und betreiben zugleich eine eigene Bestellseite oder App, damit Stammkunden direkt bestellen können. Wenn Sie beides tun, planen Sie von Anfang an, wie Bestellungen aus jedem Kanal in Küche oder Lager ankommen, damit Ihr Personal nicht drei Bildschirme im Blick behalten muss.

## Den richtigen Anbieter wählen

Sie müssen nicht technisch versiert sein, um gut zu wählen. Unser Leitfaden, [wie Sie ein Softwareunternehmen auswählen](/blog/how-to-choose-a-software-company), beschreibt das allgemeine Vorgehen; für Kuwait kommen diese Prüfpunkte hinzu:

1. **Fragen Sie, ob der Anbieter KNET schon angebunden hat**, über welches Gateway, und lassen Sie sich eine laufende Kasse zeigen.
2. **Prüfen Sie das Arabische.** Lassen Sie sich eine arabische Seite aus seinen Projekten zeigen. Sie sollte von rechts nach links gestaltet sein, nicht nur gespiegelt, mit korrekten Zahlen und Satzzeichen.
3. **Fragen Sie, wie die Website Einwilligungen und Datenpannen handhabt**, mit Blick auf die 24-Stunden-Meldefrist von CITRA.
4. **Fragen Sie, wo Ihre Daten gehostet werden**, und lassen Sie sich die Antwort schriftlich geben.
5. **Regeln Sie die Eigentumsfragen im Vertrag**: eine Geheimhaltungsvereinbarung, Rückgabe oder sichere Löschung Ihrer Daten am Vertragsende, ein Verfahren zur Meldung von Vorfällen und die vollständige Übertragung von Quellcode und geistigem Eigentum an Ihr Unternehmen.
6. **Vereinbaren Sie die Zusammenarbeit über Zeitzonen.** Kuwait liegt ganzjährig bei UTC+3. Kairo hat von Ende April bis Ende Oktober dieselbe Zeit und ist im Winter eine Stunde zurück, ein Team in Kairo teilt also Ihren Arbeitstag.

Projekte beginnen bei 200 $ (etwa 750 SAR / 735 AED); der endgültige Preis hängt vom Umfang ab, mit einem festen schriftlichen Angebot nach einem kostenlosen Gespräch.

## Was KF Tech Solutions hier leistet

KF Tech Solutions ist ein Softwarestudio mit Sitz in Kairo, Ägypten, gegründet 2020. Wir arbeiten mit Unternehmen in Ägypten und am Golf, aus der Ferne. Wir bauen Unternehmenswebsites, Onlineshops, Web-Apps und [mobile Apps](/services/mobile-applications) auf Arabisch und Englisch, mit einem Verwaltungsbereich, in dem Sie Inhalte selbst bearbeiten. Wir binden das Payment-Gateway Ihrer Wahl an und entwickeln die arabische und die englische Fassung parallel. Mehr darüber, wie wir mit Unternehmen am Golf arbeiten, finden Sie auf unserer [Golf-Seite](/gulf).

## Häufige Fragen

### Brauche ich KNET, wenn ich schon Visa und Mastercard annehme?

Für die meisten Endkundengeschäfte in Kuwait ja. Fast 80 % der Online-Transaktionen dort laufen über KNET-Karten, eine Kasse ohne KNET verliert also im letzten Schritt einen großen Teil der Kunden.

### Gilt der CITRA-Beschluss 26/2024 auch für die Website eines kleinen Unternehmens?

Seine Definition von „Dienstanbieter“ ist so weit gefasst, dass sie jeden umfasst, der eine Website oder App betreibt, die personenbezogene Daten erhebt. Wenn Sie Namen, Telefonnummern oder E-Mail-Adressen erfassen, planen Sie zweisprachige Bedingungen, Einwilligung und ein Meldeverfahren ein und klären Sie die Details mit einem Anwalt.

### Braucht mein Shop in Kuwait E-Rechnungen oder Mehrwertsteuer?

Nicht zum 6. November 2026. Kuwait erhebt keine Mehrwertsteuer, und wir haben keine E-Rechnungspflicht gefunden. Wenn Sie auch in anderen Golfstaaten verkaufen, führen Sie Steuereinstellungen pro Land.

### Kann ein Unternehmen in Kairo eine App für ein Unternehmen in Kuwait bauen?

Ja. Die Arbeit läuft aus der Ferne, mit Gesprächen, gemeinsamen Entwürfen und Testversionen. Kairo hat von Ende April bis Ende Oktober dieselbe Zeit wie Kuwait und ist im Winter eine Stunde zurück.

### Kann ich Shopify in Kuwait nutzen?

Sie können einen Shopify-Shop betreiben, aber Shopify Payments ist in Kuwait nicht verfügbar. Sie brauchen einen externen Zahlungsanbieter, prüfen Sie also zuerst, ob er KNET unterstützt.

## Bereit, Ihr Projekt zu planen?

Erzählen Sie uns, was Sie bauen möchten und für wen. [Buchen Sie ein kostenloses Gespräch](/book) oder [schreiben Sie uns](/contact), und Sie erhalten ein festes schriftliches Angebot, sobald wir den Umfang verstanden haben.

## Quellen

- [Zahlungsmethode KNET, Checkout.com](https://www.checkout.com/payment-methods/knet)
- [Datenschutzgesetze in Kuwait, DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=KW)
- [Kuwait: sonstige Steuern, PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/kuwait/corporate/other-taxes)
- [Länder mit Shopify Payments, Shopify-Hilfecenter](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries)
- [Meituan bringt Keeta nach Kuwait, TechNode](https://technode.com/2025/09/16/meituan-expands-food-delivery-brand-keeta-to-kuwait/)
- [Sommerzeit in Ägypten, Ahram Online](https://english.ahram.org.eg/NewsContentP/1/566547/Egypt/Egypt-to-move-clocks-forward-one-hour-on-Friday-fo.aspx)
