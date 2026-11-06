---
title: Tabby und Tamara in Shop oder App integrieren: Was nötig ist
summary: Was die Anbindung von Tabby oder Tamara wirklich umfasst: Plugin, Gateway oder direkte API, Prüfung auf dem Server, Webhooks, Teilerstattungen und Abgleich.
tags: Tabby, Tamara, BNPL, Zahlungsintegration, E-Commerce, Saudi-Arabien
alt: Eine junge Frau auf einem Sofa hält eine Bankkarte in der einen und ein Smartphone in der anderen Hand
caption: Für die Käuferin ist die Ratenzahlung ein Tippen; Erstattungen, Teilretouren und Abgleich sind Arbeit des Händlers.
stats: 2|BNPL-Anbieter, die SAMA 2025 lizenziert hat; 21|Tage, nach denen Tabby eine nicht erfasste Zahlung selbst erfassen kann; 0|Bestellungen, die allein auf Grund der Weiterleitung versandt werden sollten
---

Tabby oder Tamara in einen Shop oder eine App einzubinden, ist mehr als ein Button im Checkout. Ihr Server erstellt eine Checkout-Sitzung, bestätigt die Zahlung direkt beim Anbieter, bevor etwas versandt wird, erfasst sie, wenn die Bestellung erfüllt ist, löst Erstattungen und Teilrückgaben über die API des Anbieters aus und gleicht dessen Auszahlungen mit Ihren Bestellungen ab. Auf Salla, Zid, Shopify, WooCommerce oder Magento übernimmt ein Plugin einen Großteil davon; in einem individuellen Shop oder einer mobilen App bauen Sie es selbst, entweder direkt oder über ein Gateway, das beide anbietet.

Zuletzt geprüft: 6. November 2026

## Beide Anbieter sind inzwischen von SAMA lizenziert

Die saudische Zentralbank (SAMA) hat **Tamara Finance** am 3. März 2025 für Verbraucherfinanzierung und „Buy now, pay later“ (BNPL) lizenziert und **Tabby Finance** am 10. November 2025 für BNPL. Beide Mitteilungen stehen auf der Website der SAMA und sind unten in den Quellen verlinkt.

An der technischen Arbeit ändert das nichts, wohl aber an den Formalitäten. Sie schließen einen Vertrag mit einem regulierten Finanzunternehmen, rechnen Sie also mit einer Prüfung Ihres Unternehmens und Ihrer Produkte beim Onboarding. Händlergebühr, Auszahlungsrhythmus und Erstattungsregeln stehen in der Vereinbarung, die Sie mit jedem Anbieter unterzeichnen. Lassen Sie sich diese vor Beginn der Entwicklung schriftlich geben, denn sie bestimmen, was Ihr Abgleichsbericht prüfen muss.

Dieser Artikel bietet allgemeine Informationen zur Funktionsweise der Integration auf Grundlage der öffentlichen Entwicklerdokumentation beider Anbieter. Er ist keine Finanz- oder Rechtsberatung.

## Plugin, Gateway oder direkte API

Es gibt drei Wege, Tabby oder Tamara Ihren Kunden anzubieten. Welcher passt, hängt davon ab, worauf Ihr Shop oder Ihre App aufgebaut ist.

| Weg | Passt für | Was bei Ihnen bleibt |
|---|---|---|
| Plattform-Plugin | Shops auf Salla, Zid, Shopify, WooCommerce oder Magento | Einstellungen, Tests, Erstattungen über die Plattform oder das Portal des Anbieters |
| Zahlungs-Gateway | Individuelle Shops und Apps, die bereits ein Gateway nutzen | Die API des Gateways, seine Webhooks und sein Auszahlungsbericht |
| Direkte API | Individuelle Shops, mobile Apps, Marktplätze, an ein Kassensystem gekoppelte Bestellungen | Alles: Sitzungen, Prüfung, Webhooks, Erfassung, Erstattungen, Abgleich |

**Plugins.** Die Dokumentation von Tabby enthält Einrichtungsseiten für Shopify, WooCommerce, Magento 2, Salla und Zid. Läuft Ihr Shop bereits auf einer dieser Plattformen, beginnen Sie dort und prüfen Sie den entsprechenden Abschnitt der Tamara-Dokumentation. Unser Vergleich von [Salla, Zid und Shopify](/blog/salla-vs-zid-vs-shopify) behandelt die Wahl der Plattform selbst.

**Gateways.** Einige Gateways in Saudi-Arabien führen BNPL unter ihren Zahlungsarten. Tap bezeichnet sich als „a payment institution licensed by the Saudi Central Bank“ und nennt mada, Apple Pay, Tabby und Tamara. PayTabs nennt mada, STC Pay, Apple Pay, Tabby und Tamara. Telr nennt mada, Apple Pay und Tabby. Ein Gateway bedeutet eine Integration und einen Auszahlungsbericht für Karten und BNPL zusammen. Klären Sie vorher, was es bei BNPL für Teilerfassungen und Erstattungen unterstützt. Unser Leitfaden zu [Zahlungs-Gateways in Saudi-Arabien](/blog/payment-gateways-saudi-arabia) vergleicht die Optionen.

**Direkte API.** Ein individueller Shop oder eine mobile App kann direkt an die API jedes Anbieters angebunden werden. Das ist der größte Aufwand, dafür erhalten Sie den vollen Funktionsumfang des Anbieters und sein eigenes Händler-Dashboard. Der Rest dieses Artikels beschreibt diese Arbeit; das meiste davon sollten Sie auch testen, wenn Sie ein Plugin oder Gateway nutzen.

## Wie eine BNPL-Zahlung ihre Status durchläuft

Beide Anbieter bilden eine Zahlung als Folge von Status ab. Ihr Bestellsystem muss jeden davon einem eigenen Status zuordnen, damit niemand eine Bestellung als bezahlt markiert, bevor der Anbieter sie bestätigt hat.

| Was passiert ist | Status bei Tabby | Status bei Tamara |
|---|---|---|
| Kunde hat den Checkout begonnen | CREATED | new |
| Kunde hat den Checkout abgeschlossen | AUTHORIZED | approved, dann authorised |
| Kunde hat abgebrochen oder wurde nicht genehmigt | EXPIRED oder REJECTED | expired oder declined |
| Sie haben die Bestellung erfasst | CLOSED | fully_captured oder partially_captured |
| Sie haben vor der Erfassung storniert | autorisierte Zahlung stornieren | canceled, oder updated bei Teilstornierung |
| Sie haben nach der Erfassung erstattet | Erstattung auf einer CLOSED-Zahlung | fully_refunded oder partially_refunded |

Die Namen unterscheiden sich, der Ablauf ist gleich: ein Checkout, eine Genehmigung, eine Erfassung bei Erfüllung der Bestellung und Erstattungen bis zur Höhe des erfassten Betrags.

## Checkout und Webhooks

### Verlassen Sie sich nie allein auf die Weiterleitung

Der Checkout beginnt auf Ihrem Server. Er sendet Bestellung, Betrag und Kundendaten an den Endpunkt zur Sitzungserstellung des Anbieters und erhält einen Link, zu dem der Kunde geleitet wird. Danach schickt der Anbieter den Kunden zurück auf Ihre Erfolgs-, Abbruch- oder Fehlerseite.

Diese Weiterleitung ist kein Zahlungsnachweis. Die Dokumentation von Tabby ist hier deutlich: „Never rely on the redirect alone — always verify the payment server-to-server before processing the order.“ Ihr Server ruft die Zahlung ab und prüft ihren Status, bevor die Bestellung bestätigt wird. Bei Tamara wird die Bestellung approved, sobald der Kunde den Checkout abschließt; danach ruft Ihr Server den Autorisierungs-Endpunkt auf, sofern für Ihr Konto keine automatische Autorisierung aktiviert ist. Laut Tamara-Dokumentation verfällt eine Bestellung, wenn der Kunde die Zahlung nicht innerhalb von 30 Minuten nach Erstellung der Sitzung abschließt.

Manche Kunden schließen den Browser vor der Weiterleitung. Ihre Zahlung ist trotzdem genehmigt, also muss Ihr System auf anderem Weg davon erfahren: über Webhooks, mit regelmäßiger Abfrage als Rückfallebene.

### Webhooks kommen spät, doppelt oder in falscher Reihenfolge

Ein Webhook ist eine Nachricht, die der Anbieter an Ihren Server sendet, wenn sich der Status einer Zahlung ändert. Die Tabby-Dokumentation warnt, dass „the delivery order is not guaranteed and the same event may occasionally arrive twice“ und dass ein closed-Ereignis vor dem authorized-Ereignis eintreffen kann. Ein Webhook mit Zeitüberschreitung wird bis zu viermal erneut gesendet.

In der Praxis sollte Ihr Webhook-Handler:

- den von Ihnen registrierten Authentifizierungs-Header prüfen, damit er nur Nachrichten des Anbieters annimmt.
- das Rohereignis vor der Verarbeitung speichern, damit ein Prüfpfad bleibt.
- ein bereits verarbeitetes Ereignis ignorieren, damit ein Duplikat nie zu einem doppelten Versand führt.
- die Zahlung erneut über die API abrufen, wenn die Reihenfolge zählt, statt der Eingangsreihenfolge zu vertrauen.
- schnell antworten und langsame Arbeit danach erledigen, damit der Anbieter nicht in eine Zeitüberschreitung läuft und erneut sendet.

Das sind dieselben Regeln, die wir bei jeder Integration anwenden. Unser Artikel über das [Verbinden der Systeme, die Sie bereits nutzen](/blog/api-integration-connecting-business-systems), behandelt sie allgemeiner.

## Erfassung, Stornierung und Teilrückgaben

**Die Erfassung** teilt dem Anbieter mit, dass Sie die Bestellung erfüllt haben, und sie löst Ihre Auszahlung aus. Tabby schreibt, dass „only captured payments are settled to you“, und laut Tamara gilt die Erfassung als Bestätigung, dass der Bestellbetrag der nächsten Auszahlung an den Händler hinzugefügt wird. Tabby empfiehlt eine vollständige Erfassung direkt nach der Prüfung, unterstützt aber auch Teilerfassungen. Tamara unterstützt vollständige oder teilweise Erfassung beim Versand. Beide beschreiben eine Frist von 21 Tagen, nach der der Anbieter eine autorisierte Bestellung selbst erfassen kann, sodass eine in Ihrem System vergessene Bestellung nicht ewig offen bleibt.

**Die Stornierung** erfolgt vor der Erfassung. Bei Tamara können nur autorisierte Bestellungen storniert werden, ganz oder teilweise. Eine Teilstornierung ist der richtige Weg, wenn ein Artikel nach der Zahlung des Kunden nicht mehr vorrätig ist.

**Erstattungen** erfolgen nach der Erfassung. Bei Tabby kann eine Zahlung mehrfach erstattet werden, aber „the total cannot exceed the captured amount“. Erstattungen müssen innerhalb von 180 Tagen nach Erstellung der Zahlung beginnen, und eine verarbeitete Erstattung kann nicht storniert werden. Eine Teilerstattung verringert zuerst die verbleibenden Raten des Kunden. Bei Tamara sind Erstattungen ganz oder teilweise auf erfasste Bestellungen möglich, über die API oder das Partnerportal.

Teilrückgaben sind die Stelle, an der die meisten Integrationen scheitern. Ein Kunde gibt einen von drei Artikeln zurück, das Lager bucht ihn ein, aber niemand löst die Teilerstattung aus. Oder sie wird doppelt gesendet: einmal aus dem Portal des Anbieters und einmal aus Ihrem System. Legen Sie eine einzige Stelle fest, an der Erstattungen beginnen, meist Ihr Bestellsystem oder Ihr Admin-Bereich, und lassen Sie diese den API-Aufruf senden und das Ergebnis speichern. Unser [Leitfaden zum Onlineshop](/blog/online-store-egypt-payments-and-delivery) beschreibt dasselbe Problem bei Kartenzahlung und Nachnahme.

## Abgleich und Tests

Jede erfasste Bestellung sollte in einer Auszahlung des Anbieters landen, und jede Erstattung sollte eine Auszahlung verringern. Um das zu prüfen, brauchen Sie:

- die Zahlungs- oder Bestell-ID des Anbieters, gespeichert zu Ihrer eigenen Bestellnummer. Tamara bietet zudem einen Endpunkt, um Ihre Bestellreferenz nach dem Checkout zu aktualisieren.
- einen Eintrag für jede Erfassung und Erstattung mit Betrag und Datum.
- einen regelmäßigen Bericht, der diese Summen mit dem Auszahlungsbericht des Anbieters, den Gebühren aus Ihrer Vereinbarung und dem Eingang auf Ihrem Bankkonto vergleicht.

Ohne das sieht eine vergessene Erfassung wie eine fehlende Zahlung aus, und eine doppelte Erstattung fällt erst auf, wenn der Kunde sie bemerkt.

Nutzen Sie vor dem Start die Testumgebungen der Anbieter. Tabby veröffentlicht Testzugangsdaten und eine vollständige Testcheckliste. Tamara veröffentlicht Testszenarien, einen Testleitfaden für Saudi-Arabien und eine Go-live-Checkliste. Testen Sie auch die unangenehmen Fälle: einen abgelehnten Kunden, einen geschlossenen Browser, einen doppelten Webhook und eine Teilrückgabe. Tabby sendet außerdem Webhooks, wenn ein Kunde eine erfasste Zahlung beanstandet; legen Sie fest, wer in Ihrem Team sie erhält.

## Was KF Tech Solutions hier übernimmt

KF Tech Solutions entwickelt individuelle Onlineshops, mobile Apps und die Backends dahinter und verbindet sie über deren APIs mit anderen Diensten. Bei BNPL bedeutet das: die Checkout-Sitzung, die Prüfung auf dem Server, einen Webhook-Handler, der Duplikate verträgt, Erfassungs- und Erstattungsaktionen in Ihrem Admin-Bereich sowie einen Abgleichsbericht. Wir arbeiten mit Unternehmen in Ägypten und am Golf; siehe unsere [Seite zu Saudi-Arabien](/saudi-arabia) und unseren [API- und Backend-Service](/services/api-and-backend). Wir sind kein Partner von Tabby oder Tamara: Sie unterzeichnen die Händlervereinbarung direkt mit jedem Anbieter, und das Händlerkonto bleibt auf Ihren Namen.

## Häufige Fragen

### Brauche ich ein Zahlungs-Gateway, oder kann ich Tabby und Tamara direkt anbinden?

Beides funktioniert. Ein Gateway, das beide anbietet, erspart Ihnen getrennte Integrationen und liefert einen gemeinsamen Bericht; das passt zu einem Shop, der es bereits für Karten nutzt. Eine direkte Anbindung bietet den vollen Funktionsumfang und das Dashboard jedes Anbieters, erfordert aber Aufbau und Pflege von zwei Integrationen.

### Kann ich Tabby und Tamara gleichzeitig im Checkout anbieten?

Technisch ja. Es sind getrennte Integrationen mit getrennten Händlervereinbarungen, und Ihr Checkout kann beide anzeigen. Jede braucht eigene Sitzungen, eigene Webhook-Verarbeitung und einen eigenen Abgleich. Prüfen Sie vor der Umsetzung, dass keine der Vereinbarungen dies einschränkt.

### Kann ein Kunde einen Teil der Bestellung zurückgeben?

Ja. Beide Anbieter unterstützen Teilerstattungen auf erfasste Bestellungen und Teiländerungen vor der Erfassung: eine Teilerfassung oder bei Tamara eine Teilstornierung. Ihr System muss den richtigen Betrag genau einmal senden und speichern.

### Wer zieht die Raten beim Kunden ein?

Der Anbieter. Sie erhalten die Auszahlung für die erfassten Bestellungen gemäß Ihrer Vereinbarung, und der Kunde zahlt an den Anbieter. Eine von Ihnen gesendete Erstattung verringert, was der Kunde dem Anbieter noch schuldet.

### Was sollte ich vor Beginn der Entwicklung beim Anbieter erfragen?

Die Händlergebühr, den Auszahlungsrhythmus und das Format des Auszahlungsberichts, die Regeln für Erstattungen und Beanstandungen sowie Testzugangsdaten. Davon hängt ab, wie Ihre Logik für Erfassung, Erstattung und Abgleich arbeiten muss.

Wenn Sie Tabby oder Tamara in einen individuellen Shop oder eine App einbinden oder eine bestehende Integration prüfen lassen möchten, [kontaktieren Sie uns](/contact) oder [buchen Sie ein kostenloses Gespräch](/book).

## Quellen

- [SAMA: Lizenz für Tamara Finance (3. März 2025)](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx)
- [SAMA: Lizenz für Tabby Finance (10. November 2025)](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)
- [Tabby: Zahlungsverarbeitung](https://docs.tabby.ai/pay-in-4-custom-integration/payment-processing.md)
- [Tabby: Zahlungs-Webhooks](https://docs.tabby.ai/pay-in-4-custom-integration/webhooks.md)
- [Tabby: Zahlungsstatus](https://docs.tabby.ai/pay-in-4-custom-integration/payment-statuses.md)
- [Tabby: Index der Entwicklerdokumentation](https://docs.tabby.ai/llms.txt)
- [Tamara: Statusablauf von Online-Bestellungen](https://docs.tamara.co/docs/online-order-status-flow.md)
- [Tamara: Bestellung autorisieren](https://docs.tamara.co/reference/authoriseorder.md)
- [Tamara: Bestellung stornieren](https://docs.tamara.co/reference/cancelorder.md)
- [Tamara: Go-live-Checkliste](https://docs.tamara.co/docs/online-go-live-testing-checklist.md)
- [Tap Payments](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
- [Telr](https://telr.com/)
