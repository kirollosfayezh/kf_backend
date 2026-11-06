---
title: Site web et application à Bahreïn : paiements, TVA et données
summary: Ce qu'il faut à un site ou une application pour une entreprise à Bahreïn : BenefitPay et cartes, TVA à 10 %, protection des données et facture électronique.
tags: création de site web, développement d'applications, Bahreïn, BenefitPay, TVA, PDPL, GCC
alt: Les tours du Bahrain World Trade Center au-dessus du front de mer de Manama au lever du soleil
caption: Un projet pour Manama doit gérer la TVA à 10 %, BenefitPay et la loi bahreïnie sur la protection des données.
stats: 10 %|de TVA à Bahreïn depuis le 1er janvier 2022; 72|heures pour notifier une violation de données personnelles selon la PDPL; 83|pays et territoires listés pour le transfert de données personnelles
---

Un site web, une boutique en ligne ou une application mobile pour une entreprise à Bahreïn se conçoit et se développe comme partout ailleurs. Quatre points locaux modifient pourtant le projet : la façon dont les clients paient (BenefitPay, virements bancaires et cartes), la TVA de 10 % pour les entreprises immatriculées, la loi bahreïnienne sur la protection des données personnelles (loi n° 30/2018) et la facturation électronique, attendue mais sans date officielle. Réglez ces points avant la première maquette et vous n'aurez pas à refaire le paiement plus tard.

Dernière vérification : 6 novembre 2026

Ce guide fournit des informations générales aux chefs d'entreprise ; il ne constitue pas un conseil fiscal ou juridique. Vérifiez tout ce qui touche à vos déclarations ou à vos contrats avec votre comptable ou votre avocat.

## Paiements : BenefitPay, Fawri+ et Fawateer

BENEFIT exploite le système de transferts électroniques de fonds de Bahreïn. La Banque centrale de Bahreïn en cite les services : Fawri+ (virements disponibles 24 h/24, 7 j/7), Fawri, et Fawateer pour le paiement des factures. L'application BenefitPay de BENEFIT permet aux clients de payer les commerçants par code QR, d'envoyer des virements Fawri+ et de régler des factures Fawateer.

Pour un site ou une application, cela donne trois façons courantes d'être payé :

| Méthode | Pour quel usage | Ce qu'il faut vérifier avant le développement |
|---|---|---|
| Paiement par carte via une passerelle de paiement agréée | Boutiques en ligne, réservations, abonnements | Les cartes et portefeuilles acceptés par la passerelle, ses frais et le fonctionnement des remboursements |
| QR BenefitPay | Commerces, restaurants, paiement au retrait | Si votre banque ou votre prestataire le propose à votre entreprise, et comment une commande payée est confirmée |
| Virement bancaire ou Fawri+ | Factures B2B importantes et acomptes | Qui rapproche chaque virement de sa commande, et en combien de temps |

La décision importante n'est pas le logo affiché sur la page de paiement, mais ce qui se passe après le paiement : comment la commande est marquée comme payée, qui est prévenu et comment un remboursement est enregistré. C'est vous qui signez le contrat commerçant avec la banque ou la passerelle ; le développeur y connecte votre site à l'aide de la documentation et de l'environnement de test de ce prestataire. Lancez la demande de compte commerçant tôt, car l'approbation suit le calendrier du prestataire, pas celui du développeur.

Si vous encaissez surtout sur place ou par virement, le paiement par carte en ligne n'est peut-être pas nécessaire dès le premier jour. Un formulaire de commande clair, un bouton WhatsApp et une étape de confirmation du paiement dans le tableau de bord peuvent suffire pour commencer ; la passerelle s'ajoute quand les commandes en ligne justifient ses frais.

## La TVA à 10 %, et la facturation électronique à venir

Le taux de TVA à Bahreïn est de 10 % depuis le 1er janvier 2022. Elle est gérée par le National Bureau for Revenue (NBR), et l'immatriculation est obligatoire au-delà du seuil de 37 500 BHD. Si votre entreprise est immatriculée, le site ou l'application doit traiter la TVA correctement partout où il affiche des prix ou émet des documents :

- **Les prix.** Décidez avec votre comptable de la façon d'afficher les prix, et faites apparaître clairement le montant de la TVA au moment du paiement.
- **Les factures et reçus.** Le système qui les émet a besoin de votre numéro de TVA, du bon taux sur chaque ligne et de totaux exacts.
- **Un taux modifiable.** Gérez la TVA comme un réglage par produit dans le tableau de bord, et non comme un chiffre figé dans le code, pour qu'un changement soit une simple modification et non une nouvelle version.
- **Les rapports.** Ventes, remboursements et TVA par période, exportés dans un format que votre comptable peut utiliser.

La facturation électronique est attendue à Bahreïn, dans un cadre « similaire à celui introduit en Arabie saoudite » selon le résumé fiscal de PwC, mais aucune date officielle n'a été annoncée. Elle n'est pas obligatoire aujourd'hui. La démarche raisonnable est modeste : enregistrez les données de facturation sous forme d'enregistrements structurés (vendeur, acheteur, lignes, taux, totaux et numéro unique), et pas seulement en PDF. Le raccordement à un futur système devient alors un travail d'intégration, pas une refonte. Méfiez-vous de tout prestataire qui présente son produit comme « prêt » pour des règles bahreïniennes de facturation électronique qui n'ont pas encore été publiées.

## Les données personnelles selon la PDPL (loi n° 30/2018)

La loi bahreïnienne sur la protection des données personnelles, la loi n° 30/2018, est en vigueur depuis le 1er août 2019. Deux de ses points concernent directement un site ou une application :

- **Notification d'une violation sous 72 heures.** La loi fixe un délai de 72 heures pour notifier une violation de données personnelles. Demandez à votre développeur comment une violation serait détectée et qui serait prévenu.
- **Transferts à l'étranger.** Les données personnelles peuvent être transférées vers 83 pays et territoires listés, ou sur d'autres fondements juridiques. Beaucoup de sites hébergent leur base de données chez un fournisseur cloud hors de Bahreïn ; demandez donc où sont hébergées la base et les sauvegardes, et vérifiez cet emplacement avec votre conseiller.

Dans le développement lui-même, les bonnes habitudes sont simples. Ne collectez que les champs nécessaires. Protégez le tableau de bord par des comptes individuels et des rôles, pour que chaque employé ne voie que ce que son travail exige. Faites des sauvegardes et vérifiez qu'elles se restaurent. Notez ce que chaque formulaire collecte et pourquoi. Publiez une politique de confidentialité en arabe et en anglais qui décrit ce que fait réellement votre site, et non un modèle copié chez une autre entreprise.

## Arabe, anglais et téléphone d'abord

Pensez d'abord au téléphone, et aux deux langues dès le départ :

- **L'arabe conçu de droite à gauche dès la première esquisse**, et non une page anglaise inversée, avec des pages distinctes pour chaque langue afin que les deux puissent apparaître dans les résultats de recherche.
- **Des prix en dinars bahreïniens**, saisis une seule fois dans le tableau de bord et affichés de la même façon dans les deux langues.
- **Des pages rapides sur les données mobiles**, avec des images compressées et sans effets lourds qui ralentissent le téléphone.
- **Un contact direct.** Des boutons d'appel et WhatsApp qui fonctionnent, et des formulaires qui arrivent à une personne qui répond.

Les restaurants et les commerces doivent aussi penser aux applications de livraison. talabat et Keeta opèrent toutes deux à Bahreïn ; Keeta y a été lancée le 5 janvier 2026. Beaucoup de restaurants vendent par ces applications, et votre propre site ou application remplit un autre rôle : c'est là que les clients fidèles trouvent votre carte complète, vos adresses et vos coordonnées, et là que vous pouvez prendre des commandes directes si vous le souhaitez. Décidez tôt si votre carte et vos prix correspondent à ce que les clients voient sur les applications, pour qu'ils ne trouvent pas d'informations contradictoires.

## Choisir qui le réalise

Que vous fassiez appel à un studio à Manama ou que vous travailliez à distance avec un studio ailleurs, les questions sont les mêmes. Notre guide [Comment choisir une société de logiciels](/blog/how-to-choose-a-software-company) les détaille. Pour un projet à Bahreïn, ajoutez celles-ci :

1. Demandez quelles passerelles de paiement l'équipe a déjà connectées, et demandez à en voir une fonctionner.
2. Demandez où vos données seront hébergées et comment les sauvegardes sont restaurées.
3. Demandez comment la TVA est paramétrée, et qui change le taux s'il change.
4. Demandez à voir un site en arabe que l'équipe a réalisé, et ouvrez-le sur votre propre téléphone.
5. Exigez un périmètre écrit et un devis ferme avant le début des travaux.

Inscrivez les protections dans le contrat : un accord de confidentialité, la restitution ou la suppression sécurisée de vos données à la fin du contrat, une procédure de notification des incidents, et la cession complète du code source et de la propriété intellectuelle à votre entreprise. Les comptes du nom de domaine, de l'hébergement et des boutiques d'applications doivent être au nom de votre entreprise, pas à celui du développeur.

Si l'équipe se trouve hors de Bahreïn, vérifiez les horaires. Manama est à UTC+3 toute l'année. Le Caire a la même heure que Manama de fin avril à fin octobre et une heure de retard en hiver ; une journée de travail normale se chevauche donc presque entièrement.

Ce qui détermine le prix est le même à Manama qu'au Caire : le nombre de pages et de langues, qui rédige les contenus et les intégrations nécessaires, comme le paiement, la livraison ou la comptabilité. Notre analyse de [ce que coûte un site d'entreprise en Égypte](/blog/company-website-cost-egypt) détaille ces facteurs.

## Ce que fait KF Tech Solutions

KF Tech Solutions est un studio de développement logiciel fondé en 2020 au Caire. Nous réalisons des sites d'entreprise, des boutiques en ligne, des applications web et des applications mobiles en arabe et en anglais, avec un tableau de bord où vous modifiez vous-même les contenus, et nous développons aussi des systèmes de caisse, de stock et des ERP quand le site doit être relié à votre façon de vendre. Nous travaillons avec des entreprises en Égypte et dans le Golfe. Consultez notre [service de développement web](/services/web-development) et notre [page Golfe](/gulf) pour voir comment nous travaillons à distance. Les projets commencent à 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et ferme après un appel gratuit.

## Questions fréquentes

### Ai-je besoin de BenefitPay sur mon site ?

Pas forcément. Cela dépend de la façon dont vos clients paient. Beaucoup de boutiques en ligne commencent par le paiement par carte via une passerelle agréée et ajoutent d'autres moyens quand les clients les demandent. Si vos clients paient au retrait ou en magasin, un QR BenefitPay fourni par votre banque ou votre prestataire peut mieux vous convenir qu'un paiement en ligne.

### La facturation électronique est-elle obligatoire à Bahreïn ?

Pas au 6 novembre 2026. Elle est attendue, mais aucune date officielle n'a été annoncée. Conservez vos données de facturation sous forme structurée pour pouvoir raccorder le système une fois les règles publiées.

### Mon site doit-il gérer la TVA ?

Si votre entreprise est immatriculée à la TVA, le paiement, les factures et les rapports doivent appliquer correctement le taux de 10 %. La façon d'afficher les prix est une question à poser à votre comptable.

### Les données de mon site peuvent-elles être hébergées hors de Bahreïn ?

La PDPL autorise le transfert de données personnelles vers 83 pays et territoires listés, ou sur d'autres fondements juridiques. Demandez à votre développeur où sont hébergées la base de données et les sauvegardes, et vérifiez cet emplacement avec votre conseiller.

### Une entreprise située hors de Bahreïn peut-elle réaliser mon site ou mon application ?

Oui. L'essentiel est un périmètre écrit, un contrat qui couvre vos données et la propriété du code, et un chevauchement suffisant des horaires. Manama et Le Caire ont la même heure de fin avril à fin octobre et une heure d'écart en hiver.

## Prochaine étape

Dites-nous ce que vous voulez réaliser et comment vos clients paient. [Réservez un appel gratuit](/book) ou [envoyez-nous un message](/contact) ; nous vous répondrons d'abord par nos questions, puis par un devis écrit et ferme.

## Sources

- [Portail national de Bahreïn : taxe sur la valeur ajoutée](https://www.bahrain.bh/wps/portal/en/BNP/HomeNationalPortal/ContentDetailsPage/!ut/p/z0/lY9BT8JAEIX_ynpoogezQ6uAR5GEaoKgJgh7IdN2LCPtbOluG36-LfFA5ORxJu99-Z42eq2NYMs5eraCRXdvzHA7eL6HePwEsJzehfC2engfTuYDmM8i_UGiX7Q5D8WvyykMF_F4FI4m0WIV9RT-PhzMozapFU9Hr9eJVFuSADCxjVd-R2rPkme2DCDBXY0sKoQIAqipQE-Z8rbi1AWQN5x1SVXVLClXBTllv04A6uC25FS17Dr9U_-v3OWC_8o1joWcUyiZYmnJ-ZLEX3q2WDSkMMv6Hx7VdYv-pmuc43rz37W62s8-b83m6gcBLJvw/)
- [PwC Worldwide Tax Summaries : Bahreïn, autres impôts](https://taxsummaries.pwc.com/bahrain/corporate/other-taxes)
- [DLA Piper : lois sur la protection des données à Bahreïn](https://www.dlapiperdataprotection.com/countries/bahrain/law.html)
- [Banque centrale de Bahreïn : paiements et règlements](https://www.cbb.gov.bh/payment-settlement/)
- [BenefitPay sur l'App Store](https://apps.apple.com/bh/app/id1249328388)
- [EqualOcean : Keeta lance la livraison de repas à Bahreïn](https://equalocean.com/news/2026010721712-meituans-keeta-launches-food-delivery-service-bahrain)
