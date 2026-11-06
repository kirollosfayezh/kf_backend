---
title: Apothekensoftware in Saudi-Arabien: Wasfaty, Rassed und Lager
summary: Was ein Apothekensystem in Saudi-Arabien abdecken muss: E-Rezepte über Wasfaty, Rückverfolgung mit Rassed, Chargen und Verfall sowie E-Rechnungen.
tags: Apothekensoftware, Wasfaty, RSD Rückverfolgung, ZATCA E-Rechnung, Lagerverwaltung, Saudi-Arabien
alt: Ein Apotheker im weißen Kittel prüft eine Packung zwischen hohen Regalen voller Arzneimittel
caption: Jede Packung im Regal hat eine Charge, ein Verfallsdatum und einen Rückverfolgungseintrag, die übereinstimmen müssen.
stats: 4|Codes im Data-Matrix-Code jeder Packung: GTIN, Seriennummer, Verfall, Charge; 2|Seiten jeder RSD-Bewegung: Versand und Annahme; 24 h|Frist für die Meldung jeder vereinfachten Rechnung an FATOORA
---

Ein Apothekensystem in Saudi-Arabien muss mehr können als Verkäufe zu kassieren. Es muss jede Packung, die Sie erhalten und verkaufen, an das Arzneimittel-Rückverfolgungssystem der SFDA (Rassed, RSD) melden, den Bestand nach Charge und Verfallsdatum führen, neben dem E-Rezept-Dienst Wasfaty des Gesundheitsministeriums funktionieren und Rechnungen nach den E-Rechnungsregeln der ZATCA ausstellen. Dieser Leitfaden erklärt jeden Punkt verständlich und zeigt, was Sie fragen sollten, bevor Sie Software kaufen oder entwickeln lassen.

Zuletzt geprüft: 6. November 2026

## Die vier Systeme, mit denen eine saudische Apotheke arbeitet

Die meisten Apothekeninhaber lernen diese Systeme einzeln kennen, von verschiedenen Behörden. Ihre eigene Software steht in der Mitte und muss alle in Einklang halten.

| System | Betrieben von | Was es abdeckt | Was Ihre Software leisten muss |
|---|---|---|---|
| Rassed (RSD), Arzneimittel-Rückverfolgung | SFDA | Jede Packung registrierter Humanarzneimittel, von Herstellung oder Import bis zum Patienten | Für jede Packung Meldungen senden und empfangen: Annahme, Verkauf, Rückgabe, Umlagerung |
| Wasfaty | Gesundheitsministerium, mit NUPCO | E-Rezepte teilnehmender staatlicher Gesundheitseinrichtungen, kostenlos abgegeben in akkreditierten öffentlichen Apotheken | Wasfaty-Abgaben getrennt von Barverkäufen und im Einklang mit dem Bestand führen |
| E-Rechnung (FATOORA) | ZATCA | Steuerrechnungen und vereinfachte Rechnungen umsatzsteuerlich registrierter Unternehmen | Konforme E-Rechnungen erzeugen; in Phase 2 über die ZATCA-API freigeben lassen oder melden |
| Ihr eigenes Lager und die Kasse | Sie | Chargen, Verfallsdaten, Filialen, Schichten, Lieferanten | Die eine Aufzeichnung sein, mit der die anderen drei abgeglichen werden |

## Rassed (RSD): Jede Packung hat eine Identität

Die SFDA beschreibt ihr Drug Track and Trace System als System, das Produkte von der Herstellung oder dem Import bis zur Anwendung beim Patienten verfolgt. Ihr Integrationsleitfaden nennt Apotheken als Beteiligte, neben Herstellern, Großhandelslagern sowie medizinischen Einrichtungen und Abgabezentren.

Was das am Verkaufstisch bedeutet:

- **Jede Packung trägt einen GS1-Data-Matrix-Code** mit vier Angaben: GTIN (Produkt), Seriennummer, Verfallsdatum und Chargennummer.
- **Jede Apotheke braucht eine GLN**, eine globale Lokationsnummer. Danach registriert die SFDA den Beteiligten im System.
- **Bewegungen haben zwei Seiten.** Schickt ein Lager Packungen, muss Ihre Apotheke eine Annahmemeldung senden. Bis dahin bleiben die Packungen „zwischen“ beiden Parteien, und keine kann damit etwas tun.
- **Zu den Apothekenvorgängen gehören** Annahme, Verkauf an Patienten, Storno, Rückgabe, Umlagerung und Deaktivierung, jeweils per Seriennummer oder bei manchen Vorgängen per Charge. Die SFDA weist darauf hin, dass sie diese einschränken kann.

Laut SFDA-Leitfaden müssen die Beteiligten ihre eigenen Computersysteme anpassen, um diese Meldungen zu senden und zu empfangen, und zwar über SOAP-XML-Webservices mit Zugangsdaten, die die SFDA nach der Registrierung vergibt. Die RSD-FAQ ergänzt, dass Sie die Portale des Systems nutzen können, bis Ihr eigenes System bereit ist, und dass das System Daten gebündelt annimmt. In der Praxis braucht eine Apotheke, die täglich Hunderte Packungen verkauft, eine Kasse, die die Verkaufsmeldung automatisch sendet, statt Seriennummern von Hand ins Portal einzutippen.

Die SFDA schaut dabei gezielt auf Apotheken. Im Januar 2026 traf sie sich mit dem nationalen Apothekenausschuss, um Probleme bei der Umsetzung von RSD zu besprechen und die Einhaltung im Sektor zu verbessern.

## Wasfaty: E-Rezepte in öffentlichen Apotheken

Wasfaty ist der E-Rezept-Dienst des Gesundheitsministeriums. Patienten teilnehmender staatlicher Gesundheitseinrichtungen erhalten ihre Medikamente kostenlos in akkreditierten öffentlichen Apotheken. Bis Dezember 2021 meldete das Ministerium mehr als 20 Millionen darüber abgegebene Rezepte, bei Beteiligung von 2.018 Gesundheitszentren und 197 Krankenhäusern.

Die Wasfaty-Unterlagen von NUPCO definieren eine teilnehmende Apotheke als öffentliche Apotheke, die im Dienst akkreditiert und mit NUPCO vertraglich verbunden ist. Teilnahmekriterien und Registrierung werden auf wasfaty.sa veröffentlicht. Prüfen Sie sie dort, statt sich auf die Zusammenfassung eines Anbieters zu verlassen.

Für Ihre Software bedeutet das:

- **Eine Wasfaty-Abgabe ist kein Barverkauf.** Der Patient zahlt nichts, also darf sie weder die Kassenlade noch den Umsatzbericht aufblähen.
- **Der Bestand verlässt trotzdem das Regal.** Jeder abgegebene Artikel muss wie jeder Verkauf aus der richtigen Charge gebucht werden.
- **Sie brauchen eine saubere Aufzeichnung für den Abgleich.** Führen Sie Wasfaty-Abgaben als eigene Vorgangsart, damit Sie sie später mit der Abrechnung des Dienstes abgleichen können.

Fragen Sie das Wasfaty-Team von NUPCO, wie Abgabe und Abrechnung für Ihre Apotheke funktionieren, bevor Sie etwas darum herum planen. Akzeptieren Sie die Aussage eines Anbieters, sein Produkt sei „mit Wasfaty verbunden“, nicht, ohne es in Betrieb gesehen zu haben.

## Chargen und Verfallsdaten im eigenen Bestand

Eine Apotheke kann nicht mit einer Bestandszahl pro Artikel arbeiten. Dasselbe Medikament liegt in mehreren Chargen mit unterschiedlichen Verfallsdaten im Regal, und RSD verfolgt jede Packung bereits nach Charge und Verfall.

Was das System leisten sollte:

- **Charge und Verfall beim Wareneingang aus dem Data-Matrix-Code lesen.** Ein Scan füllt beide Felder, niemand tippt sie ab.
- **Zuerst verkaufen, was zuerst verfällt.** Die Kasse sollte zur Charge mit dem nächsten Verfallsdatum führen und warnen, wenn ein Artikel kurz vor dem Verfall steht.
- **Kurz verfallende Ware früh melden.** Eine monatliche Liste dessen, was in den nächsten 60 oder 90 Tagen verfällt, gibt Ihnen Zeit für Rückgabe, Umlagerung oder Rabatt.
- **Rückgabe und Rückruf nach Charge.** Wird eine Charge zurückgerufen, müssen Sie jede Packung davon in allen Filialen in Sekunden finden. Laut SFDA lassen sich zurückgerufene Produkte über RSD direkt stoppen; Ihr eigenes System sollte sie auch an der Kasse sperren.
- **Umlagerungen zwischen Filialen korrekt buchen.** Eine Umlagerung ist ein Abgang in einer Filiale und ein Zugang in einer anderen, in RSD eine Umlagerung plus Annahme, kein Verkauf.

Dieselben Bestandsprobleme erklären wir für ägyptische Apotheken in [Apothekensoftware in Ägypten](/blog/pharmacy-management-system-egypt) und die allgemeinen Ursachen für Bestandsverluste in [wohin Ihr Bestand wirklich geht](/blog/inventory-management-system-egypt).

## ZATCA-E-Rechnungen am Apothekentresen

Eine umsatzsteuerlich registrierte Apotheke stellt wie jedes andere Geschäft E-Rechnungen nach den ZATCA-Regeln aus. Phase 1 (Erstellung) gilt seit dem 4. Dezember 2021 für im Königreich ansässige Steuerpflichtige, und eine eingescannte Papierrechnung gilt nicht als E-Rechnung.

Phase 2 (Integration) begann am 1. Januar 2023. Seit 2023 überführt die ZATCA umsatzsteuerlich registrierte Unternehmen in Wellen in Phase 2. Welle 25 umfasst steuerbare Umsätze über 187.500 SAR in einem beliebigen Jahr von 2022 bis 2025 und muss bis zum 1. Februar 2027 mit FATOORA verbunden sein.

In einer Apotheke sind die meisten Rechnungen vereinfachte Rechnungen an Patienten. In Phase 2 werden sie von Ihrem angebundenen System signiert, tragen einen QR-Code, werden dem Kunden sofort ausgedruckt und müssen innerhalb von 24 Stunden an FATOORA gemeldet werden. Rechnungen an ein Unternehmen, etwa eine Klinik, die Bedarf einkauft, sind Steuerrechnungen, die die ZATCA freigeben muss, bevor der Käufer sie erhält. Jede Rechnung trägt außerdem eine UUID und den Hash der vorherigen Rechnung, und die lesbare Rechnung muss auf Arabisch sein.

Zwei Punkte zählen bei der Softwarewahl:

- **Die umsatzsteuerliche Behandlung wird pro Artikel festgelegt.** Ihr Steuerberater entscheidet, wie jedes Produkt besteuert wird; das System muss das in jeder Zeile korrekt anwenden.
- **Die ZATCA zertifiziert keine Software.** Ihr Verzeichnis der Lösungsanbieter ist eine unverbindliche Liste und gilt nicht als Genehmigung durch die ZATCA. Beurteilen Sie ein Produkt danach, ob es tatsächlich angebunden ist und Freigabe und Meldung durchführt, nicht nach einem Siegel.

Unser [Leitfaden zur ZATCA-Phase-2-Anbindung für individuelle POS- und ERP-Systeme](/blog/zatca-phase-2-integration-custom-pos-erp) behandelt die technische Seite im Detail.

## Fragen vor Kauf oder Entwicklung

Ob Standardpaket oder individuelle Software, stellen Sie dieselben Fragen:

1. Sendet das System RSD-Meldungen selbst, und welche Vorgänge unterstützt es: Annahme, Verkauf, Rückgabe, Umlagerung, Deaktivierung?
2. Was passiert mit RSD-Meldungen und Rechnungen, wenn das Internet ausfällt, und wie werden sie danach gesendet?
3. Liest es den GS1-Data-Matrix-Code und füllt Charge und Verfall automatisch?
4. Wie erfasst es Wasfaty-Abgaben getrennt von Barverkäufen?
5. Ist es heute für ZATCA Phase 2 angebunden, und können Sie eine freigegebene und eine gemeldete Rechnung sehen?
6. Hat jede Filiale ihren eigenen Bestand, mit Umlagerungen dazwischen?
7. Sind Oberfläche, Beleg und Berichte auf Arabisch?
8. Wem gehören die Daten, und können Sie alles exportieren, wenn Sie wechseln?

Die allgemeinen Abwägungen finden Sie unter [Standard- oder Individual-POS in Saudi-Arabien](/blog/ready-made-vs-custom-pos-saudi-arabia).

## Was KF Tech Solutions hier leistet

Wir entwickeln individuelle [Geschäftssysteme](/services/business-systems), darunter Apotheken-, Praxis-, Kassen- und Lagersysteme, und wir arbeiten mit Unternehmen in Ägypten und am Golf. In Ägypten haben wir ein Kassensystem an das E-Beleg-System der Steuerbehörde angebunden ([ETA-E-Beleg-Projekt](/projects/egypt-eta)), daher wissen wir, was die Anbindung einer Kasse an eine staatliche API bedeutet. Für eine saudische Apotheke lesen wir mit Ihnen die aktuellen Spezifikationen von SFDA und ZATCA, planen die Anbindungen an RSD und FATOORA und bauen die Logik für Bestand, Chargen, Verfall und Filialen so, wie Ihre Apotheke tatsächlich arbeitet. Mehr zu unserer Arbeit mit saudischen Unternehmen finden Sie auf unserer [Seite zu Saudi-Arabien](/saudi-arabia).

## Häufige Fragen

### Muss eine Apotheke ihre eigene Software an RSD anbinden?

Der Integrationsleitfaden der SFDA erwartet, dass Beteiligte ihre eigenen Systeme für das Senden und Empfangen von Meldungen anpassen. Die RSD-FAQ erlaubt die Nutzung der Portale, bis Ihr System bereit ist. Für eine Apotheke mit echtem Umsatz sind automatische Meldungen aus der Kasse die einzige praktikable Lösung.

### Was steht im Data-Matrix-Code einer Arzneimittelpackung?

Vier GS1-Angaben: GTIN, Seriennummer, Verfallsdatum und Chargennummer. Zusammen identifizieren sie genau eine physische Packung.

### Sind Wasfaty und RSD dasselbe?

Nein. Wasfaty ist der E-Rezept-Dienst des Gesundheitsministeriums, betrieben mit NUPCO. RSD ist das Rückverfolgungssystem der SFDA für jede Packung registrierter Arzneimittel. Eine Apotheke hat mit beiden zu tun, und ihr eigenes System muss beide mit dem Bestand in Einklang halten.

### Braucht meine Apotheke jetzt ZATCA Phase 2?

Das hängt von Ihrem steuerbaren Umsatz und der Welle ab, über die die ZATCA Sie benachrichtigt. Die ZATCA kündigt jede Welle mindestens sechs Monate im Voraus an. Welle 25 umfasst Umsätze über 187.500 SAR in einem beliebigen Jahr von 2022 bis 2025, mit Anbindung bis zum 1. Februar 2027. Dies ist eine allgemeine Information und keine Steuerberatung; klären Sie Ihre Lage mit Ihrem Steuerberater.

### Gibt es ein von der ZATCA zugelassenes Apothekensystem?

Die ZATCA lässt keine Software zu. Ihr Verzeichnis der Lösungsanbieter ist eine Orientierungsliste und keine Genehmigung. Lassen Sie sich zeigen, dass das System angebunden ist und echte Rechnungen freigeben lässt oder meldet.

### Kann ein System mehrere Filialen verwalten?

Ja. Jede Filiale sollte ihren eigenen Bestand nach Charge und Verfall haben, und Umlagerungen werden als Abgang in der einen und Zugang in der anderen Filiale gebucht. Das entspricht der Behandlung von Umlagerungen zwischen Apotheken in RSD.

Wenn Sie ein Apothekensystem für Saudi-Arabien planen, [schildern Sie uns, wie Ihre Apotheke arbeitet](/contact) oder [buchen Sie ein kostenloses Gespräch](/book). Wir gehen RSD, Wasfaty und E-Rechnung mit Ihnen durch, bevor ein Angebot entsteht.

## Quellen

- [SFDA: Integrationsleitfaden für das Drug Track and Trace System, v2.1](https://www.sfda.gov.sa/sites/default/files/2024-08/IntegrationGuideDTTSV21.pdf)
- [SFDA: Häufige Fragen zu RSD](https://rsd.sfda.gov.sa/faqs.html)
- [SFDA: Rückverfolgungssystem erfasst über eine Milliarde Vorgänge (März 2021)](https://www.sfda.gov.sa/en/news/79406)
- [SFDA: Treffen mit dem nationalen Apothekenausschuss zu RSD (Januar 2026)](https://sfda.gov.sa/en/news/18786)
- [Gesundheitsministerium: über 20 Millionen Rezepte über Wasfaty abgegeben (Dezember 2021)](https://www.moh.gov.sa/en/ministry/mediacenter/news/pages/news-2021-12-29-001.aspx)
- [NUPCO: Anforderungen des Wasfaty-Dienstes](https://www.nupco.com/wp-content/uploads/2025/01/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D8%B7%D8%A7%D8%AA-%D9%88%D8%B5%D9%81%D8%AA%D9%8A.pdf)
- [ZATCA: Was ist E-Rechnung](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Einführungsphasen](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: Ankündigung der Welle 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Detaillierter Leitfaden zur E-Rechnung](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Verzeichnis der Lösungsanbieter](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
