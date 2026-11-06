---
title: Loi égyptienne sur les données : ce que votre application doit faire
summary: Une liste pratique pour les applications selon la loi égyptienne 151/2020 : consentements, droits des utilisateurs, sécurité, violations et licence du PDPC.
tags: protection des données, loi 151 de 2020, PDPC, conformité des applications, vie privée, Égypte
stats: 151|de 2020 : le numéro de la loi égyptienne sur la protection des données personnelles; 72|heures pour signaler une violation de données au PDPC; 3|jours ouvrables pour prévenir ensuite les personnes concernées
---

La loi égyptienne n° 151 de 2020 sur la protection des données personnelles s'applique à toute entreprise qui collecte, conserve ou traite des données personnelles par voie électronique, et son règlement d'application a désormais été publié. Concrètement, votre application doit enregistrer les consentements, fixer une finalité et une durée de conservation pour chaque type de donnée, permettre aux utilisateurs d'exercer leurs droits, assurer une vraie sécurité, prévoir une procédure de violation en 72 heures et disposer d'une licence ou d'une autorisation du Personal Data Protection Center (PDPC). Ce guide transforme ces obligations en une liste de contrôle sur laquelle vos développeurs peuvent travailler.

Dernière vérification : 6 novembre 2026

Il s'agit d'informations générales, pas d'un conseil juridique. Servez-vous-en pour préparer l'échange avec votre avocat, pas pour le remplacer.

## Ce que couvre la loi et où elle en est

La loi encadre les données personnelles : toute donnée qui identifie une personne physique directement ou indirectement, comme un nom, une voix, une photo, un numéro d'identification ou un identifiant en ligne. Le « traitement » est défini largement. Collecter, enregistrer, conserver, afficher, transmettre, analyser, modifier et effacer en font tous partie, que l'opération soit entièrement ou partiellement électronique.

Pendant des années, la loi est restée sans règlement d'application. Ce n'est plus le cas. Le site du PDPC indique lui-même que le règlement d'application a été publié et que l'accent porte désormais sur la mise en œuvre pratique. Le Centre gère un portail en ligne où les organisations demandent leurs autorisations et licences et enregistrent leurs délégués à la protection des données.

Les principes de base sont courts et méritent d'être affichés dans chaque équipe produit :

- Ne collectez des données que pour une finalité licite et précise, annoncée à la personne concernée.
- Gardez les données exactes et sécurisées.
- Traitez-les d'une manière adaptée à la finalité de leur collecte.
- Ne les conservez pas plus longtemps que cette finalité ne l'exige.

## Responsable ou sous-traitant : clarifiez d'abord votre rôle

La loi répartit la responsabilité entre deux rôles, et vos obligations dépendent de celui que vous occupez.

| Rôle | Qui c'est en général | Principales obligations |
|---|---|---|
| Responsable du traitement (controller) | L'entreprise qui décide pourquoi et comment les données sont utilisées : clinique, commerce ou propriétaire de l'application | Consentement, finalité, conservation, droits des utilisateurs, registres, licence ou autorisation |
| Sous-traitant (processor) | Une entreprise qui traite les données pour le compte du responsable, comme un hébergeur ou un éditeur de logiciels | Suivre des instructions écrites, sécuriser les données, tenir un registre des traitements, licence ou autorisation |

La plupart des propriétaires d'applications sont responsables du traitement. Une société de logiciels qui héberge et exploite le système pour vous peut être sous-traitant, et la loi attend du sous-traitant qu'il agisse sur instructions écrites. Si vous commandez une application, intégrez les obligations de protection des données au contrat de développement et de maintenance ; notre guide sur [ce qu'il faut vérifier dans un contrat de développement logiciel](/blog/software-development-contract-what-to-check) couvre les autres clauses.

La loi prévoit aussi qu'un responsable ou un sous-traitant établi hors d'Égypte désigne un représentant en Égypte, selon les modalités du règlement d'application. Cela concerne les entreprises du Golfe et d'ailleurs qui servent des utilisateurs en Égypte ou y mènent une partie de leur activité. Demandez à votre avocat comment cela s'applique à votre structure.

## La licence ou l'autorisation du PDPC

Selon la loi, responsables et sous-traitants doivent obtenir une licence ou une autorisation du PDPC pour traiter des données personnelles. Le portail du PDPC propose actuellement deux voies principales :

- **Autorisation ou licence pour personne morale**, pour les entreprises.
- **Autorisation pour profession libérale**, pour les professionnels indépendants comme les médecins, avocats ou consultants.

La voie des professions libérales montre la préparation attendue. Le demandeur vérifie son numéro d'enregistrement fiscal auprès de l'administration fiscale égyptienne (ETA), répond à un questionnaire de conformité qui détermine ses obligations au titre de la loi, téléverse des documents signés électroniquement via l'ITIDA (dont un extrait de casier judiciaire, une déclaration d'exactitude et une liste de contrôle de conformité) et paie les frais. Selon le portail, l'examen de la demande peut prendre une à deux semaines.

Pour la plupart des entreprises, le questionnaire est le premier pas utile. Vos réponses dépendent des données que l'application collecte et de leur raison d'être, c'est-à-dire exactement de l'inventaire décrit dans la section suivante.

Le portail propose aussi des services pour désigner, remplacer et certifier un **délégué à la protection des données (DPO)**, et pour informer le Centre de son départ. Décidez tôt qui tiendra ce rôle ; la loi attend ses coordonnées dans les notifications de violation et dans le registre des traitements du sous-traitant.

## La liste de contrôle technique

Ces fonctions traduisent les obligations de la loi en logiciel opérationnel. Intégrez-les dès le départ ; les ajouter à une application en production est plus lent et plus risqué.

### Un inventaire des données

Listez chaque champ collecté par l'application : quel écran le collecte, pourquoi, où il est stocké, qui peut le voir et combien de temps vous le gardez. Cette liste alimente le questionnaire du PDPC, votre notice de confidentialité et le registre exigé par la loi. Si un champ n'a pas de finalité claire, supprimez-le.

### Un consentement que vous pouvez prouver

- Indiquez la finalité en langage clair au moment de la collecte, en arabe et en anglais si vos utilisateurs en ont besoin.
- Enregistrez chaque consentement avec la date, la version du texte affiché et la manière dont il a été donné.
- Redemandez le consentement avant d'utiliser les données pour une nouvelle finalité.
- Rendez le retrait aussi simple que l'accord, et faites en sorte que l'application le respecte.

Les données qu'une personne fournit pour recevoir un service licite valent consentement pour cette finalité, et pour rien d'autre. Une application de réservation peut utiliser un numéro de téléphone pour confirmer un rendez-vous, mais pas pour des promotions sans consentement distinct.

### Données sensibles et enfants

La loi protège davantage les données sensibles, notamment les données de santé, génétiques, biométriques et financières, les convictions religieuses, les opinions politiques, les antécédents judiciaires, ainsi que toutes les données relatives aux enfants. Leur traitement exige une licence du PDPC et, sauf disposition légale contraire, le consentement écrit et explicite de la personne ; pour les enfants, celui du tuteur légal. Cliniques, laboratoires, pharmacies, écoles et applications fintech sont directement concernés. Si vous dirigez une structure médicale, consultez nos notes sur les [logiciels de gestion de cabinet en Égypte](/blog/clinic-management-system-egypt) et sur les [plateformes de télémédecine](/blog/telemedicine-platform-egypt).

### Les droits des utilisateurs dans le produit

La loi donne à chacun le droit de savoir quelles données vous détenez sur lui et d'y accéder, de retirer son consentement, de les faire rectifier, mettre à jour ou effacer, de limiter le traitement à une finalité déterminée, de s'y opposer dans certains cas et d'être informé d'une violation. Donnez une place à ces demandes :

- Un écran de profil où l'utilisateur voit et corrige ses propres données.
- Un parcours de demande d'accès, d'effacement et d'opposition, avec un numéro de référence et un délai suivi.
- Un écran d'administration où le personnel retrouve tout ce qui concerne une personne, l'exporte et l'efface.

### Conservation et effacement

Fixez une durée de conservation pour chaque catégorie de données et faites-la appliquer par le système. Quand la finalité prend fin, la loi attend l'effacement des données, ou leur conservation sous une forme qui n'identifie plus la personne. Des tâches planifiées qui suppriment ou anonymisent les anciens enregistrements valent mieux qu'un nettoyage manuel et laissent une trace à présenter.

### Sécurité et contrôle d'accès

La loi exige les mesures techniques et organisationnelles nécessaires pour garder les données confidentielles et les protéger contre l'altération, la perte et l'accès illicite. Dans une application, cela signifie en général :

- Des connexions chiffrées partout et le chiffrement des données sensibles au repos.
- Des rôles et des droits, pour que l'accueil ne voie pas ce que voit le médecin et que la caisse ne voie pas la paie.
- Un journal d'audit indiquant qui a consulté, exporté, modifié ou supprimé des données personnelles.
- Une connexion administrateur robuste, idéalement avec validation en deux étapes.
- Des sauvegardes testées et un responsable clairement désigné pour les mises à jour des serveurs et des bibliothèques.

Les données de paie et de ressources humaines sont souvent oubliées ; notre guide sur les [logiciels RH, de pointage et de paie en Égypte](/blog/hr-attendance-payroll-software-egypt) traite ce volet.

### Messages marketing

Si l'application envoie des SMS, e-mails ou messages WhatsApp promotionnels, obtenez un consentement spécifique au marketing, identifiez l'expéditeur et proposez un moyen simple de se désabonner, appliqué immédiatement par le système. Séparez le consentement marketing des messages de service comme les confirmations de réservation.

## Réagir à une violation : la règle des 72 heures

Lorsqu'un responsable ou un sous-traitant apprend une violation de données personnelles, la loi impose de la signaler au PDPC dans les 72 heures, et immédiatement si elle touche à la sécurité nationale. La notification décrit ce qui s'est passé, le nombre approximatif d'enregistrements concernés, les coordonnées du délégué à la protection des données, les effets probables et les mesures prises pour la contenir. Les personnes concernées doivent ensuite être informées dans les trois jours ouvrables suivant la notification.

On ne tient pas ce délai en improvisant. Préparez un court plan avant le lancement :

1. Décidez qui peut déclarer un incident et qui contacte le PDPC.
2. Vérifiez que les journaux et alertes montrent ce qui a été consulté, et quand.
3. Gardez un modèle de notification avec les champs exigés par la loi.
4. Préparez le message aux utilisateurs en arabe et en anglais.
5. Consignez chaque incident et sa correction, même les petits.

## Les données qui quittent l'Égypte

La loi encadre le transfert de données personnelles hors d'Égypte. En principe, le niveau de protection du pays de destination ne doit pas être inférieur à celui de l'Égypte, et il faut une licence ou une autorisation du PDPC. La loi prévoit des exceptions étroites, comme les soins médicaux, uniquement avec le consentement explicite de la personne. Votre registre des traitements doit aussi décrire les transferts transfrontaliers.

Pour une application, c'est souvent une question d'hébergement. Si vos serveurs, votre service d'e-mail, vos outils d'analyse ou votre fournisseur de chatbot se trouvent hors d'Égypte, des données personnelles quittent peut-être le pays. Inscrivez chaque service tiers dans votre inventaire, notez où il stocke les données, et soumettez la liste à votre avocat et au questionnaire du PDPC. Les entreprises du Golfe qui font appel à une équipe en Égypte doivent aussi cartographier l'autre sens : à quelles données l'équipe en Égypte a accès, et sous quel contrat.

## Notre rôle

KF Tech Solutions développe des logiciels sur mesure, des applications web et mobiles, ainsi que des systèmes pour cabinets médicaux et entreprises. Grâce à notre [service de développement de logiciels sur mesure](/services/custom-software), nous intégrons la partie technique de cette liste au produit : inventaire des données, preuves de consentement, rôles et droits, journaux d'audit, écrans pour les droits des utilisateurs, tâches de conservation et d'effacement, journalisation des incidents. Nous ne donnons pas de conseil juridique et ne déposons pas de demandes auprès du PDPC ; nous travaillons donc avec votre avocat et votre délégué à la protection des données. Nous travaillons avec des entreprises en Égypte et dans le Golfe.

## Questions fréquentes

### La loi s'applique-t-elle aux petites entreprises et aux start-up ?

La loi s'applique à quiconque traite des données personnelles par voie électronique, et le portail du PDPC prévoit des voies pour les entreprises comme pour les professionnels indépendants. La licence est délivrée aux personnes morales, l'autorisation peut aussi l'être aux particuliers, et les données sensibles exigent une licence ; répondez donc au questionnaire du PDPC et faites confirmer le résultat par un avocat.

### Une politique de confidentialité suffit-elle ?

Non. Une politique décrit ce que vous faites ; la loi attend que vous puissiez le prouver. Cela suppose des preuves de consentement, un registre des traitements, des demandes de droits qui fonctionnent, des contrôles de sécurité et une procédure de violation.

### Qui doit être délégué à la protection des données ?

Une personne qui comprend à la fois vos activités et la loi, avec l'autorité nécessaire pour faire corriger les problèmes. Le portail du PDPC gère la désignation, le remplacement et la certification ; vérifiez ses exigences avant de choisir.

### Pouvons-nous héberger notre application hors d'Égypte ?

Peut-être, mais stocker des données personnelles à l'étranger peut constituer un transfert transfrontalier, que la loi encadre et soumet à une licence ou une autorisation du PDPC. Validez votre plan d'hébergement avec votre avocat avant le lancement.

### Nous avons déjà une application. Par où commencer ?

Par l'inventaire des données. Il montre ce que vous détenez, où cela circule et quelles lacunes comptent le plus, et c'est précisément l'objet du questionnaire du PDPC. Les preuves de consentement, l'effacement et les contrôles d'accès viennent ensuite.

Si vous préparez une nouvelle application ou devez mettre une application existante en conformité avec la loi 151/2020, [décrivez-nous ce qu'elle fait](/contact) ou [réservez un appel gratuit](/book), et nous passerons en revue les lacunes techniques avec vous.

## Sources

- [Personal Data Protection Center (PDPC), Égypte](https://pdpc.gov.eg/home)
- [Administration fiscale égyptienne (ETA)](https://www.eta.gov.eg)
- [Information Technology Industry Development Agency (ITIDA)](https://itida.gov.eg)
