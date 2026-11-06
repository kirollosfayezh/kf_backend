---
title: Créer une application de livraison comme Jahez : périmètre et coût
summary: Les quatre applis d'une plateforme de livraison en Arabie saoudite, pourquoi celles comme Jahez coûtent cher, et un plan pour lancer dans une seule ville.
tags: application de livraison, livraison de repas, application marketplace, coût d'une application, MVP, Arabie saoudite
alt: Vue d’un livreur à moto dans la circulation, deux téléphones fixés sur le guidon
caption: Derrière le téléphone du livreur, la répartition, le suivi en direct et les paiements rendent une plateforme coûteuse.
stats: 150 M+|commandes dépassées par Keeta en Arabie saoudite en 2025; 68,7 M|commandes traitées par Jahez sur les neuf premiers mois de 2025; 4|applis dans une plateforme de livraison : client, livreur, restaurant, administration
---

Créer une application de livraison comme Jahez, c'est construire quatre produits et non un seul : une application client, une application livreur, un écran pour le restaurant et un tableau de bord d'administration. Le menu et le paiement sont la partie la moins chère. Ce qui rend les grandes plateformes coûteuses, c'est la répartition des commandes, le suivi en direct, les reversements et l'exploitation dans de nombreuses villes : la voie raisonnable consiste donc à commencer par une ville et une première version resserrée, puis à ajouter le reste quand les commandes réelles le justifient.

Dernière vérification : 6 novembre 2026

## Ce que signifie vraiment « une appli comme Jahez »

Quand on demande « une appli comme Jahez », on pense généralement à l'application client : parcourir les restaurants, commander, payer et suivre le livreur sur une carte. Derrière cet écran se trouvent trois autres logiciels, chacun avec ses propres utilisateurs.

| Élément | Qui l'utilise | Ce qu'il doit faire |
|---|---|---|
| Application client | Les personnes qui commandent | Restaurants et menus, panier, paiement, statut de commande, avis, adresses enregistrées |
| Application livreur | Les chauffeurs | Se connecter et se déconnecter, accepter les courses, navigation, confirmation de retrait et de livraison, gains |
| Écran restaurant | Le personnel du restaurant | Alerte de commande, accepter ou refuser, temps de préparation, articles indisponibles |
| Tableau de bord | Votre équipe | Restaurants, menus, livreurs, zones et frais de livraison, commissions, remboursements, support, rapports |

Il existe aussi un cinquième élément que personne ne voit : le serveur qui relie le tout, décide quel livreur reçoit quelle commande et garde tous les écrans synchronisés. C'est là que se concentre l'essentiel de l'effort de développement.

Une marketplace doit en outre convaincre trois publics en même temps : ceux qui commandent, les restaurants qui s'inscrivent et les livreurs qui livrent. Le logiciel peut être prêt bien avant l'exploitation, alors planifiez les deux ensemble.

## Pourquoi les grandes plateformes coûtent si cher

La taille du marché saoudien explique pourquoi les applications leaders emploient de grandes équipes techniques. Keeta, lancée en Arabie saoudite à l'automne 2024, a dépassé 150 millions de commandes dans le Royaume en 2025, dans 23 villes et avec plus de 50 000 restaurants. Jahez a traité environ 68,7 millions de commandes sur les neuf premiers mois de 2025. HungerStation, l'autre grande plateforme locale, ne publie pas ses chiffres de commandes en Arabie saoudite. Vous n'avez besoin de rien d'approchant pour démarrer, mais ces chiffres montrent où part l'argent.

### La répartition des commandes

Choisir le bon livreur pour chaque commande est la partie la plus difficile. Une version simple propose la commande aux livreurs proches, et le premier qui accepte la prend. Une version aboutie pondère la distance, le temps de préparation, le trafic, le regroupement de deux commandes sur une même course et l'équité entre chauffeurs. Cette logique s'affine pendant des années sur des données réelles.

### Le suivi en direct

Pour montrer le livreur en mouvement sur la carte, l'application livreur envoie sa position toutes les quelques secondes, le serveur la transmet et l'application client la redessine sans vider la batterie. Multipliez cela par des milliers de livreurs au pic du déjeuner, et il vous faut une infrastructure conçue pour cela, plus des services de cartographie et d'itinéraires facturés à l'usage.

### Reversements et flux d'argent

Chaque commande répartit l'argent entre le restaurant, le livreur, votre commission, les frais de livraison, les remises et la TVA. S'y ajoutent les remboursements, les commandes annulées, les espèces encaissées par les livreurs et les règlements hebdomadaires avec chaque restaurant. La partie comptable est souvent plus lourde que l'application elle-même.

### De nombreuses villes

Chaque nouvelle ville ajoute des zones de livraison, des règles tarifaires, des livreurs à recruter, des heures de support et l'intégration de restaurants. Le logiciel doit gérer des règles différentes par zone, et votre équipe doit les faire fonctionner.

### La fiabilité aux heures de pointe

Une application de livraison s'utilise par pics courts et intenses autour des repas. Une panne à l'heure du dîner coûte immédiatement des commandes et la confiance des restaurants : la supervision, les tests et la permanence du support font donc partie du projet, ce ne sont pas des options.

## Un plan par étapes pour une ville

Commencez là où vous pouvez maîtriser la qualité : une ville, un nombre limité de restaurants et des livreurs avec qui vous pouvez parler directement. Un plan type se présente ainsi.

| Phase | Ce que vous lancez | Ce qui attend |
|---|---|---|
| 1. Première version | Application client, écran restaurant simple, application livreur avec attribution manuelle ou au livreur le plus proche, tableau de bord de base, paiement par carte et en espèces | Regroupement automatique, fidélité, moteur de promotions, autres villes |
| 2. Croissance | Suivi en direct sur la carte, avis, codes promo, rapports pour les restaurants, rapports de règlement | Répartition avancée, abonnements |
| 3. Passage à l'échelle | Répartition plus intelligente, plus de zones et de villes, abonnements, outils marketing, analyses plus poussées | Uniquement ce que les données montrent comme nécessaire |

La phase 1 doit prouver trois choses : les clients recommandent, les restaurants laissent leur tablette allumée et les livreurs gagnent assez pour rester. Si l'un de ces points échoue, ajouter des fonctionnalités n'y changera rien. Nous détaillons cette approche dans [Une idée d'application ? Commencez petit avec un MVP](/blog/mobile-app-mvp-egypt).

Deux raccourcis font gagner beaucoup en phase 1 :

- **La répartition manuelle depuis le tableau de bord.** Au début, un opérateur attribue les commandes à la main, ce qui vous apprend aussi ce que devront être les règles automatiques.
- **Un écran restaurant dans le navigateur.** Une tablette affichant une page web suffit pour recevoir les commandes ; une application native dédiée au restaurant peut attendre.

## Ce qui détermine le coût de votre version

Il n'existe pas de prix unique honnête pour « une appli comme Jahez », car deux projets portant le même nom peuvent varier du simple au multiple. Voici les décisions qui font le plus bouger le chiffre.

| Décision | Projet plus petit | Projet plus grand |
|---|---|---|
| Qui vend | Un restaurant ou une chaîne | De nombreux restaurants indépendants |
| Livreurs | Les chauffeurs du restaurant ou un partenaire de livraison | Votre propre réseau de livreurs indépendants |
| Attribution | Manuelle ou au livreur le plus proche | Répartition automatique avec regroupement |
| Suivi | Statuts : acceptée, en route, livrée | Carte en direct avec heure d'arrivée estimée |
| Paiements | Une passerelle, carte et espèces | Portefeuilles, règlements fractionnés, paiement différé |
| Couverture | Une ville | Plusieurs villes avec frais par zone |

La première ligne compte le plus. Si vous êtes un restaurant ou une chaîne qui veut sa propre application de commande plutôt qu'une marketplace, le périmètre diminue nettement ; nous traitons ce cas dans [Votre restaurant a-t-il besoin de sa propre appli de livraison ?](/blog/restaurant-delivery-app-egypt). Pour les budgets d'application dans le Royaume en général, consultez [Combien coûte le développement d'une application en Arabie saoudite ?](/blog/app-development-cost-saudi-arabia), et pour la manière dont un travail comparable est chiffré depuis l'Égypte, [Combien coûte vraiment une application mobile en Égypte en 2026](/blog/app-development-cost-egypt).

Des coûts d'exploitation continuent après le lancement : serveurs, services de cartographie et de SMS, comptes développeur sur les stores, frais de la passerelle de paiement et support. Demandez à chaque prestataire de les lister séparément du prix de développement.

Les projets démarrent à partir de 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et ferme après un appel gratuit.

## Paiements, factures et données personnelles en Arabie saoudite

Cette section est une information générale, pas un conseil juridique ou fiscal. Vérifiez les détails propres à votre entreprise avec votre comptable et votre avocat.

- **Paiements.** mada, le réseau national de paiement détenu par la SAMA, prend en charge Apple Pay, mada Pay, Samsung Pay et Google Pay, ainsi que les paiements en ligne via 3-D Secure. Les applications les acceptent généralement par une passerelle agréée ; Tap, PayTabs et Telr indiquent tous mada et Apple Pay, et certains aussi Tabby ou Tamara. Demandez tôt à la passerelle comment elle gère les remboursements et les règlements aux restaurants.
- **Facturation électronique.** Les entreprises immatriculées à la TVA et résidentes en Arabie saoudite émettent des factures électroniques selon les règles FATOORA de la ZATCA, et le guide détaillé couvre aussi les tiers qui émettent des factures pour le compte d'un assujetti. Décidez tôt qui émet chaque facture dans votre modèle ; notre guide sur [l'intégration à la phase 2 de la ZATCA pour votre propre POS ou ERP](/blog/zatca-phase-2-integration-custom-pos-erp) explique ce que le système doit faire.
- **Données personnelles.** Une application de livraison conserve des noms, des numéros de téléphone, des adresses et la position des livreurs. La loi saoudienne sur la protection des données personnelles (PDPL) est en vigueur depuis le 14 septembre 2023, impose de notifier une violation de données à la SDAIA sous 72 heures et s'applique aux prestataires étrangers qui servent des personnes dans le Royaume. Ne collectez que le nécessaire et décidez où les données sont hébergées.
- **Mentions obligatoires du e-commerce.** La loi sur le commerce électronique oblige une boutique en ligne à indiquer son nom, ses coordonnées et son registre de commerce, et à fournir au client les conditions du contrat. Intégrez ces informations dans l'application et sur son site dès le premier jour.

## Ce que fait KF Tech Solutions

KF Tech Solutions développe des applications mobiles et des tableaux de bord web, et nous découpons les plateformes de livraison en phases : une première version pour une ville, avec l'application client, l'application livreur, l'écran restaurant et le tableau de bord en arabe et en anglais, puis la phase suivante une fois les commandes arrivées. Nous travaillons avec des entreprises en Égypte et dans le Golfe ; Le Caire est à l'heure de Riyad de fin avril à fin octobre, et une heure derrière en hiver. Découvrez notre [service d'applications mobiles](/services/mobile-applications) et notre page pour les [entreprises en Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### Combien de temps faut-il pour développer une application de livraison ?

Cela dépend du nombre d'éléments, parmi les quatre, dont vous avez besoin dès le premier jour, et de la part de la répartition qui démarre en manuel. Une première version pour une ville avec répartition manuelle est bien plus rapide qu'une plateforme multi-villes avec répartition automatique. Après le premier appel, vous devriez recevoir un plan écrit avec une date pour chaque phase.

### Puis-je copier le design de Jahez ou de Keeta ?

Non. Servez-vous des grandes applications comme référence de ce qu'attendent les clients, par exemple un statut de commande clair et des adresses enregistrées, mais votre marque, vos écrans et vos contenus doivent vous appartenir. Leurs noms et logos sont la propriété de leurs titulaires.

### Ai-je besoin de mes propres livreurs dès le départ ?

Pas forcément. Beaucoup de projets commencent avec les chauffeurs des restaurants ou un partenaire de livraison, puis créent leur propre réseau de livreurs lorsque le volume de commandes d'une zone suffit à les occuper.

### Une seule appli pour iOS et Android, ou deux applis natives ?

Pour la plupart des premières versions, une base de code multiplateforme pour iOS et Android limite le coût et la maintenance. Les applications natives se justifient plus tard si des fonctions lourdes de cartographie ou d'appareil l'exigent.

### Le code source m'appartiendra-t-il ?

Il le devrait. Exigez dans le contrat la cession complète du code source et de la propriété intellectuelle, avec un accord de confidentialité, la restitution ou la suppression sécurisée de vos données en fin de contrat et une procédure de notification des incidents.

Si vous préparez une application de livraison pour l'Arabie saoudite, [parlez-nous de votre idée](/contact) ou [réservez un appel gratuit](/book) : nous vous aiderons à la ramener à une première phase que vous pourrez lancer.

## Sources

- [Argaam : chiffres de commandes de Keeta et Jahez pour 2025](https://www.argaam.com/en/article/articledetail/id/1886411)
- [Rest of World : Keeta, HungerStation et Jahez en Arabie saoudite](https://restofworld.org/2025/delivery-app-keeta-hungerstation-saudi-arabia/)
- [SAMA : mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap](https://www.tap.company/en-sa), [PayTabs](https://www.paytabs.com/en/) et [Telr](https://telr.com/)
- [ZATCA : qu'est-ce que la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA : guide détaillé de la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [DLA Piper : lois sur la protection des données en Arabie saoudite](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers TMT 2026 : tendances et évolutions en Arabie saoudite](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Loi saoudienne sur le commerce électronique (traduction officielle)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
