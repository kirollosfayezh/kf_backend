---
title: Contrat de maintenance logicielle : ce qu'un contrat juste inclut
summary: Délai de réponse ou de résolution, bugs ou évolutions, hébergement, mises à jour, sauvegardes et tarifs : ce qu'un contrat de maintenance juste précise.
tags: maintenance logicielle, contrat de support, SLA, logiciel sur mesure, hébergement, Égypte
stats: 3|modèles de tarification courants : forfait mensuel, banque d'heures, par incident; 2|délais pour chaque problème : réponse et résolution; 36|niveau d'API Android exigé par Google Play pour les nouvelles applis et mises à jour dès le 31 août 2026
---

Un plan de maintenance logicielle juste précise exactement ce qui est couvert, en combien de temps quelqu'un vous répond, en combien de temps le problème est résolu, et ce que vous payez pour tout travail hors du plan. Il sépare les corrections de bugs des nouvelles fonctionnalités, désigne qui gère l'hébergement, les sauvegardes et les mises à jour des magasins d'applications, et chiffre le tout de façon prévisible. Si votre contrat dit seulement « support pendant 12 mois », il ne dit presque rien.

Dernière vérification : 6 novembre 2026

Un logiciel n'est pas terminé le jour de sa mise en ligne. Les téléphones se mettent à jour, les navigateurs évoluent, les services externes abandonnent les anciennes versions de leurs API, et vos équipes découvrent des cas que personne n'a testés. Le plan décide si ces moments vous coûtent un après-midi ou une semaine.

## Ce qu'un plan de maintenance doit couvrir

La plupart des litiges naissent parce que les deux parties n'entendaient pas la même chose par « maintenance ». Rédigez le périmètre sous forme de liste, pas d'une seule phrase :

- **Corrections de bugs** : le système ne fait pas ce qui a été convenu et documenté.
- **Mises à jour de sécurité** : correctifs du serveur, du framework et des bibliothèques utilisées.
- **Mises à jour de compatibilité** : adaptations nécessaires parce qu'Android, iOS, un navigateur ou un service externe a changé.
- **Hébergement et supervision** : faire tourner les serveurs, les renouveler et les surveiller.
- **Sauvegardes et tests de restauration** : des copies de vos données, et la preuve qu'elles peuvent être restaurées.
- **Petites modifications** : textes, prix, un nouveau champ dans un formulaire, dans un nombre d'heures convenu.

Tout ce qui n'est pas sur la liste est un nouveau travail, chiffré à part. Ce n'est pas une astuce : c'est ce qui garde le prix mensuel honnête.

## Délai de réponse n'est pas délai de résolution

Un plan qui promet une « réponse sous 2 heures » promet seulement que quelqu'un répondra. Il ne promet pas que le problème sera réglé. Un plan utile prévoit deux délais pour chaque problème, qui varient selon la gravité :

| Gravité | Exemple | Réponse | Résolution visée |
|---|---|---|---|
| Critique | Système à l'arrêt, aucune vente ni réservation possible | En heures, selon l'accord | Le jour même, ou une solution de contournement |
| Élevée | Une fonction clé en panne pour tous les utilisateurs | Le jour ouvré même | En quelques jours ouvrés |
| Moyenne | Une fonction en panne avec un contournement | Le jour ouvré suivant | À la prochaine mise à jour planifiée |
| Faible | Problème esthétique, formulation, mise en page | Dans la semaine | Quand c'est possible |

Les chiffres exacts se négocient ; le tableau montre la structure, pas une norme. Convenez aussi des **heures ouvrées et du fuseau horaire**, du canal de signalement (outil de tickets, e-mail, groupe WhatsApp) et de qui, de votre côté, peut déclarer un problème critique. Un problème critique signalé un vendredi à minuit n'est couvert que si le plan le prévoit.

## Bug ou évolution ?

C'est la frontière qui provoque le plus de discussions. Une règle simple fonctionne : **si le système ne fait pas ce que disent le périmètre signé ou la documentation, c'est un bug et sa correction est couverte. Si vous voulez qu'il fasse autre chose, c'est une évolution.**

Les exemples aident. Un rapport qui affiche de mauvais totaux est un bug. Un rapport que vous voulez désormais ventiler par agence est une évolution. Une connexion qui échoue sur le nouvel iPhone relève d'une mise à jour de compatibilité. Ajouter la connexion avec Apple est une évolution. Inscrivez quelques exemples de ce type dans le contrat : ils évitent des heures de discussion plus tard. Notre guide sur [ce qu'il faut vérifier dans un contrat de développement logiciel](/blog/software-development-contract-what-to-check) explique comment rédiger dès le départ le périmètre et la recette, sur lesquels repose cette règle.

## Hébergement, supervision et sauvegardes

### Comptes et alertes

Posez trois questions : au nom de qui est le compte d'hébergement, qui paie la facture, et qui reçoit l'alerte quand le serveur tombe ? La réponse la plus sûre pour vous : l'hébergement, le nom de domaine et les comptes des magasins d'applications sont au nom de votre entreprise, et votre développeur y a accès. Ainsi, ni un litige ni un contact perdu ne mettent votre système hors ligne.

La supervision signifie que le système est vérifié automatiquement et que quelqu'un est prévenu avant que vos clients ne remarquent le problème. Le plan doit préciser ce qui est surveillé (disponibilité, erreurs, espace disque, expiration des certificats) et qui reçoit les alertes. Le renouvellement des noms de domaine et des certificats SSL fait aussi partie de la liste : un certificat expiré peut donner l'impression qu'un site qui fonctionne est en panne pour chaque visiteur.

### Des sauvegardes réellement restaurées

Une sauvegarde qui n'a jamais été restaurée est un espoir, pas une sauvegarde. Le plan doit indiquer :

1. Ce qui est sauvegardé : la base de données, les fichiers envoyés et la configuration.
2. À quelle fréquence, et combien de copies sont conservées.
3. Où les copies sont stockées, idéalement séparément du serveur principal.
4. À quelle fréquence une restauration est testée, et qui confirme qu'elle a fonctionné.

Demandez aussi combien de données vous pourriez perdre dans le pire des cas. Si les sauvegardes ont lieu une fois par nuit, une panne à 18 h peut faire perdre une journée de ventes.

## Mises à jour des systèmes, frameworks et magasins d'applications

Les applications mobiles demandent un travail régulier, même quand rien n'est cassé. Google Play exige par exemple qu'à partir du 31 août 2026 les nouvelles applications et les mises à jour ciblent Android 16 (niveau d'API 36) ou plus, et les applications existantes trop en retard ne sont plus proposées aux nouveaux utilisateurs sur les versions récentes d'Android ([Android Developers](https://developer.android.com/google/play/requirements/target-sdk)). Apple publie aussi une nouvelle version d'iOS chaque année, et une application jamais recompilée vieillit peu à peu.

Il en va de même pour les sites web et les back-ends : le langage, le framework et chaque bibliothèque ont des versions prises en charge, et faire tourner d'anciennes versions signifie ne plus recevoir de correctifs de sécurité. Un bon plan prévoit une revue régulière, par exemple chaque trimestre, où ces mises à jour sont vérifiées et appliquées, plutôt que d'attendre une panne.

## Modèles de tarification : forfait, banque d'heures, par incident

Il existe trois façons courantes de facturer la maintenance, chacune adaptée à un type d'entreprise :

| Modèle | Fonctionnement | Convient à | Point de vigilance |
|---|---|---|---|
| Forfait mensuel | Montant mensuel fixe pour un périmètre et des délais définis | Les systèmes que votre entreprise utilise chaque jour | Les heures non utilisées qui expirent sans prévenir |
| Banque d'heures | Vous achetez un bloc d'heures et le consommez au fil du temps | Des petites modifications et mises à jour régulières | Qui enregistre les heures et comment vous les consultez |
| Par incident | Vous payez à chaque correction | Les sites simples qui changent rarement | Aucun délai de réponse garanti |

Quel que soit le modèle, demandez un rapport mensuel de ce qui a été fait et du temps passé. Si vous hésitez aussi sur la façon de facturer le développement initial, notre comparaison [prix forfaitaire ou régie](/blog/fixed-price-vs-time-and-materials) explique les mêmes compromis à l'échelle du projet.

## Que se passe-t-il quand le plan prend fin ?

Les plans prennent fin : vous changez de prestataire, internalisez le développement ou arrêtez simplement de payer. Le contrat doit prévoir que vous recevez le code source, la base de données, les identifiants et la documentation, avec une courte période de passation. C'est bien plus simple si la passation a été correctement faite au lancement ; notre [checklist de passation d'un projet logiciel](/blog/software-project-handover-checklist) liste ce que vous devriez déjà avoir. Pour les vérifications qui gardent un projet sain dès le départ, voyez [pourquoi les projets logiciels échouent](/blog/why-software-projects-fail).

KF Tech Solutions conçoit des [logiciels sur mesure](/services/custom-software), des sites web et des applications mobiles, et continue de les faire vivre après le lancement avec des corrections, des mises à jour et de nouvelles fonctionnalités. Nous travaillons avec des entreprises en Égypte et dans le Golfe, et nous rédigeons les conditions de maintenance avec la clarté décrite ici : un périmètre listé, deux délais par problème, des comptes à votre nom et un tarif clair pour tout ce qui sort du plan.

## Questions fréquentes

### La maintenance est-elle incluse dans le prix du développement ?

En général, seule une courte période de garantie est incluse, pendant laquelle les bugs du travail livré sont corrigés. L'hébergement, les mises à jour et le support continus font l'objet d'un accord séparé. Vérifiez la durée de la garantie et ce qu'elle couvre.

### Ai-je besoin d'un plan de maintenance pour un site simple ?

Même un site vitrine simple a besoin d'un hébergement, du renouvellement du domaine et du certificat, de sauvegardes et de mises à jour ponctuelles. Un plan léger ou une facturation par incident suffit souvent ; un forfait complet n'est pas nécessaire.

### Et si je veux changer de prestataire plus tard ?

Assurez-vous que le contrat vous garantit le code source, la base de données et tous les identifiants, et que les comptes d'hébergement et des magasins d'applications sont au nom de votre entreprise. Tout développeur compétent pourra alors prendre le relais.

### À qui appartient le code écrit dans le cadre de la maintenance ?

Le contrat doit le préciser. La position juste habituelle : le code écrit pour votre système vous appartient, comme le développement initial.

### Les heures non utilisées du forfait sont-elles reportées ?

Certains plans l'autorisent pendant un ou deux mois, beaucoup non. Mettez-vous d'accord par écrit avant de signer, pas une fois les heures perdues.

Si vous êtes sur le point de signer un contrat de maintenance, ou si votre contrat actuel vous laisse dans le doute sur ce qu'il couvre, [contactez-nous](/contact) ou [réservez un appel gratuit](/book) et nous le passerons en revue avec vous.

## Sources

- [Android Developers : exigences de Google Play relatives au niveau d'API cible](https://developer.android.com/google/play/requirements/target-sdk)
