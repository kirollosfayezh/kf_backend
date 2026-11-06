---
title: Logiciel de pharmacie en Arabie saoudite : Wasfaty, Rassed, stock
summary: Ce qu'un logiciel de pharmacie doit gérer en Arabie saoudite : e-prescriptions Wasfaty, traçabilité Rassed, lots et péremption, factures ZATCA.
tags: logiciel de pharmacie, Wasfaty, traçabilité RSD, facturation électronique ZATCA, gestion de stock, Arabie saoudite
alt: Un pharmacien en blouse blanche vérifie une boîte entre de hauts rayonnages de médicaments
caption: Chaque boîte en rayon a un lot, une date de péremption et une trace à tenir à jour, en cohérence.
stats: 4|codes dans le data matrix de chaque boîte : GTIN, série, péremption, lot; 2|côtés à chaque mouvement RSD : envoi et acceptation; 24 h|pour déclarer chaque facture simplifiée à FATOORA
---

En Arabie saoudite, un logiciel de pharmacie doit faire bien plus qu'encaisser des ventes. Il doit déclarer chaque boîte reçue et vendue au système de traçabilité des médicaments de la SFDA (Rassed, RSD), gérer le stock par lot et par date de péremption, fonctionner aux côtés du service d'e-prescription Wasfaty du ministère de la Santé et émettre des factures conformes aux règles de facturation électronique de la ZATCA. Ce guide explique chaque point simplement et vous indique quoi demander avant d'acheter ou de faire développer un logiciel.

Dernière vérification : 6 novembre 2026

## Les quatre systèmes d'une pharmacie saoudienne

La plupart des pharmaciens les découvrent un par un, auprès d'autorités différentes. Votre propre logiciel se trouve au milieu et doit les garder cohérents.

| Système | Géré par | Ce qu'il couvre | Ce que votre logiciel doit faire |
|---|---|---|---|
| Rassed (RSD), traçabilité des médicaments | SFDA | Chaque boîte de médicament à usage humain enregistré, de l'usine ou de l'importation jusqu'au patient | Envoyer et recevoir les notifications de chaque boîte : acceptation, vente, retour, transfert |
| Wasfaty | Ministère de la Santé, avec NUPCO | Les e-prescriptions des établissements de santé publics participants, délivrées gratuitement dans les pharmacies d'officine accréditées | Séparer les délivrances Wasfaty des ventes au comptant et les garder alignées sur le stock |
| Facturation électronique (FATOORA) | ZATCA | Les factures fiscales et simplifiées des entreprises immatriculées à la TVA | Produire des factures électroniques conformes et, en phase 2, les faire valider ou les déclarer via l'API de la ZATCA |
| Votre stock et votre caisse | Vous | Lots, dates de péremption, succursales, équipes, fournisseurs | Être le registre unique auquel les trois autres sont rapprochés |

## Rassed (RSD) : chaque boîte a une identité

La SFDA décrit son Drug Track and Trace System comme un système qui suit les produits de la fabrication ou de l'importation jusqu'à leur utilisation par le patient. Son guide d'intégration cite les pharmacies parmi les acteurs concernés, aux côtés des fabricants, des entrepôts et des centres médicaux et de délivrance.

Ce que cela signifie au comptoir :

- **Chaque boîte porte un data matrix GS1** contenant quatre codes : le GTIN (produit), un numéro de série, la date de péremption et le numéro de lot.
- **Chaque pharmacie a besoin d'un GLN**, un numéro de localisation mondial. La SFDA enregistre ensuite l'acteur dans le système.
- **Chaque mouvement a deux côtés.** Quand un entrepôt envoie des boîtes, votre pharmacie doit envoyer une notification d'acceptation. Tant qu'elle ne l'a pas fait, les boîtes restent « entre » les deux parties et aucune ne peut rien en faire.
- **Les opérations d'une pharmacie comprennent** l'acceptation, la vente au patient, l'annulation de vente, le retour, le transfert et la désactivation, par numéro de série ou, pour certaines, par lot. La SFDA précise qu'elle peut les restreindre.

Selon le guide de la SFDA, les acteurs doivent adapter leurs propres systèmes informatiques pour envoyer et recevoir ces notifications, via des services web SOAP-XML avec des identifiants délivrés par la SFDA après l'enregistrement. La FAQ de RSD ajoute que vous pouvez utiliser les portails du système en attendant que votre propre système soit prêt, et que le système accepte les données par lots. En pratique, une pharmacie qui vend des centaines de boîtes par jour a besoin d'une caisse qui envoie automatiquement la notification de vente, et non d'un employé qui saisit les numéros de série à la main dans un portail.

La SFDA suit aussi les pharmacies de près. En janvier 2026, elle a rencontré le comité national des pharmacies pour examiner les difficultés de mise en œuvre de RSD et améliorer la conformité du secteur.

## Wasfaty : les e-prescriptions en pharmacie d'officine

Wasfaty est le service d'e-prescription du ministère de la Santé. Les patients des établissements de santé publics participants retirent gratuitement leurs médicaments dans des pharmacies d'officine accréditées. En décembre 2021, le ministère indiquait plus de 20 millions d'ordonnances délivrées par ce service, avec la participation de 2 018 centres de santé et 197 hôpitaux.

Les documents Wasfaty de NUPCO définissent une pharmacie participante comme une pharmacie d'officine accréditée dans le service et liée par contrat à NUPCO. Les critères d'adhésion et l'inscription sont publiés sur wasfaty.sa : vérifiez-les à la source plutôt que de vous fier au résumé d'un fournisseur.

Pour votre logiciel, les points pratiques sont les suivants :

- **Une délivrance Wasfaty n'est pas une vente au comptant.** Le patient ne paie rien : elle ne doit gonfler ni le tiroir-caisse ni le rapport des ventes.
- **Le stock quitte quand même le rayon.** Chaque article délivré doit sortir du bon lot, comme pour toute vente.
- **Il vous faut un historique propre pour le rapprochement.** Traitez les délivrances Wasfaty comme un type d'opération distinct, afin de les rapprocher ensuite de ce que le service règle.

Demandez à l'équipe Wasfaty de NUPCO comment la délivrance et le règlement fonctionnent pour votre pharmacie avant de concevoir quoi que ce soit autour. N'acceptez pas l'affirmation d'un fournisseur selon laquelle son produit est « connecté à Wasfaty » sans l'avoir vu fonctionner.

## Lots et dates de péremption dans votre stock

Une pharmacie ne peut pas fonctionner avec un seul chiffre de stock par article. Le même médicament est en rayon en plusieurs lots aux dates de péremption différentes, et RSD suit déjà chaque boîte par lot et par péremption.

Ce que le système doit faire :

- **Lire le lot et la péremption dans le data matrix à la réception.** Un scan remplit les deux champs, sans saisie manuelle.
- **Vendre d'abord ce qui périme en premier.** La caisse doit orienter vers le lot qui périme le plus tôt et alerter quand un article approche de sa date.
- **Signaler tôt les produits proches de la péremption.** Une liste mensuelle de ce qui périme dans les 60 ou 90 jours vous laisse le temps de le retourner, de le transférer ou de le solder.
- **Retourner et rappeler par lot.** Lorsqu'un lot est rappelé, vous devez retrouver toutes ses boîtes dans toutes les succursales en quelques secondes. La SFDA indique que RSD permet de bloquer directement les produits rappelés ; votre propre système doit aussi les bloquer en caisse.
- **Transférer correctement entre succursales.** Un transfert est une sortie d'une succursale et une entrée dans une autre ; dans RSD, c'est un transfert suivi d'une acceptation, pas une vente.

Nous expliquons les mêmes problèmes de stock pour les pharmacies égyptiennes dans [logiciel de pharmacie en Égypte](/blog/pharmacy-management-system-egypt), et les causes plus larges des pertes de stock dans [où passe vraiment votre stock](/blog/inventory-management-system-egypt).

## Les factures électroniques ZATCA au comptoir

Une pharmacie immatriculée à la TVA émet des factures électroniques selon les règles de la ZATCA, comme tout autre commerce. La phase 1 (génération) s'applique depuis le 4 décembre 2021 aux contribuables résidant dans le Royaume, et une facture papier scannée n'est pas une facture électronique.

La phase 2 (intégration) a commencé le 1er janvier 2023. Depuis 2023, la ZATCA fait passer les entreprises immatriculées à la TVA à la phase 2 par vagues. La vague 25, qui couvre un chiffre d'affaires taxable supérieur à 187 500 SAR sur l'une des années 2022 à 2025, doit être connectée à FATOORA au plus tard le 1er février 2027.

Dans une pharmacie, la plupart des factures sont des factures simplifiées aux patients. En phase 2, elles sont cachetées par votre système enregistré, portent un QR code, sont imprimées immédiatement pour le client et doivent être déclarées à FATOORA dans les 24 heures. Les factures à une entreprise, par exemple une clinique qui achète des fournitures, sont des factures fiscales que la ZATCA doit valider avant que l'acheteur ne les reçoive. Chaque facture porte aussi un UUID et l'empreinte (hash) de la facture précédente, et la version lisible doit être en arabe.

Deux points comptent dans le choix du logiciel :

- **Le traitement TVA se définit article par article.** Votre comptable décide comment chaque produit est taxé ; le système doit l'appliquer correctement sur chaque ligne.
- **La ZATCA ne certifie aucun logiciel.** Son annuaire des fournisseurs de solutions est une liste indicative non contraignante et ne vaut pas approbation par la ZATCA. Jugez un produit sur le fait qu'il est réellement enregistré et effectue la validation et la déclaration, pas sur un label.

Notre [guide d'intégration de la phase 2 ZATCA pour POS et ERP sur mesure](/blog/zatca-phase-2-integration-custom-pos-erp) détaille l'aspect technique.

## Les questions à poser avant d'acheter ou de faire développer

Que vous choisissiez un progiciel ou un logiciel sur mesure, posez les mêmes questions :

1. Le système envoie-t-il lui-même les notifications RSD, et quelles opérations gère-t-il : acceptation, vente, retour, transfert, désactivation ?
2. Que deviennent les notifications RSD et les factures en cas de coupure d'internet, et comment sont-elles envoyées au retour de la connexion ?
3. Lit-il le data matrix GS1 et remplit-il automatiquement le lot et la péremption ?
4. Comment enregistre-t-il les délivrances Wasfaty séparément des ventes au comptant ?
5. Est-il enregistré aujourd'hui pour la phase 2 de la ZATCA, et pouvez-vous voir une facture validée et une facture déclarée ?
6. Chaque succursale a-t-elle son propre stock, avec des transferts entre elles ?
7. L'interface, le ticket et les rapports sont-ils en arabe ?
8. À qui appartiennent les données, et pouvez-vous tout exporter si vous changez de fournisseur ?

Pour les arbitrages généraux, consultez [caisse prête à l'emploi ou sur mesure en Arabie saoudite](/blog/ready-made-vs-custom-pos-saudi-arabia).

## Ce que fait KF Tech Solutions

Nous développons des [systèmes de gestion](/services/business-systems) sur mesure, notamment pour les pharmacies, les cliniques, la caisse et les stocks, et nous travaillons avec des entreprises en Égypte et dans le Golfe. En Égypte, nous avons connecté un système de caisse au système de reçus électroniques de l'administration fiscale ([projet de reçu électronique ETA](/projects/egypt-eta)) : nous savons donc ce qu'implique la connexion d'une caisse à une API gouvernementale. Pour une pharmacie saoudienne, nous lisons avec vous les spécifications actuelles de la SFDA et de la ZATCA, cadrons les connexions à RSD et à FATOORA, et construisons la logique de stock, de lots, de péremption et de succursales selon le fonctionnement réel de votre pharmacie. Pour en savoir plus sur notre travail avec les entreprises saoudiennes, consultez notre [page Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### Une pharmacie doit-elle connecter son propre logiciel à RSD ?

Le guide d'intégration de la SFDA prévoit que les acteurs adaptent leurs propres systèmes pour envoyer et recevoir les notifications. La FAQ de RSD autorise l'usage des portails en attendant que votre système soit prêt. Pour une pharmacie avec un vrai volume, les notifications automatiques depuis la caisse sont la seule option réaliste.

### Que contient le data matrix d'une boîte de médicament ?

Quatre codes GS1 : le GTIN, un numéro de série, la date de péremption et le numéro de lot. Ensemble, ils identifient une boîte physique précise.

### Wasfaty et RSD, est-ce la même chose ?

Non. Wasfaty est le service d'e-prescription du ministère de la Santé, opéré avec NUPCO. RSD est le système de traçabilité de la SFDA pour chaque boîte de médicament enregistré. Une pharmacie traite avec les deux, et son propre système doit les garder cohérents avec le stock.

### Ma pharmacie doit-elle passer à la phase 2 de la ZATCA maintenant ?

Cela dépend de votre chiffre d'affaires taxable et de la vague que la ZATCA vous notifie. La ZATCA annonce chaque vague au moins six mois à l'avance. La vague 25 couvre un chiffre d'affaires supérieur à 187 500 SAR sur l'une des années 2022 à 2025, avec une connexion due au 1er février 2027. Il s'agit d'une information générale et non d'un conseil fiscal : vérifiez votre situation avec votre comptable.

### Existe-t-il un logiciel de pharmacie approuvé par la ZATCA ?

La ZATCA n'approuve aucun logiciel. Son annuaire des fournisseurs de solutions est une liste indicative, pas une approbation. Demandez à voir le système enregistré et en train de valider ou de déclarer de vraies factures.

### Un seul système peut-il gérer plusieurs succursales ?

Oui. Chaque succursale doit avoir son propre stock par lot et par péremption, et les transferts sont enregistrés comme une sortie d'une succursale et une entrée dans une autre, ce qui correspond à la façon dont RSD traite les transferts entre pharmacies.

Si vous préparez un logiciel de pharmacie pour l'Arabie saoudite, [décrivez-nous le fonctionnement de votre pharmacie](/contact) ou [réservez un appel gratuit](/book) : nous passerons en revue RSD, Wasfaty et la facturation électronique avec vous avant tout devis.

## Sources

- [SFDA : guide d'intégration du Drug Track and Trace System, v2.1](https://www.sfda.gov.sa/sites/default/files/2024-08/IntegrationGuideDTTSV21.pdf)
- [SFDA : questions fréquentes sur RSD](https://rsd.sfda.gov.sa/faqs.html)
- [SFDA : le système de traçabilité a enregistré plus d'un milliard d'opérations (mars 2021)](https://www.sfda.gov.sa/en/news/79406)
- [SFDA : réunion avec le comité national des pharmacies sur RSD (janvier 2026)](https://sfda.gov.sa/en/news/18786)
- [Ministère de la Santé : plus de 20 millions d'ordonnances délivrées via Wasfaty (décembre 2021)](https://www.moh.gov.sa/en/ministry/mediacenter/news/pages/news-2021-12-29-001.aspx)
- [NUPCO : exigences du service Wasfaty](https://www.nupco.com/wp-content/uploads/2025/01/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D8%B7%D8%A7%D8%AA-%D9%88%D8%B5%D9%81%D8%AA%D9%8A.pdf)
- [ZATCA : qu'est-ce que la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA : phases de déploiement](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA : annonce de la vague 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA : guide détaillé de la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA : annuaire des fournisseurs de solutions](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
