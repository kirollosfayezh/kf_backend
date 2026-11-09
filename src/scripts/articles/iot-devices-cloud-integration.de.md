---
title: IoT-Geräte mit der Cloud verbinden: ein Praxisleitfaden
summary: Konnektivität, MQTT oder HTTP, AWS IoT Core oder Azure IoT Hub gegen eigenes Backend, Pufferung, Sicherheit und Hosting: So verbinden Sie Geräte mit der Cloud.
tags: IoT, IoT-Überwachung, MQTT, Cloud-Integration, API-Integration, Ägypten
alt: Eine Hand hält eine kleine WLAN-Mikrocontroller-Platine vor einen Laptop mit Programmcode
caption: Die Platine ist der einfache Teil; die Arbeit besteht darin, ihre Messwerte zuverlässig und sicher in die Cloud zu bringen.
stats: 6|Glieder der Kette, vom Gerät bis zum Fernbefehl; 2|übliche Wege, Daten zu senden: MQTT oder HTTP; 500+|Generatoren, die GenTrack live überwacht
---

IoT-Geräte mit einer Cloud-Plattform zu verbinden heißt, eine Kette aufzubauen: Das Gerät liest einen Sensor aus, sendet den Messwert über ein Netz (Mobilfunk, WLAN, LoRaWAN oder Kabel), ein Cloud-Dienst empfängt und speichert ihn, und Dashboards, Alarme und Apps machen daraus Handlungen, bis hin zu Befehlen zurück an das Gerät. Die meisten Geräte sprechen mit der Cloud über MQTT, HTTP dient für einfache oder seltene Daten. Die Empfangsseite kann ein verwalteter Dienst wie AWS IoT Core oder Azure IoT Hub sein oder ein eigenes Backend; die richtige Wahl hängt davon ab, wie viele Geräte Sie haben und womit die Daten verbunden werden müssen.

Ob Sie Generatoren, Tanks, Kühlräume, Waagen oder Maschinen anbinden: Diese Entscheidungen sollten Sie treffen, bevor Sie Hardware kaufen.

## Die Kette vom Gerät zum Dashboard

Jedes System vernetzter Geräte hat dieselben sechs Glieder, und ein schwaches Glied bricht die ganze Kette.

1. **Gerät und Firmware.** Der Sensor oder die Steuerung und der Code darauf, der Messwerte erfasst, speichert und sich nach einem Ausfall neu verbindet.
2. **Konnektivität.** Wie die Daten den Standort verlassen: SIM-Karte, WLAN, ein Funknetz mit großer Reichweite oder ein Kabel.
3. **Datenannahme.** Der Cloud-Endpunkt, der die Identität jedes Geräts prüft und seine Nachrichten empfängt.
4. **Speicherung.** Eine Datenbank mit Messwerten nach Gerät und Zeit sowie dem aktuellen Zustand jedes Geräts.
5. **Dashboards, Alarme und Apps.** Die Oberflächen, mit denen Menschen arbeiten, und die Alarme, die sie erreichen, wenn ein Wert eine Grenze überschreitet oder ein Gerät verstummt.
6. **Fernbefehle.** Der Rückweg: eine Einstellung ändern, eine Einheit neu starten oder die Firmware aktualisieren, ohne vor Ort zu sein.

Unsere Plattform [GenTrack](/projects/gentrack) deckt die ganze Kette ab: eigene Hardware an jedem von mehr als 500 Mietgeneratoren in ganz Ägypten, Live-Standort auf der Karte, Erkennung von Kraftstoff-Anomalien, Fernverwaltung der Geräte und ein Cloud-ERP für das Vermietungsgeschäft. [Smart Balance](/projects/smart-balance) ist ein kleineres Beispiel derselben Idee: eine Waage mit Raspberry Pi, die das Gewicht live an eine mobile App überträgt.

## Konnektivität: wie die Daten das Gerät verlassen

Das Netz bestimmt, wo das Gerät installiert werden kann, wie viele Daten es senden kann und was der Betrieb kostet.

| Option | Reichweite | Datenmenge | Stromverbrauch | Laufende Kosten | Geeignet für |
|---|---|---|---|---|---|
| Mobilfunk 4G | Überall mit Netzabdeckung | Hoch | Hoch | Eine Daten-SIM pro Gerät | Bewegliche Anlagen, entlegene Standorte, häufige oder große Daten |
| LTE-M / NB-IoT | Mobilfunkabdeckung, in Gebäuden oft besser | Gering | Sehr gering | Eine SIM pro Gerät, wo der Netzbetreiber es anbietet | Batteriesensoren mit kleinen Messwerten |
| WLAN | Innerhalb eines Gebäudes | Hoch | Mittel bis hoch | Nutzt ein vorhandenes Netz | Fabriken, Läden, Büros, Kühlräume |
| LoRaWAN | Große Reichweite über ein Gateway | Sehr gering | Sehr gering | Gateways plus Netzwerkserver | Viele kleine Sensoren auf einem Hof oder großen Gelände |
| Kabel (Ethernet, RS-485) | Kabellänge | Hoch | Netzstrom | Nur Installation | Feste Maschinen und Schaltschränke |

LTE-M und NB-IoT gibt es nicht in jedem Netz, klären Sie das also mit dem Mobilfunkbetreiber, bevor Sie Hardware wählen. WLAN hängt vom Router eines anderen ab; ändert sich das Passwort, gehen die Geräte offline. Und alles mit Funk ist reguliert: Lassen Sie sich in Ägypten vom Anbieter bestätigen, dass das Modell von der Regulierungsbehörde für Telekommunikation (NTRA) zugelassen ist, und prüfen Sie in jedem anderen Land die örtlichen Regeln.

## MQTT oder HTTP, und wann Sie ein Gateway brauchen

**MQTT** ist ein offenes Nachrichtenprotokoll, das für Geräte entwickelt wurde. Das Gerät hält eine Verbindung zu einem Broker offen und veröffentlicht kleine Nachrichten unter Themen wie `site-12/generator-4/fuel`. Über dieselbe Verbindung kann die Cloud sofort Befehle zurückschicken, und das Protokoll kann die Zustellung von Nachrichten bestätigen, die nicht verloren gehen dürfen. Es passt zu Geräten, die oft senden oder Befehle empfangen müssen.

**HTTP** bedeutet eine normale Webanfrage pro Messwert oder Paket. Es ist einfach und kommt durch fast jede Firewall, was zu Geräten passt, die ein paar Mal am Tag senden oder Dateien hochladen. Seine Schwäche ist die Gegenrichtung: Die Cloud erreicht das Gerät erst, wenn das Gerät anfragt.

Ein **Gateway** sitzt zwischen den Geräten und dem Internet. Sie brauchen es, wenn die Geräte das Internet nicht selbst erreichen (LoRaWAN- oder Bluetooth-Sensoren, Maschinen mit einem Industrieprotokoll über Kabel) oder wenn eine Verbindung für einen Raum voller Sensoren günstiger ist als eine SIM in jedem. Es sammelt die Messwerte, puffert sie und leitet sie an die Cloud weiter.

## Verwaltete IoT-Plattform oder eigenes Backend?

Beides funktioniert, und die Abwägungen sind real.

| | Verwaltete Plattform (AWS IoT Core, Azure IoT Hub) | Eigenes Backend |
|---|---|---|
| Geräteidentität und Zertifikate | Eingebaut | Mit Standardbibliotheken gebaut |
| Sehr große Flotten | Dafür ausgelegt | Braucht sorgfältiges Design |
| Preise | Nutzungsabhängig; prüfen Sie die aktuelle Preisliste des Anbieters | Server- und Datenbankkosten, die Sie steuern |
| Anbieterbindung | Gerätecode und Regeln an einen Anbieter gebunden | Zwischen Hostern übertragbar |
| Geschäftslogik (Vermietung, Rechnungen, ERP) | Muss trotzdem darauf aufgebaut werden | Im selben System gebaut |

AWS IoT Core nimmt Geräte über MQTT, MQTT über WebSockets, HTTPS und LoRaWAN an. Azure IoT Hub führt ein Register aller Geräte und authentifiziert jedes mit einem Schlüssel oder einem X.509-Zertifikat. Auch Plattformen ändern sich: Google hat seinen Dienst Cloud IoT Core 2023 eingestellt, und die Unternehmen, die darauf aufgebaut hatten, mussten umziehen.

Eine verwaltete Plattform lohnt sich vor allem bei sehr großen Flotten oder für Teams, die ohnehin fest auf eine Cloud setzen. Bei Dutzenden oder Hunderten Geräten, deren Daten Aufträge, Vermietung, Rechnungen oder Wartung steuern sollen, ist ein eigenes Backend mit einem Standard-MQTT-Broker oft einfacher zu betreiben und hält alles an einem Ort. Unser [API- und Backend-Service](/services/api-and-backend) baut beide Varianten, und unser Artikel über das [Verbinden der Systeme, die Sie bereits nutzen](/blog/api-integration-connecting-business-systems) erklärt, wie die Daten anschließend in Ihr ERP oder Ihre Buchhaltung gelangen.

## Wenn die Verbindung abreißt: Pufferung und Zeitstempel

Verbindungen werden abreißen, im Keller, auf einer Wüstenstraße oder bei einer Störung. Ein gut gebautes Gerät arbeitet weiter:

- **Auf dem Gerät puffern.** Messwerte werden lokal gespeichert und nach der Wiederverbindung gesendet, die ältesten zuerst.
- **Zeitstempel an der Quelle.** Jeder Messwert trägt die Zeit der Messung, nicht die Zeit der Ankunft. Sonst kommt eine Lücke von drei Stunden als ein einziger Schwall an, der komplett nach „jetzt“ aussieht.
- **Die Uhr stimmt.** Das Gerät synchronisiert seine Uhr über das Netz oder GPS, und der Server weist offensichtlich falsche Zeiten zurück.
- **Die Lücke zeigen.** Das Dashboard markiert ein Gerät nach einer festgelegten Stille als offline, damit niemand Stille für „alles in Ordnung“ hält.

## Geräteidentität und Sicherheit

Ein vernetztes Gerät ist eine Tür in Ihr System. Behandeln Sie jedes wie einen Benutzer mit eigenem Login.

- **Eine Identität pro Gerät.** Jedes Gerät hat sein eigenes Zertifikat oder seinen eigenen Schlüssel, sodass ein gestohlenes oder geklontes Gerät allein gesperrt wird und nicht die ganze Flotte.
- **Verschlüsselte Verbindungen.** Jede Verbindung nutzt TLS, sodass Messwerte und Befehle unterwegs weder gelesen noch verändert werden können.
- **Minimale Rechte.** Ein Gerät darf nur seine eigenen Daten senden und nur seine eigenen Befehle empfangen.
- **Updates over the air (OTA).** Die Firmware wird aus der Ferne aktualisiert, signiert, damit Geräte nur echte Updates annehmen, und zuerst auf wenigen Geräten ausgerollt. Ein Gerät, das Sie nicht aktualisieren können, werden Sie irgendwann mit dem Auto besuchen.

## Datenmenge und Aufbewahrung

Rechnen Sie, bevor Sie eine Datenbank wählen. Ein Messwert pro Minute ergibt 1.440 Messwerte pro Tag und Gerät; hundert Geräte erzeugen 144.000 am Tag, rund 52 Millionen im Jahr. Eine Datenbank für Zeitreihendaten bewältigt das leicht, eine andere wird sich schwertun.

Legen Sie früh fest, wie lange Sie die volle Detailtiefe behalten. Ein verbreitetes Muster: Rohdaten einige Monate, danach stündliche oder tägliche Zusammenfassungen über Jahre.

## Wo die Daten gehostet werden

Sie wählen den Cloud-Anbieter und die Region, und die Konten sollten auf Ihren Namen laufen. Wählen Sie eine Region nahe an Geräten und Nutzern, und prüfen Sie, ob Ihre Branche oder Ihre Kunden verlangen, dass Daten in einem bestimmten Land bleiben. Betreffen die Daten Personen, etwa Standorte von Fahrern, gilt das Datenschutzrecht; siehe unseren Leitfaden zu den [Datenschutzregeln für Apps in Ägypten](/blog/egypt-data-protection-law-apps).

## Häufige Fragen

### Soll ich für meine Geräte MQTT oder HTTP verwenden?

MQTT, wenn Geräte oft senden oder Befehle schnell empfangen müssen; HTTP, wenn sie ein paar Mal am Tag senden und nie aus der Cloud erreicht werden müssen. Viele Systeme nutzen MQTT für Messwerte und Befehle und HTTP für Datei-Uploads.

### Brauche ich AWS IoT Core oder Azure IoT Hub?

Nein. Beides sind gute Dienste, besonders für sehr große Flotten, aber ein eigenes Backend mit einem Standard-MQTT-Broker funktioniert ebenfalls gut und lässt sich oft leichter mit Ihren Geschäftssystemen verbinden. Entscheiden Sie nach Flottengröße, den Fähigkeiten Ihres Teams und danach, wie stark Sie von einem Anbieter abhängen möchten.

### Können wir Geräte anbinden, die wir bereits besitzen?

Oft ja. Viele Maschinen und Steuerungen geben ihre Daten bereits über ein Kabel oder ein lokales Netz aus, und ein Gateway kann sie auslesen und an die Cloud weiterleiten. Der erste Schritt ist herauszufinden, was jedes Gerät ausgeben kann.

### Wie fangen wir an?

Mit einem Pilotprojekt auf wenigen Geräten, um Messwerte, Konnektivität und Alarme vor Ort zu prüfen, bevor Sie jede Einheit ausstatten. Unser Artikel darüber, [wie IoT Betriebskosten senkt](/blog/iot-reduce-operating-costs), hilft bei der Entscheidung, was Sie zuerst messen sollten, und unser Leitfaden zu [Flottenortungssystemen](/blog/fleet-tracking-system-egypt) zeigt dieselbe Kette am Beispiel von Fahrzeugen.

## Sprechen Sie mit uns über Ihre Geräte

KF Tech Solutions baut IoT-Systeme entlang der ganzen Kette: Geräteeinrichtung und Firmware, das Cloud-Backend, Web-Dashboards, mobile Apps, Alarme und Fernverwaltung der Geräte. Der Quellcode und die Cloud-Konten gehören Ihnen, und wir stellen das System beim Anbieter und in der Region bereit, die Sie wählen. Mehr dazu in unserem [IoT-Lösungen-Service](/services/iot-solutions). Wir arbeiten mit Unternehmen in Ägypten und am Golf.

Wenn Sie Geräte anbinden möchten oder ein System haben, das schon Daten verliert, [buchen Sie ein kostenloses Gespräch](/book) oder [schildern Sie uns Ihr Projekt](/contact). Wir schlagen Ihnen die Konnektivität, das Protokoll und die Plattform vor, die zu Ihrem Fall passen.

## Quellen

- [MQTT.org: der MQTT-Standard](https://mqtt.org/)
- [AWS IoT Developer Guide: What is AWS IoT?](https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html)
- [Microsoft Learn: Was ist Azure IoT Hub?](https://learn.microsoft.com/de-de/azure/iot-hub/iot-concepts-and-iot-hub)
- [National Telecom Regulatory Authority (NTRA), Ägypten](https://www.tra.gov.eg/)
- [KF Tech Solutions: Fallstudie GenTrack](/projects/gentrack)
