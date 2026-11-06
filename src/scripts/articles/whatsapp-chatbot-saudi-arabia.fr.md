---
title: Chatbot WhatsApp en Arabie saoudite : le guide pour les entreprises
summary: Comment un bot WhatsApp gère commandes, rendez-vous et liens de paiement en arabe, ce que Meta facture par message en 2026 et ce qu'implique le PDPL.
tags: WhatsApp, chatbot, API WhatsApp Business, service client, IA, Arabie saoudite
alt: Une femme portant un foulard beige écrit sur son téléphone dans une rue de la ville, la nuit
caption: Les clients écrivent à toute heure et dans leur dialecte ; le bot doit les comprendre et répondre dans un arabe clair.
stats: 24 h|fenêtre de service client après le dernier message du client; 1 000|messages de service gratuits par numéro professionnel et par mois; 72 h|pour notifier à la SDAIA une violation de données personnelles
---

Un chatbot WhatsApp permet à une entreprise saoudienne de répondre en arabe, à toute heure, aux questions sur les commandes, les rendez-vous et les prix, et de passer la conversation à une personne quand il le faut. Construisez-le sur la plateforme officielle WhatsApp Business de Meta, obtenez l'accord de vos clients avant de leur écrire et prévoyez un budget pour les frais par message, qui ont de nouveau changé le 1er octobre 2026. Traitez les données clients qu'il collecte selon la loi sur la protection des données personnelles (PDPL) dès le premier jour.

Dernière vérification : 6 novembre 2026

## Ce qu'un bot fait bien pour une entreprise saoudienne

Les meilleures premières tâches sont les questions auxquelles votre équipe répond déjà de nombreuses fois par jour, et dont la réponse se trouve dans un système ou une liste fixe.

- **Le suivi de commande pour les boutiques en ligne.** Le client envoie un numéro de commande et reçoit son statut. Sur [Salla, Zid ou Shopify](/blog/salla-vs-zid-vs-shopify), le bot le lit via l'API de la plateforme, si votre offre le permet.
- **Les rendez-vous en clinique ou en salon.** Le bot affiche les créneaux libres, confirme le rendez-vous, envoie un rappel la veille et propose un lien pour le modifier ou l'annuler.
- **Les liens de paiement.** Pour un acompte ou une commande impayée, le bot envoie un lien créé par votre prestataire de paiement. Des prestataires comme Tap proposent mada et Apple Pay parmi leurs moyens de paiement, et le bot ne voit jamais les données de carte. Voir notre guide des [prestataires de paiement en Arabie saoudite](/blog/payment-gateways-saudi-arabia).
- **Horaires, agences et zones de livraison**, y compris pendant le week-end du vendredi et du samedi, quand personne n'est au bureau.
- **La collecte d'informations avant qu'une personne prenne le relais** : nom, numéro de commande, le problème en une ligne, une photo.
- **Le transfert au personnel** à tout moment, avec l'historique de la conversation.

Ce qu'il ne doit pas faire seul : traiter les réclamations, négocier les prix, donner des conseils médicaux ou approuver des remboursements. Un bot qui s'y essaie perd souvent le client qu'il devait garder.

## L'arabe d'abord : comprendre le dialecte du Golfe, répondre en arabe clair

La plupart des clients écrivent comme ils parlent. Un message comme « أبي أعرف وين طلبي » doit être compris comme « Où est ma commande ? », tout comme la même question avec des fautes de frappe ou des mots anglais. Les bots qui ne reconnaissent que des mots-clés échouent ici ; c'est là qu'un modèle de langage d'IA trouve sa place.

Pour les réponses, c'est différent. Elles doivent être rédigées dans un arabe clair et courtois que chaque client lit facilement, avec l'anglais pour ceux qui écrivent en anglais. La politique nationale de la langue arabe, approuvée en Arabie saoudite en 2026, encourage l'arabe dans les communications commerciales, sans être un instrument d'application autonome.

Trois règles rendent un bot arabe fiable :

1. Les prix, les statuts de commande et les dates viennent de vos systèmes, jamais d'un texte inventé par le modèle d'IA. Le modèle comprend la question ; votre système fournit la réponse.
2. Les messages fixes, comme l'accueil, les modèles et la phrase de transfert, sont écrits par une personne et validés par un arabophone natif.
3. Les tests se font avec de vrais messages anonymisés tirés de votre propre historique de discussions.

## Utiliser la plateforme officielle et respecter ses règles

Il existe trois façons d'automatiser WhatsApp :

| Option | Ce que vous obtenez | La contrepartie |
|---|---|---|
| Application WhatsApp Business | Messages d'accueil et d'absence gratuits, réponses rapides, catalogue | Pas de véritable automatisation ni de lien avec vos systèmes |
| Plateforme WhatsApp Business (API) | Automatisation complète, modèles approuvés, connexion à votre boutique, vos rendez-vous et vos paiements | Frais par message et politiques de Meta |
| Outils non officiels qui pilotent WhatsApp Web | Bon marché et rapides à installer | Ils enfreignent les conditions de WhatsApp, et le numéro peut être restreint ou banni |

Si votre numéro figure sur votre devanture et dans chaque publicité, seule la plateforme officielle a du sens. Vous l'utilisez directement via Meta ou via un prestataire, avec un compte professionnel vérifié et un numéro enregistré pour elle.

La politique de messagerie WhatsApp Business de Meta impose trois règles autour desquelles le bot doit être conçu :

- **D'abord le consentement.** Vous ne pouvez contacter une personne que si elle vous a donné son numéro et a accepté de recevoir vos messages. Meta recommande un consentement distinct pour chaque catégorie de messages, par exemple les suivis de commande et les offres.
- **Respecter les désinscriptions.** Toute demande d'arrêt, faite sur WhatsApp ou ailleurs, doit être respectée. Indiquez aux clients comment arrêter chaque type de message.
- **Un accès à une personne.** L'automatisation est autorisée dans la fenêtre de 24 heures, mais il faut un moyen d'escalade rapide, clair et direct : transfert à un agent dans la conversation, numéro de téléphone, e-mail, formulaire d'assistance ou visite en agence.

La fenêtre de service client de 24 heures s'ouvre quand le client vous écrit. En dehors, vous ne pouvez envoyer que des modèles approuvés par Meta.

## Ce que coûte le fonctionnement en 2026

Depuis le 1er juillet 2025, Meta facture par message et non plus par conversation. Le prix dépend de la catégorie du message et de l'indicatif pays du numéro du destinataire. L'Arabie saoudite (+966) est un marché à part dans les grilles tarifaires de Meta : un message vers un numéro saoudien et un message vers un numéro émirien peuvent donc coûter des montants différents.

| Type de message | Qui l'initie | Exemple | Facturation par Meta depuis le 1er octobre 2026 |
|---|---|---|---|
| Service | Le client écrit, vous répondez sous 24 heures | Répondre à « Où est ma commande ? » | Les 1 000 premiers par numéro professionnel et par mois gratuits, puis par message |
| Utilitaire | Vous, avec un modèle approuvé | Avis d'expédition, rappel de rendez-vous | Par message, désormais aussi dans la fenêtre de service |
| Authentification | Vous, avec un modèle approuvé | Code de connexion à usage unique | Par message |
| Marketing | Vous, avec un modèle approuvé | Offres, retour en stock | Par message |

Deux changements du 1er octobre 2026 comptent pour votre budget :

- Les messages de service redeviennent payants au-delà d'un quota gratuit de 1 000 par numéro professionnel et par mois. Les messages gratuits non utilisés ne sont pas reportés au mois suivant.
- Les modèles utilitaires envoyés dans une fenêtre de service ouverte, gratuits depuis juillet 2025, sont désormais facturés au tarif normal.

Les conversations qui démarrent depuis une publicité Click to WhatsApp ouvrent une fenêtre d'entrée gratuite pouvant aller jusqu'à 7 jours, pendant laquelle Meta ne facture pas ces catégories. Consultez les tarifs saoudiens actuels dans la grille publiée par Meta avant de prévoir vos volumes, et ajoutez un moyen de paiement au compte pour que les messages de service continuent une fois le quota gratuit épuisé.

Les frais de Meta ne sont qu'une partie du coût. S'y ajoutent le développement du bot, une seule fois, l'abonnement d'un prestataire si vous passez par l'un d'eux, ainsi que l'hébergement et l'usage de l'IA chaque mois. Répondre aux questions simples par des réponses fixes, et n'utiliser le modèle que pour comprendre les messages, limite le coût de l'IA.

## Les données clients et le PDPL

Un chatbot collecte des données personnelles dès le premier message : numéros de téléphone, noms, adresses, historiques de commandes et, pour les cliniques, des informations sur la santé des personnes. La loi saoudienne sur la protection des données personnelles (PDPL) est en vigueur depuis le 14 septembre 2023, et sa période de grâce a pris fin le 14 septembre 2024. L'autorité compétente est la Saudi Data and AI Authority (SDAIA).

Les obligations les plus utiles à connaître pour un bot :

- **Enregistrement.** Certains responsables du traitement doivent s'enregistrer sur la National Data Governance Platform. Selon DLA Piper, cela concerne en pratique la plupart d'entre eux.
- **Notification des violations.** Toute violation de données personnelles doit être notifiée à la SDAIA dans les 72 heures.
- **Transferts à l'étranger.** Les données personnelles peuvent être transférées vers des pays offrant un niveau de protection adéquat, ou à défaut avec des garanties appropriées, et seulement dans la mesure strictement nécessaire. Cela compte si votre bot, sa base de données ou son modèle d'IA fonctionne hors du Royaume.
- **Les sanctions** peuvent atteindre 5 millions de SAR, doublées en cas de récidive.

La SDAIA a soumis un projet de modification du PDPL à consultation du 6 octobre au 5 novembre 2026. L'une des propositions obligerait les responsables du traitement à stocker les données personnelles dans le Royaume. Ce n'est encore qu'un projet ; prévoyez malgré tout une installation que l'on pourra déplacer plus tard. Google Cloud dispose d'une région à Dammam, que les clients basés en Arabie saoudite achètent via CNTXT.

En pratique : ne collectez que ce dont chaque tâche a besoin, mettez le lien vers votre politique de confidentialité dans la première réponse, enregistrez quand et comment chaque client a donné son accord, supprimez les données de discussion devenues inutiles, et ne montrez au personnel que les conversations qu'il traite. Il s'agit d'une information générale, pas d'un conseil juridique ; faites valider la formulation du consentement et votre politique de confidentialité par un conseiller en Arabie saoudite.

## Comment démarrer

1. **Relisez un mois de discussions.** Comptez les questions les plus fréquentes et celles qui arrivent hors horaires ou le week-end.
2. **Choisissez deux ou trois tâches**, en général le suivi de commande, les rendez-vous et les questions courantes.
3. **Identifiez la source des données.** Où sont enregistrés les commandes et les rendez-vous, et ce système a-t-il une API ?
4. **Créez le compte officiel** : vérification de l'entreprise, un numéro pour le bot et les premiers modèles soumis à approbation.
5. **Construisez d'abord le transfert vers une personne**, avec les horaires indiqués à l'heure de Riyad, pour qu'aucun client ne tourne en rond.
6. **Lancez dans une agence ou pour un seul service**, relisez les conversations où le bot s'est trompé, corrigez-les, puis élargissez.

Pour une vue d'ensemble, lisez [un guide pratique pour intégrer l'IA dans votre entreprise](/blog/a-practical-guide-to-adding-ai-to-your-business) et [sept processus que tout commerce devrait automatiser en premier](/blog/seven-workflows-every-retail-business-should-automate). Notre [guide du chatbot WhatsApp en Égypte](/blog/whatsapp-chatbot-for-business-egypt) couvre les mêmes bases pour un autre marché.

## Comment KF Tech Solutions vous aide

KF Tech Solutions conçoit des chatbots WhatsApp et des assistants d'IA qui répondent à partir de vos propres informations, se connectent aux systèmes où se trouvent vos commandes et vos rendez-vous, et transfèrent la conversation à votre équipe si besoin. Nous travaillons à distance avec des entreprises en Égypte et dans le Golfe ; Le Caire est à l'heure de Riyad de fin avril à fin octobre et une heure derrière en hiver. Voir [notre page Arabie saoudite](/saudi-arabia) et notre service [solutions d'IA](/services/ai-solutions).

## Questions fréquentes

### Le bot comprend-il le dialecte saoudien ?

Oui, s'il utilise un modèle de langage d'IA pour comprendre les messages et qu'il a été testé sur de vrais messages de clients saoudiens. Un bot fondé uniquement sur des menus et des mots-clés en manquera beaucoup. Les réponses restent en arabe clair, avec des informations tirées de vos systèmes.

### L'application WhatsApp Business suffit-elle, ou faut-il l'API ?

L'application suffit pour les messages d'accueil, les réponses rapides et un catalogue. Les réponses automatiques et toute connexion à votre boutique, à votre système de réservation ou à votre prestataire de paiement nécessitent la plateforme WhatsApp Business.

### Puis-je envoyer des offres à tous mes clients ?

Seulement aux personnes qui vous ont donné leur numéro et ont donné leur accord, idéalement pour les messages marketing en particulier. Les offres sont des modèles marketing facturés par message, et toute personne qui demande l'arrêt doit être retirée de la liste.

### Est-ce que je paie Meta quand le bot est peu sollicité ?

Meta facture par message, et les 1 000 premiers messages de service par numéro et par mois sont gratuits. L'hébergement et l'éventuel abonnement d'un prestataire sont des coûts mensuels fixes ; l'usage de l'IA varie avec le volume.

### Mes données de discussion doivent-elles rester en Arabie saoudite ?

Le PDPL en vigueur autorise les transferts vers des pays offrant une protection adéquate ou avec des garanties appropriées. Un projet de modification ajouterait une obligation de stockage dans le Royaume, mais ce n'est pas encore la loi. Demandez conseil pour votre situation.

### Combien de temps faut-il pour une première version ?

Un bot qui gère deux ou trois tâches est un petit projet. La vérification de l'entreprise par Meta et l'approbation des modèles donnent souvent le rythme : lancez donc la création du compte tôt.

Vous voulez un bot WhatsApp qui réponde à vos clients saoudiens dans un arabe clair ? [Parlez-nous de vos discussions](/contact) ou [réservez un appel gratuit](/book), et nous vous proposerons les premières tâches à automatiser.

## Sources

- [Tarifs de la plateforme WhatsApp Business, Meta](https://developers.facebook.com/docs/whatsapp/pricing)
- [Politique de messagerie WhatsApp Business, Meta](https://whatsappbusiness.com/policy/)
- [Protection des données en Arabie saoudite, DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Projet de modification du PDPL par la SDAIA, Clyde & Co](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [Politique nationale de la langue arabe, CMS](https://cms.law/en/int/legal-updates/saudi-arabia-s-national-arabic-language-policy-what-businesses-need-to-know)
- [Tap Payments, Arabie saoudite](https://www.tap.company/en-sa)
- [Accès à la région Google Cloud de Dammam](https://docs.cloud.google.com/docs/dammam-region-access)
- [Passage du week-end saoudien au vendredi et samedi, Crowell](https://www.crowell.com/en/insights/client-alerts/saudi-arabia-changes-weekend-to-friday-saturday-from-29-june-2013)
