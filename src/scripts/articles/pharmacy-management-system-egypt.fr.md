---
title: Logiciel de pharmacie en Égypte : stock, péremption et caisse
summary: Pourquoi une caisse générique ne suffit pas en pharmacie, et ce que doit faire un logiciel dédié : vente à la boîte ou à la plaquette, lots et alertes de péremption, changements de prix, commandes aux distributeurs, livraison et succursales.
---

Une pharmacie ressemble à un magasin : des rayons, un comptoir, une caisse. Puis on
regarde de plus près. Le même médicament se vend à la boîte et à la plaquette. La
moitié du stock a une date de péremption qui compte plus que son prix. Les prix
changent par décision officielle, pas par choix du propriétaire. Les distributeurs
accordent des unités gratuites et des délais de paiement. Et à 22 heures, il y a
cinq personnes au comptoir et deux commandes à livrer sur WhatsApp.

Un logiciel de caisse généraliste gère la caisse. Il ne gère pas la pharmacie. Voici
ce que doit faire un logiciel de pharmacie.

## Vendre à la boîte, à la plaquette et à l'unité

En Égypte, les clients achètent souvent une plaquette au lieu de la boîte entière.
Le système doit savoir qu'une boîte contient, par exemple, trois plaquettes de dix
comprimés, et que vendre une plaquette réduit le stock d'un tiers de boîte, pas
d'une boîte entière.

Chaque article doit donc comporter :

- **Les unités** : boîte, plaquette et, le cas échéant, unité
- **Les prix par unité**, calculés à partir du prix de la boîte lorsque celui-ci est
  fixé
- **Le code-barres** de la boîte, et un moyen rapide de vendre une plaquette sans
  lui

Si le caissier doit calculer de tête le prix d'une plaquette, il se trompera de
temps en temps, et le stock dérivera chaque jour.

## Lots et dates de péremption

C'est là que les pharmacies perdent le plus d'argent sans s'en rendre compte. Les
médicaments périment en rayon, sont découverts trop tard pour être retournés au
distributeur, et finissent passés en perte.

Le système doit enregistrer chaque achat avec son **numéro de lot et sa date de
péremption**, puis :

1. **Vendre en priorité la date de péremption la plus proche**, par défaut.
2. **Alerter tôt**, quelques mois à l'avance, tant qu'il est encore temps de vendre
   ou de retourner le stock.
3. **Indiquer la valeur** de ce qui périmera ce mois-ci et le mois prochain, par
   distributeur, pour que vous puissiez agir.
4. **Bloquer la vente** de tout produit déjà périmé.

> Un rapport des produits proches de la péremption, consulté une fois par semaine,
> rembourse à lui seul tout le système.

## Des prix qui changent par décision officielle

En Égypte, les prix des médicaments sont fixés officiellement, et ils changent.
Quand c'est le cas, le nouveau prix doit arriver sur toutes les caisses en même
temps, et l'ancien stock acheté à l'ancien prix doit toujours être valorisé
correctement.

Le système doit vous permettre de mettre à jour les prix à un seul endroit, à partir
d'une liste si possible, et garder une trace de ce qui a changé et quand. Les
caissiers ne doivent jamais pouvoir modifier un prix sur le moment sans autorisation
et sans journal.

## Acheter auprès des distributeurs

L'essentiel des achats d'une pharmacie se fait auprès d'une poignée de
distributeurs, chacun avec ses propres conditions. Un logiciel de pharmacie doit
gérer :

- **Les bons de commande**, suggérés à partir de ce qui se vend et de ce qui
  s'épuise
- **Les unités gratuites**, qui modifient le coût réel de chaque article
- **Les délais de paiement**, pour savoir ce que vous devez à chaque distributeur et
  quand
- **Les retours** de stock proche de la péremption ou abîmé, avec ce qui vous est dû
  en retour

Sans cela, le bénéfice réel du propriétaire par article n'est qu'une supposition.

## Une caisse qui suit le rythme aux heures de pointe

Au comptoir, la vitesse est primordiale. La caisse doit permettre de :

- **Scanner le code-barres** ou chercher par nom commercial, rapidement, en arabe ou
  en anglais
- **Trouver des alternatives** quand un article est en rupture, par principe actif
- **Encaisser espèces, cartes et portefeuilles électroniques**, et fractionner un
  paiement
- **Imprimer un reçu**, et l'émettre électroniquement lorsque votre activité y est
  tenue

Le système de reçu électronique est déployé par phases auprès des entreprises
égyptiennes. Nous avons expliqué comment il se connecte à la caisse dans
[facturation électronique ETA et intégration POS](/blog/eta-e-invoicing-pos-integration).

## Commandes en livraison et succursales

Beaucoup de pharmacies reçoivent désormais une grande part de leurs commandes par
téléphone et WhatsApp. Le système doit enregistrer chaque commande à livrer, qui la
livre, et l'argent que le livreur rapporte, pour que la caisse du soir tombe juste.

Avec plus d'une officine, chaque succursale a besoin de son propre stock, avec des
transferts entre succursales et une vue unique pour le propriétaire : ce qui s'est
vendu où, ce qui s'épuise, et ce qui va bientôt périmer.

Le système doit aussi continuer à vendre quand internet coupe, et rattraper son
retard au retour de la connexion. Une pharmacie ne peut pas fermer sa caisse parce
que le routeur a redémarré.

## Solution du marché ou sur mesure

Il existe en Égypte des logiciels de pharmacie prêts à l'emploi, et pour une
pharmacie unique, l'un d'eux est souvent le bon point de départ. Vérifiez la gestion
des péremptions, la vente à la plaquette et les rapports avant de signer, pas
seulement l'écran de caisse.

Le sur-mesure se justifie pour les chaînes qui ont leurs propres règles d'achat, une
activité de livraison, un site ou une application de commande, ou des besoins de
rapports que les solutions du marché ne couvrent pas. Notre guide pour
[choisir un logiciel de caisse pour votre magasin](/blog/pos-cashier-system-for-shops-egypt)
liste les questions à poser à tout fournisseur.

KF Tech Solutions développe des [logiciels de gestion](/services/business-systems)
et des logiciels de caisse (POS) pour les entreprises en Égypte. Si votre pharmacie
a dépassé les capacités de son système actuel, vous pouvez
[nous dire où il montre ses limites](/contact).

## Questions fréquentes

### Le système peut-il suggérer quoi commander ?

Oui. À partir des ventes récentes, du stock actuel et d'un stock minimum par
article, il peut proposer une commande par distributeur. Le pharmacien la vérifie
toujours ; la demande saisonnière et les nouveaux médicaments demandent du
discernement.

### Gère-t-il les ordonnances et les médicaments sous contrôle spécial ?

Il peut enregistrer quelles ventes ont été faites sur ordonnance, y joindre une
photo de celle-ci, et tenir les registres séparés qu'exigent certains médicaments.
Les obligations exactes pour les médicaments sous contrôle spécial sont fixées par
l'autorité de régulation : vérifiez les règles qui s'appliquent à vous.

### Comment migrer depuis notre système actuel ?

Les listes d'articles et le stock actuel peuvent généralement être exportés puis
importés. Les dates de péremption du stock existant sont la partie difficile ; la
plupart des pharmacies font un inventaire complet avec les dates de péremption au
moment du changement, ce qui vaut la peine de toute façon.

### Fonctionne-t-il sur tablette ?

L'écran de caisse, oui, avec un lecteur de codes-barres et une imprimante de
tickets. Les achats et les rapports sont plus confortables sur ordinateur.
