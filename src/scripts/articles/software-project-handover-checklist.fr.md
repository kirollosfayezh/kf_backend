---
title: Ce que vous devez posséder à la fin d'un projet logiciel
summary: Une check-list de livraison pour dirigeants : code, comptes, fiches des stores, mots de passe, documentation et sauvegardes à obtenir avant le dernier paiement.
tags: livraison logicielle, code source, App Store, Google Play, documentation, Égypte, pays du Golfe
alt: Une main tient un trousseau de clés devant une porte blanche ouverte
caption: Un projet terminé doit vous remettre toutes les clés : le code, les comptes cloud et domaine, les fiches des stores et les sauvegardes.
stats: 4|comptes à détenir à votre nom : code, cloud, domaine, stores d'applications; 2|stores qui permettent au développeur de transférer l'application sur votre compte; 1|test qui prouve la livraison : une reconstruction complète
---

À la fin d'un projet logiciel, vous devez posséder le code source complet dans un dépôt rattaché à votre compte, chaque compte sur lequel le système fonctionne (cloud, nom de domaine, e-mail, stores d'applications, services de paiement), les mots de passe de tous ces comptes, une documentation écrite et une sauvegarde récente de vos données. Si l'un de ces éléments reste uniquement au nom de votre développeur, vous ne maîtrisez pas entièrement le logiciel que vous avez payé. Récupérez-les avant le dernier paiement, pas après.

Dernière vérification : 6 novembre 2026

Le contrat définit ce à quoi vous avez droit. Cette check-list porte sur ce que vous devez réellement recevoir. Si vous en êtes encore à la signature, lisez d'abord [neuf points à vérifier dans un contrat de développement logiciel](/blog/software-development-contract-what-to-check).

## Ce que « code source livré » devrait signifier

« Nous livrerons le code source » paraît clair, mais se traduit souvent par un fichier zip envoyé par e-mail le dernier jour. Ce n'est pas suffisant. Le code source est livré lorsque :

- **Il se trouve dans un dépôt Git qui vous appartient**, sur GitHub, GitLab ou Bitbucket, avec tout son historique et pas une simple copie figée.
- **Il est complet.** Il comprend le backend, le site, l'espace d'administration, les applications mobiles et tous les scripts, pas seulement la partie visible.
- **Il se construit.** Une personne qui n'a jamais vu le projet peut suivre les instructions et obtenir une copie qui fonctionne.
- **Rien de ce dont il dépend ne manque** : modèles de configuration, migrations de base de données et liste de tous les services externes qu'il appelle.
- **Il ne contient aucun secret.** Les mots de passe et les clés API se rangent dans un endroit séparé et documenté, pas dans les fichiers de code.

Sur GitHub, un développeur peut transférer un dépôt vers votre compte ou votre organisation ; les issues, les pull requests et tout l'historique des commits suivent. Les liens vers l'ancien emplacement redirigent vers le nouveau. C'est la manière la plus propre de récupérer un code commencé sur le compte du développeur.

## Les comptes qui doivent être à votre nom

La plupart des problèmes de livraison ne concernent pas le code, mais des comptes ouverts par le développeur « pour gagner du temps » et jamais transférés. Un an plus tard, le développeur est injoignable, le domaine expire et personne ne peut le renouveler.

| Élément | À quel nom | Ce qui se passe sinon |
| --- | --- | --- |
| Dépôt de code | Compte ou organisation de votre entreprise | Vous ne pouvez confier les modifications à personne d'autre |
| Nom de domaine | Votre entreprise, avec votre e-mail comme contact | Le site et l'e-mail professionnel s'arrêtent à l'expiration |
| Hébergement et cloud | Votre compte, votre carte de paiement | Les serveurs peuvent être coupés ou retenus en cas de litige |
| Base de données et stockage de fichiers | Dans votre compte cloud | Les données de vos clients restent chez un tiers |
| E-mail professionnel et DNS | Votre compte | Vous perdez vos e-mails et ne pouvez pas rediriger le domaine |
| App Store et Google Play | Comptes développeur de votre entreprise | L'application ne peut pas être mise à jour sans le développeur |
| Paiement en ligne, SMS, WhatsApp, cartes | Votre entreprise, vos contrats | Les paiements ou les messages s'arrêtent, ou l'argent arrive sur le mauvais compte |
| Statistiques et Search Console | Votre compte, développeur ajouté comme utilisateur | Vous perdez l'historique de votre trafic |

La règle est la même à chaque ligne : le compte vous appartient, et le développeur y est ajouté comme utilisateur dont vous pouvez retirer l'accès. S'il a besoin du rôle de propriétaire pour une configuration, ce rôle vous revient dès la fin du travail.

## App Store et Google Play : publiez sous votre propre compte

Les applications mobiles sont l'élément le plus souvent laissé au nom du développeur, car publier au nom de votre entreprise demande quelques démarches. Faites-les quand même. Le compte développeur correspond au nom du vendeur que voient vos clients, et c'est lui qui conserve les notes et les avis.

Pour ouvrir un compte d'organisation, les deux stores demandent un numéro D-U-N-S, un identifiant gratuit à neuf chiffres délivré par Dun & Bradstreet, ainsi qu'un site web d'entreprise et des coordonnées. Apple exige aussi que la personne qui s'inscrit soit habilitée à engager l'entreprise, et facture 99 dollars américains par année d'adhésion. Commencez tôt, car la vérification n'est pas immédiate.

Si l'application est déjà en ligne sur le compte du développeur, elle peut être déplacée. Apple permet au titulaire du compte de transférer une application vers un autre compte ; elle conserve ses notes, ses avis et son identifiant de bundle, et les utilisateurs continuent de recevoir les mises à jour. Google Play prend également en charge les transferts : les utilisateurs, les notes, les avis et la fiche du store passent sur le nouveau compte une fois que son propriétaire a accepté. Certains éléments restent en arrière, comme les anciens rapports de ventes, et les services liés tels que Firebase demandent des changements séparés. Demandez à votre développeur de terminer le transfert avant le dernier paiement.

## Mots de passe, clés et documentation

Les accès et la documentation permettent à la personne suivante de reprendre le travail. Demandez :

- **Une liste des accès** dans un gestionnaire de mots de passe partagé avec vous, couvrant chaque compte, serveur et service, avec les personnes qui y ont accès.
- **Des clés API que vous pouvez renouveler**, c'est-à-dire que vous savez où chaque clé est utilisée et comment la remplacer.
- **Les clés de signature des applications mobiles**, ou la confirmation écrite que le store gère la signature et que la clé d'importation vous appartient.
- **Un court document technique** : de quoi le système est fait, où il tourne, comment l'installer, comment publier une mise à jour et quels services externes il utilise.
- **Un guide de l'espace d'administration** en langage clair pour les personnes qui utilisent le système au quotidien.
- **Une liste des problèmes connus** et de ce qui reste inachevé, pour éviter les surprises.

La documentation n'a pas besoin d'être longue. Un document clair de dix pages tenu à jour vaut mieux que cent pages écrites une fois et jamais relues.

## Données et sauvegardes

Vos données valent souvent plus que le code. Avant la livraison, vérifiez que :

- Les sauvegardes sont automatiques, et vous savez à quelle fréquence et où elles sont conservées.
- Au moins une sauvegarde a été restaurée pour prouver qu'elle fonctionne.
- Vous pouvez exporter vos données, comme les clients, les commandes et les factures, dans un format courant tel que CSV.
- Les sauvegardes sont stockées dans votre compte, et pas seulement sur la machine du développeur.

## Comment vérifier la livraison vous-même

Vous n'avez pas besoin de lire du code pour vérifier une livraison. Demandez à un second développeur un seul test : partir uniquement de votre dépôt et de votre documentation, construire le système sur un serveur neuf et se connecter. Si cela fonctionne, la livraison est réelle. S'il doit appeler le développeur d'origine, il manque quelque chose.

Connectez-vous ensuite vous-même, avec votre propre e-mail, à chaque compte du tableau ci-dessus et vérifiez que vous en êtes le propriétaire. Changez les mots de passe échangés pendant le projet et retirez l'accès aux personnes qui n'en ont plus besoin.

Les livraisons échouent pour les mêmes raisons que les projets : un périmètre flou, rien d'écrit et aucun point de contrôle. [Pourquoi les projets logiciels échouent, et les cinq vérifications qui l'évitent](/blog/why-software-projects-fail) détaille ces vérifications. Après la livraison, un [plan de maintenance logicielle](/blog/software-maintenance-plan) garde le système à jour et les sauvegardes testées.

## Le rôle de KF Tech Solutions

KF Tech Solutions conçoit des [logiciels sur mesure](/services/custom-software), des sites web et des applications web et mobiles ; nous travaillons avec des entreprises en Égypte et dans les pays du Golfe. Sur un nouveau projet, nous pouvons ouvrir les comptes au nom de votre entreprise dès la première semaine, pour qu'il n'y ait rien à transférer à la fin. Si vous reprenez un système d'un autre prestataire, nous pouvons passer en revue ce que vous avez reçu au regard de cette check-list lors d'un appel gratuit.

## Questions fréquentes

### Est-il normal que le développeur garde le code source ?

Certains prestataires concèdent une licence sur un produit existant au lieu de remettre le code, ce qui peut être équitable si le prix en tient compte et si le contrat le prévoit. Pour un logiciel développé spécialement pour vous, attendez-vous à posséder le code. Mettez-le par écrit avant le début du travail ; [comment choisir une société de développement logiciel](/blog/how-to-choose-a-software-company) indique les questions à poser.

### Puis-je transférer mon application du compte du développeur vers le mien ?

Dans la plupart des cas, oui. Apple et Google Play permettent tous deux de transférer une application entre comptes développeur en conservant ses notes et ses avis. Le développeur lance le transfert et vous l'acceptez depuis votre compte.

### Faut-il une entreprise pour publier une application à mon nom ?

Vous pouvez publier en tant que particulier, mais votre nom personnel apparaîtra alors comme vendeur. Un compte d'organisation affiche le nom de votre entreprise, et les deux stores demandent un numéro D-U-N-S pour l'ouvrir.

### Que faire si le développeur refuse de remettre les accès ?

Vérifiez d'abord ce que prévoit le contrat sur la propriété et la livraison. Les comptes de domaine, d'hébergement et d'applications peuvent parfois être récupérés via le support de chaque fournisseur si vous prouvez que l'entreprise vous appartient, mais c'est lent et sans garantie. Il s'agit d'une information générale, pas d'un conseil juridique ; en cas de litige, consultez un avocat. Prévenir est bien plus simple, c'est pourquoi les comptes doivent être à vous dès le départ.

### Quand la livraison doit-elle avoir lieu ?

Avant le dernier paiement. Liez la dernière étape à la remise du dépôt, des comptes et de la documentation, ainsi qu'à la réussite du test de reconstruction. Un [cahier des charges de projet logiciel](/blog/software-project-brief) clair peut lister ces livrables dès le premier jour.

Si vous souhaitez un second avis sur ce que vous avez reçu, ou démarrer un projet avec tout à votre nom, [réservez un appel gratuit](/book) ou [écrivez-nous](/contact).

## Sources

- [Apple Developer : Overview of app transfer](https://developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer/)
- [Apple Developer Program : Enrollment](https://developer.apple.com/programs/enroll/)
- [Aide Google Play Console : transférer des applications vers un autre compte développeur](https://support.google.com/googleplay/android-developer/answer/6230247)
- [Aide Google Play Console : numéro D-U-N-S](https://support.google.com/googleplay/android-developer/answer/13628312)
- [GitHub Docs : Transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository)
