---
title: Intégrer Tabby et Tamara à votre boutique ou application
summary: Ce qu'implique vraiment l'ajout de Tabby ou Tamara : plugin, passerelle ou API directe, vérification serveur, webhooks, remboursements partiels, rapprochement.
tags: Tabby, Tamara, BNPL, intégration de paiement, e-commerce, Arabie saoudite
alt: Une jeune femme sur un canapé tient une carte bancaire d’une main et un smartphone de l’autre
caption: Pour l’acheteuse, payer en plusieurs fois tient en un geste ; remboursements, retours partiels et rapprochement reviennent au marchand.
stats: 2|prestataires BNPL agréés par la SAMA en 2025; 21|jours avant que Tabby puisse capturer elle-même un paiement non capturé; 0|commande à expédier sur la seule foi de la redirection
---

Ajouter Tabby ou Tamara à une boutique ou à une application demande plus qu'un bouton au moment du paiement. Votre serveur crée une session de paiement, confirme le paiement directement auprès du prestataire avant toute expédition, le capture quand la commande est exécutée, envoie les remboursements et retours partiels via l'API du prestataire, et rapproche ses versements de vos commandes. Sur Salla, Zid, Shopify, WooCommerce ou Magento, un plugin fait une grande partie de ce travail ; sur une boutique sur mesure ou une application mobile, vous le construisez, soit en direct, soit via une passerelle qui les propose.

Dernière vérification : 6 novembre 2026

## Les deux prestataires sont désormais agréés par la SAMA

La Banque centrale saoudienne (SAMA) a agréé **Tamara Finance** pour le crédit à la consommation et le paiement différé (« buy now, pay later », BNPL) le 3 mars 2025, et **Tabby Finance** pour le BNPL le 10 novembre 2025. Les deux annonces figurent sur le site de la SAMA et sont citées dans les sources ci-dessous.

Cela ne change pas le travail technique, mais cela change les formalités. Vous signez avec une société financière réglementée : attendez-vous donc à un examen de votre entreprise et des produits que vous vendez lors de l'inscription. Les frais marchands, le calendrier des versements et les règles de remboursement figurent dans le contrat que vous signez avec chaque prestataire. Demandez-les par écrit avant le début du développement, car ils déterminent ce que votre rapport de rapprochement doit vérifier.

Cet article fournit des informations générales sur le fonctionnement de l'intégration, d'après la documentation publique destinée aux développeurs de chaque prestataire. Il ne constitue pas un conseil financier ou juridique.

## Plugin, passerelle ou API directe

Il existe trois façons de proposer Tabby ou Tamara à vos clients. La bonne dépend de la base sur laquelle votre boutique ou votre application est construite.

| Voie | Convient à | Ce qui reste à votre charge |
|---|---|---|
| Plugin de plateforme | Boutiques sur Salla, Zid, Shopify, WooCommerce ou Magento | Réglages, tests, remboursements depuis la plateforme ou le portail du prestataire |
| Passerelle de paiement | Boutiques et applications sur mesure qui utilisent déjà une passerelle | L'API de la passerelle, ses webhooks et son rapport de versements |
| API directe | Boutiques sur mesure, applications mobiles, places de marché, commandes liées à une caisse | Tout : sessions, vérification, webhooks, capture, remboursements, rapprochement |

**Plugins.** La documentation de Tabby comporte des pages d'installation pour Shopify, WooCommerce, Magento 2, Salla et Zid. Si votre boutique fonctionne déjà sur l'une de ces plateformes, commencez par là et consultez la section correspondante de la documentation de Tamara. Notre comparatif [Salla, Zid et Shopify](/blog/salla-vs-zid-vs-shopify) traite du choix de la plateforme lui-même.

**Passerelles.** Certaines passerelles en Arabie saoudite incluent le BNPL parmi leurs moyens de paiement. Tap se présente comme « a payment institution licensed by the Saudi Central Bank » et cite mada, Apple Pay, Tabby et Tamara. PayTabs cite mada, STC Pay, Apple Pay, Tabby et Tamara. Telr cite mada, Apple Pay et Tabby. Une passerelle vous donne une seule intégration et un seul rapport de versements pour les cartes et le BNPL. Avant de vous y fier, vérifiez ce qu'elle prend en charge pour les captures partielles et les remboursements BNPL. Notre guide des [passerelles de paiement en Arabie saoudite](/blog/payment-gateways-saudi-arabia) compare les options.

**API directe.** Une boutique sur mesure ou une application mobile peut se connecter directement à l'API de chaque prestataire. C'est la voie la plus exigeante, mais elle donne accès à toutes les fonctions du prestataire et à son propre tableau de bord marchand. La suite de cet article décrit ce travail, et l'essentiel est aussi ce qu'il faut tester avec un plugin ou une passerelle.

## Comment un paiement BNPL passe d'un statut à l'autre

Les deux prestataires représentent un paiement comme une suite de statuts. Votre système de commandes doit associer chacun d'eux à l'un de ses propres statuts, pour que personne ne marque une commande comme payée avant que le prestataire ne l'ait confirmée.

| Ce qui s'est passé | Statut chez Tabby | Statut chez Tamara |
|---|---|---|
| Le client a commencé le paiement | CREATED | new |
| Le client a terminé le paiement | AUTHORIZED | approved, puis authorised |
| Le client est parti ou n'a pas été accepté | EXPIRED ou REJECTED | expired ou declined |
| Vous avez capturé la commande | CLOSED | fully_captured ou partially_captured |
| Vous avez annulé avant la capture | annulation d'un paiement autorisé | canceled, ou updated pour une annulation partielle |
| Vous avez remboursé après la capture | remboursement sur un paiement CLOSED | fully_refunded ou partially_refunded |

Les noms diffèrent, mais le parcours est le même : un paiement, une acceptation, une capture à l'exécution de la commande, puis des remboursements dans la limite du montant capturé.

## Paiement et webhooks

### Ne vous fiez jamais à la seule redirection

Le paiement commence sur votre serveur. Il envoie la commande, le montant et les coordonnées du client au point de création de session du prestataire, et reçoit un lien vers lequel diriger le client. Une fois le paiement terminé, le prestataire renvoie le client vers votre page de succès, d'annulation ou d'échec.

Cette redirection n'est pas une preuve de paiement. La documentation de Tabby est claire : « Never rely on the redirect alone — always verify the payment server-to-server before processing the order. » Votre serveur récupère le paiement et vérifie son statut avant de confirmer la commande. Chez Tamara, la commande passe à approved quand le client termine le paiement, puis votre serveur appelle le point d'autorisation, sauf si l'autorisation automatique est activée pour votre compte. La documentation de Tamara indique aussi qu'une commande expire si le client ne termine pas le paiement dans les 30 minutes suivant la création de la session.

Certains clients ferment le navigateur avant la redirection. Leur paiement est pourtant accepté, et votre système doit l'apprendre autrement : par les webhooks, avec une interrogation périodique en solution de repli.

### Les webhooks arrivent en retard, en double ou dans le désordre

Un webhook est un message que le prestataire envoie à votre serveur quand le statut d'un paiement change. La documentation de Tabby avertit que « the delivery order is not guaranteed and the same event may occasionally arrive twice », et qu'un événement closed peut arriver avant l'événement authorized. Un webhook qui expire est renvoyé jusqu'à quatre fois de plus.

En pratique, votre gestionnaire de webhooks doit :

- Vérifier l'en-tête d'authentification que vous avez enregistré, pour n'accepter que les messages du prestataire.
- Enregistrer l'événement brut avant de le traiter, pour garder une piste d'audit.
- Ignorer un événement déjà traité, pour qu'un doublon n'expédie jamais une commande deux fois.
- Relire le paiement via l'API quand l'ordre des événements compte, au lieu de se fier à l'ordre d'arrivée.
- Répondre vite et faire le travail lent ensuite, pour que le prestataire n'atteigne pas son délai et ne renvoie pas.

Ce sont les mêmes règles que nous appliquons à toute intégration. Notre article sur la [connexion des systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems) les présente de façon plus générale.

## Capture, annulations et retours partiels

**La capture** indique au prestataire que vous avez exécuté la commande, et c'est elle qui déclenche votre versement. Tabby précise que « only captured payments are settled to you », et selon Tamara la capture confirme que le montant de la commande sera ajouté au prochain versement du marchand. Tabby recommande une capture complète juste après la vérification, tout en acceptant les captures partielles. Tamara prend en charge la capture complète ou partielle au fil des expéditions. Les deux décrivent un délai de 21 jours après lequel le prestataire peut capturer lui-même une commande autorisée : une commande oubliée dans votre système ne reste donc pas ouverte indéfiniment.

**L'annulation** intervient avant la capture. Chez Tamara, seules les commandes autorisées peuvent être annulées, en totalité ou en partie. L'annulation partielle est la bonne réponse quand un article se révèle en rupture de stock après le paiement du client.

**Le remboursement** intervient après la capture. Chez Tabby, un paiement peut être remboursé plusieurs fois, mais « the total cannot exceed the captured amount ». Les remboursements doivent être lancés dans les 180 jours suivant la création du paiement, et un remboursement traité ne peut pas être annulé. Un remboursement partiel réduit d'abord les échéances restantes du client. Chez Tamara, les remboursements sont totaux ou partiels sur les commandes capturées, via l'API ou le portail partenaires.

C'est sur les retours partiels que la plupart des intégrations échouent. Un client renvoie un article sur trois, l'entrepôt l'enregistre, mais personne n'envoie le remboursement partiel. Ou bien il est envoyé deux fois : depuis le portail du prestataire et depuis votre système. Choisissez un seul point de départ pour les remboursements, en général votre système de commandes ou votre tableau de bord, et faites-lui envoyer l'appel API et enregistrer le résultat. Notre [guide de la boutique en ligne](/blog/online-store-egypt-payments-and-delivery) décrit le même problème avec le paiement par carte et le paiement à la livraison.

## Rapprochement et tests

Chaque commande capturée doit se retrouver dans un versement du prestataire, et chaque remboursement doit en réduire un. Pour le vérifier, il vous faut :

- L'identifiant de paiement ou de commande du prestataire, enregistré avec votre propre numéro de commande. Tamara propose aussi un point d'API pour mettre à jour votre référence de commande après le paiement.
- Une trace de chaque capture et de chaque remboursement, avec montant et date.
- Un rapport régulier qui compare ces totaux au rapport de versements du prestataire, aux frais prévus par votre contrat et à ce qui arrive sur votre compte bancaire.

Sans cela, une capture oubliée ressemble à un paiement manquant, et un remboursement envoyé deux fois n'est découvert que lorsque le client s'en aperçoit.

Avant la mise en ligne, utilisez les environnements de test des prestataires. Tabby publie des identifiants de test et une liste de tests complète. Tamara publie des scénarios de test, un guide de test pour l'Arabie saoudite et une liste de contrôle de mise en ligne. Testez aussi les cas défavorables : un client refusé, un navigateur fermé, un webhook en double et un retour partiel. Tabby envoie également des webhooks quand un client conteste un paiement capturé ; décidez qui, dans votre équipe, les reçoit.

## Ce que fait KF Tech Solutions

KF Tech Solutions développe des boutiques en ligne sur mesure, des applications mobiles et les backends qui les font fonctionner, et les relie à d'autres services via leurs API. Pour le BNPL, cela signifie la session de paiement, la vérification côté serveur, un gestionnaire de webhooks qui tolère les doublons, des actions de capture et de remboursement dans votre tableau de bord, et un rapport de rapprochement. Nous travaillons avec des entreprises en Égypte et dans le Golfe ; consultez notre [page Arabie saoudite](/saudi-arabia) et notre [service API et backend](/services/api-and-backend). Nous ne sommes pas partenaires de Tabby ou de Tamara : vous signez le contrat marchand directement avec chaque prestataire, et le compte marchand reste à votre nom.

## Questions fréquentes

### Ai-je besoin d'une passerelle de paiement, ou puis-je connecter Tabby et Tamara directement ?

Les deux fonctionnent. Une passerelle qui les propose vous évite deux intégrations distinctes et vous donne un seul rapport, ce qui convient à une boutique qui l'utilise déjà pour les cartes. Une intégration directe vous donne toutes les fonctions et le tableau de bord de chaque prestataire, au prix de deux intégrations à construire et à maintenir.

### Puis-je proposer Tabby et Tamara en même temps ?

Techniquement, oui. Ce sont deux intégrations distinctes avec deux contrats marchands distincts, et votre page de paiement peut afficher les deux. Chacune a besoin de ses propres sessions, de son traitement des webhooks et de son rapprochement. Vérifiez avant de construire qu'aucun des deux contrats ne l'interdit.

### Un client peut-il retourner une partie de sa commande ?

Oui. Les deux prestataires acceptent les remboursements partiels sur une commande capturée, ainsi que des modifications partielles avant la capture : une capture partielle, ou une annulation partielle chez Tamara. Votre système doit envoyer le bon montant une seule fois et l'enregistrer.

### Qui encaisse les échéances auprès du client ?

Le prestataire. Vous recevez le versement des commandes que vous capturez selon les termes de votre contrat, et le client paie le prestataire. Un remboursement que vous envoyez réduit ce que le client doit encore au prestataire.

### Que demander au prestataire avant le début du développement ?

Les frais marchands, le calendrier des versements et le format de leur rapport, les règles de remboursement et de contestation, et des identifiants de test. Ce sont eux qui déterminent le fonctionnement de votre code de capture, de remboursement et de rapprochement.

Si vous souhaitez intégrer Tabby ou Tamara à une boutique ou une application sur mesure, ou faire vérifier une intégration existante, [contactez-nous](/contact) ou [réservez un appel gratuit](/book).

## Sources

- [SAMA : agrément de Tamara Finance (3 mars 2025)](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx)
- [SAMA : agrément de Tabby Finance (10 novembre 2025)](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)
- [Tabby : traitement des paiements](https://docs.tabby.ai/pay-in-4-custom-integration/payment-processing.md)
- [Tabby : webhooks de paiement](https://docs.tabby.ai/pay-in-4-custom-integration/webhooks.md)
- [Tabby : statuts de paiement](https://docs.tabby.ai/pay-in-4-custom-integration/payment-statuses.md)
- [Tabby : index de la documentation développeurs](https://docs.tabby.ai/llms.txt)
- [Tamara : parcours des statuts de commande](https://docs.tamara.co/docs/online-order-status-flow.md)
- [Tamara : autoriser une commande](https://docs.tamara.co/reference/authoriseorder.md)
- [Tamara : annuler une commande](https://docs.tamara.co/reference/cancelorder.md)
- [Tamara : liste de contrôle de mise en ligne](https://docs.tamara.co/docs/online-go-live-testing-checklist.md)
- [Tap Payments](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
- [Telr](https://telr.com/)
