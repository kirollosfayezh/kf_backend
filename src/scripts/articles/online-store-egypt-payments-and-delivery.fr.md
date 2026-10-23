---
title: E-commerce en Égypte : paiement, livraison et ce qui coince
summary: Les deux problèmes qui décident de la réussite d'un projet e-commerce en Égypte — et aucun des deux n'est le site web.
---

La plupart de ceux qui préparent une boutique en ligne en Égypte consacrent leur
budget à la vitrine : le design, les fiches produits, les animations. Cette partie
est largement résolue — de nombreuses plateformes le font bien et pour pas cher.

Les deux éléments qui décident de la viabilité de l'activité sont l'argent qui entre
et la marchandise qui sort. Les deux sont plus difficiles ici que ne le laissent
penser les tutoriels, et aucun n'est vraiment un problème de site web.

## Premier problème : le paiement à la livraison

Une part importante des commandes e-commerce en Égypte est payée en espèces à la
porte. Tout système qui traite le paiement par carte comme le cas normal et les
espèces comme un cas particulier vous posera des problèmes dès la première semaine.

Le paiement à la livraison change tout le modèle :

- **La commande n'est pas payée au moment où elle est passée.** C'est une promesse.
  Votre stock doit être réservé, mais le chiffre d'affaires ne doit pas être
  comptabilisé.
- **Le refus à la porte est courant.** La marchandise revient, le stock doit être
  réintégré, et les frais du livreur sont dépensés dans tous les cas.
- **Le transporteur détient votre argent**, parfois pendant des semaines, et vous le
  reverse par lots qui ne correspondent pas une à une à vos commandes.
- **Le rapprochement est un vrai travail.** Parmi les 340 commandes de ce versement,
  lesquelles ont réellement été encaissées, et lesquelles ont été retournées ?

**Ce qu'il faut construire :** un cycle de vie de commande avec des statuts
explicites — passée, confirmée, expédiée, livrée, encaissée, retournée, reversée. La
plupart des paniers du marché modélisent deux ou trois de ces statuts et supposent
le reste. C'est dans l'écart entre « livrée » et « argent sur notre compte » que se
cachent les pertes.

Construisez le rapport de rapprochement dès le premier jour, pas quand les litiges
commencent.

## Deuxième problème : la livraison

Vous ferez appel à des sociétés de livraison, et probablement à plusieurs. Chacune a
sa propre API, son propre vocabulaire de statuts, et sa propre définition de
« livré ».

Le piège consiste à tout construire sur le modèle d'un seul transporteur. Quand vous
en ajoutez un second, les statuts ne correspondent pas, et vous vous retrouvez avec
deux systèmes parallèles et une personne qui traduit mentalement de l'un à l'autre.

**Ce qu'il faut construire :** d'abord votre propre modèle de statuts, puis la
correspondance de chaque transporteur vers ce modèle. Plus de travail le premier
jour, infiniment moins le jour où vous changez de transporteur ou en ajoutez un — ce
qui arrivera, car la couverture et les tarifs varient selon le gouvernorat.

## Le paiement par carte

| Point | Ce qu'il faut vérifier |
|---|---|
| Délai de règlement | Combien de jours avant que l'argent arrive sur votre compte ? |
| Frais | Pourcentage, part fixe, et ce que vous coûte un remboursement |
| Paiements échoués | Sont-ils relancés, et le client est-il prévenu ? |
| Remboursements | Via API, ou par une personne qui se connecte à un portail ? |
| Environnement de test | Existe-t-il un vrai bac à sable, ou testez-vous en production ? |
| Paiement en plusieurs fois | De plus en plus attendu sur les articles de valeur |

Cette dernière ligne compte sur le plan commercial. Au-delà de quelques milliers de
livres, les options de paiement en plusieurs fois pèsent nettement sur la conversion
sur ce marché.

La question des remboursements prend souvent les gens au dépourvu : une passerelle
où chaque remboursement exige une connexion manuelle au portail ne tient pas au-delà
d'un certain volume de commandes, et vous le découvrirez exactement au mauvais
moment.

## Ce que cela implique pour le développement

Un périmètre honnête pour une boutique en ligne en Égypte, ce n'est pas « un site
web ». C'est :

1. Une vitrine — la partie réellement facile, souvent une plateforme toute faite
2. Un système de commandes qui modélise correctement le paiement à la livraison
3. L'intégration des transporteurs derrière votre propre modèle de statuts
4. Une intégration de paiement avec des remboursements gérés automatiquement par le
   système
5. Un rapport de rapprochement entre les reversements des transporteurs et vos
   commandes
6. Un stock qui se décrémente à l'expédition, pas à la commande, et se réintègre en
   cas de refus
7. La transmission des reçus électroniques, puisqu'il s'agit de ventes aux
   particuliers — voir
   [relier votre caisse au système de l'ETA](/blog/eta-e-invoicing-pos-integration)

C'est sur les points deux, trois et cinq que se concentre le coût, et ce sont eux
qui manquent le plus souvent dans un devis. Si une proposition ne chiffre que le
point un, elle chiffre un autre projet.

> Une boutique incapable de vous dire quelles commandes livrées vous ont réellement
> été payées n'est pas une boutique en ligne. C'est un catalogue avec un formulaire.

## Faut-il utiliser une plateforme toute faite ?

Souvent oui, au début. Une plateforme hébergée gère correctement la vitrine, le
panier et le paiement par carte, et lancer en quelques semaines quelque chose
d'imparfait vaut mieux que lancer en quelques mois quelque chose de sur mesure.

Les limites arrivent de façon prévisible : quand le rapprochement du paiement à la
livraison dépasse ce que la plateforme sait modéliser, quand il vous faut un second
transporteur, ou quand les frais par commande dépassent ce que coûterait un
développement. Le cadre général est dans
[logiciel sur mesure ou solution du marché](/blog/custom-software-vs-off-the-shelf-how-to-choose).

L'exigence à protéger dès le premier jour : une API documentée et l'export complet
des données. Sans cela, changer plus tard signifie repartir de zéro.

## Questions fréquentes

### Combien coûte la création d'une boutique en ligne ?

Une plateforme toute faite avec une vraie gestion du paiement à la livraison et un
seul transporteur : un budget modeste. Un développement sur mesure avec plusieurs
transporteurs, rapprochement et stock : nettement plus. La variable, ce sont les
points deux à cinq ci-dessus, pas le design. Voir
[combien coûte réellement une application web](/blog/what-does-a-web-app-actually-cost-to-build).

### Faut-il aussi une application ?

Pas au début. Un site rapide et responsive touche les mêmes clients. Envisagez une
application quand le taux de réachat le justifie —
[le détail des coûts d'une application est ici](/blog/app-development-cost-egypt).

### Quelle est l'erreur la plus fréquente ?

Comptabiliser le chiffre d'affaires au moment de la commande plutôt qu'au
reversement des espèces. Les premiers mois paraissent alors bien meilleurs qu'ils ne
le sont, et la correction est douloureuse.
