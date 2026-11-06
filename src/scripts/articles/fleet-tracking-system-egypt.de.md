---
title: Flottenortung und Flottenmanagement-Systeme in Ägypten
summary: GPS-Gerät oder Fahrer-Handy, Kraftstoff- und Wartungsalarme, Fahrverhalten und Dashboards: Was ein Flottensystem in Ägypten leisten sollte.
tags: Flottenmanagement, GPS-Ortung, Fahrzeugortung, Kraftstoffüberwachung, IoT, Ägypten
alt: Zwei weiße Kofferlastwagen fahren am frühen Morgen auf einer Landstraße am Hang
caption: Hat ein Lkw den Hof verlassen, zeigt nur das Tracking, wo er ist, wie er gefahren wird und wie viel Kraftstoff er verbraucht.
stats: 2|Wege, ein Fahrzeug zu orten: festes Gerät oder Fahrer-Handy; 1|Karte für jedes Fahrzeug, jeden Fahrer und jede Fahrt; 500+|Generatoren, die GenTrack live überwacht
---

Ein Flottenmanagement-System in Ägypten zeigt auf einem Bildschirm, wo jedes Fahrzeug ist, wie es gefahren wird, wie viel Kraftstoff es verbraucht und wann die nächste Wartung fällig ist. Es besteht aus drei Teilen: einer Ortungsquelle in jedem Fahrzeug, einem Server, der die Daten speichert, und einem Dashboard mit Alarmen, auf die tatsächlich jemand reagiert. Die Ortung ist der leicht zu kaufende Teil; der Nutzen entsteht durch die Kraftstoff-, Wartungs- und Fahrerberichte, die darauf aufbauen.

Ob Sie fünf Lieferwagen, ein Vertriebsteam im Außendienst oder fünfzig Lkw zwischen Kairo und den Häfen betreiben: Es stellen sich dieselben Fragen. So treffen Sie die Entscheidungen.

## GPS-Gerät oder das Handy des Fahrers?

Es gibt zwei Wege, die Position eines Fahrzeugs zu bestimmen, und sie passen zu unterschiedlichen Flotten.

| | Festes GPS-Gerät | App auf dem Fahrer-Handy |
|---|---|---|
| Hardwarekosten | Ein Gerät pro Fahrzeug plus Einbau | Keine, wenn die Fahrer bereits Smartphones haben |
| Laufende Kosten | Eine Daten-SIM pro Gerät | Nutzt das mobile Datenvolumen des Fahrers |
| Funktioniert außerhalb der Dienstzeit | Ja, es ortet das Fahrzeug | Nur solange die App läuft |
| Kann der Fahrer es abschalten? | Schwer, und das System bemerkt es | Leicht: App schließen oder Standort ausschalten |
| Kraftstoff- und Motordaten | Möglich über Sensoren oder die Diagnoseschnittstelle | Nein |
| Am besten für | Firmenfahrzeuge, Lkw, wertvolle Ladung | Außendienst und Kuriere mit eigenem Fahrzeug |

Viele Flotten nutzen am Ende beides: Geräte in den Firmenfahrzeugen und eine App für Mitarbeitende, die ihr eigenes Auto fahren oder beim Kunden Besuche, Fotos und Unterschriften erfassen müssen.

Ein gutes Gerät zeichnet weiter auf, wenn das Mobilfunksignal abbricht, etwa auf Wüstenstraßen oder in Tiefgaragen, und sendet die gespeicherten Punkte, sobald die Verbindung zurück ist. Fragen Sie jeden Anbieter, was mit den Daten während einer Funklücke geschieht. Wenn die Fahrt dann ein Loch hat, suchen Sie weiter.

Ortungsgeräte sind Funkgeräte. Lassen Sie sich vom Anbieter schriftlich bestätigen, dass das Modell von der ägyptischen Regulierungsbehörde für Telekommunikation (NTRA) für den Einsatz in Ägypten zugelassen ist, und klären Sie die aktuellen Regeln mit ihm, bevor Sie selbst Geräte importieren.

## Kraftstoff: wo das Geld versickert

Für die meisten Flotten ist Kraftstoff der Kostenpunkt, über den sich ein Ortungssystem zuerst bezahlt macht. Die wichtigen Prüfungen:

- **Liter gegen Kilometer.** Jedes Fahrzeug hat einen normalen Verbrauch. Ein Lieferwagen, der plötzlich mehr pro 100 km braucht, ist defekt, überladen oder verliert Kraftstoff.
- **Plötzliche Füllstandsabfälle.** Mit einem Füllstandssensor im Tank ist ein Abfall bei parkendem Fahrzeug sofort sichtbar, mit Uhrzeit und Ort.
- **Tankbelege gegen die Daten.** Fahrer erfassen oder fotografieren jede Betankung. Das System vergleicht die bezahlten Liter mit dem Anstieg im Tank.
- **Leerlauf.** Eine Stunde laufender Motor ohne Bewegung vor dem Büro eines Kunden ist verbrannter Kraftstoff ohne Nutzen.

Dieses Problem haben wir in unserem Projekt [GenTrack](/projects/gentrack) gelöst: Live-Überwachung von mehr als 500 Mietgeneratoren in ganz Ägypten, mit Erkennung von Kraftstoff-Anomalien, die Messwerte markiert, die nicht zur normalen Nutzung passen. Ein Generator und ein Lkw verbrennen beide Kraftstoff, der verschwinden kann, und die Logik, das zu erkennen, ist dieselbe.

## Wartung nach Plan, nicht nach Gedächtnis

Die meisten Pannen sind ein Ölwechsel oder ein Satz Reifen, an den niemand gedacht hat. Ein Flottensystem erfasst die tatsächliche Fahrleistung und die Motorstunden jedes Fahrzeugs, sodass Wartungserinnerungen auf der Nutzung beruhen und nicht auf einem Datum in einem Notizbuch.

- Wartungsintervalle pro Fahrzeug: Öl, Filter, Reifen, Bremsen.
- Erinnerungen vor Zulassungsverlängerung, Ablauf der Versicherung und Prüfterminen.
- Eine Wartungshistorie pro Fahrzeug mit den Kosten jeder Arbeit, damit Sie sehen, welche Fahrzeuge im Unterhalt teurer sind als ein Ersatz.

## Fahrverhalten, ohne daraus Überwachung zu machen

Ein Gerät mit Beschleunigungssensor kann starkes Bremsen, schnelles Beschleunigen, scharfe Kurven und Geschwindigkeitsüberschreitungen erfassen. Als einfache Punktzahl pro Fahrer senkt das Unfälle, Kraftstoffverbrauch und Verschleiß.

Am besten funktioniert es, wenn die Fahrer wissen, was gemessen wird und warum, und wenn gute Werte belohnt und nicht nur schlechte bestraft werden. Standortdaten von Fahrern sind personenbezogene Daten. Legen Sie also fest, wer sie sehen darf, wie lange Sie sie aufbewahren und ob außerhalb der Arbeitszeit geortet wird. Unser Leitfaden zu den [Datenschutzregeln für Apps in Ägypten](/blog/egypt-data-protection-law-apps) behandelt die Pflichten im Detail.

## Dashboards und Berichte, die jemand liest

Eine Karte mit sich bewegenden Punkten beeindruckt in der Demo, aber niemand schaut den ganzen Tag auf eine Karte. Was ein Flottenmanager tatsächlich nutzt:

- **Alarme** für die Ausnahmen: ein Fahrzeug außerhalb seines Gebiets, ein Kraftstoffabfall, zu schnelles Fahren, ein Gerät offline.
- **Ein Tages- oder Wochenbericht** pro Fahrzeug und Fahrer: Strecke, Arbeitsstunden, Leerlauf, Kraftstoffverbrauch, Kosten pro Kilometer.
- **Fahrtenhistorie**, um Streitfälle mit Kunden über Ankunftszeiten zu klären.

Achten Sie darauf, dass die Zahlen bedeuten, was sie zu bedeuten vorgeben. „Arbeitsstunden“ von Zündung an bis Zündung aus sind nicht dasselbe wie Stunden beim Kunden. Über diese Falle haben wir in [Your dashboard is lying to you](/blog/your-dashboard-is-lying-to-you) geschrieben.

## Vor dem Kauf: Fragen an den Anbieter

1. Wem gehören die Daten, und können Sie sie vollständig exportieren, wenn Sie den Anbieter wechseln?
2. Zeichnet das System ohne Signal weiter auf und füllt die Lücken danach?
3. Gibt es eine monatliche Gebühr pro Fahrzeug, und was ist darin enthalten?
4. Sind Dashboard und Fahrer-App auf Arabisch verfügbar?
5. Lässt es sich mit Ihrer Buchhaltung, Ihrem ERP oder Ihrem Bestellsystem verbinden, sodass Fahrten mit Rechnungen und Lieferungen verknüpft sind?
6. Wer baut die Geräte ein, und wer kommt, wenn eines nicht mehr meldet?

Die Frage nach der Anbindung ist wichtiger, als sie aussieht. Fahrten, die mit Aufträgen verknüpft sind, Kraftstoff, der in die Buchhaltung fließt, und Fahrer, die mit der Lohnabrechnung verbunden sind, machen aus Ortung echtes Management. Unser Artikel über das [Verbinden der Systeme, die Sie bereits nutzen](/blog/api-integration-connecting-business-systems) erklärt, wie das funktioniert.

## Häufige Fragen

### Kann ich Fahrzeuge nur über die Handys der Fahrer orten?

Ja, für Mitarbeitende mit eigenem Auto oder für eine kleine Flotte. Der Einstieg kostet wenig, aber der Fahrer kann die Ortung abschalten, und Kraftstoff- oder Motordaten sind nicht lesbar. Für Firmenfahrzeuge ist ein festes Gerät zuverlässiger.

### Funktioniert das System ohne Internet im Fahrzeug?

Ein gutes Gerät speichert seine Messwerte, wenn das Signal abbricht, und sendet sie nach der Wiederverbindung. Die Fahrtenhistorie bleibt vollständig, und das Dashboard zeigt, welche Fahrzeuge vorübergehend offline sind.

### Kann ein Flottensystem Kraftstoffdiebstahl erkennen?

Es kann ihn melden. Mit einem Füllstandssensor löst ein plötzlicher Abfall bei parkendem Fahrzeug einen Alarm mit Uhrzeit und Ort aus. Ohne Sensor zeigt der Vergleich von Tankbelegen und gefahrener Strecke trotzdem, welche Fahrzeuge mehr verbrauchen, als sie sollten.

### Brauche ich ein individuelles oder ein fertiges System?

Ein fertiger Ortungsdienst reicht, wenn Sie nur eine Karte und einfache Berichte brauchen. Ein individuelles System lohnt sich, wenn die Ortung mit Aufträgen, Rechnungen, Vermietung oder Lohnabrechnung verbunden sein muss, oder wenn Ihr Geschäft auf Geräten statt auf normalen Fahrzeugen beruht, wie bei der [Gerätevermietung](/blog/equipment-rental-software).

### Können wir mit wenigen Fahrzeugen anfangen?

Ja. Ein Start mit einer Handvoll Fahrzeugen zeigt, ob Messwerte, Alarme und Berichte nützlich sind, bevor Sie die ganze Flotte ausstatten.

## Sprechen Sie mit uns über Ihre Flotte

KF Tech Solutions entwickelt IoT-Überwachungssysteme und Unternehmenssoftware: Geräte und ihre Daten, ein Cloud-Backend, Web-Dashboards und mobile Apps, mit Alarmen und Fernverwaltung der Geräte. GenTrack, unsere Plattform zur Generatorüberwachung, basiert auf denselben Bausteinen, die eine Fahrzeugflotte braucht. Mehr dazu in unserem [IoT-Lösungen-Service](/services/iot-solutions). Wir arbeiten mit Unternehmen in Ägypten und am Golf.

Wenn Sie wissen möchten, wohin Ihre Fahrzeuge und Ihr Kraftstoff gehen, [buchen Sie ein kostenloses Gespräch](/book) oder [schildern Sie uns Ihre Flotte](/contact). Wir sagen Ihnen, ob ein fertiger Dienst, ein individuelles System oder eine Mischung am besten passt.

## Quellen

- [National Telecom Regulatory Authority (NTRA), Ägypten](https://www.tra.gov.eg/en/)
- [KF Tech Solutions: Fallstudie GenTrack](/projects/gentrack)
