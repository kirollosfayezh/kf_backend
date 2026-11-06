---
title: E-Rechnung im Oman (Fawtara): was Ihr Kassensystem können muss
summary: Der Oman schreibt ab 1. April 2027 XML-E-Rechnungen vor. Wer betroffen ist, wie das Fünf-Ecken-Modell Fawtara funktioniert und was Ihr POS leisten muss.
tags: Fawtara, E-Rechnung, Mehrwertsteuer, Peppol, Kassensystem, Oman
alt: Blau gekachelte Kuppel und Minarett einer Moschee an der Uferpromenade von Muttrah in Maskat, dahinter Berge
caption: Omans Fawtara macht aus jeder Verkaufsrechnung strukturierte Daten, die über einen akkreditierten Anbieter laufen.
stats: 1. Apr. 2027|wird die E-Rechnung Pflicht für Unternehmen mit Jahresumsätzen über 5 Mio. OMR; 1. Okt. 2027|gilt die Pflicht für alle übrigen mehrwertsteuerpflichtigen Unternehmen; 24 Std.|zur Meldung einer B2C-Rechnung, während B2B-Rechnungen in Echtzeit ausgetauscht werden
---

Der Oman führt die elektronische Rechnung für mehrwertsteuerpflichtige Unternehmen verpflichtend ein. Nach dem Beschluss 189/2026 müssen Unternehmen mit Jahresumsätzen über 5 Millionen OMR ihre Steuerrechnungen ab dem 1. April 2027 als XML über ein System ausstellen, das mit einem von der omanischen Steuerbehörde (Oman Tax Authority, OTA) akkreditierten Anbieter verbunden ist, alle übrigen mehrwertsteuerpflichtigen Unternehmen ab dem 1. Oktober 2027. Papierrechnungen, PDFs und als Bild per E-Mail versandte Rechnungen zählen dann nicht mehr. Ihr Kassensystem (POS) oder ERP muss also strukturierte Rechnungsdaten erzeugen und an einen akkreditierten Anbieter übergeben.

Zuletzt geprüft: 6. November 2026

Das Programm heißt Fawtara. Dieser Leitfaden erklärt, was beschlossen wurde, wie das System funktioniert und was Sie an Ihrer heutigen Software prüfen sollten. Er ist eine allgemeine Information und keine Steuer- oder Rechtsberatung: Klären Sie mit der OTA oder Ihrem Steuerberater, wie die Regeln für Ihr Unternehmen gelten.

## Was der Oman beschlossen hat

Der Oman erhebt seit dem 16. April 2021 eine Mehrwertsteuer von 5 %. Bisher durfte eine Mehrwertsteuerrechnung gedruckt, als PDF gespeichert oder per E-Mail versandt werden. Der Beschluss 189/2026, über den der Oman Observer am 9. August 2026 berichtete, ändert das:

- Alle mehrwertsteuerpflichtigen Unternehmen müssen ihre Steuerrechnungen elektronisch ausstellen.
- Rechnungen müssen das genehmigte XML-Format verwenden und in diesem elektronischen Format ausgestellt, übermittelt und aufbewahrt werden.
- Sie müssen über ein elektronisches System ausgestellt werden, das mit einem von der OTA akkreditierten E-Rechnungsanbieter verbunden ist.
- Jede Rechnung muss sicher und überprüfbar sein und alle Angaben enthalten, die das Mehrwertsteuergesetz verlangt.
- Papierrechnungen, PDF-Rechnungen und als Bild per E-Mail versandte Rechnungen erfüllen die Anforderung nicht.

Die OTA hat 100 Unternehmen für eine freiwillige Pilotphase ausgewählt, die Ende August 2026 beginnen sollte. Deloitte nennt rund 150 Teilnehmer. In beiden Fällen ist die Pilotphase freiwillig. Für alle anderen zählen die beiden Pflichttermine unten.

## Wer betroffen ist, und ab wann

| Gruppe | Termin | Was gilt |
|---|---|---|
| Pilotunternehmen | Ende August 2026 | Freiwillige Tests mit der OTA |
| Jahresumsätze über 5 Millionen OMR | 1. April 2027 | XML-Rechnungen über einen von der OTA akkreditierten Anbieter |
| Alle übrigen mehrwertsteuerpflichtigen Unternehmen | 1. Oktober 2027 | Dieselben Anforderungen |

Zwei Punkte verdienen Vorsicht. Erstens nannten einige frühere Sekundärquellen andere Termine, und die eigene Fawtara-FAQ der OTA beschreibt eine dritte Phase für kleine und mittlere Unternehmen, die vor dem Beschluss 189/2026 entstand. Der Beschluss legt zwei Termine fest. Planen Sie mit diesen und prüfen Sie vor einer festen Zeitplanung die Fawtara-Seiten der OTA auf Aktualisierungen. Zweitens: Liegen Ihre Umsätze nahe bei 5 Millionen OMR, fragen Sie die OTA oder Ihren Berater, auf welchen Zeitraum sich der Schwellenwert bezieht. Davon hängt ab, ob Sie sechs Monate mehr Zeit haben oder nicht.

Liegen Sie unter dem Schwellenwert, klingt der 1. Oktober 2027 weit entfernt. Er ist weniger als ein Jahr entfernt, und die Schritte unten brauchen Zeit.

## So funktioniert Fawtara: das Fünf-Ecken-Modell

Die FAQ der OTA beschreibt ein Fünf-Ecken-Modell auf Basis von Peppol, dem internationalen Netzwerk für den Austausch von E-Rechnungen. Dienstleister durchlaufen im Rahmen ihrer Akkreditierung bei der OTA Tests auf dem OpenPeppol-Testsystem. Im Fünf-Ecken-Modell durchläuft eine Rechnung diese Stationen:

1. **Sie als Verkäufer** erstellen die Rechnung in Ihrem Kassensystem, ERP oder Ihrer Buchhaltungssoftware.
2. **Ihr akkreditierter Anbieter** empfängt die Rechnungsdaten aus Ihrem System, prüft sie und sendet sie über das Netzwerk.
3. **Der Anbieter Ihres Käufers** empfängt sie.
4. **Ihr Käufer** erhält die Rechnung in seinem eigenen System.
5. **Die OTA** erhält die steuerlichen Daten, die sie benötigt.

Praktisch bedeutet das: Ihr Kassensystem verbindet sich nicht direkt mit der OTA. Sie wählen einen akkreditierten Anbieter, und Ihr System kommuniziert mit diesem. Laut FAQ der OTA können ERP-Systeme außerdem beibehalten werden, je nach Vereinbarung mit Ihrem akkreditierten Anbieter. Fawtara zwingt Sie also nicht zum Softwarewechsel, aber Ihre Software muss die Rechnungsdaten erzeugen und an Ihren Anbieter senden können.

## B2B, B2C und der QR-Code

Laut FAQ der OTA hängt der Zeitpunkt davon ab, wer der Kunde ist:

- **B2B-Rechnungen** (an andere Unternehmen) werden in Echtzeit ausgetauscht.
- **B2C-Rechnungen** (an Verbraucher) werden innerhalb von 24 Stunden gemeldet.
- **B2C startet zur selben Zeit wie B2B und B2G**, der Einzelhandel erhält also keinen späteren Termin.
- **Ein QR-Code ist auf B2C-Rechnungen Pflicht**, und der Steuerpflichtige erzeugt ihn selbst, in der Praxis also Ihr Kassensystem.
- **Zweisprachige Rechnungen sind erlaubt**, eine Rechnung auf Arabisch und Englisch ist also möglich.
- **Ein Papierbeleg für Verbraucher bleibt möglich**, aber nur zusätzlich zur elektronischen Rechnung, nie an ihrer Stelle.

Für ein Geschäft, ein Restaurant oder eine Apotheke ist das der wichtigste Teil von Fawtara. Verbraucherverkäufe sind von Anfang an einbezogen. Ein Kassensystem, das heute einen einfachen Beleg druckt, muss künftig für jeden Verkauf einen E-Rechnungsdatensatz und einen QR-Code erzeugen und ihn innerhalb von 24 Stunden an Ihren Anbieter melden.

## Was Ihr Kassensystem oder ERP können muss

Die genauen Regeln stammen aus den technischen Spezifikationen der OTA und von dem Anbieter, den Sie wählen. Die Arbeit läuft aber in fast jedem Unternehmen auf dieselben Fähigkeiten hinaus. Nutzen Sie diese Liste im Gespräch mit Ihrem heutigen Softwarelieferanten:

- **Strukturierte Rechnungsdaten.** Jede Rechnung muss die vom Mehrwertsteuergesetz verlangten Felder enthalten, gespeichert als Daten und nicht als Text auf einem Drucklayout: Angaben zu Verkäufer und Käufer, Steuernummern, wo erforderlich, Artikelpositionen, Steuersätze und -beträge sowie Summen.
- **XML im genehmigten Format,** oder ein sauberer Export, den Ihr Anbieter umwandelt. Fragen Sie den Anbieter, was er erwartet.
- **Eine Verbindung zu Ihrem Anbieter.** Meist eine API: Das Kassensystem sendet die Rechnung und erhält eine Antwort, ob sie angenommen wurde.
- **Ein Status für jede Rechnung.** Zu jedem Verkauf gehört ein Vermerk, ob die Rechnung gesendet, angenommen oder abgelehnt wurde, und warum. Ohne ihn können Sie nicht nachweisen, dass eine Rechnung gemeldet wurde.
- **Wiederholung und Offline-Betrieb.** Fällt das Internet aus, sollte das Geschäft weiter verkaufen und die gesammelten B2C-Rechnungen automatisch senden, sobald die Verbindung zurück ist, deutlich innerhalb der 24 Stunden. B2B-Rechnungen werden in Echtzeit ausgetauscht, planen Sie also dort, wo Sie sie ausstellen, eine stabile Verbindung ein.
- **Ein QR-Code auf B2C-Belegen,** vom System erzeugt und gedruckt oder dem Kunden angezeigt.
- **Rücknahmen und Korrekturen.** Fragen Sie, wie Ihr System und Ihr Anbieter Erstattungen oder korrigierte Rechnungen abbilden. Laut FAQ der OTA wird eine ausgestellte Rechnung durch eine elektronische Gutschrift oder Belastungsanzeige angepasst.
- **Elektronische Aufzeichnungen.** Rechnungen müssen im genehmigten elektronischen Format aufbewahrt werden, nicht nur als Ausdruck.
- **Arabischer und englischer Text** auf der Rechnung, wenn Sie zweisprachige Rechnungen wünschen.

Nutzen Ihre Filialen unterschiedliche Systeme oder werden manche Rechnungen noch in eine Tabelle getippt, braucht jeder dieser Wege eine Anbindung an den Anbieter. Oft ist das der Moment, in dem ein Unternehmen Verkauf, Lager und Buchhaltung in einem System zusammenführt. Unser Artikel darüber, [ob ein kleines Unternehmen wirklich ein ERP braucht](/blog/erp-for-small-business-egypt), wurde für Ägypten geschrieben, doch die Fragen darin stellen sich in Maskat genauso.

## Ein Plan bis zu Ihrem Termin

Rechnen Sie von Ihrem Termin zurück, dem 1. April 2027 oder dem 1. Oktober 2027:

1. **Erfassen Sie jede Stelle, an der Rechnungen entstehen:** das Kassensystem jeder Filiale, die Buchhaltung, den Onlineshop und manuelle Rechnungen.
2. **Fragen Sie jeden Softwarelieferanten schriftlich,** ob er Fawtara unterstützen wird, über welchen akkreditierten Anbieter und bis wann.
3. **Wählen Sie einen von der OTA akkreditierten Anbieter** und vergleichen Sie die Preise. Laut FAQ der OTA legt jeder Anbieter seine Gebühren selbst fest, pro Rechnung, als Abonnement oder anders, und die OTA selbst erhebt keine Gebühren.
4. **Bereinigen Sie Ihre Stammdaten:** Steuernummern der Kunden, Artikelbezeichnungen, Steuerkategorien und Filialangaben.
5. **Bauen oder aktivieren Sie die Anbindung** und testen Sie sie in der Testumgebung des Anbieters, einschließlich Rücknahmen, stornierter Verkäufe und eines Internetausfalls.
6. **Schulen Sie Kassierer und Buchhalter** darin, was sich an der Kasse und beim Monatsabschluss ändert.
7. **Gehen Sie früh live,** mit Zeit, abgelehnte Rechnungen vor Ihrem Termin zu korrigieren.

Kann ein Lieferant Schritt 2 nicht klar beantworten, ist das die Antwort. Ein System, das nicht mehr gepflegt wird, bekommt keine E-Rechnungsanbindung von selbst, und es in den letzten zwei Monaten zu ersetzen, ist weit schwieriger als jetzt.

## Was KF Tech Solutions dazu beiträgt

KF Tech Solutions entwickelt Kassensysteme, ERP und andere [Geschäftssysteme](/services/business-systems), und wir arbeiten mit Unternehmen in Ägypten und am Golf ([unsere Golf-Seite](/gulf)). Die nächstliegende Arbeit, die wir ausgeliefert haben, ist das ägyptische Gegenstück: eine Anbindung eines Kassensystems an das E-Beleg-System der ägyptischen Steuerbehörde, die jeden Beleg übermittelt und seinen Status beim Verkauf speichert ([was eine solche Anbindung umfasst](/blog/eta-e-invoicing-pos-integration)). Wir sind kein von der OTA akkreditierter Anbieter, und das Modell von Fawtara ist anders. Für ein omanisches Unternehmen prüfen wir zuerst, was Sie heute einsetzen, und sagen Ihnen offen, ob es voraussichtlich liefern kann, was Fawtara verlangt. Ist Ihr System eine Individualentwicklung, erstellen wir Ihnen ein Angebot für die nötigen Änderungen.

## Häufige Fragen

### Ist die E-Rechnung im Oman Pflicht?

Ja, für mehrwertsteuerpflichtige Unternehmen nach dem Beschluss 189/2026: ab dem 1. April 2027 für Unternehmen mit Jahresumsätzen über 5 Millionen OMR und ab dem 1. Oktober 2027 für alle übrigen. Prüfen Sie vor Ihrer Planung die Fawtara-Seiten der OTA auf Änderungen.

### Muss ich mein Kassensystem oder ERP ersetzen?

Nicht unbedingt. Laut FAQ der OTA können ERP-Systeme beibehalten werden, je nach Vereinbarung mit Ihrem akkreditierten Anbieter. Ihr System muss aber die erforderlichen Rechnungsdaten erzeugen und sich mit einem akkreditierten Anbieter verbinden. Fragen Sie Ihren Lieferanten, ob und wann es das kann.

### Reicht eine PDF-Rechnung noch aus?

Nein. Nach den Berichten erfüllen Papierrechnungen, PDFs und als Bild per E-Mail versandte Rechnungen die Anforderung nicht. Rechnungen müssen im genehmigten XML-Format ausgestellt werden.

### Gilt Fawtara auch für Verkäufe an Verbraucher?

Ja. Laut FAQ der OTA starten B2C-Rechnungen zur selben Zeit wie B2B, müssen innerhalb von 24 Stunden gemeldet werden und einen vom Steuerpflichtigen erzeugten QR-Code tragen.

### Dürfen meine Rechnungen arabisch und englisch sein?

Ja. Laut FAQ der OTA sind zweisprachige Rechnungen erlaubt.

### Kann ich mein System direkt mit der OTA verbinden?

Fawtara läuft über von der OTA akkreditierte Dienstleister. Ihr System sendet jede Rechnung an Ihren Anbieter, und der Anbieter übernimmt den Austausch über das Peppol-Netzwerk. Laut FAQ der OTA kann sich ein Unternehmen, das die Kriterien für Dienstleister erfüllt und die Tests der OTA besteht, auch selbst akkreditieren lassen und als eigener Anbieter auftreten.

Sie sind unsicher, ob Ihr heutiges System rechtzeitig bereit sein wird? [Buchen Sie ein kostenloses Gespräch](/book) und erzählen Sie uns, was Sie einsetzen, oder [schreiben Sie uns](/contact).

## Quellen

- [Oman Observer: Decision issued on tax invoices in electronic format, 9. August 2026](https://www.omanobserver.om/article/1194193/business/decision-issued-on-tax-invoices-in-electronic-format)
- [Omanische Steuerbehörde: Fawtara-FAQ, aktualisiert am 23. April 2026](https://tms.taxoman.gov.om/portal/documents/d/taxportal/faq-s)
- [Deloitte: Oman e-invoicing (Fawtara)](https://www.deloitte.com/middle-east/en/services/tax/perspectives/oman-e-invoicing-fawtara.html)
- [PwC: Oman, other taxes (Mehrwertsteuer)](https://taxsummaries.pwc.com/oman/corporate/other-taxes)
