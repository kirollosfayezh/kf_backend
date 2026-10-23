---
title: Une idée d'application ? Commencez petit avec un MVP
summary: Ce qu'est vraiment un MVP, comment choisir la fonctionnalité qui compte, ce que vous pouvez retirer de la version 1 et ce qu'il faut garder, et comment passer à la version 2.
---

La plupart des idées d'application arrivent toutes faites : l'écran d'accueil, les
points de fidélité, le chat, le mode sombre, le parrainage. Puis le devis arrive, et
la question devient : comment réduire sans tout gâcher ?

C'est la mauvaise question. La bonne : qu'est-ce qui doit être vrai pour que cette
idée fonctionne, et quelle est la plus petite application qui vous le dirait ?

## Ce qu'est vraiment un MVP

MVP signifie « minimum viable product », ou produit minimum viable. Le mot que l'on
retient, c'est « minimum ». Celui qui compte, c'est « viable ».

Un MVP n'est pas une version bon marché et bâclée de l'application complète. C'est
la plus petite version qui teste votre **hypothèse la plus risquée** auprès de vrais
utilisateurs. Toute idée repose sur quelques hypothèses :

- Les gens rencontrent ce problème assez souvent pour s'en soucier.
- Ils changeront leurs habitudes actuelles pour utiliser votre application à la
  place.
- Ils paieront pour l'utiliser, ou quelqu'un paiera à leur place.
- Vous pouvez fournir le service derrière l'application à un coût tenable.

En général, l'une d'elles est bien plus incertaine que les autres. C'est celle-là
que la version 1 doit tester. Un MVP bogué et confus ne vous apprend rien : vous ne
saurez pas si les gens ont abandonné l'idée ou la mauvaise application.

## Choisissez la fonctionnalité centrale

Écrivez une phrase : « Un utilisateur ouvre l'application pour ___. » Si vous avez
besoin du mot « et », vous avez plus d'une application.

Pour une idée de services à domicile, cela pourrait être : « Un utilisateur ouvre
l'application pour réserver un plombier vérifié pour aujourd'hui. » Pas pour
parcourir des conseils ou gagner des points. Tout ce que contient la version 1
existe pour que cette seule action fonctionne de bout en bout.

Un test utile pour chaque fonctionnalité de votre liste : si elle disparaissait,
l'action centrale serait-elle encore possible ? Si oui, elle peut attendre.

## Ce qu'il faut retirer de la version 1

La majeure partie de la liste, honnêtement :

- **Les fonctions sociales** : profils, abonnements, commentaires, partage.
- **La fidélité et le parrainage** : ils récompensent un usage que vous n'avez pas
  encore.
- **Plusieurs modes de connexion** : une méthode fiable suffit pour commencer.
- **Les réglages avancés, les thèmes et la personnalisation.**
- **Tous les cas particuliers du parcours** : traitez bien le parcours principal, et
  les cas rares à la main pour l'instant.

Gardez quand même la liste. L'usage réel vous dira quels éléments ont leur place
dans la version 2.

## Ce qu'il ne faut pas retirer

Certaines choses semblent optionnelles sur un devis, et ne le sont pas.

### La sécurité

Des mots de passe stockés correctement, des connexions chiffrées, des utilisateurs
qui ne voient que leurs propres données. Une fuite de données en troisième semaine
met fin à l'expérience, et corriger la sécurité après coup est bien plus difficile
que de la prévoir dès le départ.

### Des paiements bien faits

Si de l'argent transite par l'application, utilisez une vraie passerelle de
paiement, gérez les paiements échoués et les doublons, et conservez de chaque
transaction une trace que vous pouvez rapprocher. En Égypte, le paiement à la
livraison côtoie souvent les cartes et les portefeuilles électroniques. Un écran de
paiement qui perd la trace de l'argent n'est pas un raccourci. C'est un risque.

### Une interface d'administration de base

Quelqu'un doit valider les prestataires, corriger une commande erronée et modifier
un prix. Sans interface d'administration, chacune de ces tâches devient une demande
au développeur. Elle n'a pas besoin d'être jolie. Elle doit exister.

## Un seul code pour Android et iOS

Pour la plupart des MVP, un framework multiplateforme comme Flutter ou React Native
est le choix pragmatique. Une seule base de code tourne sur les deux plateformes :
vous développez, testez et corrigez une seule fois, ce qui compte quand vous
modifiez l'application chaque semaine.

Si le budget ne permet qu'un seul store au départ, Android touche généralement plus
d'utilisateurs en Égypte, et ajouter iOS plus tard devient une simple publication,
pas une refonte. La question du coût est traitée dans
[combien coûte vraiment une application mobile en Égypte](/blog/app-development-cost-egypt).

## Testez avec de vrais utilisateurs avant d'en construire plus

Lancez auprès d'un petit groupe réel : les premiers clients, un seul quartier, une
seule agence, une liste d'attente. Pas des amis qui resteront polis.

Puis observez. Asseyez-vous à côté de quelques-uns pendant qu'ils l'utilisent, lisez
chaque message envoyé au support, et appelez ceux qui ne sont jamais revenus. Le
retour le plus utile, c'est le moment où quelqu'un bloque. Corrigez cela, et
résistez à l'envie d'ajouter quoi que ce soit d'autre.

## Ce qu'il faut mesurer pendant les 4 à 8 premières semaines

Laissez de côté les analyses compliquées. Répondez honnêtement à quelques
questions :

- **Activation** : parmi ceux qui installent l'application, combien réalisent
  l'action centrale au moins une fois ?
- **Usage répété** : reviennent-ils la refaire, sans qu'on les relance ?
- **Point d'abandon** : où exactement les gens abandonnent-ils le parcours ?
- **Disposition à payer** : si l'application est payante, les gens paient-ils ?
  Sinon, demandent-ils déjà comment payer ?
- **Coût de service** : combien vous coûte réellement chaque commande ou réservation
  menée à terme, y compris le travail manuel qui se cache derrière ?

Décidez avant le lancement quel résultat vous ferait continuer, changer de cap ou
arrêter. Sinon, n'importe quel chiffre peut être lu comme encourageant.

## Du MVP à la version 2

La version 2 doit découler des faits, pas de la liste de souhaits d'origine : ce sur
quoi les utilisateurs ont buté, ce qu'ils ont demandé à plusieurs reprises, et ce
que vous faites encore à la main. Si votre équipe confirme chaque réservation par
téléphone, voilà la prochaine fonctionnalité.

C'est là que le backend prouve sa valeur. Si la version 1 a des données propres, de
vrais comptes utilisateurs et une interface d'administration, la version 2 est une
extension. Si elle ne tenait que grâce à des raccourcis, la version 2 commence par
une réécriture.

## Les erreurs courantes

- **Tout construire d'un coup.** Le budget entier dépensé avant le premier vrai
  utilisateur, sans marge pour changer de cap.
- **Aucun plan pour le backend.** Avec des données stockées sur le téléphone, ou un
  backend que personne ne peut faire évoluer, il faudra plus tard reconstruire les
  comptes, la synchronisation et l'interface d'administration.
- **Ignorer les règles de validation des stores.** Apple et Google rejettent des
  applications pour une politique de confidentialité absente, un usage des données
  peu clair, une connexion que les examinateurs ne peuvent pas franchir, ou des
  parcours de paiement contraires à leurs règles. Lisez les consignes avant de
  développer.
- **Mesurer les téléchargements.** Les installations disent que votre marketing a
  fonctionné. L'usage répété dit que l'application a fonctionné.

## Par où commencer

Avant de parler au moindre développeur, notez l'action centrale, l'hypothèse dont
vous êtes le moins sûr, et le résultat à huit semaines qui vous convaincrait de
continuer. Cette page façonne le projet plus que n'importe quelle liste de
fonctionnalités.

Si vous voulez de l'aide pour cadrer un MVP de cette façon, KF Tech Solutions
développe des [applications mobiles](/services/mobile-applications) avec le backend
et l'interface d'administration prévus dès le départ.
[Parlez-nous de votre idée](/contact).

## Questions fréquentes

### Combien de temps faut-il pour développer un MVP ?

Cela dépend de la fonctionnalité centrale et de ce à quoi elle se connecte, mais il
faut généralement des semaines, pas des mois. Si le planning dépasse quelques mois,
le périmètre est redevenu celui d'une application complète.

### Un MVP, est-ce simplement un prototype ?

Non. Un prototype, c'est quelque chose que l'on montre ; un MVP, c'est quelque chose
que de vraies personnes utilisent pour de vraies tâches. Il lui faut un backend
fonctionnel, une vraie sécurité et assez de finition pour que les gens jugent
l'idée, pas les bugs.

### Et si le MVP montre que l'idée ne fonctionne pas ?

Alors il a fait son travail, à moindre coût. Souvent, les données orientent vers une
version plus ciblée de l'idée qui, elle, fonctionne, et une bonne partie de ce que
vous avez construit peut être réutilisée.
