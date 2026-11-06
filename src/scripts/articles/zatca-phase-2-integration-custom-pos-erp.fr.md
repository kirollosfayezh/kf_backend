---
title: ZATCA phase 2 : intégrer votre propre caisse ou ERP
summary: Gardez votre logiciel de caisse ou votre ERP et respectez la phase 2 de la ZATCA : onboarding, clearance, déclaration sous 24 h, chaîne de hachage, checklist.
tags: ZATCA, facture électronique, FATOORA, caisse, ERP, Arabie saoudite
alt: Terminal de paiement par carte imprimant un long ticket papier sur un fond orange uni
caption: En phase 2, chaque facture émise par votre caisse doit aussi parvenir à la ZATCA en XML : validée d'abord, ou déclarée dans les 24 heures.
stats: 24 h|pour déclarer chaque facture simplifiée à FATOORA; 1er févr. 2027|date limite d'intégration pour les entreprises de la vague 25; 10 000 SAR|amende publiée en 2021 pour suppression ou modification d'une facture électronique émise
---

Oui, une entreprise saoudienne peut conserver son propre logiciel de caisse ou son ERP sous la phase 2 de la ZATCA. Chaque unité qui émet des factures doit être intégrée à la plateforme FATOORA de la ZATCA, produire des factures en XML UBL 2.1, faire valider (clearance) chaque facture fiscale par la ZATCA avant que l'acheteur ne la reçoive, et déclarer chaque facture simplifiée dans les 24 heures. Trois voies y mènent : remplacer le système, placer un middleware devant lui, ou intégrer le connecteur dans le système lui-même.

Dernière vérification : 6 novembre 2026

Ce guide s'adresse aux dirigeants qui utilisent un logiciel de caisse développé pour eux, un ERP doté de modules sur mesure ou un système interne. Il explique ce que la phase 2 exige de ce système, comment choisir une voie et quoi vérifier avant votre échéance. Il s'agit d'informations générales, pas d'un conseil fiscal.

## Ce que la phase 2 exige de votre système

La phase 1, dite de génération, s'applique depuis le 4 décembre 2021 à tous les contribuables sauf les non-résidents : les factures doivent être générées électroniquement, et une facture papier scannée ou copiée ne compte pas. La phase 2, dite d'intégration, ajoute une connexion en direct avec la ZATCA. Votre système ne se contente plus d'imprimer des factures. Il les cachette, les transmet et conserve la preuve de ce qui est arrivé à chacune.

La ZATCA traite deux types de factures différemment, et beaucoup d'entreprises émettent les deux :

| | Facture fiscale | Facture fiscale simplifiée |
|---|---|---|
| Utilisée en général pour | Les ventes aux entreprises et à l'administration (B2B, B2G) | Les ventes aux consommateurs (B2C) |
| Modèle d'intégration | Clearance, en temps réel | Déclaration (reporting), sous 24 heures |
| Qui la cachette | La ZATCA ajoute son cachet cryptographique et un QR code lors de la clearance | Votre système la cachette avec son propre CSID et ajoute un QR code à 9 balises |
| Quand le client la reçoit | Seulement après le retour du XML validé par la ZATCA | Immédiatement, en général sous forme imprimée |
| Notes de crédit et de débit | Validées de la même façon | Déclarées de la même façon |

En pratique, un magasin peut continuer à vendre quand la connexion est lente, car les factures simplifiées sont cachetées localement puis déclarées. Une facture B2B ne peut pas parvenir au client avant la validation de la ZATCA : la clearance fait donc partie du processus de facturation lui-même, pas d'un traitement nocturne.

## Qui doit s'intégrer, et quand

La phase 2 a commencé le 1er janvier 2023 et se déploie par vagues définies selon le chiffre d'affaires soumis à la TVA. La ZATCA annonce chaque vague au moins six mois avant sa date. La plus récente, la vague 25, vise les entreprises dont le chiffre d'affaires soumis à la TVA a dépassé 187 500 SAR au cours de l'une des années 2022 à 2025 ; elles doivent être intégrées à FATOORA au plus tard le 1er février 2027. Les détails figurent dans [ZATCA vague 25 : qui doit s'intégrer d'ici le 1er février 2027](/blog/zatca-wave-25-e-invoicing).

| Vague | Chiffre d'affaires soumis à la TVA supérieur à | Intégration au plus tard le |
|---|---|---|
| 22 | 1 million SAR | 31 décembre 2025 |
| 23 | 750 000 SAR | du 1er janvier au 31 mars 2026 |
| 24 | 375 000 SAR | 30 juin 2026 |
| 25 | 187 500 SAR | 1er février 2027 |

Si votre chiffre d'affaires vous plaçait dans une vague antérieure, votre échéance est déjà passée, et le travail décrit ci-dessous est en retard, pas à venir.

## Trois voies pour un système existant

La ZATCA ne certifie aucun logiciel. Son annuaire des fournisseurs de solutions est présenté comme une liste indicative, non contraignante juridiquement pour les contribuables, qui ne vaut pas approbation de la ZATCA ; les contribuables peuvent utiliser toute solution conforme. Vous êtes donc face à une décision technique, pas à un achat.

| Voie | Quand elle convient | Points de vigilance |
|---|---|---|
| **Remplacer** la caisse ou l'ERP par un progiciel qui gère déjà la phase 2 | Le système actuel n'a pas d'API, plus personne pour le maintenir, ou devrait de toute façon être réécrit | Migration des données, formation, et perte des processus sur mesure pour lesquels le système a été conçu |
| **Middleware** : un service séparé reçoit les données de facture de votre système, construit le XML, le cachette et dialogue avec la ZATCA | Votre système fonctionne et peut exporter chaque vente de façon fiable, mais son code est difficile à modifier | Le middleware devient partie intégrante de votre facturation. S'il tombe, les factures B2B s'arrêtent. Il ne peut pas corriger les règles que votre système enfreint, comme la modification de factures émises |
| **Intégrer le connecteur** : votre propre système génère, cachette, transmet et archive chaque facture | Vous possédez le code source et disposez, ou pouvez vous entourer, de développeurs qui le maintiennent | Plus de travail au départ, mais chaque règle est appliquée là où la facture est créée |

Le middleware est souvent vendu comme la solution rapide. Il ne l'est que si le système derrière lui se comporte déjà comme la phase 2 l'attend. Si les caissiers peuvent encore modifier une vente terminée, un connecteur placé devant transmettra fidèlement des données erronées. Les arbitrages généraux sont présentés dans [logiciel sur mesure ou standard : comment choisir](/blog/custom-software-vs-off-the-shelf-how-to-choose). Pour la phase 2, la question décisive est généralement de savoir si vous maîtrisez le code.

## Ce que fait réellement le connecteur

Quelle que soit la voie choisie, les mêmes tâches doivent être accomplies quelque part.

### L'onboarding de chaque unité de facturation

La ZATCA appelle ce qui émet les factures une E-Invoice Generation Solution (EGS). Chaque unité EGS est intégrée via le portail FATOORA, qui lui délivre son Cryptographic Stamp Identifier (CSID) ; c'est aussi là qu'un CSID est renouvelé ou révoqué.

Décidez donc tôt où les factures sont générées : sur chaque caisse, ou sur un serveur central que les caisses appellent. Ce qui génère et cachette les factures est ce que vous intégrez, renouvelez et surveillez. Changer cela plus tard coûte cher : tranchez avant de développer.

### Construire le XML

Les factures de la phase 2 sont des fichiers XML selon la structure UBL 2.1, avec des règles de validation fondées sur la norme européenne EN 16931. Elles sont générées en XML ou en PDF/A-3 avec le XML intégré, mais tout ce qui est envoyé à la ZATCA doit être du XML transmis par une API. C'est là que les anciens systèmes peinent : le XML exige des données qu'un écran de caisse n'a jamais demandées, comme le traitement TVA de chaque ligne et, sur les factures fiscales, les informations sur l'acheteur.

### Cachet, QR code et chaîne de hachage

Chaque facture porte un UUID de 128 bits et le hachage de la facture précédente. Les hachages relient toutes les factures d'une même unité EGS en une seule chaîne, de sorte que leur ordre ne peut plus être modifié, et le compteur de factures ne peut pas être remis à zéro. Pour les factures simplifiées, votre système appose lui-même le cachet cryptographique et génère le QR code, encodé en TLV puis en base64. Pour les factures fiscales, la ZATCA s'en charge lors de la clearance et votre système utilise le XML validé qu'il reçoit en retour.

### Transmettre, archiver, rapprocher

Le connecteur envoie les factures fiscales en clearance et les factures simplifiées en déclaration, puis enregistre la réponse de la ZATCA avec la vente. Un document rejeté doit être vu par quelqu'un le jour même, pas découvert au prochain contrôle. Chaque facture, chaque réponse et chaque tentative est conservée pour pouvoir être retrouvée plus tard.

La mécanique derrière tout cela, des webhooks aux files de relance, relève du même type de travail que celui décrit dans [relier les systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems).

## Les règles qui font échouer les anciens logiciels de caisse

Le XML est la partie visible du travail. Les règles anti-fraude sont celles qui imposent des changements à l'intérieur du système :

- **Aucune modification ni suppression des factures enregistrées.** Une erreur se corrige par une note de crédit ou de débit, pas en changeant l'original. Les amendes publiées par la ZATCA en novembre 2021 prévoient 10 000 SAR pour la suppression ou la modification d'une facture électronique après son émission.
- **Aucune modification de la date du système.** Les utilisateurs ne doivent pas pouvoir apposer une autre date sur les factures.
- **Aucune remise à zéro du compteur de factures.** La numérotation continue sans jamais recommencer.
- **Des journaux horodatés.** L'activité est journalisée avec horodatage, et les tentatives de falsification doivent être détectables.

Beaucoup de logiciels de caisse ont un bouton « annuler », une dérogation du responsable après impression ou un moyen de relancer la numérotation. Chacun doit disparaître ou être reconstruit sous forme de circuit de note de crédit.

La langue est aussi une règle. La facture lisible doit être en arabe, et d'autres langues peuvent être ajoutées à côté. Les chiffres arabes et hindis comptent tous deux comme arabes.

## Quand internet ou FATOORA est indisponible

La phase 2 suppose une connexion, et votre conception doit prévoir sa perte. Pour les factures simplifiées, le délai de déclaration de 24 heures laisse de la marge : le magasin continue à vendre, les factures cachetées attendent dans une file sur l'appareil ou le serveur, et le système réessaie jusqu'à ce que FATOORA confirme chacune. Les factures fiscales sont plus délicates, car elles doivent être validées avant d'être remises à l'acheteur. Les lignes directrices détaillées de la ZATCA décrivent la marche à suivre quand ses systèmes ou les vôtres sont indisponibles ; construisez votre procédure de secours à partir de ce document. Le défaut de signalement d'un dysfonctionnement figure aussi sur la liste des amendes publiée par la ZATCA, avec d'abord un avertissement.

Concrètement : une file durable qui survit à un redémarrage, des relances espacées, une alerte bien avant qu'une facture n'approche la limite de 24 heures, et une trace de chaque tentative.

## Checklist avant votre échéance

1. Confirmez votre vague et votre date à partir de la notification de la ZATCA, pas du discours commercial d'un éditeur.
2. Recensez tout ce qui émet des factures : chaque caisse, l'ERP, la boutique en ligne, l'intégration avec les plateformes de livraison et tout carnet de factures manuel.
3. Vérifiez vos données : numéros de TVA du vendeur et de l'acheteur, informations sur l'acheteur pour les factures fiscales, traitement TVA de chaque article et libellés d'articles en arabe.
4. Choisissez votre voie (remplacement, middleware ou intégration) selon qui maîtrise le code.
5. Remplacez les fonctions de modification, d'annulation et de suppression par des notes de crédit et de débit.
6. Verrouillez la date du système et le compteur de factures, et rendez toute falsification des journaux détectable.
7. Mettez en place la file, les relances et les alertes pour déclarer dans les 24 heures.
8. Testez chaque type de document avec la boîte à outils de test de la ZATCA, y compris les notes de crédit et les ventes hors ligne.
9. Intégrez chaque unité EGS sur FATOORA et notez quand chaque CSID devra être renouvelé.
10. Formez caissiers et comptables à ce qui change : les corrections, le QR code imprimé et la conduite à tenir hors connexion.

KF Tech Solutions développe des logiciels de caisse, des ERP et d'autres [systèmes de gestion](/services/business-systems), et nous travaillons avec des entreprises en Égypte et dans le Golfe ([notre page pour les entreprises saoudiennes](/saudi-arabia)). Notre expérience la plus proche vient d'Égypte : nous avons connecté un logiciel de caisse au système de reçus électroniques de l'administration fiscale égyptienne ([ce que ce type de travail implique](/blog/eta-e-invoicing-pos-integration)). Les règles de la ZATCA sont différentes, mais l'ingénierie est voisine : documents structurés, signature, séquencement, files d'attente et rapprochement. Nous commençons par examiner le système que vous utilisez aujourd'hui, puis nous recommandons de le remplacer, de le connecter ou d'y intégrer le connecteur, en expliquant pourquoi.

## Questions fréquentes

### Chaque caisse a-t-elle besoin de son propre CSID ?

Chaque unité EGS est intégrée et reçoit son propre CSID et sa propre chaîne de hachage. Qu'une unité corresponde à chaque caisse ou à un serveur central dépend de l'endroit où vos factures sont générées et cachetées. Tranchez cette question de conception avant de développer et vérifiez-la au regard des lignes directrices de la ZATCA.

### Faut-il plutôt acheter un système de l'annuaire de la ZATCA ?

La ZATCA ne certifie aucun logiciel. Son annuaire des fournisseurs de solutions est une liste indicative non contraignante, pas une approbation. Ce qui compte, c'est que le système réalise effectivement l'onboarding, la clearance, la déclaration et les règles anti-fraude.

### Peut-on corriger une facture validée ?

Pas en la modifiant. Les factures enregistrées ne peuvent être ni modifiées ni supprimées. Vous émettez à la place une note de crédit ou de débit, qui passe en clearance ou en déclaration comme l'original.

### Notre caisse imprime les tickets en anglais. Est-ce un problème ?

Oui. La facture lisible doit être en arabe, l'anglais pouvant figurer à côté. Prévoyez des libellés d'articles et des intitulés en arabe ainsi qu'une mise en page de ticket adaptée aux deux langues, puis testez le rendu imprimé sur les imprimantes que vous utilisez réellement.

### Quelles amendes si notre système se trompe ?

Les amendes publiées par la ZATCA le 16 novembre 2021 prévoient 5 000 SAR pour la non-émission de factures électroniques et 10 000 SAR pour leur suppression ou modification après émission. Certains manquements, comme l'absence de QR code, donnent d'abord lieu à un avertissement. Pour en savoir plus, consultez [les sanctions de la facturation électronique ZATCA](/blog/zatca-e-invoicing-penalties).

Vous ne savez pas quelle voie convient à votre système ? [Réservez un appel gratuit](/book) : nous examinerons ce que vous utilisez aujourd'hui avant que quiconque n'écrive du code.

## Sources

- [ZATCA : vague 25 de l'intégration de la facturation électronique (annoncée le 24 juillet 2026)](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA : annonce de la vague 24](https://zatca.gov.sa/en/Pages/news-1426.aspx)
- [ZATCA : annonce de la vague 22](https://zatca.gov.sa/en/MediaCenter/News/Pages/e-invoicing-wave-22-2025.aspx)
- [EY : l'Arabie saoudite annonce la 23e vague d'intégration de la phase 2](https://www.ey.com/en_gl/technical/tax-alerts/saudi-arabia-announces-23rd-wave-of-phase-2-e-invoicing-integration)
- [ZATCA : phases de déploiement de la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA : qu'est-ce que la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA : lignes directrices détaillées sur la facturation électronique, version 2 (mai 2023)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA : norme de mise en œuvre XML de la facture électronique, version 1.2 (mai 2023)](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA : annuaire des fournisseurs de solutions](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA : infractions et amendes en matière de facturation électronique (16 novembre 2021)](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
