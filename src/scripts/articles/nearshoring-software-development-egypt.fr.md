---
title: Nearshoring en Égypte : ce qu'un acheteur européen doit vérifier
summary: Fuseau horaire, coûts, droit des contrats et la seule question qui décide de la réussite — avant d'engager le moindre développeur.
---

Le nearshoring se vend généralement sur le coût. C'est l'aspect le moins
intéressant. Ce qui décide du résultat, c'est de pouvoir joindre un jeudi après-midi
quelqu'un qui comprend votre problème — et que le travail que vous avez payé vous
appartienne réellement ensuite.

## Pourquoi l'Égypte plutôt que l'Europe de l'Est

L'Europe de l'Est est le réflexe par défaut, et pour beaucoup de projets, elle reste
le bon choix. Les arguments en faveur de l'Égypte sont plus concrets que ne le
laisse penser la comparaison des coûts :

- **Fuseau horaire.** Le Caire a une à deux heures de décalage avec l'Europe
  centrale selon la saison. Une journée de travail complète se recoupe — pas besoin
  d'attendre le lendemain matin pour obtenir une réponse, comme avec l'Asie du Sud.
- **Capacité.** L'Égypte forme des ingénieurs en grand nombre, et le marché est loin
  d'être aussi tendu qu'en Pologne ou en République tchèque.
- **Langue.** L'anglais est la langue de travail du secteur. L'allemand ne l'est
  pas — et c'est là que se trouve le vrai risque.
- **Niveau de prix.** Nettement inférieur à celui de l'Europe de l'Est, lui-même
  nettement inférieur à celui de l'Europe de l'Ouest.

## Ce que cela coûte réellement

Des ordres de grandeur, pas des devis. Quiconque annonce une somme fixe sans cahier
des charges devine.

| | Europe de l'Ouest | Europe de l'Est | Égypte |
|---|---|---|---|
| Développeur senior, tarif journalier | 800 – 1 200 € | 400 – 650 € | 200 – 400 € |
| Petit projet (MVP) | 60 000 € + | 30 000 € + | 12 000 € + |
| Équipe permanente de trois personnes | 40 000 €/mois | 20 000 €/mois | 9 000 €/mois |

L'écart est réel. C'est aussi la raison pour laquelle ces collaborations échouent :
les acheteurs qui ne regardent que le tarif journalier finissent par acheter des
heures plutôt que des résultats.

## Les trois risques qui comptent

### 1. À qui appartient le code ?

Le droit d'auteur allemand, comme une grande partie du droit européen, fonctionne
différemment de la notion américaine de « work for hire » : la qualité d'auteur
elle-même ne se transfère pas, ce sont les droits d'exploitation qui se cèdent. Dans
un contrat régi par une autre juridiction, aucune de ces hypothèses ne s'applique
automatiquement.

Écrivez-le explicitement : des droits exclusifs, perpétuels et cessibles sur tout ce
qui est produit, code source compris. Sans cette phrase, vous risquez de détenir une
licence plutôt qu'un produit.

### 2. RGPD et transfert vers un pays tiers

L'Égypte ne bénéficie d'aucune décision d'adéquation de l'UE. Si le prestataire
traite des données personnelles, il vous faut des clauses contractuelles types, une
analyse d'impact des transferts et un contrat de sous-traitance des données.

Le raccourci pratique : gardez les données de production dans l'UE. Le développement
et la maintenance se font sur des données anonymisées ou synthétiques. Cela supprime
l'essentiel du problème avant même qu'il existe — et c'est de toute façon une
meilleure pratique d'ingénierie.

### 3. Langue et connaissance métier

Le plus grand risque n'est aucun des deux précédents. C'est que votre connaissance
métier existe dans votre langue, alors que la réalisation se fait en anglais.

Un développeur qui ne sait pas ce qu'est une écriture de produits constatés d'avance
la programmera mal, aussi solide soit-il techniquement. Lors de l'entretien de
sélection, ne testez pas les frameworks. Vérifiez si quelqu'un est capable, au bout
de vingt minutes, de vous résumer correctement votre activité.

> Le nearshoring échoue rarement pour des raisons techniques. Il échoue parce que
> personne n'a décrit le besoin assez précisément pour qu'il survive au passage
> d'une langue à l'autre.

## Comment bien l'organiser

1. **Commencez par un projet d'essai rémunéré.** Deux à quatre semaines, un
   périmètre serré, un vrai livrable. Il coûte moins cher qu'un mauvais recrutement
   et vous en apprend plus que n'importe quelle liste de références.
2. **Exigez votre propre dépôt.** Votre GitHub, votre compte cloud, vos
   identifiants. Le prestataire travaille chez vous, pas l'inverse.
3. **Un logiciel qui tourne chaque semaine, pas un rapport d'avancement.** Quelque
   chose que vous pouvez ouvrir et utiliser vous-même.
4. **Un interlocuteur nommé.** Pas une équipe tournante, ni un chargé de compte qui
   ne regarde jamais le code.
5. **La documentation comme critère de recette**, pas comme un détail réglé après
   coup.

## Quand le nearshoring n'est pas la bonne réponse

Si les besoins ne sont pas arrêtés et changent chaque semaine, la distance —
géographique et linguistique — est un amplificateur, pas une économie. Réglez cela
en interne avant de l'externaliser.

De même si le système concerné n'est compris que par une seule personne et documenté
par personne. Ne confiez pas à l'extérieur un savoir qui n'existe que dans la tête
de quelqu'un.

## Questions fréquentes

### Faut-il quelqu'un qui parle notre langue ?

Pour le développement, pas impérativement. Pour le recueil des besoins, absolument —
ou alors il vous faut quelqu'un de votre côté capable d'exprimer clairement le
métier en anglais.

### Qu'en est-il de la semaine de travail et des jours fériés ?

La semaine de travail va traditionnellement du dimanche au jeudi, souvent ramenée au
lundi-vendredi pour les clients européens. Convenez-en dès le départ, ainsi que des
jours fériés — ils ne tombent pas aux mêmes dates.

### Que se passe-t-il si nous mettons fin à la collaboration ?

Si le point deux ci-dessus a été respecté : rien de dramatique. Le code, les
identifiants et la documentation sont déjà à vous. C'est précisément à cela qu'il
sert.
