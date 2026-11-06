---
title: Softwareverträge für Saudi-Arabien und die VAE: Zusatzklauseln
summary: Was ein Auftrag aus Saudi-Arabien oder den VAE einem Softwarevertrag hinzufügt: Daten, IP-Übertragung, Steuerklauseln, arabischer Text und Rechtswahl.
tags: Softwarevertrag, IP-Übertragung, Quellensteuer, Mehrwertsteuer, Saudi-Arabien, VAE, GCC
alt: Ein Mann in weißem Thobe und rotem Shemagh unterschreibt ein Dokument neben einem Kollegen im Anzug
caption: Ein Auftrag in Saudi-Arabien oder den VAE braucht Klauseln, die ein Standardvertrag auslässt: Datenlöschung, IP-Übertragung, Steuern.
stats: 5|Klauselbereiche, die ein Auftrag aus Saudi-Arabien oder den VAE hinzufügt; 5 %|saudische Quellensteuer, die auf technische Leistungen anfallen kann; 1|Sprachfassung, die maßgeblich sein sollte
---

Ein Softwarevertrag mit einem Unternehmen in Saudi-Arabien oder den VAE braucht alles, was ein üblicher Vertrag enthält, und dazu fünf Ergänzungen: Datenklauseln nach dem Vorbild der saudischen Cybersecurity-Kontrollen, eine ausdrückliche Übertragung von Quellcode und geistigem Eigentum, klare Formulierungen zur Umkehr der Steuerschuld bei der Mehrwertsteuer und zur saudischen Quellensteuer, eine arabische Fassung mit einer Klausel, welche Fassung maßgeblich ist, sowie ein benanntes anwendbares Recht und ein Gerichtsstand. Keine dieser Klauseln ist ungewöhnlich, aber jede fehlende führt zu Streit. Dies ist eine allgemeine Information und keine Rechts- oder Steuerberatung; lassen Sie den endgültigen Text vor der Unterschrift anwaltlich prüfen.

Zuletzt geprüft: 6. November 2026

Dieser Artikel wiederholt die Grundlagen nicht. Eigentum am Code, Zahlungsverzug, Lizenzen für Fremdkomponenten, Übergabe, Abnahme, Gewährleistung, Kündigung und Schlüsselpersonal behandelt der Beitrag [neun Punkte, die Sie in einem Softwareentwicklungsvertrag prüfen sollten](/blog/software-development-contract-what-to-check). Wenn Sie den Anbieter noch auswählen, lesen Sie zuerst [wie Sie ein Softwareunternehmen ohne technisches Vorwissen auswählen](/blog/how-to-choose-a-software-company).

Im Folgenden geht es um die Klauseln, die ein Kunde in Saudi-Arabien oder den VAE, oder ein Anbieter, der für ihn arbeitet, zusätzlich aufnehmen sollte. Am wichtigsten sind sie, wenn der Anbieter im Ausland sitzt, etwa ein Team in Ägypten, das aus der Ferne arbeitet. Diese Situation beschreibt der Leitfaden [ein ägyptisches Softwareunternehmen aus der Golfregion beauftragen](/blog/hire-egyptian-software-company-from-gulf).

## Daten: Vertraulichkeit, Löschung und Meldung von Vorfällen

Die saudische National Cybersecurity Authority (NCA) veröffentlicht die Essential Cybersecurity Controls (ECC). Kontrolle 4-1-2 legt fest, was ein Vertrag mit externen Parteien enthalten soll, und drei Punkte sind für Softwareverträge unmittelbar nützlich:

- **Eine Geheimhaltungsvereinbarung**, die Ihre Geschäftsdaten, die Daten Ihrer Kunden und alles umfasst, was der Anbieter in Ihren Systemen sieht.
- **Rückgabe oder sichere Löschung Ihrer Daten** am Ende der Leistung, mit schriftlicher Bestätigung.
- **Ein Verfahren zur Meldung von Vorfällen**: wie schnell der Anbieter Sie über einen Sicherheitsvorfall oder Verdacht informiert, wen er informiert und welche Angaben er macht.

Genau genommen gelten diese Pflichten für Behörden und Betreiber kritischer Infrastruktur, nicht für jedes private Unternehmen. Als Grundlage sind sie trotzdem für jeden Kunden sinnvoll, und ein Anbieter, der sie ablehnt, sagt Ihnen damit etwas.

Personenbezogene Daten kommen als zweite Ebene hinzu. Das saudische Datenschutzgesetz (PDPL) ist seit dem 14. September 2024 vollständig durchsetzbar. Änderungsentwürfe, darunter eine Speicherung im Königreich, lagen vom 6. Oktober bis 5. November 2026 zur öffentlichen Konsultation aus; das Ergebnis ist noch offen, behandeln Sie die Speicherung im Königreich also nicht als geltendes Recht. In den VAE ist das Bundesdatenschutzgesetz (Federal Decree-Law 45 of 2021) in Kraft, seine Ausführungsbestimmungen sind jedoch noch nicht erlassen. Die Freizonen DIFC und ADGM haben eigene Datenschutzgesetze.

Für den Vertrag sind die praktischen Punkte einfach:

- Legen Sie fest, wo das System und seine Datenbank gehostet werden.
- Benennen Sie, wer beim Anbieter auf echte Kundendaten zugreifen darf und von wo aus.
- Vereinbaren Sie, dass Entwicklung und Tests mit Beispieldaten laufen, sofern echte Daten nicht wirklich nötig sind.
- Verpflichten Sie den Anbieter, Ihre schriftlichen Weisungen zu personenbezogenen Daten zu befolgen.

## Geistiges Eigentum und Quellcode

Gehen Sie nicht davon aus, dass Ihnen der Code gehört, nur weil Sie ihn bezahlt haben. Das Urheberrecht der VAE (Federal Decree-Law 38 of 2021) schützt Software und macht den Arbeitgeber zum Inhaber der Werke, die Angestellte im Rahmen ihrer Tätigkeit schaffen, sofern nichts anderes vereinbart ist. Diese Regel betrifft Angestellte. Ein externes Unternehmen oder ein Freelancer ist nicht Ihr Angestellter, daher muss die Übertragung im Vertrag stehen.

Eine klare IP-Klausel umfasst:

- **Übertragung** aller Rechte an individuellem Code, Designs, Datenbankstruktur und Dokumentation an den Kunden, üblicherweise mit vollständiger Bezahlung.
- **Übergabe des Quellcodes**: das vollständige Repository, Build-Anleitungen und Zugangsdaten, nicht nur eine laufende App.
- **Fremd- und Open-Source-Komponenten**, die Ihnen lizenziert und nicht übertragen werden, mit einer Liste der Lizenzen.
- **Bestehende Werkzeuge und Bibliotheken des Anbieters**, falls sie wiederverwendet werden, mit einer dauerhaften Lizenz zur Nutzung in Ihrem System.
- **Konten auf Ihren Namen**: Code-Repository, Hosting, Domain und Entwicklerkonten in den App-Stores, mit dem Anbieter als Nutzer.

## Formulierungen zu Mehrwertsteuer und Quellensteuer

Dieser Abschnitt ist eine allgemeine Information und keine Steuerberatung; klären Sie Ihre Lage mit Ihrem Steuerberater.

**Mehrwertsteuer.** Die Mehrwertsteuer beträgt in Saudi-Arabien 15 % und in den VAE 5 %. Kauft ein dort registriertes Unternehmen Leistungen bei einem Anbieter im Ausland ein, führt es die Steuer in der Regel selbst im Reverse-Charge-Verfahren ab; die Rechnung des ausländischen Anbieters enthält daher keine saudische oder emiratische Mehrwertsteuer. Der Vertrag sollte festhalten, dass die Preise ohne Mehrwertsteuer gelten und der Kunde etwaige Steuer im Reverse-Charge-Verfahren abführt. Ist der Anbieter in Ihrem Land registriert, lautet die Formulierung anders; sagen Sie Ihrem Berater daher, wo der Anbieter sitzt.

**Saudische Quellensteuer.** Eine Zahlung an einen Anbieter im Ausland für technische Leistungen kann einer Quellensteuer von 5 % unterliegen. Der saudische Kunde zieht sie von der Zahlung ab und führt sie an die ZATCA ab, der Anbieter erhält den Rest. Der Satz hängt davon ab, wie jede Zahlung eingeordnet wird (der ZATCA-Leitfaden nennt etwa für Lizenzgebühren 15 %), und ein Softwareprojekt kann verschiedene Arten von Leistungen mischen. Lassen Sie die Einordnung daher vor der Unterschrift von Ihrem Berater vornehmen.

Klären Sie dann, wer die Kosten trägt. Es gibt zwei Möglichkeiten:

| Formulierung | Rechnung | Quellensteuer 5 % | Anbieter erhält |
|---|---|---|---|
| Bruttopreis, Steuer wird abgezogen | 10.000 $ | 500 $ | 9.500 $ |
| Nettopreis, Kunde stockt auf | 10.526,32 $ | 526,32 $ | 10.000 $ |

Die zweite Variante ist eine **Gross-up-Klausel**. Beide sind akzeptabel; problematisch ist ein Vertrag, der nichts regelt, denn dann fehlt einer Seite der einbehaltene Betrag. Ergänzen Sie, dass der Kunde für jede Quellensteuerzahlung einen Nachweis schickt, damit der Anbieter seine Unterlagen in Ordnung halten kann.

Wenn Sie zusätzlich Steuerrechnungen in einem bestimmten elektronischen Format benötigen, lesen Sie [E-Invoicing in den GCC-Staaten nach Land](/blog/gcc-e-invoicing-by-country) und legen Sie im Vertrag fest, wer für diese Arbeit verantwortlich ist.

## Arabischer Text und maßgebliche Fassung

Mit einem Vertrag nur auf Englisch kann ein arabischsprachiges Team schwer arbeiten, daher lohnt sich oft ein arabischer Text. Wenn Sie in zwei Sprachen unterschreiben, muss der Vertrag festlegen, welche Fassung bei Abweichungen maßgeblich ist. Zwei „gleichermaßen verbindliche“ Texte ohne Vorrangregel lassen die Bedeutung genau dann offen, wenn Sie sie geklärt brauchen.

Praktische Punkte:

- Unterschreiben Sie beide Fassungen nebeneinander in einem Dokument, statt später zu übersetzen.
- Halten Sie definierte Begriffe einheitlich: „Abnahme“, „Liefergegenstand“ und „Quellcode“ sollten jedes Mal gleich übersetzt werden.
- Entscheiden Sie, ob technische Anlagen wie Leistungsumfang und Abnahmetests übersetzt werden oder einvernehmlich in einer Sprache bleiben.
- Fragen Sie Ihren Anwalt, ob eine arabische Fassung für Behörden oder Gerichte nötig ist, die den Vertrag sehen könnten.

## Anwendbares Recht und Streitbeilegung

Ein Vertrag zwischen einem Kunden in Riad oder Dubai und einem Anbieter in einem anderen Land muss ein anwendbares Recht und einen Ort für Streitigkeiten benennen. Fehlt das, geht der erste Streit darum, welches Gericht den zweiten entscheiden darf.

Die Klausel sollte Folgendes regeln:

1. **Anwendbares Recht**: das Recht eines benannten Landes. Sitzt Ihr Unternehmen in einer Freizone wie DIFC oder ADGM, sagen Sie es Ihrem Anwalt, denn dort gelten eigene Regeln.
2. **Forum**: ein benanntes Gericht oder ein Schiedsverfahren mit benannter Institution, Sitz und Sprache.
3. **Zuerst eine Eskalationsstufe**: ein Treffen der Entscheidungsträger innerhalb einer festen Zahl von Tagen, bevor jemand Klage erhebt.
4. **Verfahrenssprache**, passend zur maßgeblichen Vertragsfassung.

Welches Recht und welches Forum zu Ihnen passen, hängt davon ab, wo jede Seite Vermögen hat und wie ein Urteil vollstreckt würde. Das ist eine Frage für Ihren Anwalt, nicht für Ihren Anbieter.

## Die Zusatzklauseln im Überblick

| Klausel | Was hineingehört | Warum sie wichtig ist |
|---|---|---|
| Vertraulichkeit | Geheimhaltung für Ihre Daten und die Ihrer Kunden | Der Anbieter sieht Ihre Systeme |
| Daten am Ende | Rückgabe oder sichere Löschung, schriftlich bestätigt | Kopien überdauern das Projekt |
| Vorfälle | Meldefrist, Kontakt, gelieferte Angaben | Sie erfahren vom Vorfall durch den Anbieter, nicht aus den Nachrichten |
| IP und Code | Vollständige Übertragung bei Zahlung, Repository übergeben | Externe sind keine Angestellten |
| Mehrwertsteuer | Preise ohne Steuer; Reverse Charge, wo anwendbar | Die Rechnung eines ausländischen Anbieters enthält in der Regel keine lokale Steuer |
| Quellensteuer | Brutto oder netto der Quellensteuer, Zahlungsnachweis | Verhindert einen Fehlbetrag bei jeder Zahlung |
| Sprache | Welche Fassung maßgeblich ist | Zwei Texte können abweichen |
| Recht und Forum | Ein Recht, ein Forum, zuerst Eskalation | Verhindert den Streit darüber, wo gestritten wird |

## Was KF Tech Solutions hier tut

KF Tech Solutions ist ein Softwarestudio in Kairo, gegründet 2020. Wir arbeiten mit Unternehmen in Ägypten und der Golfregion, aus der Ferne, und entwickeln [Individualsoftware](/services/custom-software), Websites, Web- und Mobile-Apps, POS-, ERP- und Lagersysteme, WhatsApp-Chatbots und KI-Automatisierung. Nach einem kostenlosen Gespräch erhalten Sie ein festes schriftliches Angebot. Unsere Verträge können eine Geheimhaltungsvereinbarung, die Rückgabe oder sichere Löschung Ihrer Daten bei Vertragsende, ein Verfahren zur Meldung von Sicherheitsvorfällen und die vollständige Übertragung von Quellcode und geistigem Eigentum enthalten; den endgültigen Text sollte Ihr Anwalt prüfen. Mehr dazu, wie wir mit Kunden in der Region arbeiten, finden Sie auf unserer [Seite für die Golfregion](/gulf).

## Häufige Fragen

### Brauche ich all das auch bei einem kleinen Projekt?

IP-Übertragung, Formulierungen zu Mehrwert- und Quellensteuer sowie die Rechtswahl kosten nichts und zählen bei jeder Größe. Die Datenklauseln können kürzer ausfallen, wenn der Anbieter nie echte Kundendaten sieht.

### Gelten die NCA-Kontrollen für mein privates Unternehmen?

Die ECC-Pflichten treffen Behörden und Betreiber kritischer Infrastruktur. Ein privates Unternehmen ist nicht in gleicher Weise gebunden, die drei Vertragspunkte sind aber trotzdem ein vernünftiger Standard.

### Wer zahlt die saudische Quellensteuer?

Der Kunde behält sie ein und führt sie an die ZATCA ab. Ob sie vom Preis des Anbieters abgeht oder aufgeschlagen wird, ist eine kaufmännische Entscheidung, die der Vertrag festhalten sollte.

### Gehört mir der Code, wenn der Vertrag schweigt?

Verlassen Sie sich nicht darauf. Die Arbeitgeberregel der VAE betrifft Angestellte, nicht externe Unternehmen; schreiben Sie die Übertragung von Code und IP daher in den Vertrag.

### Können wir nur auf Englisch unterschreiben?

Das entscheidet Ihr Anwalt. Wenn Sie später eine arabische Fassung ergänzen, nehmen Sie zugleich die Klausel zur maßgeblichen Fassung auf.

Wenn Sie einen Vertragsentwurf und den zugrunde liegenden Leistungsumfang durchgehen möchten, [buchen Sie ein kostenloses Gespräch](/book) oder [schreiben Sie uns](/contact).

## Quellen

- [NCA: Essential Cybersecurity Controls (ECC-2:2024)](https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf)
- [Morgan Lewis: Urheberrecht der VAE](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2022/10/protecting-online-data-and-ip-new-copyright-law-provides-clarity-for-uae-businesses)
- [ZATCA: Leitfaden zu Importen und Exporten in der Mehrwertsteuer](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-on-Imports-and-Exports-under-VAT-Provision.pdf)
- [ZATCA: Leitfaden zur Quellensteuer](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/General-Guideline-for-Withholding-Tax-In-accordance-with-the-provisions-of-the-Income-Tax-Law-and-its-Implementing-Regulations.pdf)
- [Federal Tax Authority der VAE: Mehrwertsteuerleitfaden für E-Commerce](https://tax.gov.ae/DataFolder/Files/Pdf/E-Commerce%20-%20VAT%20Guide%20-%20EN%20-%2009%2008%202020.pdf)
