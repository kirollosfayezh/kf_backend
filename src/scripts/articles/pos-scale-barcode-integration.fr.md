---
title: Relier balances et étiquettes code-barres à votre logiciel de caisse
summary: Comment les produits vendus au poids arrivent en caisse : prix dans le code-barres, balance reliée à la caisse ou poids en direct, et les points à vérifier.
tags: logiciel de caisse, balance, étiquettes code-barres, intégration balance, commerce de détail, Égypte
alt: Balance à étiquettes avec clavier, posée parmi les légumes au rayon d’un supermarché
caption: Une balance qui imprime le poids et le prix dans le code-barres permet à la caisse d’encaisser le vrac sans ressaisie.
stats: 13|chiffres dans une étiquette de balance standard au format EAN-13; 20–29|préfixes GS1 réservés aux numéros internes au magasin, comme les produits pesés; 1|code article que la balance et la caisse doivent partager pour chaque produit
---

Il existe trois façons de relier une balance à votre logiciel de caisse. La balance imprime une étiquette code-barres contenant le poids ou le prix, que le caissier scanne. La balance est placée à la caisse et envoie sa mesure directement à l’écran de caisse. Ou la balance transmet le poids en direct à une application ou à un serveur. Le bon choix dépend de l’endroit où l’on pèse et de la personne qui pèse.

Quelle que soit la méthode, la balance et la caisse doivent s’accorder sur un point : le code article. Sinon, les ventes au poids tombent dans « Divers » et vos chiffres de stock perdent leur sens.

## Trois façons de faire arriver les produits pesés en caisse

| Méthode | Où l’on pèse | Idéal pour | Point clé |
| --- | --- | --- | --- |
| Étiquette code-barres avec prix | Au comptoir, avant la caisse | Épiceries fines, boucheries, boulangeries, supermarchés avec rayon traditionnel | Le format d’étiquette lu par la caisse |
| Balance reliée à la caisse | À la caisse même | Fruits et légumes en vrac, petits commerces à une seule caisse | Le câble, le pilote et le protocole |
| Poids transmis en direct | Partout, avec une balance en réseau | Entrepôts, production, suivi à distance | La fiabilité du réseau et le comportement hors connexion |

Beaucoup de commerces combinent deux méthodes : des barquettes étiquetées au comptoir et une balance de caisse pour le vrac.

## Étiquettes code-barres avec prix intégré

Une balance étiqueteuse pèse le produit, calcule le prix à partir du prix au kilo et imprime une étiquette code-barres. Au scan, la caisse lit l’article et le prix ou le poids directement dans le code-barres, sans saisie.

Ces étiquettes sont le plus souvent des codes EAN à 13 chiffres qui commencent par un nombre de 20 à 29. GS1, l’organisation à l’origine des codes-barres du commerce, les appelle **numéros à diffusion restreinte** (Restricted Circulation Numbers) : des numéros destinés à un usage à l’intérieur d’un magasin ou d’un pays, non uniques au niveau mondial et qui ne sont pas des GTIN (le code-barres produit habituel). Chaque organisation GS1 nationale définit la signification de ces préfixes sur son marché.

Une structure courante se présente ainsi :

| Chiffres | Signification |
| --- | --- |
| 2 chiffres | Préfixe indiquant à la caisse « étiquette de balance » |
| 5 chiffres | Votre code article interne (souvent appelé PLU) |
| 5 chiffres | Prix, ou poids en grammes |
| 1 chiffre | Chiffre de contrôle qui détecte les erreurs de lecture |

Ce n’est qu’une structure parmi d’autres. Certaines balances codent le poids au lieu du prix, utilisent un autre préfixe ou ajoutent un chiffre de contrôle du prix. **Configurez donc le même format sur la balance et dans la caisse**, puis testez-le avec une vraie étiquette.

### Prix ou poids dans le code-barres ?

- **Le prix dans le code-barres** est le plus simple en caisse, mais le système doit recalculer le poids pour le stock, ce qui peut créer des écarts d’arrondi.
- **Le poids dans le code-barres** garde un stock exact en kilos, et la caisse applique le prix du jour, même aux étiquettes imprimées le matin.

Pour la gestion des stocks, le poids est généralement le meilleur choix.

### Les nouveaux formats d’étiquettes

Le guide GS1 sur les produits frais décrit le passage de ces numéros internes à un vrai GTIN accompagné de données comme le poids net, le prix et la date limite, portées par un code GS1 DataBar ou un code 2D (GS1 QR Code, GS1 DataMatrix). La date limite permet à la caisse de bloquer la vente d’un produit périmé. Avant d’acheter un nouveau scanner, demandez s’il lit les codes 2D.

## Une balance reliée directement à la caisse

Pour le vrac pesé en caisse, la balance se connecte à l’ordinateur de caisse, le plus souvent par un câble série (RS-232) ou USB, certains modèles par le réseau. Le caissier choisit l’article, le système demande le poids à la balance et la ligne est ajoutée avec le poids comme quantité.

Avant d’acheter, vérifiez :

- **Le protocole utilisé par la balance**, et si votre caisse le prend en charge d’origine ou demande un développement spécifique.
- **Que le système n’accepte qu’une mesure stable**, et non le chiffre affiché pendant que le sac bouge encore.
- **La gestion de la tare**, pour que le contenant ne soit pas facturé comme du produit.

Si vous vendez au poids au public, demandez aussi à votre fournisseur quel étalonnage et quelle vérification la balance exige pour un usage commercial.

## Le poids transmis en direct

Certaines entreprises ont besoin du poids sur un écran éloigné de la caisse : en réserve, sur une ligne de production, au contrôle des livraisons ou sur un téléphone. La balance lit alors son capteur de pesée et envoie chaque mesure par le réseau à un serveur ou à une application. Notre prototype [Smart Balance](/projects/smart-balance) fonctionne ainsi : un Raspberry Pi lit le capteur en Python et transmet le poids en direct à une application mobile, si bien que la mesure est disponible dès qu’elle change.

Une balance en réseau peut aussi envoyer un poids à la caisse, enregistrer une réception de marchandise face à un bon de commande ou journaliser chaque pesée. Les questions de conception portent sur la fiabilité : que montre l’application quand la connexion tombe, comment les mesures sont horodatées, et qui peut modifier un poids à la main ?

## Codes articles et prix au même endroit

L’erreur classique, ce sont deux listes, l’une sur la balance et l’autre dans la caisse, tenues par des personnes différentes. Une semaine plus tard, la balance vend au prix du mois dernier.

- **Gérez la liste des articles et les prix dans la caisse**, et envoyez-les à la balance, via le logiciel du fabricant de la balance ou une liaison directe.
- **Utilisez le même code article partout** : dans la caisse, sur la balance et sur l’étiquette.
- **Enregistrez qui a modifié un prix et quand**, surtout pour les articles vendus au comptoir.

C’est une grande partie de ce qui compte pour [choisir un logiciel de caisse](/blog/pos-cashier-system-for-shops-egypt) dans un commerce qui vend au poids.

## Stock et rapports pour les produits pesés

C’est sur les produits pesés que le stock dérive le plus : parage, dessèchement et les quelques grammes offerts à un habitué. Le système doit :

- Gérer les articles pesés en kilos ou en grammes, avec décimales, et non en unités entières.
- Enregistrer les pertes et le parage comme un mouvement distinct, et non comme une vente cachée.
- Afficher le poids vendu par article et par jour, pour le comparer aux quantités reçues.

Si les totaux ne concordent pas, le [guide de gestion des stocks](/blog/inventory-management-system-egypt) explique où le stock disparaît le plus souvent. Et si votre caisse accepte aussi les cartes ou les portefeuilles électroniques, consultez [les passerelles de paiement en Égypte](/blog/payment-gateways-egypt).

## Ce que fait KF Tech Solutions

Nous développons des [systèmes de gestion](/services/business-systems), notamment des logiciels de caisse et de gestion des stocks, et nous avons construit une balance connectée qui transmet le poids en direct à une application. Pour un commerce ou un entrepôt, cela signifie que nous pouvons faire lire à la caisse le format d’étiquette ou la connexion de votre balance, réunir codes articles et prix au même endroit et enregistrer correctement le stock pesé. Nous travaillons avec des entreprises en Égypte et dans le Golfe.

## Questions fréquentes

### Puis-je garder ma balance actuelle avec une nouvelle caisse ?

Souvent, oui. Si elle imprime des étiquettes code-barres, la caisse doit seulement lire son format d’étiquette. Si elle se branche par câble, vérifiez le protocole utilisé et sa prise en charge par la caisse.

### Faut-il une adhésion à GS1 pour les étiquettes de balance ?

Les préfixes 20 à 29 sont prévus pour un usage interne au magasin : les étiquettes imprimées et vendues dans votre propre commerce n’utilisent donc normalement pas les GTIN de votre entreprise. Renseignez-vous auprès de GS1 Égypte si vous livrez aussi des barquettes pesées à d’autres commerçants, car le produit a alors besoin d’un vrai code-barres.

### Pourquoi la caisse refuse-t-elle certaines étiquettes de balance ?

En général, le format d’étiquette de la balance ne correspond pas au réglage de la caisse, ou le code article de l’étiquette n’existe pas dans la caisse. Imprimez et testez une étiquette par type d’article.

### Cela fonctionne-t-il avec les reçus électroniques ?

En principe, oui. Un article pesé devient une ligne de reçu avec le poids comme quantité et le kilogramme comme unité ; vérifiez donc que votre caisse transmet correctement les quantités décimales sur les reçus électroniques.

Vous vendez au poids et ne voulez plus saisir les prix à la caisse ? [Expliquez-nous le fonctionnement de votre commerce](/contact) ou [réservez un appel gratuit](/book), et nous vous aiderons à planifier la liaison entre vos balances et votre caisse.

## Sources

- [GS1 Fresh Foods Sold at Point-of-Sale Implementation Guideline](https://ref.gs1.org/guidelines/fresh-foods/)
- [Synthèse GS1 des préfixes 20 à 29 par organisation membre](https://www.gs1.org/docs/barcodes/SummaryOfGS1MOPrefixes20-29.pdf)
