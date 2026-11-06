---
title: Intégrer UAE PASS : connexion et signature pour votre application
summary: Comment une entreprise aux Émirats ajoute la connexion, la signature ou le partage de données UAE PASS : quatre phases d’onboarding, liaison des comptes, UX.
tags: UAE PASS, identité numérique, OAuth 2.0, intégration d’application, signature électronique, Émirats arabes unis
alt: Un homme en kandoura et ghutra blanches téléphone en plein air par une journée ensoleillée
caption: UAE PASS fonctionne sur le téléphone de l’utilisateur ; connexion et signature peuvent donc commencer par une confirmation.
stats: 3|familles de fonctions UAE PASS : connexion, signature et eSeal, partage de données; 4|phases d’onboarding, de la première demande à la mise en production; 3|niveaux de compte, de SOP1 (basique) à SOP3 (qualifié)
---

Une entreprise privée aux Émirats arabes unis peut intégrer UAE PASS à son site web ou à son application mobile pour la connexion, pour la signature électronique et l’eSeal, et pour le partage de données et de documents avec l’accord de l’utilisateur. Vous déposez une demande en tant que fournisseur de services avec une licence commerciale émiratie valide, vous faites approuver votre cas d’usage, vous développez sur l’environnement de test, vous passez une évaluation, et c’est seulement ensuite que vous recevez les identifiants de production. La partie technique repose sur OAuth 2.0 standard ; l’essentiel du travail porte sur la liaison des comptes et le respect des règles officielles du parcours utilisateur.

Dernière vérification : 6 novembre 2026

## Ce que UAE PASS offre à une entreprise privée

UAE PASS est l’identité numérique nationale des Émirats, utilisée pour se connecter aux services publics. Le Federal Supplier Register du ministère des Finances, par exemple, utilise UAE PASS pour la connexion. En l’ajoutant à votre propre application, vous permettez à ces mêmes utilisateurs de se connecter ou de signer des documents sans créer un mot de passe de plus.

La documentation officielle liste trois fonctions :

| Fonction | Ouverte à | Usage courant dans une application privée |
|---|---|---|
| Authentification | Administrations et organisations privées | « Se connecter avec UAE PASS » sur un portail ou une application mobile |
| Signature électronique et eSeal | Administrations et organisations privées | Vos clients signent un contrat ou un formulaire ; votre entreprise scelle les documents qu’elle émet |
| Partage de données et de documents | Organisations privées uniquement | Avec l’accord de l’utilisateur, demander un document détenu par une autre entité |

La documentation couvre aussi l’inscription web, la confirmation de transactions par biométrie faciale et le hash signing, où l’on signe l’empreinte (hash) d’un document plutôt que le fichier entier. Chaque fonction a son propre questionnaire pendant l’onboarding : décidez tôt de celles dont vous avez besoin.

## Avant la demande : qui est le fournisseur de services ?

Le fournisseur de services, c’est votre entreprise, pas votre développeur. L’équipe d’onboarding demande aux entités privées une licence commerciale émiratie valide et les oriente selon l’émirat où elles sont enregistrées. Un studio logiciel situé hors des Émirats peut construire et tester l’intégration, mais la demande, l’accord et les identifiants appartiennent à l’entreprise titulaire de la licence aux Émirats.

Préparez trois éléments avant de déposer la demande :

- **Les fonctions souhaitées** : la connexion seule, ou aussi la signature, l’eSeal ou le partage de données.
- **Un diagramme de flux** du parcours utilisateur, fondé sur les cas d’usage standard des lignes directrices officielles.
- **Des maquettes d’interface (wireframes)** de chaque écran où UAE PASS apparaît.

Les cas d’usage qui s’écartent des lignes directrices standard nécessitent l’approbation de la direction, ce qui, selon la documentation, peut allonger les délais. Concevoir à partir des scénarios standard est généralement la voie la plus rapide.

## Les quatre phases de l’onboarding

La documentation découpe l’onboarding en quatre phases. Voici ce qui se passe à chaque étape, et qui s’en charge.

| Phase | De votre côté | L’équipe d’onboarding UAE PASS |
|---|---|---|
| Lancement | Déposer la demande sur le portail développeurs (type d’entité : privée), remplir les questionnaires, envoyer le diagramme de flux et les maquettes | Demande la licence commerciale, envoie la documentation de référence, évalue et approuve le cas d’usage |
| Développement | Intégrer sur l’environnement de test, puis demander l’évaluation | Délivre les identifiants de test, lance la signature du Service Provider Agreement (un MOU pour les administrations) |
| Évaluation | Corriger les points relevés, enregistrer en vidéo chaque scénario testé, signer l’accord | Évalue selon une liste de contrôle, organise un second tour si nécessaire, obtient l’approbation de la direction |
| Mise en production | Remettre le formulaire de mise en production, implémenter en production, communiquer la date de lancement | Délivre les identifiants de production, mène l’évaluation en production, ouvre un accès au service desk |

Deux points pratiques en découlent. D’abord, l’URL de redirection déclarée pour le test doit être une adresse de développement ou de test ; l’URL de production n’est demandée qu’après la validation de l’évaluation. Ensuite, les identifiants sont propres à un canal. Ceux approuvés pour votre site web ne doivent pas être réutilisés dans votre application mobile sans l’accord de l’équipe : si vous avez besoin des deux, incluez-les dès le départ dans le cas d’usage.

## Comment fonctionne la connexion techniquement

### Applications web

L’authentification UAE PASS repose sur OAuth 2.0. Votre application envoie l’utilisateur vers le point d’autorisation, reçoit un code d’autorisation sur votre URL de redirection, l’échange côté serveur contre un jeton d’accès, puis lit le profil de l’utilisateur sur le point userinfo. Le test utilise `stg-id.uaepass.ae` et la production `id.uaepass.ae`, chacun avec les points authorize, token, userinfo et logout.

Pour tester, développeurs et testeurs ont besoin d’un utilisateur sur l’environnement de test et de l’application UAE PASS de test installée sur un appareil. Lorsqu’un utilisateur se déconnecte de votre portail, la documentation indique de le déconnecter aussi de UAE PASS via le point logout, avec une redirection vers votre site.

### Applications mobiles

Une application mobile demande des étapes supplémentaires, car l’utilisateur confirme la connexion dans l’application UAE PASS sur le même téléphone. En bref, votre application :

1. Enregistre son propre schéma d’URI auprès du système d’exploitation.
2. Lance le flux OAuth dans une WebView.
3. Intercepte le schéma de l’application UAE PASS, remplace l’adresse de retour par le schéma de votre application et ouvre l’application UAE PASS.
4. Récupère l’utilisateur via votre schéma et ouvre l’URL de retour d’origine dans la WebView.
5. Surveille votre URI de redirection OAuth, qui marque la fin de la connexion.

La documentation avertit : utilisez votre propre schéma, et non celui de l’application de démonstration, en test comme en production, sinon des utilisateurs risquent d’être renvoyés vers une autre application. Des applications d’exemple existent pour iOS et Android.

## Niveaux de compte et liaison des utilisateurs existants

Les comptes UAE PASS ont trois niveaux, que la documentation appelle Strength of Profile (SOP) :

- **SOP1, basique** : e-mail et numéro de mobile vérifiés par OTP, Emirates ID non vérifiée. Services limités, pas de signature de documents.
- **SOP2, avancé** : compte vérifié, signature de niveau avancé.
- **SOP3, qualifié** : compte vérifié par biométrie, signature de niveau qualifié.

Pour un utilisateur SOP1, UAE PASS ne renvoie pas le numéro d’Emirates ID : votre application doit alors afficher un message clair au lieu d’échouer sans explication. Indiquez dans le diagramme de votre cas d’usage les niveaux acceptés par votre service.

La question la plus délicate : que se passe-t-il quand quelqu’un se connecte avec UAE PASS alors que vous avez déjà des clients dans votre base ? Les lignes directrices décrivent trois parcours et attendent les trois dans la même version :

- **Liaison automatique** : rapprocher un attribut vérifié et unique, comme un numéro d’Emirates ID vérifié, un e-mail vérifié et unique, ou un e-mail et un numéro de mobile vérifiés ensemble.
- **Liaison manuelle** : l’utilisateur se connecte une fois avec son identifiant et son mot de passe existants (ou répond à des questions de sécurité), puis les comptes sont liés.
- **Nouvelle inscription** : votre formulaire d’inscription est prérempli à partir du profil UAE PASS, et vous ne demandez que les champs propres à votre activité.

Dans tous les cas, vous enregistrez l’**UUID** renvoyé par UAE PASS et vous l’utilisez pour les connexions suivantes. La liaison sur le seul e-mail est déconseillée, tout comme la liaison d’un compte vérifié avec un compte non vérifié, dans un sens comme dans l’autre.

## Les règles UX vérifiées à l’évaluation, et vos solutions de repli

L’équipe d’onboarding contrôle votre parcours au regard des lignes directrices standard d’implémentation : avant l’approbation, lors de l’évaluation en test et après la mise en production. Voici les règles qui modifient le plus souvent une application existante :

- **Séparer les parcours.** « Se connecter avec UAE PASS » ne doit pas être fusionné avec votre connexion ou votre inscription locales.
- **Pas de mot de passe dans le parcours UAE PASS.** Ne demandez pas à un nouvel utilisateur UAE PASS de créer un identifiant et un mot de passe, ne lui en envoyez pas par e-mail et ne proposez pas de changement de mot de passe pendant la connexion UAE PASS.
- **C’est l’utilisateur qui lance la connexion.** Ne déclenchez pas l’authentification UAE PASS à sa place.
- **Un parcours complet, pas une fonction annexe.** Les utilisateurs UAE PASS doivent accéder aux mêmes services que les utilisateurs locaux. Utiliser UAE PASS uniquement pour modifier une adresse e-mail, par exemple, est à éviter.
- **Boutons et messages officiels.** Utilisez les designs de boutons publiés (il en existe des versions anglaise et arabe) et suivez les règles de rédaction des messages pour les erreurs.

Les solutions de repli découlent des mêmes règles. Les parcours étant indépendants, votre connexion actuelle reste disponible pour les clients sans compte UAE PASS. Prévoyez des écrans clairs pour les cas qui se produiront : un utilisateur SOP1 là où il vous faut une identité vérifiée, un utilisateur qui annule dans l’application UAE PASS, et un client existant dont les données ne correspondent à aucun compte. Chacun de ces cas appelle une étape suivante, pas un code d’erreur.

## Le rôle de KF Tech Solutions

Nous développons des applications web et mobiles et les back-ends qui les font tourner, y compris des intégrations d’API avec des systèmes externes. Pour UAE PASS, cela recouvre le flux OAuth sur votre serveur, le passage entre votre application et l’application UAE PASS sur le téléphone, la liaison des comptes avec vos données clients existantes, ainsi que les écrans et maquettes exigés par votre dossier de cas d’usage. La demande et l’accord restent au nom de votre entreprise. Nous travaillons avec des entreprises en Égypte et dans le Golfe ; découvrez notre approche des intégrations dans [Relier les systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems) et sur la page de notre [service API et back-end](/services/api-and-backend).

## Questions fréquentes

### Une entreprise privée peut-elle utiliser UAE PASS ?

Oui. L’authentification, la signature électronique et l’eSeal sont ouvertes aux administrations et aux organisations privées ; le partage de données et de documents est réservé aux organisations privées. Les entités privées ont besoin d’une licence commerciale émiratie valide pour commencer l’onboarding.

### Un développeur hors des Émirats peut-il réaliser l’intégration ?

Le développeur peut la construire et la tester, mais le fournisseur de services qui demande l’onboarding est l’entreprise titulaire d’une licence aux Émirats. Les identifiants, le Service Provider Agreement et l’autorisation de mise en production sont délivrés à cette entreprise.

### UAE PASS, est-ce la même chose qu’une connexion OpenID Connect ?

L’intégration web repose sur OAuth 2.0 avec les points authorize, token, userinfo et logout, et les exigences pour les applications mobiles mentionnent OAuth 2.0 ou OpenID Connect. La différence tient au processus d’approbation et aux règles de parcours utilisateur qui s’y ajoutent.

### Faut-il supprimer notre connexion actuelle ?

Non. Les lignes directrices exigent que le parcours UAE PASS soit indépendant de votre connexion locale : votre connexion actuelle reste en place pour ceux qui n’utilisent pas UAE PASS.

### Combien de temps dure l’onboarding ?

La documentation ne donne pas de durée fixe. Elle dépend de la rapidité d’approbation de votre cas d’usage, du nombre de tours d’évaluation et du respect des cas d’usage standard par votre parcours. Les cas non standard demandent une approbation supplémentaire.

### Faut-il prévoir UAE PASS dans une application qui n’existe pas encore ?

Si vos utilisateurs résident aux Émirats, prévoyez-le dès la première version, car les règles de liaison façonnent votre table des utilisateurs. Si vous testez encore l’idée, lisez [Une idée d’application ? Commencez petit avec un MVP](/blog/mobile-app-mvp-egypt) et voyez ce qui détermine le [coût d’une application aux Émirats](/blog/app-development-cost-uae). Vous trouverez davantage de contenus pour les entreprises émiraties sur notre [page Émirats](/uae).

Si vous souhaitez intégrer UAE PASS à votre site ou à votre application, [décrivez-nous votre projet](/contact) ou [réservez un appel gratuit](/book) : nous préparerons avec vous l’onboarding et l’intégration.

## Sources

- [Documentation UAE PASS : présentation et fonctions](https://docs.uaepass.ae)
- [UAE PASS : processus d’onboarding des fournisseurs de services](https://docs.uaepass.ae/getting-onboarded-with-uae-pass/onboarding-process-for-uae-pass-service-providers)
- [UAE PASS : types de comptes](https://docs.uaepass.ae/quick-start-guide-uae-pass-staging-environment/user-account-types)
- [UAE PASS : points d’accès de l’intégration web](https://docs.uaepass.ae/feature-guides/authentication/web-application/endpoints)
- [UAE PASS : exigences pour les applications mobiles](https://docs.uaepass.ae/feature-guides/authentication/mobile-application/requirements)
- [UAE PASS : liaison des utilisateurs](https://docs.uaepass.ae/feature-guides/authentication/user-linking)
- [UAE PASS : lignes directrices standard d’implémentation](https://docs.uaepass.ae/guidelines/use-cases/standard-implementation-guidelines)
- [UAE PASS : règles pour les boutons](https://docs.uaepass.ae/guidelines/design-guidelines/uaepass-button-guideline)
- [Ministère des Finances des Émirats : Federal Supplier Register](https://mof.gov.ae/en/public-finance/government-procurement/federal-supplier-register/)
