---
title: Was Ihnen am Ende eines Softwareprojekts gehören sollte
summary: Eine Übergabe-Checkliste für Unternehmer: Code, Konten, App-Store-Einträge, Passwörter, Dokumentation und Backups, die Sie vor der Schlusszahlung brauchen.
tags: Softwareübergabe, Quellcode, App Store, Google Play, Dokumentation, Ägypten, Golfstaaten
alt: Eine Hand hält einen Schlüsselbund vor einer geöffneten weißen Tür
caption: Ein abgeschlossenes Projekt sollte Ihnen jeden Schlüssel übergeben: Code, Cloud- und Domain-Konten, Store-Einträge und Backups.
stats: 4|Konten auf Ihren Namen: Code, Cloud, Domain, App-Stores; 2|App-Stores, in denen ein Entwickler die App auf Ihr Konto übertragen kann; 1|Test, der die Übergabe beweist: ein sauberer Neuaufbau
---

Am Ende eines Softwareprojekts sollte Ihnen Folgendes gehören: der vollständige Quellcode in einem Repository unter Ihrem Konto, jedes Konto, auf dem das System läuft (Cloud, Domain, E-Mail, App-Stores, Zahlungsdienste), die Zugangsdaten zu all diesen Konten, eine schriftliche Dokumentation und ein aktuelles Backup Ihrer Daten. Liegt einer dieser Punkte nur beim Entwickler, haben Sie die Software, die Sie bezahlt haben, nicht vollständig in der Hand. Lassen Sie sich alles vor der Schlusszahlung übergeben, nicht danach.

Zuletzt geprüft: 6. November 2026

Ein Vertrag regelt, worauf Sie Anspruch haben. Diese Checkliste beschreibt, was Sie tatsächlich erhalten sollten. Wenn Sie noch vor der Vertragsunterzeichnung stehen, lesen Sie zuerst [neun Punkte, die Sie in einem Softwareentwicklungsvertrag prüfen sollten](/blog/software-development-contract-what-to-check).

## Was „Quellcode übergeben“ bedeuten sollte

„Wir übergeben den Quellcode“ klingt eindeutig, endet aber oft mit einer ZIP-Datei, die am letzten Tag per E-Mail kommt. Das reicht nicht. Der Quellcode gilt als übergeben, wenn:

- **er in einem Git-Repository liegt, das Ihnen gehört**, auf GitHub, GitLab oder Bitbucket, mit vollständiger Historie statt eines einzelnen Stands.
- **er vollständig ist.** Dazu gehören Backend, Website, Admin-Bereich, mobile Apps und alle Skripte, nicht nur der sichtbare Teil.
- **er sich bauen lässt.** Jemand, der das Projekt nie gesehen hat, kann der Anleitung folgen und eine lauffähige Kopie erstellen.
- **nichts fehlt, wovon er abhängt**: Konfigurationsvorlagen, Datenbankmigrationen und eine Liste aller externen Dienste, die er aufruft.
- **keine Geheimnisse darin stehen.** Passwörter und API-Schlüssel gehören an einen separaten, dokumentierten Ort, nicht in die Codedateien.

Auf GitHub kann ein Entwickler ein Repository auf Ihr Konto oder Ihre Organisation übertragen; Issues, Pull Requests und die gesamte Commit-Historie wandern mit. Links auf den alten Ort werden auf den neuen umgeleitet. So erhalten Sie Code, der im Konto des Entwicklers begonnen wurde, am saubersten.

## Die Konten, die auf Ihren Namen laufen müssen

Die meisten Übergabeprobleme betreffen nicht den Code, sondern Konten, die der Entwickler „der Einfachheit halber“ eröffnet und nie übertragen hat. Ein Jahr später ist der Entwickler nicht erreichbar, die Domain läuft ab und niemand kann sie verlängern.

| Bestandteil | Auf wessen Namen | Was passiert, wenn nicht |
| --- | --- | --- |
| Code-Repository | Konto oder Organisation Ihres Unternehmens | Sie können niemand anderen mit Änderungen beauftragen |
| Domain | Ihr Unternehmen, Ihre E-Mail als Kontakt | Website und Firmen-E-Mail fallen beim Ablauf aus |
| Hosting und Cloud | Ihr Konto, Ihre Zahlungskarte | Server können abgeschaltet oder bei einem Streit zurückgehalten werden |
| Datenbank und Dateispeicher | In Ihrem Cloud-Konto | Ihre Kundendaten liegen bei einem Dritten |
| Firmen-E-Mail und DNS | Ihr Konto | Sie verlieren die E-Mail und können die Domain nicht umleiten |
| App Store und Google Play | Entwicklerkonten Ihres Unternehmens | Die App lässt sich ohne den Entwickler nicht aktualisieren |
| Zahlungsanbieter, SMS, WhatsApp, Karten | Ihr Unternehmen, Ihre Verträge | Zahlungen oder Nachrichten stoppen, oder Geld landet auf dem falschen Konto |
| Analytics und Search Console | Ihr Konto, Entwickler als Nutzer | Sie verlieren Ihre Besucherhistorie |

Das Muster ist in jeder Zeile gleich: Ihnen gehört das Konto, der Entwickler ist als Nutzer hinzugefügt, dessen Zugang Sie entziehen können. Braucht er für eine Einrichtung die Inhaberrolle, geht sie nach Abschluss der Arbeit sofort an Sie zurück.

## App Store und Google Play: Veröffentlichen Sie unter Ihrem eigenen Konto

Mobile Apps bleiben am häufigsten im Namen des Entwicklers, weil die Veröffentlichung unter Ihrem Unternehmen Formalitäten erfordert. Erledigen Sie sie trotzdem. Das Entwicklerkonto ist der Verkäufername, den Ihre Kunden sehen, und es hält die Bewertungen und Rezensionen.

Für ein Organisationskonto verlangen beide Stores eine D-U-N-S-Nummer, eine kostenlose neunstellige Kennung von Dun & Bradstreet, sowie eine Unternehmenswebsite und Kontaktdaten. Apple verlangt außerdem, dass die anmeldende Person das Unternehmen rechtlich vertreten darf, und berechnet 99 US-Dollar pro Mitgliedsjahr. Beginnen Sie früh, denn die Prüfung geschieht nicht sofort.

Ist die App bereits im Konto des Entwicklers veröffentlicht, lässt sie sich verschieben. Apple erlaubt dem Kontoinhaber, eine App auf ein anderes Konto zu übertragen; sie behält Bewertungen, Rezensionen und Bundle-ID, und die Nutzer erhalten weiter Updates. Auch Google Play unterstützt App-Übertragungen: Nutzer, Bewertungen, Rezensionen und der Store-Eintrag wechseln, sobald der Inhaber des Zielkontos zustimmt. Einiges bleibt zurück, etwa frühere Verkaufsberichte, und verknüpfte Dienste wie Firebase müssen separat umgestellt werden. Bitten Sie Ihren Entwickler, die Übertragung vor der Schlusszahlung abzuschließen.

## Passwörter, Schlüssel und Dokumentation

Zugangsdaten und Dokumentation ermöglichen es dem Nächsten, die Arbeit fortzusetzen. Verlangen Sie:

- **eine Liste der Zugangsdaten** in einem mit Ihnen geteilten Passwortmanager, für jedes Konto, jeden Server und jeden Dienst, mit Angabe, wer jeweils Zugriff hat.
- **API-Schlüssel, die Sie austauschen können**, das heißt, Sie wissen, wo jeder Schlüssel verwendet wird und wie Sie ihn ersetzen.
- **die Signaturschlüssel der mobilen Apps** oder eine schriftliche Bestätigung, dass der Store die App-Signatur verwaltet und der Upload-Schlüssel Ihnen gehört.
- **ein kurzes technisches Dokument**: woraus das System besteht, wo es läuft, wie man es installiert, wie man ein Update veröffentlicht und welche externen Dienste es nutzt.
- **eine Bedienungsanleitung für den Admin-Bereich** in verständlicher Sprache für die Mitarbeitenden, die das System täglich nutzen.
- **eine Liste bekannter Fehler** und offener Punkte, damit Sie später nicht überrascht werden.

Die Dokumentation muss nicht lang sein. Ein klares, aktuelles Dokument von zehn Seiten ist mehr wert als hundert Seiten, die einmal geschrieben und nie aktualisiert wurden.

## Daten und Backups

Ihre Daten sind oft mehr wert als der Code. Stellen Sie vor der Übergabe sicher, dass:

- Backups automatisch laufen und Sie wissen, wie oft und wo sie gespeichert werden.
- mindestens ein Backup tatsächlich wiederhergestellt wurde, um zu beweisen, dass es funktioniert.
- Sie Ihre Daten, etwa Kunden, Bestellungen und Rechnungen, in einem gängigen Format wie CSV exportieren können.
- Backups in Ihrem Konto liegen und nicht nur auf dem Rechner des Entwicklers.

## So prüfen Sie die Übergabe selbst

Sie müssen keinen Code lesen, um eine Übergabe zu prüfen. Bitten Sie einen zweiten Entwickler um einen einzigen Test: nur mit Ihrem Repository und Ihrer Dokumentation das System auf einem frischen Server aufbauen und sich anmelden. Klappt das, ist die Übergabe echt. Muss er den ursprünglichen Entwickler anrufen, fehlt etwas.

Melden Sie sich danach selbst mit Ihrer eigenen E-Mail bei jedem Konto aus der Tabelle an und prüfen Sie, ob Sie der Inhaber sind. Ändern Sie die Passwörter, die während des Projekts weitergegeben wurden, und entziehen Sie Zugänge, die niemand mehr braucht.

Übergaben scheitern aus denselben Gründen wie Projekte: unklarer Umfang, nichts Schriftliches und keine Kontrollpunkte. [Warum Softwareprojekte scheitern und welche fünf Prüfungen das verhindern](/blog/why-software-projects-fail) erklärt diese Prüfungen. Nach der Übergabe hält ein [Wartungsplan für Software](/blog/software-maintenance-plan) das System aktuell und die Backups getestet.

## Wie KF Tech Solutions dabei hilft

KF Tech Solutions entwickelt [individuelle Software](/services/custom-software), Websites sowie Web- und Mobile-Apps; wir arbeiten mit Unternehmen in Ägypten und den Golfstaaten. Bei einem neuen Projekt können wir die Konten ab der ersten Woche auf den Namen Ihres Unternehmens eröffnen, sodass am Ende nichts übertragen werden muss. Übernehmen Sie ein System von einem anderen Anbieter, gehen wir in einem kostenlosen Gespräch mit Ihnen durch, was Sie erhalten haben, gemessen an dieser Checkliste.

## Häufige Fragen

### Ist es normal, dass der Entwickler den Quellcode behält?

Manche Anbieter lizenzieren ein fertiges Produkt, statt Code zu übergeben. Das kann fair sein, wenn der Preis es widerspiegelt und der Vertrag es regelt. Bei Software, die speziell für Sie entwickelt wurde, sollten Sie den Code besitzen. Halten Sie das vor Arbeitsbeginn schriftlich fest; [wie Sie ein Softwareunternehmen auswählen](/blog/how-to-choose-a-software-company) zeigt, was Sie fragen sollten.

### Kann ich meine App aus dem Konto des Entwicklers in mein Konto verschieben?

In den meisten Fällen ja. Apple und Google Play unterstützen die Übertragung einer App zwischen Entwicklerkonten, wobei Bewertungen und Rezensionen erhalten bleiben. Der Entwickler startet die Übertragung, und Sie nehmen sie in Ihrem Konto an.

### Brauche ich ein Unternehmen, um eine App unter meinem Namen zu veröffentlichen?

Sie können als Privatperson veröffentlichen, dann erscheint jedoch Ihr persönlicher Name als Verkäufer. Ein Organisationskonto zeigt Ihren Firmennamen, und beide Stores verlangen dafür eine D-U-N-S-Nummer.

### Was tun, wenn der Entwickler die Zugänge nicht herausgibt?

Prüfen Sie zuerst, was der Vertrag zu Eigentum und Übergabe sagt. Domain-, Hosting- und App-Konten lassen sich unter Umständen über den Support des jeweiligen Anbieters zurückholen, wenn Sie nachweisen, dass das Unternehmen Ihnen gehört, doch das dauert und ist nicht garantiert. Dies ist eine allgemeine Information, keine Rechtsberatung; bei einem Streit wenden Sie sich an einen Anwalt. Vorbeugen ist weit einfacher, deshalb sollten die Konten von Anfang an Ihnen gehören.

### Wann sollte die Übergabe stattfinden?

Vor der Schlusszahlung. Knüpfen Sie den letzten Meilenstein an den Erhalt von Repository, Konten und Dokumentation sowie an einen erfolgreichen Neuaufbau-Test. Ein klares [Software-Projektbriefing](/blog/software-project-brief) kann diese Lieferungen vom ersten Tag an festhalten.

Wenn Sie eine zweite Meinung zu dem wünschen, was Sie erhalten haben, oder ein Projekt mit allem auf Ihren Namen beginnen möchten, [buchen Sie ein kostenloses Gespräch](/book) oder [schreiben Sie uns](/contact).

## Quellen

- [Apple Developer: Overview of app transfer](https://developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer/)
- [Apple Developer Program: Enrollment](https://developer.apple.com/programs/enroll/)
- [Google Play Console-Hilfe: Apps auf ein anderes Entwicklerkonto übertragen](https://support.google.com/googleplay/android-developer/answer/6230247)
- [Google Play Console-Hilfe: D-U-N-S-Nummer](https://support.google.com/googleplay/android-developer/answer/13628312)
- [GitHub Docs: Transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository)
