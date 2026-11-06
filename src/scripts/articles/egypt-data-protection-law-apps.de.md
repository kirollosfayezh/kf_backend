---
title: Ägyptens Datenschutzgesetz: Was Ihre App leisten muss
summary: Eine praktische Checkliste für Apps nach Ägyptens Gesetz 151/2020: Einwilligungsnachweise, Nutzerrechte, Sicherheit, Datenpannen und die Lizenz des PDPC.
tags: Datenschutz, Gesetz 151/2020, PDPC, App-Compliance, Privatsphäre, Ägypten
alt: Eine Hand hält ein Smartphone, auf dessen dunklem Bildschirm ein großes Schlosssymbol zu sehen ist
caption: Nach Gesetz 151/2020 ist der Schutz personenbezogener Daten eine Designanforderung, keine nachträgliche Einstellung.
stats: 151|von 2020: die Nummer des ägyptischen Datenschutzgesetzes; 72|Stunden, um eine Datenpanne beim PDPC zu melden; 3|Arbeitstage, um danach die Betroffenen zu informieren
---

Ägyptens Gesetz Nr. 151 von 2020 zum Schutz personenbezogener Daten gilt für jedes Unternehmen, das personenbezogene Daten elektronisch erhebt, speichert oder verarbeitet, und seine Durchführungsverordnung ist inzwischen erlassen. Praktisch braucht Ihre App dokumentierte Einwilligungen, einen klaren Zweck und eine Speicherdauer für jede Datenart, einen Weg für Nutzer, ihre Rechte auszuüben, echte Sicherheit, ein Verfahren für Datenpannen innerhalb von 72 Stunden sowie eine Lizenz oder Genehmigung des Personal Data Protection Center (PDPC). Dieser Leitfaden macht aus diesen Pflichten eine Checkliste, nach der Ihre Entwickler bauen können.

Zuletzt geprüft: 6. November 2026

Dies sind allgemeine Informationen, keine Rechtsberatung. Nutzen Sie sie zur Vorbereitung auf das Gespräch mit Ihrem Anwalt, nicht als Ersatz dafür.

## Was das Gesetz erfasst und wo es heute steht

Das Gesetz regelt personenbezogene Daten: alle Daten, die eine natürliche Person direkt oder indirekt identifizieren, etwa ein Name, eine Stimme, ein Foto, eine Kennnummer oder eine Online-Kennung. „Verarbeitung“ ist weit gefasst. Erheben, Erfassen, Speichern, Anzeigen, Übermitteln, Auswerten, Ändern und Löschen zählen alle dazu, ob ganz oder teilweise elektronisch.

Jahrelang fehlte die Durchführungsverordnung. Das hat sich geändert. Die Website des PDPC selbst sagt, dass die Durchführungsverordnung erlassen wurde und der Fokus nun auf der praktischen Umsetzung liegt. Das Center betreibt ein Online-Portal, über das Organisationen Genehmigungen und Lizenzen beantragen und ihre Datenschutzbeauftragten registrieren.

Die Grundprinzipien sind kurz und gehören an die Wand jedes Produktteams:

- Erheben Sie Daten nur für einen rechtmäßigen, bestimmten Zweck, den Sie der Person mitgeteilt haben.
- Halten Sie die Daten richtig und sicher.
- Verarbeiten Sie sie so, wie es dem Erhebungszweck entspricht.
- Bewahren Sie sie nicht länger auf, als dieser Zweck es erfordert.

## Verantwortlicher oder Auftragsverarbeiter: Klären Sie zuerst Ihre Rolle

Das Gesetz verteilt die Verantwortung auf zwei Rollen, und Ihre Pflichten hängen davon ab, welche Sie innehaben.

| Rolle | Wer das meist ist | Wichtigste Pflichten |
|---|---|---|
| Verantwortlicher (Controller) | Das Unternehmen, das über Zweck und Art der Datennutzung entscheidet, etwa eine Klinik, ein Geschäft oder ein App-Betreiber | Einwilligung, Zweck, Speicherdauer, Nutzerrechte, Verzeichnisse, Lizenz oder Genehmigung |
| Auftragsverarbeiter (Processor) | Ein Unternehmen, das Daten im Auftrag des Verantwortlichen verarbeitet, etwa ein Hosting- oder Softwareanbieter | Schriftliche Weisungen befolgen, Daten sichern, Verarbeitungsverzeichnis, Lizenz oder Genehmigung |

Die meisten App-Betreiber sind Verantwortliche. Ein Softwareunternehmen, das das System für Sie hostet und betreibt, kann Auftragsverarbeiter sein, und das Gesetz erwartet, dass ein Auftragsverarbeiter nach schriftlichen Weisungen handelt. Wenn Sie eine App in Auftrag geben, nehmen Sie die Datenschutzpflichten in den Entwicklungs- und Supportvertrag auf; unser Leitfaden dazu, [was Sie in einem Softwareentwicklungsvertrag prüfen sollten](/blog/software-development-contract-what-to-check), behandelt die übrigen Klauseln.

Außerdem müssen Verantwortliche und Auftragsverarbeiter mit Sitz außerhalb Ägyptens laut Gesetz einen Vertreter in Ägypten benennen, wie es die Durchführungsverordnung festlegt. Das betrifft Unternehmen aus dem Golf und anderen Ländern, die Nutzer in Ägypten bedienen oder einen Teil ihres Betriebs dort führen. Fragen Sie Ihren Anwalt, wie das für Ihre Struktur gilt.

## Lizenz oder Genehmigung des PDPC

Nach dem Gesetz benötigen Verantwortliche und Auftragsverarbeiter eine Lizenz oder Genehmigung des PDPC, um mit personenbezogenen Daten umzugehen. Das Portal des PDPC bietet derzeit zwei Hauptwege:

- **Genehmigung oder Lizenz für juristische Personen**, für Unternehmen.
- **Genehmigung für freie Berufe**, für einzelne Fachleute wie selbstständige Ärzte, Anwälte oder Berater.

Der Weg für freie Berufe zeigt, welche Vorbereitung nötig ist. Der Antragsteller verifiziert seine Steuernummer bei der ägyptischen Steuerbehörde (ETA), beantwortet einen Compliance-Fragebogen, der seine Pflichten nach dem Gesetz bestimmt, lädt über ITIDA digital signierte Dokumente hoch (darunter ein Führungszeugnis, eine Erklärung über die Richtigkeit der Angaben und eine Compliance-Checkliste) und zahlt die Gebühren. Laut Portal kann die Prüfung ein bis zwei Wochen dauern.

Für die meisten Unternehmen ist der Fragebogen der sinnvolle erste Schritt. Ihre Antworten hängen davon ab, welche Daten die App erhebt und warum, also genau von der Bestandsaufnahme im nächsten Abschnitt.

Das Portal bietet auch Dienste, um einen **Datenschutzbeauftragten (DPO)** zu benennen, zu ersetzen und zertifizieren zu lassen und das Center über sein Ausscheiden zu informieren. Legen Sie früh fest, wer diese Rolle übernimmt; das Gesetz erwartet seine Angaben in Meldungen von Datenpannen und im Verarbeitungsverzeichnis eines Auftragsverarbeiters.

## Die technische Checkliste

Diese Funktionen machen aus den Pflichten des Gesetzes funktionierende Software. Bauen Sie sie von Anfang an ein; das Nachrüsten einer laufenden App ist langsamer und riskanter.

### Eine Datenbestandsaufnahme

Listen Sie jedes Feld auf, das die App erhebt: auf welchem Bildschirm, warum, wo es gespeichert wird, wer es sehen kann und wie lange Sie es aufbewahren. Diese Liste speist den PDPC-Fragebogen, Ihre Datenschutzhinweise und das Verzeichnis, das das Gesetz verlangt. Hat ein Feld keinen klaren Zweck, entfernen Sie es.

### Einwilligungen, die Sie nachweisen können

- Nennen Sie den Zweck bei der Erhebung in klarer Sprache, auf Arabisch und Englisch, wenn Ihre Nutzer beides brauchen.
- Speichern Sie jede Einwilligung mit Datum, Version des angezeigten Textes und Art der Erteilung.
- Fragen Sie erneut, bevor Sie die Daten für einen neuen Zweck verwenden.
- Machen Sie den Widerruf so einfach wie die Erteilung, und sorgen Sie dafür, dass die App ihn beachtet.

Daten, die jemand angibt, um eine rechtmäßige Leistung zu erhalten, gelten als Einwilligung für diesen Zweck, aber für nichts anderes. Eine Buchungs-App darf die Telefonnummer zur Terminbestätigung nutzen, aber ohne gesonderte Einwilligung nicht für Werbung.

### Sensible Daten und Kinder

Das Gesetz schützt sensible Daten besonders, darunter Gesundheits-, genetische, biometrische und Finanzdaten, religiöse Überzeugungen, politische Ansichten, Vorstrafen sowie alle Daten über Kinder. Der Umgang damit erfordert eine Lizenz des PDPC und, soweit das Gesetz nichts anderes vorsieht, die ausdrückliche schriftliche Einwilligung der Person; bei Kindern die des gesetzlichen Vormunds. Kliniken, Labore, Apotheken, Schulen und Fintech-Apps sind hier unmittelbar betroffen. Wenn Sie ein medizinisches Unternehmen führen, lesen Sie unsere Hinweise zu [Praxisverwaltungssoftware in Ägypten](/blog/clinic-management-system-egypt) und zu [Telemedizin-Plattformen](/blog/telemedicine-platform-egypt).

### Nutzerrechte im Produkt

Das Gesetz gibt jeder Person das Recht zu erfahren, welche Daten Sie über sie speichern, und darauf zuzugreifen, die Einwilligung zu widerrufen, Daten berichtigen, aktualisieren oder löschen zu lassen, die Verarbeitung auf einen bestimmten Zweck zu beschränken, ihr in bestimmten Fällen zu widersprechen und über eine Datenpanne informiert zu werden. Geben Sie diesen Anfragen einen festen Platz:

- Ein Profilbildschirm, auf dem Nutzer ihre eigenen Daten sehen und korrigieren.
- Ein Ablauf für Auskunfts-, Lösch- und Widerspruchsanfragen mit Referenznummer und überwachter Frist.
- Ein Admin-Bildschirm, auf dem Mitarbeitende alle Daten zu einer Person finden, exportieren und löschen.

### Speicherdauer und Löschung

Legen Sie für jede Datenkategorie eine Speicherdauer fest und lassen Sie das System danach handeln. Endet der Zweck, erwartet das Gesetz die Löschung oder eine Aufbewahrung nur in einer Form, die die Person nicht mehr identifiziert. Geplante Jobs, die alte Datensätze löschen oder anonymisieren, sind besser als manuelles Aufräumen und hinterlassen ein vorzeigbares Protokoll.

### Sicherheit und Zugriffskontrolle

Das Gesetz verlangt die technischen und organisatorischen Maßnahmen, die nötig sind, um Daten vertraulich zu halten und vor Manipulation, Verlust und unrechtmäßigem Zugriff zu schützen. In einer App bedeutet das meist:

- Verschlüsselte Verbindungen überall und Verschlüsselung sensibler Daten im Ruhezustand.
- Rollen und Berechtigungen, damit die Rezeption nicht sieht, was der Arzt sieht, und die Kasse keine Gehaltsdaten.
- Ein Prüfprotokoll darüber, wer personenbezogene Daten angesehen, exportiert, geändert oder gelöscht hat.
- Ein starker Admin-Login, idealerweise mit Zwei-Faktor-Authentifizierung.
- Getestete Backups und eine klare Zuständigkeit für Server- und Bibliotheksupdates.

Gehalts- und Personaldaten werden oft übersehen; unser Leitfaden zu [HR-, Zeiterfassungs- und Lohnsoftware in Ägypten](/blog/hr-attendance-payroll-software-egypt) behandelt diese Seite.

### Werbenachrichten

Versendet die App Werbe-SMS, E-Mails oder WhatsApp-Nachrichten, holen Sie eine eigene Einwilligung für Marketing ein, geben Sie den Absender an und bieten Sie eine einfache Abmeldung, die das System sofort umsetzt. Trennen Sie die Marketing-Einwilligung von Servicenachrichten wie Buchungsbestätigungen.

## Reaktion auf Datenpannen: die 72-Stunden-Regel

Erfährt ein Verantwortlicher oder Auftragsverarbeiter von einer Verletzung personenbezogener Daten, verlangt das Gesetz eine Meldung an das PDPC innerhalb von 72 Stunden, und sofort, wenn die nationale Sicherheit berührt ist. Die Meldung beschreibt, was geschehen ist, die ungefähre Zahl betroffener Datensätze, die Angaben des Datenschutzbeauftragten, die wahrscheinlichen Folgen und die ergriffenen Gegenmaßnahmen. Die Betroffenen müssen dann innerhalb von drei Arbeitstagen nach der Meldung informiert werden.

Diese Frist lässt sich nicht durch Improvisation einhalten. Bereiten Sie vor dem Start einen kurzen Notfallplan vor:

1. Legen Sie fest, wer einen Vorfall ausrufen darf und wer das PDPC kontaktiert.
2. Stellen Sie sicher, dass Protokolle und Warnungen zeigen, worauf wann zugegriffen wurde.
3. Halten Sie eine Meldevorlage mit den Feldern bereit, die das Gesetz verlangt.
4. Bereiten Sie die Nachricht an die Nutzer auf Arabisch und Englisch vor.
5. Dokumentieren Sie jeden Vorfall und seine Behebung, auch kleine.

## Daten, die Ägypten verlassen

Das Gesetz beschränkt die Übermittlung personenbezogener Daten ins Ausland. Grundsätzlich darf das Schutzniveau im Zielland nicht unter dem Ägyptens liegen, und Sie benötigen eine Lizenz oder Genehmigung des PDPC. Das Gesetz erlaubt enge Ausnahmen, etwa für medizinische Versorgung, nur mit ausdrücklicher Einwilligung der Person. Ihr Verarbeitungsverzeichnis sollte grenzüberschreitende Übermittlungen ebenfalls beschreiben.

Bei einer App ist das oft eine Hosting-Frage. Liegen Ihre Server, Ihr E-Mail-Dienst, Ihre Analyse-Tools oder Ihr Chatbot-Anbieter außerhalb Ägyptens, verlassen personenbezogene Daten womöglich das Land. Erfassen Sie jeden Drittanbieter in Ihrer Bestandsaufnahme, notieren Sie, wo er Daten speichert, und besprechen Sie die Liste mit Ihrem Anwalt und im PDPC-Fragebogen. Golf-Unternehmen, die ein Team in Ägypten beauftragen, sollten auch die Gegenrichtung erfassen: auf welche Daten das Team in Ägypten zugreifen kann und unter welchem Vertrag.

## Unsere Rolle dabei

KF Tech Solutions entwickelt individuelle Software, Web- und Mobile-Apps sowie Praxis- und Unternehmenssysteme. Über unseren [Service für individuelle Softwareentwicklung](/services/custom-software) bauen wir die technische Seite dieser Checkliste in das Produkt ein: Datenbestandsaufnahme, Einwilligungsnachweise, Rollen und Berechtigungen, Prüfprotokolle, Bildschirme für Nutzerrechte, Lösch-Jobs und Vorfallprotokollierung. Wir leisten keine Rechtsberatung und stellen keine Anträge beim PDPC, deshalb arbeiten wir mit Ihrem Anwalt und Ihrem Datenschutzbeauftragten zusammen. Wir arbeiten mit Unternehmen in Ägypten und am Golf.

## Häufige Fragen

### Gilt das Gesetz auch für kleine Unternehmen und Start-ups?

Das Gesetz gilt für alle, die personenbezogene Daten elektronisch verarbeiten, und das PDPC-Portal bietet Wege sowohl für Unternehmen als auch für einzelne Fachleute. Eine Lizenz erhalten juristische Personen, eine Genehmigung auch Einzelpersonen, und sensible Daten erfordern eine Lizenz; beantworten Sie daher den PDPC-Fragebogen und lassen Sie das Ergebnis von einem Anwalt bestätigen.

### Reicht eine Datenschutzerklärung?

Nein. Eine Erklärung beschreibt, was Sie tun; das Gesetz erwartet, dass Sie es nachweisen können. Dazu gehören Einwilligungsnachweise, ein Verarbeitungsverzeichnis, funktionierende Anfragen zu Nutzerrechten, Sicherheitskontrollen und ein Verfahren für Datenpannen.

### Wer sollte Datenschutzbeauftragter sein?

Jemand, der Ihre Abläufe und das Gesetz versteht und die Befugnis hat, Probleme beheben zu lassen. Das PDPC-Portal regelt Benennung, Wechsel und Zertifizierung; prüfen Sie dessen Anforderungen, bevor Sie entscheiden.

### Dürfen wir unsere App außerhalb Ägyptens hosten?

Möglicherweise, aber die Speicherung personenbezogener Daten im Ausland kann als grenzüberschreitende Übermittlung gelten, die das Gesetz beschränkt und an eine Lizenz oder Genehmigung des PDPC knüpft. Klären Sie Ihren Hosting-Plan vor dem Start mit Ihrem Anwalt.

### Wir haben bereits eine App. Wo fangen wir an?

Mit der Datenbestandsaufnahme. Sie zeigt, was Sie speichern, wohin es fließt und welche Lücken am wichtigsten sind, und genau danach fragt der PDPC-Fragebogen. Einwilligungsnachweise, Löschung und Zugriffskontrollen folgen in der Regel.

Wenn Sie eine neue App planen oder eine bestehende an das Gesetz 151/2020 anpassen müssen, [schildern Sie uns, was sie tut](/contact) oder [buchen Sie ein kostenloses Gespräch](/book), und wir gehen die technischen Lücken mit Ihnen durch.

## Quellen

- [Personal Data Protection Center (PDPC), Ägypten](https://pdpc.gov.eg/home)
- [Ägyptische Steuerbehörde (ETA)](https://www.eta.gov.eg)
- [Information Technology Industry Development Agency (ITIDA)](https://itida.gov.eg)
