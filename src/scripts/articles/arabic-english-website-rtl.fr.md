---
title: Sites arabe-anglais : les détails RTL qui posent problème
summary: URL séparées, mise en page inversée, polices arabes, chiffres, champs de téléphone et vrais textes arabes : ce qui fait réussir un site bilingue.
tags: site bilingue, site en arabe, RTL, hreflang, Égypte, pays du Golfe
alt: Panneau routier bilingue arabe et anglais vers Al Raffa et Al Satwa dans une rue de Dubaï
caption: Deux écritures, deux sens de lecture, un seul panneau : un site bilingue doit soigner les mêmes détails.
stats: 1|URL par version linguistique d'une page; 3|façons de déclarer hreflang : HTML, en-tête HTTP, sitemap; 0|redirection automatique fondée sur une langue devinée
---

Un site bilingue arabe-anglais fonctionne lorsque chaque langue a sa propre URL, que les pages arabes sont orientées de droite à gauche dans le balisage plutôt que retournées avec quelques règles CSS, et que les textes arabes sont rédigés en arabe au lieu d'être traduits ligne par ligne. La plupart des sites bilingues défaillants font traduire le contenu et négligent tout le reste : flèches dans le mauvais sens, numéros de téléphone mélangés, police absente et interlignes trop serrés.

Certaines de ces leçons viennent de notre propre site, disponible en quatre langues.

## Donnez à chaque langue sa propre URL

Google recommande une URL différente pour chaque version linguistique d'une page, plutôt que des cookies ou des paramètres du navigateur qui changent la langue à la même adresse.

Un schéma simple consiste à ajouter un préfixe, par exemple /ar/services pour l'arabe et /services pour l'anglais. Ensuite :

- Reliez chaque version linguistique à toutes les autres avec hreflang, et faites aussi figurer chaque page dans sa propre liste. Si la page A renvoie vers la page B sans que B renvoie vers A, Google peut ignorer les balises.
- Les codes de langue seuls, comme « ar » et « en », sont valides ; un code de pays seul ne l'est pas.
- Ajoutez x-default pour les visiteurs dont la langue ne correspond à aucune de vos versions.
- Ne redirigez pas automatiquement les visiteurs vers une autre langue. Google le déconseille ; proposez plutôt un sélecteur de langue bien visible.

Une idée reçue fréquente : Google n'utilise ni hreflang ni l'attribut lang pour détecter la langue d'une page. Il lit le contenu. Hreflang indique seulement quelles pages sont des versions les unes des autres ; la page arabe doit donc être entièrement en arabe, et Google prévient que traduire seulement le menu et le pied de page nuit à l'expérience. Pour une vue d'ensemble, lisez [comment être trouvé sur Google, ChatGPT, Gemini et Claude](/blog/get-found-on-google-chatgpt-gemini).

## Fixez le sens dans le balisage, pas seulement en CSS

Chaque page arabe doit déclarer lang="ar" et dir="rtl" sur son élément html. Le W3C conseille de définir le sens de base dans le balisage plutôt qu'en CSS, pour qu'il reste correct même si la feuille de style ne se charge pas.

Construisez ensuite la mise en page avec des propriétés logiques, comme margin-inline-start et text-align: start, plutôt qu'avec gauche et droite. Une seule feuille de style sert alors les deux sens, et la mise en page s'inverse d'elle-même. Les valeurs gauche et droite exigent une surcharge RTL pour chaque règle, et ces surcharges finissent par se désynchroniser.

## Inversez la mise en page, mais pas tout

L'inversion change le sens de lecture, mais tous les éléments ne doivent pas être retournés.

| Élément | Sur la page arabe |
|---|---|
| Navigation, colonnes, ordre des cartes | Inverser |
| Flèches « suivant » et « précédent » | Inverser |
| Curseurs, carrousels, indicateurs d'étapes | Inverser |
| Logos, photos, images de produits | Laisser tels quels |
| Numéros de téléphone, adresses e-mail, code | Garder de gauche à droite |

Les flèches sont l'oubli le plus fréquent. Une flèche saisie comme caractère ou enregistrée comme image pointe dans le mauvais sens en arabe, sauf si quelqu'un la corrige sur chaque page. Sur notre propre site, la flèche est un seul élément stylé que la feuille de style inverse en RTL : aucune page n'a besoin d'y penser. Dans le sélecteur de langue, écrivez le nom de chaque langue dans cette langue, comme « العربية » et « English ».

## Chargez correctement la police arabe

Beaucoup de polices web ne contiennent aucune lettre arabe. Le navigateur se rabat alors sur une police système, différente sous Windows, Mac, Android et iPhone.

- Choisissez une famille de polices conçue avec l'arabe, ou associez votre police latine à une police arabe de graisse et de style proches.
- Chargez la police arabe uniquement sur les pages arabes, pour que les visiteurs anglophones ne la téléchargent pas.
- Si vous la préchargez, l'URL du préchargement doit correspondre exactement à celle de la règle font-face, sinon le navigateur télécharge le fichier deux fois.
- Donnez à l'arabe un interligne plus grand qu'à l'anglais. L'écriture arabe porte des points et des signes au-dessus et au-dessous des lettres, et un interligne prévu pour l'anglais rend les paragraphes arabes serrés.
- Sur les pages arabes, remplacez les styles décoratifs ou à chasse fixe limités à l'alphabet latin par la police de texte arabe.

Sur notre propre site, cela a signifié une police arabe chargée uniquement sur les pages arabes, un interligne plus généreux pour l'arabe et la police de texte à la place des styles à chasse fixe. Les polices influencent aussi les scores de vitesse, car un changement de police tardif déplace le texte à l'écran ; lisez [ce que signifie vraiment votre score PageSpeed Insights](/blog/pagespeed-insights-score-explained).

## Chiffres, dates et champs de téléphone

- **Chiffres.** Un texte arabe peut utiliser les chiffres occidentaux (1, 2, 3) ou les chiffres arabes orientaux (١، ٢، ٣). Choisissez-en un et utilisez-le partout, des pages aux factures et aux e-mails.
- **Dates.** Écrivez le mois en toutes lettres plutôt qu'un 05/06 ambigu, et formatez les dates avec les outils intégrés du navigateur (Intl.DateTimeFormat) pour la bonne langue et la bonne région.
- **Texte mixte.** Un nom de produit anglais dans une phrase arabe peut déplacer la ponctuation au mauvais endroit. Placez les noms et les textes saisis par les utilisateurs dans un élément bdi ou donnez-leur dir="auto", comme le suggère le W3C.
- **Champs de téléphone et d'e-mail.** Appliquez-leur dir="ltr", pour que le signe plus de +20 100 000 0000 n'apparaisse pas du mauvais côté.
- **Champs de texte libre.** Utilisez dir="auto" pour que chaque saisie s'aligne selon sa première lettre ; le W3C précise que c'est utile mais pas infaillible.
- **Claviers arabes.** Acceptez les chiffres arabes orientaux et convertissez-les avant la validation, sinon un numéro de téléphone correct est refusé.
- **Messages.** Traduisez les libellés, les textes indicatifs, les messages d'erreur et les e-mails de confirmation. Un message d'erreur en anglais sous un formulaire arabe est un défaut courant.

## Écrivez en arabe, ne traduisez pas l'anglais

Un texte traduit de l'anglais se lit comme une traduction. Pour un site d'entreprise, l'arabe standard moderne formel est le choix sûr, rédigé ou au moins relu par une personne qui connaît le marché.

- Rédigez d'abord en arabe les titres principaux et les appels à l'action, puis vérifiez que les deux versions disent la même chose.
- Ne commencez pas un titre arabe ou un titre de page par un mot latin : cela modifie l'affichage de la ligne et peut paraître désordonné dans les résultats de recherche.
- Décidez une fois pour toutes si chaque nom de marque s'écrit en lettres latines ou arabes, et tenez-vous-y.
- Laissez les boutons et les menus s'agrandir, car le texte arabe n'a pas la même longueur que l'anglais.
- Traduisez les titres de page, les méta-descriptions et les textes alternatifs des images : c'est ce que les internautes voient dans les résultats de recherche.

Avant la mise en ligne, testez chaque page arabe sur un vrai téléphone, pas seulement dans un navigateur d'ordinateur.

## Ce que fait KF Tech Solutions

Nous concevons et développons des sites en arabe et en anglais, avec une mise en page de droite à gauche prévue dès la première maquette, des pages distinctes par langue pour que les deux versions apparaissent dans la recherche, et un tableau de bord où vous modifiez vous-même le contenu. Notre propre site fonctionne en anglais, en arabe, en allemand et en français. Découvrez notre [service de développement web](/services/web-development) et, pour votre budget, lisez [ce que coûte réellement un site d'entreprise en Égypte](/blog/company-website-cost-egypt).

## Questions fréquentes

### L'arabe et l'anglais doivent-ils avoir des URL séparées ?

Oui. Google recommande une URL différente pour chaque version linguistique, reliée par hreflang, plutôt qu'un changement de langue par cookies ou par paramètres du navigateur.

### Hreflang indique-t-il à Google que ma page est en arabe ?

Non. Google détecte la langue à partir du contenu. Hreflang lui indique quelles pages sont des versions les unes des autres, afin de montrer à chaque internaute la bonne.

### Le site doit-il passer automatiquement en arabe pour les visiteurs des pays arabophones ?

Non. Google déconseille les redirections automatiques entre versions linguistiques. Proposez un sélecteur de langue clair et laissez chaque visiteur sur la version qu'il choisit.

### Suffit-il d'inverser le design anglais en CSS ?

L'inversion n'est qu'un début. Il vous faut aussi le sens dans le balisage, des flèches inversées, des images non inversées, une police arabe, un interligne adapté et des formulaires qui gèrent correctement les numéros de téléphone.

### Chiffres occidentaux ou arabes orientaux ?

Les deux conviennent. L'essentiel est d'en utiliser un de façon cohérente sur le site, dans les prix, les factures et les messages.

Vous préparez un site bilingue ? [Réservez un appel gratuit](/book) ou [contactez-nous](/contact), et nous vous dirons ce dont la version arabe a besoin.

## Sources

- [Google Search Central : Indiquer à Google les versions localisées de votre page](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google Search Central : Gérer les sites multilingues et multirégionaux](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- [W3C : Structural markup and right-to-left text in HTML](https://www.w3.org/International/questions/qa-html-dir)
- [MDN : Intl.DateTimeFormat](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
