---
title: PINT AE und das Fünf-Ecken-Modell: ein Leitfaden für Entwickler
summary: Wie E-Rechnungen in den VAE als PINT-AE-Daten vom ERP zum ASP gelangen: Dokumentcodes, TIN und Schema 0235, Gutschriften und Tests.
tags: PINT AE, Peppol, E-Invoicing, Fünf-Ecken-Modell, ERP-Integration, Entwickler, VAE
alt: Eine Dattelpalme im Vordergrund, dahinter ein schlanker Wolkenkratzer in Dubai in weichem Licht
caption: Im VAE-Modell verlässt eine Rechnung Ihr ERP, läuft über Ihren Anbieter und erreicht den Anbieter des Käufers vor dem Käufer.
stats: 5|Ecken im E-Invoicing-Modell der VAE; 0235|Peppol-Schema-ID für Kennungen in den VAE; 381|Dokumenttypcode für eine steuerliche Gutschrift in den VAE
---

Im E-Invoicing-System der VAE erzeugt Ihr ERP- oder Kassensystem (Ecke 1) jede B2B- und B2G-Rechnung als PINT-AE-Daten und sendet sie an Ihren akkreditierten Dienstleister, den Accredited Service Provider oder ASP (Ecke 2). Der ASP prüft die Daten, leitet sie an den ASP des Käufers weiter (Ecke 3), der sie dem Käufer zustellt (Ecke 4), und meldet die Steuerdaten an die Steuerseite (Ecke 5). Ihr Team kommuniziert nicht direkt mit der Steuerbehörde: Die Arbeit besteht darin, vollständige und korrekte PINT-AE-Daten zu erzeugen, sie an die API Ihres ASP zu senden, die Antworten zu verarbeiten und Rechnungen Ihrer Lieferanten auf demselben Weg zu empfangen.

Zuletzt geprüft: 6. November 2026

Dies sind allgemeine Informationen für Entwickler, keine Steuerberatung: Das letzte Wort zur Behandlung jeder Transaktion haben Ihr Steuerberater und Ihr ASP.

## Die fünf Ecken aus Sicht Ihres Systems

Das Finanzministerium nennt das Modell „Decentralized Continuous Transaction Control and Exchange“. Ihr Code spricht nur mit einer der fünf Parteien.

| Ecke | Wer | Was Ihr System tut |
|---|---|---|
| 1 | Der Lieferant: Sie, wenn Sie verkaufen | Erstellt die Rechnungsdaten und sendet sie an Ihren ASP |
| 2 | Ihr ASP | Empfängt Ihre Daten über seine API und liefert ein Ergebnis zurück |
| 3 | Der ASP des Käufers | Nichts direkt: Ihr ASP erreicht ihn |
| 4 | Der Käufer | Empfängt die Rechnung über seinen eigenen ASP |
| 5 | Die Steuerseite | Nichts direkt: Ihr ASP meldet an sie |

- **Beide Seiten brauchen einen ASP.** Der Anwendungsbereich umfasst alle B2B- und B2G-Transaktionen, und sowohl der Aussteller als auch der Empfänger müssen einen ASP beauftragen. Wenn Sie einkaufen, ist Ihr ERP die Ecke 4 und muss Rechnungen von Ihrem ASP annehmen.
- **Ein PDF ist keine E-Rechnung.** Das Ministerium stellt klar, dass PDFs, Word-Dateien, Scans und E-Mails nicht zählen.
- **Die Rolle von Peppol.** Das Ministerium nennt OpenPeppol für den grenzüberschreitenden Austausch, und PINT AE ist als Peppol-Spezifikation veröffentlicht.

Die Liste des Ministeriums zeigte bei unserer Prüfung am 6. November 2026 86 akkreditierte ASPs. Jeder hat seine eigene API, daher stammen Authentifizierung und Endpunkte aus der Dokumentation Ihres ASP, während das Datenformat für alle gleich ist.

## Was PINT AE ist

PINT AE ist die VAE-Version des internationalen Rechnungsmodells von Peppol (PINT) und wird auf der Dokumentationsseite von Peppol veröffentlicht. Die aktuelle Version 1.0.4 besteht aus drei Teilen:

- **PINT AE Billing** für Steuerrechnungen und Gutschriften.
- **PINT AE Self-Billing** für Gutschriftsverfahren (Self-Billing) mit Rechnungen und Gutschriften, im selben Datenmodell.
- **Das UAE Tax Data Document (TDD)**, mit dem laut Spezifikation sowohl Aussteller als auch Empfänger eine Rechnung an die Steuerbehörde melden.

Die Syntax ist UBL. Eine Rechnung ist ein UBL-Dokument vom Typ Invoice, eine Gutschrift ein Dokument vom Typ CreditNote, und die Spezifikation nennt für jeden Geschäftsbegriff das genaue Element. Ihre Rechnung gibt die Spezifikation in `cbc:CustomizationID` mit dem Wert `urn:peppol:pint:billing-1@ae-1` an.

Jedes Feld hat einen Code. Codes mit IBT stammen aus dem internationalen Modell, Codes mit BTAE sind Ergänzungen für die VAE. Führen Sie diese Codes in Ihrer Mapping-Tabelle neben Ihren eigenen Datenbankspalten.

## Dokumenttypen, Transaktionskennzeichen und Gutschriften

Der Dokumenttypcode teilt dem Empfänger und der Steuerseite mit, um welche Art von Dokument es sich handelt. PINT AE verwendet diese Codes:

| Dokument | Code | UBL-Wurzel |
|---|---|---|
| Steuerrechnung | 380 | Invoice |
| Steuerliche Gutschrift | 381 | CreditNote |
| Self-Billing-Rechnung | 389 | Invoice |
| Self-Billing-Gutschrift | 261 | CreditNote |
| Rechnung außerhalb des Steuerbereichs | 480 | Invoice |
| Gutschrift zu einer Transaktion außerhalb des Steuerbereichs | 81 | CreditNote |

### Die Transaktionskennzeichen

Die Umsatzsteuer der VAE kennt einige besondere Transaktionsarten. PINT AE erfasst sie in `cbc:ProfileExecutionID` als Folge von acht Nullen und Einsen. Jede Stelle ist ein Kennzeichen, in dieser Reihenfolge:

1. Freihandelszone
2. Fiktive Lieferung (Deemed Supply)
3. Differenzbesteuerung (Profit Margin Scheme)
4. Sammelrechnung
5. Dauerleistung
6. Abrechnung über offengelegten Vertreter
7. Lieferung über E-Commerce
8. Export

Eine normale Steuerrechnung ohne besondere Art trägt `00000000`. Ein Export trägt `00000001`, eine Lieferung mit Bezug zu einer Freihandelszone `10000000`. Speichern Sie jedes Kennzeichen als Ja/Nein-Feld am Verkauf und bilden Sie die Zeichenfolge beim Export.

### Gutschriften, nie negative Rechnungen

Laut Spezifikation kann eine Rechnung in den VAE nur durch eine Gutschrift storniert werden. Unternehmen dürfen keine negativen Rechnungen ausstellen. Wenn Ihr System Retouren als negativen Verkauf bucht, brauchen Sie vor dem Start ein eigenes Gutschriftsdokument.

Jede Gutschrift braucht einen Grundcode in BTAE-03 und einen Verweis auf die ursprüngliche Rechnung. Ausnahme ist ein Mengenrabatt: Der Grundcode lautet `VD`, und der Verweis auf die Originalrechnung kann entfallen. Stellen Sie sicher, dass jede Retoure in Ihrem System mit dem Verkauf verknüpft ist, den sie storniert, denn diese Verknüpfung wird zum Verweis in der Gutschrift.

## Kennungen und vordefinierte Empfänger

- **TRN des Verkäufers.** Die Umsatzsteuer-Registrierungsnummer des Verkäufers gehört in IBT-031, mit dem Steuerschema `VAT`.
- **TIN des Verkäufers.** Die Steueridentifikationsnummer des Verkäufers gehört in IBT-032.
- **Elektronische Adresse.** In den VAE ist die elektronische Adresse (IBT-034) die TIN, und die Schema-ID lautet `0235`. Darüber findet das Netz den richtigen ASP.
- **TRN des Käufers.** Sie ist erforderlich, wenn der Käufer in den VAE umsatzsteuerlich registriert ist.
- **Rechtliche Registrierung.** Die Registrierungsart des Verkäufers wird angegeben, etwa eine Gewerbelizenz, und bei einer Gewerbelizenz ist die ausstellende Behörde anzugeben (BTAE-12).

Ihre Kundenstammdaten brauchen daher für jeden registrierten Geschäftskunden eine TRN und eine TIN, geprüft vor der ersten Rechnung und nicht erst bei einer Ablehnung.

Manche Rechnungen haben keinen Käufer im Netz. Für drei Fälle legt die Spezifikation einen festen Empfänger fest, ebenfalls unter Schema `0235`. Das Dokument wird dann an Ecke 5 gemeldet und nicht mit Ecke 3 ausgetauscht:

| Fall | Teilnehmer-ID |
|---|---|
| Fiktive Lieferung (zweites Kennzeichen gesetzt) | 9900000097 |
| Käufer unterliegt nicht dem E-Invoicing der VAE | 9900000098 |
| Export an einen Empfänger ohne Peppol-Registrierung (letztes Kennzeichen gesetzt) | 9900000099 |

Wenn Sie in einer anderen Währung als Dirham fakturieren, weist die Spezifikation die Umsatzsteuer zusätzlich in der steuerlichen Buchungswährung aus. Ihr Beispiel fakturiert in Euro, setzt `cbc:TaxCurrencyCode` auf AED und enthält eine zweite Steuersumme in AED. Speichern Sie den verwendeten Wechselkurs mit der Rechnung.

## Der Datenfluss vom ERP zum ASP

Eine zuverlässige Integration hat unabhängig vom Technologie-Stack dieselbe Form und folgt dem Muster aus [Ihre bestehenden Systeme verbinden](/blog/api-integration-connecting-business-systems).

1. **Daten zuordnen.** Erstellen Sie eine Tabelle, die jeden PINT-AE-Geschäftsbegriff einem Feld in Ihrer Datenbank zuordnet, mit einem Vermerk für alles, was fehlt.
2. **UBL erzeugen**, und zwar nur aus gebuchten Rechnungen. Eine gesendete Rechnung darf nicht mehr bearbeitet werden. Korrekturen laufen über eine Gutschrift.
3. **Versand in eine Warteschlange stellen.** Schreiben Sie die Rechnung in eine Outbox-Tabelle und senden Sie sie aus einem Hintergrundprozess, damit ein langsamer oder nicht erreichbarer ASP nie einen Verkauf oder den Monatsabschluss blockiert.
4. **Jede Antwort speichern.** Halten Sie die Kennung des ASP, den Status und etwaige Fehlercodes an der Rechnung fest und zeigen Sie sie dem Nutzer an.
5. **Mit Bedacht wiederholen.** Wiederholen Sie bei Netzfehlern automatisch, aber nutzen Sie Ihre eigene Rechnungsnummer als Schlüssel, damit dieselbe Rechnung nie doppelt gesendet wird.
6. **Bei Ablehnungen alarmieren.** Eine abgelehnte Rechnung braucht einen Menschen, der die Daten korrigiert. Leiten Sie sie an eine Liste weiter, die täglich geprüft wird.
7. **Eingangsrechnungen empfangen.** Rufen Sie Lieferantenrechnungen von Ihrem ASP ab oder nehmen Sie sie an, und gleichen Sie sie mit Bestellungen und Wareneingängen ab.

Die Ministerialentscheidung 197/2026, in Kraft seit 1. Oktober 2026, hat die E-Invoicing-Pflicht zur Speicherung der Rechnungsdaten in den VAE aufgehoben. Diese Regeln binden Ihre Integration also nicht mehr an ein Hosting in den VAE; Branchenregeln, etwa für Zahlungsdienstleister oder Gesundheitsdaten, können aber weiterhin gelten. Zudem sind Transaktionen innerhalb einer Steuergruppe für 24 Monate ab 1. Januar 2027 ausgenommen. Gesendete und empfangene Rechnungen samt Antworten sollten Sie dennoch in Ihrem eigenen System aufbewahren, damit sich jeder Status nachvollziehen lässt.

## Tests mit Ihrem ASP und Planung der Fristen

Fordern Sie von Ihrem ASP eine Testumgebung und die erwarteten Beispieldateien an, bevor Sie den Generator schreiben. Testen Sie dann in Zyklen:

- **Format.** Senden Sie eine normale Rechnung und beheben Sie jeden Validierungsfehler.
- **Abdeckung.** Senden Sie ein Dokument jedes Typs, den Sie tatsächlich ausstellen: Gutschriften mit und ohne Originalverweis, einen Verkauf in einer Freihandelszone, einen Export, eine Rechnung in Fremdwährung.
- **Fehlerfälle.** Trennen Sie das Netz, senden Sie Duplikate und falsche TRNs, und prüfen Sie, ob Ihr System jedes Ergebnis festhält.
- **Eingang.** Lassen Sie sich vom ASP Testrechnungen zustellen und prüfen Sie, ob sie im richtigen Buch landen.
- **Generalprobe.** Lassen Sie einen vollen Tag echter Transaktionen durch die Testumgebung laufen, bevor Sie umstellen.

Laut Ministerium funktioniert das Fünf-Ecken-Modell im Pilotbetrieb bereits. Das Onboarding besteht darin, einen ASP zu wählen, sich bei EmaraTax zu registrieren und dann die Verbindung herzustellen.

| Gruppe | ASP beauftragen bis | Start |
|---|---|---|
| Umsatz ab 50 Mio. AED | 30. Oktober 2026 | 1. Januar 2027 |
| Umsatz unter 50 Mio. AED | 31. März 2027 | 1. Juli 2027 |
| Behörden | 31. März 2027 | 1. Oktober 2027 |

Planen Sie vor Ihrem Termin Zeit für mindestens zwei vollständige Testzyklen ein. Die geschäftliche Seite dieser Fristen erklärt unser [Leitfaden zu den E-Invoicing-Fristen in den VAE für KMU](/blog/uae-e-invoicing-deadlines-smes). Nach der Kabinettsentscheidung 173/2026, bekanntgegeben am 30. Oktober 2026, kann für jede nicht ausgestellte oder nicht übermittelte E-Rechnung oder Gutschrift eine Geldbuße von 100 AED anfallen, begrenzt auf 5.000 AED pro Monat. Für die fehlende Beauftragung eines ASP gilt eine eigene Geldbuße.

## Was KF Tech Solutions hier übernimmt

KF Tech Solutions ist kein ASP und steht nicht auf der Liste des Ministeriums. Wir entwickeln und betreuen individuelle Geschäftssysteme und die APIs zwischen ihnen. Hier heißt das: Ihre ERP- oder Kassendaten auf PINT AE abbilden, Outbox, Wiederholungen und Fehleransichten bauen und alles an den ASP Ihrer Wahl anbinden. Wir haben bereits ein Kassensystem an Ägyptens E-Beleg-System angebunden, beschrieben in [Ihr Kassensystem mit Ägyptens ETA-E-Invoicing verbinden](/blog/eta-e-invoicing-pos-integration). Ist Ihr System eine Individualentwicklung, lesen Sie auch [E-Invoicing in den VAE für individuelle Kassen- und ERP-Systeme](/blog/uae-e-invoicing-custom-pos-erp). Wir arbeiten mit Unternehmen in Ägypten und am Golf. Mehr dazu auf unserer Seite zu [API- und Backend-Entwicklung](/services/api-and-backend) und unserer [VAE-Seite](/uae).

## Häufige Fragen

### Brauchen wir einen eigenen Peppol-Access-Point?

Nein. Im Modell der VAE senden Sie Ihre Daten an Ihren ASP, und der ASP übernimmt den Austausch mit dem ASP des Käufers und die Meldung. Sie brauchen eine API-Integration mit einem akkreditierten Anbieter.

### Können wir weiterhin PDF-Rechnungen versenden?

Sie können ein PDF als lesbare Kopie senden, aber es ist nicht die E-Rechnung. Das Ministerium stellt klar, dass PDFs, Word-Dateien, Scans und E-Mails keine E-Rechnungen sind. Die Rechnung sind die strukturierten Daten, die über Ihren ASP gesendet werden.

### Unser ERP bucht Retouren als negative Rechnungen. Ist das ein Problem?

Ja. PINT AE lässt in den VAE keine negativen Rechnungen zu. Eine Stornierung muss eine Gutschrift sein (Code 381, bzw. 81 bei Transaktionen außerhalb des Steuerbereichs) mit Grundcode und, außer bei Mengenrabatten, einem Verweis auf die Originalrechnung.

### Über welche Kennung findet das Netz unseren Käufer?

Über die TIN mit der Schema-ID `0235`. Die TRN gehört in das Feld für die Umsatzsteuer-Kennung. Für fiktive Lieferungen, Exporte an Empfänger ohne Peppol-Registrierung und Käufer außerhalb des E-Invoicing der VAE gelten feste Teilnehmer-IDs.

### Müssen die Rechnungsdaten in den VAE gespeichert werden?

Nicht mehr. Die Ministerialentscheidung 197/2026, in Kraft seit 1. Oktober 2026, hat diese Pflicht aufgehoben. Führen Sie trotzdem vollständige Aufzeichnungen in Ihrem eigenen System und prüfen Sie, ob für Ihre Branche andere Regeln gelten.

Soll ein Entwickler prüfen, was Ihr System vor Ihrem Starttermin braucht? [Buchen Sie ein kostenloses Gespräch](/book) oder [senden Sie uns Ihre Angaben](/contact).

## Quellen

- [Finanzministerium der VAE: eInvoicing](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
- [Finanzministerium: Entscheidungen zu Anwendungsbereich und Fristen (29. September 2025)](https://mof.gov.ae/en/news/ministry-of-finance-announces-the-issuance-of-two-ministerial-decisions-on-the-scope-of-obligations-and-the-timelines-for-implementing-the-electronic-invoicing-system-2/)
- [Ministerialentscheidung Nr. 244 von 2025](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Finanzministerium: Änderungen und Fristverlängerung](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [Finanzministerium: Änderungen durch MD 197/2026](https://mof.gov.ae/en/news/ministry-of-finance-amends-electronic-invoicing-regulations-to-ease-the-burden-on-businesses/)
- [Finanzministerium: aktualisierte Geldbußen](https://mof.gov.ae/en/news/mof-announces-updated-administrative-penalties-related-to-the-uae-einvoicing-system-to-enhance-clarity-and-support-business-compliance/)
- [Finanzministerium: akkreditierte Dienstleister](https://mof.gov.ae/en/about-us/initiatives/einvoicing/einvoicing-accredited-service-providers-asps/)
- [Finanzministerium: Pilotbetrieb und Onboarding](https://mof.gov.ae/en/news/ministry-of-finance-hosts-awareness-event-in-ras-al-khaimah-on-latest-einvoicing-updates/)
- [Peppol: Spezifikationen für elektronische Dokumente in den VAE](https://docs.peppol.eu/poac/ae/)
- [Peppol: Spezifikation PINT AE Billing](https://docs.peppol.eu/poac/ae/pint-ae/bis/)
