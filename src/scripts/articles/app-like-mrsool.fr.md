---
title: Créer une application de courses comme Mrsool : comment ça marche
summary: Comment fonctionne une appli de courses comme Mrsool : demande, offres, chat et paiement, ce qui la distingue de la livraison de repas, et par où commencer.
tags: application de courses, application livreur, livraison à la demande, application de place de marché, MVP, Arabie saoudite
alt: Deux paires de mains se passent un sac en papier kraft devant un bâtiment blanc aux fenêtres cintrées
caption: Dans une application de courses, la remise est le dernier maillon d’une chaîne faite de demande, d’offre, de messagerie et de paiement.
stats: 3|applications dans une plateforme de courses : client, livreur, administration; 1|ville pour démarrer avant d'en ajouter une deuxième; 72 h|pour notifier la SDAIA d'une violation de données personnelles selon le PDPL
---

Une application de courses comme Mrsool permet à un client de demander qu'on achète, récupère ou livre presque n'importe quoi, et aux livreurs à proximité de proposer de s'en charger contre des frais. Il vous faut trois logiciels : une application client, une application livreur et un tableau de bord d'administration. La difficulté ne tient pas aux écrans mais aux règles qui encadrent les offres, le chat, l'argent liquide et la confiance ; la voie raisonnable consiste donc à démarrer dans une ville, avec une première version resserrée et un pilotage manuel depuis le tableau de bord, jusqu'à ce que les vraies commandes montrent ce qui mérite d'être automatisé.

Dernière vérification : 6 novembre 2026

## Comment fonctionne une application de courses, étape par étape

Mrsool ne sert ici que de référence pour un modèle connu. Le parcours de la plupart des applications de courses ressemble à ceci :

1. **Le client publie une demande.** Un texte libre comme « deux sandwichs chawarma de la boutique de cette rue » ou « récupérer un colis à cette adresse », avec un point de retrait, un point de livraison et des photos facultatives.
2. **Les livreurs proches voient la demande.** L'application la montre aux livreurs connectés dans un rayon défini.
3. **Les livreurs envoient des offres.** Chaque livreur propose des frais de livraison. Le client voit les offres, généralement avec la note et la distance du livreur, et en accepte une.
4. **Le client et le livreur échangent par chat.** Ils confirment les détails, le livreur envoie une photo du ticket de caisse et le montant final des achats est convenu.
5. **Le livreur achète ou récupère, puis livre.** Le client suit le statut, et souvent la position du livreur sur une carte.
6. **Paiement et notes.** Le client paie les achats et les frais de livraison, la plateforme prélève sa commission et chacun note l'autre.

Chaque étape cache une décision commerciale. Qui peut voir une demande, et à quelle distance ? Un livreur peut-il modifier ses frais après acceptation ? Qui paie la boutique, et quand ? Ces réponses façonnent le logiciel bien plus que le design des écrans.

## Ce qui la distingue d'une application de livraison de restaurant

Sur le téléphone, une application de courses et une application de livraison de repas se ressemblent, mais ce sont deux activités aux risques différents.

| | Application de livraison de restaurant | Application de courses |
|---|---|---|
| Ce qui est commandé | Des plats d'une carte fixe | Tout ce que le client décrit |
| Prix des achats | Connu avant le paiement | Connu seulement après l'achat par le livreur |
| Frais de livraison | Fixés par la plateforme | Proposés par les livreurs ou calculés selon la distance |
| Côté commerçant | Écran restaurant pour accepter les commandes | Généralement aucun : la boutique ignore l'existence de l'application |
| Qui gère l'argent des achats | Le restaurant est payé via la plateforme | Souvent, le livreur paie d'abord la boutique |
| Risque principal | Retards des restaurants et charge aux heures de pointe | Litiges, argent liquide et confiance entre inconnus |

L'absence de côté commerçant rend le lancement d'une application de courses moins coûteux : ni contrats avec des restaurants, ni cartes, ni tablettes. La demande ouverte la rend en revanche plus difficile à exploiter : chaque commande est différente et le prix des achats reste incertain tant que le livreur n'est pas dans la boutique. Si vous êtes un restaurant qui veut sa propre appli de commande, c'est un projet différent et plus petit ; lisez [Votre restaurant a-t-il besoin de sa propre appli de livraison ?](/blog/restaurant-delivery-app-egypt). Pour une place de marché réunissant de nombreux restaurants, lisez [Créer une application de livraison comme Jahez : périmètre et coût](/blog/delivery-app-like-jahez).

## Ce qu'il faut développer, et les parties difficiles

| Élément | Qui l'utilise | Ce qu'il doit faire |
|---|---|---|
| Application client | Les personnes qui publient des demandes | Publier une demande avec texte, photos et adresses, comparer les offres, chat, suivi, paiement, notes, adresses enregistrées |
| Application livreur | Les livreurs | Se connecter et se déconnecter, voir les demandes proches, envoyer des offres, chat, navigation, envoi des tickets, confirmation de livraison, gains |
| Tableau de bord | Votre équipe | Valider les livreurs, définir zones et règles de frais, suivre les commandes en cours, intervenir dans les litiges, remboursements, versements, rapports |

Derrière eux se trouve le serveur qui associe demandes et livreurs, transmet les messages du chat et garde tous les écrans synchronisés. C'est là que se concentre l'essentiel de l'effort technique, pas dans les applications elles-mêmes. Quatre sujets concentrent l'essentiel du travail de conception.

### Offres et tarification

Laisser les livreurs faire des offres est simple à programmer et difficile à équilibrer. Trop peu d'offres, et les clients partent ; trop d'offres basses, et les livreurs arrêtent. Beaucoup d'équipes commencent par des frais calculés selon la distance, avec un minimum, et ajoutent les offres plus tard, ou ne laissent les livreurs proposer qu'à l'intérieur d'une fourchette fixée dans le tableau de bord.

### Le chat

C'est dans le chat que la commande se conclut vraiment ; il doit donc être fiable : texte, photos, accusés de lecture et un historique que votre support peut consulter en cas de litige. Masquez les numéros de téléphone personnels et décidez de la durée de conservation des conversations.

### L'argent des achats

C'est la principale question de conception. Si les livreurs paient la boutique de leur poche, ils portent le risque quand un client annule ou refuse l'article. Si les clients paient d'avance, le montant reste une estimation jusqu'à l'arrivée du ticket. Les réponses courantes sont un plafond de valeur des achats par commande, un paiement anticipé pour les commandes importantes et une règle d'annulation claire une fois les articles achetés.

### Confiance et sécurité

Les livreurs sont des inconnus qui se présentent aux domiciles et manipulent de l'argent. Il vous faut une inscription des livreurs avec vérification des pièces d'identité par votre équipe, des notes dans les deux sens, un moyen de signaler un problème depuis la commande et la possibilité de suspendre un compte depuis le tableau de bord. Avant le lancement, vérifiez auprès de l'autorité compétente et de votre avocat les règles en vigueur pour les livreurs indépendants et pour les produits que vous refuserez.

## Une première version à lancer dans une ville

Commencez par une ville, quelques types de demandes et des livreurs que vous pouvez joindre directement. Un plan par étapes garde le premier développement léger.

| Phase | Ce que vous lancez | Ce qui attend |
|---|---|---|
| 1. Première version | Applications client et livreur, demande avec texte et photo, frais selon la distance, chat, mises à jour de statut, paiement par carte et en espèces, tableau de bord avec attribution manuelle | Offres des livreurs, portefeuilles, promotions, autres villes |
| 2. Croissance | Offres des livreurs encadrées, suivi en direct sur la carte, notes, codes promo, rapports de gains et de versements des livreurs | Abonnements, règles d'attribution automatique |
| 3. Passage à l'échelle | Appariement plus fin, davantage de zones et de villes, portefeuilles, comptes entreprises, analyses plus poussées | Seulement ce que les données justifient |

La phase 1 doit prouver que les clients reviennent, que les livreurs gagnent assez pour rester connectés et que les litiges restent gérables. Si l'un de ces points échoue, ajouter des fonctions n'y changera rien. Nous détaillons cette approche dans [Une idée d'application ? Commencez petit avec un MVP](/blog/mobile-app-mvp-egypt).

Le pilotage manuel depuis le tableau de bord est le raccourci le plus utile : un opérateur peut attribuer un livreur, ajuster des frais ou régler un litige à la main, et ces décisions deviennent les règles que vous automatiserez ensuite.

## Ce qui détermine le coût de votre version

Il n'existe pas de prix unique honnête pour « une appli comme Mrsool », car l'expression couvre aussi bien un service dans une ville à frais fixes qu'une plateforme nationale avec offres, portefeuilles et comptes entreprises. Voici les choix qui pèsent le plus sur le chiffre.

| Décision | Projet plus petit | Projet plus grand |
|---|---|---|
| Tarification | Frais selon des règles de distance | Offres des livreurs avec limites et contre-offres |
| Types de demandes | Quelques-uns, comme les courses alimentaires et les colis | Demandes ouvertes de tout type |
| Attribution | Manuelle depuis le tableau de bord | Appariement automatique selon distance, note et charge |
| Suivi | Mises à jour de statut | Carte en direct avec heure d'arrivée estimée |
| Paiements | Une passerelle, carte et espèces | Portefeuilles, versements répartis, remboursements par règles |
| Couverture | Une ville | Plusieurs villes avec frais par zone |

Les coûts d'exploitation continuent après le lancement : serveurs, cartographie, SMS pour les codes de connexion, notifications, comptes développeur des stores, frais de passerelle de paiement et support. Demandez à chaque prestataire de les indiquer séparément du prix de développement.

Les projets démarrent à 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et fixe après un appel gratuit.

## Paiements et données personnelles en Arabie saoudite

Cette section est une information générale et non un conseil juridique ou fiscal. Vérifiez les détails pour votre entreprise avec votre comptable et votre avocat.

- **Paiements.** mada, le réseau national de paiement détenu par la SAMA, prend en charge Apple Pay, mada Pay, Samsung Pay et Google Pay, ainsi que les paiements en ligne via 3-D Secure. Les applications les acceptent généralement par une passerelle agréée ; Tap, PayTabs et Telr mentionnent chacune mada et Apple Pay. Pour une application de courses, demandez tôt à la passerelle comment elle gère remboursements, préautorisations et versements aux livreurs. Notre guide [Passerelles de paiement en Arabie saoudite : comment choisir](/blog/payment-gateways-saudi-arabia) compare les options.
- **Données personnelles.** Une application de courses conserve noms, numéros de téléphone, adresses de domicile, messages, photos de tickets et positions des livreurs. La loi saoudienne sur la protection des données personnelles (PDPL) est en vigueur depuis le 14 septembre 2023, est supervisée par la SDAIA, impose de notifier une violation dans les 72 heures et s'applique aux prestataires étrangers qui servent des personnes dans le Royaume. Ne collectez que le nécessaire et décidez où les données sont hébergées.
- **Mentions obligatoires du commerce électronique.** La loi sur le commerce électronique impose à une boutique en ligne d'indiquer son nom, ses coordonnées et son registre du commerce, et de fournir au client les conditions du contrat. Placez vos conditions, vos règles d'annulation et vos coordonnées dans l'application dès le premier jour.

## Ce que fait KF Tech Solutions

KF Tech Solutions développe des applications mobiles et des tableaux de bord web, et nous avons déjà construit un logiciel de demande et de répartition : la plateforme de remorquage et d'assistance routière [Eltayib](/projects/eltayib) permet à un conducteur de demander de l'aide en quelques gestes, suit la demande en temps réel et donne à l'exploitant un seul endroit pour gérer les services, la couverture et la flotte. Pour une application de courses, nous cadrons une première version pour une ville avec les applications client et livreur et un tableau de bord en arabe et en anglais, puis nous planifions la phase suivante à partir des vraies commandes. Nous travaillons avec des entreprises en Égypte et dans le Golfe. Découvrez notre [service d'applications mobiles](/services/mobile-applications) et notre page pour les [entreprises en Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### Puis-je copier le design et le nom de Mrsool ?

Non. Servez-vous-en comme référence de ce qu'attendent les clients, par exemple des offres claires et un chat simple, mais votre marque, vos écrans et vos contenus doivent vous appartenir. Son nom et son logo appartiennent à son propriétaire.

### Ai-je besoin de livreurs avant que l'application soit prête ?

Il vous faut un premier groupe avant le lancement, car un client qui ne reçoit aucune offre réessaie rarement. Beaucoup d'équipes recrutent et forment des livreurs dans une zone pendant le développement, puis n'ouvrent l'application aux clients que dans cette zone.

### Les livreurs doivent-ils faire des offres, ou l'application fixe-t-elle les frais ?

Pour une première version, des frais calculés selon la distance sont plus simples à expliquer et à gérer. Les offres peuvent venir une fois les frais habituels connus, et fonctionnent mieux avec des limites réglées dans le tableau de bord.

### Une seule appli pour iOS et Android, ou deux applis natives ?

Pour la plupart des premières versions, une base de code multiplateforme pour iOS et Android limite le coût et la maintenance. Les applications natives se justifient plus tard si des fonctions lourdes de cartographie ou d'appareil l'exigent.

### Le code source m'appartiendra-t-il ?

Il le devrait. Exigez dans le contrat la cession complète du code source et de la propriété intellectuelle, avec un accord de confidentialité, la restitution ou la suppression sécurisée de vos données en fin de contrat et une procédure de notification des incidents.

Si vous préparez une application de courses ou de livreurs pour l'Arabie saoudite, [parlez-nous de votre idée](/contact) ou [réservez un appel gratuit](/book) : nous vous aiderons à la ramener à une première phase que vous pourrez lancer.

## Sources

- [SAMA : mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap](https://www.tap.company/en-sa), [PayTabs](https://www.paytabs.com/en/) et [Telr](https://telr.com/)
- [DLA Piper : lois sur la protection des données en Arabie saoudite](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers TMT 2026 : tendances et évolutions en Arabie saoudite](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Loi saoudienne sur le commerce électronique (traduction officielle)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
