---
title: Choisir un ERP aux EAU avant la facturation électronique
summary: Choisir aux EAU un ERP qui envoie des factures PINT AE via un ASP, gère la TVA à 5 % et les zones franches, et reste abordable sur la durée.
tags: ERP, ERP sur mesure, facturation électronique, PINT AE, TVA, EAU
alt: Un chariot élévateur jaune transporte une palette chargée devant de hauts rayonnages dans un entrepôt
caption: Stocks, ventes et TVA vivent dans l’ERP : celui que vous choisissez aujourd’hui décide de la facilité d’émettre des e-factures demain.
stats: 5 %|taux normal de TVA que votre ERP doit appliquer correctement; 86|ASP accrédités sur la liste du ministère des Finances au 6 nov. 2026; 01/07/2027|démarrage de la facturation électronique sous 50 M AED de chiffre d'affaires
---

Si vous choisissez aujourd'hui un ERP aux Émirats arabes unis, faites de la préparation à la facturation électronique un critère de sélection, et non un ajout ultérieur : à partir de 2027, vos factures B2B et B2G devront sortir de votre système sous forme de données structurées PINT AE, envoyées via un prestataire de services accrédité (Accredited Service Provider, ASP). Le bon ERP est celui qui produit des données de facturation propres, se connecte à l'ASP de votre choix, applique correctement la TVA à 5 % dans toutes vos sociétés et coûte, sur toute sa durée de vie, ce que vous aviez prévu. Qu'il s'agisse d'un progiciel, d'un développement sur mesure ou d'une solution hybride dépend du caractère plus ou moins spécifique de vos activités.

Dernière vérification : 6 novembre 2026

Ceci est une information générale, et non un conseil fiscal ou juridique. Vérifiez vos propres obligations avec votre conseiller fiscal.

## Ce que la facturation électronique change au choix d'un ERP

En vertu des décisions ministérielles 243 et 244 de 2025, les EAU font passer toutes les transactions B2B et B2G à la facturation électronique. L'entreprise qui émet la facture comme celle qui la reçoit doivent chacune nommer un ASP. Les ventes B2C sont exclues jusqu'à ce que le ministre en décide autrement.

Le modèle compte cinq « coins ». Votre ERP (coin 1) envoie des données PINT AE à votre ASP (coin 2). Votre ASP les valide et les transmet à l'ASP de l'acheteur (coin 3), qui les remet à l'acheteur (coin 4). Votre ASP déclare aussi les données fiscales au côté fiscal (coin 5). Un PDF, un fichier Word, un scan ou un e-mail n'est pas une facture électronique.

Les échéances déterminent le temps dont vous disposez pour choisir :

| Groupe | Nommer un ASP avant le | Démarrage |
|---|---|---|
| Chiffre d'affaires de 50 M AED ou plus | 30 octobre 2026 | 1er janvier 2027 |
| Chiffre d'affaires inférieur à 50 M AED | 31 mars 2027 | 1er juillet 2027 |
| Entités publiques | 31 mars 2027 | 1er octobre 2027 |

Le chiffre d'affaires correspond aux revenus bruts de la dernière période comptable. Les participants au pilote et les adoptants volontaires pouvaient démarrer dès le 1er juillet 2026. Pour la liste complète par groupe, consultez [les échéances de la facturation électronique aux EAU pour les PME](/blog/uae-e-invoicing-deadlines-smes).

## Préparation à la facturation électronique : ce qu'il faut tester avant de signer

Chaque éditeur vous dira que son système est « prêt pour la facturation électronique ». Demandez-lui de le montrer :

- **Un véritable export PINT AE.** Demandez la sortie d'une facture normale, d'un avoir et d'une facture avec des traitements de TVA mixtes, et faites vérifier par les ASP que vous envisagez qu'ils les acceptent.
- **La connexion à l'ASP.** À quels ASP l'ERP est-il déjà connecté, et comment ? Avec 86 ASP accrédités sur la liste du ministère des Finances, vous devez choisir l'ASP pour son service et son prix, pas parce que c'est le seul que votre ERP prend en charge.
- **Les factures entrantes.** Vous recevrez aussi des factures électroniques de vos fournisseurs. Demandez comment elles arrivent dans l'ERP et si elles peuvent être rapprochées des bons de commande et des réceptions sans ressaisie.
- **Rejets et corrections.** Ce que voit l'utilisateur quand l'ASP rejette une facture, et comment un avoir est relié à la facture d'origine.
- **Données de base.** Les fiches clients et fournisseurs, les descriptions d'articles et les codes TVA doivent être complets et cohérents. L'ERP doit rendre difficile l'enregistrement de données manquantes, au lieu de les découvrir au moment de l'envoi.
- **Qui assure la maintenance.** La spécification peut évoluer. Demandez qui met à jour le connecteur, dans quel délai, et si c'est inclus dans l'abonnement ou facturé à part.
- **Piste d'audit.** Chaque facture doit indiquer qui l'a créée, ce qui a été envoyé, quand, et ce que l'ASP a répondu.

L'intégration elle-même consiste à choisir un ASP, à s'inscrire sur EmaraTax, puis à se connecter. L'ERP ne remplace pas l'ASP : il l'alimente. Pour l'aspect technique, lisez [la facturation électronique aux EAU pour les POS et ERP sur mesure](/blog/uae-e-invoicing-custom-pos-erp).

Les amendes rendent cela concret. Selon la décision du Conseil des ministres 173 de 2026, annoncée le 30 octobre 2026, ne pas mettre en œuvre le système ou ne pas nommer d'ASP coûte 5 000 AED, puis 5 000 AED par mois, dans la limite de 50 000 AED sur 12 mois. Chaque facture électronique ou avoir non émis ou non transmis coûte 100 AED, dans la limite de 5 000 AED par mois. Ne pas informer votre ASP d'un changement de vos données d'enregistrement coûte 250 AED par jour, dans la limite de 5 000 AED par mois.

## TVA, zones franches et structures à plusieurs sociétés

La facturation électronique repose sur la TVA : l'ERP doit donc d'abord bien gérer la TVA.

- **Le taux normal est de 5 %.** L'ERP doit l'appliquer par défaut et gérer les autres traitements ligne par ligne, afin qu'une même facture puisse porter correctement des articles différents.
- **Services importés.** Lorsqu'un fournisseur non résident fournit des services à une entreprise immatriculée à la TVA aux EAU, il ne facture pas la TVA et le destinataire l'autoliquide. Votre ERP doit enregistrer ces achats pour que l'autoliquidation apparaisse dans votre déclaration de TVA.
- **Zones désignées.** Le guide de la FTA indique que les services fournis dans les zones désignées sont traités comme fournis aux EAU et soumis à la TVA au taux normal. Ne paramétrez donc pas une société de zone franche « sans TVA » par défaut.

De nombreux groupes aux EAU comptent plusieurs entités juridiques : une société en zone franche, une société sur le continent (mainland), parfois une succursale. Les sociétés de zone franche relèvent d'un cadre juridique différent et, pour vendre sur le mainland, ont besoin d'un distributeur agréé sur place ou d'une succursale ou société sur le mainland. Un ERP pour ce type de groupe doit gérer :

- des entités juridiques distinctes, chacune avec sa numérotation de factures, ses paramètres de TVA et ses comptes bancaires ;
- les ventes et transferts intragroupe, avec un stock qui circule entre les entités, sur le papier comme dans la réalité ;
- des rapports consolidés sur toutes les entités, sans tout exporter dans un tableur ;
- les groupes TVA, car la décision ministérielle 197 de 2026 exclut de la facturation électronique les transactions au sein d'un groupe fiscal pendant 24 mois à partir du 1er janvier 2027.

La même décision a supprimé l'obligation de stocker les données de facturation électronique aux EAU, ce qui vous laisse plus de liberté pour l'hébergement de l'ERP. Les règles sectorielles restent applicables : les prestataires de services de paiement doivent conserver les données personnelles et de paiement aux EAU, et les données de santé font l'objet de restrictions.

## Progiciel, sur mesure ou hybride

Il existe trois voies réalistes. Aucune ne convient à tout le monde.

| Voie | Idéale quand | Points de vigilance |
|---|---|---|
| Progiciel ERP | Vos processus sont proches d'une comptabilité, de ventes et d'achats classiques | Des frais par utilisateur qui grimpent avec votre croissance, et des adaptations payantes qui vont à l'encontre du produit |
| ERP sur mesure | Vos activités sont particulières : projets, location, production, terrain, plusieurs entités qui fonctionnent différemment | Un développement plus long, et un développeur qui documente le système et vous remet le code |
| Hybride | La comptabilité convient à un progiciel, mais pas les opérations | Deux systèmes à synchroniser ; décidez lequel est maître de chaque donnée |

L'hybride est courant : un progiciel comptable pour le grand livre et les déclarations de TVA, et un système opérationnel sur mesure pour le stock, les commandes, les chantiers ou la caisse des points de vente, qui l'alimente. Décidez alors tôt quel système émet la facture électronique, car un seul doit le faire.

Un ERP sur mesure se justifie lorsqu'un progiciel demanderait tant de paramétrage que vous finiriez de toute façon par développer un logiciel. Nous expliquons comment trancher dans [logiciel sur mesure ou standard : comment choisir](/blog/custom-software-vs-off-the-shelf-how-to-choose). Si vous n'êtes pas sûr d'avoir besoin d'un ERP complet, [une petite entreprise a-t-elle vraiment besoin d'un ERP ?](/blog/erp-for-small-business-egypt) passe en revue les signes ; l'article a été écrit pour l'Égypte, mais les signes sont les mêmes aux EAU.

## Le vrai coût de possession

Le prix de la licence ou du développement n'est qu'une partie du coût. Comparez les options sur trois à cinq ans :

| Poste de coût | Progiciel ERP | ERP sur mesure |
|---|---|---|
| Licences ou abonnement | Par utilisateur ou par module, chaque année | Aucun, sauf services tiers |
| Mise en œuvre | Paramétrage, formation, migration des données | Conception, développement, tests, migration des données |
| Facturation électronique | Connecteur, parfois en option payante, plus les frais de l'ASP | Connecteur intégré au système, plus les frais de l'ASP |
| Évolutions | Tarifs du partenaire intégrateur ; certaines évolutions sont impossibles | Temps de développement ; tout est possible, à un prix |
| Hébergement | Généralement inclus dans les abonnements cloud | Votre serveur ou votre compte cloud |
| Sortie | Export des données depuis le format de l'éditeur | Le code et la base de données vous appartiennent |

Les frais d'ASP s'appliquent quel que soit l'ERP choisi : demandez donc les tarifs des ASP en même temps que les offres des éditeurs.

L'erreur la plus coûteuse vient généralement des données, pas du logiciel. Des listes d'articles désordonnées, des clients en double et des chiffres de stock auxquels personne ne se fie vous suivent dans n'importe quel nouveau système : nettoyez-les d'abord. [La gestion des stocks : où passe vraiment votre stock](/blog/inventory-management-system-egypt) décrit les fuites les plus courantes.

Si vous envisagez avec nous un développement sur mesure ou une solution hybride, voici où commencent les prix. Les projets commencent à 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et ferme après un appel gratuit.

## Un plan de sélection adapté à l'échéance

Si votre chiffre d'affaires est inférieur à 50 M AED, vous avez jusqu'au 31 mars 2027 pour nommer un ASP et jusqu'au 1er juillet 2027 pour démarrer. En partant de ces dates :

1. **Cartographiez vos factures.** À qui vous facturez, combien de factures et d'avoirs par mois, et quelles entités les émettent.
2. **Nettoyez vos données de base.** Clients, fournisseurs, articles et codes TVA, avant toute démonstration.
3. **Retenez deux ou trois voies ERP**, dont l'hybride si vos activités sont particulières.
4. **Présélectionnez des ASP en parallèle**, sur la liste des prestataires accrédités du ministère des Finances.
5. **Faites passer une facture test de bout en bout** avec l'ERP et l'ASP retenus avant de signer.
6. **Migrez et formez**, puis faites tourner l'ancien et le nouveau système en parallèle pendant au moins une clôture mensuelle.
7. **Démarrez la facturation électronique** avec une marge confortable avant votre échéance.

Si vous êtes dans le groupe à 50 M AED ou plus, l'échéance de nomination de l'ASP est déjà passée et le démarrage a lieu le 1er janvier 2027 : concentrez-vous dès maintenant sur l'étape 5 et traitez un remplacement complet de l'ERP comme un projet distinct et ultérieur.

## Questions fréquentes

### Pouvons-nous garder notre ERP actuel et respecter la facturation électronique ?

Souvent oui, s'il sait exporter des données de facturation structurées et se connecter à un ASP, directement ou via un connecteur. Sinon, vous pouvez le faire évoluer, le remplacer ou utiliser le portail de votre ASP si vous émettez peu de factures. Testez-le avec une vraie facture avant de décider.

### L'éditeur de l'ERP doit-il être un ASP accrédité ?

Non. L'ASP est le prestataire accrédité qui valide et échange vos factures électroniques. Votre ERP produit les données et les envoie à l'ASP que vous nommez. Vérifiez l'ASP sur la liste publiée par le ministère des Finances.

### Les ventes B2C de notre magasin nécessitent-elles des factures électroniques ?

Pas pour l'instant. Les transactions B2C sont exclues jusqu'à une décision du ministre. Vos obligations habituelles de facturation de la TVA restent applicables, et il est prudent de choisir un système capable de produire des données structurées plus tard.

### Les données de notre ERP doivent-elles être hébergées aux EAU ?

Pas du fait de la facturation électronique : la décision ministérielle 197 de 2026 a supprimé l'obligation de stocker les données de facturation électronique aux EAU. D'autres règles peuvent s'appliquer à certaines données, comme les données de paiement ou de santé ; vérifiez donc celles de votre secteur.

### Un ERP sur mesure est-il plus long à mettre en place qu'un progiciel ?

Cela peut être le cas, et c'est pourquoi une solution hybride a souvent du sens avant une échéance. Utilisez dès maintenant un progiciel ou votre système actuel pour une facturation conforme, et développez la partie opérationnelle sur mesure par étapes.

## Parlons de votre ERP

KF Tech Solutions développe des ERP, des systèmes de caisse et de gestion des stocks sur mesure, et nous avons intégré un système de caisse au dispositif de reçus électroniques de l'administration fiscale égyptienne, l'ETA ([voir le projet](/projects/egypt-eta)). Nous travaillons avec des entreprises en Égypte et dans le Golfe. Découvrez notre [service de systèmes de gestion](/services/business-systems) et notre [page consacrée aux EAU](/uae).

Si vous comparez des options d'ERP avant votre échéance de facturation électronique, [réservez un appel gratuit](/book) ou [envoyez-nous une description de votre configuration actuelle](/contact). Nous vous aiderons à choisir entre progiciel, sur mesure et hybride, et vous remettrons un devis écrit si un développement est pertinent.

## Sources

- [Ministère des Finances des EAU : eInvoicing](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
- [Ministère des Finances : décisions sur le périmètre et le calendrier (septembre 2025)](https://mof.gov.ae/en/news/ministry-of-finance-announces-the-issuance-of-two-ministerial-decisions-on-the-scope-of-obligations-and-the-timelines-for-implementing-the-electronic-invoicing-system-2/)
- [Décision ministérielle n° 244 de 2025 sur la mise en œuvre du système de facturation électronique (PDF)](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Ministère des Finances : modifications ciblées des décisions sur la facturation électronique](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [Ministère des Finances : séance d'information sur les dernières mises à jour (septembre 2026)](https://mof.gov.ae/en/news/ministry-of-finance-hosts-awareness-event-in-ras-al-khaimah-on-latest-einvoicing-updates/)
- [Ministère des Finances : prestataires de services accrédités](https://mof.gov.ae/en/about-us/initiatives/einvoicing/einvoicing-accredited-service-providers-asps/)
- [Ministère des Finances : modifications pour alléger la charge des entreprises (octobre 2026)](https://mof.gov.ae/en/news/ministry-of-finance-amends-electronic-invoicing-regulations-to-ease-the-burden-on-businesses/)
- [Ministère des Finances : amendes administratives mises à jour (octobre 2026)](https://mof.gov.ae/en/news/mof-announces-updated-administrative-penalties-related-to-the-uae-einvoicing-system-to-enhance-clarity-and-support-business-compliance/)
- [PwC Worldwide Tax Summaries : EAU, autres impôts](https://taxsummaries.pwc.com/united-arab-emirates/corporate/other-taxes)
- [FTA : guide TVA du commerce électronique (PDF)](https://tax.gov.ae/DataFolder/Files/Pdf/E-Commerce%20-%20VAT%20Guide%20-%20EN%20-%2009%2008%202020.pdf)
- [FTA : guide TVA des zones désignées (PDF)](https://www.tax.gov.ae/-/media/Files/FTA/links/vat-designated-zone/Designated-Zones-VAT-Guide.pdf)
- [Portail officiel des EAU : exercer en zone franche](https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-)
- [DLA Piper : protection des données aux EAU](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
