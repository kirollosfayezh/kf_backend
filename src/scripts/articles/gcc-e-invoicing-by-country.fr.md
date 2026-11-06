---
title: Facture électronique dans le Golfe : où en est chaque pays
summary: L'Arabie saoudite applique déjà, les Émirats et Oman en 2027, aucune obligation au Qatar, à Bahreïn ou au Koweït. Dates, modèles et besoins de votre caisse.
tags: facture électronique, CCG, Arabie saoudite, Émirats arabes unis, Oman, TVA, logiciel de caisse
alt: Deux tours incurvées sur le front de mer de Lusail, au Qatar, sous un ciel bleu parsemé de nuages
caption: Chaque État du Golfe fixe son propre calendrier de facturation électronique : un système vendu dans toute la région doit tous les suivre.
stats: 3|pays du Golfe avec une facture électronique en vigueur ou datée; 24 h|pour déclarer une facture simplifiée en Arabie saoudite; 1er janv. 2027|premier départ aux Émirats, chiffre d'affaires dès 50 M AED
---

L'Arabie saoudite est le seul pays du Golfe où la facture électronique
s'applique déjà : l'administration fiscale ZATCA fait passer les entreprises à
la phase 2 par vagues, et la vague 25 doit être intégrée au plus tard le
1er février 2027. Les Émirats arabes unis démarrent le 1er janvier 2027 pour les
entreprises dont le chiffre d'affaires atteint 50 millions d'AED, et Oman le
1er avril 2027 pour celles qui dépassent 5 millions d'OMR. Le Qatar n'a qu'un
projet de loi, Bahreïn n'a annoncé aucune date, et nous n'avons trouvé aucune
obligation au Koweït.

Dernière vérification : 6 novembre 2026

Ce guide réunit tous les pays dans un seul tableau, explique chaque système en
termes simples et indique ce qu'un même logiciel de caisse ou ERP doit gérer si
vous vendez dans plusieurs d'entre eux. Il s'agit d'informations générales, et
non d'un conseil fiscal ou juridique. Vérifiez vos propres obligations auprès
de l'administration fiscale ou d'un conseiller fiscal.

## Le Golfe en un coup d'œil

| Pays | TVA | Statut de la facture électronique, nov. 2026 | Dates clés | Circuit de la facture |
|---|---|---|---|---|
| Arabie saoudite | 15 % | En vigueur, par vagues | Vague 25 au plus tard le 1er févr. 2027 | Directement vers la plateforme FATOORA de la ZATCA |
| Émirats arabes unis | 5 % | Pilote et usage volontaire depuis le 1er juil. 2026 | 1er janv. 2027 (CA dès 50 M AED), 1er juil. 2027 (autres), 1er oct. 2027 (administrations) | Via un prestataire accrédité (ASP) |
| Oman | 5 % | Pilote volontaire depuis août 2026 | 1er avr. 2027 (plus de 5 M OMR), 1er oct. 2027 (autres) | Via un prestataire accrédité par l'OTA |
| Qatar | Aucune | Projet de loi approuvé en Conseil des ministres le 6 mai 2026, non en vigueur | Aucune date | Pas encore défini |
| Bahreïn | 10 % | Attendue | Aucune date officielle | Pas encore défini |
| Koweït | Aucune | Aucune obligation trouvée | Aucune | Sans objet |

Deux logiques se dégagent. L'Arabie saoudite utilise un modèle centralisé : votre
système échange directement avec l'administration fiscale. Les Émirats et Oman
utilisent un modèle à cinq coins : votre système envoie la facture à un
prestataire accrédité, qui la transmet au prestataire de l'acheteur et déclare
les données fiscales. Votre logiciel doit s'adapter au modèle de chaque pays où
vous émettez des factures.

## Arabie saoudite : en vigueur, vague après vague

Depuis 2023, la ZATCA fait passer les entreprises immatriculées à la TVA à la
phase 2 (intégration) par vagues, en commençant par les plus grandes. La
vague 25 concerne les entreprises dont le chiffre d'affaires taxable a dépassé
187 500 SAR au cours d'une année entre 2022 et 2025 ; elles doivent être
intégrées à FATOORA au plus tard le 1er février 2027.

Ce que la phase 2 exige de votre logiciel de facturation est concret :

- **Un XML structuré.** Les factures suivent la structure UBL 2.1. Tout ce qui est envoyé à la ZATCA l'est en XML via une API.
- **Un appareil ou système enregistré.** Chaque unité de facturation est enregistrée sur FATOORA et reçoit un identifiant de cachet cryptographique (CSID).
- **Le dédouanement des factures fiscales.** Le plus souvent en B2B : la ZATCA valide et cachète la facture avant qu'elle parte chez l'acheteur.
- **La déclaration des factures simplifiées.** Le plus souvent en B2C, comme un ticket de caisse : votre système la cachète, imprime un QR code et la déclare à FATOORA dans les 24 heures.
- **La protection contre la falsification.** Chaque facture porte un UUID et le hachage de la facture précédente, ce qui forme une chaîne continue.
- **L'arabe.** Les factures doivent être émises en arabe.

Le délai de 24 heures compte pour les commerces et les restaurants : la caisse
peut continuer à vendre pendant une courte coupure d'internet, à condition que
chaque ticket parvienne à FATOORA dans les 24 heures suivant son émission. La ZATCA publie aussi un
annuaire de prestataires de solutions, mais précise qu'y figurer ne vaut pas
approbation. Méfiez-vous donc de toute mention « approuvé par la ZATCA ».

## Émirats arabes unis : B2B et B2G dès 2027, via un ASP

Le système émirien couvre les factures entre entreprises et celles adressées à
l'administration. Les factures aux particuliers sont exclues pour l'instant,
jusqu'à une décision ministérielle ultérieure. Un pilote avec des entreprises
volontaires a démarré le 1er juillet 2026 ; il ne s'agissait pas d'une
obligation.

Les dates obligatoires découlent de la décision ministérielle 244 de 2025,
telle que modifiée :

| Groupe | Désigner un ASP avant le | Démarrage |
|---|---|---|
| CA dès 50 M AED | 30 oct. 2026 | 1er janv. 2027 |
| CA inférieur à 50 M AED | 31 mars 2027 | 1er juil. 2027 |
| Administrations | 31 mars 2027 | 1er oct. 2027 |

Le 10 mai 2026, le ministère des Finances a reporté au 30 octobre 2026 la date
limite de désignation d'un ASP pour le premier groupe, sans changer le
démarrage du 1er janvier 2027.

Le vendeur comme l'acheteur désignent chacun un ASP. Votre ERP ou votre caisse
envoie les données de facture au format émirien, appelé PINT AE, à votre ASP.
Celui-ci les valide, les remet à l'ASP de l'acheteur et déclare les données
fiscales. Un PDF, un fichier Word ou un scan envoyé par e-mail n'est pas une
facture électronique dans ce système.

## Oman : Fawtara dès avril 2027, B2C compris

La décision 189/2026, annoncée en août 2026, fixe les dates : le 1er avril 2027
pour les entreprises dont les livraisons annuelles dépassent 5 millions d'OMR,
et le 1er octobre 2027 pour toutes les autres. Un pilote volontaire a démarré
en août 2026.

Les factures doivent être au format XML approuvé, émises par un système relié à
un prestataire accrédité par l'administration fiscale (OTA), selon un modèle à
cinq coins fondé sur Peppol. Contrairement aux Émirats, Oman inclut le B2C dès
le départ. Les règles techniques détaillées, comme les délais de déclaration et
le QR code, relèvent de l'administration fiscale : vérifiez ses consignes à jour
avant de développer.

## Qatar, Bahreïn et Koweït : suivre, sans développer pour l'instant

- **Le Qatar** n'applique pas de TVA. Le 6 mai 2026, le Conseil des ministres a approuvé un projet de loi sur la facture électronique et son règlement d'application. Nous n'avons trouvé aucune preuve de son entrée en vigueur, ni aucune date. Rien ne s'applique encore aux factures qataries.
- **Bahreïn** applique une TVA de 10 % depuis le 1er janvier 2022. La facture électronique est attendue, et PwC indique que le marché s'attend à un cadre proche du modèle saoudien, mais aucune date officielle n'a été annoncée.
- **Le Koweït** n'applique pas de TVA, et nous n'avons trouvé aucune obligation de facture électronique.

Pour ces trois pays, l'approche raisonnable consiste à garder des données de
facturation propres et structurées et à suivre les annonces de l'administration
fiscale, plutôt que de payer une intégration dont les règles ne sont pas
publiées.

## Ce qu'un logiciel de caisse ou ERP doit gérer dans la région

Si vous vendez dans plusieurs pays du Golfe, ou comptez le faire, les règles
diffèrent mais la base reste la même. Avant de choisir ou de refaire un système,
vérifiez qu'il sait :

1. **Enregistrer chaque facture sous forme de données structurées.** Numéro fiscal du client, lignes, TVA par ligne, totaux et devise dans des champs, pas seulement dans une mise en page imprimée.
2. **Tenir un profil distinct par pays.** Chaque pays a son taux de TVA, son numéro fiscal, sa devise et son format de facture ; une succursale à Riyad et une à Dubaï ont besoin de réglages différents dans le même système.
3. **Séparer le B2B du B2C.** L'Arabie saoudite les traite différemment, les Émirats excluent le B2C pour l'instant, Oman inclut les deux.
4. **Brancher plusieurs connecteurs.** Une connexion directe à la ZATCA pour l'Arabie saoudite, et un lien vers le prestataire que vous désignez aux Émirats ou à Oman.
5. **Continuer à vendre hors ligne.** Mettre les factures en file d'attente locale et les envoyer au retour de la connexion, dans le délai de chaque pays.
6. **Verrouiller les factures émises.** Les corrections passent par des avoirs et des notes de débit, jamais par la modification ou la suppression d'une facture.
7. **Imprimer des factures en arabe ou bilingues**, avec un QR code là où le pays l'exige.
8. **Tenir un journal des erreurs** indiquant quelles factures ont été rejetées et pourquoi, pour les corriger le jour même.

Un système conçu ainsi n'a besoin que d'un nouveau connecteur et d'un nouveau
profil quand le pays suivant démarre, pas d'une refonte. Un système qui se
contente d'imprimer un PDF devra être remplacé en Arabie saoudite, aux Émirats
comme à Oman. Si vous hésitez entre un progiciel et un développement sur mesure,
notre article [une petite entreprise a-t-elle besoin d'un ERP ?](/blog/erp-for-small-business-egypt)
présente les arbitrages.

## Ce que fait KF Tech Solutions

Nous avons intégré un logiciel de caisse au système de reçus électroniques de
l'administration fiscale égyptienne (ETA), qui repose sur les mêmes principes :
données de facture structurées, identifiants uniques et transmission à une
administration fiscale. Vous pouvez lire comment cela fonctionne dans
[connecter votre caisse à la facture électronique ETA en Égypte](/blog/eta-e-invoicing-pos-integration).
Nous travaillons avec des entreprises en Égypte et dans le Golfe, et
développons des [logiciels de caisse et ERP sur mesure](/services/business-systems)
dont les données de facture sont structurées pour les pays où vous vendez. Nous
ne sommes pas prestataire accrédité aux Émirats ni à Oman, et nous ne détenons
aucune approbation de la ZATCA ; dans ces pays, la transmission passe par le
prestataire ou la plateforme qu'imposent les règles. Consultez notre
[page Golfe](/gulf) pour voir comment nous travaillons avec les clients de la
région, ainsi que
[ce qu'il faut vérifier avant de confier un projet à une société égyptienne](/blog/hire-egyptian-software-company-from-gulf).

## Questions fréquentes

### La facture électronique est-elle obligatoire dans tout le Golfe ?

Non. Elle s'applique en Arabie saoudite, et des dates obligatoires sont fixées
aux Émirats (à partir du 1er janvier 2027) et à Oman (à partir du
1er avril 2027). Le Qatar a un projet de loi qui n'est pas en vigueur, Bahreïn
n'a pas de date officielle, et nous n'avons trouvé aucune obligation au Koweït.

### Une facture PDF compte-t-elle comme facture électronique ?

Pas en Arabie saoudite, aux Émirats ni à Oman. Les trois exigent des données
structurées (XML) qui passent par la ZATCA ou par un prestataire accrédité. Un
PDF peut rester la copie que voit le client, mais ce n'est pas la facture que le
système reconnaît.

### Les commerces aux Émirats devront-ils envoyer leurs tickets à un ASP en 2027 ?

Pas selon les règles actuelles. Le système émirien couvre les factures B2B et
B2G, et le B2C est exclu jusqu'à une décision ministérielle ultérieure. Un
commerce qui facture aussi d'autres entreprises doit toutefois traiter ces
factures via un ASP.

### Un seul système peut-il couvrir l'Arabie saoudite et les Émirats ?

Oui, s'il enregistre les factures sous forme de données structurées, tient un
profil par pays et prend en charge à la fois une connexion directe à la ZATCA et
un lien vers un ASP. Demandez à tout fournisseur de vous montrer les deux en
fonctionnement, pas seulement de les décrire.

### Faut-il se préparer dès maintenant pour le Qatar, Bahreïn ou le Koweït ?

Gardez vos données de facturation structurées et les informations fiscales de
vos clients complètes, ce qui sert partout. Une intégration spécifique n'a de
sens qu'une fois les règles techniques et les dates publiées par
l'administration fiscale.

Si vous souhaitez faire vérifier votre caisse ou votre ERP pour les pays où vous
vendez, ou s'il vous faut un système conçu pour eux,
[réservez un appel gratuit](/book) ou [envoyez-nous les détails](/contact).
Nous vous dirons ce qui s'applique et ce qu'il faudrait faire.

## Sources

- [ZATCA : avis d'intégration de la vague 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA : norme de mise en œuvre XML de la facture électronique](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA : annuaire des prestataires de solutions](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [Ministère des Finances des Émirats : décision ministérielle n° 244 de 2025](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Ministère des Finances des Émirats : modifications des décisions sur la facture électronique, 10 mai 2026](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [Administration fiscale d'Oman : FAQ Fawtara](https://tms.taxoman.gov.om/portal/documents/d/taxportal/faq-s)
- [Oman Observer : décision 189/2026 sur les factures fiscales électroniques](https://www.omanobserver.om/article/1194193/business/decision-issued-on-tax-invoices-in-electronic-format)
- [Qatar News Agency : Conseil des ministres du 6 mai 2026](https://qna.org.qa/en/news/news-details?id=cabinet-holds-regular-meeting&date=6%2F05%2F2026)
- [PwC Tax Summaries : Qatar, autres impôts](https://taxsummaries.pwc.com/qatar/corporate/other-taxes)
- [PwC Tax Summaries : Bahreïn, autres impôts](https://taxsummaries.pwc.com/bahrain/corporate/other-taxes)
- [PwC Tax Summaries : Koweït, autres impôts](https://taxsummaries.pwc.com/kuwait/corporate/other-taxes)
- [PwC Tax Summaries : Oman, autres impôts](https://taxsummaries.pwc.com/oman/corporate/other-taxes)
