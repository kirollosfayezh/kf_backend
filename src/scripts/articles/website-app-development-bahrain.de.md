---
title: Website- und App-Projekte in Bahrain: Zahlungen, Steuer, Daten
summary: Was eine Website oder App für ein Unternehmen in Bahrain braucht: BenefitPay und Karten, 10 % MwSt., Datenschutz nach PDPL und die erwartete E-Rechnung.
tags: Webdesign, App-Entwicklung, Bahrain, BenefitPay, Mehrwertsteuer, PDPL, GCC
alt: Die Türme des Bahrain World Trade Center über der Uferfront von Manama bei Sonnenaufgang
caption: Ein Projekt für Manama muss 10 % Mehrwertsteuer, BenefitPay und Bahrains eigenes Datenschutzgesetz abdecken.
stats: 10 %|Mehrwertsteuer in Bahrain seit dem 1. Januar 2022; 72|Stunden für die Meldung einer Datenschutzverletzung nach dem PDPL; 83|gelistete Länder und Gebiete für die Übermittlung personenbezogener Daten
---

Eine Website, ein Onlineshop oder eine mobile App für ein Unternehmen in Bahrain wird genauso entworfen und entwickelt wie anderswo. Vier lokale Punkte verändern jedoch die Planung: wie Kunden bezahlen (BenefitPay, Banküberweisungen und Karten), 10 % Mehrwertsteuer für registrierte Unternehmen, Bahrains Datenschutzgesetz (Gesetz Nr. 30/2018) und die elektronische Rechnungsstellung, die erwartet wird, für die es aber noch kein offizielles Datum gibt. Wenn Sie diese Punkte vor dem ersten Entwurf klären, müssen Sie den Bezahlvorgang später nicht neu bauen.

Zuletzt geprüft: 6. November 2026

Dieser Leitfaden bietet allgemeine Informationen für Unternehmer und ist keine Steuer- oder Rechtsberatung. Klären Sie alles, was Ihre Steuererklärungen oder Verträge betrifft, mit Ihrem Steuerberater oder Anwalt.

## Zahlungen: BenefitPay, Fawri+ und Fawateer

BENEFIT betreibt das elektronische Zahlungsverkehrssystem Bahrains. Die Zentralbank von Bahrain nennt als Dienste Fawri+ (Überweisungen rund um die Uhr), Fawri und Fawateer für die Bezahlung von Rechnungen. Mit der App BenefitPay von BENEFIT bezahlen Kunden bei Händlern per QR-Code, senden Fawri+-Überweisungen und begleichen Fawateer-Rechnungen.

Für eine Website oder App ergeben sich daraus drei übliche Zahlungswege:

| Methode | Wofür sie passt | Was Sie vor der Entwicklung prüfen sollten |
|---|---|---|
| Kartenzahlung über ein lizenziertes Zahlungsgateway | Onlineshops, Buchungen, Abonnements | Welche Karten und Wallets das Gateway unterstützt, seine Gebühren und wie Erstattungen funktionieren |
| BenefitPay-QR | Geschäfte, Restaurants, Zahlung bei Abholung | Ob Ihre Bank oder Ihr Anbieter es für Ihr Unternehmen anbietet und wie eine bezahlte Bestellung bestätigt wird |
| Banküberweisung oder Fawri+ | Größere B2B-Rechnungen und Anzahlungen | Wer jede Überweisung der passenden Bestellung zuordnet und wie schnell |

Entscheidend ist nicht das Logo auf der Bezahlseite, sondern was nach der Zahlung passiert: wie die Bestellung als bezahlt markiert wird, wer benachrichtigt wird und wie eine Erstattung erfasst wird. Den Händlervertrag schließen Sie mit der Bank oder dem Gateway; der Entwickler bindet Ihre Website anhand der Dokumentation und der Testumgebung dieses Anbieters an. Beantragen Sie das Händlerkonto früh, denn die Freigabe folgt dem Zeitplan des Anbieters, nicht dem des Entwicklers.

Wenn Sie die meisten Zahlungen vor Ort oder per Überweisung erhalten, brauchen Sie die Online-Kartenzahlung vielleicht nicht vom ersten Tag an. Ein klares Bestellformular, ein WhatsApp-Button und ein Schritt zur Zahlungsbestätigung im Dashboard können für den Start genügen; ein Gateway kommt hinzu, sobald Online-Bestellungen die Gebühren rechtfertigen.

## 10 % Mehrwertsteuer und die kommende E-Rechnung

Der Mehrwertsteuersatz in Bahrain beträgt seit dem 1. Januar 2022 10 %. Zuständig ist das National Bureau for Revenue (NBR), und die Registrierung ist oberhalb der Schwelle von 37.500 BHD Pflicht. Ist Ihr Unternehmen registriert, muss die Website oder App die Steuer überall korrekt behandeln, wo sie Preise zeigt oder Belege ausstellt:

- **Preise.** Legen Sie mit Ihrem Steuerberater fest, wie Preise angezeigt werden, und lassen Sie den Bezahlvorgang den Steuerbetrag deutlich ausweisen.
- **Rechnungen und Belege.** Das System, das sie ausstellt, braucht Ihre Steuernummer, den richtigen Satz für jede Position und stimmige Summen.
- **Ein änderbarer Steuersatz.** Hinterlegen Sie die Steuer als Einstellung pro Produkt im Dashboard, nicht als feste Zahl im Code, damit eine Änderung eine Bearbeitung ist und keine neue Version.
- **Berichte.** Umsätze, Erstattungen und Steuer pro Zeitraum, exportiert in einem Format, mit dem Ihr Steuerberater arbeiten kann.

Die elektronische Rechnungsstellung wird in Bahrain erwartet, laut der Steuerübersicht von PwC in einem Rahmen „ähnlich dem in Saudi-Arabien eingeführten“, doch ein offizielles Datum wurde nicht bekannt gegeben. Verpflichtend ist sie heute nicht. Der sinnvolle Schritt ist bescheiden: Speichern Sie Rechnungsdaten als strukturierte Datensätze (Verkäufer, Käufer, Positionen, Steuersätze, Summen und eine eindeutige Nummer) und nicht nur als PDF-Dateien. Dann ist die Anbindung an ein künftiges System eine Integrationsaufgabe und kein Neubau. Seien Sie vorsichtig bei Anbietern, die ihr Produkt als „bereit“ für bahrainische E-Rechnungsregeln bezeichnen, die noch gar nicht veröffentlicht sind.

## Personenbezogene Daten nach dem PDPL (Gesetz Nr. 30/2018)

Bahrains Datenschutzgesetz, das Gesetz Nr. 30/2018, gilt seit dem 1. August 2019. Zwei seiner Punkte betreffen eine Website oder App unmittelbar:

- **Meldung einer Verletzung innerhalb von 72 Stunden.** Das Gesetz setzt eine Frist von 72 Stunden für die Meldung einer Verletzung des Schutzes personenbezogener Daten. Fragen Sie Ihren Entwickler, wie eine solche Verletzung erkannt würde und wer informiert wird.
- **Übermittlung ins Ausland.** Personenbezogene Daten dürfen in 83 gelistete Länder und Gebiete oder auf anderer rechtlicher Grundlage übermittelt werden. Viele Websites speichern ihre Datenbank bei einem Cloud-Anbieter außerhalb Bahrains; fragen Sie daher, wo Datenbank und Backups gehostet werden, und prüfen Sie diesen Standort mit Ihrem Berater.

In der Entwicklung selbst sind die Gewohnheiten einfach. Erfassen Sie nur die Felder, die Sie brauchen. Schützen Sie das Dashboard mit persönlichen Zugängen und Rollen, damit Mitarbeiter nur sehen, was ihre Aufgabe erfordert. Erstellen Sie Backups und testen Sie, ob sie sich wiederherstellen lassen. Halten Sie fest, was jedes Formular erfasst und warum. Veröffentlichen Sie eine Datenschutzerklärung auf Arabisch und Englisch, die beschreibt, was Ihre Website tatsächlich tut, statt einer von einem anderen Unternehmen kopierten Vorlage.

## Arabisch, Englisch und zuerst das Smartphone

Planen Sie zuerst für das Smartphone und von Anfang an für beide Sprachen:

- **Arabisch von rechts nach links ab der ersten Skizze**, keine gespiegelte englische Seite, mit eigenen Seiten für jede Sprache, damit beide in den Suchergebnissen erscheinen können.
- **Preise in Bahrain-Dinar**, einmal im Dashboard eingegeben und in beiden Sprachen gleich angezeigt.
- **Schnelle Seiten über mobile Daten**, mit komprimierten Bildern und ohne schwere Effekte, die ein Smartphone ausbremsen.
- **Direkter Kontakt.** Anruf- und WhatsApp-Buttons, die funktionieren, und Formulare, die bei einer Person ankommen, die antwortet.

Restaurants und Geschäfte sollten auch an Liefer-Apps denken. talabat und Keeta sind beide in Bahrain aktiv; Keeta ist dort am 5. Januar 2026 gestartet. Viele Gastronomiebetriebe verkaufen über diese Apps, und Ihre eigene Website oder App erfüllt eine andere Aufgabe: Dort finden wiederkehrende Kunden Ihr vollständiges Menü, Ihre Filialen und Ihre Kontaktdaten, und dort können Sie direkte Bestellungen annehmen, wenn Sie das möchten. Entscheiden Sie früh, ob Ihr eigenes Menü und Ihre Preise mit dem übereinstimmen, was Kunden in den Apps sehen, damit sie keine widersprüchlichen Angaben finden.

## Wer soll es entwickeln?

Ob Sie ein Studio in Manama beauftragen oder aus der Ferne mit einem Studio anderswo arbeiten: Die Fragen sind dieselben. Unser Leitfaden [So wählen Sie ein Softwareunternehmen aus](/blog/how-to-choose-a-software-company) behandelt sie ausführlich. Für ein Projekt in Bahrain kommen diese hinzu:

1. Fragen Sie, welche Zahlungsgateways das Team bereits angebunden hat, und lassen Sie sich eines in Betrieb zeigen.
2. Fragen Sie, wo Ihre Daten gehostet werden und wie Backups wiederhergestellt werden.
3. Fragen Sie, wie die Mehrwertsteuer eingerichtet wird und wer den Satz ändert, wenn er sich ändert.
4. Lassen Sie sich eine arabische Website zeigen, die das Team gebaut hat, und öffnen Sie sie auf Ihrem eigenen Smartphone.
5. Verlangen Sie einen schriftlichen Leistungsumfang und ein Festpreisangebot, bevor die Arbeit beginnt.

Halten Sie die Absicherungen im Vertrag fest: eine Vertraulichkeitsvereinbarung, die Rückgabe oder sichere Löschung Ihrer Daten am Vertragsende, ein Verfahren zur Meldung von Sicherheitsvorfällen sowie die vollständige Übertragung von Quellcode und geistigem Eigentum an Ihr Unternehmen. Domain-, Hosting- und App-Store-Konten sollten auf Ihr Unternehmen registriert sein, nicht auf den Entwickler.

Sitzt das Team außerhalb Bahrains, prüfen Sie die Arbeitszeiten. Manama liegt das ganze Jahr auf UTC+3. Kairo hat von Ende April bis Ende Oktober dieselbe Uhrzeit wie Manama und liegt im Winter eine Stunde zurück, sodass sich ein normaler Arbeitstag fast vollständig überschneidet.

Was den Preis bestimmt, ist in Manama dasselbe wie in Kairo: die Zahl der Seiten und Sprachen, wer die Inhalte schreibt und welche Integrationen Sie brauchen, etwa Zahlungen, Lieferung oder Buchhaltung. Unsere Aufschlüsselung, [was eine Unternehmenswebsite in Ägypten kostet](/blog/company-website-cost-egypt), erklärt diese Faktoren.

## Wie KF Tech Solutions hilft

KF Tech Solutions ist ein Softwarestudio in Kairo, gegründet 2020. Wir entwickeln Unternehmenswebsites, Onlineshops, Web-Apps und mobile Apps auf Arabisch und Englisch, mit einem Dashboard, in dem Sie Inhalte selbst bearbeiten, und wir bauen auch Kassen-, Lager- und ERP-Systeme, wenn die Website an Ihren Verkauf angebunden werden soll. Wir arbeiten mit Unternehmen in Ägypten und am Golf. Auf unserer Seite zur [Webentwicklung](/services/web-development) und unserer [Golf-Seite](/gulf) sehen Sie, wie wir aus der Ferne arbeiten. Projekte beginnen ab 200 $ (etwa 750 SAR / 735 AED); der Endpreis hängt vom Umfang ab, mit einem festen schriftlichen Angebot nach einem kostenlosen Gespräch.

## Häufige Fragen

### Brauche ich BenefitPay auf meiner Website?

Nicht unbedingt. Es hängt davon ab, wie Ihre Kunden bezahlen. Viele Onlineshops beginnen mit Kartenzahlung über ein lizenziertes Gateway und ergänzen weitere Methoden, wenn Kunden danach fragen. Zahlen Ihre Kunden bei Abholung oder im Geschäft, passt ein BenefitPay-QR Ihrer Bank oder Ihres Anbieters möglicherweise besser als ein Online-Bezahlvorgang.

### Ist die E-Rechnung in Bahrain Pflicht?

Stand 6. November 2026 nicht. Sie wird erwartet, aber ein offizielles Datum wurde nicht bekannt gegeben. Speichern Sie Ihre Rechnungsdaten strukturiert, damit sich das System anbinden lässt, sobald die Regeln veröffentlicht sind.

### Muss meine Website die Mehrwertsteuer berücksichtigen?

Wenn Ihr Unternehmen für die Mehrwertsteuer registriert ist, müssen Bezahlvorgang, Rechnungen und Berichte den Satz von 10 % korrekt anwenden. Wie Preise dargestellt werden sollten, klären Sie mit Ihrem Steuerberater.

### Dürfen die Daten meiner Website außerhalb Bahrains gehostet werden?

Das PDPL erlaubt die Übermittlung personenbezogener Daten in 83 gelistete Länder und Gebiete oder auf anderer rechtlicher Grundlage. Fragen Sie Ihren Entwickler, wo Datenbank und Backups gehostet werden, und prüfen Sie diesen Standort mit Ihrem Berater.

### Kann ein Unternehmen außerhalb Bahrains meine Website oder App entwickeln?

Ja. Wichtig sind ein schriftlicher Leistungsumfang, ein Vertrag, der Ihre Daten und das Eigentum am Code regelt, und genügend Überschneidung der Arbeitszeiten. Manama und Kairo haben von Ende April bis Ende Oktober dieselbe Uhrzeit und liegen im Winter eine Stunde auseinander.

## Nächster Schritt

Sagen Sie uns, was Sie bauen möchten und wie Ihre Kunden bezahlen. [Buchen Sie ein kostenloses Gespräch](/book) oder [schreiben Sie uns](/contact); wir antworten zuerst mit Fragen und dann mit einem festen schriftlichen Angebot.

## Quellen

- [Nationales Portal Bahrains: Mehrwertsteuer](https://www.bahrain.bh/wps/portal/en/BNP/HomeNationalPortal/ContentDetailsPage/!ut/p/z0/lY9BT8JAEIX_ynpoogezQ6uAR5GEaoKgJgh7IdN2LCPtbOluG36-LfFA5ORxJu99-Z42eq2NYMs5eraCRXdvzHA7eL6HePwEsJzehfC2engfTuYDmM8i_UGiX7Q5D8WvyykMF_F4FI4m0WIV9RT-PhzMozapFU9Hr9eJVFuSADCxjVd-R2rPkme2DCDBXY0sKoQIAqipQE-Z8rbi1AWQN5x1SVXVLClXBTllv04A6uC25FS17Dr9U_-v3OWC_8o1joWcUyiZYmnJ-ZLEX3q2WDSkMMv6Hx7VdYv-pmuc43rz37W62s8-b83m6gcBLJvw/)
- [PwC Worldwide Tax Summaries: Bahrain, sonstige Steuern](https://taxsummaries.pwc.com/bahrain/corporate/other-taxes)
- [DLA Piper: Datenschutzgesetze in Bahrain](https://www.dlapiperdataprotection.com/countries/bahrain/law.html)
- [Zentralbank von Bahrain: Zahlungsverkehr und Abwicklung](https://www.cbb.gov.bh/payment-settlement/)
- [BenefitPay im App Store](https://apps.apple.com/bh/app/id1249328388)
- [EqualOcean: Keeta startet Essenslieferung in Bahrain](https://equalocean.com/news/2026010721712-meituans-keeta-launches-food-delivery-service-bahrain)
