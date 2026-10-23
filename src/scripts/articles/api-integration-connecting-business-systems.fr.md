---
title: Connecter les systèmes que vous utilisez déjà
summary: Pourquoi l'intégration coûte ce qu'elle coûte, les quatre façons de relier des systèmes, et comment savoir avant de vous engager à laquelle vous avez affaire.
---

La plupart des entreprises n'ont pas besoin d'un nouveau logiciel. Elles ont besoin
que les logiciels qu'elles possèdent déjà cessent de se contredire.

Le logiciel de caisse sait ce qui a été vendu. Le logiciel de comptabilité sait ce
qui a été facturé. Le système d'entrepôt sait ce qui est en rayon. Aucun n'est
d'accord avec les autres, et quelqu'un passe sa semaine à rapprocher trois écrans.

C'est un problème d'intégration, et son prix varie énormément selon une seule chose,
que vous pouvez vérifier en un après-midi.

## Les quatre façons de connecter deux systèmes

Du plus fiable au moins fiable.

### 1. Une API documentée

Le système offre un moyen défini pour que d'autres logiciels lisent et écrivent ses
données. C'est le bon cas : prévisible, pris en charge, et il survit à la prochaine
mise à jour de l'éditeur.

**Effort habituel :** de quelques jours à deux semaines par intégration.

### 2. Une API réelle mais non documentée

Le système a une interface, mais elle n'est pas publiée — c'est souvent celle
qu'utilise l'application mobile de l'éditeur. Elle fonctionne, mais rien ne
l'empêche de changer sans prévenir.

**Effort habituel :** deux à quatre semaines, plus une fragilité permanente.
Acceptable comme passerelle, pas comme fondation.

### 3. Échange de fichiers planifié

Le système exporte un fichier à heure fixe ; vous le lisez. Rudimentaire, mais
réellement robuste — bien des entreprises sérieuses tournent sur un CSV nocturne.

La limite, c'est le temps : vos données ne sont pas plus fraîches que le dernier
export. Si vos décisions exigent des chiffres en temps réel, cela ne suffit pas.

**Effort habituel :** une à trois semaines.

### 4. Extraction d'écran ou export manuel

Aucune interface. Quelqu'un télécharge un rapport, ou un logiciel se fait passer
pour un utilisateur qui clique de page en page.

**Effort habituel :** variable, et cela casse chaque fois que l'éditeur modifie un
écran. Traitez-le comme une mesure provisoire assortie d'un plan de remplacement —
ou comme la preuve que c'est le système lui-même qu'il faut remplacer.

## La question à poser en premier

Avant de cadrer la moindre intégration, demandez à l'éditeur du système **le plus
ancien** :

**« Avez-vous une documentation d'API, et puis-je la voir maintenant ? »**

Pas « prenez-vous en charge l'intégration ? » — tous les éditeurs répondent oui.
Demandez le document. La réponse vous situe dans la liste ci-dessus, et c'est cette
position, pas le nouveau projet, qui détermine le coût.

| Réponse | Ce qu'elle signifie |
|---|---|
| Vous envoie un lien immédiatement | Cas 1. Allez-y. |
| « Oui, nos partenaires y ont accès » | Peut-être le cas 1, derrière une barrière commerciale. Demandez le coût et les conditions. |
| « Nous pouvons vous développer un export » | Cas 3. Budgétez en conséquence. |
| « Qu'aimeriez-vous qu'elle fasse ? » | Ils n'en ont pas. Cas 4. |
| Pas de réponse | Cas 4, et une raison de reconsidérer le système. |

## Où se trouve réellement le coût

Pas dans la lecture des données. Lire les données est la partie facile, et c'est ce
que montrent les démonstrations.

Le coût se trouve dans tout ce qui arrive quand la réalité se comporte mal :

- **L'autre système est en panne.** Mettez-vous en file d'attente et réessayez-vous,
  ou échouez-vous en lançant une alerte ?
- **Le même enregistrement arrive deux fois.** Crée-t-il une commande en double ?
- **Les deux systèmes ne sont pas d'accord.** Lequel l'emporte, et qui est prévenu ?
- **Un enregistrement change après que vous l'avez copié.** Vous en apercevez-vous ?
- **Quelqu'un modifie les deux côtés en même temps.** Quelle modification survit ?

Ce sont des décisions métier, pas des décisions techniques, et il faut quelqu'un du
métier pour les prendre. Une intégration construite sans y répondre fonctionnera en
test et produira en production des erreurs de données silencieuses qui
s'accumulent — celles qu'on découvre lors d'un audit, un an plus tard.

> L'intégration ne consiste pas à déplacer des données. Elle consiste à décider ce
> qui est vrai quand deux systèmes ne sont pas d'accord.

## Un ordre raisonnable

1. **Un seul sens d'abord.** Lisez l'ancien système vers le nouveau. La
   synchronisation bidirectionnelle est nettement plus difficile, et souvent
   inutile.
2. **Un seul type d'enregistrement d'abord.** Les produits, puis les clients, puis
   les commandes. Chacun vous apprend quelque chose sur le suivant.
3. **Journalisez tout dès le premier jour.** Quand un chiffre est faux au quatrième
   mois, c'est le journal qui vous dit pourquoi.
4. **Rapprochez délibérément.** Une tâche quotidienne qui compare les deux côtés et
   signale les écarts. Sans elle, vous faites confiance au lieu de savoir.

## Questions fréquentes

### Faut-il utiliser une plateforme d'intégration plutôt que développer ?

Pour des systèmes courants dotés de connecteurs prêts à l'emploi, souvent oui —
c'est moins cher et plus rapide. Cela devient la mauvaise réponse quand votre
logique est atypique, quand la tarification à l'enregistrement dépasse le coût d'un
développement, ou quand le connecteur ne couvre pas les champs dont vous avez
réellement besoin.

### Notre éditeur facture l'accès à l'API. Est-ce normal ?

C'est courant, et cela doit entrer dans la comparaison. Ce qui n'est pas acceptable,
c'est qu'un éditeur facture l'accès à **vos propres données**. C'est une raison de
préparer une sortie, et
[acheter ou développer](/blog/custom-software-vs-off-the-shelf-how-to-choose) est la
prochaine lecture.

### Comment éviter cela la prochaine fois ?

Faites d'« une API documentée et un export complet des données » une exigence écrite
pour tout futur achat de logiciel. Cela ne coûte rien à l'achat, et c'est la seule
chose qui détermine si vos systèmes pourront un jour fonctionner ensemble.
