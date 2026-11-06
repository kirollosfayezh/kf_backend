---
title: PWA, Web-App oder Mobile App: Was braucht Ihr Unternehmen?
summary: Ein klarer Vergleich von PWA, Web-App und Store-App: Installation, Offline-Nutzung, Benachrichtigungen, App-Store-Präsenz, Kosten und die Entscheidung.
tags: PWA, Web-App, Mobile App, App Store, Push-Benachrichtigungen, Ägypten, Golfstaaten
stats: $99|Apple-Entwicklermitgliedschaft pro Jahr; $25|Google-Play-Registrierung, einmalig; 16.4|iOS-Version mit Web-Push für Home-Bildschirm-Web-Apps
---

Wenn Ihre Kunden oder Mitarbeitenden sich nur anmelden, Daten nachschlagen und Formulare ausfüllen müssen, reicht meist eine Web-App oder eine Progressive Web App (PWA), und sie kostet weniger, weil eine Codebasis alle Geräte bedient. Eine Mobile App aus dem App Store und Google Play brauchen Sie, wenn man Sie in den Stores finden muss, wenn die App auf Hardware des Telefons oder Hintergrundprozesse angewiesen ist oder wenn Benachrichtigungen den Kern des Produkts bilden. Viele Unternehmen beginnen im Web und ergänzen eine Store-App, sobald die Nutzung den Bedarf belegt.

Zuletzt geprüft: 6. November 2026

## Was die drei Optionen eigentlich sind

Die drei Begriffe werden in Angeboten und Besprechungen oft vermischt, deshalb lohnt es sich, sie zuerst festzulegen.

- **Web-App**: Software, die im Browser unter einer normalen Webadresse läuft. Kundenportale, Buchungssysteme und Dashboards sind Web-Apps. Es wird nichts installiert.
- **Progressive Web App (PWA)**: eine Web-App mit zusätzlichen Bausteinen, die das Ablegen auf dem Home-Bildschirm, das Öffnen im Vollbild ohne Browserleiste, das Weiterarbeiten bei schwacher Verbindung und auf den meisten Telefonen den Empfang von Benachrichtigungen ermöglichen. Darunter bleibt es eine einzige Website.
- **Mobile App (Store-App)**: eine App, die aus dem App Store oder Google Play heruntergeladen und auf dem Telefon installiert wird. Sie kann für jede Plattform nativ oder mit einem plattformübergreifenden Framework entwickelt werden; unser Vergleich von [Flutter, React Native und nativ](/blog/flutter-vs-react-native-vs-native) behandelt diese Wahl.

Eine PWA ist keine schwächere Version einer App. Sie ist eine Website, die einige Gewohnheiten von Apps gelernt hat, und für viele Geschäftsanwendungen ist genau das das richtige Maß.

## Die Entscheidungstabelle

| Frage | Web-App | PWA | Store-App |
| --- | --- | --- | --- |
| Wie Nutzer sie erhalten | Link öffnen | Link öffnen, dann zum Home-Bildschirm hinzufügen | Aus App Store oder Google Play laden |
| Eintrag im Store | Nein | Bei Google Play möglich, im App Store normalerweise nicht | Ja, in beiden |
| Offline-Nutzung | Nein | Teilweise, für eingeplante Ansichten und Daten | Ja, so weit Sie es entwickeln |
| Push-Benachrichtigungen | Nein | Ja unter Android; auf dem iPhone erst nach dem Hinzufügen zum Home-Bildschirm | Ja |
| Telefon-Hardware (Bluetooth, NFC, Hintergrundaufgaben) | Eingeschränkt | Eingeschränkt, besonders auf dem iPhone | Voller Zugriff |
| Updates | Sofort für alle | Sofort für alle | Store-Prüfung, dann Aktualisierung durch die Nutzer |
| Zu pflegende Codebasen | Eine | Eine | Eine plattformübergreifend, zwei nativ |
| Store-Gebühren | Keine | Keine, außer bei Veröffentlichung auf Google Play | Jährliche Apple-Mitgliedschaft plus einmalige Google-Gebühr |
| Typische Entwicklungskosten | Am niedrigsten | Niedrig bis mittel | Am höchsten |

Lesen Sie die Tabelle von oben. Wenn die ersten drei Zeilen eine Option bereits ausschließen, müssen Sie selten weiterlesen.

## Installation und Präsenz in den App Stores

Eine Web-App muss nicht installiert werden, und das ist ihre größte Stärke. Sie senden einen Link per WhatsApp, E-Mail oder QR-Code, und die Person nutzt sie Sekunden später. Bei internen Werkzeugen, Lieferantenportalen und Buchungsseiten entfällt damit genau der Schritt, an dem die meisten Nutzer abspringen.

Eine PWA bietet zusätzlich die Installation an. Unter Android kann Chrome anbieten, eine Website zu installieren, die seine Anforderungen erfüllt. Auf dem iPhone fügt der Nutzer sie über das Teilen-Menü mit „Zum Home-Bildschirm“ hinzu; einen automatischen Hinweis gibt es nicht, Sie müssen den Weg also zeigen.

Eine Store-App ist der einzige Weg, bei einer Suche im App Store zu erscheinen. Das ist wichtig für Verbraucherprodukte, die dort entdeckt werden sollen, und weit weniger für Werkzeuge, die Ihre bestehenden Kunden oder Mitarbeitenden nutzen.

Zwei Details zu den Stores sollten Sie vor der Planung kennen:

- **Google Play akzeptiert PWAs.** Eine PWA kann als Trusted Web Activity verpackt und auf Google Play veröffentlicht werden, sofern sie Googles Kriterien für die Installierbarkeit und die Play-Richtlinien erfüllt.
- **Apple verlangt mehr als eine Website.** Richtlinie 4.2 der App Store Review Guidelines fordert, dass eine App Funktionen, Inhalte und eine Oberfläche bietet, die sie über eine neu verpackte Website hinausheben. Eine Website in einer dünnen App-Hülle ist ein häufiger Ablehnungsgrund.

## Offline-Nutzung, Benachrichtigungen und Telefonfunktionen

### Offline-Nutzung

Eine einfache Web-App funktioniert nicht mehr, wenn die Verbindung abbricht. Eine PWA kann Ansichten und Daten auf dem Telefon speichern, weiterarbeiten und Änderungen senden, sobald die Verbindung zurück ist, allerdings nur für die Teile, die dafür ausgelegt sind. Eine Store-App kann dasselbe mit mehr Speicher und mehr Kontrolle. Wenn Ihre Mitarbeitenden in Lagern, Kellern oder unterwegs arbeiten, planen Sie das Offline-Verhalten Ansicht für Ansicht, egal welche Option Sie wählen.

### Benachrichtigungen

Android unterstützt Web-Push für PWAs. Apple hat Web-Push mit iOS und iPadOS 16.4 eingeführt, aber nur für Web-Apps, die der Nutzer zum Home-Bildschirm hinzugefügt hat; eine in Safari geöffnete Website kann keine senden. Wenn die meisten Ihrer Nutzer ein iPhone verwenden und Erinnerungen zentral für das Produkt sind, ist eine Store-App daher die sicherere Wahl, weil Sie nicht davon ausgehen können, dass jeder Nutzer die PWA zuerst installiert.

### Telefon-Hardware und Hintergrundarbeit

Browser bieten Zugriff auf Kamera, Standort und Datei-Uploads, was die meisten Geschäftsformulare abdeckt. Bluetooth-Drucker und -Waagen, NFC, dauerhafte Standortverfolgung im Hintergrund und manche Zahlungshardware sind im Browser eingeschränkt oder nicht verfügbar, auf dem iPhone noch stärker. Hängt Ihr Produkt davon ab, entscheidet das meist bereits die Frage.

## Kosten und Wartung

Der größte Kostenunterschied liegt in der Zahl der Codebasen. Eine Web-App oder PWA ist eine Codebasis, die auf jedem Telefon, Tablet und Computer läuft. Eine native Store-App bedeutet eine App für iOS und eine weitere für Android; ein plattformübergreifendes Framework führt das auf eine gemeinsame Codebasis zurück, doch Sie durchlaufen weiterhin zwei Store-Prüfungen und testen auf beiden Plattformen.

Die wiederkehrenden Gebühren sind klein, aber real:

- **Apple Developer Program**: 99 USD pro Mitgliedsjahr für die Veröffentlichung im App Store.
- **Google Play Console**: eine einmalige Registrierungsgebühr von 25 USD.
- **Web-App oder PWA**: keine Store-Gebühren, nur Hosting und Domain, die Sie ohnehin bezahlen.

Der größere laufende Posten ist die Pflege. Jede neue iOS- und Android-Version kann App-Updates erfordern, und jede Store-Veröffentlichung braucht Prüfzeit. Eine Web-App ist aktualisiert, sobald Sie die Änderung ausliefern. Wie sich die Zahlen zusammensetzen, lesen Sie in [was die Entwicklung einer Web-App wirklich kostet](/blog/what-does-a-web-app-actually-cost-to-build) und [was eine Mobile App in Ägypten kostet](/blog/app-development-cost-egypt).

Auch die Geschwindigkeit zählt. Eine PWA ist nur angenehm, wenn die Website dahinter über mobile Daten schnell lädt; [der PageSpeed-Insights-Wert](/blog/pagespeed-insights-score-explained) erklärt, wie Sie das prüfen.

## So entscheiden Sie

Beantworten Sie diese Fragen der Reihe nach und hören Sie beim ersten klaren „Ja“ auf:

1. Müssen Menschen Sie über die Suche im App Store oder bei Google Play finden? Wählen Sie eine Store-App.
2. Hängt das Produkt von Bluetooth, NFC, Standort im Hintergrund oder ähnlicher Hardware ab? Wählen Sie eine Store-App.
3. Sind Push-Benachrichtigungen zentral und nutzen die meisten ein iPhone? Eine Store-App ist die sicherere Wahl.
4. Arbeiten die Nutzer mit schwacher oder ohne Verbindung? PWA oder Store-App, mit vorab geplanten Offline-Ansichten.
5. Handelt es sich um ein internes Werkzeug, ein Portal oder einen Buchungsablauf, der über einen Link genutzt wird? Web-App oder PWA.

Einige typische Fälle:

- **Mitarbeiter-Dashboards, Verwaltungsoberflächen, Lieferanten- und Kundenportale**: Web-App.
- **Buchung, Bestellung oder Kundenbindung für einen bestehenden Kundenstamm**: mit einer PWA beginnen; eine Store-App ergänzen, wenn wiederholte Nutzung und Benachrichtigungen den Bedarf belegen.
- **Außendienst, der unterwegs scannt, fotografiert und synchronisiert**: PWA, wenn die Funktionen passen, Store-App bei Hardware oder Hintergrundarbeit.
- **Ein Verbraucherprodukt, das in den Stores gefunden werden muss**: Store-App.

Wenn Sie unsicher sind, entwickeln Sie zuerst die kleinste sinnvolle Version. Unser Leitfaden zum [Start mit einem MVP](/blog/mobile-app-mvp-egypt) zeigt, wie Sie eine Idee testen, bevor Sie für jede Plattform bezahlen.

## Häufige Fragen

### Kann eine PWA im App Store veröffentlicht werden?

Nicht als einfache Website. Apples Prüfrichtlinien erwarten, dass eine App mehr bietet als eine neu verpackte Website, daher braucht eine Store-Version meist eigene App-Funktionen. Google Play akzeptiert dagegen PWAs, die als Trusted Web Activity verpackt sind.

### Funktionieren PWA-Benachrichtigungen auf dem iPhone?

Ja, seit iOS 16.4, aber erst nachdem der Nutzer die Web-App zum Home-Bildschirm hinzugefügt und Benachrichtigungen erlaubt hat. Eine in Safari geöffnete Website kann keine Push-Benachrichtigungen senden.

### Ist eine PWA günstiger als eine Mobile App?

Meist ja, weil eine Codebasis alle Geräte bedient und Store-Gebühren und Store-Prüfungen entfallen. Der Vorteil schrumpft, wenn Sie umfangreiche Offline-Funktionen oder Telefon-Hardware benötigen, was ohnehin für eine Store-App spricht.

### Können wir mit einer Web-App beginnen und später eine Mobile App ergänzen?

Ja, wenn das Backend von Anfang an als saubere API aufgebaut ist. Die Mobile App nutzt dann dieselben Konten, Daten und dasselbe Admin-Dashboard, neu sind nur die Bildschirme.

### Funktioniert eine PWA auch für Kunden mit älteren Telefonen?

Im Allgemeinen ja, da sie im Browser des Telefons läuft. Installation und Benachrichtigungen hängen von Browser- und Systemversion ab, daher sollte der Kern des Produkts auch als normale Webseite funktionieren.

## Sprechen Sie mit KF Tech Solutions

Wir entwickeln Web-Apps, PWAs und Mobile Apps, und hinter allen kann dasselbe Backend mit demselben Admin-Dashboard stehen, sodass ein Start im Web später keinen Neuanfang bedeutet. Bei der [Entwicklung mobiler Apps](/services/mobile-applications) arbeiten wir mit einer plattformübergreifenden Codebasis für iOS und Android, mit Push-Benachrichtigungen, Offline-Unterstützung, wo die App sie braucht, und Veröffentlichung in beiden Stores. Wir arbeiten mit Unternehmen in Ägypten und den Golfstaaten und sagen Ihnen offen, wann eine Web-App genügt.

Sagen Sie uns, wer das Produkt nutzt, auf welchen Telefonen und wo, und wir empfehlen Ihnen Web-App, PWA oder Store-App mit Begründung. [Buchen Sie ein kostenloses Gespräch](/book) oder [senden Sie uns Ihre Anforderungen](/contact).

## Quellen

- [Apple Developer Program: Mitgliedschaftsdetails](https://developer.apple.com/programs/whats-included/)
- [Apple App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [WebKit: Web Push for Web Apps on iOS and iPadOS](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)
- [Google Play Console-Hilfe: Erste Schritte mit der Play Console](https://support.google.com/googleplay/android-developer/answer/6112435?hl=de)
- [Android Developers: Trusted Web Activities Quick Start](https://developer.android.com/develop/ui/views/layout/webapps/guide-trusted-web-activities-version2)
- [web.dev: PWAs in app stores](https://web.dev/articles/pwas-in-app-stores)
