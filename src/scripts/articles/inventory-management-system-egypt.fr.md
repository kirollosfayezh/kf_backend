---
title: Gestion de stock en Égypte : où passe vraiment votre marchandise
summary: Les signes qu'Excel ne suffit plus, ce qu'une gestion de stock doit enregistrer, des inventaires qui marchent, seuils de réapprovisionnement, valorisation, lien avec la caisse, la boutique et la comptabilité, et comment basculer sans perdre un mois.
---

Demandez à un propriétaire combien il a de stock et vous obtiendrez généralement
deux réponses : ce que dit le fichier Excel, et ce qui se trouve réellement dans
l'entrepôt. L'écart entre les deux, c'est de l'argent : des articles vendus jamais
enregistrés, des transferts entre succursales arrivés incomplets, de la marchandise
abîmée que personne n'a sortie du stock, et le vol occasionnel.

Un logiciel de gestion de stock comble cet écart en enregistrant chaque mouvement,
pour que le chiffre à l'écran soit celui du rayon. Voici ce que cela demande.

## Les signes qu'Excel ne suffit plus

- **Le fichier et le rayon ne concordent pas**, et personne ne sait dire pourquoi.
- **Vous découvrez qu'un article est en rupture** quand un client le demande.
- **Les succursales s'appellent entre elles** pour savoir qui a du stock.
- **L'inventaire mensuel prend des jours**, et son résultat est discrètement ignoré.
- **Personne ne connaît le coût réel** de ce qui a été vendu, donc personne ne
  connaît le bénéfice réel.

Si trois de ces situations vous parlent, un tableur n'est plus le bon outil.

## Chaque mouvement a son justificatif

La règle qui fait fonctionner une gestion de stock est simple : le stock ne change
jamais sans une trace de la raison. Chaque mouvement relève de l'un de ces quelques
types :

1. **Réception** d'un fournisseur, sur bon de commande
2. **Ventes**, depuis la caisse (POS), la boutique en ligne ou les factures
3. **Transferts** entre entrepôts, succursales ou emplacements, expédiés puis
   réceptionnés
4. **Retours**, des clients et vers les fournisseurs
5. **Casse et mises au rebut**, avec un motif
6. **Ajustements** après inventaire, avec le nom de la personne qui les a validés

> Si le stock peut changer sans justificatif, le système n'est qu'un fichier Excel
> plus joli.

Un transfert se fait en deux étapes, expédition puis réception, et ce n'est pas un
hasard : quand dix cartons partent et que neuf arrivent, vous voulez le savoir le
jour même, pas en fin d'année.

## Articles, unités et emplacements

De bonnes données de stock commencent par une liste d'articles propre :

- **Un code par article**, avec un code-barres partout où c'est possible
- **Unités et conversions** : acheté au carton, stocké à la boîte, vendu à la pièce
- **Variantes**, comme la taille et la couleur, chacune avec son propre stock
- **Emplacements** : quel entrepôt, quelle succursale et, pour les grands entrepôts,
  quelle étagère ou quel casier

Les doublons d'articles aux noms légèrement différents sont la cause la plus
fréquente de chiffres de stock faux. Nettoyer la liste avant de basculer en vaut la
peine.

## Des inventaires qui fonctionnent vraiment

L'inventaire complet annuel, boutique fermée, découvre les problèmes avec douze mois
de retard. Une meilleure approche est l'**inventaire tournant** : compter chaque
semaine quelques emplacements ou familles d'articles, de sorte que tout soit compté
plusieurs fois par an, et les articles de plus forte valeur plus souvent.

Le système doit :

- Produire une feuille de comptage, ou un écran de comptage sur téléphone avec
  scanner
- **Masquer la quantité attendue** à la personne qui compte, pour qu'elle compte au
  lieu de confirmer
- Afficher les écarts, et exiger une validation avant d'ajuster le stock

Des écarts qui reviennent toujours au même endroit signalent un problème de
processus, pas seulement une erreur de comptage.

## Seuils de réapprovisionnement et achats

Pour chaque article important, fixez un **stock minimum** : la quantité nécessaire
pour couvrir les ventes le temps qu'une nouvelle commande arrive. Quand le stock
passe en dessous, le système propose une commande, regroupée par fournisseur.

Les articles saisonniers et les nouveautés demandent toujours un jugement humain,
mais les commandes suggérées éliminent l'échec le plus courant : oublier de
commander jusqu'à ce qu'il soit trop tard.

## Le coût, pour connaître votre bénéfice

C'est votre comptable qui choisit la méthode de valorisation, généralement le coût
moyen pondéré. Le rôle du système est de l'appliquer de façon cohérente à chaque
réception et à chaque vente, pour que le coût des marchandises vendues, et donc le
bénéfice, soit juste par article, par succursale et par mois.

## Reliez-le à tout ce qui vend

Une gestion de stock qui n'est pas reliée à vos ventes est périmée à l'instant même
où on la met à jour. Elle doit être reliée :

- **À la caisse (POS)** de vos magasins, sujet traité dans
  [choisir un logiciel de caisse pour votre magasin](/blog/pos-cashier-system-for-shops-egypt)
- **À votre boutique en ligne**, pour que le site ne vende jamais ce que vous n'avez
  pas
- **À votre comptabilité ou à votre ERP**, pour que les achats et les coûts arrivent
  dans les comptes, comme expliqué dans
  [l'ERP pour les petites entreprises](/blog/erp-for-small-business-egypt)

Le fonctionnement de ces connexions est expliqué dans
[relier ses systèmes de gestion par API](/blog/api-integration-connecting-business-systems).

## Basculer sans perdre un mois

1. **Nettoyez la liste d'articles** et mettez-vous d'accord sur les codes et les
   unités.
2. **Comptez tout une fois** pour obtenir un stock d'ouverture fiable.
3. **Commencez par les réceptions et les ventes**, puis ajoutez les transferts et
   les inventaires.
4. **Formez les personnes qui manipulent le stock**, pas seulement les bureaux.
5. **Passez les écarts en revue chaque semaine** pendant les deux premiers mois.

KF Tech Solutions développe des [logiciels de gestion](/services/business-systems),
gestion de stock comprise, et les relie aux caisses, boutiques en ligne et outils
comptables que les entreprises en Égypte utilisent déjà. Vous pouvez
[nous expliquer comment circule votre stock aujourd'hui](/contact).

## Questions fréquentes

### Faut-il des codes-barres ?

Pas dès le premier jour, mais ils rendent la réception, le comptage et la vente bien
plus rapides et bien plus fiables. La plupart des articles portent déjà un
code-barres du fabricant ; pour les autres, le système peut imprimer des étiquettes.

### L'équipe de l'entrepôt peut-elle utiliser des téléphones plutôt que des ordinateurs ?

Oui. Réceptions, transferts et inventaires fonctionnent bien sur un téléphone, avec
l'appareil photo en guise de scanner ou un petit lecteur portable, ce qui évite
aussi des allers-retours au bureau.

### Solution du marché ou sur mesure ?

Un module de stock du marché suffit souvent pour un magasin unique ou un entrepôt
simple. Le sur-mesure devient rentable quand vous avez plusieurs succursales, votre
propre fabrication ou assemblage, des unités inhabituelles, ou plusieurs canaux de
vente qui doivent partager un même chiffre de stock.

### Combien de temps avant que les chiffres soient fiables ?

À partir du premier inventaire complet, généralement en un ou deux mois de revue
hebdomadaire, le temps que l'équipe prenne l'habitude d'enregistrer chaque
mouvement.
