---
title: Logiciel de gestion des livraisons pour les entreprises du Golfe
summary: Comment s'articulent dispatch, application livreur, preuve de livraison et rapprochement des espèces, et quand créer votre système ou vous abonner.
tags: logiciel de gestion des livraisons, application livreur, dispatch, preuve de livraison, Arabie saoudite, Émirats arabes unis, CCG
alt: Livreur en casque et veste verts consultant son téléphone devant des immeubles d’habitation
caption: Le téléphone du livreur réunit l’affectation, l’itinéraire, la preuve de livraison et l’argent encaissé.
stats: 1|écran où le dispatch voit chaque commande en cours; 3|preuves de livraison courantes : photo, signature, code; 24|heures pour déclarer une facture simplifiée en Arabie saoudite
---

Un logiciel de gestion des livraisons reçoit une commande de votre boutique en ligne, de votre caisse ou du téléphone, l'attribue à un livreur, la suit jusqu'à la porte et enregistre la preuve qu'elle est arrivée et a été payée. Pour une entreprise du Golfe qui gère ses propres livreurs, il remplace le groupe WhatsApp, la feuille de tournée papier et la dispute du soir autour des espèces. Si toutes vos commandes partent chez un transporteur, une liaison propre avec son système peut suffire, sans plateforme complète.

Dernière vérification : 6 novembre 2026

## Vos livreurs, un transporteur, ou les deux

- **Flotte interne.** Vos livreurs, vos véhicules, votre planning. Vous maîtrisez les délais et le service, et vous supportez le coût des heures creuses, du carburant et de la gestion des espèces. C'est là qu'un logiciel de livraison est le plus rentable.
- **Logistique externalisée (3PL).** Un transporteur livre contre des frais par envoi et suit l'envoi dans son propre système. Il vous faut lui transmettre les commandes, imprimer ses étiquettes et récupérer le statut ainsi que les espèces encaissées.
- **Mixte.** Beaucoup d'entreprises livrent elles-mêmes les commandes proches et confient les plus lointaines ou le surplus à un transporteur. Le logiciel décide alors, commande par commande, qui la prend, et affiche au client un statut unique dans les deux cas.

Les restaurants qui hésitent entre leurs propres livreurs et les applications de livraison peuvent lire [application de commande propre ou applications de livraison](/blog/restaurant-own-app-vs-delivery-apps-gulf).

## Le dispatch : la bonne commande au bon livreur

Le dispatch est l'écran que votre équipe d'exploitation surveille toute la journée. Un écran utile affiche :

- Chaque commande en cours avec son adresse, l'heure promise et le mode de paiement.
- Les livreurs en service, leur position et le nombre de commandes de chacun.
- Les commandes regroupées par zone, pour qu'un livreur prenne trois arrêts proches plutôt que trois livreurs un arrêt chacun.
- Les commandes en retard signalées avant que le client n'appelle.

Commencez par l'attribution manuelle, où le répartiteur fait glisser une commande vers un livreur, avec des suggestions par zone. L'attribution automatique et l'optimisation des tournées peuvent attendre que le volume les justifie.

Beaucoup de clients partagent une position sur la carte plutôt qu'une adresse écrite. Le formulaire de commande doit donc accepter une position, l'enregistrer avec le client et la transmettre à la carte du livreur.

## L'application livreur et la preuve de livraison

L'application livreur est une application mobile installée sur le téléphone personnel du livreur ou sur un appareil de l'entreprise. Elle doit bien faire peu de choses :

1. Afficher les prochaines commandes dans l'ordre, avec la position du client et un bouton qui ouvre la navigation.
2. Appeler le client depuis l'application.
3. Changer le statut d'un geste : récupérée, en route, livrée, échec.
4. Enregistrer la preuve de livraison : une photo à la porte, une signature sur l'écran ou un code à usage unique que le client communique.
5. Enregistrer un échec de livraison avec son motif, pour que la commande revienne au dispatch au lieu de disparaître.

La preuve de livraison règle la plupart des litiges : une photo horodatée et géolocalisée répond en une minute à « je n'ai jamais rien reçu ». Pour les marchandises de valeur, un code à usage unique est plus sûr, car seule la personne qui tient le téléphone du client peut le donner.

Gardez l'application assez simple pour s'utiliser d'une main dans une voiture surchauffée : grands boutons, arabe et anglais, et un mode hors ligne qui envoie les mises à jour dès le retour du réseau.

## Paiement à la livraison et rapprochement des espèces

C'est sur les espèces que la livraison perd de l'argent sans bruit. Chaque livreur doit avoir un solde courant dans le système : chaque commande payée en espèces l'augmente, chaque remise à la caisse ou au bureau le diminue. En fin de service, le livreur remet les espèces, le caissier saisit le montant, et tout écart est enregistré au nom de ce livreur et de ce service.

Les paiements par carte à la porte, par terminal ou lien de paiement, doivent rester hors du solde en espèces du livreur. Les paiements partiels, les articles retournés et les commandes refusées ont chacun besoin de leur propre statut ; si tout est saisi comme « annulé », les chiffres des espèces ne concorderont jamais.

Si un transporteur encaisse des espèces pour vous, le système doit rapprocher chaque reversement de ses commandes et montrer celles qui restent impayées.

## Relier la livraison à la boutique, à la caisse et au stock

Un logiciel de livraison isolé crée une deuxième copie de chaque commande, et les deux copies divergent. Les liaisons qui comptent sont :

- **Boutique en ligne ou application de commande.** Les commandes arrivent automatiquement, et le client voit le statut du livreur sans appeler.
- **Caisse.** Les commandes par téléphone et au comptoir à livrer partent vers le dispatch depuis l'écran de caisse, et les paiements encaissés par les livreurs clôturent la vente dans la caisse.
- **Stock.** Une livraison échouée ou retournée remet l'article en stock. Notre guide sur la [gestion des stocks](/blog/inventory-management-system-egypt) explique où le stock disparaît, et les livraisons en font partie.
- **Factures.** La facture doit venir de la caisse ou de l'ERP qui émet déjà les factures, pas de l'application de livraison.

En Arabie saoudite, la facturation électronique est en vigueur : les factures simplifiées aux consommateurs sont déclarées à la ZATCA sous 24 heures, et les entreprises de la vague 25 doivent se connecter à FATOORA au plus tard le 1er février 2027. Aux Émirats arabes unis, la facturation électronique B2B via un prestataire accrédité (ASP) devient obligatoire le 1er janvier 2027 pour un chiffre d'affaires d'au moins 50 millions d'AED, les factures aux consommateurs étant exclues pour l'instant. Voir [la facturation électronique dans chaque pays du CCG](/blog/gcc-e-invoicing-by-country). Il s'agit d'une information générale, pas d'un conseil fiscal.

## Créer votre système ou vous abonner à une plateforme

| | Plateforme par abonnement (SaaS) | Système sur mesure |
|---|---|---|
| Délai de démarrage | Quelques jours | De quelques semaines à quelques mois |
| Modèle de coût | Abonnement mensuel, souvent par livreur ou par commande | Coût de développement, puis hébergement et support |
| Adéquation à vos processus | Vous vous adaptez au produit | Construit autour de vos processus |
| Liaison avec la caisse et la boutique | Seulement les intégrations du fournisseur | Tout ce que vos systèmes permettent |
| Vos données | Sur la plateforme du fournisseur ; vérifiez l'export | Dans une base de données qui vous appartient |
| Interface en arabe | Variable ; testez-la avec vos livreurs | Prévue dès le départ |

Un abonnement est souvent la bonne première étape si vos processus sont standards et que la plateforme se connecte à la boutique et à la caisse que vous utilisez déjà. Un système sur mesure se justifie quand les lacunes vous coûtent de l'argent : des espèces impossibles à rapprocher, des commandes ressaisies d'un système à l'autre, ou des règles qu'aucun produit ne gère, comme le mélange de vos livreurs et d'un transporteur avec des tarifs différents par zone. Pour les restaurants, nous examinons la création de votre propre application de commande et de livraison dans [ce guide](/blog/restaurant-delivery-app-egypt).

## Ce que fait KF Tech Solutions

KF Tech Solutions développe des [systèmes de gestion](/services/business-systems) sur mesure, des logiciels de caisse et de stock, ainsi que des applications web et mobiles. Pour une activité de livraison, cela signifie un tableau de bord de dispatch, une application livreur, des soldes d'espèces par livreur et la liaison avec votre boutique, votre caisse et votre stock dans un seul système, avec une interface en arabe et en anglais. Nous travaillons avec des entreprises en Égypte et dans le Golfe ; découvrez comment nous travaillons avec les [entreprises du Golfe](/gulf).

## Questions fréquentes

### Ai-je besoin d'un logiciel de gestion des livraisons avec seulement trois livreurs ?

Pas toujours. Une liste de commandes partagée et une remise des espèces rigoureuse peuvent suffire. Le logiciel devient rentable dès que des commandes se perdent entre deux services ou que les écarts d'espèces deviennent introuvables.

### Les livreurs peuvent-ils utiliser leur propre téléphone ?

Oui, sur Android ou iPhone. Convenez à l'avance de qui paie les données mobiles et de la façon dont l'accès est retiré au départ d'un livreur.

### Un seul système peut-il gérer mes livreurs et un transporteur ensemble ?

Oui, s'il est conçu ou choisi pour cela. Le client voit un seul statut quel que soit le porteur de la commande, et les espèces du transporteur sont rapprochées séparément.

### Les clients ont-ils besoin d'une application dédiée pour le suivi en direct ?

Non. Un lien de suivi envoyé par SMS ou WhatsApp suffit à la plupart des clients. Une application client ne se justifie que si les clients commandent souvent.

### Combien de temps faut-il pour un système de livraison sur mesure ?

Cela dépend du périmètre : une boutique avec dispatch, application livreur et rapprochement des espèces est un projet bien plus petit qu'une planification multi-agences avec liaisons transporteurs. Nous donnons un calendrier après un court appel.

Vous voulez savoir ce dont votre activité de livraison a besoin ? [Réservez un appel gratuit](/book) ou [écrivez-nous](/contact).

## Sources

- [ZATCA : avis d'intégration de la vague 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA : Electronic Invoice XML Implementation Standard](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [Ministère des Finances des Émirats arabes unis : décision ministérielle n° 244 de 2025](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Ministère des Finances des Émirats arabes unis : modifications des décisions sur la facturation électronique, 10 mai 2026](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
