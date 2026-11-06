---
title: Connexion Nafath pour votre site ou votre application : le guide
summary: Ce qu'apporte une connexion Nafath à un site ou une application en Arabie saoudite, son fonctionnement et quand une identité vérifiée vaut l'effort.
tags: Nafath, authentification unique, vérification d'identité, intégration API, connexion, Arabie saoudite
alt: Un pouce posé sur le capteur d’empreinte d’un smartphone affichant un écran de verrouillage violet
caption: Avec Nafath, se connecter revient à confirmer sur son téléphone par empreinte ou visage plutôt qu’à saisir un mot de passe.
stats: 530+|plateformes publiques et privées reliées à Nafath; 3 Md+|vérifications à fin novembre 2024; 2|parcours de connexion à prévoir : Nafath et une alternative
---

Une intégration Nafath permet aux personnes en Arabie saoudite de se connecter à votre site ou à votre application avec l'authentification unique nationale qu'elles utilisent déjà pour les services publics, et vous assure que le compte appartient à une personne réelle et identifiée. L'effort se justifie lorsqu'une erreur d'identité vous coûte de l'argent ou vous expose juridiquement, comme dans l'immobilier, le recrutement et le financement. Pour une boutique en ligne ordinaire ou un site de réservation, un numéro de téléphone et un code à usage unique suffisent généralement.

Dernière vérification : 6 novembre 2026

Ce guide est une information générale destinée aux chefs d'entreprise, pas un conseil juridique. L'opérateur de Nafath décide qui peut s'y connecter et à quelles conditions : vérifiez donc les conditions actuelles auprès du canal officiel avant de fixer une date de lancement.

## Ce qu'est Nafath et qui peut l'utiliser

Nafath (Unified National Access) est l'authentification unique nationale de l'Arabie saoudite. Le ministère de l'Intérieur l'a lancée avec le National Information Center, et elle a été développée par Elm et Technology Control Company. Les utilisateurs y accèdent par l'application Nafath, qui valide chaque connexion par biométrie, clés d'accès (passkeys) et codes de demande.

Elle fait déjà partie du quotidien. Nafath est reliée à plus de 530 plateformes publiques et privées et avait traité plus de 3 milliards de vérifications à fin novembre 2024. Les citoyens et résidents saoudiens s'y connectent avec leur compte Absher, si bien que la plupart de vos clients en Arabie saoudite ont déjà l'application sur leur téléphone.

C'est la principale raison de l'envisager. Vous ne demandez pas à vos clients d'installer une nouvelle application ni de créer un mot de passe de plus : vous leur proposez une connexion en laquelle ils ont confiance grâce à leurs démarches administratives.

## Comment fonctionne une connexion Nafath pour vos utilisateurs

Du côté de l'utilisateur, le parcours est court :

1. Sur votre page de connexion, l'utilisateur choisit « Se connecter avec Nafath » et s'identifie, généralement avec son numéro d'identité nationale ou de résident (Iqama).
2. Votre site ou votre application envoie une demande de connexion par l'intégration.
3. L'utilisateur ouvre l'application Nafath sur son téléphone et voit la demande, avec un code de demande à comparer avec votre écran.
4. Il la valide par biométrie sur son téléphone.
5. Votre site reçoit la confirmation et ouvre son compte.

L'échange prend quelques secondes, mais il dépend du téléphone de l'utilisateur. Un client dont la batterie est vide, ou qui a laissé son téléphone dans la voiture, ne peut pas terminer la connexion. Votre conception doit en tenir compte : l'écran doit expliquer ce qui va se passer et offrir un retour clair si la demande expire.

## Connexion ou identité vérifiée : deux besoins différents

Les chefs d'entreprise demandent souvent « Nafath » en pensant à l'une de deux choses, et la différence change le projet.

| | Connexion seule | Identité vérifiée |
|---|---|---|
| Question traitée | Est-ce la même personne que la dernière fois ? | Qui est exactement cette personne ? |
| Ce que vous conservez | Un lien entre votre compte et sa connexion Nafath | Les données d'identité nécessaires à l'opération, conservées avec soin |
| Usage courant | Portails clients, espaces membres | Contrats, acomptes, recrutement, décisions de crédit |
| Alternative nécessaire ? | Oui, pour ceux qui n'ont pas Nafath | En général une vérification manuelle |
| Effort | Plus faible | Plus élevé : journaux, piste d'audit, traitement des données |

Si vous avez seulement besoin d'une connexion fluide, un numéro de téléphone avec un code à usage unique fait souvent le même travail avec moins de formalités. Nafath prend tout son sens lorsque vous devez vous appuyer sur l'identité réelle de la personne.

## Quand Nafath vaut l'effort

Servez-vous de ces repères comme d'un guide approximatif, puis confrontez-les à vos propres risques :

- **Immobilier.** Réservations, acomptes et baux engagent de l'argent réel et des parties nommées. Savoir qui a signé réduit les litiges et s'intègre naturellement à un CRM qui suit un prospect de la première demande jusqu'au contrat signé, comme dans notre [guide du CRM immobilier](/blog/real-estate-crm-egypt).
- **Portails RH et recrutement.** Les dossiers des candidats et des salariés sont liés à une personne, et une erreur d'identité dans un dossier RH coûte cher à corriger.
- **Financement et paiement échelonné.** Le prêt, le paiement fractionné et tout ce qui implique un crédit exigent une identité réelle derrière le compte.
- **Services médicaux et autres services sensibles.** Les dossiers concernant une personne ne doivent parvenir qu'à elle.
- **Plateformes d'adhésion payantes ou à accès restreint.** Les comptes partagés ou fictifs vous coûtent de l'argent.

Là où cela ne vaut généralement pas l'effort :

- **Boutiques en ligne.** Un achat en tant qu'invité avec un numéro de téléphone limite les frictions, et le paiement est de toute façon géré par la passerelle. Notre guide des [passerelles de paiement en Arabie saoudite](/blog/payment-gateways-saudi-arabia) couvre cet aspect.
- **Formulaires de réservation et de contact.** Un code à usage unique envoyé au téléphone du client suffit à bloquer la plupart des spams.
- **Sites très visités depuis l'étranger.** Ces visiteurs n'ont pas Nafath, qui ne peut donc être qu'une option parmi d'autres.

## Obtenir l'accès : ce qu'il faut vérifier d'abord

Nafath n'est pas un bouton de connexion public que n'importe quel développeur peut activer. L'accès passe par les canaux officiels de son opérateur, et les conditions d'éligibilité peuvent dépendre de votre type d'entité et du service que vous proposez. Nous n'avons pas pu vérifier les étapes actuelles d'adhésion dans un document officiel public ; nous ne les présentons donc pas ici comme des faits.

Avant de budgéter le développement, renseignez-vous sur :

- **L'éligibilité de votre entreprise**, et les documents requis, comme votre registre du commerce.
- **Le service dont vous avez besoin :** la connexion seule, ou la transmission de données d'identité.
- **Les conditions commerciales**, y compris d'éventuels frais par vérification ou par an.
- **L'existence d'un environnement de test**, et le délai d'autorisation pour la mise en production.
- **Les exigences de sécurité et de traitement des données** que vous devrez respecter.

Posez ces questions par le canal officiel de Nafath (iam.gov.sa) ou par l'intégrateur que vous choisissez, et obtenez les réponses par écrit. Le délai d'autorisation échappe à votre développeur : planifiez la date de lancement en conséquence.

## Ce qu'il faut construire de votre côté

La connexion à Nafath n'est qu'une petite partie du travail. L'essentiel de l'effort se situe dans votre propre système, et c'est là que les projets échouent :

- **Une connexion de secours.** Les visiteurs, les nouveaux résidents et tous ceux qui n'ont pas l'application doivent pouvoir entrer, par code sur le téléphone ou par e-mail.
- **La liaison des comptes.** Décidez comment une identité Nafath se rattache à une fiche client existante, et ce qui se passe si deux comptes revendiquent la même personne.
- **Des états d'attente et d'expiration clairs.** Montrez à l'utilisateur ce qu'il doit faire sur son téléphone, et laissez-le réessayer sans tout recommencer.
- **La gestion des sessions.** Combien de temps dure une connexion, et quelles actions, comme la signature d'un contrat, exigent une nouvelle confirmation.
- **Un journal d'audit.** Enregistrez quand chaque vérification a eu lieu et à quoi elle a servi, pour pouvoir répondre à un litige plus tard.
- **La minimisation des données.** Ne conservez que les champs d'identité nécessaires à l'opération, et limitez qui, dans votre équipe, peut les consulter.

Les données d'identité sont des données personnelles. La loi saoudienne sur la protection des données personnelles (PDPL) est en vigueur depuis le 14 septembre 2023. Ses principales obligations comprennent l'enregistrement de certains responsables de traitement, la notification d'une violation à l'autorité SDAIA dans les 72 heures, et des sanctions pouvant atteindre 5 millions de SAR. Des projets d'amendements soumis à consultation en octobre 2026 ajouteraient une règle de stockage des données personnelles dans le Royaume. Ce n'est encore qu'un projet, mais il est utile de savoir où vos données sont hébergées.

Une connexion Nafath s'inscrit généralement dans un projet plus large. Si vous prévoyez une application autour d'elle, notre guide sur le [coût du développement d'applications en Arabie saoudite](/blog/app-development-cost-saudi-arabia) explique ce qui détermine le budget, et l'article sur [la connexion des systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems) montre comment ce type d'intégration s'articule.

## Comment KF Tech Solutions vous aide

KF Tech Solutions est un studio logiciel basé au Caire qui conçoit des sites web, des applications web et mobiles ainsi que les [API et backends](/services/api-and-backend) qui les font fonctionner. Nous travaillons avec des entreprises en Égypte et dans le Golfe. Pour un projet Nafath, nous vous aidons à déterminer s'il vous faut une connexion ou une identité vérifiée, nous concevons les écrans de connexion en arabe et en anglais, nous construisons dans votre système la liaison des comptes, la connexion de secours, le journal d'audit et le traitement des données, puis nous finalisons l'intégration une fois votre accès approuvé par le canal officiel. L'accès lui-même est accordé uniquement par l'opérateur de Nafath, ni par nous ni par un autre développeur. Découvrez comment nous travaillons avec les entreprises saoudiennes sur notre [page Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### N'importe quel site peut-il ajouter une connexion Nafath ?

Pas de lui-même. L'accès est accordé par les canaux officiels de Nafath et dépend de conditions d'éligibilité fixées par l'opérateur. Vérifiez-les avant de vous engager sur une date de lancement.

### Les visiteurs et les personnes hors d'Arabie saoudite peuvent-ils utiliser Nafath ?

Nafath est utilisée par les citoyens et résidents saoudiens via leur compte Absher. Les autres ont besoin d'un autre moyen de connexion : prévoyez une alternative dès le départ.

### Nafath remplace-t-elle mes propres comptes utilisateurs ?

Non. Nafath confirme qui est la personne. Votre système conserve le compte client, ses commandes, ses contrats et ses réglages, et les rattache à cette identité confirmée.

### Un numéro de téléphone avec un code à usage unique suffit-il ?

Pour la plupart des boutiques, sites de réservation et portails, oui. Choisissez Nafath lorsque vous devez vous appuyer sur l'identité réelle d'une personne, par exemple avant un contrat, un acompte ou une décision de crédit.

### Combien de temps prend une intégration Nafath ?

Le développement de votre côté prend généralement quelques semaines au sein d'un projet plus large. L'autorisation d'accès relève de l'opérateur et constitue souvent la partie la plus longue : engagez cette démarche tôt.

Si vous envisagez Nafath pour un portail ou une application, [dites-nous ce que vous construisez](/contact) ou [réservez un appel gratuit](/book), et nous vous aiderons à décider si cela vaut l'effort avant d'écrire la moindre ligne de code.

## Sources

- [Unified national access (Nafath), Wikipedia](https://en.wikipedia.org/wiki/Unified_national_access)
- [Loi saoudienne sur la protection des données, DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [La SDAIA publie des projets d'amendements à la PDPL, Clyde & Co](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
