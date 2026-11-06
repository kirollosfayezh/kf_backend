---
title: PINT AE et le modèle à cinq coins : guide pour les développeurs
summary: Comment la facture électronique passe de votre ERP à votre ASP aux EAU en données PINT AE : codes de documents, TIN et 0235, avoirs et tests.
tags: PINT AE, Peppol, facturation électronique, modèle à cinq coins, intégration ERP, développeurs, EAU
alt: Un palmier dattier au premier plan, derrière lequel s’élève un gratte-ciel élancé de Dubaï dans une lumière douce
caption: Dans le modèle émirien, une facture quitte votre ERP, passe par votre prestataire et atteint celui de l’acheteur avant l’acheteur.
stats: 5|coins dans le modèle de facturation électronique des EAU; 0235|identifiant de schéma Peppol pour les identifiants aux EAU; 381|code de type de document d'un avoir fiscal aux EAU
---

Dans le système de facturation électronique des EAU, votre ERP ou votre caisse (coin 1) produit chaque facture B2B et B2G sous forme de données PINT AE et l'envoie à votre prestataire de services accrédité, l'ASP (coin 2). L'ASP la valide, la transmet à l'ASP de l'acheteur (coin 3), qui la remet à l'acheteur (coin 4), et déclare les données fiscales du côté fiscal (coin 5). Votre équipe ne dialogue pas directement avec l'administration fiscale : le travail consiste à produire des données PINT AE complètes et exactes, à les envoyer à l'API de votre ASP, à traiter les réponses et à recevoir de la même manière les factures de vos fournisseurs.

Dernière vérification : 6 novembre 2026

Il s'agit d'informations générales pour les développeurs, et non d'un conseil fiscal : votre conseiller fiscal et votre ASP ont le dernier mot sur le traitement de chaque opération.

## Les cinq coins, du point de vue de votre système

Le ministère des Finances appelle ce modèle « Decentralized Continuous Transaction Control and Exchange ». Votre code ne dialogue qu'avec une seule des cinq parties.

| Coin | Qui | Ce que fait votre système |
|---|---|---|
| 1 | Le fournisseur : vous, quand vous vendez | Construit les données de la facture et les envoie à votre ASP |
| 2 | Votre ASP | Reçoit vos données via son API et renvoie un résultat |
| 3 | L'ASP de l'acheteur | Rien directement : votre ASP s'en charge |
| 4 | L'acheteur | Reçoit la facture via son propre ASP |
| 5 | Le côté fiscal | Rien directement : votre ASP lui fait la déclaration |

- **Les deux parties ont besoin d'un ASP.** Le périmètre couvre toutes les opérations B2B et B2G, et l'émetteur comme le destinataire doivent désigner un ASP. Quand vous achetez, votre ERP devient le coin 4 et doit accepter les factures transmises par votre ASP.
- **Un PDF n'est pas une facture électronique.** Le ministère précise que les PDF, fichiers Word, documents scannés et e-mails ne comptent pas.
- **La place de Peppol.** Le ministère mentionne OpenPeppol pour les échanges transfrontaliers, et PINT AE est publiée comme spécification Peppol.

La liste du ministère comptait 86 ASP accrédités lors de notre vérification du 6 novembre 2026. Chacun a sa propre API : l'authentification et les points d'accès viennent donc de la documentation de votre ASP, tandis que le format des données est le même pour tous.

## Ce qu'est PINT AE

PINT AE est la version émirienne du modèle international de facture de Peppol (PINT), publiée sur le site de documentation de Peppol. La version actuelle, 1.0.4, comporte trois parties :

- **PINT AE Billing**, pour les factures fiscales et les avoirs.
- **PINT AE Self-Billing**, pour les factures et avoirs en autofacturation, avec le même modèle de données.
- **Le UAE Tax Data Document (TDD)**, que l'émetteur et le destinataire utilisent tous deux, selon la spécification, pour déclarer une facture à l'administration fiscale.

La syntaxe est UBL. Une facture est un document UBL de type Invoice et un avoir un document de type CreditNote, et la spécification indique l'élément exact de chaque terme métier. Votre facture identifie la spécification dans `cbc:CustomizationID`, avec la valeur `urn:peppol:pint:billing-1@ae-1`.

Chaque champ porte un code. Les codes commençant par IBT viennent du modèle international, ceux commençant par BTAE sont des ajouts propres aux EAU. Conservez ces codes dans votre table de correspondance, à côté de vos propres colonnes de base de données.

## Types de documents, indicateurs d'opération et avoirs

Le code de type de document indique au destinataire et au côté fiscal de quel document il s'agit. PINT AE utilise les codes suivants :

| Document | Code | Racine UBL |
|---|---|---|
| Facture fiscale | 380 | Invoice |
| Avoir fiscal | 381 | CreditNote |
| Facture en autofacturation | 389 | Invoice |
| Avoir en autofacturation | 261 | CreditNote |
| Facture hors champ de la taxe | 480 | Invoice |
| Avoir lié à une opération hors champ | 81 | CreditNote |

### Les indicateurs de type d'opération

La TVA émirienne connaît quelques types d'opérations particuliers, que PINT AE enregistre dans `cbc:ProfileExecutionID` sous forme d'une chaîne de huit 0 et 1. Chaque position est un indicateur, dans cet ordre :

1. Zone franche
2. Livraison réputée (deemed supply)
3. Régime de la marge bénéficiaire
4. Facture récapitulative
5. Fourniture continue
6. Facturation par un agent déclaré
7. Fourniture via le commerce électronique
8. Exportations

Une facture fiscale standard sans type particulier porte `00000000`. Une exportation porte `00000001`, et une fourniture impliquant une zone franche `10000000`. Enregistrez chaque indicateur comme un champ oui/non sur la vente et construisez la chaîne au moment de l'export.

### Des avoirs, jamais de factures négatives

La spécification indique qu'aux EAU une facture ne peut être annulée que par un avoir. Les entreprises ne peuvent pas émettre de factures négatives. Si votre système traite les retours en enregistrant une vente négative, il vous faut un document d'avoir distinct avant la mise en service.

Chaque avoir exige un code de motif dans BTAE-03 et une référence à la facture d'origine. L'exception est la remise sur volume : le code de motif est `VD` et la référence à la facture d'origine peut être omise. Vérifiez que chaque retour de votre système est lié à la vente qu'il annule, car ce lien devient la référence de l'avoir.

## Identifiants et destinataires prédéfinis

- **TRN du vendeur.** Le numéro d'enregistrement à la TVA du vendeur va dans IBT-031, avec le régime fiscal `VAT`.
- **TIN du vendeur.** Le numéro d'identification fiscale du vendeur va dans IBT-032.
- **Adresse électronique.** Aux EAU, l'adresse électronique (IBT-034) est le TIN, et l'identifiant de schéma est `0235`. C'est ainsi que le réseau trouve le bon ASP.
- **TRN de l'acheteur.** Il est requis si l'acheteur est enregistré à la TVA aux EAU.
- **Immatriculation légale.** Le type d'immatriculation du vendeur est indiqué, par exemple une licence commerciale, et pour une licence commerciale l'autorité qui l'a délivrée est obligatoire (BTAE-12).

Vos données clients doivent donc contenir un TRN et un TIN pour chaque client professionnel enregistré, vérifiés avant la première facture et non découverts au moment d'un rejet.

Certaines factures n'ont pas d'acheteur sur le réseau. Pour trois cas, la spécification définit un destinataire fixe, toujours sous le schéma `0235`. Le document est alors déclaré au coin 5 et n'est pas échangé avec le coin 3 :

| Cas | Identifiant du participant |
|---|---|
| Livraison réputée (deuxième indicateur activé) | 9900000097 |
| Acheteur non soumis à la facturation électronique émirienne | 9900000098 |
| Exportation vers un destinataire non enregistré sur Peppol (dernier indicateur activé) | 9900000099 |

Si vous facturez dans une autre devise que le dirham, la spécification indique aussi le total de TVA dans la devise de comptabilisation fiscale. Son exemple facture en euros avec `cbc:TaxCurrencyCode` fixé à AED et un second total de taxe en AED. Enregistrez le taux de change utilisé avec la facture.

## Construire le flux de l'ERP vers l'ASP

Une intégration fiable a la même forme quelle que soit votre technologie, et elle suit le schéma décrit dans [relier les systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems).

1. **Faites la correspondance des données.** Construisez une table qui relie chaque terme métier PINT AE à un champ de votre base, avec une note pour tout ce qui manque.
2. **Générez l'UBL** uniquement à partir d'une facture comptabilisée. Une fois envoyée, une facture ne doit plus être modifiée. Les corrections passent par un avoir.
3. **Mettez l'envoi en file d'attente.** Écrivez la facture dans une table d'envoi et envoyez-la depuis un processus en arrière-plan, pour qu'un ASP lent ou indisponible ne bloque jamais une vente ni une clôture mensuelle.
4. **Conservez chaque réponse.** Enregistrez l'identifiant de l'ASP, le statut et les éventuels codes d'erreur avec la facture, et affichez-les à l'utilisateur.
5. **Relancez avec prudence.** Relancez automatiquement en cas de panne réseau, mais utilisez votre propre numéro de facture comme clé pour qu'une même facture ne parte jamais deux fois.
6. **Alertez en cas de rejet.** Une facture rejetée exige qu'une personne corrige les données. Envoyez-la vers une liste consultée chaque jour.
7. **Recevez les factures entrantes.** Récupérez ou acceptez les factures fournisseurs auprès de votre ASP et rapprochez-les des bons de commande et des réceptions.

La décision ministérielle 197/2026, en vigueur depuis le 1er octobre 2026, a supprimé l'obligation, propre à la facturation électronique, de stocker les données de facturation aux EAU : ces règles n'imposent donc plus d'héberger l'intégration aux EAU, mais des règles sectorielles, par exemple pour les prestataires de paiement ou les données de santé, peuvent encore s'appliquer. Elle exclut aussi les opérations internes à un groupe fiscal pendant 24 mois à compter du 1er janvier 2027. Conservez néanmoins dans votre propre système les factures envoyées et reçues avec leurs réponses, afin de pouvoir retracer chaque statut.

## Tester avec votre ASP et planifier selon les échéances

Demandez à votre ASP un environnement de test et les fichiers d'exemple qu'il attend avant d'écrire le générateur. Testez ensuite par cycles :

- **Format.** Envoyez une facture standard et corrigez chaque erreur de validation.
- **Couverture.** Envoyez un document de chaque type que vous émettez réellement : avoirs avec et sans référence d'origine, vente en zone franche, exportation, facture en devise étrangère.
- **Pannes.** Coupez le réseau, envoyez des doublons et de mauvais TRN, et vérifiez que votre système enregistre chaque résultat.
- **Entrant.** Demandez à l'ASP de vous livrer des factures de test et vérifiez qu'elles arrivent dans le bon journal.
- **Répétition générale.** Faites passer une journée complète d'opérations réelles par l'environnement de test avant de basculer.

Selon le ministère, le modèle à cinq coins fonctionne déjà dans la phase pilote, et l'intégration consiste à choisir un ASP, à s'inscrire sur EmaraTax, puis à se connecter.

| Groupe | Désigner un ASP avant le | Mise en service |
|---|---|---|
| Chiffre d'affaires d'au moins 50 M AED | 30 octobre 2026 | 1er janvier 2027 |
| Chiffre d'affaires inférieur à 50 M AED | 31 mars 2027 | 1er juillet 2027 |
| Entités gouvernementales | 31 mars 2027 | 1er octobre 2027 |

Prévoyez au moins deux cycles de test complets avant votre date. Pour le volet métier de ces échéances, lisez notre [guide des échéances de la facturation électronique aux EAU pour les PME](/blog/uae-e-invoicing-deadlines-smes). Selon la décision du Conseil des ministres 173/2026, annoncée le 30 octobre 2026, chaque facture électronique ou avoir non émis ou non transmis peut entraîner une amende de 100 AED, plafonnée à 5 000 AED par mois. L'absence de désignation d'un ASP fait l'objet d'une amende distincte.

## Ce que fait KF Tech Solutions ici

KF Tech Solutions n'est pas un ASP et ne figure pas sur la liste du ministère. Nous développons et maintenons des systèmes de gestion sur mesure et les API qui les relient. Ici, cela signifie faire correspondre les données de votre ERP ou de votre caisse à PINT AE, construire la file d'envoi, les relances et les écrans d'erreur, et connecter le tout à l'ASP de votre choix. Nous avons déjà relié une caisse au système de reçus électroniques de l'Égypte, comme décrit dans [connecter votre caisse à la facturation électronique ETA en Égypte](/blog/eta-e-invoicing-pos-integration). Si votre système est développé sur mesure, lisez aussi [la facturation électronique aux EAU pour caisses et ERP sur mesure](/blog/uae-e-invoicing-custom-pos-erp). Nous travaillons avec des entreprises en Égypte et dans le Golfe. Découvrez notre [service API et backend](/services/api-and-backend) et notre [page EAU](/uae).

## Questions fréquentes

### Avons-nous besoin de notre propre point d'accès Peppol ?

Non. Dans le modèle émirien, vous envoyez vos données à votre ASP, qui se charge de l'échange avec l'ASP de l'acheteur et de la déclaration. Il vous faut une intégration API avec un seul prestataire accrédité.

### Pouvons-nous continuer à envoyer des factures PDF ?

Vous pouvez envoyer un PDF comme copie lisible, mais ce n'est pas la facture électronique. Le ministère précise que les PDF, fichiers Word, documents scannés et e-mails ne sont pas des factures électroniques. La facture, ce sont les données structurées envoyées via votre ASP.

### Notre ERP enregistre les retours comme des factures négatives. Est-ce un problème ?

Oui. PINT AE n'autorise pas les factures négatives aux EAU. Une annulation doit être un avoir (code 381, ou 81 pour une opération hors champ) avec un code de motif et, sauf pour les remises sur volume, une référence à la facture d'origine.

### Quel identifiant le réseau utilise-t-il pour trouver notre acheteur ?

Le TIN, avec l'identifiant de schéma `0235`. Le TRN va dans le champ de l'identifiant TVA. Les livraisons réputées, les exportations vers des destinataires non enregistrés sur Peppol et les acheteurs hors du champ de la facturation électronique émirienne utilisent des identifiants de participant fixes.

### Les données de facturation doivent-elles être stockées aux EAU ?

Plus maintenant. La décision ministérielle 197/2026, en vigueur depuis le 1er octobre 2026, a supprimé cette obligation. Conservez tout de même des enregistrements complets dans votre propre système et vérifiez les autres règles qui peuvent s'appliquer à votre secteur.

Vous souhaitez qu'un développeur vérifie ce dont votre système a besoin avant votre date de mise en service ? [Réservez un appel gratuit](/book) ou [envoyez-nous vos informations](/contact).

## Sources

- [Ministère des Finances des EAU : eInvoicing](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
- [Ministère des Finances : décisions sur le périmètre et le calendrier (29 septembre 2025)](https://mof.gov.ae/en/news/ministry-of-finance-announces-the-issuance-of-two-ministerial-decisions-on-the-scope-of-obligations-and-the-timelines-for-implementing-the-electronic-invoicing-system-2/)
- [Décision ministérielle n° 244 de 2025](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Ministère des Finances : modifications et report de l'échéance](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [Ministère des Finances : modifications de la DM 197/2026](https://mof.gov.ae/en/news/ministry-of-finance-amends-electronic-invoicing-regulations-to-ease-the-burden-on-businesses/)
- [Ministère des Finances : sanctions mises à jour](https://mof.gov.ae/en/news/mof-announces-updated-administrative-penalties-related-to-the-uae-einvoicing-system-to-enhance-clarity-and-support-business-compliance/)
- [Ministère des Finances : prestataires accrédités](https://mof.gov.ae/en/about-us/initiatives/einvoicing/einvoicing-accredited-service-providers-asps/)
- [Ministère des Finances : phase pilote et intégration](https://mof.gov.ae/en/news/ministry-of-finance-hosts-awareness-event-in-ras-al-khaimah-on-latest-einvoicing-updates/)
- [Peppol : spécifications des documents électroniques aux EAU](https://docs.peppol.eu/poac/ae/)
- [Peppol : spécification PINT AE Billing](https://docs.peppol.eu/poac/ae/pint-ae/bis/)
