---
title: Was kostet die App-Entwicklung in Saudi-Arabien?
summary: Was den Preis einer App in Saudi-Arabien bestimmt: Plattformen, Backend, Admin-Panel, Arabisch, mada und Apple Pay, Nafath, Hosting und Folgekosten.
tags: App-Entwicklung, Preise, mobile Apps, Saudi-Arabien, mada, MVP
alt: Eine Hand skizziert mit einem Stift Wireframes von App-Bildschirmen auf weißem Papier
caption: Die am ersten Tag skizzierten Bildschirme samt Backend, Zahlungen und Admin-Bereich dahinter bestimmen, was eine App kostet.
stats: 42 %|des mobilen Webverkehrs in Saudi-Arabien lief im Oktober 2026 auf iOS; 99 $|pro Jahr für Apples Entwicklerkonto, auf den Namen Ihres Unternehmens; 15 %|Mehrwertsteuer in Saudi-Arabien, die Zeile, die Sie in jedem Angebot prüfen sollten
---

Für eine mobile App gibt es in Saudi-Arabien keinen festen Preis, denn der Preis folgt dem Umfang: wie viele Apps und Nutzertypen das Projekt umfasst, ob es ein Backend und ein Admin-Panel braucht, welche Zahlungsarten und Anbindungen es unterstützen muss und wo seine Daten gehostet werden. Eine Buchungs-App für einen einzigen Nutzertyp kostet nur einen Bruchteil eines Marktplatzes mit Apps für Kunden, Fahrer und Verwaltung. Die nützliche Antwort ist ein schriftlicher Leistungsumfang, Posten für Posten bepreist, und dieser Leitfaden zeigt, was jeder Posten abdeckt.

Zuletzt geprüft: 6. November 2026

## Wofür Sie bezahlen

Ein gutes Angebot benennt jeden Teil der App:

- **Die App selbst** für iOS und Android: die Bildschirme, die Ihre Kunden oder Mitarbeitenden nutzen.
- **Das Backend**: Server, Datenbank und API, die Konten, Bestellungen und Daten speichern und Benachrichtigungen versenden.
- **Das Admin-Panel**: Hier bearbeitet Ihr Team Inhalte, wickelt Bestellungen ab, erstattet Zahlungen und liest Berichte.
- **Design**: die Bildschirme auf Arabisch und Englisch, auf echten Telefonen getestet, bevor eine Zeile Code entsteht.
- **Tests und Veröffentlichung**: Testversionen, die Einträge in den Stores und das Prüfverfahren.
- **Betreuung nach dem Start**: Fehlerbehebungen und die jährlichen Aktualisierungen, die Apple und Google verlangen.

Die Bildschirme sind das, was eine Demo zeigt. Backend und Admin-Panel sind die Stellen, an denen zwei Angebote für „dieselbe App“ meist auseinandergehen, wie der Beitrag [was eine Web-App tatsächlich kostet](/blog/what-does-a-web-app-actually-cost-to-build) erklärt. Wenn Ihre Mitarbeitenden auf Arabisch arbeiten, braucht auch das Admin-Panel eine arabische Oberfläche, und genau das fehlt leicht in einem Angebot.

## Die Kostentreiber, Posten für Posten

Jede Zeile verändert den Preis für sich allein. Markieren Sie die Spalte, die zu Ihrer Idee passt, und Sie haben den Großteil eines Briefings.

| Kostentreiber | Hält die Kosten niedriger | Treibt die Kosten nach oben |
|---|---|---|
| Plattformen | Eine plattformübergreifende Codebasis für iOS und Android | Zwei getrennte native Apps |
| Nutzertypen | Einer, zum Beispiel Kunden | Mehrere, etwa Kunden, Fahrer und Filialpersonal, jeweils mit eigener App oder Rolle |
| Backend | Konten und einfache Inhalte | Bestellungen, Live-Tracking, Synchronisierung zwischen Geräten, viele Rollen |
| Admin-Panel | Inhalte bearbeiten und Bestellungen ansehen | Freigaben, Erstattungen, Auszahlungen, detaillierte Berichte |
| Sprache | Arabisch und Englisch von Anfang an eingeplant | Eine zweite Sprache nach dem Start nachgerüstet |
| Zahlungen | Eine gehostete Zahlungsseite eines lizenzierten Gateways | Mehrere Zahlungsarten, Ratenkauf, Erstattungen, aufgeteilte Auszahlungen |
| Identität | Telefonnummer mit Einmalcode | Identitätsprüfung über Nafath |
| Anbindungen | Keine in der ersten Version | Kassensystem, ERP, Lieferdienste, Karten, SMS |
| Hosting | Eine übliche internationale Cloud-Region | Hosting im Königreich, wenn Kunden oder Ihre Branche es verlangen |

Beide Plattformen zählen: StatCounter maß im Oktober 2026 in Saudi-Arabien 42 % des mobilen Webverkehrs auf iOS und 58 % auf Android. Eine plattformübergreifende Codebasis deckt beide Stores ab, ohne alles doppelt zu bauen.

## Saudi-spezifische Posten, die den Preis verändern

### Arabisch zuerst, nicht später übersetzt

Arabisch hat in Saudi-Arabien besonderes Gewicht: Die 2026 verabschiedete nationale Politik zur arabischen Sprache fördert ihren Einsatz in Verträgen, Rechnungen, Werbung und Kommunikation. In einer App bedeutet das Bildschirme, die von der ersten Skizze an von rechts nach links aufgebaut sind, arabische Schrift, die auch klein lesbar bleibt, Namen und Adressen, die Arabisch und Englisch mischen, Hidschri-Daten, wo Nutzer sie erwarten, und Store-Einträge in beiden Sprachen. Rechts-nach-links nachträglich in eine englische App einzubauen, kostet weit mehr, als es von Anfang an einzuplanen.

### mada und Apple Pay über ein lizenziertes Gateway

mada, das nationale Zahlungsnetz im Besitz der saudischen Zentralbank (SAMA), funktioniert mit Apple Pay und anderen Wallets, und seine Online-Zahlungen laufen über die 3-D-Secure-Prüfung. Eine App erreicht es über ein Zahlungs-Gateway; Tap zum Beispiel gibt an, von der saudischen Zentralbank lizenziert zu sein, und unterstützt mada, Apple Pay, Tabby und Tamara. Die Entwicklung umfasst den Bezahlvorgang, die Prüfung, fehlgeschlagene und doppelte Zahlungen, Erstattungen und einen Nachweis, den Ihre Buchhaltung abgleichen kann. Die Gateway-Gebühren sind ein eigener, laufender Kostenpunkt.

### Nafath nur bei Bedarf

Nafath ist das nationale Single-Sign-on Saudi-Arabiens, mit dem staatliche und private Plattformen die Identität eines Nutzers bestätigen. Es ist eine eigene Anbindung. Nehmen Sie es also auf, wenn Sie die Identität einer Person prüfen müssen, etwa bei Verträgen, Mieten oder Finanzierungen, und nicht als Standard-Login. Für die meisten Apps genügt eine Telefonnummer mit Einmalcode.

### Wo die Daten liegen

Das Gesetz zum Schutz personenbezogener Daten (PDPL) ist seit dem 14. September 2024 vollständig durchsetzbar und erlaubt die Übermittlung personenbezogener Daten ins Ausland nur unter Bedingungen. Im Oktober 2026 veröffentlichte die Aufsichtsbehörde SDAIA Änderungsentwürfe, die eine Speicherung personenbezogener Daten im Königreich vorschreiben würden; sie sind nicht in Kraft. Hosting im Königreich ist möglich, schränkt die Auswahl aber ein: Die Google-Cloud-Region Dammam wird an Kunden mit Sitz in Saudi-Arabien über CNTXT verkauft, und AWS hat erklärt, seine erste saudische Region solle im Dezember 2026 starten. Entscheiden Sie das vor dem Angebot, denn ein späterer Umzug der App kostet mehr als eine einmalige Wahl.

### E-Rechnungen, wenn die App verkauft

Wenn die App verkauft und Ihr Unternehmen umsatzsteuerlich registriert ist, unterliegen die ausgestellten Rechnungen den E-Invoicing-Regeln der ZATCA. Phase 2, die Anbindung an die ZATCA-Plattform FATOORA, wird in Wellen eingeführt; Welle 25 betrifft steuerpflichtige Umsätze über 187.500 SAR in einem der Jahre 2022 bis 2025 und muss bis zum 1. Februar 2027 angebunden sein. Entweder übergibt die App jeden Verkauf an ein Kassen- oder ERP-System, das dies bereits leistet, oder die Anbindung wird Teil der Entwicklung.

## Kosten, die in den meisten Angeboten fehlen

Fragen Sie nach jedem dieser Punkte schriftlich, auch wenn der Anbieter dafür nichts berechnet:

- **Store-Konten.** Apples Entwicklerprogramm kostet 99 $ pro Jahr (bei der Anmeldung in Landeswährung angezeigt), Google Play verlangt einmalig 25 $. Apple fordert von Organisationen eine D-U-N-S-Nummer und zeigt den Namen der Organisation als Verkäufer an. Eröffnen Sie daher beide Konten auf den Namen Ihres Unternehmens, nicht des Entwicklers.
- **Store-Provision, nur bei digitalen Verkäufen.** Apple und Google erheben von kleineren Entwicklern 15 % auf digitale Inhalte und Abonnements. Physische Waren und reale Dienstleistungen wie Lieferungen und Buchungen müssen auf anderem Weg bezahlt werden, etwa per Apple Pay oder Karte, ohne Store-Provision.
- **Zahlungsgebühren.** Das Gateway berechnet pro Transaktion, und die Sätze unterscheiden sich je nach Zahlungsart. Lassen Sie sie sich vor der Wahl schriftlich geben.
- **SMS für Login-Codes.** Jede Nachricht kostet Geld, und saudische SMS-Anbieter registrieren Ihren Absendernamen nach den Regeln der Kommission für Kommunikation, Raumfahrt und Technologie, was Unterlagen und eine Jahresgebühr erfordert.
- **Hosting und Dienste.** Server, Karten, Benachrichtigungen und E-Mail werden monatlich abgerechnet und wachsen mit der Nutzung.
- **Datenschutz- und Rechtsseiten.** Apple verlangt einen Link zur Datenschutzerklärung in der App und im Store-Eintrag, und eine App mit Registrierung muss das Löschen des Kontos in der App ermöglichen. Wenn die App online verkauft, schreibt das E-Commerce-Gesetz vor, Ihren Namen, Ihre Kontaktdaten und Ihre Handelsregisternummer anzugeben.
- **Jährliche Plattform-Updates.** Seit dem 28. April 2026 akzeptiert Apple nur Apps, die mit Xcode 26 oder neuer und dem iOS-26-SDK erstellt wurden, und seit dem 31. August 2026 verlangt Google Play, dass neue Apps und Updates Android 16 oder höher ansteuern. Eine App, die niemand pflegt, kann irgendwann keine Fehlerbehebung mehr ausliefern.

## Mehrwertsteuer, Quellensteuer und Angebote in Dollar

Dies sind allgemeine Informationen, keine Steuerberatung; klären Sie die Einzelheiten mit Ihrem Steuerberater.

- **Die Mehrwertsteuer beträgt 15 %.** Ein umsatzsteuerlich registrierter saudischer Anbieter schlägt sie auf die Rechnung auf.
- **Reverse-Charge bei ausländischen Anbietern.** Bezieht ein umsatzsteuerlich registriertes saudisches Unternehmen Leistungen von einem nicht ansässigen Anbieter, führt es die Mehrwertsteuer selbst ab.
- **Quellensteuer.** Zahlt ein saudisches Unternehmen einen nicht Ansässigen für technische Leistungen, zu denen laut ZATCA-Leitfaden Softwareentwicklung, Wartung und Support gehören können, muss es unter Umständen 5 % einbehalten und an die ZATCA abführen. Vereinbaren Sie im Vertrag, ob der angebotene Preis diesen Betrag einschließt.
- **Dollar-Angebote werden zu einem festen Kurs umgerechnet.** Der Riyal ist mit 3,75 an den US-Dollar gekoppelt, 1.000 $ sind also stets 3.750 SAR.

## Kosten senken und Angebote vergleichen

### Am Umfang sparen, nicht am Fundament

- **Beginnen Sie mit einem Nutzertyp und einer Kernfunktion.** Wie Sie diese Funktion wählen, erklärt der Beitrag [klein anfangen mit einem MVP](/blog/mobile-app-mvp-egypt).
- **Starten Sie mit der gehosteten Zahlungsseite Ihres Gateways** und bauen Sie einen eigenen Bezahlvorgang, sobald das Bestellvolumen ihn rechtfertigt.
- **Verschieben Sie Nafath und die meisten Anbindungen auf Version zwei**, es sei denn, die App funktioniert ohne sie nicht.
- **Halten Sie das Admin-Panel schlicht.** Es muss ab dem ersten Tag existieren, aber es muss nicht schön sein.

Sparen Sie nicht an Sicherheit, Admin-Panel oder sauberer Zahlungsabwicklung. Diese nach dem Start nachzurüsten, kostet weit mehr.

### Gleiches mit Gleichem vergleichen

| Frage | Eine gute Antwort | Ein Warnsignal |
|---|---|---|
| Wem gehören der Code und die Store-Konten? | Ihnen, auf den Namen Ihres Unternehmens | Die App erscheint unter dem Konto des Anbieters |
| Ist das Admin-Panel enthalten? | Ja, mit Liste der Bildschirme | „Das können wir später ergänzen“ |
| Was ist ausgeschlossen? | Hosting, Gateway-Gebühren, SMS und Store-Gebühren sind aufgeführt | Nichts ist als ausgeschlossen aufgeführt |
| Wer behebt Probleme nach dem Start, und wie lange? | Ein festgelegter Zeitraum und eine Reaktionszeit | „Melden Sie sich bei Bedarf“ |
| Können wir arabische Bildschirme sehen? | Echte Rechts-nach-links-Bildschirme aus früheren Projekten | Nur englische Bildschirme |

Die Tabelle funktioniert für ein saudisches Studio ebenso wie für ein Team aus der Ferne. Dieselbe Aufschlüsselung für den ägyptischen Markt finden Sie unter [was eine mobile App in Ägypten kostet](/blog/app-development-cost-egypt). Ist Ihre Idee ein Marktplatz, wächst der Umfang schnell: Lesen Sie dazu [eine Liefer-App wie Jahez bauen](/blog/delivery-app-like-jahez).

## Wie KF Tech Solutions bei App-Projekten arbeitet

Wir gestalten und entwickeln iOS- und Android-Apps aus einer Codebasis, zusammen mit Backend, Admin-Panel und vollständigem Rechts-nach-links-Arabisch neben Englisch, und veröffentlichen sie im App Store und bei Google Play über Entwicklerkonten auf den Namen Ihres Unternehmens. Wir arbeiten mit Unternehmen in Ägypten und am Golf, aus der Ferne von Kairo aus. Projekte beginnen ab 200 $ (etwa 750 SAR / 735 AED); der endgültige Preis hängt vom Umfang ab, mit einem festen schriftlichen Angebot nach einem kostenlosen Gespräch. Mehr erfahren Sie über unsere [Entwicklung mobiler Apps](/services/mobile-applications) und über [die Zusammenarbeit mit Kunden in Saudi-Arabien](/saudi-arabia).

## Häufige Fragen

### Was kostet eine einfache App in Saudi-Arabien?

Das hängt davon ab, was „einfach“ umfasst. Eine App für einen Nutzertyp mit Anmeldung, wenigen Bildschirmen und einem einfachen Admin-Panel liegt am unteren Ende der Preisspanne jedes Anbieters; Zahlungen, ein zweiter Nutzertyp oder Live-Tracking heben den Preis jeweils an. Verlangen Sie ein Angebot, das diese Teile getrennt bepreist.

### Brauche ich iOS und Android?

In den meisten Fällen ja. Beide Plattformen haben einen großen Anteil am mobilen Verkehr in Saudi-Arabien, und mit einer plattformübergreifenden Codebasis veröffentlichen Sie in beiden Stores, ohne die App zweimal zu bauen.

### Verdienen Apple oder Google an meinen Verkäufen mit?

Nur bei digitalen Inhalten und Abonnements, die in der App verkauft werden. Lieferungen, Fahrten, Buchungen und andere physische Waren oder Dienstleistungen müssen andere Zahlungswege nutzen, daher nehmen die Stores darauf keine Provision; die Gebühren Ihres Gateways fallen trotzdem an.

### Muss ich die Daten meiner App in Saudi-Arabien hosten?

Das heute geltende PDPL erlaubt die Übermittlung personenbezogener Daten ins Ausland unter Bedingungen, etwa bei angemessenem Schutzniveau oder geeigneten Garantien. Im Oktober 2026 veröffentlichte Änderungsentwürfe würden eine Speicherpflicht im Königreich einführen, sind aber noch kein Gesetz, und manche Kunden und Branchen setzen eigene Hosting-Regeln. Prüfen Sie daher zuerst Ihre.

### Wie lange dauert die Entwicklung einer App?

Bei KF dauert eine fokussierte erste Version meist acht bis vierzehn Wochen, einschließlich Backend und Admin-Panel. Zahlungen, Anbindungen und ein zweiter Nutzertyp kosten zusätzliche Zeit, ebenso die Store-Prüfung. Legen Sie den Starttermin also nach dem Umfang fest, nicht umgekehrt.

**Sie planen eine App für den saudischen Markt?** Senden Sie uns ein einseitiges Briefing über das [Kontaktformular](/contact) oder [buchen Sie ein kostenloses Gespräch](/book). Wir stellen zuerst unsere Fragen und senden Ihnen dann ein festes schriftliches Angebot.

## Quellen

- [Apple: Anmeldung beim Apple Developer Program](https://developer.apple.com/programs/enroll/)
- [Apple: App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Apple: App Store Small Business Program](https://developer.apple.com/app-store/small-business-program/)
- [Apple: SDK-Mindestanforderungen ab 28. April 2026](https://developer.apple.com/news/upcoming-requirements/?id=04282026a)
- [Google Play: Registrierungsgebühr für Entwickler](https://support.google.com/googleplay/android-developer/answer/6112435)
- [Google Play: Servicegebühren](https://support.google.com/googleplay/android-developer/answer/112622)
- [Google Play: Zahlungsrichtlinie](https://support.google.com/googleplay/android-developer/answer/9858738)
- [Google Play: Anforderungen an das Ziel-API-Level](https://support.google.com/googleplay/android-developer/answer/11926878)
- [StatCounter: Anteile mobiler Betriebssysteme in Saudi-Arabien](https://gs.statcounter.com/os-market-share/mobile/saudi-arabia)
- [CMS: Saudi-Arabiens nationale Politik zur arabischen Sprache](https://cms.law/en/int/legal-updates/saudi-arabia-s-national-arabic-language-policy-what-businesses-need-to-know)
- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap Payments, Saudi-Arabien](https://www.tap.company/en-sa)
- [Wikipedia: Nafath (Unified National Access)](https://en.wikipedia.org/wiki/Unified_national_access)
- [DLA Piper: Datenschutzgesetz Saudi-Arabiens](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Clyde & Co: Änderungsentwürfe der SDAIA zum PDPL](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [Google Cloud: Zugang zur Region Dammam](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon: die AWS-Region in Saudi-Arabien](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
- [ZATCA: Was E-Invoicing ist](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Ankündigung der Welle 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [Unifonic: Registrierung von Absendernamen in Saudi-Arabien](https://docs.unifonic.com/articles/products-documentation/ksa-sender-id-registration-requirmnets)
- [E-Commerce-Gesetz, englische Übersetzung (MISA)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
- [PwC: Saudi-Arabien, sonstige Steuern](https://taxsummaries.pwc.com/saudi-arabia/corporate/other-taxes)
- [ZATCA: Mehrwertsteuer-Leitfaden zu Importen und Exporten](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-on-Imports-and-Exports-under-VAT-Provision.pdf)
- [ZATCA: Leitfaden zur Quellensteuer](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/General-Guideline-for-Withholding-Tax-In-accordance-with-the-provisions-of-the-Income-Tax-Law-and-its-Implementing-Regulations.pdf)
- [SAMA: Kurs des Riyal zum US-Dollar](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx)
