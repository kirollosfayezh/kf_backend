---
title: Ce que votre score PageSpeed Insights veut vraiment dire
summary: Score de laboratoire contre données de vrais visiteurs, les seuils Core Web Vitals qui comptent, et comment lire un rapport avant de payer une correction.
tags: PageSpeed Insights, Core Web Vitals, vitesse du site, SEO, Égypte
alt: Sprinteur en casquette jaune s’élançant de la ligne de départ d’une piste rouge
caption: Ce qui compte, c’est la vitesse perçue par vos vrais visiteurs, pas un score de laboratoire tiré d’un seul essai.
stats: 2,5 s|seuil LCP pour un bon chargement de page; 200 ms|seuil INP pour une bonne réaction à un toucher; 0,1|seuil CLS pour une page qui ne bouge pas
---

Le grand chiffre en haut de PageSpeed Insights est un score de laboratoire : un
seul chargement simulé de votre page sur un smartphone de milieu de gamme, noté
de 0 à 100. Ce que Google vous recommande réellement de réussir se trouve dans
une autre partie du même rapport : les Core Web Vitals, mesurés auprès de vrais
visiteurs de Chrome sur les 28 derniers jours. Une page peut obtenir 60 en
laboratoire et réussir, ou 95 et échouer.

Dernière vérification : 6 novembre 2026

## Données de laboratoire et données de terrain : deux tests différents

Chaque rapport PageSpeed Insights comporte deux parties, et la plupart des
malentendus viennent de leur confusion.

| | Données de terrain (vrais utilisateurs) | Données de laboratoire (le score de 0 à 100) |
|---|---|---|
| Source | Chrome User Experience Report (CrUX) : de vrais visiteurs | Lighthouse : un chargement de page simulé |
| Période | Les 28 derniers jours | L'instant où vous cliquez sur « Analyser » |
| Appareil | Les vrais téléphones et réseaux de vos visiteurs | Un smartphone de milieu de gamme émulé sur un réseau mobile bridé |
| Utile pour | Savoir si les gens ont réellement un problème | Trouver pourquoi une page est lente et tester une correction |
| Affiché quand | Votre page ou votre site reçoit assez de visites Chrome | Toujours |

Si une page n'a pas assez de visites, PageSpeed Insights affiche à la place les
données de l'ensemble du site (l'origine). Un site récent ou modeste peut
n'avoir aucune donnée de terrain ; le score de laboratoire est alors la seule
chose visible. C'est utile pour diagnostiquer, mais c'est un résultat de test,
pas une mesure de vos clients.

## Les trois Core Web Vitals et leurs seuils

Les Core Web Vitals de Google sont trois indicateurs. Chacun est évalué au
75e centile : trois visites sur quatre doivent atteindre le seuil ou faire mieux
pour que la page soit jugée « bonne ».

| Indicateur | Ce qu'il mesure | Bon | À améliorer | Mauvais |
|---|---|---|---|---|
| **LCP** (Largest Contentful Paint) | Le moment où la plus grande image ou le plus grand bloc de texte apparaît | Jusqu'à 2,5 s | 2,5–4 s | Plus de 4 s |
| **INP** (Interaction to Next Paint) | La rapidité de réaction aux touchers et aux clics | Jusqu'à 200 ms | 200–500 ms | Plus de 500 ms |
| **CLS** (Cumulative Layout Shift) | L'ampleur des sauts de la page pendant le chargement | Jusqu'à 0,1 | 0,1–0,25 | Plus de 0,25 |

L'INP ne peut se mesurer qu'avec de vraies personnes qui touchent l'écran : il
n'apparaît donc que dans les données de terrain. Le rapport de laboratoire
utilise à sa place le Total Blocking Time (TBT), le temps pendant lequel le
navigateur est trop occupé à exécuter des scripts pour répondre.

Google « recommande vivement » de bons Core Web Vitals et indique qu'ils
correspondent à ce que ses systèmes de classement principaux cherchent à
récompenser. Il ne promet aucun classement pour autant. Une page rapide au
contenu pauvre ne dépassera pas une page utile, comme nous l'expliquons dans
[Comment être trouvé sur Google, ChatGPT et Gemini](/blog/get-found-on-google-chatgpt-gemini).

## Comment le score de 0 à 100 est calculé

Le score de laboratoire est une moyenne pondérée de cinq indicateurs Lighthouse :

| Indicateur de laboratoire | Poids |
|---|---|
| Total Blocking Time | 30 % |
| Largest Contentful Paint | 25 % |
| Cumulative Layout Shift | 25 % |
| First Contentful Paint | 10 % |
| Speed Index | 10 % |

Les scores de 90 à 100 sont verts (« bon »), de 50 à 89 orange et de 0 à 49
rouges. Comme le TBT pèse le plus lourd, le JavaScript lourd, comme les widgets
de discussion, les balises de suivi et les carrousels, coûte généralement plus
de points qu'une image un peu trop grande.

## Pourquoi le score change à chaque test

Testez la même page trois fois et vous pourrez obtenir trois scores différents.
La documentation de Google indique que l'essentiel de cette variation ne vient
pas de Lighthouse, mais du routage réseau, des publicités et des tests A/B qui
changent d'un chargement à l'autre, de la machine qui exécute le test, des
extensions du navigateur et des antivirus. Considérez le score comme une
fourchette : lancez le test trois à cinq fois, retenez le résultat médian, et ne
jugez jamais une correction sur un seul passage.

Les données de terrain évoluent dans l'autre sens : lentement. Comme elles
couvrent les 28 derniers jours, une correction publiée aujourd'hui se mélange à
trois semaines de visites sur l'ancienne page. Attendez-vous à une évolution
progressive et laissez environ quatre semaines à une correction avant de juger
si elle a fonctionné. Si quelqu'un vous montre un meilleur résultat l'après-midi
même, c'est un résultat de laboratoire.

## Ce qui a fait bouger les chiffres sur notre propre site

Lorsque nous avons travaillé sur kftechsolutions.dev, le rapport a désigné quatre changements, dont aucun n'exigeait un serveur plus puissant :

- **La fenêtre pop-up était devenue le plus grand élément.** Le LCP mesure le plus grand élément à l'écran, et une pop-up était plus grande que le titre de la page. Le LCP chronométrait donc la pop-up : nous avons modifié sa façon de se charger.
- **Les pixels de suivi se chargent désormais après la première interaction.** Les balises d'analyse et de publicité disputaient l'attention du navigateur à la page pendant le chargement. Les lancer après la première interaction du visiteur les a sorties de la phase de chargement.
- **L'espace des images est réservé.** Chaque image a sa largeur et sa hauteur fixées à l'avance, si bien que le texte ne saute pas quand la photo arrive. C'est la correction classique du CLS.
- **La police arabe est préchargée.** Les pages en arabe utilisent un fichier de police distinct. Le charger tôt évite que le texte s'affiche dans une police puis bascule dans une autre, ce qui décale la mise en page et retarde le texte principal.

Rien de tout cela n'est exotique. Ce sont les corrections vers lesquelles
oriente la section de diagnostic des problèmes de performances du rapport, à
condition de la lire au lieu de regarder seulement le score.

## Lire un rapport avant de payer une correction

Avant de payer quelqu'un pour vous « amener à 100 », parcourez le rapport vous-même :

1. **Commencez par l'onglet Mobile.** C'est le plus exigeant des deux tests, et une page qui s'en sort bien sur mobile s'en sort bien sur ordinateur.
2. **Regardez d'abord les données de terrain.** Si les Core Web Vitals affichent « Réussi », vos vrais visiteurs vont bien et le score de laboratoire est un outil de diagnostic, pas une urgence.
3. **Repérez l'indicateur en échec.** Un LCP, un INP ou un CLS en rouge indique le type de problème : contenu principal lent, réactions lentes ou page qui saute.
4. **Vérifiez quel élément le LCP mesure.** Le rapport le nomme. S'il s'agit d'une pop-up, d'un bandeau de cookies ou d'une diapositive masquée, la solution est dans le design, pas dans le serveur.
5. **Lisez les trois premiers diagnostics.** Ils citent généralement des scripts, des images ou des polices précis. Les scripts tiers que vous avez ajoutés vous-même figurent souvent en tête.
6. **Demandez ce qu'une correction changera aux données de terrain.** Un bon développeur parle du LCP, de l'INP et du CLS des vrais visiteurs. Celui qui ne promet qu'un chiffre vend le chiffre.

Un score de 100 vaut rarement la peine d'être poursuivi. Une page de boutique
avec un bouton de paiement et un widget WhatsApp ne l'atteindra peut-être
jamais, et n'en a pas besoin. L'essentiel est que la page s'affiche vite,
réagisse aux touchers et ne saute pas pendant la lecture. Pour les pages liées à
des publicités, cela touche directement les ventes ; voir
[ce qu'une page d'atterrissage corrige quand les annonces attirent des clics mais pas de ventes](/blog/landing-page-for-ads-egypt).

## Ce que fait KF Tech Solutions

Nous construisons des sites qui intègrent ces bases dès le départ : espace
réservé aux images, images optimisées, polices chargées avec soin pour l'arabe
et l'anglais, et scripts tiers tenus à l'écart du chargement. Notre
[service de développement web](/services/web-development) couvre les nouveaux
sites, et nous examinons aussi les sites existants pour vous dire quelles
corrections valent la peine avant tout travail. Les sites bilingues ont leurs
propres pièges, que nous traitons dans
[Créer un site en arabe et en anglais](/blog/arabic-english-website-rtl).

## Questions fréquentes

### Un score PageSpeed faible nuit-il à mon classement Google ?

Google renvoie aux Core Web Vitals mesurés auprès de vrais visiteurs, pas au
score de laboratoire. Un score de laboratoire faible avec des données de terrain
réussies n'est pas un problème de classement. La pertinence et un contenu utile
restent prioritaires.

### Pourquoi mon score mobile est-il bien plus bas que sur ordinateur ?

Le test mobile émule un smartphone de milieu de gamme sur un réseau mobile
lent, tandis que le test ordinateur utilise une connexion filaire rapide. La
même page dispose simplement de moins de puissance et de bande passante sur
mobile.

### Le rapport n'affiche aucune donnée de terrain. Que faire ?

Votre page et votre site n'ont pas encore assez de visites Chrome pour le
rapport. Servez-vous des résultats de laboratoire pour trouver les problèmes, et
consultez le rapport Core Web Vitals de Google Search Console à mesure que le
trafic augmente.

### Un nouvel hébergement va-t-il corriger mon score ?

Seulement si le serveur est la partie lente, ce que le rapport montre par une
première réponse du serveur lente. Le plus souvent, le coût se trouve dans les
scripts, les images et les polices de la page, et un hébergeur plus rapide n'y
change rien.

### À quelle fréquence vérifier ?

Après chaque changement important du site, comme un nouveau widget, une balise
de suivi ou un thème. La vitesse baisse souvent quand un nouvel outil est
ajouté. Notre article sur les
[plans de maintenance logicielle](/blog/software-maintenance-plan) explique
comment garder cela sous contrôle dans la durée.

Si vous souhaitez un deuxième avis sur un rapport avant de payer une correction,
[réservez un appel gratuit](/book) ou [envoyez-nous le lien de la page](/contact),
et nous vous dirons ce qui vaut la peine d'être fait.

## Sources

- [About PageSpeed Insights (Google for Developers)](https://developers.google.com/speed/docs/insights/v5/about)
- [Web Vitals (web.dev)](https://web.dev/articles/vitals)
- [Lighthouse performance scoring (Chrome for Developers)](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)
- [Understanding Core Web Vitals and Google search results (Google Search Central)](https://developers.google.com/search/docs/appearance/core-web-vitals)
