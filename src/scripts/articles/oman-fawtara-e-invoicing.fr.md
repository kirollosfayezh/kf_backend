---
title: Facture électronique à Oman (Fawtara) : ce que votre caisse doit faire
summary: Oman impose la facture XML dès le 1er avril 2027. Qui est concerné, comment fonctionne le modèle à cinq coins de Fawtara et ce que doit faire votre caisse.
tags: Fawtara, facture électronique, TVA, Peppol, logiciel de caisse, Oman
alt: Coupole et minaret à carreaux bleus d’une mosquée sur le front de mer de Mutrah, à Mascate, devant les montagnes
caption: Avec Fawtara, chaque facture de vente à Oman devient une donnée structurée transmise par un prestataire agréé.
stats: 1er avr. 2027|la facture électronique devient obligatoire au-delà de 5 millions OMR de livraisons annuelles; 1er oct. 2027|la date pour toutes les autres entreprises assujetties à la TVA; 24 h|pour déclarer une facture B2C, les factures B2B étant échangées en temps réel
---

Oman rend la facturation électronique obligatoire pour les entreprises assujetties à la TVA. Selon la décision 189/2026, les sociétés dont les livraisons annuelles dépassent 5 millions OMR doivent émettre leurs factures fiscales au format XML, via un système relié à un prestataire agréé par l'administration fiscale omanaise (Oman Tax Authority, OTA), à partir du 1er avril 2027, et toutes les autres entreprises assujetties à partir du 1er octobre 2027. Les factures papier, PDF ou envoyées sous forme d'image par e-mail ne compteront plus : votre logiciel de caisse (POS) ou votre ERP doit produire des données de facture structurées et les transmettre à un prestataire agréé.

Dernière vérification : 6 novembre 2026

Ce programme s'appelle Fawtara. Ce guide explique ce qui a été décidé, comment le système fonctionne et ce qu'il faut vérifier dans le logiciel que vous utilisez aujourd'hui. Il s'agit d'une information générale, pas d'un conseil fiscal ou juridique : vérifiez auprès de l'OTA ou de votre conseiller fiscal comment les règles s'appliquent à votre entreprise.

## Ce qu'Oman a décidé

Oman applique une TVA de 5 % depuis le 16 avril 2021. Jusqu'ici, une facture de TVA pouvait être imprimée, enregistrée en PDF ou envoyée par e-mail. La décision 189/2026, rapportée par l'Oman Observer le 9 août 2026, change cela :

- Toutes les sociétés assujetties à la TVA doivent émettre leurs factures fiscales sous forme électronique.
- Les factures doivent utiliser le format XML approuvé, et être émises, transmises et conservées dans ce format électronique.
- Elles doivent être émises via un système électronique relié à un prestataire de facturation électronique agréé par l'OTA.
- Chaque facture doit être sécurisée, vérifiable et contenir toutes les mentions exigées par la loi sur la TVA.
- Les factures papier, les factures PDF et les factures envoyées sous forme d'image par e-mail ne remplissent pas l'exigence.

L'OTA a sélectionné 100 sociétés pour une phase pilote volontaire, prévue pour démarrer fin août 2026. Deloitte évoque environ 150 participants. Dans les deux cas, le pilote est volontaire. Pour toutes les autres entreprises, ce sont les deux dates obligatoires ci-dessous qui comptent.

## Qui est concerné, et quand

| Groupe | Date | Ce qui s'applique |
|---|---|---|
| Sociétés du pilote | Fin août 2026 | Tests volontaires avec l'OTA |
| Livraisons annuelles supérieures à 5 millions OMR | 1er avril 2027 | Factures XML via un prestataire agréé par l'OTA |
| Toutes les autres entreprises assujetties à la TVA | 1er octobre 2027 | Les mêmes exigences |

Deux points demandent de la prudence. D'abord, certaines sources secondaires antérieures donnaient d'autres dates, et la FAQ Fawtara de l'OTA décrit une troisième phase pour les petites et moyennes entreprises, antérieure à la décision 189/2026. La décision fixe deux dates : planifiez sur cette base, et consultez les pages Fawtara de l'OTA avant d'arrêter votre calendrier. Ensuite, si vos livraisons sont proches de 5 millions OMR, demandez à l'OTA ou à votre conseiller sur quelle période le seuil est mesuré. Ce détail décide si vous disposez de six mois de plus ou non.

Si vous êtes sous le seuil, le 1er octobre 2027 peut sembler lointain. Il est à moins d'un an, et les étapes ci-dessous prennent du temps.

## Comment fonctionne Fawtara : le modèle à cinq coins

La FAQ de l'OTA décrit un modèle à cinq coins fondé sur Peppol, le réseau international d'échange de factures électroniques. Les prestataires passent des tests sur la plateforme de test d'OpenPeppol dans le cadre de leur agrément par l'OTA. Dans un modèle à cinq coins, une facture circule ainsi :

1. **Vous, le vendeur,** créez la facture dans votre caisse, votre ERP ou votre logiciel comptable.
2. **Votre prestataire agréé** reçoit les données de la facture depuis votre système, les contrôle et les envoie sur le réseau.
3. **Le prestataire de votre acheteur** les reçoit.
4. **Votre acheteur** reçoit la facture dans son propre système.
5. **L'OTA** reçoit les données fiscales dont elle a besoin.

Conséquence pratique : votre caisse ne se connecte pas directement à l'OTA. Vous choisissez un prestataire agréé, et votre système communique avec lui. La FAQ de l'OTA précise aussi que les ERP peuvent être conservés, selon l'accord passé avec votre prestataire agréé. Fawtara ne vous oblige donc pas à changer de logiciel, mais celui que vous utilisez doit pouvoir produire les données de facture et les envoyer à votre prestataire.

## B2B, B2C et le code QR

Selon la FAQ de l'OTA, le délai dépend du client :

- **Les factures B2B** (entre entreprises) sont échangées en temps réel.
- **Les factures B2C** (aux consommateurs) sont déclarées dans les 24 heures.
- **Le B2C démarre en même temps que le B2B et le B2G** : la vente au détail n'obtient pas de date plus tardive.
- **Un code QR est obligatoire sur les factures B2C**, et c'est le contribuable qui le génère, donc en pratique votre caisse.
- **Les factures bilingues sont autorisées** : une facture en arabe et en anglais convient.
- **Un ticket papier peut encore être remis au consommateur**, mais seulement en plus de la facture électronique, jamais à sa place.

Pour une boutique, un restaurant ou une pharmacie, c'est la partie de Fawtara qui compte le plus. Les ventes aux consommateurs sont incluses dès le départ : une caisse qui imprime aujourd'hui un simple ticket devra créer pour chaque vente un enregistrement de facture électronique et un code QR, puis le déclarer à votre prestataire dans les 24 heures.

## Ce que votre caisse ou votre ERP doit faire

Les règles précises viennent des spécifications techniques de l'OTA et du prestataire que vous choisissez, mais le travail se ramène presque toujours aux mêmes capacités. Utilisez cette liste lors de vos échanges avec votre fournisseur actuel :

- **Des données de facture structurées.** Chaque facture doit porter les champs exigés par la loi sur la TVA, enregistrés comme des données et non comme du texte sur une mise en page imprimée : coordonnées du vendeur et de l'acheteur, numéros de TVA lorsqu'ils sont requis, lignes d'articles, taux et montants de TVA, totaux.
- **Du XML au format approuvé,** ou un export propre que votre prestataire convertit. Demandez au prestataire ce qu'il attend.
- **Une connexion à votre prestataire.** En général une API : la caisse envoie la facture et reçoit une réponse indiquant si elle a été acceptée.
- **Un statut pour chaque facture.** Chaque vente doit indiquer si la facture a été envoyée, acceptée ou rejetée, et pourquoi. Sans cela, vous ne pouvez pas prouver qu'une facture a été déclarée.
- **Nouvelle tentative et mode hors ligne.** Si Internet tombe, la boutique doit continuer à vendre et envoyer automatiquement les factures B2C en attente au retour de la connexion, bien avant la fin des 24 heures. Les factures B2B sont échangées en temps réel : prévoyez une connexion fiable là où vous les émettez.
- **Un code QR sur les tickets B2C,** généré par le système et imprimé ou affiché au client.
- **Retours et corrections.** Demandez comment votre système et votre prestataire traitent un remboursement ou une facture corrigée. Selon la FAQ de l'OTA, une facture émise se corrige par l'émission d'un avoir ou d'une note de débit électronique.
- **Des archives électroniques.** Les factures doivent être conservées dans le format électronique approuvé, pas seulement en copie papier.
- **Du texte en arabe et en anglais** sur la facture, si vous souhaitez des factures bilingues.

Si vos succursales utilisent des systèmes différents, ou si certaines factures sont encore saisies dans un tableur, chacun de ces circuits doit pouvoir atteindre le prestataire. C'est souvent le moment où une entreprise regroupe ventes, stock et comptabilité dans un seul système. Notre article sur [la question de savoir si une petite entreprise a vraiment besoin d'un ERP](/blog/erp-for-small-business-egypt) a été écrit pour l'Égypte, mais les questions qu'il pose sont les mêmes à Mascate.

## Un plan jusqu'à votre échéance

Comptez à rebours depuis votre date, le 1er avril 2027 ou le 1er octobre 2027 :

1. **Recensez chaque endroit où une facture est émise :** la caisse de chaque succursale, le logiciel comptable, la boutique en ligne et les factures manuelles.
2. **Demandez par écrit à chaque éditeur** s'il prendra en charge Fawtara, via quel prestataire agréé et à quelle date.
3. **Choisissez un prestataire agréé par l'OTA** et comparez les tarifs. Selon la FAQ de l'OTA, chaque prestataire fixe ses propres frais, par facture, par abonnement ou autrement, et l'OTA elle-même ne facture rien.
4. **Nettoyez vos données de base :** numéros de TVA des clients, libellés d'articles, catégories de TVA et informations des succursales.
5. **Développez ou activez l'intégration** et testez-la dans l'environnement de test du prestataire, y compris les retours, les ventes annulées et une coupure d'Internet.
6. **Formez caissiers et comptables** à ce qui change au comptoir et à la clôture du mois.
7. **Passez en production tôt,** avec le temps de corriger les factures rejetées avant votre date.

Si un fournisseur ne peut pas répondre clairement à l'étape 2, considérez que c'est la réponse. Un système qui n'est plus maintenu n'obtiendra pas tout seul une connexion à la facturation électronique, et le remplacer dans les deux derniers mois est bien plus difficile que maintenant.

## Le rôle de KF Tech Solutions

KF Tech Solutions développe des caisses, des ERP et d'autres [systèmes de gestion](/services/business-systems), et nous travaillons avec des entreprises en Égypte et dans le Golfe ([notre page Golfe](/gulf)). Le travail le plus proche que nous avons livré est son équivalent égyptien : l'intégration d'une caisse au système de reçus électroniques de l'administration fiscale égyptienne, qui transmet chaque reçu et conserve son statut avec la vente ([ce qu'implique ce type d'intégration](/blog/eta-e-invoicing-pos-integration)). Nous ne sommes pas un prestataire agréé par l'OTA, et le modèle de Fawtara est différent. Pour une entreprise omanaise, nous commençons par examiner ce que vous utilisez aujourd'hui, et nous vous disons franchement s'il semble capable de produire ce que Fawtara exige. Si votre système a été développé sur mesure, nous pouvons chiffrer les modifications nécessaires.

## Questions fréquentes

### La facture électronique est-elle obligatoire à Oman ?

Oui, pour les entreprises assujetties à la TVA, en vertu de la décision 189/2026 : à partir du 1er avril 2027 pour les sociétés dont les livraisons annuelles dépassent 5 millions OMR, et à partir du 1er octobre 2027 pour les autres. Consultez les pages Fawtara de l'OTA avant de planifier, au cas où les dates changeraient.

### Dois-je remplacer ma caisse ou mon ERP ?

Pas nécessairement. La FAQ de l'OTA indique que les ERP peuvent être conservés, selon l'accord passé avec votre prestataire agréé. Votre système doit cependant produire les données de facture requises et se connecter à un prestataire agréé : demandez à votre fournisseur s'il le fera, et quand.

### Une facture PDF suffit-elle encore ?

Non. D'après ce qui a été rapporté, la décision précise que les factures papier, les PDF et les factures envoyées sous forme d'image par e-mail ne remplissent pas l'exigence. Les factures doivent être émises au format XML approuvé.

### Fawtara couvre-t-il les ventes aux consommateurs ?

Oui. Selon la FAQ de l'OTA, les factures B2C démarrent en même temps que le B2B, doivent être déclarées dans les 24 heures et porter un code QR généré par le contribuable.

### Mes factures peuvent-elles être en arabe et en anglais ?

Oui. La FAQ de l'OTA indique que les factures bilingues sont autorisées.

### Puis-je connecter mon système directement à l'OTA ?

Fawtara passe par des prestataires agréés par l'OTA. Votre système envoie chaque facture à votre prestataire, qui se charge de l'échange sur le réseau Peppol. Selon la FAQ de l'OTA, une société qui remplit les critères des prestataires et réussit les tests de l'OTA peut aussi être agréée et agir comme son propre prestataire.

Vous ne savez pas si votre système actuel sera prêt à temps ? [Réservez un appel gratuit](/book) et dites-nous ce que vous utilisez, ou [écrivez-nous](/contact).

## Sources

- [Oman Observer : Decision issued on tax invoices in electronic format, 9 août 2026](https://www.omanobserver.om/article/1194193/business/decision-issued-on-tax-invoices-in-electronic-format)
- [Administration fiscale d'Oman : FAQ Fawtara, mise à jour le 23 avril 2026](https://tms.taxoman.gov.om/portal/documents/d/taxportal/faq-s)
- [Deloitte : Oman e-invoicing (Fawtara)](https://www.deloitte.com/middle-east/en/services/tax/perspectives/oman-e-invoicing-fawtara.html)
- [PwC : Oman, other taxes (TVA)](https://taxsummaries.pwc.com/oman/corporate/other-taxes)
