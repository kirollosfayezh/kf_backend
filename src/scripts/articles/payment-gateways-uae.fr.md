---
title: Passerelles de paiement aux Émirats : comment bien choisir
summary: Ce qui distingue les passerelles de paiement aux Émirats : frais, moyens de paiement, versements, règles sur les données, Aani et Jaywan, et quoi demander.
tags: passerelle de paiement, paiement en ligne, checkout, e-commerce, Émirats arabes unis
alt: Une main en manche sombre approche un smartphone d’un terminal de paiement sans contact
caption: Demandez à une passerelle émirienne quelles cartes et quels portefeuilles elle accepte, quand elle règle et où elle stocke les données.
stats: 50 000 AED|plafond d'un paiement instantané Aani; 750 000|commerçants utilisent déjà Aani, selon The National; 5 %|TVA ajoutée aux frais publiés des passerelles
---

La bonne passerelle de paiement aux Émirats arabes unis est celle qui accepte les moyens de paiement que vos clients utilisent réellement, vous verse l'argent selon un calendrier compatible avec votre trésorerie et offre à vos développeurs des webhooks et des remboursements propres. Le taux affiché compte moins que ne le pensent la plupart des dirigeants : les vraies différences se trouvent dans les frais mensuels, les surcoûts sur les cartes étrangères, les délais de versement et la charge de travail manuelle que crée chaque remboursement ou litige. Retenez deux ou trois prestataires agréés, demandez des grilles tarifaires écrites et testez l'environnement de test de chacun avant de signer.

Dernière vérification : 6 novembre 2026

Ce guide est une information générale destinée aux chefs d'entreprise, et non un conseil juridique ou fiscal. Les frais et les conditions changent souvent : faites confirmer par écrit chaque chiffre ci-dessous par le prestataire.

## Ce que fait réellement une passerelle de paiement

Une passerelle de paiement se place entre votre page de paiement et les réseaux de cartes. Le client saisit ses données de carte, ou paie avec Apple Pay, sur une page contrôlée par la passerelle. La passerelle demande l'autorisation, indique à votre système si le paiement a réussi, puis vous verse plus tard l'argent sur votre compte bancaire, déduction faite de ses frais.

Trois fonctions sont souvent regroupées, et il est utile de savoir laquelle vous achetez :

- **La passerelle** transmet la demande de paiement et renvoie le résultat à votre site, à votre application ou à votre caisse.
- **L'acquéreur** est la banque ou le prestataire agréé qui porte la relation commerçant et vous verse les fonds.
- **Le prestataire de services de paiement** est la société avec laquelle vous signez. Aux Émirats, il assure souvent les trois rôles à la fois, ce qui est plus simple, mais vous devez quand même savoir qui vous verse votre argent et quand.

Certains processeurs internationaux fonctionnent autrement pour certains moyens de paiement locaux. Checkout.com, par exemple, classe KNET et OmanNet en « Gateway only », avec la mention « Direct contract with local provider required ». Si vous vendez aussi au Koweït ou à Oman, cela signifie deux contrats au lieu d'un.

## Comment les clients paient aux Émirats, y compris Aani et Jaywan

Les cartes et les portefeuilles mobiles comme Apple Pay couvrent la plupart des paiements en ligne. Deux systèmes nationaux méritent désormais votre attention, car ils se développent et l'État les accepte déjà.

- **Aani** est la plateforme de paiements instantanés des Émirats, dévoilée en 2023. Un paiement peut atteindre 50 000 AED, et The National fait état d'environ 12,5 millions d'utilisateurs et de 750 000 commerçants.
- **Jaywan** est le réseau de cartes domestique des Émirats. Il fonctionne en point de vente, en ligne, aux distributeurs automatiques et dans les portefeuilles mobiles.

Tous deux sont gérés par Al Etihad Payments, filiale de la Banque centrale des Émirats, et le 3 août 2026 le ministère des Finances les a ajoutés à ses propres canaux de paiement. Pour une entreprise, cela ne signifie pas que vous devez les accepter dès aujourd'hui. Cela signifie en revanche que vous devez demander à chaque passerelle si elle accepte déjà les cartes Jaywan et les paiements Aani, et sinon, à partir de quand.

Le paiement fractionné (« achetez maintenant, payez plus tard ») est l'autre moyen que demandent les clients. Les passerelles le proposent en général via un partenaire : Telr décrit par exemple son offre de paiement fractionné comme « in partnership with Tabby ». Vérifiez quels prestataires de paiement fractionné sont disponibles pour les commerçants des Émirats en particulier, car l'offre varie d'un pays à l'autre.

## Les prestataires que vous rencontrerez

Les mêmes noms reviennent dans presque toutes les discussions. Ce tableau ne reprend que ce que nous avons pu confirmer sur les pages des prestataires eux-mêmes ou dans une source citée ; ce n'est pas un classement.

| Prestataire | Ce que nous avons pu confirmer | Ce qu'il faut leur demander |
|---|---|---|
| Network International | Basé à Dubaï ; racheté par Brookfield en septembre 2024 et fusionné avec Magnati en 2025 | Avec quelle entité vous signez après la fusion, et les délais de versement |
| Telr | Adresse à Dubaï ; se dit « licensed and regulated by the Central Bank of the UAE » ; publie des formules pour les Émirats selon le volume mensuel | La formule adaptée à votre volume, et le surcoût sur les cartes étrangères |
| PayTabs | Cite les Émirats parmi ses marchés ; « Products and features may vary by country » ; nous n'avons pas trouvé de tarifs publics de passerelle pour les Émirats sur sa page de tarifs principale | Un devis écrit pour les Émirats et les moyens de paiement actifs sur place |
| Checkout.com | Processeur international ; certains moyens de paiement régionaux sont « Gateway only » et exigent un contrat direct avec le prestataire local | Quels moyens de paiement émiriens il traite lui-même et lesquels exigent un second contrat |

Votre propre banque peut aussi proposer une passerelle. Une offre bancaire peut être pratique pour les versements, mais comparez sa documentation technique et ses outils de remboursement avec ceux des spécialistes avant de décider.

## Comment fonctionnent les frais d'une passerelle

La tarification d'une passerelle comporte plus d'éléments que le pourcentage affiché. Les formules publiées par Telr pour les Émirats montrent la structure habituelle : des paliers selon le volume mensuel, un abonnement mensuel qui baisse quand le volume augmente, un pourcentage plus un montant fixe en AED par transaction, un pourcentage supplémentaire pour les cartes internationales et la mention que tous les frais sont soumis à la TVA de 5 %. Au-delà de 500 000 AED par mois, Telr invite les commerçants à le contacter pour une formule sur mesure.

Pour comparer les offres, reportez chaque ligne dans un seul tableau :

| Frais | Ce qu'il faut vérifier |
|---|---|
| Frais d'ouverture | S'il y en a, et s'ils sont remboursés en cas d'échec de l'activation |
| Abonnement mensuel | S'il s'applique aussi les mois sans vente |
| Frais par transaction | Le pourcentage et le montant fixe, pour les cartes locales et étrangères |
| Portefeuilles et paiement fractionné | Si Apple Pay ou le paiement fractionné ont un tarif différent |
| Remboursements | Si les frais initiaux sont restitués, et si les remboursements coûtent en plus |
| Litiges (chargebacks) | Les frais par litige, et qui rassemble les justificatifs |
| Versement | Le nombre de jours avant que l'argent arrive sur votre compte, et une éventuelle réserve retenue |
| Devise | Si vous êtes payé en AED, et la marge de change sur les autres devises |

Une petite boutique qui reçoit quelques centaines de commandes par mois peut payer davantage en frais mensuels fixes qu'en pourcentages : calculez donc le coût sur votre volume réel, pas sur l'exemple du prestataire, et prévoyez dans votre budget les 5 % de TVA sur les frais.

## Les règles de licence, de données et de facturation qui comptent

Choisissez un prestataire agréé pour exercer aux Émirats et vérifiez-le sur son propre site. Les règles ci-dessous déterminent les questions à poser, même si l'essentiel des obligations pèse sur le prestataire.

- **Les données de paiement restent aux Émirats.** Selon les règles sectorielles émiriennes, telles que les résume DLA Piper, les prestataires de services de paiement doivent stocker les données personnelles et les données de paiement aux Émirats. Demandez où vos données de transaction sont stockées et traitées.
- **Données personnelles.** La loi émirienne sur la protection des données (Federal Decree-Law 45/2021) couvre le territoire continental, mais pas le DIFC ni l'ADGM, qui ont leurs propres lois. Ses règlements d'application n'ont pas encore été publiés : demandez à votre avocat ce qui s'applique à vous plutôt que de vous fier au résumé d'un prestataire.
- **Votre licence e-commerce.** Vendre en ligne aux Émirats exige une licence qui inclut l'activité de commerce électronique et une approbation de la TDRA, et chaque transaction doit donner lieu à une facture numérique claire. Attendez-vous à ce que la passerelle demande cette licence lors de l'activation. Nous détaillons ce point dans [notre guide de la licence e-commerce aux Émirats](/blog/uae-ecommerce-licence-online-store).
- **Facturation électronique.** Le système de facturation électronique du ministère des Finances couvre les ventes B2B et B2G et démarre le 1er janvier 2027 pour les entreprises dont le chiffre d'affaires atteint 50 millions d'AED ou plus, et le 1er juillet 2027 pour les autres. Le B2C est exclu pour l'instant. Un reçu de passerelle ou un PDF n'est pas une facture électronique : si vous vendez à d'autres entreprises, votre système de facturation a besoin de sa propre connexion à un prestataire de services accrédité.

Une règle pratique vous protège quoi que dise la loi : ne laissez jamais les numéros de carte passer par vos propres serveurs. Utilisez la page de paiement hébergée de la passerelle ou sa tokenisation, afin que votre système ne stocke qu'une référence.

## Ce qu'implique réellement l'intégration

L'essentiel de l'effort ne porte pas sur le bouton de paiement, mais sur tout ce qui l'entoure.

1. **Choisir le type de page de paiement.** Une page hébergée (le client est redirigé vers la passerelle) est la plus rapide et la plus sûre. Un formulaire intégré paraît plus fluide mais demande plus de soin. Les paiements dans une application native nécessitent en général le SDK mobile de la passerelle.
2. **Traiter les webhooks.** La passerelle informe votre serveur, en arrière-plan, de chaque paiement, remboursement et litige. Votre système doit accepter ces messages, les vérifier et mettre à jour la commande même si le client a fermé son navigateur.
3. **Rembourser depuis votre propre interface d'administration.** Votre équipe doit rembourser depuis votre système, qui appelle la passerelle, et non en se connectant à un portail séparé.
4. **Rapprochement.** Chaque versement doit correspondre à une liste de commandes moins les frais, pour que votre comptable clôture le mois sans deviner.
5. **Arabe et anglais.** La page de paiement, les messages d'erreur et les reçus doivent fonctionner dans les deux langues, y compris la mise en page de droite à gauche.
6. **Tests.** Utilisez l'environnement de test pour vérifier les refus, les délais dépassés, les webhooks en double, les remboursements partiels et le 3-D Secure avant la mise en production.

Si la passerelle doit aussi alimenter une caisse, un logiciel comptable ou un ERP, prévoyez ces liaisons ensemble ; nous expliquons la démarche dans [Relier les systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems). Beaucoup des mêmes leçons figurent dans notre guide sur la [création d'une boutique en ligne en Égypte](/blog/online-store-egypt-payments-and-delivery), où les paiements et les remboursements sont en général les premiers à poser problème. Si vous en êtes encore au budget du site lui-même, consultez [le coût d'un site web aux Émirats](/blog/website-design-cost-uae).

Chez KF Tech Solutions, nous développons le [back-end et les intégrations](/services/api-and-backend) qui font tourner sites web, applications et systèmes de gestion, notamment l'intégration de passerelles de paiement avec webhooks, remboursements et rapprochement, ainsi que les liaisons avec les logiciels comptables et les plateformes administratives. Nous travaillons avec des entreprises en Égypte et dans le Golfe ; découvrez comment [travailler avec nous depuis les Émirats](/uae).

## Les questions à poser à une passerelle avant de signer

Envoyez la même liste à chaque prestataire et comparez les réponses écrites :

1. Avec quelle entité signons-nous, et quelle licence émirienne détient-elle ?
2. Quels moyens de paiement sont actifs aujourd'hui pour les commerçants des Émirats : cartes, Apple Pay, Jaywan, Aani, paiement fractionné ?
3. Quelle est la grille complète des frais, y compris abonnement, cartes étrangères, remboursements et litiges, hors TVA ?
4. Combien de jours avant le versement, dans quelle devise, et une réserve est-elle retenue ?
5. Où nos données de transaction sont-elles stockées et traitées ?
6. Proposez-vous un environnement de test, des webhooks signés, des remboursements par API et un relevé de versements téléchargeable ?
7. Quels documents faut-il pour l'activation, et combien de temps prend généralement l'approbation ?
8. Quel préavis s'applique si nous partons, et pouvons-nous exporter l'historique de nos transactions ?

## Questions fréquentes

### Quelle est la meilleure passerelle de paiement aux Émirats ?

Il n'y en a pas une seule. Le bon choix dépend de votre volume, des moyens de paiement de vos clients, de la rapidité de versement dont vous avez besoin et de la qualité des outils pour développeurs. Comparez deux ou trois prestataires agréés à partir de la même liste écrite de questions.

### Dois-je accepter Aani ou Jaywan ?

Rien dans les sources que nous avons consultées n'indique qu'une entreprise privée soit tenue de les accepter. Ils sont gérés par une filiale de la Banque centrale et le ministère des Finances accepte déjà les deux : demandez donc à chaque passerelle si elle les prend en charge, et à partir de quand.

### Une société de zone franche peut-elle utiliser une passerelle émirienne ?

Posez la question directement à la passerelle ; attendez-vous à ce qu'elle demande votre licence commerciale lors de l'activation. Si vous vendez à des clients du territoire continental, vérifiez que votre licence et votre structure le permettent, car une société de zone franche a besoin pour cela d'un distributeur agréé, d'une succursale ou d'une société sur le continent.

### Combien de temps prend l'intégration ?

Une page de paiement hébergée sur une boutique simple se branche rapidement une fois le compte commerçant approuvé. Les webhooks, les remboursements, le rapprochement et les liaisons avec la caisse ou la comptabilité prennent plus de temps, et l'approbation par la passerelle elle-même peut être longue : lancez l'activation tôt.

### Un reçu de passerelle suffit-il comme facture ?

Selon les règles émiriennes du commerce électronique, chaque transaction en ligne doit donner lieu à une facture numérique claire, et un reçu de passerelle n'est pas conçu pour cela. Pour les ventes B2B à partir de 2027, les factures devront passer par le système de facturation électronique, ce qu'un reçu de passerelle ou un PDF ne permet pas.

Vous choisissez une passerelle et souhaitez la connecter à votre boutique, à votre application ou à votre système de gestion ? [Contactez-nous](/contact) ou [réservez un appel gratuit](/book) et dites-nous ce que vous vendez et comment vos clients paient.

## Sources

- [The National : les Émirats élargissent les canaux de paiement fédéraux avec Aani et Jaywan](https://thenationalnews.com/business/banking/2026/08/03/uae-expands-federal-payment-channels-with-aani-and-jaywan)
- [Network International (Wikipédia)](https://en.wikipedia.org/wiki/Network_International)
- [Telr : tarifs pour les Émirats](https://telr.com/pricing)
- [Telr Émirats](https://telr.com/)
- [PayTabs](https://www.paytabs.com/en/) et [tarifs PayTabs](https://paytabs.com/en/pricing)
- [Checkout.com : KNET](https://www.checkout.com/payment-methods/knet)
- [DLA Piper : la protection des données aux Émirats](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
- [Legal 500 : gouvernance des données et de l'IA aux Émirats](https://www.legal500.com/intelligence/united-arab-emirates/strategy/the-uae-artificial-intelligence-and-data-authority-what-it-means-for-ai-data-and-digital-governance)
- [Portail du gouvernement des Émirats : commerce électronique](https://u.ae/en/information-and-services/business/Managing-and-growing-your-business/ecommerce)
- [Portail du gouvernement des Émirats : exercer en zone franche](https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-)
- [Ministère des Finances des Émirats : facturation électronique](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
