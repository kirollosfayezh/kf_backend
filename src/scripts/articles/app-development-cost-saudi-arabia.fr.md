---
title: Combien coûte le développement d'une application en Arabie saoudite ?
summary: Ce qui fixe le prix d'une application en Arabie saoudite : plateformes, backend, back-office, arabe, mada, Apple Pay, Nafath, hébergement et coûts récurrents.
tags: développement d'applications, prix, applications mobiles, Arabie saoudite, mada, MVP
alt: Une main esquisse au stylo des maquettes d’écrans d’application mobile sur une feuille blanche
caption: Les écrans esquissés au départ, avec le back-end, les paiements et l’administration, fixent le coût d’une application.
stats: 42 %|du trafic web mobile saoudien passait par iOS en octobre 2026; 99 $|par an pour le compte développeur Apple, au nom de votre entreprise; 15 %|de TVA en Arabie saoudite, la ligne à vérifier dans chaque devis
---

Il n'existe pas de prix fixe pour une application mobile en Arabie saoudite, car le prix suit le périmètre : combien d'applications et de types d'utilisateurs compte le projet, s'il lui faut un backend et un back-office, quels paiements et quelles intégrations il doit prendre en charge, et où ses données sont hébergées. Une application de réservation pour un seul type d'utilisateur coûte une fraction d'une place de marché avec des applications pour les clients, les livreurs et l'administration. La réponse utile est un périmètre écrit, chiffré ligne par ligne, et ce guide montre ce que couvre chaque ligne.

Dernière vérification : 6 novembre 2026

## Ce que vous payez

Un bon devis nomme chaque partie de l'application :

- **L'application elle-même**, sur iOS et Android : les écrans qu'utilisent vos clients ou votre personnel.
- **Le backend** : le serveur, la base de données et l'API qui conservent les comptes, les commandes et les données, et envoient les notifications.
- **Le back-office** : l'endroit où votre équipe modifie les contenus, traite les commandes, rembourse et consulte les rapports.
- **Le design** : les écrans en arabe et en anglais, testés sur de vrais téléphones avant d'écrire la moindre ligne de code.
- **Les tests et la publication** : les versions de test, les fiches dans les stores et la procédure de validation.
- **Le suivi après le lancement** : les corrections et les mises à jour annuelles qu'exigent Apple et Google.

Les écrans sont ce que montre une démo. Le backend et le back-office sont l'endroit où deux devis pour « la même application » divergent le plus souvent, comme l'explique l'article [ce que coûte vraiment une application web](/blog/what-does-a-web-app-actually-cost-to-build). Si votre personnel travaille en arabe, le back-office a lui aussi besoin d'une interface arabe, et c'est un poste facile à oublier dans un devis.

## Les facteurs de coût, ligne par ligne

Chaque ligne fait varier le prix à elle seule. Cochez la colonne qui correspond à votre idée et vous aurez l'essentiel d'un cahier des charges.

| Facteur | Maintient le coût plus bas | Fait monter le coût |
|---|---|---|
| Plateformes | Un seul code multiplateforme pour iOS et Android | Deux applications natives séparées |
| Types d'utilisateurs | Un seul, par exemple les clients | Plusieurs, comme clients, livreurs et personnel des agences, chacun avec son application ou son rôle |
| Backend | Comptes et contenus simples | Commandes, suivi en direct, synchronisation entre appareils, nombreux rôles |
| Back-office | Modifier les contenus et voir les commandes | Validations, remboursements, reversements, rapports détaillés |
| Langue | Arabe et anglais prévus dès le premier jour | Une deuxième langue ajoutée après le lancement |
| Paiements | Une page de paiement hébergée par une passerelle agréée | Plusieurs moyens, paiement fractionné, remboursements, reversements partagés |
| Identité | Numéro de téléphone avec code à usage unique | Vérification d'identité par Nafath |
| Intégrations | Aucune dans la première version | Caisse, ERP, sociétés de livraison, cartes, SMS |
| Hébergement | Une région cloud internationale standard | Un hébergement dans le Royaume, quand vos clients ou votre secteur le demandent |

Les deux plateformes comptent : StatCounter a mesuré en octobre 2026 que 42 % du trafic web mobile en Arabie saoudite passait par iOS et 58 % par Android. Un seul code multiplateforme couvre les deux stores sans tout construire deux fois.

## Les postes propres à l'Arabie saoudite qui changent le prix

### L'arabe d'abord, pas traduit après coup

L'arabe pèse davantage en Arabie saoudite : la politique nationale de la langue arabe, approuvée en 2026, encourage son usage dans les contrats, les factures, la publicité et les communications. Dans une application, cela signifie des écrans conçus de droite à gauche dès la première esquisse, une typographie arabe lisible en petite taille, des noms et adresses qui mêlent arabe et anglais, des dates hégiriennes là où les utilisateurs les attendent, et des fiches de store dans les deux langues. Ajouter le sens de droite à gauche à une application anglaise coûte bien plus cher que de le prévoir dès le départ.

### mada et Apple Pay via une passerelle agréée

mada, le réseau de paiement national détenu par la banque centrale saoudienne (SAMA), fonctionne avec Apple Pay et d'autres portefeuilles, et ses paiements en ligne passent par la vérification 3-D Secure. Une application y accède via une passerelle de paiement ; Tap, par exemple, indique être agréée par la banque centrale saoudienne et prend en charge mada, Apple Pay, Tabby et Tamara. Le développement couvre le parcours de paiement, la vérification, les paiements échoués ou en double, les remboursements et un historique que votre comptable peut rapprocher. Les frais de la passerelle sont un coût distinct et récurrent.

### Nafath seulement si nécessaire

Nafath est l'authentification unique nationale de l'Arabie saoudite, utilisée par des plateformes publiques et privées pour confirmer l'identité d'un utilisateur. C'est une intégration à part entière : ajoutez-la quand vous devez vérifier l'identité d'une personne, pour des contrats, des locations ou des financements par exemple, et non comme connexion par défaut. Pour la plupart des applications, un numéro de téléphone avec un code à usage unique suffit.

### Où sont hébergées les données

La loi sur la protection des données personnelles (PDPL) est pleinement applicable depuis le 14 septembre 2024 et n'autorise le transfert de données personnelles hors du Royaume que sous conditions. En octobre 2026, l'autorité de contrôle, la SDAIA, a publié des projets d'amendements qui imposeraient de stocker les données personnelles dans le Royaume ; ils ne sont pas en vigueur. L'hébergement dans le Royaume est possible mais réduit vos options : la région Google Cloud de Dammam est vendue aux clients établis en Arabie saoudite par l'intermédiaire de CNTXT, et AWS a annoncé que sa première région saoudienne devait ouvrir en décembre 2026. Tranchez cette question avant le devis, car déplacer une application plus tard coûte plus cher que de choisir une fois.

### Les factures électroniques, si l'application vend

Si l'application vend et que votre entreprise est immatriculée à la TVA, les factures qu'elle émet relèvent des règles de facturation électronique de la ZATCA. La phase 2, l'intégration à la plateforme FATOORA de la ZATCA, est déployée par vagues ; la vague 25, qui couvre un chiffre d'affaires soumis à la TVA supérieur à 187 500 SAR pour l'une des années 2022 à 2025, doit être intégrée au plus tard le 1er février 2027. Soit l'application transmet chaque vente à un système de caisse ou à un ERP qui gère déjà cela, soit l'intégration fait partie du développement.

## Les coûts que la plupart des devis oublient

Posez la question par écrit pour chacun de ces postes, même si le prestataire ne les facture pas :

- **Les comptes des stores.** Le programme développeur d'Apple coûte 99 $ par an (affichés en devise locale à l'inscription), et Google Play demande 25 $ une seule fois. Apple exige des organisations un numéro D-U-N-S et affiche le nom de l'organisation comme vendeur : ouvrez donc les deux comptes au nom de votre entreprise, pas à celui du développeur.
- **La commission des stores, uniquement sur les ventes numériques.** Apple et Google prélèvent 15 % aux petits développeurs sur les contenus numériques et les abonnements. Les biens physiques et les services réels, comme les livraisons et les réservations, doivent être payés autrement, par Apple Pay ou par carte par exemple, sans commission des stores.
- **Les frais de paiement.** La passerelle facture chaque transaction, et les taux varient selon le moyen de paiement. Obtenez-les par écrit avant de choisir.
- **Les SMS des codes de connexion.** Chaque message a un coût, et les fournisseurs de SMS saoudiens enregistrent votre nom d'expéditeur selon les règles de la Commission des communications, de l'espace et de la technologie, ce qui demande des documents et des frais annuels.
- **L'hébergement et les services.** Serveurs, cartes, notifications et e-mails sont facturés chaque mois et augmentent avec l'usage.
- **Les pages de confidentialité et les mentions légales.** Apple exige un lien vers la politique de confidentialité dans l'application et dans la fiche du store, et une application avec inscription doit permettre de supprimer son compte depuis l'application. Si l'application vend en ligne, la loi sur le commerce électronique impose d'afficher votre nom, vos coordonnées et votre numéro d'immatriculation commerciale.
- **Les mises à jour annuelles des plateformes.** Depuis le 28 avril 2026, Apple n'accepte que les applications compilées avec Xcode 26 ou plus récent et le SDK iOS 26, et depuis le 31 août 2026, Google Play exige que les nouvelles applications et les mises à jour ciblent Android 16 ou plus. Une application que personne n'entretient finit par ne plus pouvoir publier de correctif.

## TVA, retenue à la source et devis en dollars

Il s'agit d'informations générales, pas d'un conseil fiscal ; vérifiez les détails avec votre comptable.

- **La TVA est de 15 %.** Un prestataire saoudien immatriculé à la TVA l'ajoute à sa facture.
- **Autoliquidation avec les prestataires étrangers.** Quand une entreprise saoudienne immatriculée à la TVA achète des services à un prestataire non résident, elle déclare elle-même la TVA.
- **Retenue à la source.** Quand une entreprise saoudienne paie un non-résident pour des services techniques, qui selon le guide de la ZATCA peuvent inclure le développement, la maintenance et le support de logiciels, elle peut devoir retenir 5 % et les verser à la ZATCA. Précisez dans le contrat si le prix proposé inclut ce montant.
- **Les devis en dollars se convertissent à un taux connu.** Le riyal est arrimé au dollar américain à 3,75 : 1 000 $ valent donc toujours 3 750 SAR.

## Réduire le coût et comparer les devis

### Réduire le périmètre, pas les fondations

- **Commencez avec un seul type d'utilisateur et une seule action principale.** Le choix de cette action est expliqué dans [commencer petit avec un MVP](/blog/mobile-app-mvp-egypt).
- **Lancez avec la page de paiement hébergée de votre passerelle**, puis construisez un parcours de paiement sur mesure quand le volume de commandes le justifie.
- **Reportez Nafath et la plupart des intégrations à la version deux**, sauf si l'application ne peut pas fonctionner sans eux.
- **Gardez un back-office sobre.** Il doit exister dès le premier jour, mais il n'a pas besoin d'être joli.

Ne rognez pas sur la sécurité, le back-office ni la bonne gestion des paiements. Les ajouter après le lancement coûte bien plus cher.

### Comparer ce qui est comparable

| Question | Une bonne réponse | Un signal d'alerte |
|---|---|---|
| À qui appartiennent le code et les comptes des stores ? | À vous, au nom de votre entreprise | L'application est publiée sous le compte du prestataire |
| Le back-office est-il inclus ? | Oui, avec la liste de ses écrans | « Nous pourrons l'ajouter plus tard » |
| Qu'est-ce qui est exclu ? | Hébergement, frais de passerelle, SMS et frais des stores sont listés | Rien n'est indiqué comme exclu |
| Qui corrige les problèmes après le lancement, et pendant combien de temps ? | Une durée et un délai de réponse précis | « Contactez-nous en cas de besoin » |
| Pouvons-nous voir des écrans en arabe ? | De vrais écrans de droite à gauche tirés de projets passés | Uniquement des écrans en anglais |

Ce tableau vaut autant pour un studio saoudien que pour une équipe à distance. Pour la même analyse sur le marché égyptien, consultez [ce que coûte une application mobile en Égypte](/blog/app-development-cost-egypt). Si votre idée est une place de marché, le périmètre grandit vite : lisez [créer une application de livraison comme Jahez](/blog/delivery-app-like-jahez).

## Comment KF Tech Solutions travaille sur les projets d'application

Nous concevons et développons des applications iOS et Android à partir d'un seul code, avec le backend, le back-office et un arabe complet de droite à gauche aux côtés de l'anglais, et nous les publions sur l'App Store et Google Play sous des comptes développeur au nom de votre entreprise. Nous travaillons avec des entreprises en Égypte et dans le Golfe, à distance depuis Le Caire. Les projets démarrent à partir de 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et ferme après un appel gratuit. Découvrez notre offre de [développement d'applications mobiles](/services/mobile-applications) et notre façon de [travailler avec des clients en Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### Combien coûte une application simple en Arabie saoudite ?

Tout dépend de ce que recouvre « simple ». Une application pour un seul type d'utilisateur, avec connexion, quelques écrans et un back-office de base, se situe dans le bas de la fourchette de n'importe quel prestataire ; les paiements, un deuxième type d'utilisateur ou le suivi en direct font chacun monter le prix. Demandez un devis qui chiffre ces éléments séparément.

### Ai-je besoin d'iOS et d'Android ?

Dans la plupart des cas, oui. Les deux plateformes représentent une large part du trafic mobile saoudien, et un code multiplateforme vous permet de publier dans les deux stores sans développer l'application deux fois.

### Apple ou Google prennent-ils une part de mes ventes ?

Seulement sur les contenus numériques et les abonnements vendus dans l'application. Les livraisons, les trajets, les réservations et les autres biens ou services physiques doivent passer par d'autres moyens de paiement, donc les stores ne prennent aucune commission dessus, même si les frais de votre passerelle s'appliquent.

### Dois-je héberger les données de mon application en Arabie saoudite ?

La PDPL en vigueur aujourd'hui autorise le transfert de données personnelles à l'étranger sous conditions, comme un niveau de protection adéquat ou des garanties appropriées. Des projets d'amendements publiés en octobre 2026 ajouteraient une obligation de stockage dans le Royaume, mais ils ne sont pas encore en vigueur, et certains clients et secteurs fixent leurs propres règles d'hébergement : vérifiez d'abord les vôtres.

### Combien de temps faut-il pour développer une application ?

Chez KF, une première version ciblée prend généralement de huit à quatorze semaines, backend et back-office compris. Les paiements, les intégrations et un deuxième type d'utilisateur ajoutent du temps, tout comme la validation des stores : fixez donc la date de lancement à partir du périmètre, et non l'inverse.

**Vous préparez une application pour le marché saoudien ?** Envoyez-nous un brief d'une page via le [formulaire de contact](/contact) ou [réservez un appel gratuit](/book). Nous poserons d'abord nos questions, puis nous vous enverrons un devis écrit et ferme.

## Sources

- [Apple : inscription à l'Apple Developer Program](https://developer.apple.com/programs/enroll/)
- [Apple : App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Apple : App Store Small Business Program](https://developer.apple.com/app-store/small-business-program/)
- [Apple : exigences minimales de SDK depuis le 28 avril 2026](https://developer.apple.com/news/upcoming-requirements/?id=04282026a)
- [Google Play : frais d'inscription des développeurs](https://support.google.com/googleplay/android-developer/answer/6112435)
- [Google Play : frais de service](https://support.google.com/googleplay/android-developer/answer/112622)
- [Google Play : règles relatives aux paiements](https://support.google.com/googleplay/android-developer/answer/9858738)
- [Google Play : exigences de niveau d'API cible](https://support.google.com/googleplay/android-developer/answer/11926878)
- [StatCounter : parts des systèmes d'exploitation mobiles en Arabie saoudite](https://gs.statcounter.com/os-market-share/mobile/saudi-arabia)
- [CMS : la politique nationale de la langue arabe en Arabie saoudite](https://cms.law/en/int/legal-updates/saudi-arabia-s-national-arabic-language-policy-what-businesses-need-to-know)
- [SAMA : mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap Payments, Arabie saoudite](https://www.tap.company/en-sa)
- [Wikipédia : Nafath (Unified National Access)](https://en.wikipedia.org/wiki/Unified_national_access)
- [DLA Piper : la loi saoudienne sur la protection des données](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Clyde & Co : les projets d'amendements de la SDAIA à la PDPL](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [Google Cloud : accès à la région de Dammam](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon : la région AWS en Arabie saoudite](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
- [ZATCA : qu'est-ce que la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA : annonce de la vague 25](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [Unifonic : enregistrement du nom d'expéditeur en Arabie saoudite](https://docs.unifonic.com/articles/products-documentation/ksa-sender-id-registration-requirmnets)
- [Loi sur le commerce électronique, traduction anglaise (MISA)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
- [PwC : Arabie saoudite, autres impôts](https://taxsummaries.pwc.com/saudi-arabia/corporate/other-taxes)
- [ZATCA : guide TVA sur les importations et exportations](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-on-Imports-and-Exports-under-VAT-Provision.pdf)
- [ZATCA : guide de la retenue à la source](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/General-Guideline-for-Withholding-Tax-In-accordance-with-the-provisions-of-the-Income-Tax-Law-and-its-Implementing-Regulations.pdf)
- [SAMA : taux du riyal par rapport au dollar américain](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx)
