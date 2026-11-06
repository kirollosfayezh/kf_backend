---
title: Systèmes de suivi et de gestion de flotte en Égypte
summary: Boîtier GPS ou téléphone du chauffeur, alertes carburant et entretien, conduite et tableaux de bord : ce qu'un système de flotte doit faire en Égypte.
tags: gestion de flotte, suivi GPS, géolocalisation de véhicules, suivi du carburant, IoT, Égypte
alt: Deux camions fourgons blancs roulent sur une route à flanc de colline au petit matin
caption: Une fois le camion sorti du dépôt, seul le suivi indique où il se trouve, comment il est conduit et ce qu’il consomme.
stats: 2|façons de suivre un véhicule : boîtier fixe ou téléphone du chauffeur; 1|carte pour chaque véhicule, chauffeur et trajet; 500+|groupes électrogènes suivis en direct par GenTrack
---

Un système de gestion de flotte en Égypte montre sur un seul écran où se trouve chaque véhicule, comment il est conduit, combien de carburant il consomme et quand son prochain entretien est dû. Il repose sur trois éléments : une source de localisation dans chaque véhicule, un serveur qui stocke les données, et un tableau de bord avec des alertes auxquelles quelqu'un réagit vraiment. Le suivi est la partie facile à acheter ; la valeur vient des rapports sur le carburant, l'entretien et les chauffeurs construits par-dessus.

Que vous gériez cinq camionnettes de livraison, une équipe commerciale sur la route ou cinquante camions entre Le Caire et les ports, les mêmes décisions se posent. Voici comment les prendre.

## Boîtier GPS ou téléphone du chauffeur ?

Il existe deux façons d'obtenir la position d'un véhicule, et elles conviennent à des flottes différentes.

| | Boîtier GPS fixe | Application sur le téléphone du chauffeur |
|---|---|---|
| Coût du matériel | Un boîtier par véhicule, plus l'installation | Aucun si les chauffeurs ont déjà un smartphone |
| Coût récurrent | Une carte SIM data par boîtier | Utilise les données mobiles du chauffeur |
| Fonctionne hors service | Oui, il suit le véhicule | Seulement quand l'application tourne |
| Le chauffeur peut-il le couper ? | Difficilement, et le système le voit | Facilement : fermer l'application ou couper la localisation |
| Données carburant et moteur | Possibles avec des capteurs ou la prise de diagnostic | Non |
| Idéal pour | Véhicules de l'entreprise, camions, marchandises de valeur | Commerciaux et coursiers avec leur propre véhicule |

Beaucoup de flottes finissent par utiliser les deux : des boîtiers dans les véhicules de l'entreprise, et une application pour le personnel qui conduit sa propre voiture ou doit enregistrer visites, photos et signatures chez le client.

Un bon boîtier continue d'enregistrer quand le signal mobile disparaît, sur les routes du désert ou dans les parkings souterrains, et envoie les points stockés dès que la connexion revient. Demandez à chaque fournisseur ce qu'il advient des données pendant une coupure. Si la réponse est que le trajet aura un trou, cherchez ailleurs.

Les boîtiers de suivi sont des équipements radio. Demandez au fournisseur de confirmer par écrit que le modèle est homologué pour l'Égypte par l'autorité de régulation des télécommunications (NTRA), et vérifiez avec lui les règles en vigueur avant d'importer vous-même des boîtiers.

## Le carburant : là où l'argent fuit

Pour la plupart des flottes, le carburant est le premier poste qu'un système de suivi rembourse. Les contrôles qui comptent :

- **Litres contre kilomètres.** Chaque véhicule a une consommation normale. Une camionnette qui consomme soudain plus aux 100 km est en panne, surchargée ou perd du carburant.
- **Chutes de niveau soudaines.** Avec une sonde de niveau dans le réservoir, une baisse pendant que le véhicule est garé apparaît immédiatement, avec l'heure et le lieu.
- **Tickets de carburant contre données.** Les chauffeurs saisissent ou photographient chaque plein. Le système compare les litres payés à la hausse réelle du réservoir.
- **Ralenti.** Un moteur qui tourne une heure à l'arrêt devant le bureau d'un client, c'est du carburant brûlé pour rien.

C'est le même problème que nous avons résolu avec notre projet [GenTrack](/projects/gentrack) : le suivi en direct de plus de 500 groupes électrogènes de location dans toute l'Égypte, avec une détection des anomalies de carburant qui signale les relevés incompatibles avec un usage normal. Un groupe électrogène et un camion brûlent tous deux du carburant qui peut disparaître, et la logique pour le repérer est la même.

## L'entretien selon le plan, pas selon la mémoire

La plupart des pannes, c'est une vidange ou un jeu de pneus que personne n'a pensé à faire. Un système de flotte suit la distance réelle et les heures moteur de chaque véhicule, de sorte que les rappels d'entretien reposent sur l'usage et non sur une date notée dans un carnet.

- Intervalles d'entretien par véhicule : huile, filtres, pneus, freins.
- Rappels avant le renouvellement de l'immatriculation, l'expiration de l'assurance et les contrôles techniques.
- Un historique d'entretien par véhicule avec le coût de chaque intervention, pour voir quels véhicules coûtent plus à garder qu'à remplacer.

## La conduite, sans en faire de la surveillance

Un boîtier équipé d'un accéléromètre peut enregistrer les freinages brusques, les accélérations fortes, les virages serrés et les excès de vitesse. Traduit en un score simple par chauffeur, cela réduit les accidents, la consommation et l'usure du véhicule.

Cela fonctionne mieux quand les chauffeurs savent ce qui est mesuré et pourquoi, et quand les bons scores sont récompensés au lieu de seulement sanctionner les mauvais. La position des chauffeurs est une donnée personnelle : décidez qui peut la consulter, combien de temps vous la conservez et si le suivi continue hors des heures de travail. Notre guide sur les [règles de protection des données pour les applications en Égypte](/blog/egypt-data-protection-law-apps) détaille ces obligations.

## Des tableaux de bord et des rapports que quelqu'un lit

Une carte avec des points qui bougent impressionne en démonstration, mais personne ne regarde une carte toute la journée. Ce qu'un gestionnaire de flotte utilise vraiment :

- **Des alertes** pour les exceptions : un véhicule hors de sa zone, une chute de carburant, un excès de vitesse, un boîtier hors ligne.
- **Un rapport quotidien ou hebdomadaire** par véhicule et par chauffeur : distance, heures de travail, ralenti, carburant consommé, coût au kilomètre.
- **L'historique des trajets** pour régler les litiges avec les clients sur les heures d'arrivée.

Vérifiez que les chiffres veulent dire ce qu'ils prétendent. Des « heures de travail » comptées du contact mis au contact coupé ne sont pas des heures passées chez le client. Nous avons écrit sur ce piège dans [Your dashboard is lying to you](/blog/your-dashboard-is-lying-to-you).

## Avant d'acheter : les questions à poser

1. À qui appartiennent les données, et pouvez-vous tout exporter si vous changez de fournisseur ?
2. Le système continue-t-il d'enregistrer sans signal et comble-t-il les trous ensuite ?
3. Y a-t-il un abonnement mensuel par véhicule, et que comprend-il ?
4. Le tableau de bord et l'application chauffeur sont-ils disponibles en arabe ?
5. Peut-il se connecter à votre comptabilité, votre ERP ou votre système de commandes, pour relier les trajets aux factures et aux livraisons ?
6. Qui installe les boîtiers, et qui intervient quand l'un d'eux cesse d'émettre ?

La question de l'intégration compte plus qu'il n'y paraît. Des trajets reliés aux commandes, un carburant relié à la comptabilité et des chauffeurs reliés à la paie transforment le suivi en véritable gestion. Notre article sur la [connexion des systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems) explique comment faire.

## Questions fréquentes

### Puis-je suivre mes véhicules uniquement avec les téléphones des chauffeurs ?

Oui, pour le personnel qui conduit sa propre voiture ou pour une petite flotte. Le démarrage coûte peu, mais le chauffeur peut couper le suivi et les données carburant ou moteur ne sont pas accessibles. Pour les véhicules de l'entreprise, un boîtier fixe est plus fiable.

### Le système fonctionne-t-il sans internet dans le véhicule ?

Un bon boîtier stocke ses relevés quand le signal disparaît et les envoie à la reconnexion. L'historique des trajets reste complet, et le tableau de bord indique quels véhicules sont temporairement hors ligne.

### Un système de flotte peut-il détecter le vol de carburant ?

Il peut le signaler. Avec une sonde de niveau, une chute soudaine pendant que le véhicule est garé déclenche une alerte avec l'heure et le lieu. Sans sonde, comparer les tickets de carburant à la distance parcourue montre quand même les véhicules qui consomment plus qu'ils ne devraient.

### Ai-je besoin d'un système sur mesure ou d'une solution toute faite ?

Un service de suivi tout fait suffit si vous avez seulement besoin d'une carte et de rapports simples. Un système sur mesure se justifie quand le suivi doit être relié aux commandes, aux factures, à la location ou à la paie, ou quand votre activité repose sur des équipements plutôt que sur des véhicules classiques, comme pour la [location de matériel](/blog/equipment-rental-software).

### Pouvons-nous commencer avec quelques véhicules ?

Oui. Commencer avec quelques véhicules montre si les relevés, les alertes et les rapports sont utiles avant d'équiper toute la flotte.

## Parlons de votre flotte

KF Tech Solutions conçoit des systèmes de surveillance IoT et des logiciels de gestion : les boîtiers et leurs données, un backend cloud, des tableaux de bord web et des applications mobiles, avec des alertes et la gestion des appareils à distance. GenTrack, notre plateforme de suivi de groupes électrogènes, repose sur les mêmes briques qu'une flotte de véhicules. Découvrez notre [service de solutions IoT](/services/iot-solutions). Nous travaillons avec des entreprises en Égypte et dans le Golfe.

Si vous voulez savoir où vont vos véhicules et votre carburant, [réservez un appel gratuit](/book) ou [parlez-nous de votre flotte](/contact). Nous vous dirons si un service tout fait, un système sur mesure ou un mélange des deux vous convient le mieux.

## Sources

- [National Telecom Regulatory Authority (NTRA), Égypte](https://www.tra.gov.eg/en/)
- [KF Tech Solutions : étude de cas GenTrack](/projects/gentrack)
