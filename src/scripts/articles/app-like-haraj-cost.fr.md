---
title: Créer une application comme Haraj : périmètre, étapes et coût
summary: Ce qu'exige une application de petites annonces comme Haraj : annonces, recherche, chat, modération, identité et revenus, et l'écart MVP / version complète.
tags: application de petites annonces, marketplace, coût d'une application, MVP, Arabie saoudite
alt: Des acheteurs penchés sur des tables d’objets ménagers d’occasion dans un marché en plein air
caption: Une application d’annonces met ce furetage en ligne, où recherche, messagerie et modération portent toute l’expérience.
stats: 4|fonctions indispensables à tout MVP de petites annonces : annonces, recherche, chat, signalements; 72|heures pour notifier la SDAIA d'une violation de données selon le PDPL; 96,1 %|des recherches en Arabie saoudite passaient par Google en octobre 2026
---

Une application comme Haraj est une place de marché de petites annonces : les vendeurs publient, les acheteurs cherchent et leur écrivent, et la plateforme écarte la fraude et se rémunère par des annonces mises en avant ou des commissions. Le coût dépend bien moins des écrans que de la modération, du chat, de la vérification d'identité et des paiements ; la voie raisonnable est donc un MVP ciblé sur une ville ou une catégorie, puis une version complète une fois que de vrais utilisateurs ont montré ce dont ils ont besoin. Haraj sert ici uniquement de référence connue pour ce type de produit, et non de description de son fonctionnement interne.

Dernière vérification : 6 novembre 2026

## Ce que vous construisez réellement

Une application de petites annonces sert trois publics à la fois, chacun avec ses propres outils :

- **Les vendeurs** publient une annonce avec photos, prix, catégorie et lieu, puis la modifient, la renouvellent ou la clôturent.
- **Les acheteurs** parcourent, cherchent, filtrent, enregistrent des annonces et contactent le vendeur.
- **Votre équipe** examine les signalements, retire les annonces problématiques, suspend des comptes et gère catégories, frais et promotions depuis un tableau de bord.

La plupart des premiers devis couvrent les deux premiers publics et oublient le troisième. C'est pourtant l'administration qui garde la plateforme propre, et elle représente une large part du travail réel.

## Les fonctions clés : MVP ou version complète

| Fonction | MVP | Version complète |
|---|---|---|
| Annonces | Photos, titre, prix, catégorie, ville | Champs propres à chaque catégorie (voitures, immobilier, téléphones), vidéo, brouillons, expiration et renouvellement automatiques |
| Recherche | Mot-clé, filtres par catégorie et ville | Recherches enregistrées, alertes sur les nouvelles annonces, tri, vue carte |
| Contact | Chat intégré avec texte et photos | Messages vocaux, offres de prix, accusés de lecture, blocage et filtres anti-spam |
| Comptes | Numéro de téléphone avec code à usage unique | Badges de vérification, notes des vendeurs, comptes professionnels |
| Modération | Bouton de signalement et file de revue | Contrôles automatiques, listes de mots interdits, détection des doublons, rôles de modérateur |
| Revenus | Une seule option payante, comme les annonces mises en avant | Plusieurs formules, commissions, abonnements, factures |
| Plateformes | Une application et une page web simple par annonce | iOS, Android et un site complet |
| Langues | Arabe | Arabe et anglais |

La colonne MVP suffit pour savoir si, sur le marché choisi, les vendeurs publient et les acheteurs répondent. Tout ce qui figure dans la colonne de droite ne vaut la peine d'être construit qu'une fois que vous voyez où les utilisateurs bloquent. Nous détaillons cette approche dans [Une idée d'application ? Commencez petit avec un MVP](/blog/mobile-app-mvp-egypt).

### Pourquoi les annonces ont besoin de pages web, pas seulement d'écrans d'application

Google a traité 96,1 % des recherches en Arabie saoudite en octobre 2026. Beaucoup de gens cherchent d'abord l'article lui-même, par exemple un modèle de voiture dans une ville donnée, avant de penser à ouvrir une application précise. Si chaque annonce existe aussi sous forme de page web rapide et indexable, vos annonces peuvent apparaître dans ces résultats et amener des acheteurs qui n'ont pas encore installé l'application. C'est l'une des raisons pour lesquelles une place de marché a généralement besoin d'un site web en plus de l'application mobile.

## Confiance et sécurité : modération, fraude et identité

Une place de marché vit ou meurt selon la confiance que les acheteurs accordent à ce qu'ils voient. Cette partie mérite un budget dès le premier jour, même dans un MVP.

### Modération

Il vous faut au minimum un bouton de signalement sur chaque annonce et dans chaque conversation, une file où votre équipe examine les signalements, et la possibilité de masquer une annonce ou de suspendre un compte en une seule action. Vous pourrez ensuite ajouter des règles qui mettent automatiquement une annonce en attente de revue, par exemple quand un prix est très inférieur à la normale de la catégorie, qu'un numéro de téléphone figure dans la description ou que les mêmes photos sont publiées depuis plusieurs comptes.

### Lutte contre la fraude

Les schémas courants dans les petites annonces sont les fausses annonces avec des photos volées, les demandes d'acompte avant toute visite et les tentatives de déplacer immédiatement la conversation vers un autre canal. L'application peut aider en :

- Gardant le contact dans le chat intégré le plus longtemps possible, pour que les signalements contiennent toute la conversation.
- Affichant des conseils de sécurité dans le chat aux moments clés, par exemple quand un paiement est évoqué.
- Limitant le nombre d'annonces qu'un nouveau compte peut publier pendant ses premiers jours.
- Enregistrant l'historique des appareils et des comptes pour que votre équipe puisse relier les récidivistes.

### Options de vérification d'identité

Les options vont de la plus légère à la plus forte :

1. **Numéro de téléphone avec code à usage unique.** Le minimum habituel, suffisant pour un MVP.
2. **Vérification manuelle des documents d'entreprise** pour les concessionnaires et les sociétés qui souhaitent un badge.
3. **Identité numérique nationale.** Nafath, l'authentification unique nationale de l'Arabie saoudite, est reliée à plus de 530 plateformes publiques et privées. Il faut confirmer si votre application peut s'y connecter, et à quelles conditions, avant de bâtir un lancement autour.

Des contrôles plus stricts réduisent la fraude mais ralentissent l'inscription. Beaucoup de places de marché gardent une inscription légère et ne demandent une vérification renforcée qu'aux vendeurs qui veulent un badge ou une limite de publication plus élevée.

## Comment une telle application gagne de l'argent

Les applications de petites annonces combinent généralement plusieurs de ces modèles :

- **Des annonces mises en avant** qui apparaissent en tête d'une catégorie ou d'une recherche pendant une durée donnée.
- **Des catégories payantes ou des frais de publication** pour les articles de valeur comme les voitures ou l'immobilier.
- **Des commissions** sur les ventes conclues, encaissées par paiement intégré ou déclarées par le vendeur.
- **Des abonnements** pour les professionnels qui publient en volume.
- **De la publicité** vendue aux marques qui veulent toucher une catégorie.

Pour encaisser des paiements en Arabie saoudite, vous passez par une passerelle de paiement. Des passerelles comme Tap, PayTabs et Telr indiquent prendre en charge mada et Apple Pay, et la banque centrale saoudienne (SAMA) a agréé Tamara et Tabby pour le paiement fractionné. Avant de concevoir des mises en avant payantes dans l'application iOS ou Android, vérifiez les règles actuelles d'Apple et de Google sur les paiements de fonctions numériques, car elles déterminent les moyens de paiement que l'application elle-même peut utiliser. Notre guide des [passerelles de paiement en Arabie saoudite](/blog/payment-gateways-saudi-arabia) compare les principales options.

Les modèles à commission sont plus difficiles qu'il n'y paraît. Si la vente se fait en personne, la plateforme ne connaît le prix que si le vendeur le déclare ; prévoyez donc dès le départ comment facturer, relancer et faire respecter la règle.

## Données, hébergement et droit

Une application de petites annonces conserve des numéros de téléphone, des conversations, des localisations et parfois des pièces d'identité. Ce sont des données personnelles, et la loi saoudienne sur la protection des données personnelles (PDPL) est en vigueur depuis le 14 septembre 2023, sa période de grâce ayant pris fin le 14 septembre 2024. Elle est appliquée par la SDAIA. Parmi les obligations : notifier une violation à la SDAIA sous 72 heures, avec des sanctions pouvant atteindre 5 millions de SAR. Des commentateurs juridiques relèvent que la loi s'applique aux prestataires étrangers qui servent des personnes dans le Royaume.

Côté hébergement, la SDAIA a soumis à consultation, du 6 octobre au 5 novembre 2026, des projets d'amendements au PDPL, dont une proposition obligeant les responsables de traitement à stocker les données personnelles dans le Royaume. Il s'agit encore d'un projet, pas d'une loi. Si vous souhaitez malgré tout un hébergement local, Google Cloud dispose d'une région à Dammam, et AWS indique que sa première région saoudienne doit ouvrir en décembre 2026.

Si votre plateforme vend des biens ou des services, ou en encaisse le paiement, lisez aussi la loi sur le commerce électronique (décret royal M/126). Elle impose à une boutique d'indiquer son nom, ses coordonnées et son immatriculation commerciale, et prévoit des amendes jusqu'à 1 million de SAR. Demandez à un avocat si et comment elle s'applique à votre modèle. Il s'agit d'une information générale, pas d'un conseil juridique.

## Du MVP à la version complète : étapes et facteurs de coût

Un plan réaliste se déroule par étapes :

1. **Cadrage.** Choisir une ville ou une catégorie, définir les champs d'annonce, les règles de modération et le modèle de revenus unique à tester.
2. **Conception.** Des écrans pensés d'abord en arabe pour publier, chercher et discuter, plus le tableau de bord d'administration, validés avant toute ligne de code.
3. **Développement du MVP.** Une application, des pages web d'annonces, le chat, les signalements et la file de revue.
4. **Lancement pilote.** Alimenter la catégorie avec de vraies annonces, suivre les signalements, corriger ce qui freine la publication.
5. **Version complète.** Deuxième plateforme, catégories plus riches, vérification, nouvelles sources de revenus et modération automatisée.

Les principaux facteurs de coût sont le nombre de plateformes, la richesse du chat, le nombre de catégories avec leurs propres champs, le degré d'automatisation de la modération, les intégrations d'identité et de paiement ajoutées, et le besoin de l'arabe et de l'anglais. Un petit MVP et une plateforme complète à l'échelle de Haraj diffèrent d'un facteur important en effort ; un prix unique pour « une application comme Haraj » ne veut donc pas dire grand-chose tant que le périmètre n'est pas écrit. Pour des fourchettes types, consultez [le coût d'une application en Arabie saoudite](/blog/app-development-cost-saudi-arabia) et [le coût d'une application mobile en Égypte](/blog/app-development-cost-egypt).

Les projets commencent à 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et ferme après un appel gratuit.

## Comment KF Tech Solutions peut vous aider

Nous concevons et développons des [applications mobiles](/services/mobile-applications) avec les tableaux de bord web et les sites qui les accompagnent, en arabe et en anglais. Pour un projet de petites annonces, nous commençons généralement par rédiger avec vous le périmètre du MVP, afin que la première version teste un marché avec les fonctions qui comptent, le reste attendant l'usage réel. Nous travaillons avec des entreprises en Égypte et dans le Golfe, et Le Caire est à l'heure de Riyad de fin avril à fin octobre, avec une heure de retard en hiver. Pour en savoir plus sur notre façon de travailler avec des clients saoudiens, consultez notre [page Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### Puis-je copier le design et les fonctions de Haraj ?

Vous pouvez construire un produit du même type, mais pas copier la marque, le design ou les contenus d'une autre entreprise. Un périmètre clair, fondé sur votre propre marché et votre catégorie, est d'ailleurs plus utile qu'une copie, car vos utilisateurs et votre modèle de revenus seront différents.

### Le MVP doit-il être une application ou un site web ?

Beaucoup de places de marché démarrent avec une application mobile et une page web par annonce, pour que les annonces soient trouvées sur Google et partagées par lien. Un site complet et la deuxième plateforme mobile peuvent suivre une fois que le MVP a fait ses preuves.

### Faut-il vérifier l'identité dès le premier jour ?

Généralement non. Un numéro de téléphone avec code, un bouton de signalement et une file de revue suivie couvrent la plupart des risques du début. Ajoutez la vérification de documents ou l'identité numérique nationale lorsque les schémas de fraude ou la présence de vendeurs professionnels le justifient.

### Combien de temps prend un MVP ?

Cela dépend du périmètre : nombre de catégories, fonctions du chat et outils d'administration. Après un appel de cadrage, vous recevez un plan écrit avec étapes et dates, plutôt qu'une estimation au hasard.

### Dois-je héberger les données en Arabie saoudite ?

Le PDPL actuel autorise les transferts à l'étranger sous conditions, et la proposition d'imposer le stockage dans le Royaume n'est encore qu'un projet. Beaucoup de fondateurs choisissent un hébergement qui pourra être déplacé plus tard. Vérifiez votre cas auprès d'un conseiller juridique.

Vous avez un projet de petites annonces ou de place de marché ? [Réservez un appel gratuit](/book) ou [envoyez-nous votre idée](/contact), et nous vous aiderons à en faire un MVP au périmètre clair, avec un devis écrit et ferme.

## Sources

- [Unified National Access (Nafath)](https://en.wikipedia.org/wiki/Unified_national_access)
- [DLA Piper : Data protection laws, Saudi Arabia](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers : TMT 2026, Saudi Arabia trends and developments](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Clyde & Co : SDAIA publishes draft amendments to the PDPL](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [Ministère de l'Investissement : loi sur le commerce électronique (traduction anglaise)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
- [SAMA : mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [SAMA : agrément de Tamara Finance](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx)
- [SAMA : agrément de Tabby Finance](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)
- [Tap Payments](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
- [Telr](https://telr.com/)
- [StatCounter : parts de marché des moteurs de recherche, Arabie saoudite](https://gs.statcounter.com/search-engine-market-share/all/saudi-arabia)
- [Google Cloud : accès à la région de Dammam](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon : région AWS en Arabie saoudite](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
