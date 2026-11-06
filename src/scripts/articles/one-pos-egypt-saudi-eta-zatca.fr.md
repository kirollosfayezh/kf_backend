---
title: Une caisse pour l'Égypte et l'Arabie saoudite : ETA ou ZATCA
summary: L'ETA égyptienne et la ZATCA saoudienne exigent des documents, signatures et flux différents. Comment une caisse sert les deux, avec un module fiscal par pays.
tags: caisse enregistreuse, ETA, ZATCA, facturation électronique, Égypte, Arabie saoudite
alt: Employés en charlotte servant au comptoir de caisse d’une boulangerie, avec deux écrans de caisse côté client
caption: La même vente au même comptoir doit partir en reçu ETA en Égypte et en facture ZATCA en Arabie saoudite.
stats: 2|administrations fiscales, chacune avec son portail, son format et ses règles; 24 h|pour soumettre ou déclarer une vente au consommateur dans les deux pays; 1|cœur de caisse commun, avec un module fiscal par pays
---

Oui, un même logiciel de caisse peut servir des points de vente en Égypte et en Arabie saoudite, mais pas avec une seule connexion de facturation électronique. L'administration fiscale égyptienne (ETA) et l'Autorité saoudienne de la zakat, des impôts et des douanes (ZATCA) exploitent deux systèmes distincts, avec des formats de documents, des signatures, des enregistrements d'appareils et des circuits de validation différents. La solution réaliste est un cœur de caisse commun pour les ventes, le stock et les services, avec un module fiscal distinct par pays, qui connaît les règles de son administration.

Dernière vérification : 6 novembre 2026

Ce guide est une information générale destinée aux chefs d'entreprise et à leurs équipes, pas un conseil fiscal ou juridique. Vérifiez auprès de votre comptable ou de l'administration elle-même les règles et les dates qui s'appliquent à votre immatriculation.

## Égypte : e-facture et e-reçu de l'ETA

L'ETA exploite une plateforme unique, que sa documentation technique décrit comme « la solution de l'administration fiscale égyptienne » pour l'eInvoicing et l'eReceipt, avec des API ouvertes aux ERP et aux logiciels de caisse des contribuables. Elle comporte deux volets, et une entreprise qui vend à la fois au comptoir et à des sociétés a en général besoin des deux.

**L'e-facture (factures aux entreprises et à l'État).** Votre système transmet chaque facture à l'API de l'ETA au format JSON ou XML. Avant la signature, le document est mis sous une forme canonique puis haché en SHA-256, et ce hachage est signé avec une signature CAdES-BES au moyen d'un certificat de cachet électronique (eSeal). Une facture émise ne peut être annulée que dans un délai fixé par l'ETA pour chaque type de document. Passé ce délai, la documentation renvoie à l'émission d'un avoir.

**L'e-reçu (ventes aux consommateurs en caisse).** C'est le volet qui touche directement la caisse d'un commerce. La documentation de l'ETA sur les reçus fixe ces règles :

- L'appareil de caisse doit être enregistré et rattaché au numéro d'immatriculation de l'émetteur (RIN) avant d'émettre un reçu.
- Les reçus sont transmis uniquement au format JSON.
- L'UUID de chaque reçu est un hachage SHA-256 du contenu normalisé du reçu, écrit en 64 caractères hexadécimaux.
- Chaque reçu contient l'UUID du reçu précédent émis par le même appareil, si bien que chaque caisse tient sa propre chaîne.
- Un reçu peut être transmis dans un délai de 24 heures, et l'heure de transmission ne peut pas être dans le futur.
- Le reçu imprimé porte un QR code qui renvoie au détail du reçu sur le portail de l'ETA, avec le total et le numéro d'immatriculation du vendeur.

Les volets qui concernent votre entreprise, et la date à partir de laquelle ils s'appliquent, dépendent de votre immatriculation. Vérifiez-les auprès de l'ETA elle-même, et non sur le site d'un éditeur. Notre guide sur [la connexion de votre caisse à l'ETA égyptienne](/blog/eta-e-invoicing-pos-integration) détaille les étapes de l'intégration et les points où elle échoue le plus souvent.

## Arabie saoudite : phase 2 de la ZATCA (FATOORA)

La facturation électronique de la ZATCA comporte deux phases. La phase 1 (génération) s'applique depuis le 4 décembre 2021 à tous les assujettis sauf les non-résidents, et une facture papier scannée ou copiée n'est pas une facture électronique. La phase 2 (intégration) a commencé le 1er janvier 2023 et se déploie par vagues, chaque vague étant annoncée au moins six mois à l'avance. La vague 25, qui couvre les entreprises dont le chiffre d'affaires soumis à la TVA a dépassé 187 500 SAR au cours d'une année entre 2022 et 2025, doit se connecter à la plateforme FATOORA au plus tard le 1er février 2027.

Ce que la phase 2 exige d'une caisse, selon les lignes directrices détaillées et la norme XML de la ZATCA :

- **Enregistrement.** Chaque unité de facturation, appelée « E-Invoice Generation Solution » (EGS), est enregistrée sur le portail FATOORA, qui lui délivre son Cryptographic Stamp Identifier (CSID).
- **Format.** Les factures sont en XML selon la structure UBL 2.1, avec des règles de validation fondées sur la norme EN 16931, et tout ce qui est envoyé à la ZATCA part en XML par une API.
- **Factures fiscales (en général aux entreprises et à l'État).** La ZATCA les valide en temps réel : elle contrôle la facture, ajoute son cachet et un QR code, et renvoie le XML validé. La facture doit être validée avant de parvenir à l'acheteur, et il en va de même pour les avoirs et notes de débit associés.
- **Factures simplifiées (en général aux consommateurs).** Votre propre système appose sur le XML le cachet de son CSID, ajoute un QR code de 9 champs TLV encodés en base64 et remet une copie au client. Le XML doit être déclaré à FATOORA dans les 24 heures.
- **Protection contre la falsification.** Chaque facture porte un UUID de 128 bits et le hachage de la facture précédente, ce qui forme une chaîne par unité EGS. Le compteur ne peut pas être remis à zéro, les utilisateurs ne peuvent pas modifier la date du système, et le XML stocké ne peut être ni supprimé ni modifié.
- **Arabe.** La facture lisible doit être en arabe ; d'autres langues peuvent être ajoutées.

La ZATCA ne certifie pas les logiciels. Son annuaire des fournisseurs de solutions est une liste indicative qui, selon la ZATCA, « ne constitue pas une approbation » ; méfiez-vous donc de toute mention « certifié ZATCA ». Parmi les amendes publiées par la ZATCA en novembre 2021 figurent 5 000 SAR pour la non-émission de factures électroniques et 10 000 SAR pour la suppression ou la modification d'une facture électronique après son émission.

## L'ETA et la ZATCA côte à côte

| | Égypte (ETA) | Arabie saoudite (ZATCA) |
|---|---|---|
| Plateforme | Solution eInvoicing et eReceipt de l'ETA | FATOORA |
| Factures aux entreprises | E-facture, JSON ou XML, transmise par l'API | Facture fiscale, XML UBL 2.1, validée avant de parvenir à l'acheteur |
| Ventes aux consommateurs | E-reçu, JSON uniquement, transmis dans les 24 heures | Facture simplifiée, cachetée par votre système, déclarée dans les 24 heures |
| Identité de l'appareil | Caisse enregistrée et rattachée au RIN de l'émetteur | Chaque unité EGS enregistrée, avec son propre CSID |
| Signature | CAdES-BES avec certificat eSeal (e-factures) | Cachet cryptographique issu du CSID ; la ZATCA ajoute le sien à la validation |
| Identifiant | L'UUID est un hachage SHA-256 du reçu | UUID de 128 bits sur chaque facture |
| Chaîne | UUID du reçu précédent, par appareil de caisse | Hachage de la facture précédente, par unité EGS |
| QR code | Lien vers le reçu sur le portail de l'ETA, avec total et RIN | 9 champs TLV, base64 |
| Corrections | E-factures : annulation dans le délai fixé par l'ETA, puis avoir ; e-reçus : reçu de retour | Ni suppression ni modification ; avoirs et notes de débit |

Les points communs sont réels : les deux pays chaînent les documents par appareil, accordent 24 heures pour les ventes aux consommateurs et placent un QR code sur le reçu. Mais les formats, les identités et les règles de hachage diffèrent dans chaque détail, si bien que le code écrit pour l'un ne peut pas simplement être redirigé vers l'autre.

## Ce qu'une caisse peut partager, et ce qu'elle ne peut pas

L'essentiel d'une caisse n'a rien à voir avec l'administration fiscale, et cette partie peut être commune aux deux pays :

- le catalogue d'articles, les codes-barres, les variantes et le stock par point de vente ;
- les services de caisse, les comptages du tiroir et les droits des caissiers ;
- les retours liés à la vente d'origine ;
- les rapports, avec une vue consolidée du groupe dans les deux pays ;
- un tableau de bord unique pour le siège.

Tout ce qui dialogue avec l'administration doit en revanche être séparé. Chaque point de vente appartient à un seul pays, et chaque pays a son propre module fiscal : son enregistrement des appareils, sa construction des documents, sa méthode de signature, ses règles de transmission et ses archives. Un magasin de Djeddah ne doit jamais pouvoir envoyer un reçu à l'ETA, et un magasin du Caire ne doit jamais produire de XML UBL pour FATOORA.

Le catalogue a lui aussi besoin de données fiscales par pays. Un même article peut porter un code et un traitement fiscal pour l'Égypte et d'autres pour l'Arabie saoudite, avec des prix en livres égyptiennes et en riyals saoudiens. Notre guide pour [choisir un logiciel de caisse pour un commerce en Égypte](/blog/pos-cashier-system-for-shops-egypt) détaille les fonctions utiles en magasin.

## Concevoir le module fiscal de chaque pays

Une conception propre place les deux pays derrière la même interface interne : la caisse se contente d'annoncer « cette vente est définitive », et le bon module prend le relais.

1. **Un pays par point de vente.** Le point de vente détermine le module, la devise, le fuseau horaire et la langue du reçu. Le Caire avance ses horloges en été alors que Riyad reste à UTC+3 toute l'année : enregistrez donc les horodatages avec leur décalage.
2. **Une identité par caisse.** Pour l'Égypte, l'appareil enregistré et le RIN de l'émetteur ; pour l'Arabie saoudite, l'unité EGS enregistrée et son CSID. Prévoyez qui renouvelle les certificats, et quand.
3. **Un générateur de documents par pays.** Du JSON ETA pour les reçus et du JSON ou XML pour les factures en Égypte ; du XML UBL 2.1 pour les deux types de factures en Arabie saoudite.
4. **Une chaîne par appareil.** Chaque caisse garde sa propre référence au document précédent. Ne partagez jamais une chaîne entre caisses, et ne laissez jamais une réinitialisation ou une restauration de sauvegarde la rompre.
5. **Une file d'attente qui résiste aux coupures d'internet.** Les deux pays laissent 24 heures pour les ventes aux consommateurs : la caisse continue donc de vendre, et la file transmet ou déclare dès le retour de la connexion, avec une alerte bien avant la fin du délai.
6. **Des archives non modifiables.** Conservez avec la vente ce qui a été envoyé et ce qui est revenu. Les corrections passent par de nouveaux documents, comme des avoirs ou, en Égypte, des reçus de retour, jamais par des modifications.
7. **Une mise en page du reçu par pays.** L'arabe sur les factures saoudiennes, le bon QR code pour chaque administration, et des réimpressions tirées du document stocké.

## Le déploiement dans les deux pays

1. **Recenser les obligations.** Vérifiez avec votre comptable quels volets de l'ETA s'appliquent à votre entité égyptienne et quelle vague de la ZATCA concerne votre entité saoudienne.
2. **Nettoyer le catalogue.** Ajoutez les codes et traitements fiscaux de chaque pays avant d'écrire la moindre ligne d'intégration.
3. **Commencer par un pays.** En général celui dont l'échéance est la plus proche. Testez sur l'environnement de test de l'administration : l'ETA fournit un environnement de préproduction et la ZATCA une boîte à outils de test.
4. **Piloter un point de vente.** Surveillez les rejets, la file d'attente et le rapport de rapprochement pendant quelques semaines.
5. **Ajouter le second module.** Le cœur commun a déjà fait ses preuves ; le travail porte sur le nouveau module fiscal et ses tests.
6. **Désigner un responsable.** Quelqu'un doit suivre les documents rejetés, l'expiration des certificats et les nouvelles annonces des deux administrations.

## Le rôle de KF Tech Solutions

Nous développons des [systèmes de caisse, ERP et de gestion de stock](/services/business-systems) sur mesure. En Égypte, notre [intégration e-Receipt avec l'ETA](/projects/egypt-eta) signe chaque reçu, le transmet à l'API de l'administration fiscale égyptienne, traite ses réponses et conserve le statut de transmission avec la vente ; elle est en production. Pour les points de vente saoudiens, nous définissons avec vous le module ZATCA d'après les spécifications publiées par la ZATCA et le testons avec l'outil de test de la ZATCA avant l'enregistrement de toute unité EGS sur votre compte du portail FATOORA. Nous travaillons avec des entreprises en Égypte et dans le Golfe ; consultez notre page pour [les entreprises en Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### Puis-je connecter ma caisse égyptienne à la ZATCA telle quelle ?

Non. La ZATCA attend du XML UBL 2.1 provenant d'une unité EGS enregistrée avec son propre CSID, alors que l'ETA attend ses propres documents JSON ou XML provenant d'une caisse enregistrée. L'écran de vente et la logique de stock peuvent rester, mais la partie fiscale exige un nouveau module construit selon les règles de la ZATCA.

### Les deux pays imposent-ils une transmission en temps réel en caisse ?

Pas exactement. Les factures fiscales saoudiennes, en général destinées aux entreprises, doivent être validées avant de parvenir à l'acheteur. Pour les ventes aux consommateurs, les deux pays laissent 24 heures : les e-reçus égyptiens doivent être transmis dans les 24 heures et les factures simplifiées saoudiennes déclarées dans les 24 heures.

### Ma caisse doit-elle être « certifiée ZATCA » ?

La ZATCA ne certifie pas les logiciels. Son annuaire des fournisseurs de solutions est une liste indicative qui « ne constitue pas une approbation ». Ce qui compte, c'est que le système réalise correctement l'enregistrement, la validation, la déclaration et les règles anti-falsification.

### Une seule base de données peut-elle contenir les ventes des deux pays ?

Oui, à condition que chaque vente appartienne à un seul point de vente et à un seul pays, et que les documents, chaînes et réponses de chaque pays soient stockés séparément et sans possibilité de modification. Le lieu d'hébergement des données est une décision distincte, à prendre avec vos conseillers.

### Que faire si un reçu ou une facture a été envoyé avec une erreur ?

Aucun des deux systèmes ne permet de le corriger discrètement. En Égypte, une e-facture peut être annulée dans le délai fixé par l'ETA pour ce type de document, et sinon corrigée par un avoir ; une vente au consommateur est annulée par un reçu de retour. En Arabie saoudite, le XML stocké ne peut être ni supprimé ni modifié : les corrections passent par des avoirs ou des notes de débit.

Si vous exploitez, ou prévoyez d'exploiter, des points de vente dans les deux pays, [présentez-nous votre situation](/contact) ou [réservez un appel gratuit](/book) : nous verrons ensemble ce que votre caisse actuelle peut conserver et ce dont le module de chaque pays a besoin.

## Sources

- [ETA : SDK eInvoicing et eReceipt](https://sdk.invoicing.eta.gov.eg/)
- [ETA : création de la signature des documents](https://sdk.invoicing.eta.gov.eg/signature-creation/)
- [ETA : API de transmission des documents](https://sdk.invoicing.eta.gov.eg/einvoicingapi/01-submit-documents/)
- [ETA : API d'annulation des documents](https://sdk.invoicing.eta.gov.eg/einvoicingapi/02-cancel-document/)
- [ETA : API de transmission des reçus](https://sdk.invoicing.eta.gov.eg/ereceiptapi/02-submit-receipt/)
- [ETA : FAQ sur l'émission des reçus](https://sdk.invoicing.eta.gov.eg/receiptissuancefaq/)
- [ETA : FAQ du SDK (environnement de test)](https://sdk.invoicing.eta.gov.eg/faq/)
- [ZATCA : qu'est-ce que la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA : phases de déploiement](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA : annonce de la vague 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA : lignes directrices détaillées sur la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA : norme d'implémentation XML](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA : annuaire des fournisseurs de solutions](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA : infractions et amendes liées à la facturation électronique](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
- [Ahram Online : l'heure d'été en Égypte](https://english.ahram.org.eg/NewsContentP/1/566547/Egypt/Egypt-to-move-clocks-forward-one-hour-on-Friday-fo.aspx)
