---
title: Un assistant IA qui répond à partir de vos propres documents
summary: Comment un chatbot IA sur votre site répond à partir de vos fichiers, cite ses sources, respecte des limites, passe la main et réussit les tests en arabe.
tags: chatbot IA, chatbot pour site web, service client, recherche documentaire, arabe, Égypte
alt: Une haute pile de feuilles imprimées balisées de marque-pages adhésifs roses, orange et verts
caption: Les réponses dont vos clients ont besoin figurent déjà dans vos documents ; un assistant doit les citer, pas en inventer.
stats: 1|source affichée avec chaque réponse; 0|réponse quand vos documents ne disent rien; 2|langues à tester avant le lancement : arabe et anglais
---

Un chatbot IA sur votre site web peut répondre à vos clients à partir de vos propres documents : listes de prix, conditions, fiches produits et FAQ. À chaque question, il cherche dans ces documents et ne rédige sa réponse qu'à partir de ce qu'il y trouve, avec un lien vers la source. Quand les documents ne couvrent pas la question, un assistant bien conçu le dit clairement et transmet la conversation à une personne au lieu de deviner.

Un chatbot généraliste répond à partir de ce qu'il a appris sur Internet ; le vôtre ne devrait répondre qu'à partir de ce que votre entreprise a mis par écrit. Voici comment cela fonctionne, ce que cela coûte et comment le tester en arabe avant le lancement.

## Comment cela fonctionne : chercher d'abord, répondre ensuite

L'assistant n'apprend pas vos fichiers par cœur. Quand un client pose une question, le système cherche dans vos documents, retient les quelques passages qui contiennent le plus probablement la réponse et les transmet au modèle de langage avec une seule consigne : réponds uniquement à partir de ces passages. Cette approche s'appelle généralement la génération augmentée par récupération, ou RAG.

Mettre l'assistant à jour revient donc à mettre à jour un document, pas à réentraîner un modèle, et les réponses ne peuvent jamais être meilleures que les documents sur lesquels elles reposent.

### Quels documents lui confier

Commencez par ce que votre équipe utilise déjà pour répondre aux clients :

- **Les descriptions de services et de produits**, avec ce qui est inclus et ce qui ne l'est pas.
- **Les prix et les formules**, si vous acceptez de les rendre publics.
- **Les conditions** : livraison, retours, garantie, annulation et horaires d'ouverture.
- **Votre FAQ actuelle** et les questions auxquelles votre équipe répond chaque jour par téléphone et sur WhatsApp.
- **Les guides d'utilisation** de votre produit ou service.

Écartez tout ce qu'un client ne doit pas lire, comme les tableaux de coûts, les données du personnel et les contrats d'autres clients : un passage qui peut être retrouvé peut être cité. Deux listes de prix de deux années différentes produiront deux réponses différentes.

## Des réponses qui citent leur source

Chaque réponse devrait indiquer le document dont elle provient, idéalement avec un lien vers la page ou la section. Le client peut vérifier le détail avant de payer. Votre équipe voit, pour chaque réponse erronée, si le document était faux ou si l'assistant l'a mal lu, et corrige au bon endroit.

La citation est aussi un test d'honnêteté simple : si l'assistant ne peut désigner aucun passage, il ne doit pas répondre. Cette règle est fixée dans les consignes et vérifiée lors des tests, jamais supposée.

## Garde-fous : ce qu'il ne doit pas faire

Définissez les limites avant de construire et mettez-les par écrit :

- **Rester dans le sujet.** Uniquement des questions sur votre entreprise ; pas de conversation générale, de devoirs ni d'opinions.
- **Pas de faits inventés.** Si les documents ne répondent pas, il le dit et propose une personne.
- **Pas d'engagements.** Il peut citer la liste de prix publiée, mais n'accorde pas de remise, ne confirme pas de remboursement et ne promet pas de dates non validées par une personne.
- **Pas de données personnelles dans les réponses.** Il ne révèle jamais les informations d'un autre client et ne demande que ce dont le transfert a besoin.
- **Résister à la manipulation.** Des utilisateurs essaieront des messages comme « ignore tes instructions ». Le Top 10 OWASP pour les applications LLM place l'injection de prompt en première position, avec la divulgation d'informations sensibles et la désinformation.

Une partie de ces règles sont des consignes données au modèle ; le reste relève du code ordinaire : des limites sur les données auxquelles il accède et un journal de chaque conversation.

## Le passage à une personne

Un bon assistant passe la main quand le client demande à parler à quelqu'un, quand les documents ne contiennent pas la réponse, quand il s'agit d'une réclamation, d'un remboursement ou d'un paiement, ou quand le client répète la même question.

La conversation doit suivre le transfert, pour que le client n'ait pas à tout recommencer. En dehors des heures d'ouverture, l'assistant indique quand quelqu'un répondra et note un nom et un numéro de téléphone. La même logique s'applique sur WhatsApp ; notre guide sur [un chatbot WhatsApp pour votre entreprise en Égypte](/blog/whatsapp-chatbot-for-business-egypt) traite de ce canal.

## Ce que coûte chaque conversation

Les fournisseurs de modèles d'IA facturent selon la quantité de texte traitée, comptée en tokens. Chaque conversation a donc un petit coût qui dépend de sa longueur et du texte récupéré. S'y ajoutent l'hébergement, l'index de recherche et, sur WhatsApp, les frais de messages de la plateforme, expliqués dans [les tarifs de l'API WhatsApp Business](/blog/whatsapp-business-api-pricing).

| Facteur de coût | Ce qui l'augmente | Comment le réduire |
| --- | --- | --- |
| Choix du modèle | Un grand modèle pour chaque question | Un modèle plus petit pour les questions courantes, un plus grand seulement si nécessaire |
| Texte récupéré | Envoyer des documents entiers à chaque question | N'envoyer que les quelques passages les plus pertinents |
| Longueur de la conversation | De longs échanges qui renvoient tout l'historique | Raccourcir ou résumer les messages anciens |
| Abus | Des robots ou des utilisateurs qui discutent hors sujet pendant des heures | Limites de sujets et plafond de messages par utilisateur |
| Canal | Frais de messages sur WhatsApp | Connaître les tarifs du canal avant de le choisir |

L'OWASP classe aussi la « consommation non bornée » parmi les risques : sans plafond, un seul utilisateur abusif peut faire grimper la facture. Fixez une limite de dépenses mensuelle et une alerte en cas de volume inhabituel.

## Tester les réponses en arabe avant le lancement

Ne jugez pas un assistant arabophone en essayant vous-même quelques questions. Constituez un jeu de test d'une centaine de vraies questions tirées de vos conversations WhatsApp, de vos e-mails et de vos notes d'appels, et notez pour chacune la bonne réponse et sa source. Intégrez la façon dont les clients écrivent réellement :

- L'arabe standard et le dialecte du client, égyptien ou du Golfe.
- L'arabe tapé en lettres latines et en chiffres (arabizi).
- L'arabe et l'anglais mélangés dans un même message, surtout pour les noms de produits.
- Les variantes orthographiques comme ة et ه, ى et ي, ou أ et ا.
- Les chiffres arabes orientaux en plus des chiffres occidentaux dans les prix et les numéros de téléphone.

Évaluez chaque réponse : juste, correctement sourcée, correctement refusée ou transmise, et rédigée dans un arabe clair. Faites relire les réponses par un arabophone de votre équipe, et relancez le même jeu de test à chaque modification des documents, des consignes ou du modèle. Le cadre volontaire NIST AI Risk Management Framework traite lui aussi ce travail comme continu : mesurer et gérer les risques sont deux de ses quatre fonctions principales.

## Ce que fait KF Tech Solutions dans ce domaine

Nous développons des assistants IA qui répondent aux clients à partir des propres informations d'une entreprise, sur son site web ou sur WhatsApp, en arabe et en anglais, et qui passent la main à une personne si nécessaire. Nous commençons par un court test sur vos vraies questions pour mesurer la fréquence des bonnes réponses avant de construire l'intégration complète. Consultez notre page [Solutions d'IA](/services/ai-solutions) et notre [guide pratique pour intégrer l'IA dans votre entreprise](/blog/a-practical-guide-to-adding-ai-to-your-business). Nous travaillons avec des entreprises en Égypte et dans le Golfe.

## Questions fréquentes

### L'assistant va-t-il inventer des réponses ?

Tout modèle de langage peut se tromper. Vous réduisez ce risque en le limitant à vos documents, en exigeant une source pour chaque réponse et en vérifiant qu'il refuse de répondre quand les documents ne disent rien.

### Faut-il réentraîner l'IA quand mes prix changent ?

Non. Vous mettez à jour le document, l'index de recherche est actualisé et la réponse suivante utilise le nouveau texte. Supprimez les anciennes versions pour que l'assistant ne trouve pas les deux.

### Peut-il répondre en arabe si mes documents sont en anglais ?

Souvent oui, mais la qualité varie : testez-le avec vos propres questions. Pour les prix et les conditions, une version arabe du document donne une formulation plus fiable.

### Mes données servent-elles à entraîner le modèle ?

Cela dépend du fournisseur et de l'offre. Lisez ses conditions d'utilisation des données pour les clients professionnels et ne confiez à l'assistant que les documents dont il a besoin.

### Faut-il le placer sur le site web ou sur WhatsApp ?

Commencez là où arrivent déjà la plupart des questions. Le même assistant et les mêmes documents peuvent servir les deux canaux ; seuls l'interface et les coûts de fonctionnement changent.

Vous avez un dossier de documents dont votre équipe se sert chaque jour pour répondre ? [Réservez un appel gratuit](/book) et nous verrons quelles questions un assistant pourrait prendre en charge, ou [écrivez-nous](/contact).

## Sources

- [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
