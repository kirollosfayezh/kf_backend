---
title: Pourquoi les projets logiciels échouent : les cinq vérifications
summary: L'échec n'est presque jamais technique. Ce sont cinq décisions précises mal prises au départ, que vous pouvez chacune vérifier avant de vous engager.
---

Quand un projet logiciel échoue, on le raconte généralement comme une histoire
technique : le mauvais framework, un développeur pas à la hauteur, une intégration
qui s'est révélée plus difficile que prévu.

Ce n'est presque jamais ce qui s'est passé. La difficulté technique était réelle,
mais ce n'était qu'un symptôme. L'échec a été décidé dans les deux premières
semaines, par l'une de cinq décisions, et découvert cinq mois plus tard.

## 1. Personne ne savait décrire le processus

L'échec le plus fréquent, et le moins technique.

Un logiciel traduit un processus. Si le processus ne fait pas l'objet d'un accord —
si deux services le décrivent différemment, ou s'il n'existe que dans la tête d'une
seule personne — alors le logiciel ne peut pas être construit, parce qu'il n'y a
rien à construire.

Le développement ne règle pas ce problème. Il transforme un désaccord non résolu en
désaccord coûteux, découvert à la recette, quand chaque partie voit quelque chose
qu'elle n'a jamais validé.

**La vérification :** deux personnes issues de parties différentes de l'entreprise
peuvent-elles décrire le processus de la même façon, par écrit, avant que quiconque
établisse un devis ? Sinon, c'est cela le projet, et c'est un projet métier plutôt
qu'un projet logiciel.

## 2. Le décideur n'était pas dans la pièce

Les besoins sont recueillis auprès des personnes qui utiliseront le système. C'est
logique. Puis la validation vient de quelqu'un qui n'a jamais participé à ces
échanges, qui découvre le système à la fin et demande des changements qui touchent
aux fondations.

**La vérification :** qui signe la facture finale, et cette personne a-t-elle
examiné elle-même le périmètre ? Si ce n'est pas le cas, obtenez-le avant le début
des travaux. Pas un point d'avancement — le périmètre lui-même.

## 3. On a supposé que l'intégration serait facile

Un nouveau système doit presque toujours dialoguer avec un ancien. Le nouveau est
cadré en détail ; l'ancien tient en une seule ligne : « intégration avec le POS
existant ».

La difficulté dépend entièrement de l'ancien système, et personne ne vérifie avant
de s'engager. Une API documentée, ce sont quelques jours. Un système fermé avec un
export CSV chaque nuit, ce sont des semaines et des compromis. Un système dont
l'éditeur a disparu peut se révéler impossible à intégrer.

**La vérification :** avant de signer, demandez à voir la documentation de l'API de
chaque système à connecter. Pas une promesse qu'elle existe — le document lui-même.
Cette seule vérification évite plus de dépassements que n'importe quelle autre de
cette liste.

## 4. Il n'y avait pas de première version

Un projet cadré comme une livraison unique à douze mois ne reçoit aucun retour avant
le douzième mois. D'ici là, l'entreprise a changé, les personnes ont changé, et les
besoins du premier mois sont périmés.

**La vérification :** peut-on découper le projet en morceaux qui fonctionnent chacun
de leur côté ? Si la réponse est non, le périmètre est trop enchevêtré, et cet
enchevêtrement est en soi le risque. Le projet de restaurant décrit dans
[réduire d'un tiers le gaspillage de stock](/blog/cutting-a-restaurant-s-stock-waste-by-a-third)
a été mis en production en quatre étapes précisément pour cette raison.

## 5. Personne ne le portait en interne

Tout projet réussi compte, dans l'entreprise, une personne qui veut qu'il existe,
qui a le pouvoir de décider et qui a du temps. Quand cette personne manque, les
décisions s'accumulent, le prestataire fait des suppositions pour continuer
d'avancer, et ces suppositions s'additionnent.

**La vérification :** nommez cette personne, et assurez-vous qu'elle dispose de
plusieurs heures par semaine pour ce projet. « Tout le monde en est responsable »
signifie que personne ne l'est.

## Les cinq vérifications, ensemble

| Vérification | À demander avant de signer | Conséquence si on l'ignore |
|---|---|---|
| Processus validé | Deux personnes le décrivent de la même façon, par écrit | Des révisions sans fin |
| Décideur impliqué | Il a examiné lui-même le périmètre | Des reprises à la recette |
| Intégration vérifiée | Vous avez vu la documentation API de l'autre système | Les plus gros dépassements |
| Livraison par étapes | Chaque étape fonctionne seule | Douze mois avant le premier retour |
| Responsable interne désigné | Une personne, avec autorité et disponibilité | Décisions en attente ; le prestataire devine |

Aucune ne demande de connaissances techniques. Les cinq peuvent être vérifiées en
une semaine, et cette semaine est la plus rentable de tout le projet.

> Les erreurs coûteuses sont commises avant que quiconque écrive une ligne de code.
> Elles ne sont simplement découvertes qu'après.

## À quoi ressemble vraiment un échec

Rarement spectaculaire. En général : la livraison glisse d'un mois, puis d'un autre.
On réduit le périmètre pour tenir une date. Ce qui est livré fonctionne mais n'est
pas utilisé, parce que cela ne colle pas au processus. Six mois plus tard, quelqu'un
reprend discrètement l'ancien tableur.

Personne ne parle d'échec. On parle du « système qu'on a acheté et qu'on n'utilise
pas vraiment », et la plupart des entreprises en ont un.

## Questions fréquentes

### À qui la faute, en général ?

Elle est partagée, et chercher à la répartir n'aide pas. Les prestataires devraient
refuser les projets où ces cinq conditions ne sont pas réunies, et la plupart ne le
font pas. Les clients devraient les réunir, et la plupart supposent que le
prestataire s'en chargera.

### Peut-on sauver un projet qui tourne mal ?

Souvent, si vous vous arrêtez pour refaire les cinq vérifications. Ce qui ne marche
pas, c'est d'ajouter des personnes ou de repousser l'échéance tant que la décision
de fond n'est toujours pas prise.

### Comment éviter cela avec un prestataire avec lequel nous n'avons jamais travaillé ?

Commencez par un petit projet rémunéré — le test décrit dans
[comment choisir une société de développement logiciel](/blog/how-to-choose-a-software-company).
Deux à quatre semaines révèlent ces cinq points, pour une fraction du coût de leur
découverte au sixième mois.
