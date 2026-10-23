---
title: Relier votre caisse à la facturation électronique ETA en Égypte
summary: Ce qu'implique réellement l'intégration, là où elle casse le plus souvent, et comment savoir si votre système actuel peut être mis en conformité ou doit être remplacé.
---

La plupart des dirigeants découvrent les règles égyptiennes de facturation
électronique de la même façon : le comptable transmet une circulaire, l'éditeur du
logiciel de caisse affirme « nous le gérons », et six semaines plus tard personne
ne sait expliquer pourquoi la moitié des reçus sont rejetés.

Les règles elles-mêmes ne sont pas la partie difficile. La difficulté, c'est que la
conformité est une intégration logicielle, et qu'elle met au jour chaque raccourci
pris par votre système actuel.

## Ce qu'est réellement le système de l'ETA

L'administration fiscale égyptienne (ETA) gère deux systèmes liés, que les
entreprises confondent régulièrement :

- **La facture électronique** (الفاتورة الإلكترونية) couvre les ventes entre
  entreprises et aux administrations. Chaque facture est transmise sous forme de
  document structuré, signée, puis renvoyée avec un identifiant unique.
- **Le reçu électronique** (الإيصال الإلكتروني) couvre les ventes aux particuliers —
  les reçus qu'une boutique, un café ou une pharmacie remet à un client de passage.
  Ils sont émis par des terminaux de caisse (POS) enregistrés et transmis en quasi
  temps réel.

Si vous vendez à des particuliers au comptoir, c'est le reçu électronique qui
concerne votre caisse. Si vous facturez aussi des entreprises, il vous faut les
deux, et ce n'est pas la même intégration.

> Le déploiement progressif a été décalé plusieurs fois et dépend de la catégorie
> de contribuables. Vérifiez quelle phase et quelle échéance s'appliquent à votre
> numéro d'immatriculation auprès de votre comptable ou directement auprès de
> l'administration — ne vous fiez pas à une date lue sur la page commerciale d'un
> éditeur.

## Les cinq choses qu'une intégration doit faire

Quoi que vous achetiez ou fassiez développer, le travail suit les mêmes cinq
étapes.

1. **S'enregistrer.** L'entreprise est inscrite sur le portail de l'administration
   et reçoit des identifiants. Pour le reçu électronique, chaque terminal de caisse
   est enregistré individuellement.
2. **Obtenir un moyen de signature.** Les documents sont signés
   cryptographiquement. En pratique, cela signifie un cachet électronique — un
   jeton matériel ou un HSM — détenu par l'entreprise.
3. **Faire correspondre votre catalogue aux codes officiels.** Chaque article
   vendu doit avoir un code reconnu, et chaque ligne doit porter le bon type et le
   bon sous-type de taxe. C'est là que se concentre l'essentiel de l'effort.
4. **Construire le document et le signer.** Le document est sérialisé sous une
   forme canonique précise avant la signature. Un seul caractère de travers, et la
   signature est valide mais le document est rejeté.
5. **Transmettre et rapprocher.** L'envoyer, conserver l'identifiant renvoyé, et
   prévoir un traitement pour ceux qui échouent.

L'étape cinq est celle que l'on saute, et c'est celle qui fait mal. Un système qui
transmet sans jamais rapprocher accumule en silence des documents rejetés pendant
des mois.

## Là où les intégrations échouent réellement

| Ce qui casse | Pourquoi | À quoi cela ressemble |
|---|---|---|
| Codification des articles | Le catalogue a été conçu pour la boutique, pas pour une table de codes fiscaux | Des rejets sur une partie des produits, apparemment au hasard |
| Sous-type de taxe | Le bon type de taxe avec le mauvais sous-type | Des catégories entières rejetées alors que tout le reste passe |
| Canonisation | Le document a été modifié après signature, ou sérialisé de façon incohérente | « Signature invalide » sur des documents qui semblent corrects |
| Expiration du jeton | Personne n'est chargé du renouvellement | Tout fonctionne pendant des mois, puis s'arrête un jour précis |
| Horodatage | Heure locale transmise là où le format attend autre chose | Des décalages de plusieurs heures, pires lors des changements d'heure |
| Pas de file de relance | L'intégration supposait que le réseau est toujours disponible | Des trous silencieux dans l'historique, découverts lors d'un contrôle |

Rien de tout cela n'est exotique. Tout est peu coûteux à traiter au moment du
développement, et cher à traiter après un an de données erronées.

## Votre caisse actuelle peut-elle être mise en conformité ?

Trois questions honnêtes :

**Dispose-t-elle d'une API ou d'un export lisible ?** Si la seule façon de sortir
une vente du système est un rapport imprimé, la réponse est non, et aucun
middleware n'y changera rien.

**Enregistre-t-elle les champs que l'administration demande ?** Le numéro
d'immatriculation fiscale de l'acheteur en B2B, les codes articles, la ventilation
des taxes par ligne. Une caisse qui n'enregistre qu'un « total » par vente ne peut
pas produire un document conforme, parce que l'information n'a jamais été saisie.

**Peut-elle être modifiée ?** Bien des entreprises utilisent un système dont
l'éditeur a disparu. Un logiciel qui fonctionne mais que vous ne pouvez pas
modifier est un mur, pas un atout.

Si les trois réponses sont oui, l'intégration est généralement un projet de quatre
à six semaines sur le système existant. Si l'une d'elles est non, vous remplacez la
caisse, et l'échéance de conformité en est la raison plutôt que le projet.

## Développer, acheter ou faire le pont

| Approche | Idéale quand | Contrepartie |
|---|---|---|
| **Module de l'éditeur** — votre fournisseur de caisse livre la conformité | Votre caisse est à jour et l'éditeur est actif | Vous héritez de sa feuille de route et de son calendrier |
| **Passerelle middleware** — un service s'intercale entre la caisse et l'administration | La caisse fonctionne mais ne peut pas être modifiée | Coût récurrent par document ; un système de plus à maintenir |
| **Intégration directe** — développée dans votre propre système | Vous utilisez déjà un logiciel sur mesure, ou vous remplacez la caisse de toute façon | Coût initial plus élevé, pas de frais récurrents par document |

Il n'existe pas de réponse juste dans tous les cas. La seule réponse constamment
mauvaise est d'attendre que l'éditeur annonce quelque chose pendant que l'échéance
approche.

## Par quoi commencer

Pas par une démonstration. Avant de parler à qui que ce soit, exportez trois mois de
ventes et vérifiez que chaque ligne comporte : un code article, une ventilation des
taxes et — pour tout ce qui est vendu à une entreprise — le numéro
d'immatriculation fiscale de l'acheteur.

Si ces trois champs sont présents et exacts, vous avez un projet d'intégration.
Sinon, vous avez d'abord un projet de données, et chaque devis reçu avant d'avoir
réglé cela sera faux.

## Questions fréquentes

### Cela s'applique-t-il à une petite entreprise ?

Les phases sont définies par catégorie de contribuables plutôt que par la seule
taille, et le périmètre s'est élargi avec le temps. Vérifiez votre propre
immatriculation plutôt que de supposer qu'un seuil vous protège.

### Pouvons-nous garder notre imprimante actuelle ?

Généralement oui. Le reçu électronique change ce qui est transmis, pas ce qui est
imprimé, même si le reçu imprimé doit normalement porter l'identifiant renvoyé.

### Que deviennent les ventes réalisées pendant une coupure d'Internet ?

Une intégration conforme les met en file d'attente et les transmet au retour de la
connexion. Si la solution qu'on vous propose n'a pas de réponse à cette question,
elle n'est pas terminée.

### Combien de temps cela prend-il ?

Quatre à six semaines est un délai habituel avec un logiciel de caisse moderne doté
d'une API fonctionnelle. La variable n'est presque jamais le code de transmission —
c'est le temps nécessaire pour codifier correctement le catalogue produits.
