---
title: Caisse en Arabie saoudite : prête à l'emploi ou sur mesure ?
summary: Qui porte la phase 2 de la ZATCA, terminaux de paiement, factures en arabe et stock multi-agences : les critères saoudiens pour choisir votre caisse.
tags: logiciel de caisse, POS, ZATCA, facturation électronique, commerce de détail, Arabie saoudite
alt: Des mains tapotent une tablette blanche sur un comptoir, devant une vitrine en verre
caption: Quel que soit le système de caisse au comptoir, quelqu’un porte la conformité de la phase 2 : l’éditeur ou vous.
stats: 1er févr. 2027|échéance de la vague 25 pour se connecter à FATOORA; 24 h|pour déclarer chaque facture simplifiée (B2C); 1|chaîne de hachage par unité, jamais réinitialisée
---

Pour la plupart des commerces et restaurants en Arabie saoudite, un logiciel de caisse prêt à l'emploi (SaaS) est le bon point de départ, à condition qu'il émette déjà des factures électroniques de phase 2 pour votre configuration, qu'il fonctionne avec les terminaux de paiement de votre banque et qu'il imprime une facture correcte en arabe. Une caisse sur mesure se justifie lorsque vos processus, votre organisation en agences ou vos intégrations n'entrent dans aucun produit, et la voie intermédiaire, qui consiste à garder le SaaS et à développer uniquement ce qui manque, est souvent la moins chère des trois. Quel que soit votre choix, l'obligation de facturation électronique reste à la charge de votre entreprise, pas de l'éditeur.

Dernière vérification : 6 novembre 2026

Cet article ne traite que des critères propres à l'Arabie saoudite. Pour le cadre général (fonctionnalités, contrats et coût total dans la durée), lisez d'abord [Logiciel de caisse restaurant : prêt à l'emploi ou sur mesure ?](/blog/ready-made-vs-custom-pos-restaurants). L'essentiel s'applique aussi au commerce de détail.

## Facturation électronique phase 2 : l'obligation reste la vôtre

Les règles de facturation électronique de la ZATCA (l'autorité de la zakat, des impôts et des douanes) s'appliquent aux assujettis à la TVA résidant en Arabie saoudite, ainsi qu'aux tiers qui émettent des factures pour leur compte. La phase 1 (émission électronique des factures) s'applique depuis le 4 décembre 2021, et une facture papier scannée ou copiée ne compte pas. La phase 2 (intégration à la plateforme FATOORA de la ZATCA) a commencé le 1er janvier 2023 et intègre les entreprises par vagues. La vague 25 concerne les entreprises dont le chiffre d'affaires soumis à la TVA a dépassé 187 500 SAR au cours d'une année entre 2022 et 2025 ; elles doivent être intégrées au plus tard le 1er février 2027. La ZATCA annonce chaque vague au moins six mois à l'avance : suivez donc sa page d'actualités plutôt que le résumé d'un éditeur.

En phase 2, la caisse accomplit un vrai travail technique :

- Générer chaque facture au format XML UBL 2.1 et l'envoyer à la ZATCA par une API.
- Apposer son cachet cryptographique sur les factures simplifiées (en général B2C), ajouter le QR code de phase 2 et déclarer le XML sous 24 heures.
- Soumettre les factures fiscales (en général B2B) à validation (clearance) avant leur remise à l'acheteur, avec les avoirs et notes de débit associés.
- Attribuer à chaque facture un UUID et le hachage de la facture précédente, et empêcher les utilisateurs de modifier la date du système ou les factures enregistrées.

Chaque unité de facturation, que la ZATCA appelle « E-Invoice Generation Solution » (EGS), est enregistrée sur le portail FATOORA, qui lui délivre son Cryptographic Stamp Identifier (CSID). La ZATCA ne certifie aucun logiciel. Son annuaire des fournisseurs de solutions est une liste indicative qui, selon ses propres termes, ne vaut pas approbation. Un badge sur le site d'un éditeur ne prouve donc rien. Demandez à voir un enregistrement sur un compte de test, une facture B2B validée et une facture B2C déclarée.

Avec une caisse prête à l'emploi, l'éditeur développe et maintient ces règles, ce qui est un vrai avantage. Avec une caisse sur mesure, c'est vous qui les portez, par l'intermédiaire de votre développeur, aussi longtemps que vous utilisez le système. Dans les deux cas, les amendes visent l'entreprise. Le barème publié par la ZATCA (16 novembre 2021) prévoit 5 000 SAR pour la non-émission de factures électroniques et 10 000 SAR pour la suppression ou la modification d'une facture après émission. Il s'agit d'informations générales et non d'un conseil fiscal ; vérifiez votre vague et vos obligations avec votre comptable. Les détails techniques figurent dans notre guide sur [l'intégration d'une caisse ou d'un ERP sur mesure à la phase 2 de la ZATCA](/blog/zatca-phase-2-integration-custom-pos-erp).

## Paiement par carte : mada et Apple Pay passent par votre acquéreur

mada, le réseau national de cartes de débit détenu par la banque centrale saoudienne (SAMA), prend en charge le paiement sans contact ainsi qu'Apple Pay, mada Pay, Samsung Pay et Google Pay. Vos clients s'attendent à payer d'un geste avec leur carte ou leur téléphone. Mais le terminal de paiement ne vient pas de l'éditeur de caisse : il vient de votre acquéreur, c'est-à-dire la banque ou le prestataire de paiement agréé qui crédite les paiements par carte sur votre compte.

La vraie question est donc de savoir si la caisse communique avec le terminal fourni par votre acquéreur. Si c'est le cas, le montant part de la caisse vers le terminal et le résultat revient sur la facture. Sinon, le caissier saisit le montant sur un terminal autonome, et chaque erreur de frappe devient un écart lors du rapprochement de fin de journée. Avant de choisir une caisse, demandez avec quels acquéreurs et quels modèles de terminaux elle est intégrée, et posez la même question à votre banque.

Si vous vendez aussi en ligne, la passerelle de paiement est une décision distincte. Des passerelles comme Tap et PayTabs citent mada, Apple Pay, Tabby et Tamara parmi leurs moyens de paiement. Notre comparatif des [passerelles de paiement en Arabie saoudite](/blog/payment-gateways-saudi-arabia) traite de ce choix.

## Factures et interface en arabe

La facture lisible doit être rédigée en arabe ; d'autres langues peuvent être ajoutées à côté. Beaucoup de caisses internationales impriment une facture traduite qui semble correcte jusqu'à ce que vous vérifiiez les noms de produits longs, l'alignement de droite à gauche sur un ticket étroit de 80 mm ou une ligne mêlant arabe et anglais. Imprimez un vrai ticket depuis la démo, avec vos propres noms de produits, avant de signer quoi que ce soit.

L'écran du caissier compte autant que le ticket. Si votre personnel travaille en arabe, testez tout le parcours en arabe : recherche par nom de produit en arabe, retour, clôture de caisse et rapport journalier. Une interface à moitié traduite ralentit chaque nouveau caissier.

## Plusieurs agences, un seul chiffre de stock

C'est sur le stock multi-agences que les solutions prêtes à l'emploi diffèrent le plus. Vérifiez si chaque agence voit le stock des autres, si un transfert entre agences est un document avec un expéditeur et un destinataire, et si un entrepôt central peut seulement être paramétré. Demandez comment fonctionne la facturation électronique par agence et par caisse, car la chaîne de hachage est propre à chaque unité EGS et chaque unité est enregistrée séparément.

Demandez ensuite ce qui se passe quand internet tombe dans une agence. Les ventes doivent continuer, et les factures stockées doivent être déclarées dès le retour de la connexion, dans le délai de 24 heures applicable aux factures simplifiées. Pour les fuites de stock habituelles entre l'entrepôt et la caisse, voyez [où passe réellement votre stock](/blog/inventory-management-system-egypt). L'article est écrit pour l'Égypte, mais les problèmes de stock sont les mêmes à Riyad ou à Djeddah.

## Prêt à l'emploi ou sur mesure : la comparaison

| Critère | Caisse prête à l'emploi (SaaS) | Caisse sur mesure |
|---|---|---|
| Facturation électronique phase 2 | Développée et maintenue par l'éditeur ; à vous de vérifier qu'elle fonctionne pour votre configuration | Développée par votre prestataire ; vous financez les mises à jour quand la ZATCA modifie ses spécifications |
| Terminaux de paiement | Uniquement les acquéreurs pris en charge par l'éditeur | L'acquéreur de votre choix, s'il propose une intégration |
| Facture et écrans en arabe | Variables selon le produit ; à tester avec vos articles | Conçus pour vos tickets et votre personnel |
| Agences et entrepôt | Structure figée ; chaque agence supplémentaire alourdit en général l'abonnement | Modélisés selon la façon dont votre entreprise déplace réellement le stock |
| Coût de fonctionnement | Abonnement mensuel par agence ou par appareil | Hébergement et contrat de maintenance |
| Délai de démarrage | Quelques jours | De quelques semaines à quelques mois |
| Vos données | Dans le système de l'éditeur ; vérifiez les options d'export | Dans une base de données que vous contrôlez, avec cession du code source prévue au contrat |

### La voie intermédiaire : garder le SaaS, développer seulement ce qui manque

Beaucoup d'entreprises saoudiennes n'ont pas besoin de remplacer leur caisse. Il leur manque une fonction précise : un flux pour la cuisine ou la production, un programme de fidélité lié à leur propre application, une grille de prix de gros, des rapports regroupant plusieurs sociétés ou un canal de commande en ligne. Si la caisse dispose d'une API ou d'un export de données fiable, ces éléments peuvent être développés autour d'elle, pendant que l'éditeur continue d'assumer la phase 2.

Une caisse entièrement sur mesure se justifie quand les manques touchent la vente elle-même, par exemple un modèle de prix, un parcours de service ou un appareil que le SaaS ne gère pas, ou quand les abonnements cumulés sur de nombreuses agences et appareils coûtent plus cher que de posséder le système. Notre comparatif [Odoo ou ERP sur mesure](/blog/odoo-vs-custom-erp-saudi-arabia) traite la même décision un niveau au-dessus.

Un test simple : listez les cinq tâches que votre système actuel oblige votre personnel à faire sur papier ou dans un tableur. Si elles se situent autour de la vente, développez ce qui manque. Si elles sont la vente elle-même, envisagez une caisse sur mesure.

## Questions à poser à tout éditeur de caisse en Arabie saoudite

1. Pouvez-vous me montrer, sur un compte de test, un enregistrement en phase 2, une facture fiscale validée et une facture simplifiée déclarée ?
2. Qui enregistre chaque caisse ou agence sur FATOORA, et qui renouvelle le CSID ?
3. Avec quels acquéreurs et quels modèles de terminaux votre système est-il intégré ?
4. Puis-je imprimer aujourd'hui un ticket d'essai en arabe avec mes propres noms de produits ?
5. Comment fonctionnent les transferts entre agences, et que se passe-t-il quand une agence est hors ligne ?
6. Comment exporter mes ventes, mes factures et mon stock si je change de solution ?

Pour les fonctions de tous les jours (codes-barres, retours, sessions de caisse et tiroir-caisse), la liste de contrôle de [comment choisir un logiciel de caisse pour un commerce](/blog/pos-cashier-system-for-shops-egypt) vaut aussi en Arabie saoudite.

## Le rôle de KF Tech Solutions

KF Tech Solutions développe des logiciels de caisse, de gestion de stock et de gestion d'entreprise sur mesure, et a intégré une caisse au système égyptien de reçus électroniques de l'ETA. Nous travaillons à distance avec des entreprises en Égypte et dans le Golfe. Pour une entreprise saoudienne, nous pouvons vous aider à déterminer si un SaaS suffit, développer les éléments manquants autour de lui, ou construire un système sur mesure à partir des exigences de phase 2 publiées par la ZATCA, avec cession du code source à votre profit. Les projets démarrent à 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et ferme après un appel gratuit. Découvrez notre [service de systèmes de gestion](/services/business-systems) et [ce que nous proposons aux entreprises en Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### Une caisse prête à l'emploi est-elle automatiquement conforme à la phase 2 ?

Non. La ZATCA ne certifie aucun logiciel, et son annuaire des fournisseurs de solutions ne vaut pas approbation. Vérifiez que l'éditeur a réellement enregistré des unités et que la validation et la déclaration fonctionnent pour vos types de factures. L'obligation reste celle de votre entreprise.

### Quand mon entreprise doit-elle être intégrée à la phase 2 ?

Cela dépend de votre vague. La ZATCA sélectionne les entreprises selon leur chiffre d'affaires soumis à la TVA sur des années de référence et annonce chaque vague au moins six mois à l'avance. La vague 25, pour un chiffre d'affaires supérieur à 187 500 SAR au cours d'une année entre 2022 et 2025, doit être intégrée au plus tard le 1er février 2027.

### Une caisse sur mesure fonctionne-t-elle avec mada et Apple Pay ?

Oui, par le terminal de votre acquéreur, si celui-ci propose une intégration. Sans elle, le terminal fonctionne seul et le caissier saisit le montant deux fois.

### Faut-il remplacer ma caisse actuelle pour ajouter des fonctions ?

En général, non. Si elle dispose d'une API ou exporte ses données, de nouvelles fonctions peuvent être développées autour d'elle, et l'éditeur continue de maintenir la facturation électronique.

### La facture doit-elle être en arabe ?

Oui. La facture lisible doit être en arabe, et vous pouvez ajouter l'anglais ou une autre langue à côté.

Vous hésitez sur la voie qui convient à votre entreprise ? [Réservez un appel gratuit](/book) avec un exemple de ticket et la liste de vos agences, ou [écrivez-nous](/contact).

## Sources

- [ZATCA : What is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA : Roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA : E-Invoicing Detailed Guideline (PDF)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA : annonce de la vague 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA : Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA : infractions et amendes en matière de facturation électronique](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
- [SAMA : mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap Payments](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
