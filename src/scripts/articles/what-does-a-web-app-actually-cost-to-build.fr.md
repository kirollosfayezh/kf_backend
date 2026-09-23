---
title: Combien coûte réellement une application web ?
summary: Les postes qui font bouger le chiffre, ceux qui manquent toujours dans un devis, et comment rendre comparables deux propositions qui n'ont rien à voir.
---

Faites chiffrer la même application web par trois prestataires et vous obtiendrez
trois montants séparés par un facteur quatre. Le réflexe est de soupçonner un abus.
La vérité est plus banale : ils chiffrent trois projets différents, parce que le
cahier des charges autorisait trois lectures.

## Ce que le client voit

Les écrans. Tout le monde les chiffre, et ils représentent la plus petite moitié du
travail.

- Combien d'écrans distincts, et combien d'états chacun ? Une liste, c'est un écran ;
  une liste avec recherche, filtres, état vide, état d'erreur, état de chargement et
  pagination, c'est plutôt six.
- Quelle part de design sur mesure, quelle part de bibliothèque de composants ?
- Doit-elle vraiment fonctionner sur téléphone, ou seulement y survivre ?

## Ce que le client ne voit pas

Environ 40 % de la plupart des projets, et la raison habituelle de l'écart entre
devis.

**Authentification et permissions.** « Les utilisateurs peuvent se connecter »,
c'est un après-midi. « Le responsable voit son agence, le directeur régional sa
région, la comptabilité voit tout mais ne modifie rien », c'est une semaine — et
cela touche ensuite chaque requête du système.

**Modélisation des données.** S'y tromper est l'erreur la plus coûteuse en
informatique, parce que chaque fonctionnalité ultérieure en hérite. Invisible en
démonstration, décisive la deuxième année.

**La partie administration.** Quelqu'un doit ajouter des produits, corriger des
erreurs, rembourser des commandes et répondre à « pourquoi ce client voit-il le
mauvais prix ? ». Si le devis ne prévoit pas d'espace d'administration, soit vous
demanderez indéfiniment des requêtes à un développeur, soit le coût est caché.

**Gestion des erreurs.** Que se passe-t-il si la passerelle de paiement expire après
avoir encaissé ? Un système sans réponse à cette question n'est pas terminé, il est
présenté.

## Ce que personne ne mentionne

| Poste | Fourchette habituelle | Remarque |
|---|---|---|
| Hébergement et infrastructure | 30 – 400 € / mois | Croît avec le trafic |
| Domaine et certificats | 15 – 60 € / an | Les certificats sont souvent gratuits |
| E-mails transactionnels | 0 – 80 € / mois | Les paliers gratuits s'épuisent vite |
| Supervision des erreurs | 0 – 100 € / mois | Non optionnel sur un système réel |
| Sauvegardes et tests de restauration | Faible, mais pas nul | Une sauvegarde jamais restaurée est un espoir |
| Maintenance | 15 – 20 % du coût de build / an | Les dépendances et navigateurs bougent |

C'est la ligne maintenance que l'on conteste le plus, et elle n'est jamais fausse.
Un logiciel se dégrade parce que son environnement change — navigateurs,
bibliothèques, API de paiement, règles fiscales. Une application que personne ne
touche pendant deux ans n'est pas stable : elle n'est pas maintenue.

## Comment le périmètre déplace le prix

| Périmètre | Ce que c'est | Coût relatif |
|---|---|---|
| Prototype | Cliquable, sans vraies données, pour montrer | 1x |
| MVP | Vraies données, un type d'utilisateur, le parcours principal | 3 – 4x |
| Production v1 | Droits, administration, paiement, erreurs traitées | 8 – 12x |
| Système intégré | Dialogue avec vos systèmes existants | 15x+ |

Le passage du MVP à la production est celui qui surprend, et il correspond presque
entièrement à la moitié invisible ci-dessus. Le passage à « intégré » dépend de vos
systèmes existants, pas de la nouvelle application : une API documentée, c'est des
jours ; un système fermé, des semaines.

## Rendre deux devis comparables

Quatre questions suffisent :

1. **Une interface d'administration est-elle incluse ?** Sinon, ajoutez-la.
2. **À qui appartient le code, et comment est-il livré ?** Un dépôt et des accès, pas
   une URL déployée.
3. **Que se passe-t-il pendant les trois mois suivant la mise en ligne ?** La
   correction de ce que vous découvrirez est-elle incluse, et pour combien de temps ?
4. **Qu'est-ce qui est explicitement exclu ?** Une bonne proposition l'écrit sans
   qu'on le demande.

Comparez ensuite sur trois ans, hébergement et maintenance compris. Le
développement le moins cher n'est pas souvent le système le moins cher.

> Un devis est une description de périmètre à laquelle on a attaché un nombre.
> Quand deux nombres divergent fortement, lisez les descriptions, pas les nombres.

## Comment baisser le prix honnêtement

- **Supprimez des types d'utilisateurs avant des fonctionnalités.** Trois rôles
  coûtent bien plus qu'un, et il est plus facile d'en ajouter un plus tard que d'en
  retirer un.
- **Utilisez une bibliothèque de composants.** Le design sur mesure sur chaque écran
  est l'endroit où disparaissent les budgets.
- **Reportez les intégrations.** Lancez d'abord, connectez ensuite.
- **Écrivez la page.** Qui l'utilise, les trois choses qu'ils y font, et les systèmes
  auxquels elle doit parler : cette page change votre prix plus que toute
  négociation.

## Questions fréquentes

### Peut-on obtenir un prix ferme ?

Pour un périmètre bien défini, oui, et vous devriez l'exiger. Pour « construisez-nous
une plateforme », aucun prestataire honnête ne le peut — et celui qui le fait a
intégré le risque au prix, que vous payez qu'il survienne ou non.

### Vaudrait-il mieux acheter ?

C'est tout à fait possible. Parcourez d'abord
[logiciel sur mesure ou solution du marché](/blog/custom-software-vs-off-the-shelf-how-to-choose).
