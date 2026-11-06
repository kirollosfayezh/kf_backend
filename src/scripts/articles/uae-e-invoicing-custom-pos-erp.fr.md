---
title: Facturation électronique aux EAU pour caisses et ERP sur mesure
summary: La facturation électronique aux EAU vue depuis votre système : cinq coins, données PINT AE, choix d'un ASP et données à nettoyer avant la connexion.
tags: facturation électronique, PINT AE, ASP, caisse, ERP, EAU
alt: Une calculatrice, des reçus imprimés, un stylo et un chapelet sur un bureau, à côté d’un classeur bleu
caption: Aux Émirats, un PDF imprimé ou envoyé par e-mail n’est pas une facture électronique : les données passent en PINT AE par un ASP.
stats: 5|coins dans le modèle d'échange de la facturation électronique aux EAU; 86|prestataires accrédités sur la liste du ministère des Finances au 6 novembre 2026; 0|PDF, scan ou e-mail qui compte comme une facture électronique
---

Oui, vous pouvez conserver votre propre système de caisse ou votre ERP avec la facturation électronique aux Émirats arabes unis. Votre système doit envoyer chaque facture B2B et B2G sous forme de données structurées au format PINT AE à un prestataire de services accrédité (Accredited Service Provider, ASP), qui les valide, les transmet à l'ASP de l'acheteur et déclare les données fiscales. Les entreprises dont le chiffre d'affaires atteint 50 millions d'AED ou plus démarrent le 1er janvier 2027, les autres entreprises le 1er juillet 2027 et les entités publiques le 1er octobre 2027.

Dernière vérification : 6 novembre 2026

Ce guide est écrit du point de vue de l'intégrateur : ce que votre propre système doit faire, ce que l'ASP fait pour vous et ce qu'il faut nettoyer dans vos données avant de construire la connexion. Il s'agit d'informations générales, pas d'un conseil fiscal ou juridique. Vérifiez votre situation avec votre conseiller fiscal.

## Ce qui change pour vos factures

Le système émirien repose sur les décisions ministérielles 243/2025 et 244/2025, modifiées à plusieurs reprises en 2026. Pour une entreprise qui utilise son propre logiciel, les changements concrets sont les suivants :

- **Périmètre.** Toutes les transactions B2B et B2G. L'entreprise qui émet la facture et celle qui la reçoit doivent chacune désigner un ASP.
- **Le B2C est exclu pour l'instant.** Les ventes aux consommateurs restent hors du système jusqu'à ce que le ministre en décide autrement.
- **Un PDF n'est pas une facture électronique.** Les PDF, fichiers Word, scans et e-mails ne comptent pas. La facture, ce sont les données structurées que votre système envoie à l'ASP.
- **Un répit pour les groupes fiscaux.** Les transactions au sein d'un groupe fiscal sont exclues pendant 24 mois à partir du 1er janvier 2027 (décision ministérielle 197/2026).
- **Plus d'obligation de stockage local.** La même modification de 2026 a supprimé l'obligation de stocker les données de facturation aux EAU, ainsi que l'obligation de notifier la FTA en cas de panne du système.

Une vente au comptoir à un client de passage n'est donc pas encore concernée, mais une facture émise par votre caisse à une entreprise ou à une entité publique l'est.

## Les cinq coins, vus depuis votre système

Le ministère appelle ce modèle « Decentralized Continuous Transaction Control and Exchange ». Concrètement, il y a cinq parties, appelées coins :

1. **Coin 1 : vous, le fournisseur.** Votre caisse ou votre ERP crée les données de facture au format PINT AE.
2. **Coin 2 : votre ASP.** Il valide les données et les transmet.
3. **Coin 3 : l'ASP de votre acheteur.** Il reçoit la facture de votre ASP.
4. **Coin 4 : votre acheteur.** Son ASP lui livre la facture dans son système.
5. **Coin 5 : le volet fiscal.** Votre ASP déclare les données fiscales.

| Coin | Qui | Ce que votre système doit gérer |
|---|---|---|
| 1 | Votre entreprise | Constituer des données de facture complètes et les envoyer à votre ASP |
| 2 | Votre ASP | Recevoir un statut : acceptée, ou rejetée avec motifs |
| 3 | ASP de l'acheteur | Rien directement : votre ASP s'en charge |
| 4 | Votre acheteur | Rien directement, sauf si vous lui achetez aussi |
| 5 | Déclaration fiscale | Rien directement : votre ASP déclare pour vous |

Votre système ne parle qu'au coin 2. C'est le point clé pour une caisse ou un ERP sur mesure : vous ne construisez pas de connexion avec l'administration ni avec chaque client, mais une seule connexion avec l'ASP que vous choisissez. Comme chaque acheteur doit aussi désigner un ASP, cette même connexion doit en général fonctionner dans l'autre sens, pour que les factures de vos propres fournisseurs arrivent dans votre système sous forme de données.

Le ministère mentionne aussi OpenPeppol pour les échanges transfrontaliers. Si vous facturez des clients hors des EAU, demandez à votre ASP comment il les gère avant de signer.

## Échéances et pénalités

Le calendrier provient de la décision ministérielle 244/2025 modifiée. Le chiffre d'affaires correspond au revenu brut de votre dernier exercice comptable.

| Groupe | Désigner un ASP avant le | Mise en service |
|---|---|---|
| Chiffre d'affaires de 50 M AED ou plus | 30 octobre 2026 | 1er janvier 2027 |
| Chiffre d'affaires inférieur à 50 M AED | 31 mars 2027 | 1er juillet 2027 |
| Entités publiques | 31 mars 2027 | 1er octobre 2027 |

Une phase pilote sur base volontaire est déjà en cours, et selon le ministère, le modèle à cinq coins y fonctionne. Si votre chiffre d'affaires atteint 50 millions d'AED ou plus, votre date limite de désignation d'un ASP est déjà passée. Pour les échéances selon la taille de l'entreprise, consultez notre guide sur les [échéances de la facturation électronique aux EAU pour les PME](/blog/uae-e-invoicing-deadlines-smes).

Les pénalités sont fixées par la décision du Conseil des ministres 173/2026, annoncée le 30 octobre 2026 :

- Ne pas mettre en œuvre le système ou ne pas désigner d'ASP : 5 000 AED, puis 5 000 AED par mois, plafonnés à 50 000 AED sur 12 mois.
- Chaque facture électronique ou note de crédit non émise ou non transmise : 100 AED, plafonnés à 5 000 AED par mois.
- Ne pas informer votre ASP d'un changement des données d'enregistrement : 250 AED par jour, plafonnés à 5 000 AED par mois.

La deuxième ligne est celle qu'un système sur mesure maîtrise. Une vente qui n'atteint jamais l'ASP parce qu'une tâche de synchronisation a échoué en silence peut coûter une pénalité. Les erreurs doivent donc être visibles.

## Où se situe votre caisse ou votre ERP

Il existe trois façons de connecter un système que vous utilisez déjà :

1. **Utiliser le portail ou l'application de l'ASP**, s'il en propose, et saisir les factures B2B à la main. Cela fonctionne pour quelques factures par mois, pas au-delà.
2. **Exporter des fichiers** depuis votre système vers l'ASP à intervalles réguliers. Moins coûteux à construire, mais les rejets reviennent tard et quelqu'un doit les rapprocher de la vente d'origine.
3. **Se connecter directement via l'API de l'ASP.** Votre caisse ou votre ERP envoie chaque facture au moment de son émission, enregistre la réponse et affiche le statut sur l'écran de la facture.

Pour un système sur mesure, la troisième voie est généralement la bonne. Le travail de votre côté est le même quel que soit l'ASP choisi :

- Faire correspondre vos données de factures, de clients et d'articles aux champs demandés par votre ASP.
- Envoyer chaque facture B2B et chaque note de crédit à son émission, pas en fin de journée.
- Enregistrer la réponse de l'ASP avec la facture, y compris les motifs de rejet.
- Renvoyer automatiquement après une coupure réseau et déclencher une alerte si une facture n'est toujours pas acceptée.
- Recevoir les factures entrantes de vos fournisseurs et les rapprocher des bons de commande.

Une caisse qui sert à la fois des particuliers et des entreprises a besoin d'une règle claire au comptoir : une vente à une entreprise ou à une entité publique est une facture B2B ou B2G et part vers l'ASP, une vente à un particulier reste un ticket B2C. Indiquez le type d'acheteur dans la fiche client, pour que cette décision ne repose pas sur le seul caissier. Pour le schéma général de connexion des systèmes, lisez [connecter les systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems).

## Nettoyez vos données avant de vous connecter

Attendez-vous à ce que la plupart des problèmes viennent des données, pas du code. Réglez les points suivants avant de construire la connexion :

- **Les TRN des clients.** Chaque client professionnel doit avoir dans votre système une raison sociale et une adresse correctes, ainsi que son numéro d'enregistrement fiscal (TRN) s'il est immatriculé à la TVA. Rendez le TRN obligatoire pour les clients B2B immatriculés à la TVA.
- **Vos propres données d'enregistrement.** Gardez-les identiques dans votre système, sur EmaraTax et chez votre ASP. Tout changement doit parvenir à votre ASP, sinon une pénalité journalière peut s'appliquer.
- **Codes articles et unités.** Chaque produit et service a besoin d'un code, d'une description et d'une unité de mesure cohérents. Les lignes saisies en texte libre à la caisse sont difficiles à valider.
- **Traitement de la TVA par ligne.** Le taux général est de 5 %. Chaque article doit porter son traitement de TVA dans sa fiche, pour que le caissier n'ait jamais à le choisir.
- **Notes de crédit.** Chaque note de crédit doit renvoyer à la facture d'origine. Si votre système gère les retours en supprimant ou en modifiant des factures, changez cela en premier.
- **Numérotation des factures.** Une séquence continue par série, sans réutilisation après annulation.

Si vos données sont réparties entre plusieurs outils, par exemple une caisse pour le magasin et des tableurs pour la vente en gros, prévoyez de les regrouper dans un seul système avant la connexion. La question de savoir si ce système doit être un ERP complet est distincte, et nous la traitons dans [une petite entreprise a-t-elle vraiment besoin d'un ERP ?](/blog/erp-for-small-business-egypt) Le raisonnement vaut aussi aux EAU.

## Comment choisir un ASP sur la liste du ministère

Seuls les prestataires inscrits sur la liste du ministère des Finances peuvent être votre ASP. La liste comptait 86 ASP accrédités le 6 novembre 2026, contre 32 en mai. Les étapes indiquées par le ministère sont courtes : choisir un ASP, s'inscrire sur EmaraTax, puis se connecter.

Servez-vous de la liste pour vérifier l'accréditation, puis comparez les prestataires selon leur adéquation à votre système :

- **Documentation de l'API.** Demandez-la avant de signer. Votre développeur doit pouvoir la lire et estimer le travail.
- **Un environnement de test.** Il vous faut un bac à sable pour envoyer des factures de test et voir les vrais messages de rejet.
- **Factures entrantes.** Vérifiez que l'ASP livre les factures de vos fournisseurs dans votre système via la même API.
- **Gestion des erreurs.** Demandez comment les rejets sont renvoyés et combien de temps l'ASP conserve l'historique.
- **Tarifs.** Vérifiez si vous payez par facture, par mois ou par système connecté, et ce qui se passe au-delà de votre forfait.
- **Support et langue.** Sachez qui vous répondra si une facture reste bloquée le jour de la mise en service.

Un ASP conçu pour de grands ERP ne conviendra pas forcément à une petite caisse sur mesure, et inversement. Retenez-en deux ou trois et faites un petit test avant de vous engager.

## Ce que fait KF Tech Solutions

KF Tech Solutions n'est pas un ASP et ne figure pas sur la liste du ministère. Nous développons et maintenons des systèmes de caisse et des ERP sur mesure, nous préparons les données de ces systèmes et nous les connectons à l'ASP de votre choix via son API. Nous avons déjà connecté une caisse au système de reçus électroniques de l'Égypte, comme nous l'expliquons dans [connecter votre caisse à la facturation électronique ETA en Égypte](/blog/eta-e-invoicing-pos-integration), et le travail est le même ici : des données de base propres, un envoi fiable et des erreurs visibles. Nous travaillons avec des entreprises en Égypte et dans le Golfe. Découvrez notre [service de systèmes de gestion](/services/business-systems) et notre [page EAU](/uae).

## Questions fréquentes

### La facturation électronique aux EAU s'applique-t-elle à la caisse de mon commerce ?

Pour l'instant, seulement à ses ventes B2B et B2G. Les ventes aux consommateurs sont exclues jusqu'à ce que le ministre en décide autrement. Si votre commerce facture aussi des entreprises, ces factures sont concernées.

### Puis-je continuer à envoyer des factures PDF par e-mail ?

Vous pouvez toujours envoyer un PDF à titre de copie, mais ce n'est pas la facture électronique. La facture électronique, ce sont les données PINT AE que votre système envoie à votre ASP.

### Ai-je besoin de mon propre ASP si je ne fais qu'acheter auprès de fournisseurs ?

Selon le ministère, l'émetteur comme le destinataire doivent désigner un ASP. Vérifiez votre situation avec votre conseiller fiscal, car les dates dépendent de votre groupe de chiffre d'affaires.

### Mes données de facturation doivent-elles être stockées aux EAU ?

Plus au titre des règles de facturation électronique. La décision ministérielle 197/2026 a supprimé cette exigence. D'autres règles sectorielles, par exemple pour les prestataires de paiement ou les données de santé, peuvent encore s'appliquer.

### Combien de temps faut-il pour connecter un système sur mesure ?

Cela dépend de l'état de vos données et de l'API de l'ASP. Nettoyer les TRN des clients et les codes articles prend généralement plus de temps qu'écrire le connecteur. Commencez donc par les données.

### Que se passe-t-il si l'ASP rejette une facture ?

Votre système doit enregistrer le motif, signaler la facture à une personne et envoyer un document corrigé. Des rejets répétés indiquent généralement des données de base manquantes ou erronées. Pour le détail technique du format, consultez notre [guide PINT AE pour les développeurs](/blog/uae-pint-ae-developer-guide).

Vous voulez savoir combien de travail votre système demande avant votre date de mise en service ? [Réservez un appel gratuit](/book) ou [envoyez-nous vos coordonnées](/contact), et nous examinerons ce que vous utilisez aujourd'hui.

## Sources

- [Ministère des Finances des EAU : eInvoicing (page mise à jour le 5 novembre 2026)](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
- [Ministère des Finances des EAU : décisions sur le périmètre et le calendrier (29 septembre 2025)](https://mof.gov.ae/en/news/ministry-of-finance-announces-the-issuance-of-two-ministerial-decisions-on-the-scope-of-obligations-and-the-timelines-for-implementing-the-electronic-invoicing-system-2/)
- [Décision ministérielle n° 244 de 2025 sur la mise en œuvre du système de facturation électronique](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Ministère des Finances des EAU : modifications ciblées des décisions sur la facturation électronique](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [Ministère des Finances des EAU : modifications pour alléger la charge des entreprises (19 octobre 2026)](https://mof.gov.ae/en/news/ministry-of-finance-amends-electronic-invoicing-regulations-to-ease-the-burden-on-businesses/)
- [Ministère des Finances des EAU : pénalités mises à jour (30 octobre 2026)](https://mof.gov.ae/en/news/mof-announces-updated-administrative-penalties-related-to-the-uae-einvoicing-system-to-enhance-clarity-and-support-business-compliance/)
- [Ministère des Finances des EAU : prestataires de services accrédités (ASP)](https://mof.gov.ae/en/about-us/initiatives/einvoicing/einvoicing-accredited-service-providers-asps/)
- [Ministère des Finances des EAU : session d'information sur la facturation électronique (27 septembre 2026)](https://mof.gov.ae/en/news/ministry-of-finance-hosts-awareness-event-in-ras-al-khaimah-on-latest-einvoicing-updates/)
- [PwC Worldwide Tax Summaries : Émirats arabes unis, autres taxes](https://taxsummaries.pwc.com/united-arab-emirates/corporate/other-taxes)
- [DLA Piper : Data Protection Laws of the World, EAU](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
