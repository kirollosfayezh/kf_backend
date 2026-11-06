---
title: Menus QR et commande à table pour les restaurants en Égypte
summary: Ce qu’un menu QR permet au-delà des prix : commander et payer à table, l’écran de cuisine et le lien avec votre caisse et votre stock.
tags: menu QR, commande à table, restaurant, écran de cuisine, logiciel de caisse, Égypte
alt: Chevalet à code QR sur une table de terrasse à côté d’une plante en pot, avec de la verdure derrière
caption: Le code sur la table n’est qu’un début : la commande doit arriver à l’écran de cuisine et à la caisse.
stats: 3|niveaux : consulter le menu, commander, payer à table; 1|menu et liste de prix partagés par le QR, la caisse et la cuisine; 0|commande de table qu’un serveur devrait ressaisir dans la caisse
---

Un système de menu QR permet au client de scanner un code sur la table, de voir votre carte sur son téléphone et, si vous le souhaitez, de commander et de payer sans attendre un serveur. Pour un restaurant ou un café en Égypte, la version utile n’est pas un PDF derrière un code QR : c’est un menu vivant relié à votre cuisine et à votre logiciel de caisse, de sorte qu’une commande passée à la table 7 s’imprime en cuisine et arrive sur la bonne addition. Avoir besoin de la commande et du paiement, ou seulement du menu, dépend du fonctionnement de votre salle.

## Ce que peut couvrir un système de menu QR

Il existe trois niveaux, et chacun ajoute du travail et de la valeur :

| Niveau | Ce que fait le client | Ce qu’il faut derrière |
| --- | --- | --- |
| Menu en consultation seule | Scanne, lit la carte et les prix, appelle le serveur | Un menu que vous modifiez depuis un espace d’administration |
| Commande à table | Ajoute plats, remarques et options, envoie la commande | Numéros de table, écran ou imprimante de cuisine, lien avec la caisse |
| Commander et payer | Commande puis paie par carte ou portefeuille mobile | Tout ce qui précède, plus une passerelle de paiement en ligne |

Beaucoup de restaurants commencent au premier niveau et montent ensuite. Un système conçu dès le départ pour le troisième niveau devrait tout de même vous permettre de désactiver la commande ou le paiement par établissement ou selon l’heure de la journée.

## Un menu en consultation seule n’est pas rien

Même sans commande, un bon menu numérique règle de vrais problèmes. Vous changez un prix ou retirez un plat épuisé une seule fois, et toutes les tables le voient aussitôt, sans réimpression. Vous pouvez montrer des photos, les ingrédients et les allergènes, et proposer l’arabe et l’anglais sur le même code.

Ce qu’il ne règle pas, c’est l’attente de quelqu’un pour prendre la commande. Si votre goulot d’étranglement aux heures de pointe est la prise de commande, un menu en consultation seule aide peu.

## Le parcours d’une commande à table

C’est sur la commande qu’un système QR se révèle utile ou pénible. Un bon parcours ressemble à ceci :

1. Le client scanne le code de la table 7. Le menu s’ouvre en connaissant déjà la table, sans numéro à saisir.
2. Le client choisit plats, tailles, suppléments et remarques comme « sans oignons », puis envoie la commande.
3. La commande s’affiche sur l’écran de cuisine ou s’imprime sur l’imprimante de cuisine, répartie par poste : les grillades au grill, les boissons au bar.
4. La même commande s’ajoute à l’addition ouverte de la table 7 dans le logiciel de caisse.
5. Le personnel voit l’état de la commande, et le client aussi : reçue, en préparation, servie.

Le point à vérifier est l’étape 4. Si un serveur doit lire la commande sur le téléphone et la ressaisir dans la caisse, vous avez doublé le travail et ajouté une source d’erreurs.

Décidez aussi qui valide les commandes. Certains restaurants les envoient directement en cuisine. D’autres veulent qu’un serveur accepte d’abord chaque nouvelle commande, pour repérer une commande passée depuis le code d’une autre table ou par plaisanterie.

## Le lien avec votre logiciel de caisse

Le menu QR ne doit pas être un système séparé avec ses propres prix. Un seul menu, une seule liste de prix et un seul catalogue d’articles doivent alimenter le menu QR, l’écran de caisse et la cuisine. Quand vous changez le prix d’un plat, il change partout.

Le même lien compte pour le stock. Si les plats déduisent leurs ingrédients de l’inventaire, une commande passée depuis le téléphone doit les déduire exactement comme une commande saisie en caisse, sinon vos chiffres de stock dérivent.

Si vous choisissez encore votre caisse, lisez d’abord notre article [caisse toute faite ou sur mesure pour un restaurant](/blog/ready-made-vs-custom-pos-restaurants), car le menu QR dépend de ce que la caisse permet.

Si votre entreprise relève du système de reçus électroniques, chaque vente doit toujours se terminer par un reçu émis par votre caisse. L’administration fiscale égyptienne (ETA) publie une API eReceipt à laquelle se connectent les systèmes des contribuables, et son site propose un service pour vérifier si un contribuable est visé par les décisions sur le reçu électronique. Les commandes du menu QR doivent simplement rejoindre l’addition, afin que la caisse émette le reçu comme d’habitude.

## Payer à table

Le paiement depuis le téléphone évite d’attendre l’addition à la fin, souvent le moment le plus lent d’une soirée chargée. Il faut pour cela une passerelle de paiement en ligne ; notre guide des [passerelles de paiement en Égypte](/blog/payment-gateways-egypt) explique leur fonctionnement et ce qu’il faut comparer.

Décidez tôt comment gérer :

- **Le partage de l’addition** entre plusieurs clients d’une même table.
- **Les pourboires et le service**, et leur affichage sur l’addition.
- **Le paiement mixte**, quand une partie est payée par téléphone et une partie en espèces au comptoir.
- **Les remboursements** quand un plat est annulé après paiement.

Chaque paiement à table doit clôturer la bonne addition dans la caisse, pour que le comptage de fin de service corresponde.

## Ce qu’il faut vérifier avant de choisir

- **Aucune application à télécharger.** Le menu doit s’ouvrir en quelques secondes dans le navigateur du téléphone, même avec une connexion mobile faible.
- **L’arabe et l’anglais** avec une vraie mise en page de droite à gauche, pas une page anglaise inversée.
- **Votre propre espace d’administration** pour modifier articles, prix, photos et disponibilité sans appeler le fournisseur.
- **Des boutons « épuisé »** que la cuisine ou la caisse peuvent activer pendant le service.
- **Un code par table**, réimprimable ou modifiable si un code est copié.
- **Ce qui se passe quand Internet coupe**, pour les téléphones des clients comme pour la cuisine et la caisse.
- **À qui appartiennent les données des clients**, comme les numéros de téléphone recueillis avec les commandes, et si vous pouvez les exporter.

Si vous livrez aussi, le même menu peut alimenter votre propre canal de commande. Notre article sur [votre propre application de commande et de livraison](/blog/restaurant-delivery-app-egypt) indique quand cela en vaut la peine.

## Ce que fait KF Tech Solutions

Nous développons des logiciels de caisse, de gestion de stock et des applications web dans le cadre de nos [systèmes de gestion](/services/business-systems), et nous avons connecté des caisses au système de reçus électroniques égyptien. Un menu QR avec commande à table est une application web construite sur cette base : un menu partagé avec la caisse, des commandes acheminées vers la cuisine et un paiement par passerelle quand vous le souhaitez. Nous travaillons avec des entreprises en Égypte et dans le Golfe.

## Questions fréquentes

### Les clients doivent-ils télécharger une application ?

Non. Le code QR ouvre une page web dans le navigateur du téléphone. Demander aux clients d’installer une application juste pour lire le menu en fait renoncer la plupart.

### Le menu peut-il être en arabe et en anglais ?

Oui. Le client choisit la langue, et les deux versions proviennent du même catalogue d’articles, donc les prix ne diffèrent jamais.

### Puis-je modifier les prix ou marquer un plat comme épuisé moi-même ?

Vous devriez pouvoir le faire depuis un espace d’administration sur téléphone ou ordinateur, et la modification devrait apparaître aussitôt sur les tables et à la caisse.

### Un menu QR remplace-t-il les serveurs ?

Non. Il supprime l’attente du menu, de la commande et de l’addition. Les serveurs continuent de servir, de conseiller et de s’occuper des tables, avec moins de temps passé à noter les commandes.

### Et si un client commande depuis la mauvaise table ?

Chaque code porte sa table, et vous pouvez exiger qu’un serveur accepte les nouvelles commandes avant qu’elles n’arrivent en cuisine. Cela intercepte la plupart des erreurs et des plaisanteries.

Si vous voulez un menu QR qui alimente votre cuisine et votre caisse plutôt qu’un PDF derrière un code, [réservez un appel gratuit](/book) ou [envoyez-nous votre menu et le fonctionnement de votre salle](/contact).

## Sources

- [Administration fiscale égyptienne (ETA)](https://www.eta.gov.eg/en)
- [Documentation de l’API eReceipt de l’ETA](https://sdk.invoicing.eta.gov.eg/ereceiptapi/)
