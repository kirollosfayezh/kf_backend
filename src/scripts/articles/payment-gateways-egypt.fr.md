---
title: Passerelles de paiement en Égypte : comparatif pour boutiques en ligne
summary: Paymob, Fawry, Kashier et Geidea comparés : moyens de paiement, frais publiés, versements, documents et effort réel d'intégration de chacun.
tags: passerelle de paiement, Paymob, Fawry, Meeza, portefeuilles mobiles, paiement en ligne, Égypte
alt: Une pièce égyptienne d’une livre posée debout sur un tas d’autres pièces
caption: Les frais, les délais de règlement et les moyens de paiement de vos clients décident quelle passerelle vous laisse le plus de chaque livre.
stats: 2,75 % + 3 EGP|tarif carte en ligne publié par Kashier, hors TVA de 14 % sur les frais; 24/7|virements InstaPay, en service depuis mars 2022 selon la Banque centrale d'Égypte; 3|tests avant le lancement : webhooks, remboursements, rapprochement
---

Pour accepter des paiements en ligne en Égypte, choisissez une passerelle qui prend les cartes, y compris Meeza, les portefeuilles mobiles et, pour beaucoup de boutiques, un paiement en espèces par code de référence ou à la livraison. Paymob, Fawry, Kashier et Geidea couvrent tous les cartes et au moins une partie des moyens locaux : le vrai choix se fait donc sur les frais, le délai de versement, les documents demandés et la facilité de connexion à votre boutique ou à votre application. Quelle que soit la passerelle, construisez le paiement de sorte que chaque transaction corresponde à une commande dans votre propre système.

Dernière vérification : 6 novembre 2026

## Les moyens de paiement utilisés par les clients en Égypte

Un paiement en ligne égyptien doit gérer bien plus que les cartes : beaucoup de clients n'ont pas de carte de crédit, préfèrent payer en espèces ou paient depuis leur téléphone.

| Moyen | De quoi il s'agit | Pourquoi c'est important |
| --- | --- | --- |
| Visa et Mastercard | Cartes de débit et de crédit internationales | Toujours la base de tout paiement en ligne |
| Meeza | Le réseau national de cartes en Égypte | Beaucoup de cartes de débit et prépayées locales sont des Meeza ; sans Meeza, vous perdez des clients |
| Portefeuilles mobiles | Portefeuilles comme Vodafone Cash, Orange Cash, e& money et WE Pay | Les clients sans carte peuvent tout de même payer en ligne |
| Code de référence en point de paiement | Le client reçoit un code et paie en espèces dans un point comme Fawry ou Aman | Les clients qui paient en espèces règlent avant l'expédition, pas à la livraison |
| Paiement échelonné (BNPL) | Des sociétés comme valU, Sympl, Souhoola et Contact | Attendu pour l'électronique, les meubles et les articles plus chers |
| Paiement à la livraison | Le livreur encaisse en espèces | Toujours courant ; c'est un processus de livraison, pas une fonction de la passerelle |

InstaPay mérite une remarque. Ce service fonctionne sur l'Instant Payment Network de la Banque centrale d'Égypte, lancé en mars 2022, et transfère de l'argent 24 h/24 et 7 j/7 entre comptes bancaires, cartes Meeza et portefeuilles mobiles. C'est toutefois un service de virement, et aucune des pages de passerelles que nous avons consultées ne le présente comme moyen de paiement au moment de la commande. Si vous acceptez directement des virements InstaPay, quelqu'un devra rapprocher chaque virement de sa commande à la main.

## Les passerelles qui proposent ces moyens

Le tableau résume ce que chaque prestataire publie sur ses propres pages. La disponibilité peut dépendre de votre secteur et de la validation de votre compte : faites confirmer par écrit chaque moyen dont vous avez besoin avant de lancer le développement.

| Passerelle | Cartes | Portefeuilles | Espèces et points de paiement | Paiement échelonné | Intégrations prêtes à l'emploi |
| --- | --- | --- | --- | --- | --- |
| Paymob | Visa, Mastercard et d'autres ; Apple Pay et Google Pay via son paiement intégré | Vodafone Cash, Orange Cash, e& money, WE Pay | Points Aman et Masary | valU, Sympl, Souhoola, Forsa, Contact et d'autres | Shopify, WooCommerce, SDK web et mobile, liens de paiement |
| Fawry (FawryPay) | Cartes | Portefeuilles mobiles | Paiement chez Fawry par code de référence ; paiement à la livraison | À demander à Fawry | API serveur et page de paiement hébergée |
| Kashier | Visa, Mastercard, Meeza | Disponibles, tarif fixé par le service commercial | Tarifs des points de paiement fixés par le service commercial | Via des programmes partenaires | API, page de paiement hébergée, mode test gratuit |
| Geidea | Meeza, Visa, Mastercard | Portefeuille Meeza par QR code | Non mentionnés sur la page de la passerelle | BNPL et paiement échelonné bancaire, dont valU et Souhoola | Shopify, WooCommerce, Magento, OpenCart, PrestaShop ; SDK Android, iOS, Flutter et React Native |

Quelques différences pratiques ressortent :

- **La force de Fawry, ce sont les espèces.** Un code de référence FawryPay se règle dans les points Fawry ou via l'application myfawry, ce qui convient aux clients qui ne paient pas par carte.
- **Paymob liste le plus grand nombre de sociétés de paiement échelonné**, ce qui compte si vous vendez des articles chers.
- **Kashier publie un tarif carte** sur sa page de prix, ce qui facilite une première comparaison.
- **Geidea liste des extensions pour cinq plateformes de boutique** et vend aussi des terminaux de paiement pour magasin, utile si vous voulez un seul prestataire en ligne et en boutique.

## Frais et versements : ce que publient les prestataires

La page de prix de Kashier indique 2,75 % + 3,00 EGP par transaction en ligne réussie par carte Visa, Mastercard ou Meeza, sans frais de mise en place ni abonnement mensuel. La TVA de 14 % s'applique uniquement aux frais de Kashier, pas au montant de la commande, et les remboursements comme les tentatives échouées ne sont pas facturés. Les portefeuilles, les paiements en point de paiement, le paiement échelonné et les cartes internationales sont tarifés par le service commercial, et les versements suivent le calendrier convenu pour votre compte.

Les trois autres ne publient pas de grille tarifaire complète sur les pages que nous avons consultées : il vous faudra une offre écrite. Posez les mêmes questions à chaque prestataire pour pouvoir comparer :

1. Quel est le tarif de chaque moyen que vous utiliserez : cartes locales, cartes internationales, portefeuilles, points de paiement et paiement échelonné ?
2. La TVA s'ajoute-t-elle aux frais ?
3. Y a-t-il des frais de mise en place, mensuels, de remboursement ou de rétrofacturation ?
4. Combien de jours après un paiement l'argent arrive-t-il sur votre compte bancaire, et peut-on choisir un cycle plus rapide ?
5. Une réserve est-elle retenue sur les nouveaux comptes ?
6. Que contient le rapport de versement, et peut-on le télécharger ou l'obtenir par API ?

Faites ensuite le calcul sur votre propre répartition des ventes, car les paiements par portefeuille et en point de paiement peuvent être tarifés différemment des cartes.

## Ce qu'il vous faut avant de postuler

Chaque prestataire fixe ses propres conditions d'ouverture de compte : demandez tôt la liste exacte. Préparez les éléments suivants, car une partie vous sera probablement demandée :

- **Les documents de l'entreprise** : registre du commerce et carte fiscale, ou l'équivalent selon votre forme juridique.
- **Un compte bancaire au nom de l'entreprise** pour recevoir les versements.
- **Un site web ou une application en ligne** qui présente vos produits, vos prix, vos coordonnées, vos conditions de livraison et de remboursement et vos conditions d'utilisation.
- **Une pièce d'identité du propriétaire** : selon la documentation de Geidea, Meeza exige par exemple le numéro d'identité nationale et le numéro de registre du commerce du marchand avant d'activer Meeza QR.

Certains moyens nécessitent leur propre validation en plus du compte de passerelle. Pour les paiements Meeza QR chez Geidea, par exemple, le marchand doit d'abord s'enregistrer auprès de Meeza, et Kashier précise que le paiement échelonné dépend de l'accord de chaque partenaire. Prévoyez ce délai dans votre calendrier de lancement.

## Ce que l'intégration implique vraiment

Ajouter un bouton « Payer » est rapide ; rendre les paiements fiables, c'est là qu'est le travail. Nous décrivons l'approche générale dans [connecter les systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems) ; pour les paiements en Égypte, voici ce qui compte.

### Page hébergée, formulaire intégré ou SDK

- **Paiement hébergé ou par redirection.** Le client passe sur la page de la passerelle puis revient. Les données de carte ne touchent jamais votre serveur.
- **Paiement intégré.** Le formulaire s'affiche dans votre page mais il est servi par la passerelle, comme Paymob Pixel ou les formulaires pop-up et intégrés de Geidea.
- **SDK mobile.** Dans les applications Android et iOS, le SDK de la passerelle gère cartes, portefeuilles et authentification dans l'application.

Si vous vendez sur Shopify ou WooCommerce, une extension prête à l'emploi peut suffire. Notre comparatif [Shopify ou boutique sur mesure en Égypte](/blog/shopify-vs-custom-online-store-egypt) explique quand ce n'est pas le cas.

### Tous les paiements ne sont pas instantanés

Un paiement par carte réussit ou échoue en quelques secondes. Un code de référence peut être réglé des heures plus tard, ou jamais. Votre système de commandes a donc besoin d'un statut « en attente de paiement », d'un délai au-delà duquel les commandes impayées sont annulées et le stock libéré, et d'un message clair indiquant au client la durée de validité du code. Demandez à chaque prestataire combien de temps ses codes de référence restent valables.

### Les webhooks, pas la redirection

Votre site apprend le résultat d'un paiement deux fois : quand le navigateur revient sur votre page de remerciement, et quand la passerelle envoie une notification de serveur à serveur, appelée webhook. Fiez-vous au webhook, car les clients ferment des onglets et les téléphones perdent le réseau. Votre backend doit vérifier la signature, gérer un même événement reçu deux fois et enregistrer un statut pour chaque commande : en attente, payée, échouée, remboursée.

### Remboursements et rapprochement

Les remboursements doivent partir de votre propre tableau de bord, appeler l'API de la passerelle et mettre à jour la commande, le stock et la fiche client en une seule étape. Les remboursements par portefeuille, en point de paiement et en paiement échelonné peuvent suivre d'autres règles que ceux par carte : testez-les tous. Vérifiez ensuite que le rapport de versement de la passerelle correspond aux commandes payées, aux remboursements et aux frais dans votre système. Si un dépôt sur votre compte bancaire ne peut pas être relié à une liste de commandes, la clôture du mois devient une devinette.

### Testez avant la mise en ligne

Dans l'environnement de test, réalisez un paiement réussi, une carte refusée, un code de référence non réglé, un paiement par portefeuille, un remboursement total et un remboursement partiel. Effectuez ensuite un petit paiement réel suivi d'un remboursement en production. Notre article sur [les boutiques en ligne en Égypte : paiement et livraison](/blog/online-store-egypt-payments-and-delivery) montre où ces flux cassent en pratique, y compris le paiement à la livraison.

## Reçus et données clients

Une passerelle encaisse l'argent ; elle n'émet pas vos documents fiscaux. Si votre entreprise émet des factures ou des reçus électroniques via les systèmes de l'administration fiscale égyptienne, la boutique, la caisse ou l'ERP doit les créer à la confirmation du paiement, idéalement à partir du même webhook qui marque la commande comme payée.

Les paiements impliquent aussi des données personnelles : noms, numéros de téléphone, adresses et historique des commandes. Laissez les numéros de carte chez la passerelle et ne conservez que ce dont vous avez besoin. Notre guide sur [la loi égyptienne sur la protection des données pour les applications](/blog/egypt-data-protection-law-apps) couvre le reste.

## Comment KF Tech Solutions vous aide

KF Tech Solutions développe des sites web, des boutiques en ligne, des applications mobiles et les backends qui les font tourner, et les connecte à la passerelle de votre choix : le parcours de paiement, le traitement des webhooks, la logique d'attente pour les codes de référence, les remboursements depuis votre tableau de bord et le rapprochement avec les rapports de versement. Nous avons également connecté des systèmes de caisse au système de reçus électroniques de l'administration fiscale égyptienne. Le choix de la passerelle vous appartient. Découvrez notre service de [développement d'API et de backend](/services/api-and-backend).

## Questions fréquentes

### Quelle est la meilleure passerelle de paiement en Égypte ?

Il n'y en a pas une seule. Listez les moyens qu'utilisent vos clients, retenez les passerelles qui les prennent tous en charge pour votre secteur, puis comparez des offres écrites sur les frais, le délai de versement et les rapports, à partir de votre propre répartition des ventes.

### Ai-je encore besoin du paiement à la livraison ?

Pour beaucoup de boutiques égyptiennes, oui, au moins au début. Les codes de référence et les portefeuilles peuvent amener une partie des clients qui paient en espèces à régler avant l'expédition, ce qui réduit les livraisons refusées, mais imposer le prépaiement à tous peut vous coûter des commandes.

### Mes clients peuvent-ils payer par InstaPay dans ma boutique ?

Aucune des pages de passerelles que nous avons consultées ne présente InstaPay comme moyen de paiement. Vous pouvez accepter directement des virements InstaPay, mais chacun doit être rapproché à la main de sa commande, ce qui devient un problème quand les commandes augmentent. Demandez à votre passerelle si elle prévoit de le prendre en charge.

### Les frais publiés sont-ils définitifs ?

Pas toujours. Kashier, par exemple, propose des tarifs personnalisés quand le volume augmente, et d'autres prestataires communiquent leurs prix par leur service commercial. Demandez si la TVA s'ajoute et comparez le coût total par moyen de paiement, pas seulement le tarif carte affiché.

### Combien de temps faut-il pour intégrer une passerelle de paiement ?

Une extension Shopify ou WooCommerce peut être en ligne en quelques jours une fois votre compte validé. Une boutique ou une application sur mesure demande plus de temps, car les webhooks, les remboursements, le rapprochement et chaque moyen de paiement doivent être développés et testés.

### Un lien de paiement suffit-il pour une petite entreprise ?

Pour de faibles volumes, oui. Paymob, Geidea et d'autres proposent des liens de paiement à envoyer par WhatsApp ou par e-mail. Quand les commandes augmentent, vous voudrez que les paiements soient reliés automatiquement aux commandes, au stock et aux reçus.

Vous choisissez une passerelle ou construisez un paiement pour une boutique ou une application en Égypte ? [Dites-nous ce que vous vendez](/contact) ou [réservez un appel gratuit](/book) : nous vous aiderons à planifier l'intégration avant que vous signiez.

## Sources

- [Instant Payment Network (IPN), Central Bank of Egypt](https://www.cbe.org.eg/en/payment-systems-and-services/instant-payment-network)
- [Paymob, paiements en ligne](https://paymob.com/products/pay-accept/online-payments)
- [Documentation développeurs Paymob](https://developers.paymob.com/paymob-docs/getting-started/overview)
- [Guide de l'extension CS-Cart de Paymob (points de paiement et portefeuilles)](https://docs.paymob.com/docs/cs-cart)
- [Fawry, paiement en ligne](https://www.fawry.com/business/acceptance/online-checkout/)
- [Paiements FawryPay par numéro de référence, documentation développeurs](https://developer.fawrystaging.com/docs/server-apis/create-payment-refno-apis)
- [Tarifs Kashier](https://www.kashier.io/pricing)
- [Passerelle de paiement Geidea, Égypte](https://geidea.net/egy/en/solutions/payments/payment-gateway)
- [Paiement par portefeuille Meeza QR, documentation Geidea](https://docs.geidea.net/docs/meeza-qr-payment-method)
- [Geidea : valU et Souhoola en Égypte](https://docs.geidea.net/docs/valu)
