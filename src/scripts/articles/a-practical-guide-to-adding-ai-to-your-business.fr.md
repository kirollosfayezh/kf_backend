---
title: Guide pratique pour intégrer l'IA dans votre entreprise
summary: Quelles tâches valent vraiment d'être automatisées, comment en tester une en quinze jours pour presque rien, et les quatre écueils qui font échouer la plupart des projets d'IA.
---

La plupart des projets d'IA échouent de la même manière. Quelqu'un décide que
l'entreprise doit « utiliser l'IA », on achète un outil, et six mois plus tard c'est
un onglet de navigateur que personne n'ouvre.

Les projets qui fonctionnent inversent l'ordre. Ils partent d'une tâche déjà
réalisée — mal, lentement ou à grands frais — et se demandent si une machine peut
faire précisément cela assez bien.

## Ce que l'IA fait réellement bien

Soyez précis, car les promesses générales ne servent à rien pour planifier. Dans un
contexte d'entreprise, les modèles actuels sont fiables sur quatre choses :

**Transformer du texte désordonné en données structurées.** Des factures
fournisseurs en PDF en lignes dans votre système. Des e-mails de demande en champs
de CRM. Des bons de livraison manuscrits en mouvements de stock. C'est la catégorie
la plus rentable et la moins risquée, et elle reste constamment sous-exploitée.

**Classement et routage.** À quel service cet e-mail est-il destiné ? Cet avis
est-il une réclamation ou une question ? Cette transaction est-elle inhabituelle ?

**Rédiger pour qu'un humain valide.** Premières versions de réponses, fiches
produits, résumés de longs échanges. Le résultat est un point de départ, jamais le
mot de la fin.

**Rechercher dans vos propres documents.** Répondre à « que dit notre contrat avec
ce fournisseur sur les retards de livraison ? » sans que personne n'ouvre un
dossier.

## Ce qu'elle fait encore mal

- **Les calculs qui comptent.** Ne laissez pas un modèle calculer un total.
  Faites-lui extraire les chiffres et laissez du code ordinaire faire l'addition.
- **Tout ce qui exige une certitude.** Il produira une réponse assurée, qu'il ait ou
  non de quoi la justifier.
- **Connaître votre entreprise sans qu'on le lui dise.** Il n'a jamais vu votre
  grille tarifaire, vos règles ni votre historique, sauf si vous les lui fournissez.

## Le test des deux semaines

Avant de vous engager sur quoi que ce soit, faites ceci. Cela coûte une fraction
d'un projet et répond à la seule question qui compte : cette tâche s'y prête-t-elle
vraiment ?

1. **Choisissez une tâche.** Volume élevé, enjeu faible, faite aujourd'hui par une
   personne. Trier les e-mails entrants vaut mieux qu'« améliorer le service client ».
2. **Rassemblez cent exemples réels.** De vrais cas tirés de votre activité, y
   compris les cas épineux. C'est l'étape que l'on saute, et c'est celle qui décide
   du résultat.
3. **Faites-le à la main avec un outil du marché.** Pas d'intégration, pas de
   développement. Collez les exemples et notez ce qui se passe.
4. **Comptez.** Combien de réponses justes, combien de fausses, et quelle était la
   gravité de la pire erreur ?

Si la précision est élevée et que la pire erreur reste supportable, vous tenez un
projet. Si la pire erreur est grave — un mauvais prix annoncé à un client, un
document juridique mal classé — il vous faut un humain qui valide chaque résultat,
ce qui change l'équation économique et doit être prévu dès la conception plutôt
qu'ajouté après coup.

> La question n'est jamais « est-ce précis ? ». C'est « combien cela nous coûte-t-il
> quand c'est faux, et qui s'en aperçoit ? »

## Les quatre façons dont ces projets échouent

| Échec | À quoi cela ressemble | Comment l'éviter |
|---|---|---|
| Une solution en quête d'un problème | « Nous devrions utiliser l'IA » sans tâche précise | Partir d'une tâche, jamais de la technologie |
| Aucun point de contrôle humain | Des résultats automatiques envoyés aux clients sans relecture | Décider dès le départ qui valide quoi |
| Aucune mesure | Personne ne sait si cela aide | Mesurer la précision avant le lancement, puis continuer |
| Des données que personne n'a préparées | Le modèle ne voit pas ce dont il a besoin | Corriger d'abord les données — c'est le vrai projet |

Le dernier est de loin le plus fréquent. Si vos informations produits vivent dans
trois tableurs et dans la mémoire d'une seule personne, aucun modèle ne les sauvera.
Faire ce ménage, c'est le projet, et il se rentabilise même si vous n'ajoutez
jamais d'IA.

## Ce que cela coûte

| Approche | Coût habituel | Idéal pour |
|---|---|---|
| Outil du marché, utilisé manuellement | 20 – 100 $ / mois | Tests, faible volume |
| Outil existant connecté à vos systèmes | 3 000 – 12 000 $ une fois + usage | Une tâche définie et répétée |
| Workflow sur mesure dans votre propre logiciel | 12 000 – 40 000 $ + usage | Gros volume, besoin de vos données et de vos règles |

Les coûts d'usage augmentent avec le volume et sont faciles à sous-estimer.
Mesurez-les pendant le test des deux semaines plutôt que de les découvrir au
troisième mois.

## Par où commencer, selon votre activité

- **Commerce de détail :** classer et router les messages clients ; extraire les
  factures fournisseurs vers le stock.
- **Restaurants :** résumer les avis en thèmes hebdomadaires ; prévoir la mise en
  place à partir de l'historique des ventes. (Le volet stock est traité dans
  [réduire le gaspillage de stock d'un restaurant](/blog/cutting-a-restaurant-s-stock-waste-by-a-third).)
- **Services professionnels :** rechercher dans les propositions et contrats
  passés ; rédiger les premières réponses aux demandes.
- **Toute entreprise avec un entrepôt :** transformer bons de livraison et listes de
  colisage en mouvements de stock sans rien saisir.

## Questions fréquentes

### Avons-nous besoin de notre propre modèle ?

Presque certainement pas. Entraîner un modèle est rarement la bonne réponse à un
problème d'entreprise ; connecter un modèle existant à vos données, encadré par vos
règles, l'est presque toujours.

### Nos données sont-elles en sécurité ?

Cela dépend entièrement du dispositif, et c'est une question à régler dans le
contrat plutôt que pendant l'appel commercial. Demandez où les données sont
traitées, si elles sont conservées et si elles servent à l'entraînement. Obtenez
les réponses par écrit.

### En combien de temps est-ce rentabilisé ?

Si vous avez choisi une tâche à fort volume et mesuré honnêtement, généralement en
moins d'un an. Si vous ne pouvez pas décrire la tâche en une phrase, la réponse
honnête est que cela ne le sera pas.
