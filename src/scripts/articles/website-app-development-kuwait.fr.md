---
title: Site web ou application pour le Koweït : KNET et CITRA
summary: Ce qui change quand vos clients sont au Koweït : paiement KNET, règles de la CITRA, conditions en arabe et en anglais, pas de TVA, et le choix du prestataire.
tags: création de site web, développement d'application, KNET, CITRA, protection des données, Koweït
alt: Les Kuwait Towers s’élèvent au-dessus d’arbres verts sous un ciel bleu dégagé
caption: Un site pour le Koweït doit accepter KNET, publier ses conditions en arabe et en anglais et suivre les règles de la CITRA.
stats: ~80 %|des transactions en ligne au Koweït passent par des cartes KNET; 24 h|pour signaler une violation de données selon la décision CITRA 26/2024; 2|langues pour vos conditions : arabe et anglais
---

Un site web ou une application destinés à des clients au Koweït ont besoin de deux éléments qu'un projet standard oublie souvent : KNET au paiement, car près de 80 % des transactions en ligne au Koweït passent par des cartes KNET, et une gestion des données personnelles conforme à la décision 26/2024 de la CITRA, qui exige des conditions en arabe et en anglais, le consentement et une notification des violations sous 24 heures. Le volet fiscal est plus simple qu'en Arabie saoudite : le Koweït n'applique pas de TVA, et nous n'avons trouvé aucune obligation de facturation électronique. Ce guide explique ce qu'il faut prévoir, ce qu'il faut demander à un développeur et où se situe le vrai travail.

Dernière vérification : 6 novembre 2026

## Ce qui change quand les clients sont au Koweït

L'essentiel d'un bon site ou d'une bonne application est le même partout : des pages rapides, un contenu clair, un paiement qui fonctionne sur téléphone. Les différences propres au Koweït se concentrent à quelques endroits précis, et chacune coûte moins cher à prévoir avant le design qu'à ajouter après le lancement.

| Sujet | Le Koweït aujourd'hui | Conséquence pour le projet |
|---|---|---|
| Paiement par carte | KNET traite près de 80 % des transactions en ligne | KNET doit figurer au paiement, pas seulement Visa et Mastercard |
| Données personnelles | Décision administrative 26/2024 de la CITRA | Conditions bilingues, consentement, procédure de notification sous 24 heures |
| TVA | Aucune ; la TVA du CCG est toujours en discussion au Parlement | Pas de lignes de TVA sur les factures pour l'instant |
| Facturation électronique | Aucune obligation trouvée | Aucune connexion à une administration fiscale nécessaire aujourd'hui |
| Livraison de repas | talabat et Keeta sont présents tous les deux | Décidez : vendre par eux, en direct, ou les deux |
| Fuseau horaire | UTC+3 toute l'année, sans changement d'heure | Comme Le Caire en été, une heure d'avance en hiver |

La suite de ce guide reprend ces points un par un, en commençant par le plus simple.

### Fiscalité et factures : plus simple qu'en Arabie saoudite

Le Koweït n'applique pas de TVA. La synthèse fiscale de PwC, révisée en juillet 2026, indique que le cadre de TVA du CCG est toujours « under discussion in the Parliament ». Nous n'avons pas non plus trouvé d'obligation de facturation électronique au Koweït au 6 novembre 2026.

Pour votre projet, cela signifie qu'une boutique en ligne ou une application de réservation pour le Koweït n'a besoin aujourd'hui ni de calcul de TVA ni de connexion à une administration fiscale. Si vous vendez aussi en Arabie saoudite, aux Émirats ou à Oman, la situation est différente : ces pays appliquent la TVA et ont des calendriers de facturation électronique, et un système qui sert plusieurs marchés du Golfe doit gérer les paramètres fiscaux pays par pays plutôt qu'en figer un seul. Il s'agit d'informations générales, pas d'un conseil fiscal ; demandez à votre comptable ce qui s'applique à votre entreprise.

## Paiements : prévoir KNET dès le premier jour

KNET est le réseau local de cartes du Koweït. Selon Checkout.com, près de 80 % des transactions en ligne au Koweït passent par des cartes KNET ; le réseau compte 11 banques membres et accepte les cartes de débit locales. Si votre page de paiement n'accepte que Visa et Mastercard, une grande partie des clients au Koweït arriveront au paiement puis partiront.

Concrètement, cela implique trois choses :

- **Choisissez la passerelle de paiement avant le design.** KNET s'ajoute par une passerelle de paiement agréée qui le prend en charge, et ce choix détermine les écrans de paiement, le circuit de remboursement et les rapports que reçoit votre comptable.
- **Lancez tôt l'inscription en tant que marchand.** La passerelle doit valider votre entreprise comme marchand. Les démarches peuvent prendre plus de temps que le code : commencez-les pendant la conception du site.
- **Testez avec de vraies cartes KNET avant le lancement.** Les cartes de test prouvent que l'intégration fonctionne. Un petit paiement réel suivi d'un remboursement prouve que votre compte marchand est bien configuré.

Si vous envisagez Shopify, sachez que Shopify Payments, l'option de paiement intégrée de Shopify, n'est pas disponible au Koweït. Une boutique Shopify y a besoin d'un prestataire de paiement tiers : vérifiez qu'il prend en charge KNET avant de vous engager sur la plateforme.

## Données personnelles : la décision CITRA 26/2024

Les règles de protection des données au Koweït émanent de l'Autorité de régulation des communications et des technologies de l'information (CITRA), dans la décision administrative 26/2024. Cette section est une information générale, pas un conseil juridique. Selon la synthèse de DLA Piper, la définition de « fournisseur de services » est assez large pour couvrir quiconque exploite un site web, une application ou un service cloud qui collecte des données personnelles. Si votre formulaire de contact demande un nom et un numéro de téléphone, partez du principe que la décision vous concerne.

Les points qui touchent directement la réalisation :

- **Des conditions en arabe et en anglais.** La politique de confidentialité et les conditions doivent exister dans les deux langues. C'est un travail de contenu, mais le site doit aussi être construit pour que les deux versions soient faciles à trouver et restent alignées.
- **Le consentement.** Les utilisateurs doivent donner leur accord avant la collecte de leurs données : une étape de consentement claire dans les formulaires d'inscription et de contact, et un enregistrement de la date à laquelle chaque personne a accepté.
- **Une notification des violations sous 24 heures.** Les violations doivent être signalées à la CITRA et aux personnes concernées sous 24 heures. Ce délai est intenable sans journaux, sans alertes et sans un plan écrit qui fixe qui fait quoi en cas d'incident.

La synthèse de DLA Piper mentionne aussi des sanctions de 1 à 5 ans d'emprisonnement et/ou des amendes de 500 à 20 000 dinars koweïtiens. Faites relire le texte final de votre politique par un avocat au Koweït ; le rôle de votre développeur est de s'assurer que le site fait ce que la politique promet.

## Site web, application web ou application mobile ?

Partez de ce que vos clients doivent faire, pas du format :

- **Un site d'entreprise** présente votre offre et transforme les visites en appels, messages WhatsApp et demandes de devis. C'est la bonne première étape pour la plupart des entreprises de services. Notre guide sur [le coût d'un site d'entreprise](/blog/company-website-cost-egypt) explique ce qui détermine l'ampleur d'un tel projet.
- **Une boutique en ligne ou une application web** convient aux entreprises qui prennent des commandes, des réservations ou des paiements. Elle fonctionne dans le navigateur sur n'importe quel téléphone, sans validation des magasins d'applications.
- **Une application mobile** se justifie quand les clients reviennent souvent : fidélité, commandes répétées, réservation, suivi. Elle ajoute du travail pour deux magasins d'applications et pour les mises à jour. Notre analyse du [coût d'une application mobile](/blog/app-development-cost-egypt) montre où va cet effort.

Les restaurants et les commerces ont une question de plus. talabat et Keeta sont tous deux présents au Koweït (Keeta y a été lancé le 15 septembre 2025, son troisième marché au Moyen-Orient). Beaucoup d'entreprises vendent par ces plateformes tout en ayant leur propre site ou application de commande, pour que les clients réguliers commandent en direct. Si vous faites les deux, prévoyez dès le départ comment les commandes de chaque canal arrivent en cuisine ou en réserve, pour que votre personnel ne surveille pas trois écrans.

## Choisir le prestataire

Pas besoin d'être technicien pour bien choisir. Notre guide [pour choisir une société de logiciels](/blog/how-to-choose-a-software-company) décrit la méthode générale ; pour le Koweït, ajoutez ces vérifications :

1. **Demandez s'il a déjà intégré KNET**, avec quelle passerelle, et demandez à voir un paiement en production.
2. **Vérifiez l'arabe.** Demandez une page arabe qu'il a réalisée. Elle doit être conçue de droite à gauche, pas simplement inversée, avec des chiffres et une ponctuation corrects.
3. **Demandez comment le site gère le consentement et les violations**, compte tenu du délai de 24 heures fixé par la CITRA.
4. **Demandez où vos données seront hébergées**, et obtenez la réponse par écrit.
5. **Inscrivez la propriété dans le contrat** : un accord de confidentialité, la restitution ou la suppression sécurisée de vos données en fin de contrat, une procédure de notification des incidents, et la cession complète du code source et de la propriété intellectuelle à votre entreprise.
6. **Convenez du travail entre fuseaux horaires.** Le Koweït est à UTC+3 toute l'année. Le Caire est à la même heure de fin avril à fin octobre et a une heure de retard en hiver : une équipe au Caire partage donc votre journée de travail.

Les projets commencent à 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et ferme après un appel gratuit.

## Ce que fait KF Tech Solutions

KF Tech Solutions est un studio de logiciels basé au Caire, en Égypte, fondé en 2020. Nous travaillons avec des entreprises en Égypte et dans le Golfe, à distance. Nous réalisons des sites d'entreprise, des boutiques en ligne, des applications web et des [applications mobiles](/services/mobile-applications) en arabe et en anglais, avec un espace d'administration pour modifier vous-même le contenu. Nous connectons la passerelle de paiement de votre choix et développons les versions arabe et anglaise en parallèle. Pour en savoir plus sur notre façon de travailler avec les entreprises du Golfe, consultez notre [page Golfe](/gulf).

## Questions fréquentes

### Ai-je besoin de KNET si j'accepte déjà Visa et Mastercard ?

Pour la plupart des activités grand public au Koweït, oui. Près de 80 % des transactions en ligne y passent par des cartes KNET : une page de paiement sans KNET perd une grande partie des clients à la dernière étape.

### La décision CITRA 26/2024 s'applique-t-elle au site d'une petite entreprise ?

Sa définition de « fournisseur de services » est assez large pour couvrir quiconque exploite un site ou une application qui collecte des données personnelles. Si vous recueillez des noms, des numéros de téléphone ou des e-mails, prévoyez des conditions bilingues, un consentement et une procédure de notification, et vérifiez les détails avec un avocat.

### Ma boutique au Koweït doit-elle gérer la facturation électronique ou la TVA ?

Pas au 6 novembre 2026. Le Koweït n'applique pas de TVA, et nous n'avons trouvé aucune obligation de facturation électronique. Si vous vendez aussi dans d'autres pays du Golfe, gérez les paramètres fiscaux pays par pays.

### Une entreprise au Caire peut-elle développer une application pour une entreprise au Koweït ?

Oui. Le travail se fait à distance, avec des appels, des maquettes partagées et des versions de test. Le Caire est à l'heure du Koweït de fin avril à fin octobre et a une heure de retard en hiver.

### Puis-je utiliser Shopify au Koweït ?

Vous pouvez gérer une boutique Shopify, mais Shopify Payments n'est pas disponible au Koweït. Il vous faudra un prestataire de paiement tiers : vérifiez d'abord qu'il prend en charge KNET.

## Prêt à préparer votre projet ?

Dites-nous ce que vous voulez construire et pour qui. [Réservez un appel gratuit](/book) ou [envoyez-nous un message](/contact), et vous recevrez un devis écrit et ferme dès que nous aurons compris le périmètre.

## Sources

- [Moyen de paiement KNET, Checkout.com](https://www.checkout.com/payment-methods/knet)
- [Lois sur la protection des données au Koweït, DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=KW)
- [Koweït : autres impôts, PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/kuwait/corporate/other-taxes)
- [Pays où Shopify Payments est disponible, centre d'aide Shopify](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries)
- [Meituan étend Keeta au Koweït, TechNode](https://technode.com/2025/09/16/meituan-expands-food-delivery-brand-keeta-to-kuwait/)
- [Heure d'été en Égypte, Ahram Online](https://english.ahram.org.eg/NewsContentP/1/566547/Egypt/Egypt-to-move-clocks-forward-one-hour-on-Friday-fo.aspx)
