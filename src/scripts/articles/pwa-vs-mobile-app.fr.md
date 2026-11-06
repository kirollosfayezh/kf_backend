---
title: PWA, application web ou mobile : laquelle vous faut-il ?
summary: Une comparaison claire entre PWA, application web et application mobile : installation, hors ligne, notifications, stores, coût et comment choisir.
tags: PWA, application web, application mobile, App Store, notifications push, Égypte, pays du Golfe
alt: Des mains tiennent un smartphone au-dessus d’un ordinateur portable ouvert sur une table de café
caption: Le même client passe de l’ordinateur au téléphone. La vraie question est de savoir s’il doit installer quoi que ce soit.
stats: 99 $|adhésion développeur Apple, par an; 25 $|inscription Google Play, payée une fois; 16.4|version d’iOS qui a ajouté le push web pour les apps de l’écran d’accueil
---

Si vos clients ou vos employés doivent seulement se connecter, consulter des informations et remplir des formulaires, une application web ou une application web progressive (PWA) suffit généralement, et elle coûte moins cher, car une seule base de code sert tous les appareils. Il vous faut une application mobile sur l’App Store et Google Play lorsque les gens doivent vous trouver dans les stores, lorsque l’application dépend du matériel du téléphone ou de tâches en arrière-plan, ou lorsque les notifications sont au cœur du produit. Beaucoup d’entreprises commencent par le web et ajoutent une application sur les stores une fois que l’usage en prouve le besoin.

Dernière vérification : 6 novembre 2026

## Ce que recouvre chaque option

Ces trois termes se mélangent souvent dans les devis et les réunions ; mieux vaut donc les définir d’abord.

- **Application web** : un logiciel qui fonctionne dans le navigateur, à une adresse web classique. Les portails clients, les systèmes de réservation et les tableaux de bord sont des applications web. Rien n’est installé.
- **Application web progressive (PWA)** : une application web dotée d’éléments supplémentaires qui permettent de l’ajouter à l’écran d’accueil, de l’ouvrir en plein écran sans la barre du navigateur, de continuer à travailler avec une connexion faible et, sur la plupart des téléphones, de recevoir des notifications. En dessous, cela reste un seul site.
- **Application mobile (application des stores)** : une application téléchargée sur l’App Store ou Google Play et installée sur le téléphone. Elle peut être développée en natif pour chaque plateforme ou avec un framework multiplateforme ; notre comparaison entre [Flutter, React Native et le natif](/blog/flutter-vs-react-native-vs-native) traite ce choix.

Une PWA n’est pas une version au rabais d’une application. C’est un site qui a adopté certaines habitudes des applications, et pour beaucoup d’outils professionnels, c’est exactement ce qu’il faut.

## Le tableau de décision

| Question | Application web | PWA | Application des stores |
| --- | --- | --- | --- |
| Comment on l’obtient | On ouvre un lien | On ouvre un lien, puis on l’ajoute à l’écran d’accueil | Téléchargement sur l’App Store ou Google Play |
| Présence dans les stores | Non | Possible sur Google Play, pas en principe sur l’App Store | Oui, sur les deux |
| Fonctionnement hors ligne | Non | En partie, pour les écrans et données prévus | Oui, dans la mesure de ce que vous développez |
| Notifications push | Non | Oui sur Android ; sur iPhone seulement après ajout à l’écran d’accueil | Oui |
| Matériel du téléphone (Bluetooth, NFC, tâches en arrière-plan) | Limité | Limité, surtout sur iPhone | Accès complet |
| Mises à jour | Immédiates pour tous | Immédiates pour tous | Examen du store, puis mise à jour par les utilisateurs |
| Bases de code à maintenir | Une | Une | Une en multiplateforme, deux en natif |
| Frais de store | Aucun | Aucun, sauf publication sur Google Play | Adhésion Apple annuelle et frais Google uniques |
| Coût de développement habituel | Le plus bas | Faible à moyen | Le plus élevé |

Lisez le tableau de haut en bas. Si les trois premières lignes excluent déjà une option, il est rarement utile d’aller plus loin.

## Installation et présence dans les stores

Une application web ne demande aucune installation, et c’est sa plus grande force. Vous envoyez un lien par WhatsApp, par e-mail ou par QR code, et la personne l’utilise quelques secondes plus tard. Pour les outils internes, les portails fournisseurs et les pages de réservation, cela supprime l’étape où la plupart des utilisateurs abandonnent.

Une PWA ajoute la possibilité d’installer. Sur Android, Chrome peut proposer d’installer un site qui remplit ses conditions. Sur iPhone, l’utilisateur l’ajoute depuis le menu Partager avec « Sur l’écran d’accueil », sans aucune invitation automatique ; vous devez donc montrer la démarche.

Une application des stores est le seul moyen d’apparaître lorsque quelqu’un fait une recherche sur l’App Store. C’est important pour les produits grand public qui comptent sur cette découverte, beaucoup moins pour les outils qu’utilisent vos clients ou vos employés existants.

Deux points sur les stores sont à connaître avant de planifier :

- **Google Play accepte les PWA.** Une PWA peut être emballée en Trusted Web Activity et publiée sur Google Play, à condition de respecter les critères d’installabilité de Google et les règles de Play.
- **Apple attend plus qu’un site.** La règle 4.2 des App Store Review Guidelines demande qu’une application offre des fonctionnalités, du contenu et une interface qui l’élèvent au-delà d’un site web réemballé. Placer son site dans une simple coquille d’application est un motif de refus fréquent.

## Hors ligne, notifications et fonctions du téléphone

### Fonctionnement hors ligne

Une application web simple cesse de fonctionner quand la connexion coupe. Une PWA peut conserver des écrans et des données sur le téléphone, continuer à travailler, puis envoyer les modifications au retour de la connexion, mais seulement pour les parties conçues pour cela. Une application des stores peut faire de même avec plus de stockage et plus de contrôle. Si vos équipes travaillent dans des entrepôts, des sous-sols ou sur la route, prévoyez le comportement hors ligne écran par écran, quelle que soit l’option retenue.

### Notifications

Android prend en charge le push web pour les PWA. Apple a ajouté le push web dans iOS et iPadOS 16.4, mais uniquement pour les applications web que l’utilisateur a ajoutées à l’écran d’accueil ; un site ouvert dans Safari ne peut pas en envoyer. En pratique, si la plupart de vos utilisateurs sont sur iPhone et que les rappels sont au cœur du produit, une application des stores est le choix le plus sûr, car vous ne pouvez pas compter sur chaque utilisateur pour installer d’abord la PWA.

### Matériel du téléphone et tâches en arrière-plan

Les navigateurs donnent accès à l’appareil photo, à la localisation et à l’envoi de fichiers, ce qui couvre la plupart des formulaires professionnels. Les imprimantes et balances Bluetooth, le NFC, la localisation continue en arrière-plan et certains terminaux de paiement sont limités ou indisponibles dans le navigateur, plus encore sur iPhone. Si le produit en dépend, cela suffit généralement à trancher.

## Coût et maintenance

La principale différence de coût tient au nombre de bases de code. Une application web ou une PWA est une seule base de code qui fonctionne sur tous les téléphones, tablettes et ordinateurs. Une application native signifie une application pour iOS et une autre pour Android ; un framework multiplateforme ramène cela à une base de code commune, mais vous passez toujours deux examens de store et testez sur les deux plateformes.

Les frais récurrents sont modestes mais bien réels :

- **Apple Developer Program** : 99 USD par année d’adhésion pour publier sur l’App Store.
- **Google Play Console** : des frais d’inscription uniques de 25 USD.
- **Application web ou PWA** : aucun frais de store, seulement l’hébergement et le nom de domaine que vous payez de toute façon.

Le coût récurrent le plus important reste la maintenance. Chaque nouvelle version d’iOS et d’Android peut exiger des mises à jour de l’application, et chaque publication sur un store demande un délai d’examen. Une application web est à jour dès que vous déployez. Pour le détail des chiffres, consultez [ce que coûte vraiment une application web](/blog/what-does-a-web-app-actually-cost-to-build) et [ce que coûte une application mobile en Égypte](/blog/app-development-cost-egypt).

La vitesse compte aussi. Une PWA n’est agréable que si le site qui la porte se charge vite en données mobiles ; [le score PageSpeed Insights](/blog/pagespeed-insights-score-explained) explique comment le vérifier.

## Comment choisir

Répondez à ces questions dans l’ordre et arrêtez-vous au premier « oui » clair :

1. Les gens doivent-ils vous trouver en cherchant sur l’App Store ou Google Play ? Choisissez une application des stores.
2. Le produit dépend-il du Bluetooth, du NFC, de la localisation en arrière-plan ou d’un matériel similaire ? Choisissez une application des stores.
3. Les notifications sont-elles essentielles, avec une majorité d’utilisateurs sur iPhone ? Une application des stores est le choix le plus sûr.
4. Les utilisateurs travaillent-ils avec une connexion faible ou inexistante ? Une PWA ou une application des stores, avec des écrans hors ligne prévus à l’avance.
5. S’agit-il d’un outil interne, d’un portail ou d’un parcours de réservation utilisé via un lien ? Une application web ou une PWA.

Quelques cas courants :

- **Tableaux de bord du personnel, interfaces d’administration, portails fournisseurs et clients** : application web.
- **Réservation, commande ou fidélité pour une clientèle existante** : commencez par une PWA ; ajoutez une application des stores si l’usage répété et les notifications en prouvent le besoin.
- **Équipes terrain qui scannent, photographient et synchronisent sur la route** : PWA si les fonctions conviennent, application des stores s’il faut du matériel ou des tâches en arrière-plan.
- **Un produit grand public qui doit être découvert dans les stores** : application des stores.

En cas de doute, développez d’abord la plus petite version utile. Notre guide pour [commencer par un MVP](/blog/mobile-app-mvp-egypt) montre comment tester une idée avant de payer pour chaque plateforme.

## Questions fréquentes

### Peut-on publier une PWA sur l’App Store ?

Pas en tant que simple site. Les règles d’examen d’Apple attendent d’une application qu’elle offre plus qu’un site réemballé ; une version pour le store a donc généralement besoin de fonctions propres. Google Play accepte en revanche les PWA emballées en Trusted Web Activity.

### Les notifications d’une PWA fonctionnent-elles sur iPhone ?

Oui, depuis iOS 16.4, mais seulement après que l’utilisateur a ajouté l’application web à l’écran d’accueil et autorisé les notifications. Un site ouvert dans Safari ne peut pas envoyer de notifications push.

### Une PWA coûte-t-elle moins cher qu’une application mobile ?

Généralement oui, car une seule base de code sert tous les appareils, sans frais ni examens de store. L’écart se réduit si vous avez besoin de fonctions hors ligne poussées ou du matériel du téléphone, ce qui oriente de toute façon vers une application des stores.

### Peut-on commencer par une application web et ajouter une application mobile plus tard ?

Oui, si le backend est conçu dès le départ comme une véritable API. L’application mobile réutilise alors les mêmes comptes, les mêmes données et le même tableau d’administration ; seuls les écrans sont nouveaux.

### Une PWA fonctionne-t-elle pour des clients aux téléphones anciens ?

En général oui, puisqu’elle fonctionne dans le navigateur du téléphone. L’installation et les notifications dépendent des versions du navigateur et du système ; l’essentiel du produit doit donc fonctionner comme une page web normale.

## Parlons-en avec KF Tech Solutions

Nous développons des applications web, des PWA et des applications mobiles, et le même backend avec le même tableau d’administration peut servir toutes ces options : commencer par le web ne signifie donc pas repartir de zéro plus tard. Pour le [développement d’applications mobiles](/services/mobile-applications), nous utilisons une seule base de code multiplateforme pour iOS et Android, avec notifications push, fonctionnement hors ligne là où l’application en a besoin et publication sur les deux stores. Nous travaillons avec des entreprises en Égypte et dans les pays du Golfe, et nous vous dirons franchement quand une application web suffit.

Dites-nous qui utilisera le produit, sur quels téléphones et dans quelles conditions, et nous vous recommanderons une application web, une PWA ou une application des stores, avec nos raisons. [Réservez un appel gratuit](/book) ou [envoyez-nous votre cahier des charges](/contact).

## Sources

- [Apple Developer Program : détails de l’adhésion](https://developer.apple.com/programs/whats-included/)
- [Apple App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [WebKit : Web Push for Web Apps on iOS and iPadOS](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)
- [Aide Google Play Console : premiers pas avec la Play Console](https://support.google.com/googleplay/android-developer/answer/6112435?hl=fr)
- [Android Developers : guide de démarrage rapide Trusted Web Activities](https://developer.android.com/develop/ui/views/layout/webapps/guide-trusted-web-activities-version2)
- [web.dev : PWAs in app stores](https://web.dev/articles/pwas-in-app-stores)
