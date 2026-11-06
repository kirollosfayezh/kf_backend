---
title: Ein KI-Assistent, der aus Ihren eigenen Dokumenten antwortet
summary: Wie ein KI-Chatbot auf Ihrer Website aus Ihren Dateien antwortet, Quellen nennt, klare Grenzen einhält, an Mitarbeiter übergibt und Arabisch-Tests besteht.
tags: KI-Chatbot, Website-Chatbot, Kundenservice, Dokumentensuche, Arabisch, Ägypten
alt: Ein hoher Stapel bedruckter Blätter mit rosa, orangefarbenen und grünen Haftmarkern
caption: Die Antworten, die Ihre Kunden brauchen, stehen bereits in Ihren Dokumenten; ein Assistent sollte sie zitieren, nicht erfinden.
stats: 1|Quelle bei jeder Antwort; 0|Antworten, wenn Ihre Dokumente schweigen; 2|Sprachen, die vor dem Start getestet werden: Arabisch und Englisch
---

Ein KI-Chatbot auf Ihrer Website kann Kunden aus Ihren eigenen Dokumenten antworten: Preislisten, Richtlinien, Produktblätter und FAQs. Bei jeder Frage durchsucht er diese Dokumente und formuliert die Antwort nur aus dem, was er dort findet, mit einem Link zur Quelle. Wenn die Dokumente eine Frage nicht abdecken, sagt ein gut gebauter Assistent das offen und übergibt das Gespräch an einen Menschen, statt zu raten.

Ein allgemeiner Chatbot antwortet aus dem, was er im Internet gelernt hat; Ihrer sollte nur aus dem antworten, was Ihr Unternehmen schriftlich festgehalten hat. Hier lesen Sie, wie das funktioniert, was es kostet und wie Sie es vor dem Start auf Arabisch testen.

## So funktioniert es: erst suchen, dann antworten

Der Assistent lernt Ihre Dateien nicht auswendig. Stellt ein Kunde eine Frage, durchsucht das System Ihre Dokumente, wählt die wenigen Abschnitte aus, die die Antwort am wahrscheinlichsten enthalten, und gibt sie dem Sprachmodell mit einer einzigen Anweisung: Antworte nur aus diesen Abschnitten. Dieser Ansatz heißt meist Retrieval-Augmented Generation, kurz RAG.

Den Assistenten zu aktualisieren heißt also, ein Dokument zu aktualisieren, nicht ein Modell neu zu trainieren. Und die Antworten können nie besser sein als die Dokumente dahinter.

### Welche Dokumente Sie ihm geben

Beginnen Sie mit dem Material, mit dem Ihre Mitarbeiter Kunden bereits antworten:

- **Leistungs- und Produktbeschreibungen**, mit dem, was enthalten ist und was nicht.
- **Preise und Pakete**, sofern Sie diese öffentlich nennen möchten.
- **Richtlinien**: Lieferung, Rückgabe, Garantie, Stornierung und Öffnungszeiten.
- **Ihre bestehende FAQ** und die Fragen, die Ihr Team täglich am Telefon und per WhatsApp beantwortet.
- **Anleitungen** zu Ihrem Produkt oder Ihrer Leistung.

Lassen Sie alles weg, was ein Kunde nicht lesen soll, etwa Kostenaufstellungen, Mitarbeiterdaten und Verträge mit anderen Kunden: Was abgerufen werden kann, kann auch zitiert werden. Zwei Preislisten aus verschiedenen Jahren ergeben zwei verschiedene Antworten.

## Antworten mit Quellenangabe

Jede Antwort sollte das Dokument nennen, aus dem sie stammt, idealerweise mit einem Link zur Seite oder zum Abschnitt. Der Kunde kann das Detail vor dem Bezahlen prüfen. Ihr Team sieht bei jeder falschen Antwort, ob das Dokument falsch war oder der Assistent es falsch gelesen hat, und korrigiert die richtige Stelle.

Die Quellenangabe ist zugleich ein einfacher Ehrlichkeitstest: Kann der Assistent auf keinen Abschnitt verweisen, sollte er nicht antworten. Diese Regel wird in den Anweisungen festgelegt und im Test geprüft, nicht einfach vorausgesetzt.

## Leitplanken: was er nicht tun darf

Legen Sie die Grenzen vor dem Bau fest und halten Sie sie schriftlich fest:

- **Beim Thema bleiben.** Nur Fragen zu Ihrem Unternehmen; kein allgemeiner Plausch, keine Hausaufgaben, keine Meinungen.
- **Keine erfundenen Fakten.** Antworten die Dokumente nicht, sagt er das und bietet einen Menschen an.
- **Keine Zusagen.** Er darf die veröffentlichte Preisliste nennen, gewährt aber keine Rabatte, bestätigt keine Erstattungen und verspricht keine Termine, die niemand freigegeben hat.
- **Keine personenbezogenen Daten in Antworten.** Er gibt nie Daten anderer Kunden preis und fragt nur ab, was für die Übergabe nötig ist.
- **Manipulation widerstehen.** Nutzer werden Nachrichten wie „Ignoriere deine Anweisungen“ ausprobieren. Die OWASP Top 10 für LLM-Anwendungen führen Prompt Injection auf Platz eins, neben der Offenlegung sensibler Informationen und Fehlinformationen.

Ein Teil dieser Regeln sind Anweisungen an das Modell; der Rest ist gewöhnlicher Code: Grenzen für die Daten, auf die er zugreifen kann, und ein Protokoll jedes Gesprächs.

## Übergabe an einen Menschen

Ein guter Assistent übergibt, wenn der Kunde nach einem Menschen fragt, wenn die Dokumente keine Antwort enthalten, wenn es um eine Beschwerde, Erstattung oder Zahlung geht oder wenn der Kunde dieselbe Frage wiederholt.

Das Gespräch sollte mit der Übergabe mitwandern, damit der Kunde nicht von vorn beginnt. Außerhalb der Geschäftszeiten sagt der Assistent, wann sich jemand meldet, und nimmt Name und Telefonnummer auf. Auf WhatsApp gilt dieselbe Logik; unser Leitfaden zu [einem WhatsApp-Chatbot für Ihr Unternehmen in Ägypten](/blog/whatsapp-chatbot-for-business-egypt) behandelt diesen Kanal.

## Was jedes Gespräch kostet

Anbieter von KI-Modellen rechnen nach der verarbeiteten Textmenge ab, gezählt in Tokens. Jedes Gespräch hat daher kleine Kosten, die von seiner Länge und vom abgerufenen Text abhängen. Hinzu kommen Hosting, der Suchindex und auf WhatsApp die Nachrichtengebühren der Plattform, erklärt in [WhatsApp Business API: Preise](/blog/whatsapp-business-api-pricing).

| Kostentreiber | Was ihn erhöht | Wie Sie ihn senken |
| --- | --- | --- |
| Modellwahl | Ein großes Modell für jede Frage | Ein kleineres Modell für Routinefragen, ein größeres nur bei Bedarf |
| Abgerufener Text | Ganze Dokumente bei jeder Frage mitsenden | Nur die wenigen relevantesten Abschnitte senden |
| Gesprächslänge | Lange Chats, die den ganzen Verlauf erneut senden | Ältere Nachrichten kürzen oder zusammenfassen |
| Missbrauch | Bots oder Nutzer, die stundenlang fachfremd chatten | Themengrenzen und Nachrichtenlimits pro Nutzer |
| Kanal | Nachrichtengebühren auf WhatsApp | Die Preise des Kanals vor der Wahl kennen |

OWASP führt auch „Unbounded Consumption“ als Risiko: Ohne Obergrenzen kann ein einzelner missbräuchlicher Nutzer eine echte Rechnung verursachen. Legen Sie ein monatliches Ausgabenlimit und eine Warnung bei ungewöhnlichem Volumen fest.

## Arabische Antworten vor dem Start testen

Beurteilen Sie einen arabischen Assistenten nicht, indem Sie selbst ein paar Fragen ausprobieren. Stellen Sie einen Testsatz aus rund hundert echten Fragen aus Ihren WhatsApp-Chats, E-Mails und Gesprächsnotizen zusammen und notieren Sie zu jeder die richtige Antwort und Quelle. Berücksichtigen Sie, wie Kunden tatsächlich schreiben:

- Hocharabisch und den Dialekt des Kunden, ägyptisch oder aus der Golfregion.
- Arabisch in lateinischen Buchstaben und Ziffern (Arabizi).
- Arabisch und Englisch in einer Nachricht, besonders bei Produktnamen.
- Schreibvarianten wie ة und ه, ى und ي oder أ und ا.
- Ostarabische neben westlichen Ziffern in Preisen und Telefonnummern.

Bewerten Sie jede Antwort: richtig, korrekt belegt, korrekt abgelehnt oder übergeben und in klarem Arabisch formuliert. Lassen Sie eine arabischsprachige Person in Ihrem Team die Antworten lesen und führen Sie denselben Testsatz erneut aus, sobald Sie Dokumente, Anweisungen oder das Modell ändern. Auch das freiwillige NIST AI Risk Management Framework behandelt dies als laufende Aufgabe: Risiken messen und steuern sind zwei seiner vier Kernfunktionen.

## Was KF Tech Solutions hier leistet

Wir bauen KI-Assistenten, die Kunden aus den eigenen Informationen eines Unternehmens auf der Website oder auf WhatsApp antworten, auf Arabisch und Englisch, und bei Bedarf an einen Menschen übergeben. Wir beginnen mit einem kurzen Test an Ihren echten Fragen, um zu messen, wie oft die Antworten stimmen, bevor wir die vollständige Integration bauen. Mehr dazu auf unserer Seite [KI-Lösungen](/services/ai-solutions) und in unserem [praktischen Leitfaden zum Einsatz von KI im Unternehmen](/blog/a-practical-guide-to-adding-ai-to-your-business). Wir arbeiten mit Unternehmen in Ägypten und am Golf.

## Häufige Fragen

### Wird der Assistent Antworten erfinden?

Jedes Sprachmodell kann sich irren. Sie senken das Risiko, indem Sie ihn auf Ihre Dokumente beschränken, zu jeder Antwort eine Quelle verlangen und testen, dass er ablehnt, wenn die Dokumente schweigen.

### Muss ich die KI neu trainieren, wenn sich meine Preise ändern?

Nein. Sie aktualisieren das Dokument, der Suchindex wird erneuert, und die nächste Antwort nutzt den neuen Text. Entfernen Sie alte Fassungen, damit der Assistent nicht beide findet.

### Kann er auf Arabisch antworten, wenn meine Dokumente auf Englisch sind?

Oft ja, die Qualität schwankt aber; testen Sie es daher mit Ihren eigenen Fragen. Bei Preisen und Richtlinien liefert eine arabische Fassung des Dokuments verlässlichere Formulierungen.

### Werden meine Daten zum Training des Modells verwendet?

Das hängt vom Anbieter und vom Tarif ab. Lesen Sie dessen Bedingungen zur Datennutzung für geschäftliche Kunden und geben Sie dem Assistenten nur die Dokumente, die er braucht.

### Gehört er auf die Website oder auf WhatsApp?

Beginnen Sie dort, wo die meisten Fragen bereits ankommen. Derselbe Assistent und dieselben Dokumente können beide Kanäle bedienen; nur die Oberfläche und die laufenden Kosten unterscheiden sich.

Haben Sie einen Ordner mit Dokumenten, aus dem Ihr Team täglich antwortet? [Buchen Sie ein kostenloses Gespräch](/book), und wir prüfen, welche Fragen ein Assistent übernehmen könnte, oder [schreiben Sie uns](/contact).

## Quellen

- [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
