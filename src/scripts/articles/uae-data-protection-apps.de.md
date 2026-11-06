---
title: Datenschutz für Apps in den VAE: PDPL, DIFC und ADGM
summary: Welches Datenschutzrecht in den VAE für Ihre App gilt, was unter PDPL, DIFC und ADGM feststeht und eine Checkliste für die Entwicklung, die zu allen drei passt.
tags: VAE, Datenschutz, PDPL, DIFC, ADGM, Privatsphäre, App-Entwicklung
alt: Ein Smartphone auf gelbem Untergrund, auf dem violetten Bildschirm ein weißes Vorhängeschloss
caption: In den VAE entscheidet der Standort über das Regelwerk: Festland-PDPL, DIFC und ADGM haben jeweils eigene Datenschutzregeln.
stats: 3|Datenschutzregime: Festland, DIFC und ADGM; 2022|Jahr, in dem das Bundesgesetz PDPL in Kraft trat; 1|Datenlandkarte, die jede App braucht, egal welches Gesetz gilt
---

Wenn Ihre App in den VAE personenbezogene Daten erhebt, gilt in der Regel eines von drei Regimen: das Bundesgesetz zum Schutz personenbezogener Daten (PDPL, Federal Decree-Law 45 of 2021) auf dem Festland, das DIFC-Gesetz Nr. 5 von 2020 im Dubai International Financial Centre oder die ADGM Data Protection Regulations 2021 im Abu Dhabi Global Market. Für Zahlungs- und Gesundheitsdaten kommen Branchenregeln hinzu. Eine gut gebaute App kann unter allen drei Regimen funktionieren, wenn Einwilligung, Zugriff, Löschung und Protokollierung von Anfang an eingeplant sind.

Zuletzt geprüft: 6. November 2026

Dieser Artikel ist eine allgemeine Information und keine Rechtsberatung. Die Regeln ändern sich noch, lassen Sie Ihre Lage daher vor dem Start von einer in den VAE zugelassenen Anwältin oder einem Anwalt prüfen.

## Welches Gesetz für Ihre App gilt

Die erste Frage ist, wo Ihr Unternehmen niedergelassen ist, nicht, wo Ihre Server stehen.

- **Unternehmen auf dem Festland:** die PDPL. Sie gilt seit dem 2. Januar 2022 und umfasst das Festland, aber weder das DIFC noch den ADGM.
- **Unternehmen im DIFC:** das DIFC-Gesetz Nr. 5 von 2020, beaufsichtigt vom DIFC Commissioner of Data Protection.
- **Unternehmen im ADGM:** die ADGM Data Protection Regulations 2021, beaufsichtigt vom ADGM Office of Data Protection.
- **Unternehmen in einer anderen Freizone:** Fragen Sie Ihre Beratung, welches Regime für Ihre Lizenz gilt, bevor Sie etwas entwerfen. Freizonenunternehmen arbeiten in einem anderen rechtlichen Rahmen als das Festland, gehen Sie also von nichts aus.

Hosting im Ausland bringt Sie nicht aus dem Anwendungsbereich. Das offizielle Regierungsportal der VAE beschreibt die PDPL als anwendbar auf Verarbeitung innerhalb wie außerhalb des Landes. Eine App, die in Kairo entwickelt, in Europa gehostet und von Kunden in Dubai genutzt wird, muss trotzdem mit Blick auf die Regeln der VAE gebaut werden.

| | Festland | DIFC | ADGM |
|---|---|---|---|
| Gesetz | Federal Decree-Law 45 of 2021 (PDPL) | DIFC-Gesetz Nr. 5 von 2020 | ADGM Data Protection Regulations 2021 |
| Für wen | Unternehmen auf dem Festland | Unternehmen im DIFC | Unternehmen im ADGM |
| Aufsicht | UAE Data Office, das in die neue Behörde für KI und Daten übergeht | Commissioner of Data Protection | Office of Data Protection |

## Die PDPL auf dem Festland: was feststeht und was nicht

Das offizielle Regierungsportal der VAE fasst den Kern des Gesetzes so zusammen:

- **Einwilligung ist der Normalfall.** Personenbezogene Daten ohne Einwilligung der betroffenen Person zu verarbeiten, ist grundsätzlich verboten, mit Ausnahmen etwa für das öffentliche Interesse und bestimmte rechtliche Verfahren und Ansprüche.
- **Menschen haben Rechte an ihren Daten**, darunter die Berichtigung unrichtiger Daten und die Einschränkung oder Beendigung der Verarbeitung.
- **Übermittlungen ins Ausland sind an Bedingungen geknüpft.** Das Gesetz stellt Anforderungen an die Übermittlung und Weitergabe personenbezogener Daten ins Ausland zur Verarbeitung.
- **Es gibt eine Aufsicht und einen Beschwerdeweg.** Das UAE Data Office wurde als Datenaufsicht des Bundes eingerichtet, mit Verfahren für Beschwerden.

Zwei Punkte sind noch offen:

- **Die Durchführungsverordnung.** Sie soll die Einzelheiten regeln, war aber im September 2026 noch nicht formell erlassen. Wer Ihnen genau sagt, was sie verlangt, rät.
- **Die Aufsicht selbst.** Am 14. Juni 2026 haben die VAE eine neue Behörde für KI und Daten beschlossen, die das UAE Data Office, das AI Office und den Bereich Digital Government der TDRA übernimmt. Künftige Leitlinien werden voraussichtlich von dieser neuen Behörde kommen.

Die praktische Antwort: Bauen Sie jetzt nach den Grundsätzen des Gesetzes und halten Sie die Teile, die später am ehesten konkretisiert werden, konfigurierbar statt fest im Code: Einwilligungstexte, Aufbewahrungsfristen, die Liste der Länder, in die Daten übermittelt werden, und die Fristen, an die sich Ihr Team bei Auskunftsanfragen hält.

## DIFC und ADGM: zwei eigene Regime

Beide Finanzfreizonen haben ein eigenes Datenschutzgesetz und eine eigene Aufsicht, getrennt von der PDPL. Ist Ihr Unternehmen dort lizenziert, ist die PDPL nicht Ihr Maßstab. Lesen Sie die Leitlinien des DIFC Commissioner of Data Protection oder des ADGM Office of Data Protection (Links unten) und lassen Sie sie von Ihrer Anwältin oder Ihrem Anwalt auf Ihr Produkt übertragen.

Für das Entwicklungsteam liegen die Unterschiede meist um die Software herum, nicht in ihr: die Hinweise, die Sie veröffentlichen, die Aufzeichnungen, die Sie führen, der Umgang mit der Aufsicht und wie schnell Sie antworten. Die technischen Bausteine sind dieselben.

Bedient eine App Unternehmen in mehreren Zonen, etwa eine Gruppe mit einer Festlandgesellschaft und einer Einheit im DIFC, richten Sie sie nach der strengsten Einstellung aus und machen Hinweise und Aufbewahrungsfristen pro Einheit konfigurierbar.

## Zahlungs- und Gesundheitsdaten: Branchenregeln obendrauf

Manche Datenarten unterliegen Regeln über das allgemeine Gesetz hinaus.

- **Zahlungen.** Laut der VAE-Übersicht von DLA Piper müssen Zahlungsdienstleister personenbezogene Daten und Zahlungsdaten in den VAE speichern. Nimmt Ihre App Kartenzahlungen an, ist der übliche Weg, die Kartendaten einem lizenzierten Payment-Gateway zu überlassen, sodass sie Ihre eigenen Server nie erreichen. Unser Leitfaden zu [Payment-Gateways in den VAE](/blog/payment-gateways-uae) vergleicht die Optionen. Bauen Sie selbst einen Zahlungsdienst, ist das zuerst eine Frage von Lizenz und Hosting für die Rechtsberatung und erst danach eine Frage des Codes.
- **Gesundheit.** Gesundheitsdaten sind eingeschränkt, und das Regierungsportal nennt neben der PDPL ein eigenes Bundesgesetz zu IKT im Gesundheitswesen. Apps für Arzttermine, Telemedizin, Apotheken und Patientenakten brauchen eine konkrete Beratung dazu, wo Daten gespeichert und wer darauf zugreifen darf, bevor Sie das Hosting wählen. Was ein Praxissystem überhaupt speichert, zeigt unser Leitfaden zu [Praxisverwaltungssoftware](/blog/clinic-management-system-egypt).

Schreibt eine Regel vor, dass Daten in den VAE bleiben, wird daraus eine Hosting-Entscheidung: Datenbank, Backups und alle Logs mit personenbezogenen Daten müssen dort liegen. Lassen Sie sich von Ihrem Entwickler schriftlich bestätigen, wo jedes davon gehostet wird.

## Eine Checkliste für die Entwicklung, die zu allen drei passt

Diese Praktiken entsprechen Grundsätzen, die in allen drei Regimen vorkommen. Allein machen sie Sie nicht regelkonform, aber sie geben Ihrer Rechtsberatung eine solide Grundlage und ersparen Ihnen später einen Umbau.

### Wissen, was Sie erheben

- Führen Sie eine **Datenlandkarte**: jedes personenbezogene Datenfeld, wozu Sie es brauchen, wo es gespeichert ist, wer es sehen kann und wie lange Sie es aufbewahren.
- Erheben Sie weniger. Streichen Sie Felder, die Sie nicht nutzen, etwa vollständige Geburtsdaten oder Ausweiskopien „für alle Fälle“.
- Halten Sie Testdaten von echten Kundendaten getrennt.

### Einwilligung und Hinweise

- Speichern Sie Einwilligungen mit Zeitstempel, der Version des Textes, den die Person gesehen hat, und dem, wozu sie eingewilligt hat.
- Trennen Sie die Einwilligung für Marketing von der für den Dienst selbst, und machen Sie den Widerruf so einfach wie die Erteilung.
- Veröffentlichen Sie einen Datenschutzhinweis auf Arabisch und Englisch und verlinken Sie ihn bei der Registrierung und in der App.

### Anfragen der Betroffenen

- Geben Sie Ihrem Admin-Bereich Werkzeuge, um die Daten einer Person zu exportieren, zu berichtigen, einzuschränken und zu löschen.
- Sorgen Sie dafür, dass die Löschung auch die externen Dienste erreicht, und bereinigen Sie Backups nach festem Zeitplan.
- Protokollieren Sie jede Anfrage und wann sie beantwortet wurde.

### Sicherheit

- Rollenbasierte Zugriffe, damit Mitarbeitende nur sehen, was ihre Aufgabe erfordert.
- Verschlüsselung bei der Übertragung und im Ruhezustand.
- Ein Audit-Log, wer personenbezogene Daten angesehen, geändert oder exportiert hat.
- Zwei-Faktor-Anmeldung für Admin-Konten.

### Übermittlungen und Dienstleister

- Listen Sie jeden externen Dienst auf, der personenbezogene Daten erhält: Hosting, E-Mail, SMS, Analyse, Absturzberichte, KI-Schnittstellen und Login-Anbieter.
- Halten Sie fest, wo jeder davon Daten verarbeitet. Ihre Rechtsberatung braucht diese Liste, um Übermittlungen ins Ausland zu bewerten.
- Wenn Sie die [Anmeldung mit UAE PASS](/blog/uae-pass-integration) einbauen, sind die verifizierten Identitätsdaten, die Sie erhalten, personenbezogene Daten wie alle anderen und gehören auf die Landkarte.

### Vorfälle

- Überwachung und Alarme, die einen Datenvorfall tatsächlich sichtbar machen.
- Ein schriftliches Vorfallverfahren: wer entscheidet, wer informiert wird und in welcher Reihenfolge. Die gesetzlichen Fristen für Ihr Regime ergänzt Ihre Rechtsberatung.

### Der Vertrag mit Ihrem Entwickler

Verlangen Sie eine Vertraulichkeitsvereinbarung, die Rückgabe oder sichere Löschung Ihrer Daten am Vertragsende, ein Verfahren zur Meldung von Vorfällen sowie die vollständige Übertragung von Quellcode und geistigem Eigentum im Vertrag. Nach dem Urheberrecht der VAE gehört Software, die Angestellte im Rahmen ihrer Tätigkeit erstellen, grundsätzlich dem Arbeitgeber, sofern nichts anderes vereinbart ist. Diese Regel betrifft Angestellte; die von uns geprüfte Quelle äußert sich nicht zu externen Auftragnehmern. Halten Sie die Übertragung deshalb schriftlich fest. Unsere Checkliste, [was Sie in einem Softwareentwicklungsvertrag prüfen sollten](/blog/software-development-contract-what-to-check), deckt den Rest ab.

## Was KF Tech Solutions hier tut

Wir entwickeln [individuelle Software](/services/custom-software), Web-Apps und mobile Apps für Unternehmen in Ägypten und am Golf, darunter Praxis- und Apothekensysteme. Bei einem Projekt in den VAE bauen wir die Checkliste ins Produkt ein: eine Datenlandkarte in der Spezifikation, Einwilligungsnachweise, rollenbasierte Zugriffe mit Audit-Logs, Export- und Löschfunktionen im Admin-Bereich und eine schriftliche Liste aller externen Dienste und ihres Hosting-Standorts. Wir hosten dort, wo Sie und Ihre Beratung es festlegen, und halten diesen Standort schriftlich fest. Wir sind Entwickler, keine Anwälte, deshalb arbeiten wir mit Ihrer Rechtsberatung zusammen, statt Konformität zu bescheinigen. Mehr zur Zusammenarbeit mit Unternehmen in den VAE finden Sie auf unserer [VAE-Seite](/uae).

## Häufige Fragen

### Gilt die Durchführungsverordnung zur PDPL schon?

Sie war im September 2026 noch nicht formell erlassen. Das Gesetz selbst gilt seit dem 2. Januar 2022. Bauen Sie also jetzt nach seinen Grundsätzen und halten Sie die Einzelheiten konfigurierbar.

### Muss meine App Daten in den VAE speichern?

Das hängt von Ihrer Branche und Ihrem Regime ab. Am klarsten sind die Branchenregeln: Zahlungsdienstleister müssen personenbezogene Daten und Zahlungsdaten in den VAE speichern, und Gesundheitsdaten sind eingeschränkt. Für andere Apps stellt die PDPL Bedingungen an Übermittlungen ins Ausland. Fragen Sie Ihre Rechtsberatung, wie sie sich auf Ihr Hosting auswirken, bevor Sie es wählen.

### Wir sind ein Unternehmen im DIFC. Gilt die PDPL für uns?

Die PDPL umfasst weder das DIFC noch den ADGM. Unternehmen im DIFC folgen dem DIFC-Gesetz Nr. 5 von 2020, Unternehmen im ADGM den ADGM Data Protection Regulations 2021.

### Kann ein Entwickler außerhalb der VAE eine regelkonforme App bauen?

Ja. Wo der Code geschrieben wird, zählt weniger als der Umgang der App mit Daten und der Ort des Hostings. Entscheidend sind Einwilligung, Zugriffskontrolle, Löschung, Protokollierung, eine Dienstleisterliste und ein klarer Vertrag.

### Reicht eine Datenschutzerklärung?

Nein. Die Erklärung beschreibt, was Sie tun, die App muss es tatsächlich tun. Verlangt jemand die Berichtigung seiner Daten oder das Ende der Verarbeitung, braucht Ihr Team ein Werkzeug dafür, kein Versprechen auf einer Webseite.

## Nächster Schritt

Wenn Sie eine App für Kunden in den VAE planen und den Datenschutz vom ersten Bildschirm an einplanen möchten, [erzählen Sie uns von Ihrem Projekt](/contact) oder [buchen Sie ein kostenloses Gespräch](/book).

## Quellen

- [Regierungsportal der VAE: Datenschutzgesetze](https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws)
- [Legal 500: die Behörde für KI und Daten der VAE](https://www.legal500.com/intelligence/united-arab-emirates/strategy/the-uae-artificial-intelligence-and-data-authority-what-it-means-for-ai-data-and-digital-governance)
- [DLA Piper: Datenschutzgesetze in den VAE](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
- [DIFC Commissioner of Data Protection](https://www.difc.com/business/registrars-and-commissioners/commissioner-of-data-protection)
- [ADGM Office of Data Protection: Leitlinien](https://www.adgm.com/operating-in-adgm/office-of-data-protection/guidance)
- [Regierungsportal der VAE: Unternehmen in einer Freizone führen](https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-)
- [Morgan Lewis: das Urheberrecht der VAE und Software](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2022/10/protecting-online-data-and-ip-new-copyright-law-provides-clarity-for-uae-businesses)
