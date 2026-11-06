---
title: Ein Kassensystem für Ägypten und Saudi-Arabien: ETA vs. ZATCA
summary: Ägyptens ETA und Saudi-Arabiens ZATCA verlangen andere Dokumente, Signaturen und Abläufe. So bedient ein Kassensystem beide, mit einem Steuermodul je Land.
tags: Kassensystem, ETA, ZATCA, E-Rechnung, Ägypten, Saudi-Arabien
alt: Mitarbeitende mit Haarnetzen bedienen an der Kasse einer Bäckerei mit zwei Kundenbildschirmen
caption: Derselbe Verkauf an derselben Theke muss in Ägypten als ETA-Beleg und in Saudi-Arabien als ZATCA-Rechnung hinausgehen.
stats: 2|Steuerbehörden, jede mit eigenem Portal, Format und Regeln; 24 h|für Einreichung oder Meldung eines Verbraucherverkaufs in beiden Ländern; 1|gemeinsamer Kassenkern, mit einem Steuermodul je Land
---

Ja, ein Kassensystem kann Filialen in Ägypten und Saudi-Arabien bedienen, aber nicht mit einer einzigen E-Rechnungs-Anbindung. Die ägyptische Steuerbehörde (ETA) und die saudische Zakat-, Steuer- und Zollbehörde (ZATCA) betreiben getrennte Systeme mit unterschiedlichen Dokumentformaten, Signaturen, Geräteregistrierungen und Freigabeabläufen. Die praktikable Lösung ist ein gemeinsamer Kassenkern für Verkauf, Bestand und Schichten, dazu ein eigenes Steuermodul je Land, das die Regeln der jeweiligen Behörde kennt.

Zuletzt geprüft: 6. November 2026

Dieser Leitfaden ist eine allgemeine Information für Unternehmer und ihre Teams, keine Steuer- oder Rechtsberatung. Klären Sie mit Ihrem Steuerberater oder direkt mit der Behörde, welche Regeln und Termine für Ihre Registrierung gelten.

## Ägypten: ETA-E-Rechnung und E-Beleg

Die ETA betreibt eine Plattform, die ihre Entwicklerdokumentation als „die Lösung der ägyptischen Steuerbehörde“ für eInvoicing und eReceipt beschreibt, mit Schnittstellen (APIs) für die ERP- und Kassensysteme der Steuerpflichtigen. Es gibt zwei Bereiche, und ein Unternehmen, das sowohl an der Theke als auch an Firmen verkauft, braucht in der Regel beide.

**E-Rechnung (Rechnungen an Unternehmen und Behörden).** Ihr System reicht jede Rechnung als JSON oder XML über die API der ETA ein. Vor dem Signieren wird das Dokument in eine kanonische Form gebracht und mit SHA-256 gehasht; der Hash wird mit einer CAdES-BES-Signatur über ein eSeal-Zertifikat signiert. Eine ausgestellte Rechnung lässt sich nur innerhalb einer Frist stornieren, die die ETA je Dokumenttyp festlegt. Danach verweist die Dokumentation auf eine Gutschrift.

**E-Beleg (Verkäufe an Verbraucher an der Kasse).** Dieser Bereich betrifft das Kassensystem eines Geschäfts direkt. Die Belegdokumentation der ETA legt folgende Regeln fest:

- Das Kassengerät muss registriert und mit der Registrierungsnummer des Ausstellers (RIN) verknüpft sein, bevor es einen Beleg ausstellt.
- Belege werden ausschließlich als JSON eingereicht.
- Die UUID jedes Belegs ist ein SHA-256-Hash des normalisierten Belegs, geschrieben als 64 Hexadezimalzeichen.
- Jeder Beleg enthält die UUID des vorherigen Belegs desselben Kassengeräts, sodass jedes Gerät seine eigene Kette führt.
- Ein Beleg darf innerhalb von 24 Stunden eingereicht werden, und der Einreichungszeitpunkt darf nicht in der Zukunft liegen.
- Der gedruckte Beleg trägt einen QR-Code, der auf die Belegdetails im ETA-Portal verweist, zusammen mit dem Gesamtbetrag und der Registrierungsnummer des Verkäufers.

Welche Bereiche für Ihr Unternehmen gelten und ab wann, hängt von Ihrer Registrierung ab. Prüfen Sie das bei der ETA selbst und nicht auf der Seite eines Anbieters. Unser Leitfaden zur [Anbindung Ihres Kassensystems an die ägyptische ETA](/blog/eta-e-invoicing-pos-integration) erklärt die Integrationsschritte und typische Fehlerquellen.

## Saudi-Arabien: ZATCA Phase 2 (FATOORA)

Die E-Rechnung der ZATCA hat zwei Phasen. Phase 1 (Erstellung) gilt seit dem 4. Dezember 2021 für alle Steuerpflichtigen außer Gebietsfremden; eine eingescannte oder kopierte Papierrechnung ist keine E-Rechnung. Phase 2 (Integration) begann am 1. Januar 2023 und wird in Wellen eingeführt, wobei die ZATCA jede Welle mindestens sechs Monate im Voraus ankündigt. Welle 25 umfasst Unternehmen mit umsatzsteuerpflichtigen Umsätzen über 187.500 SAR in einem beliebigen Jahr von 2022 bis 2025; sie müssen sich bis zum 1. Februar 2027 an die Plattform FATOORA anbinden.

Was Phase 2 laut den detaillierten Leitlinien und dem XML-Standard der ZATCA von einem Kassensystem verlangt:

- **Onboarding.** Jede Rechnungseinheit, eine „E-Invoice Generation Solution“ (EGS), wird im FATOORA-Portal registriert und erhält dort ihren Cryptographic Stamp Identifier (CSID).
- **Format.** Rechnungen sind XML in der Struktur UBL 2.1 mit Validierungsregeln auf Basis von EN 16931, und alles, was an die ZATCA geht, wird als XML über eine API übermittelt.
- **Steuerrechnungen (meist an Unternehmen und Behörden).** Die ZATCA gibt sie in Echtzeit frei: Sie prüft die Rechnung, fügt ihren Stempel und einen QR-Code hinzu und sendet das freigegebene XML zurück. Die Rechnung muss freigegeben sein, bevor sie den Käufer erreicht; das gilt auch für zugehörige Gutschriften und Belastungsanzeigen.
- **Vereinfachte Rechnungen (meist an Verbraucher).** Ihr eigenes System stempelt das XML mit seiner CSID, fügt einen QR-Code mit 9 TLV-Feldern in Base64 hinzu und übergibt dem Kunden eine Kopie. Das XML muss innerhalb von 24 Stunden an FATOORA gemeldet werden.
- **Manipulationsschutz.** Jede Rechnung trägt eine 128-Bit-UUID und den Hash der vorherigen Rechnung, sodass je EGS-Einheit eine Kette entsteht. Der Zähler lässt sich nicht zurücksetzen, Benutzer können das Systemdatum nicht ändern, und gespeichertes XML darf weder gelöscht noch bearbeitet werden.
- **Arabisch.** Die lesbare Rechnung muss auf Arabisch sein; weitere Sprachen dürfen ergänzt werden.

Die ZATCA zertifiziert keine Software. Ihr Verzeichnis der Lösungsanbieter ist eine Orientierungsliste, die laut ZATCA „nicht als Genehmigung gilt“; seien Sie daher vorsichtig mit Bezeichnungen wie „ZATCA-zertifiziert“. Zu den im November 2021 veröffentlichten Bußgeldern der ZATCA gehören 5.000 SAR für das Nichtausstellen von E-Rechnungen und 10.000 SAR für das Löschen oder Ändern einer E-Rechnung nach der Ausstellung.

## ETA und ZATCA im Vergleich

| | Ägypten (ETA) | Saudi-Arabien (ZATCA) |
|---|---|---|
| Plattform | ETA-Lösung für eInvoicing und eReceipt | FATOORA |
| Rechnungen an Unternehmen | E-Rechnung, JSON oder XML, über die API eingereicht | Steuerrechnung, UBL 2.1 XML, vor Zugang beim Käufer freigegeben |
| Verkäufe an Verbraucher | E-Beleg, nur JSON, innerhalb von 24 Stunden eingereicht | Vereinfachte Rechnung, von Ihrem System gestempelt, innerhalb von 24 Stunden gemeldet |
| Geräteidentität | Kassengerät registriert und mit der RIN des Ausstellers verknüpft | Jede EGS-Einheit registriert, mit eigener CSID |
| Signatur | CAdES-BES mit eSeal-Zertifikat (E-Rechnungen) | Kryptografischer Stempel aus der CSID; die ZATCA stempelt bei der Freigabe |
| Dokument-ID | UUID ist ein SHA-256-Hash des Belegs | 128-Bit-UUID auf jeder Rechnung |
| Kette | UUID des vorherigen Belegs, je Kassengerät | Hash der vorherigen Rechnung, je EGS-Einheit |
| QR-Code | Link zum Beleg im ETA-Portal, mit Betrag und RIN | 9 TLV-Felder, Base64 |
| Korrekturen | E-Rechnungen: Stornierung innerhalb der ETA-Frist, danach Gutschrift; E-Belege: Rückgabebeleg | Kein Löschen oder Ändern; Gutschriften und Belastungsanzeigen |

Die Gemeinsamkeiten sind echt: Beide Länder verketten Dokumente je Gerät, beide geben Verbraucherverkäufen 24 Stunden, und beide setzen einen QR-Code auf den Beleg. Formate, Identitäten und Hash-Regeln unterscheiden sich jedoch in jedem Detail, sodass Code für das eine System nicht einfach auf das andere umgelenkt werden kann.

## Was ein Kassensystem teilen kann und was nicht

Der größte Teil eines Kassensystems hat mit Steuerbehörden nichts zu tun, und dieser Teil kann für beide Länder gemeinsam genutzt werden:

- Artikelkatalog, Barcodes, Varianten und Bestand je Filiale;
- Schichten, Kassenzählungen und Kassiererrechte;
- Retouren, die mit dem ursprünglichen Verkauf verknüpft sind;
- Berichte, mit einer Gruppenansicht über beide Länder;
- ein Verwaltungs-Dashboard für die Zentrale.

Getrennt sein muss alles, was mit der Behörde kommuniziert. Jede Filiale gehört zu einem Land, und jedes Land erhält sein eigenes Steuermodul: eigene Geräteregistrierung, eigener Dokumentaufbau, eigene Signaturmethode, eigene Übermittlungsregeln und eigenes Archiv. Eine Filiale in Dschidda darf niemals einen Beleg an die ETA senden, und eine Filiale in Kairo darf niemals UBL-XML für FATOORA erzeugen.

Auch der Katalog braucht Steuerdaten je Land. Ein Artikel kann für Ägypten einen Code und eine Steuerbehandlung haben und für Saudi-Arabien andere, mit Preisen in ägyptischen Pfund und saudischen Riyal. Unser Leitfaden zur [Auswahl eines Kassensystems für ein Geschäft in Ägypten](/blog/pos-cashier-system-for-shops-egypt) behandelt die Funktionen im Laden ausführlicher.

## So gestalten Sie das Steuermodul je Land

Ein sauberes Design stellt beide Länder hinter dieselbe interne Schnittstelle: Die Kasse meldet nur „dieser Verkauf ist abgeschlossen“, und das passende Modul übernimmt.

1. **Ein Land je Filiale.** Die Filiale bestimmt Modul, Währung, Zeitzone und Belegsprache. Kairo stellt im Sommer die Uhren vor, während Riad das ganze Jahr auf UTC+3 bleibt; speichern Sie Zeitstempel daher mit ihrem Offset.
2. **Geräteidentität je Kasse.** Für Ägypten das registrierte Kassengerät und die RIN des Ausstellers, für Saudi-Arabien die registrierte EGS-Einheit und ihre CSID. Legen Sie fest, wer Zertifikate wann erneuert.
3. **Ein Dokumentgenerator je Land.** ETA-JSON für Belege sowie JSON oder XML für Rechnungen in Ägypten; UBL 2.1 XML für beide Rechnungsarten in Saudi-Arabien.
4. **Eine Kette je Gerät.** Jede Kasse führt ihre eigene Referenz auf das vorherige Dokument. Teilen Sie keine Kette zwischen Kassen, und lassen Sie keinen Reset und keine wiederhergestellte Sicherung eine Kette unterbrechen.
5. **Eine Warteschlange, die Internetausfälle übersteht.** Beide Länder lassen für Verbraucherverkäufe 24 Stunden Zeit; die Kasse verkauft also weiter, und die Warteschlange reicht ein oder meldet, sobald die Verbindung zurück ist, mit einer Warnung lange vor Fristende.
6. **Ein Archiv, das sich nicht ändern lässt.** Speichern Sie, was gesendet wurde und was zurückkam, beim Verkauf. Korrekturen laufen über neue Dokumente wie Gutschriften oder ägyptische Rückgabebelege, nie über Änderungen.
7. **Beleglayouts je Land.** Arabisch auf saudischen Rechnungen, der richtige QR-Code für jede Behörde und Nachdrucke aus dem gespeicherten Dokument.

## Die Einführung in beiden Ländern

1. **Pflichten auflisten.** Klären Sie mit Ihrem Steuerberater, welche ETA-Bereiche für Ihre ägyptische Gesellschaft gelten und welche ZATCA-Welle für Ihre saudische.
2. **Den Katalog bereinigen.** Ergänzen Sie die Steuercodes und -behandlungen, die jedes Land braucht, bevor Sie Integrationscode schreiben.
3. **Mit einem Land beginnen.** Meist mit dem, dessen Frist näher liegt. Testen Sie gegen die Testumgebung der Behörde: Die ETA stellt eine Vorproduktionsumgebung bereit, die ZATCA ein Test-Toolkit.
4. **Eine Pilotfiliale betreiben.** Beobachten Sie einige Wochen lang Ablehnungen, Warteschlange und Abgleichsbericht.
5. **Das zweite Modul ergänzen.** Der gemeinsame Kern ist bereits erprobt, die Arbeit betrifft das neue Steuermodul und seine Tests.
6. **Eine verantwortliche Person benennen.** Jemand muss abgelehnte Dokumente, ablaufende Zertifikate und neue Mitteilungen beider Behörden im Blick behalten.

## Was KF Tech Solutions dabei übernimmt

Wir entwickeln individuelle [Kassen-, ERP- und Lagersysteme](/services/business-systems). In Ägypten signiert unsere [ETA-E-Receipt-Integration](/projects/egypt-eta) jeden Beleg, reicht ihn bei der API der ägyptischen Steuerbehörde ein, verarbeitet die Antworten und speichert den Einreichungsstatus beim Verkauf; sie ist im Produktivbetrieb. Für saudische Filialen legen wir das ZATCA-Modul gemeinsam mit Ihnen anhand der veröffentlichten Spezifikationen der ZATCA fest und testen es mit dem Testwerkzeug der ZATCA, bevor eine EGS-Einheit in Ihrem FATOORA-Portalkonto registriert wird. Wir arbeiten mit Unternehmen in Ägypten und am Golf; mehr dazu auf unserer Seite für [Unternehmen in Saudi-Arabien](/saudi-arabia).

## Häufige Fragen

### Kann ich mein ägyptisches Kassensystem unverändert an die ZATCA anbinden?

Nein. Die ZATCA erwartet UBL 2.1 XML von einer registrierten EGS-Einheit mit eigener CSID, die ETA dagegen ihre eigenen JSON- oder XML-Dokumente von einem registrierten Kassengerät. Verkaufsoberfläche und Bestandslogik können bleiben, die Steuerseite braucht jedoch ein neues Modul nach den Regeln der ZATCA.

### Verlangen beide Länder eine Übermittlung in Echtzeit an der Kasse?

Nicht ganz. Saudische Steuerrechnungen, meist an Unternehmen, müssen freigegeben sein, bevor sie den Käufer erreichen. Für Verbraucherverkäufe gilt in beiden Ländern ein Zeitfenster von 24 Stunden: Ägyptische E-Belege müssen innerhalb von 24 Stunden eingereicht und saudische vereinfachte Rechnungen innerhalb von 24 Stunden gemeldet werden.

### Muss mein Kassensystem „ZATCA-zertifiziert“ sein?

Die ZATCA zertifiziert keine Software. Ihr Verzeichnis der Lösungsanbieter ist eine Orientierungsliste, die „nicht als Genehmigung gilt“. Entscheidend ist, ob das System Onboarding, Freigabe, Meldung und die Regeln zum Manipulationsschutz korrekt umsetzt.

### Kann eine Datenbank die Verkäufe beider Länder enthalten?

Ja, sofern jeder Verkauf zu genau einer Filiale und einem Land gehört und die Dokumente, Ketten und Antworten jedes Landes getrennt und unveränderbar gespeichert werden. Wo Ihre Daten gehostet werden, ist eine eigene Entscheidung, die Sie mit Ihren Beratern treffen.

### Was, wenn ein Beleg oder eine Rechnung mit einem Fehler gesendet wurde?

Keines der beiden Systeme erlaubt eine stille Änderung. In Ägypten lässt sich eine E-Rechnung innerhalb der ETA-Frist für den jeweiligen Dokumenttyp stornieren und sonst über eine Gutschrift korrigieren; ein Verkauf an Verbraucher wird mit einem Rückgabebeleg rückgängig gemacht. In Saudi-Arabien darf gespeichertes XML weder gelöscht noch geändert werden; Korrekturen laufen über Gutschriften oder Belastungsanzeigen.

Wenn Sie Filialen in beiden Ländern betreiben oder planen, [schildern Sie uns Ihre Ausgangslage](/contact) oder [buchen Sie ein kostenloses Gespräch](/book). Wir zeigen Ihnen, was Ihr bisheriges Kassensystem behalten kann und was das Modul für jedes Land braucht.

## Quellen

- [ETA: SDK für eInvoicing und eReceipt](https://sdk.invoicing.eta.gov.eg/)
- [ETA: Erstellung der Dokumentsignatur](https://sdk.invoicing.eta.gov.eg/signature-creation/)
- [ETA: API zur Einreichung von Dokumenten](https://sdk.invoicing.eta.gov.eg/einvoicingapi/01-submit-documents/)
- [ETA: API zur Stornierung von Dokumenten](https://sdk.invoicing.eta.gov.eg/einvoicingapi/02-cancel-document/)
- [ETA: API zur Einreichung von Belegen](https://sdk.invoicing.eta.gov.eg/ereceiptapi/02-submit-receipt/)
- [ETA: FAQ zur Belegausstellung](https://sdk.invoicing.eta.gov.eg/receiptissuancefaq/)
- [ETA: SDK-FAQ (Testumgebung)](https://sdk.invoicing.eta.gov.eg/faq/)
- [ZATCA: Was ist E-Invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Einführungsphasen](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: Ankündigung Welle 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Detaillierte Leitlinien zur E-Rechnung](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: XML-Implementierungsstandard](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA: Verzeichnis der Lösungsanbieter](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA: Verstöße und Bußgelder bei der E-Rechnung](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
- [Ahram Online: Sommerzeit in Ägypten](https://english.ahram.org.eg/NewsContentP/1/566547/Egypt/Egypt-to-move-clocks-forward-one-hour-on-Friday-fo.aspx)
