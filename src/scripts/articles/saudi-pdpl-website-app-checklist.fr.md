---
title: PDPL saoudienne pour sites et applications : la checklist technique
summary: Ce que la loi saoudienne sur les données personnelles exige de votre site ou appli : consentement, sobriété, journaux d'accès, alerte en 72 h, hébergement.
tags: PDPL, protection des données, vie privée, localisation des données, SDAIA, Arabie saoudite
alt: Une femme portant un foulard regarde le smartphone qu’elle tient entre ses mains
caption: Avec la PDPL saoudienne, la confidentialité se code : consentements tracés, données minimales, journaux d’accès, alerte en 72 h.
stats: 72|heures pour notifier une violation de données à la SDAIA; 5 M SAR|amende maximale, pouvant être doublée en cas de récidive; 48|décisions formelles de violation rendues par les comités de la SDAIA
---

La loi saoudienne sur la protection des données personnelles (PDPL) s'applique pleinement depuis le 14 septembre 2024, et elle vise non seulement les entreprises saoudiennes, mais aussi les prestataires étrangers qui servent des personnes dans le Royaume. Pour un site ou une application, la conformité se traduit par des choses que le système doit réellement faire : dire ce que vous collectez, enregistrer le consentement, ne garder que le nécessaire, journaliser qui consulte les données, notifier les violations à la SDAIA sous 72 heures et maîtriser où partent les données. Ce guide transforme ces obligations en checklist technique. Il s'agit d'une information générale, pas d'un conseil juridique.

Dernière vérification : 6 novembre 2026

## Ce qu'est la loi et qui elle concerne

La PDPL a été promulguée par le décret royal M/19 en septembre 2021 et modifiée par le décret royal M/148 en mars 2023. Elle est entrée en vigueur le 14 septembre 2023, avec une période de grâce d'un an qui a pris fin le 14 septembre 2024. L'autorité compétente est la Saudi Data and AI Authority (SDAIA).

Trois points comptent surtout pour un dirigeant :

- **Elle vise les prestataires étrangers.** La loi s'applique aux prestataires situés hors du Royaume qui servent des personnes en Arabie saoudite ; une plateforme développée ou hébergée à l'étranger n'échappe donc pas à son champ.
- **Elle est appliquée.** Les comités de la SDAIA ont déjà rendu 48 décisions formelles de violation.
- **Les sanctions sont lourdes.** Les amendes vont jusqu'à 5 millions de SAR, et un tribunal peut les doubler en cas de récidive. Divulguer des données sensibles dans l'intention de nuire peut entraîner jusqu'à deux ans de prison et/ou une amende allant jusqu'à 3 millions de SAR.

La loi fait peser l'essentiel des obligations sur le « responsable du traitement » : l'entreprise qui décide pourquoi et comment les données personnelles sont traitées. Si vous exploitez le site ou l'application, c'est en général vous, et non votre développeur ou votre hébergeur. Le rôle du développeur est de construire un système qui vous permet de remplir ces obligations.

## La checklist en un coup d'œil

| Domaine | Ce que le système doit faire | Pourquoi c'est important |
|---|---|---|
| Politique de confidentialité | Expliquer en arabe et en anglais ce que vous collectez, pourquoi, qui le reçoit et comment vous joindre | Les personnes doivent savoir à quoi elles consentent avant de fournir leurs données |
| Preuves de consentement | Enregistrer qui a consenti à quoi, quand, et sur quelle version de la politique | Vous pouvez prouver le consentement au lieu de le supposer |
| Minimisation | Ne collecter que les champs réellement utilisés | Moins de données, c'est moins à protéger et moins à perdre |
| Contrôle des accès | Donner à chaque rôle uniquement les données dont il a besoin | Limite les dégâts d'un seul mot de passe divulgué |
| Journaux d'accès | Enregistrer qui a consulté, modifié, exporté ou supprimé des données personnelles | Vous pouvez enquêter sur un incident et répondre aux questions |
| Procédure de violation | Un plan écrit pour évaluer un incident et notifier la SDAIA sous 72 heures | Le délai est court, le plan doit exister avant l'incident |
| Transferts à l'étranger | La liste de chaque service externe qui reçoit des données et du lieu où il les stocke | Un transfert exige un pays au niveau de protection adéquat ou des garanties appropriées |
| Enregistrement | Vérifier si vous devez vous inscrire sur la National Data Governance Platform | En pratique, cela concerne la plupart des responsables |

## Collecte : information, consentement et sobriété

La plupart des données personnelles entrent par des formulaires (inscription, paiement, réservation, contact) : commencez par là.

- **Rédigez une politique de confidentialité lisible.** En arabe et en anglais clairs, sur une page dédiée, liée depuis chaque formulaire qui collecte des données personnelles, indiquant ce que vous collectez, pourquoi, quels services externes le reçoivent, combien de temps vous le conservez et comment vous joindre.
- **Versionnez la politique.** À chaque modification, conservez l'ancien texte daté, car une preuve de consentement ne sert que si vous pouvez montrer ce que la personne a vu.
- **Enregistrez le consentement comme une donnée, pas comme une simple case cochée.** Identifiant de l'utilisateur ou du contact, objet du consentement, version de la politique, date et heure, et canal (site, application ou WhatsApp).
- **Séparez les finalités.** Le consentement aux messages marketing doit être distinct des données nécessaires pour livrer une commande ou une réservation.
- **Rendez le retrait aussi simple que l'accord.** Un lien de désinscription ou un réglage du compte qui met à jour la même preuve de consentement.
- **Supprimez les champs inutiles.** Un numéro d'identité ou une date de naissance collectés « au cas où » sont des données à protéger, à expliquer et un jour à effacer.
- **Traitez avec un soin particulier les données de santé, financières et d'identité.** Ce sont les catégories où une fuite fait le plus de dégâts.

Dans un logiciel de clinique, par exemple, les dossiers des patients doivent être visibles par bien moins de personnes que l'agenda ; voir notre guide sur les [logiciels de gestion de clinique](/blog/clinic-management-system-egypt).

## Dans le système : accès, journaux et suppression

Le reste de la checklist se trouve dans le tableau de bord d'administration et la base de données.

### Rôles et permissions

Chaque membre du personnel doit se connecter avec son propre compte, jamais un compte partagé, et ne voir que ce que son poste exige. Un caissier a besoin du nom du client et de sa commande, un assistant marketing peut avoir besoin d'une liste d'e-mails mais pas de l'historique des commandes, et très peu de personnes ont besoin d'exporter toute la base clients. Activez la connexion à deux facteurs sur tous les comptes administrateurs.

### Journaux d'accès

Journalisez qui a consulté, modifié, exporté ou supprimé des fiches personnelles, avec l'horodatage et la fiche concernée. Stockez le journal là où les administrateurs ordinaires ne peuvent pas le modifier. Sans lui, impossible de savoir après un incident quelles données ont été vues, et par qui.

### Retrouver, exporter et supprimer les données d'une personne

Tôt ou tard, un client demandera ce que vous détenez sur lui, ou demandera une rectification ou une suppression. Prévoyez un moyen de retrouver tout ce qui concerne une personne (commandes, messages, réservations et fichiers), de l'exporter, de le corriger et de le supprimer ou de l'anonymiser, y compris les copies dans les outils externes.

### Conservation

Fixez une durée de conservation pour chaque type de données et laissez le système l'appliquer, afin que les anciens prospects, paniers abandonnés et candidatures expirées ne restent pas indéfiniment en base. Certains documents ont des durées de conservation légales : confirmez-les d'abord avec votre conseiller.

## La procédure de violation en 72 heures

La PDPL impose de notifier les violations de données personnelles à la SDAIA sous 72 heures. Un projet d'amendements publié en octobre 2026 rendrait cette notification obligatoire quel que soit le préjudice probable ; l'hypothèse technique la plus sûre est donc que toute violation réelle devra être déclarée.

Soixante-douze heures, c'est court quand un week-end s'intercale. Préparez-vous à l'avance :

1. **Détecter.** Des alertes sur les connexions inhabituelles, les exports massifs et les erreurs répétées sur les pages d'administration.
2. **Contenir.** Savoir révoquer une clé divulguée, forcer la réinitialisation des mots de passe et désactiver une fonctionnalité.
3. **Évaluer.** Utiliser les journaux d'accès pour établir quelles données, combien de personnes et depuis quand.
4. **Décider et notifier.** Désigner qui décide, qui rédige la notification à la SDAIA et qui informe les clients concernés si nécessaire.
5. **Documenter et corriger.** Garder une trace écrite de l'incident, de sa cause et de la correction apportée.

Désignez une personne pour chaque étape et vérifiez que votre contrat oblige le développeur à vous signaler sans délai tout incident qu'il découvre.

## Transferts à l'étranger et hébergement

### Ce que dit la loi actuelle

Les transferts hors du Royaume sont autorisés vers des pays offrant un niveau de protection adéquat, et à défaut moyennant des garanties appropriées. Dans les deux cas, seules les données strictement nécessaires doivent être transférées. Le règlement actualisé sur les transferts date du 1er août 2024, et les lignes directrices de la SDAIA sur les Binding Common Rules du 1er septembre 2024.

Le serveur principal n'est qu'un transfert parmi d'autres. Listez chaque service externe qui reçoit des données personnelles : hébergement, base de données, sauvegardes, e-mail, SMS, WhatsApp, statistiques, chat en direct, passerelle de paiement et suivi des erreurs. Pour chacun, notez les données reçues et le pays de stockage. Cette liste alimente l'analyse de votre conseiller et votre politique de confidentialité.

### Le projet qui imposerait un stockage dans le Royaume

La SDAIA a soumis un projet d'amendements à la PDPL à consultation publique sur la plateforme Istitlaa du 6 octobre au 5 novembre 2026. Les principales propositions :

- Un nouvel article 23 obligeant les responsables à stocker les données personnelles dans le Royaume, les transferts restant possibles dans le cadre de la loi.
- Un enregistrement obligatoire pour tout responsable qui transfère des données à l'étranger.
- Une notification des violations sous 72 heures quel que soit le préjudice probable.

Ce n'est encore qu'un projet. S'il est adopté, les modifications entreront en vigueur 60 jours après leur publication au Journal officiel, et nous n'avons pas pu confirmer l'issue de la consultation lors de la vérification de cette page. Ne dites pas à vos clients que le droit saoudien impose déjà un stockage local, mais tenez compte du projet en choisissant l'hébergement d'un système appelé à fonctionner des années.

### Options d'hébergement en Arabie saoudite

- **Google Cloud Dammam (me-central2).** Les clients établis en Arabie saoudite achètent l'accès via CNTXT ; les autres doivent passer par une facturation sur facture.
- **AWS.** Amazon indique que sa première région saoudienne est « on track to launch in December 2026 » ; vérifiez qu'elle est lancée avant de bâtir votre plan dessus.

Les Essential Cybersecurity Controls (ECC-2:2024) de la National Cybersecurity Authority s'imposent aux administrations et aux opérateurs d'infrastructures nationales critiques ; les autres entreprises sont seulement fortement encouragées à les suivre. La version de 2024 a supprimé l'ancien contrôle qui imposait l'hébergement dans le Royaume et a renvoyé la localisation des données au National Data Management Office de la SDAIA.

## Enregistrement, contrats et répartition des rôles

**Enregistrement.** Certains responsables doivent s'inscrire sur la National Data Governance Platform de la SDAIA, ce qui, en pratique, concerne la plupart d'entre eux. Un délégué à la protection des données est requis dans des cas déterminés. Demandez à votre conseiller ce qui s'applique à vous : l'enregistrement est une tâche de gestion, pas de développement.

**Contrats avec votre développeur et vos fournisseurs.** Ceux qui construisent ou exploitent votre système voient souvent des données personnelles. Pour les administrations et les infrastructures critiques, le contrôle ECC 4-1-2 fixe les clauses minimales : confidentialité, suppression sécurisée de vos données en fin de service, procédure de signalement des incidents de cybersécurité et obligation d'appliquer vos exigences de sécurité. Ces clauses sont utiles à toute entreprise. Notre article sur [ce qu'il faut vérifier dans un contrat de développement logiciel](/blog/software-development-contract-what-to-check) couvre le reste, et [comment choisir une société de logiciels en Arabie saoudite](/blog/choose-software-company-saudi-arabia) liste les questions à poser avant de signer.

**Ce que fait KF.** KF Tech Solutions conçoit des sites, des applications et des [logiciels sur mesure](/services/custom-software), et nous travaillons avec des entreprises en Égypte et dans le Golfe. Sur un système qui traite des données personnelles, nous pouvons intégrer cette checklist au produit : politiques de confidentialité versionnées, preuves de consentement, accès par rôle, journaux d'accès, outils d'export et de suppression, et une liste écrite de chaque service qui reçoit des données et de son lieu d'hébergement. Nous ne sommes pas juristes et ne délivrons pas de certificat de conformité. Votre conseiller confirme ce que la loi exige de votre entreprise, et nous construisons en conséquence. Voir notre [page Arabie saoudite](/saudi-arabia), et notre guide sur le [coût du développement d'une application en Arabie saoudite](/blog/app-development-cost-saudi-arabia) si vous budgétez une nouvelle appli.

## Questions fréquentes

### La PDPL s'applique-t-elle si mon entreprise ou mon développeur est hors d'Arabie saoudite ?

Oui, c'est possible. La loi s'applique aux prestataires étrangers qui servent des personnes dans le Royaume. Ce qui compte, ce sont les personnes dont vous traitez les données, pas l'emplacement de vos serveurs ou de votre développeur.

### Dois-je héberger les données personnelles en Arabie saoudite ?

Pas selon la loi telle que la résument les sources que nous avons consultées, qui autorisent les transferts vers des pays adéquats ou moyennant des garanties appropriées. Un projet d'amendement imposerait le stockage dans le Royaume, mais ce n'est encore qu'un projet. Les projets publics ou d'infrastructures critiques peuvent avoir leurs propres exigences : vérifiez votre cas avec votre conseiller.

### Dois-je m'enregistrer auprès de la SDAIA ?

Certains responsables doivent s'inscrire sur la National Data Governance Platform, ce qui en pratique couvre la plupart d'entre eux. Le projet d'amendements rendrait l'enregistrement obligatoire pour tout responsable qui transfère des données à l'étranger. Votre conseiller peut confirmer votre situation.

### Mon développeur peut-il me délivrer un certificat PDPL ?

Nous n'avons trouvé aucune certification PDPL officielle pour les éditeurs de logiciels. Demandez plutôt comment il construit les preuves de consentement, les journaux et la suppression. La conformité de votre entreprise est une question à traiter avec votre conseiller.

Si vous souhaitez faire vérifier votre site ou votre application à l'aide de cette liste, ou le construire ainsi dès le départ, [envoyez-nous les détails](/contact) ou [réservez un appel gratuit](/book).

## Sources

- [DLA Piper : Data protection laws of the world, Saudi Arabia](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Securiti : Saudi Arabia guidelines for Binding Common Rules](https://securiti.ai/saudi-arabia-guidelines-for-binding-common-rules-bcr-for-personal-data-transfer/)
- [Chambers TMT 2026 : Saudi Arabia, trends and developments](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Clyde & Co : SDAIA publishes draft amendments to the PDPL](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [National Cybersecurity Authority : Essential Cybersecurity Controls (ECC-2:2024)](https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf)
- [Google Cloud : Dammam region access](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon : AWS cloud region in Saudi Arabia](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
