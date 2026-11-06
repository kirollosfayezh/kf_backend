---
title: E-Rechnung in den GCC-Staaten: der Stand in jedem Land
summary: Saudi-Arabien ist live, die VAE und Oman starten 2027, in Katar, Bahrain und Kuwait gilt keine Pflicht. Termine, Modelle und was Ihr Kassensystem braucht.
tags: E-Rechnung, GCC, Saudi-Arabien, VAE, Oman, Mehrwertsteuer, Kassensystem
alt: Zwei geschwungene Türme an der Uferpromenade von Lusail in Katar unter blauem Himmel mit Wolken
caption: Jeder Golfstaat legt seinen eigenen Zeitplan für E-Rechnungen fest, und ein System für die ganze Region muss jedem folgen.
stats: 3|GCC-Staaten mit laufender oder terminierter E-Rechnung; 24 Std.|zur Meldung einer vereinfachten Rechnung in Saudi-Arabien; 1. Jan. 2027|erster Pflichttermin in den VAE, ab 50 Mio. AED Umsatz
---

Saudi-Arabien ist das einzige GCC-Land, in dem die E-Rechnung bereits gilt: Die
Steuerbehörde ZATCA bringt Unternehmen in Wellen in Phase 2, und Welle 25 muss
bis zum 1. Februar 2027 angebunden sein. Die VAE starten am 1. Januar 2027 für
Unternehmen mit einem Umsatz ab 50 Mio. AED, Oman am 1. April 2027 für
Unternehmen über 5 Mio. OMR. Katar hat nur einen Gesetzentwurf, Bahrain hat
keinen Termin genannt, und in Kuwait haben wir keine Pflicht gefunden.

Zuletzt geprüft: 6. November 2026

Dieser Leitfaden stellt alle Länder in einer Tabelle zusammen, erklärt jedes
System in einfachen Worten und zeigt, was ein einziges Kassen- oder ERP-System
leisten muss, wenn Sie in mehreren dieser Länder verkaufen. Es handelt sich um
allgemeine Informationen, nicht um Steuer- oder Rechtsberatung. Klären Sie Ihre
eigenen Pflichten mit der Steuerbehörde oder einem Steuerberater.

## Die GCC-Staaten im Überblick

| Land | Mehrwertsteuer | Status E-Rechnung, Nov. 2026 | Wichtige Termine | Weg der Rechnung |
|---|---|---|---|---|
| Saudi-Arabien | 15 % | Live, in Wellen | Welle 25 bis 1. Feb. 2027 | Direkt an die ZATCA-Plattform FATOORA |
| VAE | 5 % | Pilot und freiwillig seit 1. Juli 2026 | 1. Jan. 2027 (Umsatz ab 50 Mio. AED), 1. Juli 2027 (übrige), 1. Okt. 2027 (Behörden) | Über einen akkreditierten Dienstleister (ASP) |
| Oman | 5 % | Freiwilliger Pilot seit Aug. 2026 | 1. Apr. 2027 (über 5 Mio. OMR), 1. Okt. 2027 (übrige) | Über einen von der OTA akkreditierten Anbieter |
| Katar | Keine | Gesetzentwurf am 6. Mai 2026 vom Kabinett gebilligt, nicht in Kraft | Keine Termine | Noch nicht festgelegt |
| Bahrain | 10 % | Erwartet | Kein offizieller Termin | Noch nicht festgelegt |
| Kuwait | Keine | Keine Pflicht gefunden | Keine | Entfällt |

Zwei Muster fallen auf. Saudi-Arabien nutzt ein zentrales Modell: Ihr System
spricht direkt mit der Steuerbehörde. Die VAE und Oman nutzen ein
5-Corner-Modell: Ihr System sendet die Rechnung an einen akkreditierten
Anbieter, der sie an den Anbieter des Käufers weiterleitet und die Steuerdaten
meldet. Ihre Software muss zu dem Modell passen, das in jedem Land gilt, in dem
Sie Rechnungen stellen.

## Saudi-Arabien: live, Welle für Welle

Seit 2023 bringt die ZATCA umsatzsteuerlich registrierte Unternehmen in Wellen
in Phase 2 (Integration), beginnend mit den größten. Welle 25 umfasst
Unternehmen mit steuerpflichtigem Umsatz über 187.500 SAR in einem beliebigen
Jahr von 2022 bis 2025; sie müssen bis zum 1. Februar 2027 an FATOORA
angebunden sein.

Was Phase 2 von Ihrer Rechnungssoftware verlangt, ist konkret:

- **Strukturiertes XML.** Rechnungen folgen der UBL-2.1-Struktur. Alles, was an die ZATCA geht, ist XML über eine API.
- **Ein registriertes Gerät oder System.** Jede Rechnungseinheit wird auf FATOORA registriert und erhält eine kryptografische Stempelkennung (CSID).
- **Clearance für Steuerrechnungen.** Meist B2B. Die ZATCA prüft und stempelt die Rechnung, bevor sie an den Käufer geht.
- **Meldung vereinfachter Rechnungen.** Meist B2C, etwa ein Kassenbon. Ihr System stempelt ihn, druckt einen QR-Code und meldet ihn innerhalb von 24 Stunden an FATOORA.
- **Manipulationsschutz.** Jede Rechnung trägt eine UUID und den Hash der vorherigen Rechnung, sodass eine lückenlose Kette entsteht.
- **Arabisch.** Rechnungen müssen auf Arabisch ausgestellt werden.

Das 24-Stunden-Fenster ist für Geschäfte und Restaurants wichtig: Die Kasse kann
bei einem kurzen Internetausfall weiterverkaufen, solange jeder Beleg innerhalb
von 24 Stunden nach seiner Ausstellung bei FATOORA eingeht. Die ZATCA veröffentlicht außerdem ein
Verzeichnis von Lösungsanbietern, stellt aber klar, dass ein Eintrag keine
Zulassung ist. Seien Sie daher vorsichtig mit Aussagen wie „von der ZATCA
zugelassen“.

## VAE: B2B und B2G ab 2027, über einen ASP

Das System der VAE erfasst Rechnungen zwischen Unternehmen und an Behörden.
Rechnungen an Endkunden sind vorerst ausgenommen, bis ein späterer
Ministerialbeschluss etwas anderes regelt. Ein Pilot mit freiwilligen
Teilnehmern begann am 1. Juli 2026; das war keine Pflicht.

Die Pflichttermine stammen aus dem Ministerialbeschluss 244 von 2025 in der
geänderten Fassung:

| Gruppe | ASP beauftragen bis | Start |
|---|---|---|
| Umsatz ab 50 Mio. AED | 30. Okt. 2026 | 1. Jan. 2027 |
| Umsatz unter 50 Mio. AED | 31. März 2027 | 1. Juli 2027 |
| Behörden | 31. März 2027 | 1. Okt. 2027 |

Am 10. Mai 2026 verschob das Finanzministerium die ASP-Frist für die größte
Gruppe auf den 30. Oktober 2026; der Start am 1. Januar 2027 blieb unverändert.

Verkäufer und Käufer beauftragen jeweils einen ASP. Ihr ERP- oder Kassensystem
sendet die Rechnungsdaten im VAE-Format PINT AE an Ihren ASP. Dieser prüft sie,
stellt sie dem ASP des Käufers zu und meldet die Steuerdaten. Ein PDF, eine
Word-Datei oder ein per E-Mail gesendeter Scan ist in diesem System keine
E-Rechnung.

## Oman: Fawtara ab April 2027, einschließlich B2C

Der im August 2026 angekündigte Beschluss 189/2026 legt die Termine fest: den 1. April 2027
für Unternehmen mit jährlichen Lieferungen über 5 Mio. OMR und den 1. Oktober 2027
für alle anderen. Ein freiwilliger Pilot begann im August 2026.

Rechnungen müssen im vorgeschriebenen XML-Format über ein System ausgestellt
werden, das mit einem von der Steuerbehörde OTA akkreditierten Anbieter
verbunden ist, nach einem 5-Corner-Modell auf Basis von Peppol. Anders als die
VAE bezieht Oman B2C von Anfang an ein. Die technischen Einzelheiten, etwa
Meldefristen und QR-Codes, legt die Steuerbehörde fest. Prüfen Sie daher deren
aktuelle Vorgaben, bevor Sie entwickeln.

## Katar, Bahrain und Kuwait: beobachten, aber noch nicht bauen

- **Katar** hat keine Mehrwertsteuer. Am 6. Mai 2026 billigte das Kabinett einen Entwurf für ein E-Rechnungs-Gesetz samt Durchführungsverordnung. Wir haben keinen Beleg gefunden, dass es in Kraft ist, und keine Termine. Für katarische Rechnungen gilt noch nichts.
- **Bahrain** erhebt seit dem 1. Januar 2022 eine Mehrwertsteuer von 10 %. Die E-Rechnung wird erwartet, und laut PwC rechnet der Markt mit einem Rahmen ähnlich dem saudischen, ein offizieller Termin wurde aber nicht genannt.
- **Kuwait** hat keine Mehrwertsteuer, und wir haben keine E-Rechnungs-Pflicht gefunden.

Für diese drei Länder ist es sinnvoll, Ihre Rechnungsdaten sauber und
strukturiert zu halten und die Mitteilungen der Steuerbehörde zu verfolgen,
statt für eine Anbindung zu bezahlen, deren Regeln noch nicht veröffentlicht
sind.

## Was ein Kassen- oder ERP-System in der Region können muss

Wenn Sie in mehr als einem GCC-Land verkaufen oder es planen, unterscheiden sich
die Regeln, aber die Grundlage ist dieselbe. Prüfen Sie vor der Auswahl oder dem
Umbau eines Systems, ob es Folgendes kann:

1. **Jede Rechnung als strukturierte Daten speichern.** Steuernummer des Kunden, Positionen, Steuer je Position, Summen und Währung in Feldern, nicht nur als Drucklayout.
2. **Getrennte Profile pro Land.** Jedes Land hat eigenen Steuersatz, eigene Steuernummer, Währung und Rechnungsformat; eine Filiale in Riad und eine in Dubai brauchen im selben System unterschiedliche Einstellungen.
3. **B2B und B2C trennen.** Saudi-Arabien behandelt sie unterschiedlich, die VAE nehmen B2C vorerst aus, Oman erfasst beide.
4. **Mehrere Anbindungen unterstützen.** Eine direkte ZATCA-Anbindung für Saudi-Arabien und eine Verbindung zum beauftragten Anbieter in den VAE oder in Oman.
5. **Offline weiterverkaufen.** Rechnungen lokal puffern und senden, sobald die Verbindung zurück ist, innerhalb der Frist des jeweiligen Landes.
6. **Ausgestellte Rechnungen sperren.** Korrekturen laufen über Gutschriften und Belastungsanzeigen, nie durch Ändern oder Löschen einer Rechnung.
7. **Arabische und zweisprachige Rechnungen drucken**, mit QR-Code, wo das Land ihn verlangt.
8. **Ein Fehlerprotokoll führen**, das zeigt, welche Rechnungen abgelehnt wurden und warum, damit sie noch am selben Tag korrigiert werden.

Ein so aufgebautes System braucht beim Start des nächsten Landes nur eine neue
Anbindung und ein neues Profil, keinen Neubau. Ein System, das nur ein PDF
druckt, muss in Saudi-Arabien, den VAE und Oman gleichermaßen ersetzt werden.
Wenn Sie zwischen Standardsoftware und Individualentwicklung abwägen, zeigt
unser Artikel
[ob ein kleines Unternehmen ein ERP braucht](/blog/erp-for-small-business-egypt)
die Vor- und Nachteile.

## Was KF Tech Solutions hier leistet

Wir haben ein Kassensystem an das E-Beleg-System der ägyptischen Steuerbehörde
ETA angebunden, das auf denselben Prinzipien beruht: strukturierte
Rechnungsdaten, eindeutige Rechnungskennungen und Übermittlung an eine
Steuerbehörde. Wie das funktioniert, lesen Sie in
[Kassensystem an Ägyptens ETA-E-Rechnung anbinden](/blog/eta-e-invoicing-pos-integration).
Wir arbeiten mit Unternehmen in Ägypten und am Golf und entwickeln individuelle
[Kassen- und ERP-Systeme](/services/business-systems), deren Rechnungsdaten
für die Länder strukturiert sind, in denen Sie verkaufen. Wir sind kein
akkreditierter Dienstleister in den VAE oder in Oman und haben keine
ZATCA-Zulassung; dort läuft die Übermittlung über den Anbieter oder die
Plattform, die die Regeln vorschreiben. Auf unserer [Golf-Seite](/gulf) sehen
Sie, wie wir mit Kunden in der Region arbeiten, und hier,
[worauf Sie bei einem ägyptischen Softwareunternehmen achten sollten](/blog/hire-egyptian-software-company-from-gulf).

## Häufige Fragen

### Ist die E-Rechnung in allen GCC-Staaten Pflicht?

Nein. Sie gilt in Saudi-Arabien, und Pflichttermine stehen in den VAE (ab 1. Januar
2027) und in Oman (ab 1. April 2027) fest. Katar hat einen
Gesetzentwurf, der nicht in Kraft ist, Bahrain hat keinen offiziellen Termin,
und in Kuwait haben wir keine Pflicht gefunden.

### Zählt eine PDF-Rechnung als E-Rechnung?

Nicht in Saudi-Arabien, den VAE oder Oman. Alle drei verlangen strukturierte
Daten (XML), die über die ZATCA oder einen akkreditierten Anbieter laufen. Ein
PDF kann weiterhin die Kopie für den Kunden sein, ist aber nicht die Rechnung,
die das System anerkennt.

### Müssen Geschäfte in den VAE 2027 Kassenbons an einen ASP senden?

Nach den aktuellen Regeln nicht. Das System der VAE erfasst B2B- und
B2G-Rechnungen, B2C ist bis zu einem späteren Ministerialbeschluss ausgenommen.
Ein Geschäft, das auch Rechnungen an Unternehmen stellt, muss diese jedoch über
einen ASP abwickeln.

### Kann ein System Saudi-Arabien und die VAE abdecken?

Ja, wenn es Rechnungen als strukturierte Daten speichert, ein Profil pro Land
führt und sowohl eine direkte ZATCA-Anbindung als auch eine ASP-Verbindung
unterstützt. Lassen Sie sich von jedem Anbieter beides in Funktion zeigen, nicht
nur beschreiben.

### Sollte ich mich jetzt auf Katar, Bahrain oder Kuwait vorbereiten?

Halten Sie Ihre Rechnungsdaten strukturiert und die Steuerangaben Ihrer Kunden
vollständig; das hilft überall. Eine eigene Anbindung lohnt sich erst, wenn die
Steuerbehörde die technischen Regeln und Termine veröffentlicht hat.

Wenn Sie Ihr Kassen- oder ERP-System für die Länder prüfen lassen möchten, in
denen Sie verkaufen, oder ein passendes System brauchen,
[buchen Sie ein kostenloses Gespräch](/book) oder
[senden Sie uns die Details](/contact). Wir sagen Ihnen, was gilt und was
nötig ist.

## Quellen

- [ZATCA: Mitteilung zur Integration von Welle 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: XML-Implementierungsstandard für E-Rechnungen](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA: Verzeichnis der Lösungsanbieter](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [Finanzministerium der VAE: Ministerialbeschluss Nr. 244 von 2025](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Finanzministerium der VAE: Änderungen der E-Rechnungs-Beschlüsse, 10. Mai 2026](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [Steuerbehörde Oman: FAQ zu Fawtara](https://tms.taxoman.gov.om/portal/documents/d/taxportal/faq-s)
- [Oman Observer: Beschluss 189/2026 zu elektronischen Steuerrechnungen](https://www.omanobserver.om/article/1194193/business/decision-issued-on-tax-invoices-in-electronic-format)
- [Qatar News Agency: Kabinettssitzung vom 6. Mai 2026](https://qna.org.qa/en/news/news-details?id=cabinet-holds-regular-meeting&date=6%2F05%2F2026)
- [PwC Tax Summaries: Katar, sonstige Steuern](https://taxsummaries.pwc.com/qatar/corporate/other-taxes)
- [PwC Tax Summaries: Bahrain, sonstige Steuern](https://taxsummaries.pwc.com/bahrain/corporate/other-taxes)
- [PwC Tax Summaries: Kuwait, sonstige Steuern](https://taxsummaries.pwc.com/kuwait/corporate/other-taxes)
- [PwC Tax Summaries: Oman, sonstige Steuern](https://taxsummaries.pwc.com/oman/corporate/other-taxes)
