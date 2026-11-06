---
title: UAE PASS integrieren: Login und digitale Signatur für Ihre App
summary: Wie ein Unternehmen in den VAE Login, Signatur oder Datenfreigabe per UAE PASS in seine App einbaut: vier Onboarding-Phasen, Kontoverknüpfung, UX-Regeln.
tags: UAE PASS, digitale Identität, OAuth 2.0, App-Integration, digitale Signatur, VAE
alt: Ein Mann in weißer Kandura und Ghutra telefoniert an einem sonnigen Tag im Freien
caption: UAE PASS läuft auf dem Handy der Nutzer, sodass Anmeldung und Signatur dort mit einer Bestätigung beginnen können.
stats: 3|Funktionsbereiche von UAE PASS: Login, Signatur und eSeal, Datenfreigabe; 4|Onboarding-Phasen, von der ersten Anfrage bis zum Go-live; 3|Kontostufen, von SOP1 (Basis) bis SOP3 (qualifiziert)
---

Ein privates Unternehmen in den VAE kann UAE PASS in seine Website oder mobile App einbinden: für den Login, für digitale Signaturen und eSeals sowie für die Freigabe von Daten und Dokumenten mit Zustimmung des Nutzers. Sie bewerben sich als Service Provider mit gültiger VAE-Handelslizenz, lassen Ihren Use Case genehmigen, entwickeln gegen die Staging-Umgebung, bestehen eine Prüfung und erhalten erst danach die Produktionszugangsdaten. Technisch ist das Standard-OAuth 2.0; der Großteil der Arbeit steckt in der Kontoverknüpfung und in den offiziellen Regeln für die Nutzerführung.

Zuletzt geprüft: 6. November 2026

## Was UAE PASS einem privaten Unternehmen bietet

UAE PASS ist die nationale digitale Identität der VAE und dient der Anmeldung bei Behördendiensten. Das Federal Supplier Register des Finanzministeriums etwa nutzt UAE PASS für die Anmeldung. Binden Sie es in Ihre eigene App ein, können sich dieselben Nutzer ohne weiteres Passwort anmelden oder Dokumente signieren.

Die offizielle Dokumentation nennt drei Funktionen:

| Funktion | Verfügbar für | Typischer Einsatz in einer privaten App |
|---|---|---|
| Authentifizierung | Behörden und private Organisationen | „Mit UAE PASS anmelden“ in einem Portal oder einer mobilen App |
| Digitale Signatur und eSeal | Behörden und private Organisationen | Kunden unterschreiben einen Vertrag oder ein Formular; Ihr Unternehmen versiegelt ausgestellte Dokumente |
| Daten- und Dokumentenfreigabe | Nur private Organisationen | Mit Zustimmung des Nutzers ein Dokument anfordern, das eine andere Stelle hält |

Die Dokumentation beschreibt außerdem Web-Registrierung, die Bestätigung von Transaktionen per Gesichtsbiometrie und Hash Signing, bei dem der Hash eines Dokuments statt der ganzen Datei signiert wird. Für jede Funktion gibt es im Onboarding einen eigenen Fragebogen. Legen Sie also früh fest, was Sie brauchen.

## Vor dem Antrag: Wer ist der Service Provider?

Der Service Provider ist Ihr Unternehmen, nicht Ihr Entwickler. Das Onboarding-Team verlangt von privaten Unternehmen eine gültige VAE-Handelslizenz und begleitet Sie je nach Emirat, in dem Sie registriert sind. Ein Softwarestudio außerhalb der VAE kann die Integration bauen und testen, aber Antrag, Vereinbarung und Zugangsdaten gehören dem lizenzierten Unternehmen in den VAE.

Bereiten Sie vor dem Antrag drei Dinge vor:

- **Die gewünschten Funktionen**: nur Login oder zusätzlich Signatur, eSeal oder Datenfreigabe.
- **Ein Ablaufdiagramm** der Nutzerführung auf Basis der Standard-Use-Cases aus den offiziellen Richtlinien.
- **UI-Entwürfe (Wireframes)** für jeden Bildschirm, auf dem UAE PASS erscheint.

Use Cases, die von den Standardrichtlinien abweichen, brauchen eine Freigabe durch das Management; laut Dokumentation kann das den Prozess verlängern. Wer sich an die Standardszenarien hält, ist meist schneller.

## Die vier Onboarding-Phasen

Die Dokumentation teilt das Onboarding in vier Phasen. Das passiert in jeder Phase, und das sind die Zuständigkeiten:

| Phase | Ihre Seite | Das Onboarding-Team von UAE PASS |
|---|---|---|
| Initiierung | Antrag im Entwicklerportal stellen (Art der Stelle: privat), Fragebögen zu den Funktionen ausfüllen, Ablaufdiagramm und Entwürfe senden | Fordert die Handelslizenz an, sendet Referenzmaterial, prüft und genehmigt den Use Case |
| Entwicklung | Integration gegen Staging, danach die Staging-Prüfung anfordern | Stellt Staging-Zugangsdaten aus, startet das Service Provider Agreement (bei Behörden ein MOU) |
| Prüfung | Gefundene Mängel beheben, jedes getestete Szenario auf Video aufnehmen, die Vereinbarung unterzeichnen | Prüft anhand einer Checkliste, bei Bedarf in einer zweiten Runde, und holt die Freigabe des Managements ein |
| Go-live | Go-live-Formular einreichen, auf Produktion umsetzen, den Go-live-Termin mitteilen | Stellt Produktionszugangsdaten aus, prüft die Produktion und gibt Ihnen Zugang zum Service Desk |

Daraus folgen zwei praktische Punkte. Erstens muss die Redirect-URL für Staging eine Entwicklungs- oder Staging-Adresse sein; die Produktions-URL wird erst nach bestandener Prüfung benötigt. Zweitens gelten Zugangsdaten nur für einen Kanal. Die für Ihre Website genehmigten Daten dürfen ohne Zustimmung des Teams nicht in Ihrer mobilen App verwendet werden. Brauchen Sie beides, nehmen Sie beides von Anfang an in den Use Case auf.

## Wie der Login technisch funktioniert

### Webanwendungen

Die Authentifizierung mit UAE PASS basiert auf OAuth 2.0. Ihre App leitet den Nutzer zum Authorization-Endpunkt, erhält einen Autorisierungscode an Ihrer Redirect-URL, tauscht ihn auf dem Server gegen ein Access Token und liest dann das Nutzerprofil vom Userinfo-Endpunkt. Staging läuft über `stg-id.uaepass.ae`, Produktion über `id.uaepass.ae`, jeweils mit den Endpunkten authorize, token, userinfo und logout.

Zum Testen brauchen Entwickler und Tester einen Nutzer in der Staging-Umgebung und die Staging-App von UAE PASS auf einem Testgerät. Meldet sich ein Nutzer aus Ihrem Portal ab, sollen Sie ihn laut Dokumentation auch über den Logout-Endpunkt bei UAE PASS abmelden, mit Weiterleitung zurück auf Ihre Website.

### Mobile Apps

Eine mobile App braucht zusätzliche Schritte, weil der Nutzer den Login in der UAE-PASS-App auf demselben Telefon bestätigt. Kurz gesagt, Ihre App:

1. Registriert beim Betriebssystem ein eigenes URI-Schema.
2. Startet den OAuth-Ablauf in einer WebView.
3. Fängt das Schema der UAE-PASS-App ab, ersetzt die Callback-Adresse durch das Schema Ihrer App und öffnet die UAE-PASS-App.
4. Empfängt den Nutzer über Ihr Schema zurück und öffnet die ursprüngliche Callback-URL in der WebView.
5. Überwacht Ihre OAuth-Redirect-URI, die das Ende des Logins anzeigt.

Die Dokumentation warnt: Verwenden Sie in Staging und Produktion Ihr eigenes Schema, nicht das der Demo-App, sonst landen Nutzer in einer fremden App. Beispiel-Apps gibt es für iOS und Android.

## Kontostufen und die Verknüpfung bestehender Nutzer

UAE-PASS-Konten haben drei Stufen, die die Dokumentation Strength of Profile (SOP) nennt:

- **SOP1, Basis**: E-Mail und Mobilnummer per OTP bestätigt, Emirates ID nicht verifiziert. Eingeschränkte Dienste, keine Dokumentensignatur.
- **SOP2, erweitert**: verifiziert, Signatur auf fortgeschrittenem Niveau.
- **SOP3, qualifiziert**: biometrisch verifiziert, Signatur auf qualifiziertem Niveau.

Bei SOP1-Nutzern liefert UAE PASS keine Emirates-ID-Nummer. Ihre App muss dann eine klare Meldung zeigen, statt stillschweigend zu scheitern. Geben Sie im Use-Case-Diagramm an, welche Stufen Ihr Dienst akzeptiert.

Die schwierigere Frage: Was passiert, wenn sich jemand mit UAE PASS anmeldet und Sie bereits Kunden in Ihrer Datenbank haben? Die Richtlinien beschreiben drei Wege und erwarten alle drei im selben Release:

- **Automatische Verknüpfung**: Abgleich eines verifizierten, eindeutigen Merkmals, etwa einer verifizierten Emirates-ID-Nummer, einer verifizierten eindeutigen E-Mail oder einer verifizierten Kombination aus E-Mail und Mobilnummer.
- **Manuelle Verknüpfung**: Der Nutzer meldet sich einmal mit seinem bestehenden Benutzernamen und Passwort an (oder beantwortet Sicherheitsfragen), danach werden die Konten verknüpft.
- **Neuregistrierung**: Ihr Anmeldeformular wird aus dem UAE-PASS-Profil vorausgefüllt, abgefragt werden nur die Felder, die Ihr Geschäft zusätzlich braucht.

In jedem Fall speichern Sie die von UAE PASS gelieferte **UUID** und nutzen sie für spätere Anmeldungen. Eine Verknüpfung allein über die E-Mail wird nicht empfohlen, ebenso wenig die Verknüpfung eines verifizierten mit einem nicht verifizierten Konto, in beide Richtungen.

## UX-Regeln, die geprüft werden, und Ihre Ausweichwege

Das Onboarding-Team prüft Ihre Nutzerführung anhand der Standard-Implementierungsrichtlinien: vor der Genehmigung, bei der Staging-Prüfung und nach dem Go-live. Diese Regeln ändern bestehende Apps am häufigsten:

- **Abläufe trennen.** „Mit UAE PASS anmelden“ darf nicht in Ihren lokalen Login oder Ihre lokale Registrierung eingebaut werden.
- **Keine Passwörter im UAE-PASS-Ablauf.** Fordern Sie neue UAE-PASS-Nutzer nicht auf, Benutzername und Passwort anzulegen, schicken Sie keines per E-Mail und bieten Sie beim UAE-PASS-Login keine Passwortänderung an.
- **Der Nutzer startet den Login.** Lösen Sie die UAE-PASS-Authentifizierung nicht im Namen des Nutzers aus.
- **Vollständige Nutzung statt Nebenfunktion.** UAE-PASS-Nutzer sollen dieselben Dienste erreichen wie lokale Nutzer. UAE PASS etwa nur zum Ändern der E-Mail-Adresse einzusetzen, ist zu vermeiden.
- **Offizielle Buttons und Texte.** Verwenden Sie die veröffentlichten Button-Designs (es gibt englische und arabische Fassungen) und folgen Sie bei Fehlermeldungen den Textrichtlinien.

Die Ausweichwege ergeben sich aus denselben Regeln. Weil die Abläufe unabhängig sind, bleibt Ihr bestehender Login für Kunden ohne UAE-PASS-Konto verfügbar. Planen Sie klare Bildschirme für die Fälle, die eintreten werden: ein SOP1-Nutzer, wo Sie eine verifizierte ID brauchen, ein Nutzer, der in der UAE-PASS-App abbricht, und ein Bestandskunde, dessen Daten zu keinem Konto passen. Jeder Fall braucht einen nächsten Schritt, keinen Fehlercode.

## Wo KF Tech Solutions ins Spiel kommt

Wir entwickeln Web- und mobile Apps sowie die Backends dahinter, einschließlich API-Integrationen mit externen Systemen. Bei UAE PASS heißt das: der OAuth-Ablauf auf Ihrem Server, die Übergabe zwischen Ihrer App und der UAE-PASS-App, die Kontoverknüpfung mit Ihren bestehenden Kundendaten sowie die Bildschirme und Entwürfe, die Ihr Use-Case-Antrag braucht. Antrag und Vereinbarung bleiben auf den Namen Ihres Unternehmens. Wir arbeiten mit Unternehmen in Ägypten und am Golf. Wie wir Integrationen angehen, lesen Sie in [Die Systeme verbinden, die Sie schon nutzen](/blog/api-integration-connecting-business-systems) und auf der Seite zu unserem [API- und Backend-Service](/services/api-and-backend).

## Häufige Fragen

### Kann ein privates Unternehmen UAE PASS nutzen?

Ja. Authentifizierung sowie digitale Signatur und eSeal stehen Behörden und privaten Organisationen offen, die Daten- und Dokumentenfreigabe nur privaten Organisationen. Private Unternehmen brauchen für das Onboarding eine gültige VAE-Handelslizenz.

### Kann ein Entwickler außerhalb der VAE die Integration umsetzen?

Der Entwickler kann sie bauen und testen, aber der Service Provider, der das Onboarding beantragt, ist das in den VAE lizenzierte Unternehmen. Zugangsdaten, Service Provider Agreement und Go-live-Freigabe gehen an dieses Unternehmen.

### Ist UAE PASS dasselbe wie ein Login per OpenID Connect?

Die Web-Integration basiert auf OAuth 2.0 mit den Endpunkten authorize, token, userinfo und logout, und die Anforderungen für mobile Apps nennen OAuth 2.0 oder OpenID Connect. Der Unterschied liegt im Genehmigungsverfahren und in den Regeln für die Nutzerführung.

### Müssen wir unseren bestehenden Login abschaffen?

Nein. Die Richtlinien verlangen, dass der UAE-PASS-Ablauf unabhängig von Ihrem lokalen Login ist. Ihre bisherige Anmeldung bleibt für Nutzer ohne UAE PASS bestehen.

### Wie lange dauert das Onboarding?

Die Dokumentation nennt keine feste Dauer. Sie hängt davon ab, wie schnell Ihr Use Case genehmigt wird, wie viele Prüfrunden nötig sind und ob Ihre Nutzerführung den Standard-Use-Cases folgt. Abweichende Fälle brauchen eine zusätzliche Freigabe.

### Sollten wir UAE PASS in eine App einplanen, die es noch nicht gibt?

Wenn Ihre Nutzer in den VAE leben, planen Sie es ab der ersten Version ein, denn die Verknüpfungsregeln prägen Ihre Nutzertabelle. Testen Sie die Idee noch, lesen Sie [Eine App-Idee? Fangen Sie klein mit einem MVP an](/blog/mobile-app-mvp-egypt) und erfahren Sie, was die [Kosten einer App in den VAE](/blog/app-development-cost-uae) bestimmt. Mehr für Unternehmen in den VAE finden Sie auf unserer [VAE-Seite](/uae).

Wenn Sie UAE PASS in Ihre Website oder App einbauen möchten, [schildern Sie uns Ihr Vorhaben](/contact) oder [buchen Sie ein kostenloses Gespräch](/book). Wir planen Onboarding und Integration gemeinsam mit Ihnen.

## Quellen

- [UAE-PASS-Dokumentation: Überblick und Funktionen](https://docs.uaepass.ae)
- [UAE PASS: Onboarding-Prozess für Service Provider](https://docs.uaepass.ae/getting-onboarded-with-uae-pass/onboarding-process-for-uae-pass-service-providers)
- [UAE PASS: Kontotypen](https://docs.uaepass.ae/quick-start-guide-uae-pass-staging-environment/user-account-types)
- [UAE PASS: Endpunkte der Web-Integration](https://docs.uaepass.ae/feature-guides/authentication/web-application/endpoints)
- [UAE PASS: Anforderungen an mobile Apps](https://docs.uaepass.ae/feature-guides/authentication/mobile-application/requirements)
- [UAE PASS: Nutzerverknüpfung](https://docs.uaepass.ae/feature-guides/authentication/user-linking)
- [UAE PASS: Standard-Implementierungsrichtlinien](https://docs.uaepass.ae/guidelines/use-cases/standard-implementation-guidelines)
- [UAE PASS: Button-Richtlinien](https://docs.uaepass.ae/guidelines/design-guidelines/uaepass-button-guideline)
- [Finanzministerium der VAE: Federal Supplier Register](https://mof.gov.ae/en/public-finance/government-procurement/federal-supplier-register/)
