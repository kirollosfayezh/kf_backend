---
title: ZATCA-API-Anbindung: eine Checkliste für Entwicklerteams
summary: Onboarding und CSID, UBL-2.1-XML, Clearance oder Meldung binnen 24 Stunden, QR-Code und Hash-Kette: was Ihr Team für FATOORA bauen muss.
tags: ZATCA, FATOORA, API-Anbindung, E-Rechnung, UBL 2.1, Entwickler, Saudi-Arabien
alt: Riad von oben, mit Bürotürmen entlang einer breiten Allee zwischen niedrig bebauten Vierteln
caption: In Phase 2 wird jede Rechnung gestempelt, mit der vorherigen verkettet und als XML per API an die ZATCA übermittelt.
stats: 128 Bit|Länge der UUID auf jeder Rechnung; 9|TLV-Tags im QR-Code der Phase 2, Base64-kodiert; 24 Std.|Frist für die Meldung jeder vereinfachten Rechnung an FATOORA
---

Die Anbindung an die FATOORA-Plattform der ZATCA bedeutet: Jedes Gerät oder jeder Server, der Rechnungen ausstellt, wird als „E-Invoice Generation Solution“ (EGS) mit eigenem Cryptographic Stamp Identifier (CSID) eingerichtet, jede Rechnung entsteht als UBL-2.1-XML, und dieses XML geht über die API der ZATCA. Steuerrechnungen durchlaufen eine Echtzeit-Freigabe (Clearance), bevor der Käufer sie erhält, während vereinfachte Rechnungen von Ihrem eigenen System gestempelt und innerhalb von 24 Stunden gemeldet werden. Diese Checkliste führt ein internes Team durch jeden Baustein, gleich in welcher Sprache Sie entwickeln.

Zuletzt geprüft: 6. November 2026

Dies sind allgemeine technische Informationen, keine Steuer- oder Rechtsberatung. Maßgeblich sind die Dokumente der ZATCA, die unter „Quellen“ aufgeführt sind. Wo diese Seite und die ZATCA voneinander abweichen, gilt die ZATCA.

## Bevor Sie Code schreiben: Umfang und Referenzdokumente

Phase 1 (Erstellung) gilt seit dem 4. Dezember 2021 für alle Steuerpflichtigen außer Gebietsfremden. Phase 2 (Integration) begann am 1. Januar 2023 und wird in Wellen eingeführt, wobei die ZATCA jede Welle mindestens sechs Monate vorher ankündigt. Welle 25 betrifft Unternehmen mit umsatzsteuerpflichtigen Erlösen über 187.500 SAR in einem beliebigen Jahr von 2022 bis 2025; sie müssen bis zum 1. Februar 2027 an FATOORA angebunden sein. Die geschäftliche Seite dieser Frist erklärt unser [Leitfaden zu Welle 25](/blog/zatca-wave-25-e-invoicing).

Klären Sie vor dem ersten Commit vier Punkte:

- **Welche Belege Sie ausstellen.** Steuerrechnungen (meist B2B und B2G), vereinfachte Rechnungen (meist B2C) sowie die zugehörigen Gutschriften und Belastungsanzeigen.
- **Was eine EGS-Einheit ist.** Jede Einheit wird einzeln eingerichtet und führt ihre eigene Rechnungskette. Entscheiden Sie früh, ob eine Einheit eine Kasse, ein Filialserver oder ein zentraler Dienst ist.
- **Wer die Rechnungen ausstellt.** Die Richtlinie der ZATCA gilt für in Saudi-Arabien ansässige Steuerpflichtige sowie für Dritte, die in ihrem Namen Rechnungen ausstellen.
- **Ihre Referenzdokumente.** Lesen Sie die E-Invoicing Detailed Guidelines und den XML Implementation Standard der ZATCA, bevor Sie auch nur eine Tabelle entwerfen.

## Onboarding jeder EGS-Einheit und Verwaltung des CSID

Rechnungen müssen von einer eingerichteten EGS stammen. Jede Einheit wird über das FATOORA-Portal eingerichtet, das ihren CSID ausstellt und ihn später erneuern oder widerrufen kann. Daraus ergeben sich drei Ereignisse im Lebenszyklus, nicht eines:

- **Ausstellung.** Bewahren Sie den CSID und sein Schlüsselmaterial in einem Secrets-Store auf, niemals im Quellcode, in einer Konfigurationsdatei im Repository oder in der Kassendatenbank.
- **Erneuerung.** Behandeln Sie die Erneuerung als geplanten Job mit Warnmeldungen, damit keine Einheit an einem vollen Tag aufhört zu fakturieren.
- **Widerruf.** Geht ein Gerät verloren, wird es ersetzt oder stillgelegt, widerrufen Sie seinen CSID und stellen Sie sicher, dass die Software von dieser Einheit sofort nichts mehr ausstellt.
- **Übersicht.** Führen Sie ein Verzeichnis aller EGS-Einheiten mit CSID-Status und letzter ausgestellter Rechnung, und zeigen Sie es im Admin-Bereich an.

Der erste Punkt ist übliche Sicherheitspraxis und keine ZATCA-Vorschrift, aber ein abgeflossener Stempelschlüssel lässt sich einer Steuerbehörde schwer erklären.

## Das Rechnungs-XML aufbauen

Alles, was an die ZATCA geht, muss XML sein und über eine API gesendet werden. Das XML folgt der UBL-2.1-Struktur mit Validierungsregeln auf Basis der europäischen Norm EN 16931, wie sie der XML Implementation Standard der ZATCA festlegt. Die Rechnung selbst kann das XML sein oder eine PDF/A-3-Datei mit eingebettetem XML.

- **Aus Daten erzeugen, nicht aus einem Drucklayout.** Bauen Sie das XML aus dem Verkaufsdatensatz und erzeugen Sie die lesbare Rechnung aus denselben Daten, damit beide nicht auseinanderlaufen.
- **Arabisch auf der lesbaren Fassung.** Die menschenlesbare Rechnung muss auf Arabisch sein, weitere Sprachen dürfen hinzukommen. Arabische und hindische Ziffern gelten beide als arabisch.
- **Vor dem Senden validieren.** Prüfen Sie während der Entwicklung jeden Belegtyp mit dem Test-Toolkit der ZATCA und halten Sie für jeden Typ automatisierte Tests im Build.
- **Das exakte Dokument aufbewahren.** Speichern Sie das XML genau so, wie es gestempelt und gesendet wurde. Wird es später neu erzeugt oder umformatiert, kann sich sein Hash ändern.

## Clearance und Meldung: zwei API-Abläufe

Phase 2 kennt zwei Abläufe, und Ihr Code muss jeden Beleg in den richtigen leiten.

| | Steuerrechnung (meist B2B/B2G) | Vereinfachte Rechnung (meist B2C) |
|---|---|---|
| Wer stempelt | Die ZATCA bei der Clearance | Ihre EGS mit ihrem CSID |
| Wer den QR-Code hinzufügt | Die ZATCA | Ihre EGS (9 Tags, TLV, Base64) |
| Wann die ZATCA sie erhält | Bevor der Käufer sie bekommt | Innerhalb von 24 Stunden nach Ausstellung |
| Was der Käufer erhält | Das freigegebene XML, das die ZATCA zurücksendet | Sofort eine gedruckte Fassung oder, wenn beide Seiten zustimmen, eine elektronische |
| Wenn die ZATCA nicht erreichbar ist | Weiter versuchen; bei einem Ausfall erlauben die ZATCA-Richtlinien, die nicht freigegebene Rechnung zu übergeben, danach die freigegebene | In die Warteschlange stellen, weiter versuchen und die ZATCA benachrichtigen, wenn die 24 Stunden verstreichen |

Bei einer Steuerrechnung ist das freigegebene XML, das zurückkommt, die Rechnung: Speichern Sie es und geben Sie dem Käufer diese Fassung, nicht die eingereichte. Dieselbe Clearance gilt für Gutschriften und Belastungsanzeigen zu Steuerrechnungen.

Rund um die beiden Aufrufe sollten Sie Folgendes bauen:

- **Einen Router**, der Clearance oder Meldung nach dem Belegtyp wählt, nie nach einer Auswahl, die ein Kassierer am Bildschirm trifft.
- **Wiederholungen, die gefahrlos mehrfach laufen dürfen**, damit aus einer Rechnung mit einer UUID nie zwei Rechnungen in Ihren Daten werden.
- **Einen Status für jeden Beleg** (erstellt, gesendet, freigegeben oder gemeldet, abgelehnt), den die Buchhaltung ohne Rückfrage bei den Entwicklern sieht.
- **Einen Weg für abgelehnte Belege.** Rechnungen können nicht storniert werden: Beheben Sie den Fehler und reichen Sie einen neuen Beleg mit eigenem Zählerwert und Hash ein, ohne gespeichertes XML zu ändern.

## Stempel, QR-Code und Manipulationsschutz

Mehrere Kontrollen der ZATCA liegen in Ihrem Datenmodell, nicht im API-Aufruf:

- **UUID.** Jede Rechnung trägt eine 128-Bit-UUID. Erzeugen Sie sie einmal beim Anlegen der Rechnung und bei einer Wiederholung nie neu.
- **Hash der Vorrechnung.** Jede Rechnung enthält den Hash der vorherigen, sodass pro EGS-Einheit eine Kette entsteht. Schreiben zwei Prozesse gleichzeitig in dieselbe Kette, bricht sie. Legen Sie Rechnungen pro Einheit deshalb nacheinander an.
- **Zähler.** Der Rechnungszähler kann nicht zurückgesetzt werden. Planen Sie, wie Zähler und Kette eine Neuinstallation, einen Gerätetausch oder eine Datenbank-Wiederherstellung überstehen.
- **Systemdatum.** Benutzer dürfen das Systemdatum nicht ändern können.
- **Gespeichertes XML.** Benutzer können gespeichertes XML weder löschen noch bearbeiten. Bauen Sie für ausgestellte Rechnungen deshalb in keiner Rolle eine Bearbeiten- oder Löschen-Funktion ein.
- **Protokolle.** Protokolle tragen Zeitstempel, und Manipulationsversuche müssen erkennbar sein. Protokolle, die nur Anhängen erlauben, erleichtern das erheblich.
- **QR-Code.** Auf vereinfachten Rechnungen fügt Ihre EGS den QR-Code der Phase 2 hinzu, mit 9 Tags im TLV-Format, Base64-kodiert. Testen Sie Druck und Lesbarkeit auf den Bondruckern, die Ihre Filialen tatsächlich verwenden.

Diese Regeln haben Gewicht. Nach den von der ZATCA am 16. November 2021 veröffentlichten Sanktionen beginnen die Bußgelder bei 5.000 SAR für das Nichtausstellen von E-Rechnungen und bei 10.000 SAR für das Löschen oder Ändern einer E-Rechnung nach Ausstellung, während ein fehlender QR-Code zunächst eine Verwarnung nach sich zieht. Danach richten sich die Bußgelder nach Art und Wiederholung des Verstoßes.

## Offline-Betrieb und das 24-Stunden-Fenster

Geschäfte verlieren ihre Internetverbindung, und FATOORA kann nicht erreichbar sein. Vereinfachte Rechnungen sind dafür ausgelegt: Ihre EGS stempelt die Rechnung lokal, der Kunde erhält den Ausdruck, und das XML wartet in einer Warteschlange, die FATOORA innerhalb von 24 Stunden erreichen muss.

- **Erst speichern, dann drucken.** Legen Sie jede vereinfachte Rechnung in einer dauerhaften lokalen Warteschlange ab, bevor der Bon gedruckt wird, damit ein Absturz sie nicht verliert.
- **In Ausstellungsreihenfolge senden.** Halten Sie die Kette intakt und bauen Sie sie nie neu, um eine Lücke zu füllen.
- **Früh warnen.** Lösen Sie eine Warnung aus, wenn die älteste ungemeldete Rechnung einige Stunden alt ist, nicht erst kurz vor Ablauf der 24 Stunden. Wird die Frist verpasst, ist die ZATCA laut ihren Richtlinien über das Formular auf ihrer Website zu benachrichtigen.
- **Die Warteschlange sichtbar machen.** Zeigen Sie Größe und Alter an der Kasse und im Backoffice an.

Steuerrechnungen sind anders. Sie müssen grundsätzlich freigegeben sein, bevor der Käufer sie erhält. Für Ausfälle beschreiben die Detailed Guidelines der ZATCA einen Ausweichweg: weiter versuchen und, wenn die ZATCA nicht erreichbar bleibt, die nicht freigegebene Rechnung übergeben, Aufzeichnungen führen und die freigegebene nachreichen, sobald die Clearance gelingt. Liegt der Fehler bei Ihnen, benachrichtigen Sie die ZATCA über ihr Online-Formular. Bauen Sie das als ausdrücklichen, protokollierten Weg.

## Checkliste für Test und Livegang

1. Jeden Belegtyp mit seinem Ablauf auflisten: Clearance oder Meldung.
2. EGS-Einheiten festlegen und klären, wie Kette und Zähler jeder Einheit eine Wiederherstellung oder einen Gerätetausch überstehen.
3. XML aus strukturierten Daten erzeugen und das Test-Toolkit der ZATCA für jeden Belegtyp bestehen.
4. Ausstellung, Erneuerung und Widerruf des CSID umsetzen, mit Schlüsseln außerhalb des Codes.
5. Für jeden Beleg das gesendete XML und die erhaltene Antwort speichern.
6. Die Offline-Warteschlange bauen, mit Warnungen lange vor Ablauf der 24 Stunden.
7. Systemdatum, ausgestelltes XML und Protokolle gegen Änderungen sperren.
8. Die arabische Rechnung und den gedruckten QR-Code auf echten Druckern prüfen.
9. Verbindungsabbruch, abgelehnten Beleg und widerrufenen CSID vor dem Livegang durchspielen.

Ein Hinweis zu Anbietern und Siegeln: Die ZATCA zertifiziert keine Software. Ihr Solution Providers Directory ist eine Orientierungsliste, die „nicht als Genehmigung durch die ZATCA gilt“, und Steuerpflichtige dürfen jede konforme Lösung einsetzen, auch eine selbst entwickelte. Beurteilen Sie eine Anbindung danach, was sie im Test leistet, nicht nach einem Logo.

Dasselbe Projekt aus Sicht der Geschäftsführung beschreibt [ZATCA Phase 2 für Ihr eigenes Kassen- oder ERP-System](/blog/zatca-phase-2-integration-custom-pos-erp). Läuft die E-Rechnung, hilft dieselbe API-Disziplin beim [Verbinden der Systeme, die Sie bereits nutzen](/blog/api-integration-connecting-business-systems).

**Wo KF Tech Solutions ins Spiel kommt.** Wir entwickeln APIs und Backends im Rahmen unserer Leistung [API- und Backend-Entwicklung](/services/api-and-backend) und haben ein Kassensystem an [Ägyptens ETA-E-Receipt-System](/projects/egypt-eta) angebunden, eine weitere staatliche Plattform, die auf signierten und validierten Rechnungen beruht ([so funktioniert diese Anbindung](/blog/eta-e-invoicing-pos-integration)). Wir arbeiten mit Unternehmen in Ägypten und am Golf (siehe unsere [Seite zu Saudi-Arabien](/saudi-arabia)) und können die Anbindung mit Ihrem Team bauen oder eine bestehende anhand dieser Checkliste prüfen.

## Häufige Fragen

### Zertifiziert oder genehmigt die ZATCA Integrationssoftware?

Nein. Das Solution Providers Directory der ZATCA ist eine Orientierungsliste ohne rechtliche Bindung für Steuerpflichtige und gilt nach den Worten der ZATCA „nicht als Genehmigung durch die ZATCA“. Steuerpflichtige dürfen jede konforme Lösung einsetzen.

### Können wir die Anbindung in C#, Laravel oder einem anderen Stack bauen?

Ja. Die ZATCA schreibt XML, einen kryptografischen Stempel, einen QR-Code und eine API vor, keine Programmiersprache. Jeder Stack, der UBL-2.1-XML erzeugen und validieren, Hashes berechnen, Dokumente signieren und eine HTTPS-API aufrufen kann, erfüllt die Aufgabe, C#/.NET und PHP/Laravel eingeschlossen. Wählen Sie den Stack, den Ihr Team bereits pflegt.

### Braucht jedes Gerät einen eigenen CSID?

Jede EGS-Einheit wird einzeln eingerichtet, mit eigenem CSID und eigener Hash-Kette. Ob eine Einheit jede Kasse oder ein Server pro Filiale ist, ist eine Designentscheidung, die Sie anhand der ZATCA-Richtlinien treffen sollten, bevor Sie irgendetwas einrichten.

### Können wir PDF-Rechnungen an die ZATCA senden?

Nein. Was Sie an die ZATCA senden, muss XML über die API sein. Die Fassung für den Käufer kann das XML oder eine PDF/A-3-Datei mit eingebettetem XML sein, und ihr lesbarer Inhalt muss auf Arabisch sein.

### Was passiert mit vereinfachten Rechnungen, wenn das Internet ausfällt?

Ihr System stempelt und druckt weiter, stellt das XML in die Warteschlange und meldet es, sobald die Verbindung zurück ist, innerhalb von 24 Stunden; gelingt das nicht, benachrichtigen Sie die ZATCA. Für Steuerrechnungen gilt der oben beschriebene Ausweichweg bei Ausfällen.

Entwickeln Sie dies intern und möchten eine zweite Meinung zum Entwurf? [Buchen Sie ein Gespräch](/book) oder [schicken Sie uns Ihr aktuelles Setup](/contact), und wir sagen Ihnen offen, was wir ändern würden.

## Quellen

- [ZATCA: What is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: E-Invoicing Detailed Guidelines (PDF)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Electronic Invoice XML Implementation Standard (PDF)](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA: Welle 25 der E-Invoicing-Integration](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA: Verstöße und Bußgelder bei der E-Rechnung (16. November 2021)](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
