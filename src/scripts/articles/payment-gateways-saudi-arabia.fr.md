---
title: Passerelles de paiement en Arabie saoudite : comment choisir
summary: Les moyens de paiement attendus en Arabie saoudite, les passerelles qui les proposent, comment comparer frais et versements, et ce qu'implique l'intégration.
tags: passerelle de paiement, mada, Apple Pay, Tabby, Tamara, paiement en ligne, Arabie saoudite
alt: Une main approche une carte vierge d’un terminal de paiement noir posé sur une surface orange
caption: Un paiement en Arabie saoudite doit d’abord accepter mada, puis les portefeuilles et le paiement différé attendus par les clients.
stats: 20 000|SAR par virement instantané sarie, 24 h/24 et 7 j/7; 1990|année de lancement de mada, détenu par la SAMA; 3|tests avant le lancement : webhooks, remboursements, rapprochement
---

Pour encaisser des paiements en ligne en Arabie saoudite, il vous faut une passerelle qui prend en charge mada d'abord, puis Apple Pay et les autres portefeuilles, et le plus souvent Tabby et Tamara pour le paiement fractionné. Des passerelles comme Tap, PayTabs et Telr proposent ces moyens de paiement ; le vrai choix se joue donc sur les frais, la rapidité des versements, les documents demandés et la facilité de connexion à votre boutique ou à votre application. Vérifiez la licence, testez les remboursements et les webhooks avant le lancement, et assurez-vous que chaque paiement correspond à une vente dans votre propre système.

Dernière vérification : 6 novembre 2026

Ce guide est une information générale destinée aux chefs d'entreprise, pas un conseil juridique ou financier. Les conditions des passerelles changent souvent : confirmez chaque frais et chaque exigence sur la page tarifaire du prestataire et dans votre contrat.

## Les moyens de paiement attendus par les clients saoudiens

Une page de paiement saoudienne qui n'accepte que Visa et Mastercard perd des clients. Voici les moyens à prévoir, à peu près par ordre d'importance pour la plupart des entreprises qui vendent aux particuliers.

| Moyen | De quoi il s'agit | Pourquoi c'est important |
|---|---|---|
| mada | Le réseau national de cartes de débit, détenu par la SAMA et lancé en 1990 | La carte de débit que les clients locaux utilisent en premier ; les paiements en ligne passent par 3-D Secure |
| Apple Pay, mada Pay, Samsung Pay, Google Pay | Des portefeuilles qui fonctionnent avec mada et d'autres cartes | Un paiement mobile rapide, sans saisir de numéro de carte |
| STC Bank | Anciennement STC Pay ; la SAMA a autorisé ses activités bancaires complètes le 28 janvier 2025 | Banque numérique et portefeuille ; certaines passerelles l'appellent encore STC Pay |
| Tabby et Tamara | Prestataires de paiement fractionné (BNPL) agréés par la SAMA | Le client paie en plusieurs fois ; le commerçant est payé par le prestataire |
| SADAD | Le système national de présentation et de paiement de factures de la SAMA, lancé en 2004 | Utile pour les factures et les paiements récurrents plutôt que pour un panier |
| sarie | Le système de paiement instantané de la SAMA, lancé en 2021 | Virements jusqu'à 20 000 SAR, 24 h/24 et 7 j/7, par IBAN, numéro de mobile, numéro d'identité ou e-mail |

La SAMA a agréé **Tamara Finance** pour le crédit à la consommation et le BNPL le 3 mars 2025, et **Tabby Finance** pour le BNPL le 10 novembre 2025. Dans la vente aux particuliers, le paiement fractionné arrive souvent comme une demande des clients avant d'être un projet de l'entreprise.

En B2B, une passerelle de cartes est souvent le mauvais outil. Les factures importantes se règlent généralement par virement, et sarie rend les virements jusqu'à 20 000 SAR instantanés à toute heure. Il vous faut alors une facture claire avec votre IBAN et un moyen de rapprocher les virements reçus des factures ouvertes, pas une page de paiement.

## Les passerelles qui proposent ces moyens

Plusieurs passerelles servent les commerçants en Arabie saoudite. Les trois suivantes annoncent les moyens de paiement locaux sur leur propre site. Ce n'est pas un classement, et d'autres prestataires agréés existent.

| Passerelle | Ce qu'elle indique sur son site |
|---|---|
| Tap | Se présente comme « un établissement de paiement agréé par la Banque centrale saoudienne » ; prend en charge mada, Apple Pay, Tabby et Tamara |
| PayTabs | Cite mada, STC Pay, Apple Pay, Tabby et Tamara |
| Telr | Couvre l'Arabie saoudite et les Émirats, avec mada, Apple Pay et Tabby |

Deux vérifications comptent plus que toute liste de fonctionnalités :

- **La licence.** Privilégiez un prestataire agréé par la SAMA et vérifiez son nom dans les listes publiées sur le site de la SAMA, pas seulement grâce à un logo sur la page d'accueil du prestataire.
- **Vos moyens de paiement précis.** « Compatible Tabby » sur une page d'accueil ne veut pas toujours dire que c'est disponible pour votre activité ou pour votre extension. Demandez une confirmation écrite pour chaque moyen que vous comptez proposer.

Si votre boutique tourne sur une plateforme hébergée, celle-ci inclut peut-être sa propre solution de paiement ou une courte liste de passerelles compatibles, ce qui réduit le choix. Notre guide sur [le coût d'une boutique en ligne en Arabie saoudite](/blog/online-store-cost-saudi-arabia) traite de cet arbitrage.

## Comment comparer les passerelles

Le tarif d'une passerelle se résume rarement à un seul chiffre. Mettez toutes les offres dans le même tableau et posez les mêmes questions à chaque prestataire.

| Question | Ce qu'il faut demander par écrit |
|---|---|
| Frais par moyen | Le taux pour mada, pour les cartes internationales et pour chaque portefeuille, plus un éventuel frais fixe par transaction |
| Autres frais | Frais de mise en service, mensuels, de remboursement, de rétrofacturation et de conversion de devises, le cas échéant |
| BNPL | Si Tabby et Tamara passent par la passerelle ou exigent un contrat séparé, et qui facture les frais BNPL |
| Versements | Le nombre de jours avant l'arrivée des fonds sur votre compte bancaire saoudien, le versement minimum et toute réserve retenue |
| Remboursements | Remboursements totaux et partiels depuis le tableau de bord et l'API, et délai avant que le client soit crédité |
| Intégration | Documentation de l'API, environnement de test (sandbox), extensions pour votre plateforme et SDK pour iOS et Android |
| Rapports | Rapports de versement téléchargeables listant chaque transaction, frais et remboursement |
| Support | Support en arabe et en anglais, délais de réponse et qui traite un paiement contesté |

Une passerelle au taux un peu plus élevé, mais qui verse le lendemain et fournit des rapports clairs, peut vous coûter moins cher qu'une autre moins chère qui paie lentement et rend le rapprochement manuel. Calculez le vrai coût mensuel avec votre propre répartition entre mada, cartes internationales et BNPL.

## Ce qu'il vous faut avant de postuler

Chaque passerelle mène ses propres contrôles et la liste varie, mais attendez-vous à fournir l'essentiel de ce qui suit :

- **Un registre du commerce (Commercial Registration)**, ou un certificat de travailleur indépendant valide si vous vendez en tant que particulier.
- **Un compte bancaire professionnel** au nom de l'entreprise, pour les versements.
- **L'inscription sur la Business Platform (business.sa)**, qui a remplacé Maroof pour les boutiques en ligne et exige l'immatriculation et le compte bancaire ci-dessus.
- **Un site ou une application en ligne** qui montre ce que vous vendez et vos prix.
- **Les mentions exigées par la loi sur le commerce électronique** : votre nom ou identifiant, vos coordonnées et votre registre du commerce (article 6), ainsi que les conditions du contrat (article 7), c'est-à-dire en pratique des conditions générales et des politiques de livraison et de remboursement claires.

La loi sur le commerce électronique prévoit notamment un avertissement, une amende pouvant atteindre 1 million de SAR, la suspension ou le blocage de la boutique (article 18). Les équipes de contrôle des passerelles regardent les mêmes pages : un site qui n'en dispose pas voit souvent sa demande bloquée.

## Ce qu'implique réellement l'intégration

Ajouter un bouton « Payer » prend une journée. Rendre les paiements fiables prend plus longtemps, et c'est là qu'apparaissent la plupart des problèmes après le lancement. Nous décrivons l'approche générale dans [Connecter les systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems) ; pour les paiements, voici ce qui compte.

### Page hébergée, formulaire intégré ou SDK mobile

- **Page de paiement hébergée.** Le client est redirigé vers la page de la passerelle puis revient. Les données de carte ne touchent jamais votre serveur, ce qui limite vos obligations de sécurité.
- **Champs intégrés.** Le formulaire de carte s'affiche dans votre page de paiement mais il est servi par la passerelle. L'expérience est plus fluide et les numéros de carte restent hors de votre serveur.
- **SDK mobile.** Dans les applications iOS et Android, le SDK de la passerelle gère les cartes, Apple Pay et 3-D Secure dans l'application.

Évitez toute configuration où votre propre serveur reçoit les numéros de carte en clair, sauf raison solide et programme de sécurité à la hauteur.

### Les webhooks, pas la redirection

Quand un client paie, votre site apprend le résultat de deux façons : le navigateur revient sur votre page « Merci », et la passerelle envoie un message de serveur à serveur appelé webhook. Ne vous fiez qu'au webhook. Les clients ferment les onglets, les téléphones perdent le réseau et les écrans 3-D Secure expirent ; un système de commandes qui attend la redirection manquera des commandes payées. Votre backend doit vérifier la signature du webhook, gérer le même événement reçu deux fois et enregistrer un statut pour chaque commande : en attente, payée, échouée, remboursée.

### Remboursements totaux et partiels

Les remboursements doivent partir de votre propre tableau de bord, appeler l'API de la passerelle et mettre à jour la commande, le stock et la fiche client en une seule étape. Les remboursements partiels comptent pour les commandes de plusieurs articles. Les remboursements BNPL suivent les règles du prestataire BNPL : testez-les à part.

### Le rapprochement

Chaque jour ou chaque semaine, le rapport de versement de la passerelle doit correspondre à trois éléments de votre système : les commandes payées, les remboursements et les frais. Si vous ne pouvez pas relier un dépôt sur votre compte bancaire à une liste de commandes, la comptabilité devient de la devinette. Prévoyez cet export ou ce rapprochement automatique avant le lancement, pas après la première clôture mensuelle.

### Tester avant la mise en ligne

Déroulez le cycle complet dans la sandbox pour chaque moyen de paiement : un paiement réussi, une carte refusée, un échec 3-D Secure, un remboursement total, un remboursement partiel et un achat BNPL. Faites ensuite un petit paiement réel suivi d'un remboursement en production.

La même rigueur vaut sur d'autres marchés ; notre article sur [les boutiques en ligne en Égypte : paiement et livraison](/blog/online-store-egypt-payments-and-delivery) montre où ces flux cassent en pratique.

## Paiements et factures

Une passerelle encaisse l'argent ; elle n'émet pas votre facture fiscale. En Arabie saoudite, les entreprises immatriculées à la TVA émettent des factures électroniques selon les règles FATOORA de la ZATCA, et celles passées en phase 2 doivent les générer depuis un système raccordé (onboarded) auprès de la ZATCA. Votre boutique, votre caisse ou votre ERP doit créer la facture dès que le paiement est confirmé, idéalement à partir du même webhook qui marque la commande comme payée. Notre guide sur [l'intégration ZATCA phase 2 pour un POS ou un ERP sur mesure](/blog/zatca-phase-2-integration-custom-pos-erp) explique ce que ce système doit faire.

## Comment KF Tech Solutions vous aide

KF Tech Solutions développe des sites, des boutiques en ligne, des applications mobiles et les backends qui les font tourner, et les connecte à la passerelle de votre choix : le parcours de paiement, le traitement des webhooks, les remboursements depuis votre tableau de bord et le rapprochement avec les rapports de versement. Le choix de la passerelle reste le vôtre. Nous travaillons avec des entreprises en Égypte et dans le Golfe, à distance ; le Caire est à l'heure de Riyad de fin avril à fin octobre et une heure derrière en hiver. Consultez [notre page Arabie saoudite](/saudi-arabia) et notre service [développement d'API et de backend](/services/api-and-backend).

## Questions fréquentes

### Quelle est la meilleure passerelle de paiement en Arabie saoudite ?

Il n'y en a pas une seule. Retenez quelques passerelles agréées par la SAMA qui prennent en charge mada, Apple Pay et les prestataires BNPL demandés par vos clients, puis comparez leurs offres écrites sur les frais, les délais de versement et les rapports, avec votre propre répartition de ventes.

### Dois-je accepter mada ?

Aucune règle de nos sources ne l'impose, mais mada est le réseau de débit national que les clients locaux utilisent chaque jour. Une page de paiement sans mada en perdra beaucoup : considérez-le comme indispensable.

### Puis-je proposer Tabby et Tamara via ma passerelle ?

Souvent, oui. Tap et PayTabs citent les deux, Telr cite Tabby. Demandez si le BNPL est disponible pour votre activité via la passerelle, ou s'il vous faut un contrat séparé avec le prestataire BNPL.

### Combien de temps prend l'intégration d'une passerelle de paiement ?

Une extension sur une plateforme standard peut être en ligne en quelques jours une fois votre compte approuvé. Un site ou une application sur mesure prend plus de temps, car webhooks, remboursements, rapprochement et tests de chaque moyen de paiement doivent être construits et vérifiés avec soin.

### Puis-je encaisser des paiements sans registre du commerce ?

Les boutiques en ligne s'inscrivent sur la Business Platform avec un registre du commerce ou un certificat de travailleur indépendant valide, plus un compte bancaire professionnel. Chaque passerelle fixe ensuite ses propres exigences : vérifiez-les auprès du prestataire avant de développer.

### Un lien de paiement suffit-il pour une petite entreprise ?

Pour de faibles volumes, oui. Beaucoup de passerelles proposent des liens de paiement à envoyer par WhatsApp ou par e-mail ; demandez si la vôtre le fait. Quand les commandes augmentent, vous voudrez relier automatiquement les paiements aux commandes, au stock et aux factures.

Vous choisissez une passerelle ou construisez une page de paiement pour le marché saoudien ? [Dites-nous ce que vous vendez](/contact) ou [réservez un appel gratuit](/book), et nous vous aiderons à planifier l'intégration avant de signer.

## Sources

- [mada, Banque centrale saoudienne (SAMA)](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [SADAD, Banque centrale saoudienne (SAMA)](https://www.sama.gov.sa/en-US/payment/pages/sadad.aspx)
- [sarie, Banque centrale saoudienne (SAMA)](https://www.sama.gov.sa/en-US/payment/pages/sarie.aspx)
- [La SAMA agrée Tamara Finance](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx)
- [La SAMA agrée Tabby Finance](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)
- [STC Bank lance ses activités complètes, Arab News](https://www.arabnews.pk/node/2588148/business-economy)
- [Tap Payments, Arabie saoudite](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
- [Telr](https://telr.com/)
- [Les boutiques en ligne passent à la Business Platform, ministère du Commerce](https://mc.gov.sa/en/mediacenter/News/Pages/29-03-23-02.aspx)
- [Loi sur le commerce électronique, traduction officielle](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
- [Qu'est-ce que la facturation électronique, ZATCA](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
