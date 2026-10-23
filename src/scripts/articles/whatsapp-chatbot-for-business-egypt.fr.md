---
title: Chatbot WhatsApp pour votre entreprise en Égypte : bien démarrer
summary: Ce qu'un bot WhatsApp sait gérer ou non, l'API officielle face aux outils qui font bannir les numéros, quoi automatiser en premier, IA ou règles, et comment commencer petit.
---

Pour beaucoup d'entreprises en Égypte, WhatsApp est le véritable accueil. Les
clients demandent les prix à minuit, envoient « c'est disponible ? » toute la
journée, et veulent savoir où en est leur commande. Chaque réponse tardive, c'est un
client qui risque d'acheter ailleurs.

Un chatbot WhatsApp peut absorber une bonne partie de cette charge. Mal configuré,
il peut aussi agacer les gens ou faire bannir votre numéro.

## Ce qu'un bot WhatsApp sait faire ou non

Un bot est efficace sur les questions qui ont une réponse claire et qui reviennent
sans cesse.

**Il peut généralement gérer :**

- Les horaires d'ouverture, l'adresse, les zones et frais de livraison
- Les prix et la disponibilité, s'ils proviennent d'une liste ou d'un système qu'il
  peut lire
- Le statut des commandes, s'il est connecté à l'endroit où les commandes sont
  enregistrées
- Les réservations et rendez-vous, avec confirmation et rappels
- La collecte d'informations avant qu'une personne prenne le relais

**Il ne faut pas lui confier :**

- Les réclamations et les clients mécontents, qui veulent une personne, pas un menu
- La négociation, les demandes particulières et tout ce qui demande du discernement
- Les conseils médicaux, juridiques ou financiers
- Tout ce pour quoi une mauvaise réponse coûte de l'argent bien réel

Le but n'est pas de se passer de vos équipes. C'est de leur éviter de taper les cinq
mêmes réponses toute la journée.

## L'API officielle ou un outil non officiel

**L'application WhatsApp Business** est gratuite, avec messages d'accueil et
d'absence, réponses rapides et catalogue. Pour un petit commerce, cela peut suffire
pour démarrer.

**La WhatsApp Business Platform (l'API)** est la voie officielle de Meta pour
l'automatisation. Vous y accédez directement via Meta ou par l'intermédiaire d'un
fournisseur agréé. Elle exige un compte d'entreprise vérifié dans Meta Business
Manager et un numéro de téléphone enregistré à cet effet. Les messages que vous
envoyez en premier, en dehors de la fenêtre de service client, doivent utiliser des
modèles approuvés par Meta.

**Les outils non officiels** automatisent un compte WhatsApp ordinaire, généralement
en pilotant WhatsApp Web. Ils sont bon marché, et ils enfreignent les conditions
d'utilisation de WhatsApp. WhatsApp peut restreindre ou bannir les numéros dont il
détecte l'automatisation. Si c'est le numéro affiché sur votre enseigne et dans
chaque publicité, le perdre est un problème sérieux.

> Si votre entreprise repose sur un seul numéro WhatsApp, ne branchez pas ce numéro
> sur un outil qui enfreint les règles.

Les conditions de Meta restreignent aussi l'usage de la plateforme pour des
assistants d'IA généralistes. Un bot qui répond aux questions sur votre propre
entreprise, vos produits et vos commandes correspond précisément à l'usage prévu de
la plateforme.

## Ce qu'il faut automatiser en premier

Parcourez une semaine de conversations et comptez les questions auxquelles votre
équipe répond le plus. La liste ressemble généralement à ceci :

1. **Questions fréquentes** : horaires, adresse, livraison, moyens de paiement,
   politique de retour.
2. **Prix et catalogue** : la liste des produits, avec des photos et des prix
   toujours à jour.
3. **Statut des commandes** : le client envoie un numéro de commande et reçoit le
   statut. Cela nécessite une connexion à votre système de commandes, traitée dans
   [connecter vos systèmes de gestion par API](/blog/api-integration-connecting-business-systems).
4. **Réservation** : créneaux disponibles, confirmation et rappel la veille.
5. **Passage de relais à une personne** : une option claire « parler à quelqu'un »
   dans chaque menu, et la conversation transmise à votre équipe avec ce que le
   client a déjà dit.

Ce dernier point n'est pas optionnel. Un bot sans issue fait perdre des clients qui
étaient prêts à acheter.

## À base de règles ou IA

**Un bot à base de règles** fonctionne avec des boutons et des menus : « Tapez 1
pour les prix ». Il est prévisible, moins cher à développer et à faire tourner, mais
il gère mal les questions rédigées librement, et les gens écrivent souvent.

**Un bot IA** comprend le texte libre en arabe égyptien, en anglais ou dans un
mélange des deux, et répond à partir de vos propres informations : listes de prix,
politiques, fiches produits. Il paraît naturel, mais il peut donner avec aplomb une
mauvaise réponse s'il n'est pas limité à vos données et testé. Il a aussi un coût
par conversation.

Les bonnes configurations combinent souvent les deux : des menus pour les tâches
courantes, l'IA pour les questions ouvertes, et des règles strictes pour les prix,
les remboursements ou les engagements. L'approche décrite dans
[intégrer l'IA dans votre entreprise](/blog/a-practical-guide-to-adding-ai-to-your-business)
s'applique ici aussi : testez sur de vraies conversations avant de lui confier vos
clients.

## Ce qui détermine le coût

Nous ne donnerons pas de chiffre unique sans connaître la configuration. Voici ce
qui le fait varier :

- **Les frais de la plateforme officielle** : Meta facture certains types de
  messages, principalement les modèles que l'entreprise envoie en premier, à des
  tarifs qui varient selon les pays. Les réponses dans la fenêtre de service client
  sont en général gratuites. Les tarifs changent : vérifiez les prix en vigueur chez
  Meta.
- **Le fournisseur**, si vous passez par l'un d'eux : souvent un abonnement mensuel,
  parfois avec une marge par message.
- **Règles ou IA** : l'IA ajoute un coût d'utilisation et du temps de test.
- **Les intégrations** : connexion à votre système de commandes, à votre agenda de
  réservations, à votre CRM ou à votre gestion de stock. Chacune représente un vrai
  travail.
- **La boîte de réception d'équipe** : plusieurs agents ont besoin d'une boîte
  partagée avec l'historique, pas d'un téléphone qui passe de main en main.

## Comment commencer petit

1. **Rassemblez les vraies questions** de quelques semaines de conversations et
   classez-les.
2. **N'automatisez que les trois à cinq premières**, avec des réponses claires
   validées en interne.
3. **Prévoyez le passage de relais** vers une personne dès le premier jour.
4. **Faites-le tourner aux côtés de votre équipe** et lisez les conversations où il
   a échoué.
5. **Ajoutez une fonctionnalité à la fois**, comme le statut des commandes, une fois
   que la première partie fonctionne.

Si vous voulez un bot WhatsApp sur la plateforme officielle, connecté à vos systèmes
et qui passe correctement le relais à votre équipe, KF Tech Solutions développe des
[solutions d'IA](/services/ai-solutions) et des solutions
d'[automatisation des processus](/services/automation) pour les entreprises en
Égypte. Vous pouvez
[nous dire ce que vos clients demandent le plus](/contact).

## Questions fréquentes

### Puis-je garder mon numéro WhatsApp actuel ?

En général, oui, mais faire passer un numéro sur la plateforme officielle peut
changer la façon dont vous l'utilisez dans l'application normale. Vérifiez d'abord
auprès de votre fournisseur, et envisagez de tester sur un second numéro.

### Les clients sauront-ils qu'ils parlent à un bot ?

Ils devraient. Dites-le dès le premier message et proposez une personne à tout
moment. Les gens acceptent bien plus volontiers un bot honnête qu'un bot qui se fait
passer pour un humain.

### Le bot peut-il envoyer des offres à tous mes clients ?

Uniquement aux clients qui ont accepté de recevoir vos messages, et uniquement avec
des modèles approuvés sur la plateforme officielle. Les envois de masse à des
personnes qui n'ont pas donné leur accord sont signalés, et les signalements
dégradent la note de qualité de votre numéro.

### Combien de temps faut-il pour le mettre en place ?

Un simple bot de FAQ sur la plateforme officielle peut fonctionner en quelques
semaines, dont une bonne partie consacrée à la vérification de l'entreprise et à la
validation des réponses. Connecter des systèmes de commandes ou de réservation prend
plus de temps.
