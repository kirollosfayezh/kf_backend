---
title: Réduire d'un tiers le gaspillage d'une chaîne de restaurants
summary: Comment un groupe de quatre restaurants a remplacé bons papier et estimations hebdomadaires par un système connecté : ce que nous avons construit, ce qui a changé, ce que nous ferions autrement.
---

Un groupe de quatre restaurants est venu nous voir avec un problème qu'il résumait
ainsi : « il nous faut un meilleur logiciel de caisse ». Après une semaine à
observer le service, il était clair que la caisse n'était pas le problème. Le
problème, c'est que rien de ce que savait la caisse n'arrivait jamais jusqu'à ceux
qui prenaient les décisions.

## Ce qui se passait réellement

Les commandes étaient prises sur papier, apportées en cuisine, puis saisies
séparément dans la caisse. Trois conséquences en découlaient, et aucune ne
ressemblait, vue de l'intérieur, à un problème de logiciel :

- **Le stock était une estimation hebdomadaire.** Les commandes fournisseurs se
  faisaient par habitude. Les mêmes quantités arrivaient chaque semaine quelles que
  soient les ventes : les produits populaires venaient à manquer et les denrées
  périssables finissaient à la poubelle.
- **La clôture prenait quarante minutes par soir et par restaurant.** Un
  responsable rapprochait à la main les bons papier et la caisse, pour obtenir un
  chiffre que la caisse avait déjà.
- **Des commandes se perdaient entre la salle et la cuisine.** Chaque plat refait
  coûtait deux fois : la nourriture, et l'attente.

Les propriétaires voyaient l'argent partir. Ils ne voyaient pas où.

## Ce que nous avons construit

Un seul système connecté, livré par étapes pour que chaque brique se rentabilise
avant que la suivante ne commence.

**Étape un — caisse (POS) et écran de cuisine.** Les commandes partent de la salle
directement vers un écran en cuisine. Plus d'écriture à la main, plus de bons
perdus, plus de double saisie. Cela seul a réglé le problème des plats refaits en
deux semaines.

**Étape deux — fiches techniques et stock en temps réel.** Chaque plat de la carte
est relié à ses ingrédients, de sorte qu'une vente déduit automatiquement le stock.
L'estimation hebdomadaire est devenue un simple calcul : le système sait ce qui est
sorti.

**Étape trois — commander selon la consommation.** Des bons de commande suggérés,
générés à partir des ventes réelles, ajustés par un responsable avant d'être
envoyés aux fournisseurs.

**Étape quatre — un seul tableau de bord pour tous les restaurants.** Les
propriétaires voient les quatre établissements ensemble : ventes, stock,
gaspillage et main-d'œuvre, avec des chiffres cohérents entre eux parce qu'ils
proviennent d'une seule source.

## Ce qui a changé

| | Avant | Après le premier trimestre |
|---|---|---|
| Gaspillage de stock | Référence | ~33 % de moins |
| Clôture du soir | 30 – 40 min par restaurant | Vérifiée, plus reconstituée |
| Commandes perdues ou refaites | Plusieurs par service | Rares |
| Visibilité sur le stock | Hebdomadaire, sur papier | En temps réel, tous restaurants confondus |

Le chiffre du gaspillage est celui que citent les propriétaires, et il vient
presque entièrement de l'étape trois. Commander selon la consommation réelle plutôt
que par habitude n'a rien d'une idée sophistiquée. C'était simplement impossible
tant que les données n'existaient pas.

> Nous commandions la même quantité chaque semaine, quoi que nous vendions. Le
> système nous a simplement montré l'écart.
> — le directeur des opérations du groupe

## Ce qui a fait la réussite

**Nous avons observé un service du vendredi avant d'écrire quoi que ce soit.**
Toutes les hypothèses erronées que nous aurions faites ont été corrigées en cette
seule soirée. Aucun cahier des charges ne les aurait fait ressortir.

**Une livraison par étapes.** Chaque étape est entrée en service seule et a fait
ses preuves avant que la suivante ne démarre. Si le projet s'était arrêté après
l'étape un, il aurait tout de même valu la peine.

**Un seul restaurant d'abord.** Le plus fréquenté, pendant trois semaines, avant
les trois autres. Ce qui devait mal tourner n'a mal tourné qu'une fois.

## Ce que nous ferions autrement

**Nous avons sous-estimé la saisie des fiches techniques.** Relier chaque plat de
la carte à ses ingrédients est fastidieux, cela demande le chef de cuisine plutôt
qu'un développeur, et nous l'avions planifié comme une simple tâche de saisie. Cela
a pris environ deux fois plus de temps que prévu, et c'est la base sur laquelle
repose tout le reste.

**Nous avons construit les rapports trop tôt.** Le premier tableau de bord a été
conçu avant que quiconque ait vécu avec les données, et la moitié n'a jamais servi.
La version qui est restée a été construite au troisième mois, à partir des
questions que les gens avaient réellement commencé à poser. C'est le piège décrit
dans [votre tableau de bord vous ment](/blog/your-dashboard-is-lying-to-you) — nous
y sommes tombés nous-mêmes.

## Cela fonctionnerait-il pour vous ?

Les gains obtenus ici tiennent à une situation précise : plusieurs établissements,
des stocks périssables, et un fonctionnement où l'information était saisie mais
n'aboutissait jamais à une décision. Si cela vous ressemble, ces chiffres sont
plausibles pour votre entreprise aussi.

Si vous n'avez qu'un seul établissement avec un stock simple, un bon logiciel de
caisse du marché vous apportera l'essentiel pour une fraction du coût. Cette
comparaison est détaillée dans
[logiciel de caisse du marché ou sur mesure](/blog/ready-made-vs-custom-pos-restaurants).

## Questions fréquentes

### Combien de temps cela a-t-il pris ?

Quatorze semaines entre la première visite et la mise en service des quatre
restaurants, sur les quatre étapes. L'étape un tournait dans le premier restaurant
dès la cinquième semaine.

### Et les obligations de facturation électronique ?

Intégrées dès l'étape un plutôt qu'ajoutées après coup, ce qui coûte nettement
moins cher. Voir
[connecter votre logiciel de caisse au système de l'ETA](/blog/eta-e-invoicing-pos-integration).

### Le personnel a-t-il résisté ?

Moins que ne le craignaient les propriétaires, parce que l'écran de cuisine a
facilité le travail des cuisiniers dès le premier jour. L'ordre compte :
automatisez d'abord quelque chose qui aide ceux qui l'utilisent, et le reste est
accepté bien plus facilement.
