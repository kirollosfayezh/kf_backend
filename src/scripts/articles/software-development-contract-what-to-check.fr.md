---
title: Neuf points à vérifier dans un contrat de développement logiciel
summary: Les clauses qui déterminent si vous possédez ce que vous avez payé — écrit pour celui qui signe, pas pour l'avocat qui relit.
---

On négocie surtout le prix et la date de livraison. Ce n'est presque jamais ce qui
dérape. Ce qui dérape se découvre dix-huit mois plus tard, quand vous voulez
modifier quelque chose et ne le pouvez pas — à cause d'une clause que personne n'a
lue, ou d'une clause qui n'y a jamais figuré.

Ceci s'adresse à la personne qui signe. Faites valider par un juriste de votre
ressort ; servez-vous de cette liste pour savoir quoi pointer.

## 1. À qui appartient le code

La clause la plus importante, et la plus souvent floue.

Vous voulez : **des droits exclusifs, perpétuels, irrévocables et cessibles sur
l'ensemble des livrables, y compris le code source**, cédés au paiement.

Méfiez-vous de « licence d'utilisation ». Une licence n'est pas une propriété : elle
peut être limitée en nombre d'utilisateurs, en territoire, en durée, et retirée. En
droit français, le droit moral de l'auteur est incessible — la rédaction doit donc
faire le travail que « nous en sommes propriétaires » fait ailleurs.

**Posez la question directement :** si nous cessions de travailler avec vous demain,
pourrions-nous confier la modification de ce système à quelqu'un d'autre, sans votre
autorisation ?

## 2. Ce qui se passe en cas de défaut de paiement

Beaucoup de contrats ne cèdent les droits qu'au paiement final. C'est acceptable. Ce
qui ne l'est pas : que ce paiement final dépende d'une procédure de recette que le
prestataire contrôle.

## 3. Composants tiers et licences

Tout système réel utilise des bibliothèques open source. C'est normal et souhaitable.
Il vous faut la liste, et l'assurance qu'aucune licence n'est incompatible avec
l'usage prévu.

La clause à exiger : le prestataire garantit que la prestation ne porte pas atteinte
aux droits de tiers, et vous garantit contre tout recours.

## 4. Les modalités de livraison

La « livraison » doit être définie comme des artefacts, pas comme une URL en ligne.

- Code source dans un dépôt **qui vous appartient**, avec l'historique complet
- Identifiants de tous les services, à votre nom et à vos frais
- Instructions pour reconstruire et démarrer sur une machine neuve
- Schéma de base de données et scripts de migration
- Liste de tous les services tiers et de leur coût

Le test : un développeur compétent n'ayant jamais vu le projet pourrait-il le faire
tourner à partir de ce qui a été livré ? Sinon, vous avez reçu une dépendance
déguisée en livrable.

## 5. Critères de recette

« À la satisfaction du client » ne protège personne. Définissez la recette comme une
liste vérifiable. Elle n'a pas besoin d'être exhaustive, elle doit être objective.

## 6. Garantie

Après la recette, qui corrige les défauts, pendant combien de temps, et à quels
frais ?

Trois mois au minimum. Un prestataire confiant ne s'y opposera pas ; celui qui s'y
oppose vous apprend quelque chose d'utile sur le code avant que vous ne l'ayez vu.

Distinguez le **défaut** (cela ne fait pas ce qui était convenu — correction
gratuite) du **changement** (vous voulez autre chose — facturable). Les contrats qui
confondent les deux produisent tous les litiges ultérieurs.

## 7. Confidentialité, dans les deux sens

Réciproque, pas unilatérale. Vous divulguez le fonctionnement de votre entreprise.

Si des données personnelles sont traitées, un contrat de sous-traitance s'ajoute — et
si le traitement a lieu hors UE, le mécanisme de transfert doit figurer au contrat.

## 8. Résiliation

Comment chaque partie sort-elle, avec quel préavis, et qu'advient-il des travaux en
cours ?

La clause oubliée : **à la résiliation, le prestataire remet tout ce qui figure au
point quatre dans un délai défini, quel que soit le motif et indépendamment de tout
litige en cours.** Sans elle, un désaccord peut immobiliser votre système.

## 9. Personnes clés et sous-traitance

Vous avez choisi ce prestataire en partie pour les personnes rencontrées.
Nommez-les, exigez une information en cas de changement, et une autorisation
préalable pour toute sous-traitance.

## Récapitulatif

| Clause | Ce que vous voulez | Signal d'alerte |
|---|---|---|
| Propriété | Exclusive, perpétuelle, cessible | « Licence d'utilisation » |
| Livraison | Dépôt, identifiants, instructions | « Déployé sur votre serveur » |
| Recette | Liste objective et vérifiable | « À la satisfaction » |
| Garantie | 3 mois et plus, défauts gratuits | Aucune, ou 30 jours |
| Défaut / changement | Définis séparément | Non distingués |
| Licences tierces | Listées et garanties | Non mentionnées |
| Confidentialité | Réciproque | Unilatérale |
| Résiliation | Remise quel que soit le motif | Silencieuse, ou conditionnée au paiement |
| Personnel | Nommé, information en cas de changement | Équipe anonyme |

> Le rôle d'un contrat n'est pas de gagner un litige. Il est de rendre impossibles
> les litiges coûteux.

## Questions fréquentes

### Un séquestre de code source est-il utile ?

Rarement si les points un et quatre sont respectés. Le séquestre résout un problème
que la propriété et la livraison continue empêchent d'exister.

### Prix ferme ou régie ?

Prix ferme sur un périmètre défini, régie sur un travail réellement exploratoire. Un
prix ferme sur un périmètre flou signifie que le risque a été intégré au prix, et
vous le payez qu'il survienne ou non. Voir
[combien coûte réellement une application web](/blog/what-does-a-web-app-actually-cost-to-build).

### Le prestataire dit que tout cela est standard et ne se négocie pas.

Alors cela ne lui coûte rien de l'écrire.
