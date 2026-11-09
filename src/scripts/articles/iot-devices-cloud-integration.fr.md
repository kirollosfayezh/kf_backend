---
title: Connecter des objets IoT au cloud : guide pratique
summary: Connectivité, MQTT ou HTTP, AWS IoT Core ou Azure IoT Hub face à un backend sur mesure, mise en mémoire, sécurité et hébergement : relier vos objets au cloud.
tags: IoT, supervision IoT, MQTT, intégration cloud, intégration API, Égypte
alt: Une main tient une petite carte microcontrôleur Wi-Fi devant un ordinateur portable affichant du code
caption: La carte est la partie facile ; le vrai travail consiste à faire parvenir ses mesures au cloud de façon fiable et sécurisée.
stats: 6|maillons dans la chaîne, de l'appareil à la commande à distance; 2|façons courantes d'envoyer les données : MQTT ou HTTP; 500+|groupes électrogènes suivis en direct par GenTrack
---

Intégrer des objets connectés à une plateforme cloud, c'est construire une chaîne : l'appareil lit un capteur, envoie la mesure sur un réseau (cellulaire, Wi-Fi, LoRaWAN ou câble), un service cloud la reçoit et la stocke, puis des tableaux de bord, des alertes et des applications la transforment en action, jusqu'aux commandes renvoyées à l'appareil. La plupart des appareils dialoguent avec le cloud en MQTT, et HTTP sert aux données simples ou occasionnelles. Le côté réception peut être un service géré comme AWS IoT Core ou Azure IoT Hub, ou votre propre backend ; le bon choix dépend du nombre d'appareils et des systèmes auxquels les données doivent être reliées.

Que vous connectiez des groupes électrogènes, des cuves, des chambres froides, des balances ou des machines, voici les décisions à prendre avant d'acheter le matériel.

## La chaîne, de l'appareil au tableau de bord

Tout système d'objets connectés compte les mêmes six maillons, et un maillon faible casse toute la chaîne.

1. **Appareil et firmware.** Le capteur ou l'automate, et le code qui prend les mesures, les stocke et se reconnecte après une panne.
2. **Connectivité.** La façon dont les données quittent le site : carte SIM, Wi-Fi, réseau radio longue portée ou câble.
3. **Réception.** Le point d'entrée cloud qui vérifie l'identité de chaque appareil et reçoit ses messages.
4. **Stockage.** Une base de données des mesures par appareil et par heure, avec l'état actuel de chaque appareil.
5. **Tableaux de bord, alertes et applications.** Les écrans que les équipes utilisent, et les alertes qui les préviennent quand une mesure dépasse un seuil ou qu'un appareil se tait.
6. **Commandes à distance.** Le chemin retour : modifier un réglage, redémarrer une unité ou mettre à jour le firmware sans se déplacer.

Notre plateforme [GenTrack](/projects/gentrack) couvre toute la chaîne : un matériel conçu sur mesure sur chacun des plus de 500 groupes électrogènes de location répartis en Égypte, la position en direct sur une carte, la détection d'anomalies de carburant, la gestion des appareils à distance et un ERP cloud pour l'activité de location. [Smart Balance](/projects/smart-balance) en est un exemple plus petit : une balance équipée d'un Raspberry Pi qui transmet le poids en direct à une application mobile.

## Connectivité : comment les données quittent l'appareil

Le réseau détermine où l'appareil peut être installé, la quantité de données qu'il peut envoyer et son coût de fonctionnement.

| Option | Portée | Volume de données | Consommation | Coût récurrent | Idéal pour |
|---|---|---|---|---|---|
| Cellulaire 4G | Partout où il y a du réseau mobile | Élevé | Élevée | Une SIM data par appareil | Équipements mobiles, sites isolés, données fréquentes ou volumineuses |
| LTE-M / NB-IoT | Réseau mobile, souvent meilleur en intérieur | Faible | Très faible | Une SIM par appareil, là où l'opérateur le propose | Capteurs sur batterie envoyant de petites mesures |
| Wi-Fi | À l'intérieur d'un bâtiment | Élevé | Moyenne à élevée | Utilise un réseau existant | Usines, magasins, bureaux, chambres froides |
| LoRaWAN | Longue portée, via une passerelle | Très faible | Très faible | Passerelles et serveur réseau | Nombreux petits capteurs sur une exploitation ou un grand site |
| Filaire (Ethernet, RS-485) | La longueur du câble | Élevé | Alimentation secteur | Installation uniquement | Machines fixes et armoires de commande |

Le LTE-M et le NB-IoT ne sont pas disponibles sur tous les réseaux : vérifiez auprès de l'opérateur mobile avant de choisir le matériel. Le Wi-Fi dépend du routeur de quelqu'un d'autre ; si le mot de passe change, les appareils se déconnectent. Enfin, tout ce qui émet par radio est réglementé : en Égypte, demandez au fournisseur de confirmer que le modèle est homologué par l'autorité de régulation des télécommunications (NTRA), et vérifiez les règles locales dans tout autre pays.

## MQTT ou HTTP, et quand une passerelle est nécessaire

**MQTT** est un protocole de messagerie ouvert conçu pour les objets connectés. L'appareil garde une connexion ouverte avec un broker et publie de petits messages sur des sujets comme `site-12/generator-4/fuel`. La même connexion permet au cloud de renvoyer immédiatement des commandes, et le protocole peut confirmer la livraison des messages qui ne doivent pas se perdre. Il convient aux appareils qui envoient souvent ou doivent recevoir des commandes.

**HTTP** signifie une requête web classique pour chaque mesure ou lot de mesures. C'est simple et cela passe presque tous les pare-feu, ce qui convient aux appareils qui envoient quelques fois par jour ou téléversent des fichiers. Sa faiblesse est le sens inverse : le cloud ne peut joindre l'appareil que lorsque celui-ci le contacte.

Une **passerelle** se place entre les appareils et internet. Elle est nécessaire quand les appareils ne peuvent pas accéder à internet eux-mêmes (capteurs LoRaWAN ou Bluetooth, machines qui parlent un protocole industriel sur câble), ou quand une seule connexion pour une salle pleine de capteurs coûte moins cher qu'une SIM par capteur. Elle collecte les mesures, les met en mémoire et les transmet au cloud.

## Plateforme IoT gérée ou backend sur mesure ?

Les deux fonctionnent, et les compromis sont réels.

| | Plateforme gérée (AWS IoT Core, Azure IoT Hub) | Backend sur mesure |
|---|---|---|
| Identité et certificats des appareils | Intégrés | Construits avec des bibliothèques standard |
| Très grandes flottes | Conçue pour cela | Demande une conception soignée |
| Tarifs | À l'usage ; consultez la grille tarifaire actuelle du fournisseur | Coûts de serveur et de base de données que vous maîtrisez |
| Dépendance au fournisseur | Code des appareils et règles liés à un seul fournisseur | Transférable d'un hébergeur à l'autre |
| Logique métier (location, factures, ERP) | Reste à construire par-dessus | Construite dans le même système |

AWS IoT Core accepte les appareils en MQTT, en MQTT sur WebSockets, en HTTPS et en LoRaWAN. Azure IoT Hub tient un registre de chaque appareil et l'authentifie avec une clé ou un certificat X.509. Les plateformes évoluent aussi : Google a retiré son service Cloud IoT Core en 2023, et les entreprises qui s'appuyaient dessus ont dû migrer.

Une plateforme gérée se justifie surtout pour de très grandes flottes ou pour des équipes déjà engagées sur un seul cloud. Pour des dizaines ou des centaines d'appareils dont les données doivent piloter des commandes, des locations, des factures ou la maintenance, un backend sur mesure avec un broker MQTT standard est souvent plus simple à exploiter et garde tout au même endroit. Notre [service API et backend](/services/api-and-backend) construit l'un comme l'autre, et notre article sur la [connexion des systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems) explique comment les données rejoignent ensuite votre ERP ou votre comptabilité.

## Quand la connexion tombe : mise en mémoire et horodatage

La connexion tombera, dans un sous-sol, sur une route du désert ou lors d'une panne réseau. Un appareil bien conçu continue de fonctionner :

- **Mise en mémoire sur l'appareil.** Les mesures sont stockées localement et envoyées au retour de la connexion, les plus anciennes d'abord.
- **Horodatage à la source.** Chaque mesure porte l'heure à laquelle elle a été prise, pas l'heure d'arrivée. Sinon, une coupure de trois heures arrive d'un seul bloc où tout semble dater de « maintenant ».
- **Une horloge juste.** L'appareil synchronise son horloge via le réseau ou le GPS, et le serveur rejette les heures manifestement fausses.
- **Montrer le trou.** Le tableau de bord signale un appareil hors ligne après un silence défini, pour que personne ne prenne le silence pour « tout va bien ».

## Identité et sécurité des appareils

Un appareil connecté est une porte d'entrée dans votre système. Traitez chacun comme un utilisateur avec ses propres identifiants.

- **Une identité par appareil.** Chaque appareil a son propre certificat ou sa propre clé : un appareil volé ou cloné est révoqué seul, pas toute la flotte.
- **Connexions chiffrées.** Chaque connexion utilise TLS, de sorte que les mesures et les commandes ne peuvent être ni lues ni modifiées en chemin.
- **Droits minimaux.** Un appareil ne peut publier que ses propres données et ne recevoir que ses propres commandes.
- **Mises à jour à distance (OTA).** Le firmware se met à jour à distance, avec une signature pour que les appareils n'acceptent que des mises à jour authentiques, et se déploie d'abord sur quelques appareils. Un appareil que vous ne pouvez pas mettre à jour, vous finirez par aller le voir en voiture.

## Volume de données et durée de conservation

Faites le calcul avant de choisir une base de données. Une mesure par minute donne 1 440 mesures par jour et par appareil ; cent appareils en produisent 144 000 par jour, environ 52 millions par an. Une base conçue pour les séries temporelles s'en charge sans peine ; une autre aura du mal.

Décidez tôt combien de temps conserver le détail complet. Un schéma courant : les mesures brutes pendant quelques mois, puis des synthèses horaires ou journalières conservées des années.

## Où héberger les données

C'est vous qui choisissez le fournisseur cloud et la région, et les comptes doivent être à votre nom. Choisissez une région proche des appareils et des utilisateurs, et vérifiez si votre secteur ou vos clients exigent que les données restent dans un pays donné. Si les données concernent des personnes, comme la position de chauffeurs, la loi sur la protection des données s'applique ; consultez notre guide sur les [règles de protection des données pour les applications en Égypte](/blog/egypt-data-protection-law-apps).

## Questions fréquentes

### Dois-je utiliser MQTT ou HTTP pour mes appareils ?

MQTT si les appareils envoient souvent ou doivent recevoir des commandes rapidement ; HTTP s'ils envoient quelques fois par jour et n'ont jamais besoin d'être joints depuis le cloud. Beaucoup de systèmes utilisent MQTT pour les mesures et les commandes, et HTTP pour le téléversement de fichiers.

### Ai-je besoin d'AWS IoT Core ou d'Azure IoT Hub ?

Non. Ce sont de bons services, surtout pour de très grandes flottes, mais un backend sur mesure avec un broker MQTT standard fonctionne bien aussi et se relie souvent plus facilement à vos systèmes de gestion. Décidez selon la taille de la flotte, les compétences de votre équipe et le degré de dépendance à un fournisseur que vous acceptez.

### Pouvons-nous connecter des appareils que nous possédons déjà ?

Souvent, oui. Beaucoup de machines et d'automates exposent déjà leurs données sur un câble ou un réseau local, et une passerelle peut les lire et les transmettre au cloud. La première étape consiste à savoir ce que chaque appareil peut fournir.

### Par où commencer ?

Par un pilote sur quelques appareils, pour valider sur site les mesures, la connectivité et les alertes avant d'équiper toutes les unités. Notre article sur la façon dont [l'IoT réduit les coûts d'exploitation](/blog/iot-reduce-operating-costs) aide à choisir quoi mesurer en premier, et notre guide des [systèmes de suivi de flotte](/blog/fleet-tracking-system-egypt) montre la même chaîne appliquée aux véhicules.

## Parlons de vos appareils

KF Tech Solutions construit des systèmes IoT sur toute la chaîne : configuration des appareils et firmware, backend cloud, tableaux de bord web, applications mobiles, alertes et gestion des appareils à distance. Le code source et les comptes cloud vous appartiennent, et nous déployons chez le fournisseur et dans la région que vous choisissez. Découvrez notre [service de solutions IoT](/services/iot-solutions). Nous travaillons avec des entreprises en Égypte et dans le Golfe.

Si vous avez des appareils à connecter, ou un système qui perd déjà des données, [réservez un appel gratuit](/book) ou [parlez-nous de votre projet](/contact). Nous vous proposerons la connectivité, le protocole et la plateforme adaptés à votre cas.

## Sources

- [MQTT.org : le standard MQTT](https://mqtt.org/)
- [AWS IoT Developer Guide : What is AWS IoT?](https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html)
- [Microsoft Learn : Qu'est-ce qu'Azure IoT Hub ?](https://learn.microsoft.com/fr-fr/azure/iot-hub/iot-concepts-and-iot-hub)
- [National Telecom Regulatory Authority (NTRA), Égypte](https://www.tra.gov.eg/)
- [KF Tech Solutions : étude de cas GenTrack](/projects/gentrack)
