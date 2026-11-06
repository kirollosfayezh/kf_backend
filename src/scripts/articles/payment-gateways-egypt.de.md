---
title: Zahlungsanbieter in Ägypten im Vergleich für Onlineshops
summary: Paymob, Fawry, Kashier und Geidea im Vergleich: Zahlungsarten, veröffentlichte Gebühren, Auszahlung, Unterlagen und der echte Aufwand der Anbindung.
tags: Payment-Gateway, Paymob, Fawry, Meeza, Mobile Wallets, Online-Zahlungen, Ägypten
alt: Eine ägyptische Ein-Pfund-Münze steht aufrecht auf einem Haufen anderer Münzen
caption: Gebühren, Auszahlungsfristen und die Zahlungsarten Ihrer Kunden entscheiden, bei welchem Anbieter mehr von jedem Pfund bleibt.
stats: 2,75 % + 3 EGP|veröffentlichter Online-Kartentarif von Kashier, zzgl. 14 % USt. auf die Gebühr; 24/7|InstaPay-Überweisungen, laut ägyptischer Zentralbank seit März 2022; 3|Tests vor dem Start: Webhooks, Erstattungen, Abgleich
---

Wer in Ägypten online Zahlungen annehmen will, braucht ein Payment-Gateway, das Karten einschließlich Meeza, Mobile Wallets und für viele Shops auch eine Barzahlung per Referenzcode oder Nachnahme abdeckt. Paymob, Fawry, Kashier und Geidea unterstützen Karten und zumindest einen Teil der lokalen Zahlungsarten. Die eigentliche Wahl hängt daher von Gebühren, Auszahlungsfristen, geforderten Unterlagen und davon ab, wie sauber sich das Gateway an Ihren Shop oder Ihre App anbinden lässt. Bauen Sie den Checkout in jedem Fall so, dass jede Zahlung einer Bestellung in Ihrem eigenen System zugeordnet wird.

Zuletzt geprüft: 6. November 2026

## Welche Zahlungsarten Kunden in Ägypten nutzen

Ein ägyptischer Checkout muss mehr als Karten können: Viele Kunden haben keine Kreditkarte, zahlen lieber bar oder bezahlen mit dem Smartphone.

| Zahlungsart | Was sie ist | Warum sie zählt |
| --- | --- | --- |
| Visa und Mastercard | Internationale Debit- und Kreditkarten | Weiterhin die Basis jedes Online-Checkouts |
| Meeza | Das nationale Kartensystem Ägyptens | Viele lokale Debit- und Prepaidkarten sind Meeza-Karten; ohne Meeza verlieren Sie Kunden |
| Mobile Wallets | Wallets wie Vodafone Cash, Orange Cash, e& money und WE Pay | Auch Kunden ohne Karte können online bezahlen |
| Referenzcode am Kiosk | Der Kunde erhält einen Code und zahlt bar an einer Annahmestelle wie Fawry oder Aman | Barzahler bezahlen vor dem Versand statt bei Lieferung |
| Ratenzahlung (BNPL) | Anbieter wie valU, Sympl, Souhoola und Contact | Erwartet bei Elektronik, Möbeln und anderen höherpreisigen Waren |
| Nachnahme | Der Kurier kassiert bar | Weiterhin verbreitet; ein Lieferprozess, keine Gateway-Funktion |

InstaPay verdient einen eigenen Hinweis. Es läuft über das Instant Payment Network der ägyptischen Zentralbank, das im März 2022 gestartet ist, und überweist rund um die Uhr zwischen Bankkonten, Meeza-Karten und Mobile Wallets. Es ist jedoch ein Überweisungsdienst, und keine der von uns geprüften Gateway-Seiten führt es als Checkout-Zahlungsart. Wenn Sie InstaPay-Überweisungen direkt annehmen, muss jemand jede Überweisung von Hand einer Bestellung zuordnen.

## Welche Gateways diese Zahlungsarten anbieten

Die Tabelle fasst zusammen, was jeder Anbieter auf seinen eigenen Seiten veröffentlicht. Die Verfügbarkeit kann von Ihrer Branche und der Freigabe Ihres Kontos abhängen. Lassen Sie sich daher jede benötigte Zahlungsart schriftlich bestätigen, bevor die Entwicklung beginnt.

| Gateway | Karten | Wallets | Bar und Kiosk | Ratenzahlung | Fertige Anbindungen |
| --- | --- | --- | --- | --- | --- |
| Paymob | Visa, Mastercard und weitere; Apple Pay und Google Pay über den eingebetteten Checkout | Vodafone Cash, Orange Cash, e& money, WE Pay | Kioske von Aman und Masary | valU, Sympl, Souhoola, Forsa, Contact und weitere | Shopify, WooCommerce, Web- und Mobile-SDKs, Zahlungslinks |
| Fawry (FawryPay) | Karten | Mobile Wallets | Zahlung bei Fawry per Referenzcode; Nachnahme | Bei Fawry erfragen | Server-APIs und gehosteter Checkout |
| Kashier | Visa, Mastercard, Meeza | Verfügbar, Preis über den Vertrieb | Kiosk-Tarife über den Vertrieb | Über Partnerprogramme | APIs, gehosteter Checkout, kostenloser Testmodus |
| Geidea | Meeza, Visa, Mastercard | Meeza-QR-Wallet | Auf der Gateway-Seite nicht genannt | BNPL und Bankraten, darunter valU und Souhoola | Shopify, WooCommerce, Magento, OpenCart, PrestaShop; SDKs für Android, iOS, Flutter und React Native |

Einige praktische Unterschiede fallen auf:

- **Fawrys Stärke ist Bargeld.** Ein FawryPay-Referenzcode lässt sich in Fawry-Annahmestellen oder über die myfawry-App bezahlen. Das passt zu Kunden, die nicht mit Karte zahlen.
- **Paymob listet die meisten Ratenzahlungsanbieter**, was bei höherpreisigen Waren wichtig ist.
- **Kashier veröffentlicht einen Kartentarif** auf seiner Preisseite, was den ersten Vergleich erleichtert.
- **Geidea nennt Plugins für fünf Shop-Plattformen** und verkauft auch Kartenterminals für den Laden. Das hilft, wenn Sie online und im Geschäft einen Anbieter wollen.

## Gebühren und Auszahlung: was die Anbieter veröffentlichen

Die Preisseite von Kashier nennt 2,75 % + 3,00 EGP pro erfolgreicher Online-Kartenzahlung mit Visa, Mastercard oder Meeza, ohne Einrichtungs- oder Monatsgebühr. Die Umsatzsteuer von 14 % fällt nur auf die Kashier-Gebühr an, nicht auf den Bestellbetrag, und Erstattungen sowie fehlgeschlagene Versuche werden nicht berechnet. Wallets, Kioskzahlungen, Ratenzahlung und internationale Karten werden über den Vertrieb bepreist, und ausgezahlt wird nach dem für Ihr Konto vereinbarten Rhythmus.

Die anderen drei Anbieter veröffentlichen auf den von uns geprüften Seiten keine vollständige Preisliste, Sie brauchen also ein schriftliches Angebot. Stellen Sie jedem Anbieter dieselben Fragen, damit sich die Angebote vergleichen lassen:

1. Welcher Tarif gilt für jede Zahlungsart, die Sie nutzen: lokale Karten, internationale Karten, Wallets, Kiosk und Ratenzahlung?
2. Kommt die Umsatzsteuer auf die Gebühr hinzu?
3. Gibt es Einrichtungs-, Monats-, Erstattungs- oder Chargeback-Gebühren?
4. Wie viele Tage nach einer Zahlung ist das Geld auf Ihrem Bankkonto, und ist ein schnellerer Rhythmus möglich?
5. Gibt es bei neuen Konten einen Sicherheitseinbehalt?
6. Was enthält der Auszahlungsbericht, und lässt er sich herunterladen oder per API abrufen?

Rechnen Sie anschließend mit Ihrem eigenen Umsatzmix, denn Wallet- und Kioskzahlungen können anders bepreist sein als Karten.

## Was Sie vor dem Antrag brauchen

Jeder Anbieter legt seine eigenen Anforderungen fest, fragen Sie also früh nach der genauen Liste. Bereiten Sie Folgendes vor, denn einiges davon wird voraussichtlich verlangt:

- **Firmenunterlagen**: Handelsregisterauszug und Steuerkarte oder das Äquivalent für Ihre Rechtsform.
- **Ein Bankkonto auf den Namen des Unternehmens** für die Auszahlungen.
- **Eine funktionierende Website oder App** mit Produkten, Preisen, Kontaktdaten, Liefer- und Rückgaberichtlinien und Nutzungsbedingungen.
- **Identitätsnachweis des Inhabers**: Laut Geidea-Dokumentation verlangt Meeza zum Beispiel die nationale ID-Nummer und die Handelsregisternummer des Händlers, bevor Meeza QR freigeschaltet wird.

Manche Zahlungsarten brauchen zusätzlich zum Gateway-Konto eine eigene Freigabe. Für Meeza-QR-Zahlungen über Geidea muss sich der Händler zum Beispiel zuerst bei Meeza registrieren, und Kashier gibt an, dass Ratenzahlung von der Zustimmung des jeweiligen Partners abhängt. Planen Sie diese Zeit für den Start ein.

## Was die Anbindung wirklich umfasst

Ein „Bezahlen“-Button ist schnell eingebaut; zuverlässige Zahlungen sind die eigentliche Arbeit. Den allgemeinen Ansatz beschreiben wir in [Systeme verbinden, die Sie bereits nutzen](/blog/api-integration-connecting-business-systems); für Zahlungen in Ägypten zählen diese Punkte.

### Gehostete Seite, eingebettetes Formular oder SDK

- **Gehosteter Checkout oder Weiterleitung.** Der Kunde wechselt auf die Seite des Gateways und kehrt danach zurück. Kartendaten berühren Ihren Server nie.
- **Eingebetteter Checkout.** Das Zahlungsformular erscheint in Ihrer Seite, wird aber vom Gateway ausgeliefert, etwa Paymob Pixel oder die Pop-up- und eingebetteten Formulare von Geidea.
- **Mobile SDK.** In Android- und iOS-Apps übernimmt das SDK des Gateways Karten, Wallets und Authentifizierung innerhalb der App.

Wenn Sie über Shopify oder WooCommerce verkaufen, kann ein fertiges Plugin genügen. Unser Vergleich [Shopify oder eigener Onlineshop in Ägypten](/blog/shopify-vs-custom-online-store-egypt) erklärt, wann nicht.

### Nicht jede Zahlung kommt sofort

Eine Kartenzahlung gelingt oder scheitert in Sekunden. Ein Kiosk-Referenzcode wird vielleicht Stunden später bezahlt oder nie. Ihr Bestellsystem braucht deshalb einen Status „Zahlung ausstehend“, eine Frist, nach der unbezahlte Bestellungen storniert und der Bestand freigegeben wird, und eine klare Nachricht an den Kunden, wie lange der Code gilt. Fragen Sie jeden Anbieter, wie lange seine Referenzcodes gültig sind.

### Webhooks statt Weiterleitung

Ihre Website erfährt das Ergebnis einer Zahlung zweimal: wenn der Browser auf Ihre Dankeseite zurückkehrt und wenn das Gateway eine Server-zu-Server-Benachrichtigung sendet, einen Webhook. Verlassen Sie sich auf den Webhook, denn Kunden schließen Tabs und Smartphones verlieren das Netz. Ihr Backend sollte die Signatur prüfen, doppelt eintreffende Ereignisse abfangen und für jede Bestellung einen Status führen: ausstehend, bezahlt, fehlgeschlagen, erstattet.

### Erstattungen und Abgleich

Erstattungen sollten in Ihrem eigenen Dashboard starten, die API des Gateways aufrufen und Bestellung, Bestand und Kundendatensatz in einem Schritt aktualisieren. Erstattungen bei Wallet-, Kiosk- und Ratenzahlungen können anderen Regeln folgen als bei Karten, testen Sie daher jede Variante. Prüfen Sie dann, ob der Auszahlungsbericht des Gateways mit bezahlten Bestellungen, Erstattungen und Gebühren in Ihrem System übereinstimmt. Lässt sich ein Zahlungseingang auf dem Bankkonto keiner Liste von Bestellungen zuordnen, wird der Monatsabschluss zum Ratespiel.

### Vor dem Start testen

Spielen Sie in der Testumgebung eine erfolgreiche Zahlung, eine abgelehnte Karte, einen unbezahlten Referenzcode, eine Wallet-Zahlung, eine vollständige und eine teilweise Erstattung durch. Führen Sie danach eine kleine echte Zahlung samt Erstattung im Livebetrieb aus. Unser Artikel über [Onlineshops in Ägypten: Zahlung und Lieferung](/blog/online-store-egypt-payments-and-delivery) zeigt, wo diese Abläufe in der Praxis scheitern, auch bei der Nachnahme.

## Belege und Kundendaten

Ein Gateway kassiert Geld, es stellt aber keine Steuerbelege aus. Wenn Ihr Unternehmen elektronische Rechnungen oder E-Belege über die Systeme der ägyptischen Steuerbehörde ausstellt, sollte Shop, Kassensystem oder ERP diese bei bestätigter Zahlung erzeugen, idealerweise aus demselben Webhook, der die Bestellung als bezahlt markiert.

Zahlungen betreffen auch personenbezogene Daten: Namen, Telefonnummern, Adressen und Bestellhistorie. Lassen Sie Kartennummern beim Gateway und speichern Sie nur, was Sie brauchen. Unser Leitfaden zum [ägyptischen Datenschutzgesetz für Apps](/blog/egypt-data-protection-law-apps) behandelt den Rest.

## Wie KF Tech Solutions hilft

KF Tech Solutions entwickelt Websites, Onlineshops, mobile Apps und die Backends dahinter und bindet sie an das Gateway Ihrer Wahl an: Checkout, Webhook-Verarbeitung, Logik für ausstehende Kiosk-Zahlungen, Erstattungen aus Ihrem Dashboard und Abgleich mit den Auszahlungsberichten. Außerdem haben wir Kassensysteme an das E-Beleg-System der ägyptischen Steuerbehörde angebunden. Die Wahl des Gateways bleibt Ihre Entscheidung. Mehr dazu unter [API- & Backend-Entwicklung](/services/api-and-backend).

## Häufige Fragen

### Welches Payment-Gateway ist in Ägypten das beste?

Ein bestes für alle gibt es nicht. Listen Sie die Zahlungsarten Ihrer Kunden auf, wählen Sie Gateways, die alle davon für Ihre Branche unterstützen, und vergleichen Sie schriftliche Angebote zu Gebühren, Auszahlungsfrist und Berichten anhand Ihres eigenen Umsatzmixes.

### Brauche ich weiterhin Nachnahme?

Für viele ägyptische Shops ja, zumindest am Anfang. Referenzcodes und Wallets können einen Teil der Barzahler zur Zahlung vor dem Versand bewegen, was abgelehnte Lieferungen reduziert. Wer aber alle Kunden zur Vorauszahlung zwingt, kann Bestellungen verlieren.

### Können Kunden in meinem Shop mit InstaPay bezahlen?

Keine der von uns geprüften Gateway-Seiten führt InstaPay als Checkout-Zahlungsart. Sie können InstaPay-Überweisungen direkt annehmen, müssen aber jede einzeln einer Bestellung zuordnen, was mit wachsendem Volumen zum Problem wird. Fragen Sie Ihr Gateway, ob eine Unterstützung geplant ist.

### Sind die veröffentlichten Gebühren endgültig?

Nicht immer. Kashier etwa nennt individuelle Tarife bei wachsendem Volumen, andere Anbieter nennen Preise über den Vertrieb. Fragen Sie, ob Umsatzsteuer hinzukommt, und vergleichen Sie die Gesamtkosten je Zahlungsart, nicht nur den Kartentarif.

### Wie lange dauert die Anbindung eines Payment-Gateways?

Ein Plugin für Shopify oder WooCommerce kann nach der Kontofreigabe innerhalb weniger Tage live sein. Ein individueller Shop oder eine App dauert länger, weil Webhooks, Erstattungen, Abgleich und jede Zahlungsart gebaut und getestet werden müssen.

### Reicht ein Zahlungslink für ein kleines Unternehmen?

Bei geringem Volumen ja. Paymob, Geidea und andere bieten Zahlungslinks, die Sie per WhatsApp oder E-Mail versenden können. Wenn die Bestellungen wachsen, sollten Zahlungen automatisch mit Bestellungen, Bestand und Belegen verknüpft sein.

Sie wählen ein Gateway oder bauen einen Checkout für einen Shop oder eine App in Ägypten? [Schreiben Sie uns, was Sie verkaufen](/contact), oder [buchen Sie ein kostenloses Gespräch](/book). Wir helfen Ihnen, die Anbindung zu planen, bevor Sie unterschreiben.

## Quellen

- [Instant Payment Network (IPN), Central Bank of Egypt](https://www.cbe.org.eg/en/payment-systems-and-services/instant-payment-network)
- [Paymob Online Payments](https://paymob.com/products/pay-accept/online-payments)
- [Paymob-Entwicklerdokumentation](https://developers.paymob.com/paymob-docs/getting-started/overview)
- [Paymob-Leitfaden zum CS-Cart-Plugin (Kiosk- und Wallet-Zahlungen)](https://docs.paymob.com/docs/cs-cart)
- [Fawry Online Checkout](https://www.fawry.com/business/acceptance/online-checkout/)
- [FawryPay-Zahlungen per Referenznummer, Entwicklerdokumentation](https://developer.fawrystaging.com/docs/server-apis/create-payment-refno-apis)
- [Kashier-Preise](https://www.kashier.io/pricing)
- [Geidea Payment Gateway, Ägypten](https://geidea.net/egy/en/solutions/payments/payment-gateway)
- [Meeza-QR-Wallet-Zahlung, Geidea-Dokumentation](https://docs.geidea.net/docs/meeza-qr-payment-method)
- [Geidea: valU und Souhoola in Ägypten](https://docs.geidea.net/docs/valu)
