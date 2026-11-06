---
title: Logiciel de gestion de clinique en Arabie saoudite : les points clés
summary: Rendez-vous, dossier patient, schéma dentaire, factures ZATCA et données de santé : ce qu'un logiciel de clinique doit gérer en Arabie saoudite.
tags: logiciel de gestion de clinique, logiciel dentaire, dossier patient, prise de rendez-vous, facture électronique ZATCA, Arabie saoudite
alt: Un cabinet dentaire lumineux et vide, avec fauteuil, scialytique, placards et lavabo
caption: Rendez-vous, schémas dentaires et factures TVA naissent dans la même salle : ils ont leur place dans un seul système.
stats: 1|dossier patient partagé par l'accueil, le médecin et la facturation; 24 h|pour déclarer une facture simplifiée à FATOORA en phase 2; 72 h|pour notifier la SDAIA d'une violation de données
---

Un logiciel de gestion de clinique en Arabie saoudite doit réunir les rendez-vous, le dossier patient et la facturation au même endroit, en arabe et en anglais. En plus, une clinique assujettie à la TVA a besoin de factures conformes aux règles de facturation électronique de la ZATCA, et chaque clinique détient des données de santé, que la loi sur la protection des données personnelles (PDPL) classe comme sensibles. Vérifiez ces deux points avant de comparer les écrans ou les prix.

Dernière vérification : 6 novembre 2026

## Ce qu'un logiciel de clinique doit couvrir en Arabie saoudite

La plupart des cliniques ont besoin du même socle, quelle que soit la spécialité :

- **Les rendez-vous** par téléphone, à l'accueil, depuis une page de réservation et par WhatsApp, tous dans un seul agenda.
- **Le dossier patient** : antécédents, notes de consultation, ordonnances, pièces jointes et, pour les dentistes, le schéma dentaire.
- **La facturation** : actes, forfaits, acomptes, paiements échelonnés et remboursements, avec des factures en arabe.
- **L'assurance** : qui est couvert, ce que chaque assureur accepte et ce qui reste dû.
- **Les rapports** : chiffre d'affaires par médecin et par acte, rendez-vous manqués, patients à revoir.
- **Les rôles** : l'accueil voit le planning, le médecin le dossier médical, le comptable la facturation.

Ce dernier point compte plus qu'il n'y paraît. Avec la PDPL, savoir qui peut ouvrir le dossier d'un patient est une question juridique, pas seulement une affaire de confort.

## Rendez-vous, rappels et absences

Un bon module de réservation connaît les horaires de chaque médecin, la durée de chaque acte et les salles ou fauteuils disponibles. L'accueil doit voir toute la journée d'un coup d'œil et déplacer un rendez-vous en une seule action.

Les rappels font l'essentiel du travail. Un message la veille, avec la possibilité de confirmer ou d'annuler, transforme une absence probable en créneau libre que vous pouvez proposer à quelqu'un d'autre. La plupart des patients le liront sur WhatsApp ; notre guide sur le [chatbot WhatsApp en Arabie saoudite](/blog/whatsapp-chatbot-saudi-arabia) explique comment y fonctionnent les réservations et les rappels, et ce qu'implique le consentement du patient.

Si vous avez plusieurs sites, chaque patient doit avoir un seul dossier pour tous, et la page de réservation ne doit afficher que le site, le médecin et les horaires réellement libres.

## Le dossier patient et le schéma dentaire

Le médecin travaille dans le dossier patient toute la journée : il doit être rapide. Vérifiez que le médecin peut :

- ouvrir les patients du jour dans l'ordre et voir la dernière visite d'un coup d'œil ;
- rédiger ses notes à partir de modèles pour les cas courants, au lieu de tout retaper ;
- imprimer ou envoyer une ordonnance, un arrêt de travail ou une lettre d'orientation en arabe ;
- joindre radios, résultats d'analyses et photos à la visite concernée.

Les cabinets dentaires ont besoin de davantage. C'est généralement ce que recherche la requête « نظام ادارة عيادات الاسنان » :

- **Un schéma dentaire** où chaque dent porte son historique : obturations, extractions, traitements de canal, couronnes.
- **Des plans de traitement** découpés en étapes et en séances, chacune avec son prix, pour que le patient valide le plan et paie au fur et à mesure.
- **Le suivi des travaux de laboratoire** de l'empreinte à la livraison, pour qu'une couronne n'arrive jamais en retard au rendez-vous de pose.

Un logiciel de clinique générique avec un champ « notes » n'est pas un logiciel dentaire. Demandez au fournisseur de saisir un cas réel sur le schéma pendant la démonstration.

## Facturation, TVA et facture électronique ZATCA

Si votre clinique est assujettie à la TVA, ses factures relèvent des règles de facturation électronique de la ZATCA (FATOORA). Il s'agit d'une information générale, pas d'un conseil fiscal ; demandez à votre comptable comment la TVA s'applique à vos actes.

| Étape | Ce que cela signifie | Date |
|---|---|---|
| Phase 1 (génération) | Factures émises par un système, et non manuscrites ou scannées | Depuis le 4 déc. 2021 |
| Phase 2 (intégration) | Le système se connecte à FATOORA, par vagues selon le chiffre d'affaires | Depuis le 1er janv. 2023 |
| Vague 25 | Chiffre d'affaires taxable supérieur à 187 500 SAR sur une année entre 2022 et 2025 | Intégration avant le 1er févr. 2027 |

En phase 2, le système de facturation doit être enregistré (onboarded) auprès de la ZATCA et produire des factures XML structurées avec un cachet cryptographique, un QR code et une chaîne d'empreintes (hash) reliant chaque facture à la précédente. La plupart des factures d'une clinique à ses patients sont des factures simplifiées : le patient reçoit sa copie immédiatement, et le système déclare le XML à FATOORA dans les 24 heures. Une facture émise ne peut être ni modifiée ni supprimée ; les corrections passent par des avoirs. La facture que lit le patient doit être en arabe, et l'anglais peut être ajouté à côté.

La ZATCA ne certifie aucun logiciel : un badge « approuvé par la ZATCA » ne prouve donc rien. Demandez au fournisseur de vous montrer une facture de test passant par les outils de la ZATCA. Notre guide sur l'[intégration de la phase 2 ZATCA pour les caisses et ERP sur mesure](/blog/zatca-phase-2-integration-custom-pos-erp) couvre l'aspect technique.

## Remboursements d'assurance : partez des documents officiels

C'est sur l'assurance que les logiciels de clinique diffèrent le plus, et que les résumés de seconde main se contredisent. Si vous facturez des assureurs, les règles viennent du Council of Health Insurance (CHI) et de sa plateforme NPHIES. Avant d'acheter ou de faire développer quoi que ce soit, procurez-vous les exigences en vigueur dans les documents officiels de NPHIES et du CHI, et non dans la brochure d'un fournisseur ou un article de blog, y compris celui-ci.

Posez ensuite trois questions simples au fournisseur : quelles exigences le système remplit-il aujourd'hui ? Quelle clinique l'utilise déjà de cette façon ? Et qui se charge des modifications quand les exigences changent ?

## Données de santé et PDPL

La PDPL est en vigueur depuis le 14 septembre 2023, et la période de grâce a pris fin le 14 septembre 2024. Elle classe les données de santé parmi les données personnelles sensibles. Concrètement, pour une clinique :

- **Un accès selon le rôle.** L'accueil n'a pas besoin des antécédents médicaux, le comptable n'a pas besoin des notes du médecin.
- **Un journal des accès** qui montre qui a ouvert quel dossier et quand.
- **Un plan en cas de violation.** La PDPL prévoit de notifier la SDAIA, l'autorité de contrôle, dans les 72 heures.
- **De la prudence pour les transferts à l'étranger.** Les données ne peuvent quitter le Royaume que dans les conditions prévues par la loi, et seulement le minimum nécessaire.

Les amendes peuvent atteindre 5 millions SAR, et la divulgation de données sensibles dans l'intention de nuire peut entraîner jusqu'à deux ans de prison. Il s'agit d'une information générale, pas d'un conseil juridique.

**Où les données sont hébergées.** La SDAIA a soumis un projet d'amendements à consultation du 6 octobre au 5 novembre 2026, dont une proposition obligeant les responsables de traitement à stocker les données personnelles dans le Royaume. Ce n'est encore qu'un projet. Si vous souhaitez malgré tout un hébergement en Arabie saoudite, Google Cloud dispose d'une région à Dammam, et AWS indique que sa première région saoudienne doit ouvrir en décembre 2026. Demandez à tout fournisseur où vos données se trouvent réellement.

## Logiciel prêt à l'emploi ou sur mesure

Un logiciel prêt à l'emploi démarre plus vite et convient à une clinique unique au fonctionnement classique. Le sur-mesure a du sens si vous avez plusieurs sites, une spécialité mal gérée par les logiciels standard, votre propre parcours de réservation, ou besoin de relier la facturation à votre comptabilité et à votre pharmacie.

Quel que soit votre choix, déployez par étapes : d'abord les rendez-vous et les dossiers patients, puis la facturation et la facture électronique, puis l'assurance et les rapports. Formez l'accueil avant les médecins, car c'est là que chaque problème se voit en premier, et gardez les anciens dossiers consultables jusqu'à ce que le nouveau système ait tourné sans incident pendant quelques semaines.

Notre guide [logiciel sur mesure ou standard](/blog/custom-software-vs-off-the-shelf-how-to-choose) détaille cet arbitrage, et notre [guide des logiciels de clinique en Égypte](/blog/clinic-management-system-egypt) décrit plus en détail les fonctions du quotidien.

KF Tech Solutions développe des systèmes sur mesure pour cliniques et pharmacies : rendez-vous, dossiers patients, facturation, rapports et rappels WhatsApp, en arabe et en anglais. Pour les cliniques assujetties à la TVA, nous prévoyons la facture électronique dans la facturation dès le départ, au lieu de l'ajouter plus tard. Découvrez notre [service de systèmes de gestion](/services/business-systems) et notre page [Arabie saoudite](/saudi-arabia) ; nous travaillons avec des entreprises en Égypte et dans le Golfe.

## Questions fréquentes

### Le système doit-il être en ligne ou installé sur les ordinateurs de la clinique ?

Un système en ligne fonctionne depuis chaque site et chaque appareil, et les sauvegardes sont gérées pour vous. Un système installé continue de fonctionner quand Internet coupe. Beaucoup de cliniques veulent les deux : en ligne, mais capable de continuer les rendez-vous et la facturation pendant une coupure.

### Une petite clinique a-t-elle besoin de la phase 2 ZATCA ?

Seulement si elle est assujettie à la TVA et que la ZATCA a annoncé sa vague. La vague 25 couvre un chiffre d'affaires taxable supérieur à 187 500 SAR sur une année entre 2022 et 2025, avec une intégration avant le 1er février 2027. La ZATCA annonce chaque vague au moins six mois à l'avance.

### Un même système peut-il gérer un cabinet dentaire et une clinique générale ?

Oui, si chaque spécialité a ses propres modèles. Le dentiste a besoin du schéma dentaire et des plans de traitement par étapes, le généraliste des notes de consultation et des ordonnances, le tout dans un seul dossier patient.

### Pouvons-nous transférer nos anciens dossiers dans le nouveau système ?

En général oui, s'ils sont dans Excel ou dans un autre système. Les dossiers papier peuvent être scannés et rattachés à chaque patient, puis saisis complètement à mesure que les patients reviennent.

### Le patient doit-il installer une application ?

Non. Une page de réservation et WhatsApp touchent plus de monde. Une application se justifie pour les cliniques aux visites fréquentes, comme la kinésithérapie ou les longs traitements dentaires. Les pharmacies rattachées aux cliniques ont leurs propres besoins, traités dans notre [guide des logiciels de pharmacie](/blog/pharmacy-management-system-egypt).

Vous préparez un logiciel de clinique en Arabie saoudite ? [Décrivez-nous le fonctionnement de votre clinique](/contact) ou [réservez un appel gratuit](/book), et nous vous proposerons par quoi commencer.

## Sources

- [Qu'est-ce que la facturation électronique, ZATCA](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [Phases de déploiement de la facturation électronique, ZATCA](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [Vague 25 de l'intégration, ZATCA](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [Guide détaillé de la facturation électronique, ZATCA](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [Annuaire des fournisseurs de solutions, ZATCA](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [Protection des données en Arabie saoudite, DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Projet d'amendements de la PDPL par la SDAIA, Clyde & Co](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [Accès à la région Google Cloud de Dammam](https://docs.cloud.google.com/docs/dammam-region-access)
- [Région cloud AWS en Arabie saoudite, Amazon](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
