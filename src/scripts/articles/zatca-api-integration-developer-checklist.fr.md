---
title: Intégration API ZATCA : la checklist des développeurs
summary: Onboarding et CSID, XML UBL 2.1, clearance ou déclaration sous 24 h, QR code et chaîne de hachage : ce que votre équipe doit construire pour FATOORA.
tags: ZATCA, FATOORA, intégration API, facture électronique, UBL 2.1, développeurs, Arabie saoudite
alt: Riyad vue d’en haut, avec des tours de bureaux le long d’une large avenue entre des quartiers bas
caption: En phase 2, chaque facture est cachetée, chaînée à la précédente et transmise à la ZATCA en XML via son API.
stats: 128 bits|longueur de l'UUID porté par chaque facture; 9|balises TLV dans le QR code de la phase 2, encodées en base64; 24 h|pour déclarer chaque facture simplifiée à FATOORA
---

S'intégrer à la plateforme FATOORA de la ZATCA, c'est enregistrer chaque appareil ou serveur qui émet des factures comme « E-Invoice Generation Solution » (EGS) doté de son propre identifiant de cachet cryptographique (CSID), produire chaque facture en XML UBL 2.1 et envoyer ce XML via l'API de la ZATCA. Les factures fiscales passent par une validation en temps réel (clearance) avant d'arriver chez l'acheteur, tandis que les factures simplifiées sont cachetées par votre propre système et déclarées dans les 24 heures. Cette checklist accompagne une équipe interne à chaque étape, quel que soit le langage utilisé.

Dernière vérification : 6 novembre 2026

Il s'agit d'informations techniques générales, et non d'un conseil fiscal ou juridique. Les documents de la ZATCA, listés dans les sources, font référence. En cas d'écart entre cette page et la ZATCA, suivez la ZATCA.

## Avant d'écrire du code : périmètre et documents de référence

La phase 1 (génération) s'applique depuis le 4 décembre 2021 à tous les contribuables, sauf les non-résidents. La phase 2 (intégration) a commencé le 1er janvier 2023 et se déploie par vagues, chacune annoncée par la ZATCA au moins six mois à l'avance. La vague 25, qui couvre un chiffre d'affaires soumis à la TVA supérieur à 187 500 SAR sur l'une des années 2022 à 2025, doit être intégrée à FATOORA au plus tard le 1er février 2027. Notre [guide sur la vague 25](/blog/zatca-wave-25-e-invoicing) traite du volet entreprise de cette échéance.

Avant le premier commit, tranchez quatre points :

- **Les documents que vous émettez.** Factures fiscales (généralement B2B et B2G), factures simplifiées (généralement B2C), ainsi que les avoirs et notes de débit qui s'y rattachent.
- **Ce qui constitue une unité EGS.** Chaque unité est enregistrée séparément et tient sa propre chaîne de factures : décidez tôt si une unité est une caisse, un serveur d'agence ou un service central.
- **Qui émet les factures.** Le guide de la ZATCA vise les assujettis résidant en Arabie saoudite, ainsi que les tiers qui émettent des factures pour leur compte.
- **Vos documents de référence.** Lisez les E-Invoicing Detailed Guidelines et le XML Implementation Standard de la ZATCA avant de concevoir la moindre table.

## Enregistrer chaque unité EGS et gérer le CSID

Les factures doivent provenir d'une EGS enregistrée. Chaque unité est enregistrée via le portail FATOORA, qui délivre son CSID et peut ensuite le renouveler ou le révoquer. Cela fait trois événements de cycle de vie à prévoir, et non un seul :

- **Délivrance.** Conservez le CSID et ses clés dans un coffre à secrets, jamais dans le code source, dans un fichier de configuration du dépôt ou dans la base de données de la caisse.
- **Renouvellement.** Traitez-le comme une tâche planifiée avec alertes, pour qu'aucune unité ne cesse de facturer un jour d'affluence.
- **Révocation.** Lorsqu'un appareil est perdu, remplacé ou retiré, révoquez son CSID et assurez-vous que le logiciel cesse aussitôt d'émettre depuis cette unité.
- **Suivi.** Tenez un registre de chaque unité EGS, de l'état de son CSID et de la dernière facture émise, et affichez-le dans votre back-office.

Le premier point relève des bonnes pratiques de sécurité et non d'une règle de la ZATCA, mais une clé de cachet divulguée est difficile à justifier auprès d'une administration fiscale.

## Construire le XML de la facture

Tout ce qui est envoyé à la ZATCA doit être du XML transmis par une API. Ce XML suit la structure UBL 2.1, avec des règles de validation fondées sur la norme européenne EN 16931, telles que les précise le XML Implementation Standard de la ZATCA. La facture elle-même peut être le XML, ou un fichier PDF/A-3 contenant le XML.

- **Générer à partir des données, pas d'une mise en page.** Construisez le XML à partir de l'enregistrement de vente, puis produisez la facture lisible à partir des mêmes données, pour que les deux ne divergent jamais.
- **L'arabe sur la version lisible.** La facture lisible doit être en arabe, d'autres langues pouvant être ajoutées. Les chiffres arabes comme les chiffres hindis sont acceptés.
- **Valider avant d'envoyer.** Passez chaque type de document dans le kit de test de la ZATCA pendant le développement, et gardez des tests automatisés pour chacun dans votre chaîne de build.
- **Conserver le document exact.** Stockez le XML tel qu'il a été cacheté et envoyé. Le régénérer ou le reformater plus tard peut modifier son hachage.

## Clearance et déclaration : deux flux d'API

La phase 2 comporte deux flux, et votre code doit orienter chaque document vers le bon.

| | Facture fiscale (généralement B2B/B2G) | Facture simplifiée (généralement B2C) |
|---|---|---|
| Qui la cachète | La ZATCA, lors de la clearance | Votre EGS, avec son CSID |
| Qui ajoute le QR code | La ZATCA | Votre EGS (9 balises, TLV, base64) |
| Quand la ZATCA la reçoit | Avant que l'acheteur ne la reçoive | Dans les 24 heures suivant l'émission |
| Ce que reçoit l'acheteur | Le XML validé renvoyé par la ZATCA | Un exemplaire imprimé immédiatement, ou électronique si les deux parties l'acceptent |
| Si la ZATCA est injoignable | Relancer ; en cas de panne, les lignes directrices de la ZATCA permettent de remettre la facture non validée, puis la facture validée | Mise en file d'attente, relances, et notification à la ZATCA si les 24 heures sont dépassées |

Pour une facture fiscale, le XML validé qui revient est la facture : stockez-le et remettez cette version à l'acheteur, pas celle que vous avez soumise. La même clearance s'applique aux avoirs et notes de débit liés aux factures fiscales.

Autour de ces deux appels, construisez :

- **Un routeur** qui choisit clearance ou déclaration selon le type de document, jamais selon un choix fait par un caissier à l'écran.
- **Des relances sans risque de doublon**, pour qu'une facture avec un UUID ne devienne jamais deux factures dans vos données.
- **Un statut pour chaque document** (créé, envoyé, validé ou déclaré, rejeté), visible par la comptabilité sans passer par un développeur.
- **Une procédure pour les documents rejetés.** Une facture ne peut pas être annulée : corrigez l'erreur et soumettez un nouveau document avec sa propre valeur de compteur et son propre hachage, sans jamais modifier un XML stocké.

## Cachet, QR code et règles anti-falsification

Plusieurs contrôles de la ZATCA se trouvent dans votre modèle de données, et non dans l'appel d'API :

- **UUID.** Chaque facture porte un UUID de 128 bits. Générez-le une seule fois, à la création de la facture, et jamais lors d'une relance.
- **Hachage de la facture précédente.** Chaque facture contient le hachage de la précédente, formant une chaîne par unité EGS. Deux processus qui écrivent en même temps dans la même chaîne la cassent : créez donc les factures une par une pour chaque unité.
- **Compteur.** Le compteur de factures ne peut pas être remis à zéro. Prévoyez comment le compteur et la chaîne survivent à une réinstallation, à un changement de matériel ou à une restauration de base de données.
- **Date système.** Les utilisateurs ne doivent pas pouvoir modifier la date du système.
- **XML stocké.** Les utilisateurs ne peuvent ni supprimer ni modifier le XML stocké : ne prévoyez donc aucune action de modification ou de suppression des factures émises, quel que soit le rôle.
- **Journaux.** Les journaux sont horodatés et toute tentative de falsification doit être détectable. Des journaux en ajout seul facilitent beaucoup cela.
- **QR code.** Sur les factures simplifiées, votre EGS ajoute le QR code de la phase 2, avec 9 balises au format TLV encodées en base64. Vérifiez qu'il s'imprime et se lit sur les imprimantes de tickets réellement utilisées dans vos points de vente.

Ces règles ont du poids. Selon les sanctions publiées par la ZATCA le 16 novembre 2021, les amendes commencent à 5 000 SAR pour l'absence d'émission de factures électroniques et à 10 000 SAR pour la suppression ou la modification d'une facture électronique après émission, tandis qu'un QR code manquant donne d'abord lieu à un avertissement. Les amendes dépendent ensuite du type d'infraction et de sa répétition.

## Mode hors ligne et délai de 24 heures

Les commerces perdent leur connexion Internet, et FATOORA peut être injoignable. Les factures simplifiées sont conçues pour cela : votre EGS cachète la facture localement, le client reçoit le ticket imprimé, et le XML attend dans une file qui doit parvenir à FATOORA dans les 24 heures.

- **Enregistrer avant d'imprimer.** Placez chaque facture simplifiée dans une file locale durable avant l'impression du ticket, pour qu'un plantage ne la fasse pas disparaître.
- **Envoyer dans l'ordre d'émission.** Gardez la chaîne intacte et ne la reconstruisez jamais pour combler un trou.
- **Alerter tôt.** Déclenchez une alerte quand la plus ancienne facture non déclarée a quelques heures, pas quand les 24 heures sont presque écoulées. Si le délai est dépassé, les lignes directrices de la ZATCA demandent de la prévenir via le formulaire de son site.
- **Rendre la file visible.** Affichez sa taille et son ancienneté sur la caisse et dans le back-office.

Les factures fiscales sont différentes. Elles doivent en principe être validées avant d'être remises à l'acheteur. Pour les pannes, les Detailed Guidelines de la ZATCA décrivent une solution de repli : relancer et, si la ZATCA reste injoignable, remettre la facture non validée, conserver les traces, puis transmettre la facture validée une fois la clearance obtenue. Si la panne vient de chez vous, prévenez la ZATCA via son formulaire en ligne. Construisez ce chemin de façon explicite et journalisée.

## Checklist de test et de mise en production

1. Lister chaque type de document émis, avec son flux : clearance ou déclaration.
2. Définir vos unités EGS et la façon dont la chaîne et le compteur de chacune survivent à une restauration ou à un changement d'appareil.
3. Générer le XML à partir de données structurées et réussir le kit de test de la ZATCA pour chaque type de document.
4. Mettre en place la délivrance, le renouvellement et la révocation du CSID, avec les clés hors du code.
5. Stocker, pour chaque document, le XML envoyé et la réponse reçue.
6. Construire la file hors ligne, avec des alertes bien avant la limite des 24 heures.
7. Verrouiller la date système, le XML émis et les journaux contre toute modification.
8. Contrôler la facture en arabe et le QR code imprimé sur de vraies imprimantes.
9. Simuler une coupure de connexion, un document rejeté et un CSID révoqué avant la mise en production.

Un mot sur les fournisseurs et les labels : la ZATCA ne certifie aucun logiciel. Son Solution Providers Directory est une liste indicative qui « n'est pas considérée comme une approbation de la ZATCA », et les contribuables peuvent utiliser toute solution conforme, y compris une solution développée en interne. Jugez un connecteur sur ce qu'il fait en test, pas sur un logo.

Pour le même projet vu par le dirigeant, lisez [ZATCA phase 2 : intégrer votre propre caisse ou ERP](/blog/zatca-phase-2-integration-custom-pos-erp). Une fois la facturation électronique en place, la même rigueur d'API sert à [connecter les systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems).

**Le rôle de KF Tech Solutions.** Nous développons des API et des backends dans le cadre de notre service [développement d'API et de backend](/services/api-and-backend), et nous avons intégré une caisse au [système de reçus électroniques ETA de l'Égypte](/projects/egypt-eta), une autre plateforme publique fondée sur des factures signées et validées ([comment fonctionne cette intégration](/blog/eta-e-invoicing-pos-integration)). Nous travaillons avec des entreprises en Égypte et dans le Golfe (voir notre [page Arabie saoudite](/saudi-arabia)), et pouvons construire le connecteur avec votre équipe ou auditer un connecteur existant à l'aide de cette checklist.

## Questions fréquentes

### La ZATCA certifie-t-elle ou approuve-t-elle les logiciels d'intégration ?

Non. Le Solution Providers Directory de la ZATCA est une liste indicative, sans valeur juridique contraignante pour les contribuables, qui selon les termes de la ZATCA « n'est pas considérée comme une approbation de la ZATCA ». Les contribuables peuvent utiliser toute solution conforme.

### Peut-on développer l'intégration en C#, en Laravel ou avec une autre stack ?

Oui. La ZATCA impose un XML, un cachet cryptographique, un QR code et une API, pas un langage de programmation. Toute stack capable de produire et valider du XML UBL 2.1, de calculer des hachages, de signer des documents et d'appeler une API HTTPS fait l'affaire, C#/.NET et PHP/Laravel compris. Choisissez la stack que votre équipe maintient déjà.

### Chaque appareil a-t-il besoin de son propre CSID ?

Chaque unité EGS est enregistrée séparément, avec son propre CSID et sa propre chaîne de hachage. Qu'une unité corresponde à chaque caisse ou à un serveur par agence est un choix de conception à arrêter au regard des guides de la ZATCA avant tout enregistrement.

### Peut-on envoyer des factures PDF à la ZATCA ?

Non. Ce que vous envoyez à la ZATCA doit être du XML transmis par l'API. L'exemplaire de l'acheteur peut être le XML ou un PDF/A-3 contenant le XML, et son contenu lisible doit être en arabe.

### Que deviennent les factures simplifiées quand Internet est coupé ?

Votre système continue de les cacheter et de les imprimer, met le XML en file d'attente et le déclare au retour de la connexion, dans les 24 heures ; à défaut, prévenez la ZATCA. Pour les factures fiscales, voir la solution de repli décrite plus haut.

Vous développez cette intégration en interne et souhaitez un second avis sur la conception ? [Réservez un appel](/book) ou [envoyez-nous votre configuration actuelle](/contact), et nous vous dirons franchement ce que nous changerions.

## Sources

- [ZATCA : What is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA : Roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA : E-Invoicing Detailed Guidelines (PDF)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA : Electronic Invoice XML Implementation Standard (PDF)](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA : vague 25 de l'intégration de la facturation électronique](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA : Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA : infractions et amendes liées à la facturation électronique (16 novembre 2021)](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
