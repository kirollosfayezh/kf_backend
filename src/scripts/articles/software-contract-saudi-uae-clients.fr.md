---
title: Contrat logiciel avec un client saoudien ou émirien : clauses en plus
summary: Ce qu’un client saoudien ou émirien ajoute à un contrat logiciel : données, cession de la PI, TVA et retenue à la source, texte arabe et droit applicable.
tags: contrat logiciel, cession de propriété intellectuelle, retenue à la source, TVA, Arabie saoudite, Émirats arabes unis, CCG
alt: Un homme en thobe blanc et shemagh rouge signe un document à côté d’un collègue en costume
caption: Un contrat saoudien ou émirien exige des clauses absentes d’un modèle standard : effacement des données, cession de PI, fiscalité.
stats: 5|domaines de clauses ajoutés par un contrat saoudien ou émirien; 5 %|retenue à la source saoudienne possible sur les services techniques; 1|version linguistique qui doit prévaloir
---

Un contrat de développement logiciel avec une entreprise d’Arabie saoudite ou des Émirats arabes unis doit contenir tout ce qu’exige un contrat ordinaire, plus cinq ajouts : des clauses sur les données inspirées des contrôles de cybersécurité saoudiens, une cession explicite du code source et de la propriété intellectuelle, une rédaction claire sur l’autoliquidation de la TVA et la retenue à la source saoudienne, une version arabe avec une clause indiquant quel texte prévaut, et un droit applicable ainsi qu’une juridiction désignés. Aucune de ces clauses n’est inhabituelle, mais chacune devient un litige lorsqu’elle manque. Il s’agit d’une information générale, et non d’un conseil juridique ou fiscal : faites relire le texte final par un avocat avant toute signature.

Dernière vérification : 6 novembre 2026

Cet article ne reprend pas les bases. La propriété du code, le défaut de paiement, les licences des composants tiers, la remise, la recette, la garantie, la résiliation et le personnel clé sont traités dans [neuf points à vérifier dans un contrat de développement logiciel](/blog/software-development-contract-what-to-check). Si vous choisissez encore votre prestataire, lisez d’abord [comment choisir une société de logiciels sans être technicien](/blog/how-to-choose-a-software-company).

Voici les clauses qu’un client en Arabie saoudite ou aux Émirats, ou un prestataire qui travaille pour lui, devrait ajouter. Elles comptent surtout lorsque le prestataire est à l’étranger, par exemple une équipe en Égypte qui travaille à distance, situation décrite dans [faire appel à une société de logiciels égyptienne depuis le Golfe](/blog/hire-egyptian-software-company-from-gulf).

## Données : confidentialité, suppression et notification des incidents

L’Autorité nationale de cybersécurité saoudienne (NCA) publie les Essential Cybersecurity Controls (ECC). Le contrôle 4-1-2 précise ce qu’un contrat avec un tiers doit contenir, et trois éléments servent directement dans un contrat logiciel :

- **Un accord de confidentialité** couvrant les données de votre entreprise, celles de vos clients et tout ce que le prestataire voit dans vos systèmes.
- **La restitution ou la suppression sécurisée de vos données** à la fin de la prestation, avec une confirmation écrite.
- **Une procédure de notification des incidents** : dans quel délai le prestataire vous informe d’une violation ou d’un soupçon de violation, qui il prévient et quelles informations il fournit.

À strictement parler, ces obligations pèsent sur les organismes publics et les opérateurs d’infrastructures critiques, et non sur toutes les entreprises privées. Elles restent une base raisonnable pour tout client, et un prestataire qui les refuse vous apprend quelque chose.

Les données personnelles ajoutent une seconde couche. La loi saoudienne sur la protection des données personnelles (PDPL) est pleinement applicable depuis le 14 septembre 2024. Des projets de modification, dont le stockage dans le Royaume, ont été soumis à consultation publique du 6 octobre au 5 novembre 2026 ; leur issue n’est pas encore connue, ne considérez donc pas le stockage dans le Royaume comme une obligation légale aujourd’hui. Aux Émirats, la loi fédérale sur la protection des données (Federal Decree-Law 45 of 2021) est en vigueur, mais ses règlements d’application n’ont pas été publiés. Les zones franches DIFC et ADGM ont leurs propres lois sur la protection des données.

Dans le contrat, les points pratiques sont simples :

- Indiquez où le système et sa base de données seront hébergés.
- Nommez les personnes du prestataire qui peuvent accéder aux données réelles des clients, et depuis où.
- Convenez que le développement et les tests utilisent des données fictives, sauf si les données réelles sont vraiment nécessaires.
- Obligez le prestataire à suivre vos instructions écrites concernant les données personnelles.

## Propriété intellectuelle et code source

Ne supposez pas que le code vous appartient parce que vous l’avez payé. La loi émirienne sur le droit d’auteur (Federal Decree-Law 38 of 2021) protège les logiciels et attribue à l’employeur les œuvres créées par ses salariés dans le cadre de leurs fonctions, sauf accord contraire. Cette règle vise les salariés. Une société externe ou un freelance n’est pas votre salarié, la cession doit donc figurer dans le contrat.

Une clause de propriété intellectuelle claire couvre :

- **La cession** de tous les droits sur le code sur mesure, les maquettes, la structure de la base de données et la documentation au client, généralement au paiement complet.
- **La remise du code source** : le dépôt complet, les instructions de compilation et les identifiants, pas seulement une application qui fonctionne.
- **Les composants tiers et open source**, qui vous sont concédés sous licence et non cédés, avec la liste des licences.
- **Les outils et bibliothèques existants du prestataire**, s’ils sont réutilisés, avec une licence permanente pour les utiliser dans votre système.
- **Des comptes à votre nom** : dépôt de code, hébergement, nom de domaine et comptes développeur sur les magasins d’applications, avec le prestataire ajouté comme utilisateur.

## Rédiger les clauses de TVA et de retenue à la source

Cette section est une information générale, et non un conseil fiscal : vérifiez votre situation avec votre comptable.

**TVA.** La TVA est de 15 % en Arabie saoudite et de 5 % aux Émirats. Lorsqu’une entreprise assujettie dans l’un de ces pays achète des services à un prestataire étranger, elle déclare normalement elle-même la TVA par autoliquidation ; la facture du prestataire étranger ne comporte donc ni TVA saoudienne ni TVA émirienne. Le contrat doit préciser que les prix s’entendent hors TVA et que le client déclare toute TVA due par autoliquidation. Si le prestataire est immatriculé dans votre pays, la rédaction est différente : indiquez à votre conseiller où il est établi.

**Retenue à la source saoudienne.** Un paiement à un prestataire étranger pour des services techniques peut être soumis à une retenue à la source de 5 %. Le client saoudien la prélève sur le paiement et la verse à la ZATCA, et le prestataire reçoit le reste. Le taux dépend de la qualification de chaque paiement (le guide de la ZATCA fixe par exemple 15 % pour les redevances), et un projet logiciel peut mêler plusieurs types de travaux : demandez à votre conseiller de les qualifier avant la signature.

Décidez ensuite qui supporte le coût. Deux options existent :

| Rédaction | Facture | Retenue de 5 % | Montant reçu par le prestataire |
|---|---|---|---|
| Prix brut, retenue déduite | 10 000 $ | 500 $ | 9 500 $ |
| Prix net, le client majore | 10 526,32 $ | 526,32 $ | 10 000 $ |

La seconde option est une **clause de majoration** (gross-up). Les deux sont acceptables ; le problème, c’est un contrat muet, car l’une des parties se retrouve alors privée du montant retenu. Ajoutez une ligne obligeant le client à transmettre la preuve de chaque versement de retenue, afin que le prestataire tienne sa comptabilité à jour.

Si vous avez aussi besoin de factures fiscales dans un format électronique précis, consultez [la facturation électronique dans le CCG, pays par pays](/blog/gcc-e-invoicing-by-country) et précisez dans le contrat qui en est responsable.

## Texte arabe et version qui prévaut

Un contrat rédigé uniquement en anglais peut être difficile à utiliser pour une équipe arabophone, et un texte arabe vaut donc souvent la peine. Si vous signez en deux langues, le contrat doit indiquer quelle version prévaut en cas de divergence. Deux textes « faisant également foi » sans règle de priorité laissent le sens ouvert précisément au moment où vous avez besoin qu’il soit tranché.

Points pratiques :

- Signez les deux versions côte à côte, dans un même document, plutôt que de traduire plus tard.
- Gardez des termes définis cohérents : « recette », « livrable » et « code source » doivent être traduits de la même façon à chaque fois.
- Décidez si les annexes techniques, comme le périmètre et les tests de recette, sont traduites ou restent, d’un commun accord, dans une seule langue.
- Demandez à votre avocat si une version arabe est nécessaire pour une autorité ou un tribunal susceptible de voir le contrat.

## Droit applicable et règlement des litiges

Un contrat entre un client à Riyad ou à Dubaï et un prestataire dans un autre pays doit désigner un seul droit applicable et un seul lieu de règlement des litiges. Sinon, le premier différend portera sur le tribunal compétent pour juger le second.

La clause doit couvrir :

1. **Le droit applicable** : le droit d’un pays désigné. Si votre entreprise est située dans une zone franche comme DIFC ou ADGM, dites-le à votre avocat, car ces zones ont leurs propres règles.
2. **La juridiction** : un tribunal désigné, ou un arbitrage avec une institution, un siège et une langue désignés.
3. **Une étape d’escalade d’abord** : une réunion entre décideurs dans un nombre de jours fixé, avant toute action.
4. **La langue de la procédure**, alignée sur la version du contrat qui prévaut.

Le droit et la juridiction qui vous conviennent dépendent de l’endroit où chaque partie détient des actifs et de la manière dont une décision serait exécutée. C’est une question pour votre avocat, pas pour votre prestataire.

## Les clauses supplémentaires en un coup d’œil

| Clause | Ce qu’il faut écrire | Pourquoi c’est important |
|---|---|---|
| Confidentialité | Accord couvrant vos données et celles de vos clients | Le prestataire voit vos systèmes |
| Données en fin de contrat | Restitution ou suppression sécurisée, confirmée par écrit | Les copies survivent au projet |
| Incidents | Délai de notification, contact, informations fournies | Vous apprenez une violation par le prestataire, pas par la presse |
| PI et code | Cession complète au paiement, dépôt remis | Un prestataire n’est pas un salarié |
| TVA | Prix hors TVA ; autoliquidation le cas échéant | La facture d’un prestataire étranger ne comporte normalement pas de TVA locale |
| Retenue | Brut ou net de la retenue, preuve de paiement | Évite un manque à gagner sur chaque paiement |
| Langue | Version qui prévaut | Deux textes peuvent diverger |
| Droit et juridiction | Un droit, une juridiction, escalade d’abord | Évite de se disputer sur le lieu du litige |

## Ce que fait KF Tech Solutions

KF Tech Solutions est un studio de développement logiciel basé au Caire, fondé en 2020. Nous travaillons avec des entreprises en Égypte et dans le Golfe, à distance, et développons des [logiciels sur mesure](/services/custom-software), des sites web, des applications web et mobiles, des systèmes de caisse, ERP et de gestion des stocks, des chatbots WhatsApp et de l’automatisation par l’IA. Vous recevez un devis fixe et écrit après un appel gratuit. Nos contrats peuvent prévoir un accord de confidentialité, la restitution ou la suppression sécurisée de vos données à la fin du contrat, une procédure de notification des incidents et la cession complète du code source et de la propriété intellectuelle ; votre avocat doit relire le texte final. Pour savoir comment nous travaillons avec les clients de la région, consultez notre [page Golfe](/gulf).

## Questions fréquentes

### Ai-je besoin de tout cela pour un petit projet ?

La cession de propriété intellectuelle, la rédaction sur la TVA et la retenue, et la clause de droit applicable ne coûtent rien et comptent quelle que soit la taille du projet. Les clauses sur les données peuvent être plus courtes si le prestataire ne voit jamais de données réelles de clients.

### Les contrôles de la NCA s’appliquent-ils à mon entreprise privée ?

Les obligations des ECC pèsent sur les organismes publics et les opérateurs d’infrastructures critiques. Une entreprise privée n’y est pas tenue de la même façon, mais les trois éléments contractuels restent une norme raisonnable à demander.

### Qui paie la retenue à la source saoudienne ?

Le client la prélève et la verse à la ZATCA. Qu’elle soit déduite du prix du prestataire ou ajoutée en plus relève d’un choix commercial que le contrat doit préciser.

### Le code m’appartient-il si le contrat ne dit rien ?

Ne comptez pas là-dessus. La règle émirienne sur l’employeur vise les salariés, pas les sociétés externes : inscrivez la cession du code et de la propriété intellectuelle dans le contrat.

### Pouvons-nous signer uniquement en anglais ?

C’est à votre avocat d’en décider. Si vous ajoutez une version arabe plus tard, ajoutez en même temps la clause sur la version qui prévaut.

Si vous souhaitez passer en revue un projet de contrat et le périmètre qui le sous-tend, [réservez un appel gratuit](/book) ou [envoyez-nous un message](/contact).

## Sources

- [NCA : Essential Cybersecurity Controls (ECC-2:2024)](https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf)
- [Morgan Lewis : le droit d’auteur aux Émirats](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2022/10/protecting-online-data-and-ip-new-copyright-law-provides-clarity-for-uae-businesses)
- [ZATCA : guide sur les importations et exportations en matière de TVA](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-on-Imports-and-Exports-under-VAT-Provision.pdf)
- [ZATCA : guide général de la retenue à la source](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/General-Guideline-for-Withholding-Tax-In-accordance-with-the-provisions-of-the-Income-Tax-Law-and-its-Implementing-Regulations.pdf)
- [Autorité fédérale des impôts des Émirats : guide TVA du commerce électronique](https://tax.gov.ae/DataFolder/Files/Pdf/E-Commerce%20-%20VAT%20Guide%20-%20EN%20-%2009%2008%202020.pdf)
