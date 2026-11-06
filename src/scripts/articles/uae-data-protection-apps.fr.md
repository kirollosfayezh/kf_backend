---
title: Protection des données aux EAU pour les apps : PDPL, DIFC et ADGM
summary: Quel régime de protection des données s'applique à votre app aux EAU, ce qui est acquis sous la PDPL, le DIFC et l'ADGM, et une checklist pour les trois.
tags: EAU, protection des données, PDPL, DIFC, ADGM, vie privée, développement d'applications
alt: Un smartphone posé sur une surface jaune, un cadenas blanc sur son écran violet
caption: Aux Émirats, l’adresse fixe les règles : PDPL fédérale, DIFC et ADGM ont chacun leur propre cadre de protection des données.
stats: 3|régimes de protection des données : continent, DIFC et ADGM; 2022|année d'entrée en vigueur de la PDPL fédérale; 1|cartographie des données que toute app doit tenir, quelle que soit la loi
---

Si votre application collecte des données personnelles aux Émirats arabes unis, l'un de trois régimes s'applique généralement : la loi fédérale sur la protection des données personnelles (PDPL, décret-loi fédéral n° 45 de 2021) sur le territoire continental, la loi DIFC n° 5 de 2020 au sein du Dubai International Financial Centre, ou les ADGM Data Protection Regulations 2021 au sein de l'Abu Dhabi Global Market. Les données de paiement et de santé sont en outre soumises à des règles sectorielles. Une application bien conçue peut fonctionner sous les trois régimes, à condition que le consentement, les accès, la suppression et la journalisation soient prévus dès le départ.

Dernière vérification : 6 novembre 2026

Cet article est une information générale, pas un conseil juridique. Les règles évoluent encore : faites valider votre situation par un avocat habilité aux EAU avant le lancement.

## Quelle loi s'applique à votre application

La première question est le lieu d'établissement de votre entreprise, pas celui de vos serveurs.

- **Entreprise sur le territoire continental :** la PDPL. Elle s'applique depuis le 2 janvier 2022 et couvre le territoire continental, mais ni le DIFC ni l'ADGM.
- **Entité du DIFC :** la loi DIFC n° 5 de 2020, sous la supervision du Commissioner of Data Protection du DIFC.
- **Entité de l'ADGM :** les ADGM Data Protection Regulations 2021, sous la supervision de l'Office of Data Protection de l'ADGM.
- **Entreprise d'une autre zone franche :** demandez à votre conseil quel régime couvre votre licence avant toute conception. Les entreprises des zones franches relèvent d'un cadre juridique différent de celui du continent : ne supposez rien.

Héberger à l'étranger ne vous fait pas sortir du champ d'application. Le portail officiel du gouvernement des EAU présente la PDPL comme applicable au traitement, qu'il ait lieu dans le pays ou à l'extérieur. Une application développée au Caire, hébergée en Europe et utilisée par des clients à Dubaï doit donc être conçue en tenant compte des règles émiriennes.

| | Continent | DIFC | ADGM |
|---|---|---|---|
| Loi | Décret-loi fédéral n° 45 de 2021 (PDPL) | Loi DIFC n° 5 de 2020 | ADGM Data Protection Regulations 2021 |
| Qui est concerné | Entreprises du continent | Entités du DIFC | Entités de l'ADGM |
| Autorité | UAE Data Office, en cours d'intégration à la nouvelle autorité de l'IA et des données | Commissioner of Data Protection | Office of Data Protection |

## La PDPL continentale : ce qui est acquis et ce qui ne l'est pas

Le portail officiel du gouvernement des EAU résume l'essentiel de la loi :

- **Le consentement est la règle.** Le traitement de données personnelles sans le consentement de la personne concernée est en principe interdit, avec des exceptions comme l'intérêt public et certaines procédures et certains droits juridiques.
- **Les personnes ont des droits sur leurs données**, notamment demander la correction de données inexactes et demander la limitation ou l'arrêt du traitement.
- **Les transferts hors du pays sont encadrés.** La loi fixe des exigences pour le transfert et le partage de données personnelles à l'étranger aux fins de traitement.
- **Il existe un régulateur et une voie de réclamation.** Le UAE Data Office a été créé comme régulateur fédéral des données, avec des dispositifs de traitement des plaintes.

Deux points restent ouverts :

- **Le règlement d'exécution.** Il doit préciser les détails, mais il n'avait pas été formellement publié en septembre 2026. Quiconque vous dit exactement ce qu'il exige fait une supposition.
- **Le régulateur lui-même.** Le 14 juin 2026, les EAU ont approuvé une nouvelle autorité de l'IA et des données, qui absorbe le UAE Data Office, l'AI Office et le secteur du gouvernement numérique de la TDRA. Les futures lignes directrices viendront probablement de cette nouvelle autorité.

La réponse pratique : construisez dès maintenant selon les principes de la loi, et gardez paramétrables, plutôt que figés dans le code, les éléments les plus susceptibles d'être précisés plus tard : le texte du consentement, les durées de conservation, la liste des pays vers lesquels vous transférez des données et les délais que votre équipe respecte lorsqu'une personne demande ses données.

## DIFC et ADGM : deux régimes distincts

Les deux zones franches financières ont leur propre loi sur la protection des données et leur propre autorité, distinctes de la PDPL fédérale. Si votre entreprise y est immatriculée, la PDPL n'est pas votre référence. Lisez les lignes directrices du Commissioner of Data Protection du DIFC ou de l'Office of Data Protection de l'ADGM (liens ci-dessous) et demandez à votre avocat de les appliquer à votre produit.

Pour ceux qui développent l'application, les différences se situent surtout autour du logiciel plutôt qu'à l'intérieur : les mentions que vous publiez, les registres que vous tenez, la relation avec le régulateur et la rapidité de vos réponses. Les briques techniques restent les mêmes.

Si une même application sert des entités de plusieurs zones, par exemple un groupe avec une société continentale et une entité au DIFC, alignez-la sur le réglage le plus strict et rendez les mentions et les durées de conservation paramétrables par entité.

## Données de paiement et de santé : des règles sectorielles en plus

Certains types de données relèvent de règles qui vont au-delà de la loi générale.

- **Paiements.** Selon la synthèse de DLA Piper sur les EAU, les prestataires de services de paiement doivent stocker les données personnelles et de paiement aux EAU. Si votre application accepte les paiements par carte, la voie habituelle consiste à confier les données de carte à une passerelle de paiement agréée, afin qu'elles n'atteignent jamais vos propres serveurs. Notre guide des [passerelles de paiement aux EAU](/blog/payment-gateways-uae) compare les options. Si vous construisez vous-même un service de paiement, c'est une question de licence et d'hébergement à soumettre à un avocat avant d'être une question de code.
- **Santé.** Les données de santé sont encadrées, et le portail du gouvernement cite, à côté de la PDPL, une loi fédérale distincte sur les TIC dans le domaine de la santé. Les applications de prise de rendez-vous médicaux, de télémédecine, de pharmacie et de dossiers patients ont besoin d'un avis précis sur le lieu de stockage des données et sur qui peut y accéder avant de choisir l'hébergement. Pour savoir ce qu'un logiciel de clinique contient, consultez notre guide sur les [logiciels de gestion de clinique](/blog/clinic-management-system-egypt).

Lorsqu'une règle impose que les données restent aux EAU, cela devient une décision d'hébergement : la base de données, les sauvegardes et tous les journaux contenant des données personnelles doivent s'y trouver. Demandez à votre développeur d'indiquer par écrit où chacun est hébergé.

## Une checklist de développement valable pour les trois régimes

Ces pratiques correspondent à des principes présents dans les trois régimes. Elles ne suffisent pas à vous mettre en conformité, mais elles donnent à votre avocat une base solide et vous évitent une refonte plus tard.

### Savoir ce que vous collectez

- Tenez une **cartographie des données** : chaque champ de données personnelles, pourquoi vous en avez besoin, où il est stocké, qui peut le voir et combien de temps vous le conservez.
- Collectez moins. Supprimez les champs inutiles, comme la date de naissance complète ou les copies de pièces d'identité gardées « au cas où ».
- Séparez les données de test des données réelles des clients.

### Consentement et information

- Enregistrez le consentement avec l'horodatage, la version du texte vue par la personne et ce qu'elle a accepté.
- Séparez le consentement marketing de celui du service lui-même, et rendez le retrait aussi simple que l'acceptation.
- Publiez une politique de confidentialité en arabe et en anglais, avec un lien à l'inscription et dans l'application.

### Demandes des personnes concernées

- Dotez votre espace d'administration d'outils pour exporter, corriger, limiter et supprimer les données d'une personne.
- Faites en sorte que la suppression atteigne aussi les services tiers, et purgez les sauvegardes selon un calendrier fixe.
- Consignez chaque demande et la date de réponse.

### Sécurité

- Des accès par rôle, pour que chaque employé ne voie que ce dont il a besoin.
- Le chiffrement des données en transit et au repos.
- Un journal d'audit indiquant qui a consulté, modifié ou exporté des données personnelles.
- Une connexion à deux facteurs pour les comptes administrateurs.

### Transferts et prestataires

- Listez chaque service externe qui reçoit des données personnelles : hébergement, e-mail, SMS, statistiques, rapports de plantage, API d'IA et fournisseurs de connexion.
- Notez où chacun traite les données. Votre avocat a besoin de cette liste pour évaluer les transferts hors du pays.
- Si vous ajoutez la [connexion avec UAE PASS](/blog/uae-pass-integration), les données d'identité vérifiées que vous recevez sont des données personnelles comme les autres et ont leur place dans la cartographie.

### Incidents

- Une surveillance et des alertes capables de révéler réellement une violation.
- Une procédure d'incident écrite : qui décide, qui est informé et dans quel ordre. Votre avocat complète les délais légaux propres à votre régime.

### Le contrat avec votre développeur

Exigez un accord de confidentialité, la restitution ou la suppression sécurisée de vos données à la fin du contrat, une procédure de notification des incidents et la cession complète du code source et de la propriété intellectuelle dans le contrat. Le droit d'auteur émirien fait de l'employeur, par défaut, le propriétaire des logiciels que ses salariés créent dans le cadre de leurs fonctions, sauf accord contraire. Cette règle vise les salariés, et la source que nous avons consultée ne traite pas des prestataires externes : inscrivez donc la cession par écrit. Notre liste de [points à vérifier dans un contrat de développement logiciel](/blog/software-development-contract-what-to-check) couvre le reste.

## Ce que fait KF Tech Solutions

Nous développons des [logiciels sur mesure](/services/custom-software), des applications web et des applications mobiles pour des entreprises en Égypte et dans le Golfe, y compris des systèmes pour cliniques et pharmacies. Sur un projet aux EAU, nous intégrons la checklist au produit : une cartographie des données dans le cahier des charges, des preuves de consentement, des accès par rôle avec journaux d'audit, des outils d'export et de suppression dans l'espace d'administration, et une liste écrite de chaque service externe avec son lieu d'hébergement. Nous hébergeons là où vous et votre conseil le décidez, et nous l'indiquons par écrit. Nous sommes des développeurs, pas des avocats : nous travaillons aux côtés de votre conseil juridique au lieu de certifier une conformité. Pour en savoir plus sur notre travail avec les entreprises émiriennes, consultez notre [page EAU](/uae).

## Questions fréquentes

### Le règlement d'exécution de la PDPL s'applique-t-il déjà ?

Il n'avait pas été formellement publié en septembre 2026. La loi elle-même s'applique depuis le 2 janvier 2022 : construisez donc dès maintenant selon ses principes et gardez les détails paramétrables.

### Mon application doit-elle stocker les données aux EAU ?

Cela dépend de votre secteur et de votre régime. Les règles sectorielles sont le cas le plus clair : les prestataires de services de paiement doivent stocker les données personnelles et de paiement aux EAU, et les données de santé sont encadrées. Pour les autres applications, la PDPL encadre les transferts hors du pays : demandez à votre avocat leur effet sur votre hébergement avant de le choisir.

### Nous sommes une entreprise du DIFC. La PDPL s'applique-t-elle à nous ?

La PDPL ne couvre ni le DIFC ni l'ADGM. Les entités du DIFC suivent la loi DIFC n° 5 de 2020, et celles de l'ADGM les ADGM Data Protection Regulations 2021.

### Un développeur hors des EAU peut-il créer une application conforme ?

Oui. Le lieu où le code est écrit compte moins que la façon dont l'application traite les données et le lieu d'hébergement. L'essentiel : le consentement, le contrôle des accès, la suppression, la journalisation, une liste des prestataires et un contrat clair.

### Une politique de confidentialité suffit-elle ?

Non. La politique décrit ce que vous faites ; l'application doit réellement le faire. Si une personne demande la correction de ses données ou l'arrêt du traitement, votre équipe a besoin d'un outil pour cela, pas d'une promesse sur une page web.

## Prochaine étape

Si vous préparez une application pour des clients aux EAU et souhaitez intégrer la protection des données dès le premier écran, [parlez-nous de votre projet](/contact) ou [réservez un appel gratuit](/book).

## Sources

- [Portail du gouvernement des EAU : lois sur la protection des données](https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws)
- [Legal 500 : l'autorité de l'IA et des données des EAU](https://www.legal500.com/intelligence/united-arab-emirates/strategy/the-uae-artificial-intelligence-and-data-authority-what-it-means-for-ai-data-and-digital-governance)
- [DLA Piper : lois sur la protection des données aux EAU](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
- [DIFC Commissioner of Data Protection](https://www.difc.com/business/registrars-and-commissioners/commissioner-of-data-protection)
- [ADGM Office of Data Protection : lignes directrices](https://www.adgm.com/operating-in-adgm/office-of-data-protection/guidance)
- [Portail du gouvernement des EAU : gérer une entreprise en zone franche](https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-)
- [Morgan Lewis : le droit d'auteur émirien et les logiciels](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2022/10/protecting-online-data-and-ip-new-copyright-law-provides-clarity-for-uae-businesses)
