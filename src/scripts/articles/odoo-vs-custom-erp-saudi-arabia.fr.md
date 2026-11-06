---
title: Odoo ou ERP sur mesure en Arabie saoudite : les vrais coûts
summary: Le prix d'Odoo par utilisateur, ce qu'ajoutent intégrateur et hébergement, la phase 2 de la facturation électronique et comment comparer sur 3 ans.
tags: Odoo, ERP, ERP sur mesure, prix ERP, ZATCA, Arabie saoudite
alt: La ligne d’horizon de Riyad en plein jour, une tour de verre pointue derrière des bureaux bas et des palmiers
caption: La licence est le plus petit poste d’un budget ERP ; comparez frais d’intégrateur et localisation sur trois ans.
stats: 11,20 $ US|prix catalogue Odoo Standard par utilisateur et par mois; 36|mois à comparer, pas seulement la première année; 24 heures|pour déclarer une facture B2C à FATOORA en phase 2
---

La page de tarifs officielle d'Odoo affiche le plan Standard à 11,20 $ US par utilisateur et par mois et le plan Custom à 20,90 $ US, avec une remise pendant les 12 premiers mois. La mise en place, la personnalisation, la reprise des données et certaines options d'hébergement sont facturées en plus. Un ERP sur mesure coûte davantage au départ mais ne comporte aucune licence par utilisateur : le choix le moins cher pour une entreprise en Arabie saoudite dépend donc du nombre d'utilisateurs, de l'ampleur des modifications qu'il faudrait apporter à Odoo et de la période comparée, trois ans ou seulement la première année.

Dernière vérification : 6 novembre 2026

## Ce que facture Odoo lui-même

Voici les chiffres de la page de tarifs d'Odoo au moment de notre vérification. La page affichait les prix en dollars américains et proposait une facturation annuelle ou mensuelle : consultez-la vous-même avant d'établir votre budget, car les prix et les promotions changent.

| Plan | Prix catalogue par utilisateur et par mois | 12 premiers mois | Contenu | Hébergement |
|---|---|---|---|---|
| One App Free | 0 $ US | 0 $ US | Une application, utilisateurs illimités | Odoo Online |
| Standard | 11,20 $ US (environ 42 SAR) | 8,95 $ US | Toutes les applications | Odoo Online |
| Custom | 20,90 $ US (environ 78 SAR) | 16,40 $ US | Toutes les applications, plus Odoo Studio, le multisociété et l'API externe | Odoo Online, Odoo.sh ou sur site |

Les montants en SAR reposent sur l'ancrage officiel de 3,75 riyals pour un dollar américain. Trois détails de la page comptent pour votre budget :

- **La remise est temporaire.** Selon la note d'Odoo, elle est valable 12 mois et uniquement pour les utilisateurs commandés au départ. À partir du 13e mois, et pour les utilisateurs ajoutés ensuite, vous payez le prix catalogue.
- **La personnalisation et les connexions exigent le plan Custom.** Odoo Studio, le multisociété et l'API externe ne figurent que dans le plan Custom. Si vous comptez relier Odoo à votre caisse, à votre boutique en ligne ou à votre banque, prévoyez Custom et non Standard.
- **L'hébergement Odoo.sh est en supplément.** Le plan Custom peut fonctionner sur Odoo.sh, mais la page précise que le coût de cet hébergement n'est pas inclus. Sur site, vous payez et gérez votre propre serveur.

La page indique aussi que les services de mise en place ne sont inclus dans aucun plan.

## Ce que la licence ne couvre pas

Dans un projet ERP, la licence est souvent le plus petit poste. Selon la page d'Odoo, les entreprises de moins de 50 salariés travaillent généralement directement avec Odoo au moyen des Success Packs, celles de plus de 50 salariés passent généralement par un partenaire qui assure la gestion de projet localement, et celles de plus de 250 salariés sont invitées à contacter Odoo. Dans tous les cas, ces coûts restent hors licence :

- **Mise en place :** plan comptable, entrepôts, listes de prix, taxes, règles d'approbation et droits des utilisateurs.
- **Reprise des données :** articles, clients, fournisseurs, soldes d'ouverture et factures en cours issus de votre système actuel ou de tableurs.
- **Personnalisation :** modifications faites dans Odoo Studio ou modules sur mesure écrits par un développeur.
- **Connexions :** liens avec votre caisse, votre boutique en ligne, les applications de livraison ou d'autres systèmes via l'API externe.
- **Formation :** pour chaque service, pas pour une seule personne.
- **Support après la mise en service :** qui corrige les problèmes, en combien de temps et à quel tarif.
- **Mises à niveau :** chaque module sur mesure doit être vérifié, et souvent adapté, lors du passage à une nouvelle version d'Odoo.

Lorsque vous demandez un devis à un partenaire, exigez chacun de ces postes sur une ligne distincte, avec un prix fixe ou un nombre de jours, ainsi qu'une liste écrite de ce qui est hors périmètre. Demandez aussi à qui appartient le code des modules sur mesure développés pour vous.

## Facturation électronique en Arabie saoudite : demandez comment, ne supposez pas

Depuis 2023, la ZATCA fait passer par vagues les entreprises assujetties à la TVA à la phase 2. La vague 25, qui concerne un chiffre d'affaires soumis à la TVA supérieur à 187 500 SAR au cours de l'une des années 2022 à 2025, doit être raccordée à FATOORA au plus tard le 1er février 2027. Comme les factures sont généralement émises depuis l'ERP, ce point fait partie de la comparaison, quel que soit le système choisi.

La ZATCA ne certifie aucun logiciel. Son annuaire des fournisseurs de solutions est une liste indicative qui, selon ses propres termes, ne vaut pas approbation de sa part. Un fournisseur qui se dit « conforme » ne vous apprend donc pas grand-chose. Demandez au partenaire ou au développeur de vous montrer, dans un environnement de test, comment le système :

- Enregistre chaque unité de facturation sur le portail FATOORA, conserve son identifiant de cachet cryptographique (CSID) et qui se charge de le renouveler.
- Génère les factures en XML au format UBL 2.1 et les envoie à la ZATCA par l'API.
- Fait valider les factures fiscales (généralement B2B) par la ZATCA avant leur envoi à l'acheteur, y compris les avoirs et notes de débit.
- Déclare les factures simplifiées (généralement B2C) à FATOORA dans les 24 heures, avec le QR code de la phase 2 sur l'exemplaire imprimé.
- Chaîne chaque facture à la précédente au moyen d'un UUID et d'une empreinte, et empêche toute modification ou suppression des factures enregistrées.
- Imprime la facture en arabe.

Il s'agit d'une information générale, pas d'un conseil fiscal. Pour le détail technique, lisez notre guide sur [l'intégration de la phase 2 de la ZATCA à une caisse ou un ERP sur mesure](/blog/zatca-phase-2-integration-custom-pos-erp).

## Odoo ou sur mesure : ce qui convient à votre entreprise

Avant de comparer les prix, vérifiez que vous avez réellement besoin d'un ERP. Beaucoup de petites entreprises ont d'abord besoin d'une bonne gestion des stocks et de la facturation ; notre article [une petite entreprise a-t-elle besoin d'un ERP ?](/blog/erp-for-small-business-egypt) traite cette question.

### Quand Odoo convient mieux

- Vos processus sont standard : acheter, stocker, vendre, facturer, encaisser.
- Votre équipe est réduite et vous voulez démarrer en quelques semaines, pas en plusieurs mois.
- Vous acceptez d'adapter certaines habitudes au fonctionnement d'Odoo.
- Vous voulez la comptabilité, les stocks, les ventes et les achats au même endroit, sans payer un développement au départ.

### Quand un ERP sur mesure est plus judicieux

- Votre façon de travailler fait votre avantage, et Odoo demanderait une forte personnalisation pour la suivre.
- Vous avez beaucoup d'utilisateurs qui n'effectuent chacun qu'une tâche limitée, si bien que les licences par utilisateur s'accumulent chaque mois.
- Vous utilisez déjà une caisse ou un logiciel comptable qui fonctionne bien et il ne vous manque que certaines briques.
- Vous voulez être propriétaire du code et décider vous-même du moment de le modifier ou de le mettre à niveau.

Notre article [logiciel sur mesure ou standard](/blog/custom-software-vs-off-the-shelf-how-to-choose) approfondit cet arbitrage.

## La voie médiane : modules sur mesure ou connecteur

On présente souvent le choix comme « tout Odoo » ou « un ERP entièrement sur mesure », alors que beaucoup d'entreprises n'ont besoin ni de l'un ni de l'autre. Trois options moins coûteuses méritent un devis :

1. **Un connecteur.** Gardez les systèmes qui fonctionnent (votre caisse, votre boutique en ligne, votre logiciel comptable) et créez un lien qui transfère automatiquement ventes, stocks et factures entre eux. Vous supprimez la double saisie sans rien remplacer.
2. **Un seul module sur mesure.** Si un processus ne correspond à aucun système standard, comme le suivi des coûts par chantier, la location ou un circuit d'approbation particulier, développez uniquement cette brique et reliez-la à l'existant.
3. **Un système de stock ou de caisse ciblé.** Si c'est sur le stock que vous perdez de l'argent, commencez par là. Notre guide sur [l'endroit où passe réellement votre stock](/blog/inventory-management-system-egypt) montre les fuites habituelles, et [caisse prête à l'emploi ou sur mesure en Arabie saoudite](/blog/ready-made-vs-custom-pos-saudi-arabia) compare le côté encaissement.

Un connecteur ou un module unique coûte généralement une fraction d'un projet ERP complet, et vous pouvez toujours passer plus tard à Odoo ou à un ERP sur mesure.

## Comment comparer les coûts sur trois ans

La plupart des erreurs d'achat viennent de la comparaison d'une année de licences avec le prix complet d'un développement. Placez les deux options dans le même tableau sur 36 mois.

Voici le seul coût des licences Odoo, aux prix de la page de tarifs au 6 novembre 2026, en supposant qu'ils restent inchangés, que tous les utilisateurs soient commandés au départ et que la remise de la première année s'applique :

| Utilisateurs | Standard, 3 ans | Custom, 3 ans |
|---|---|---|
| 10 | 3 762 $ US (environ 14 100 SAR) | 6 984 $ US (environ 26 200 SAR) |
| 25 | 9 405 $ US (environ 35 300 SAR) | 17 460 $ US (environ 65 500 SAR) |

Pour 10 utilisateurs Standard, le calcul est 10 × 8,95 $ US × 12 mois, plus 10 × 11,20 $ US × 24 mois. Ajoutez ensuite les postes que la licence ne couvre pas :

- **Côté Odoo :** mise en place, reprise des données, personnalisation, connexions, hébergement Odoo.sh ou serveur le cas échéant, formation, support et coût d'adaptation des modules sur mesure à chaque mise à niveau.
- **Côté sur mesure :** développement, reprise des données, hébergement, un contrat mensuel de maintenance et de support, et les évolutions que vous prévoyez de demander.

Comparez les deux totaux, puis demandez-vous laquelle des deux options coûtera le moins cher à faire évoluer quand votre activité changera. Les projets démarrent à 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et ferme après un appel gratuit.

## Le rôle de KF Tech Solutions

Nous développons des systèmes de gestion sur mesure : modules ERP, systèmes de caisse et de gestion des stocks, et les connecteurs qui les relient aux outils que vous conservez. En Égypte, nous avons raccordé un système de caisse au [système de reçus électroniques de l'administration fiscale ETA](/projects/egypt-eta). Nous travaillons avec des entreprises en Égypte et dans le Golfe, et si un système standard comme Odoo vous convient mieux, nous vous le dirons. Découvrez notre [service de systèmes de gestion](/services/business-systems) et notre page pour [les entreprises en Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### Combien coûte Odoo en Arabie saoudite ?

Lors de notre vérification du 6 novembre 2026, la page de tarifs d'Odoo affichait le plan Standard à 11,20 $ US par utilisateur et par mois (environ 42 SAR) et le plan Custom à 20,90 $ US (environ 78 SAR), avec des prix réduits pendant les 12 premiers mois. La mise en place, la personnalisation et l'hébergement Odoo.sh s'y ajoutent : la licence n'est qu'une partie du coût.

### Existe-t-il une version gratuite d'Odoo ?

La page de tarifs propose One App Free : une application avec des utilisateurs illimités, hébergée sur Odoo Online. Dès qu'il vous faut une deuxième application, vous passez à un plan payant.

### Odoo fonctionne-t-il avec la phase 2 de la ZATCA ?

La ZATCA ne certifie ni n'approuve aucun logiciel : ne vous fiez donc à aucune étiquette. Avant de signer, demandez à votre partenaire de vous montrer l'enregistrement, la validation, la déclaration sous 24 heures et la chaîne d'empreintes des factures dans un environnement de test. Il en va de même pour un ERP sur mesure.

### Un ERP sur mesure coûte-t-il plus cher qu'Odoo ?

Au départ, généralement oui, puisque vous payez le développement. Sur trois ans, l'écart peut se réduire ou s'inverser si vous avez beaucoup d'utilisateurs, si vous avez besoin d'une forte personnalisation ou s'il vous suffit d'un module ou d'un connecteur plutôt que d'un ERP complet.

### Puis-je commencer avec Odoo et ajouter des éléments sur mesure plus tard ?

Oui. Le plan Custom comprend Odoo Studio et l'API externe, qui permettent d'ajouter des champs et de connecter d'autres systèmes. Limitez le code sur mesure au strict nécessaire, car chaque élément doit être vérifié à chaque mise à niveau d'Odoo.

Vous ne savez pas quelle voie convient à votre entreprise ? [Réservez un appel gratuit](/book) ou [décrivez-nous vos systèmes actuels](/contact), et nous vous aiderons à comparer les options dans un seul tableau.

## Sources

- [Odoo : tarifs](https://www.odoo.com/pricing)
- [ZATCA : phases de déploiement de la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA : annonce de la vague 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA : guide détaillé de la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA : annuaire des fournisseurs de solutions](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [SAMA : taux de change du riyal saoudien](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx)
