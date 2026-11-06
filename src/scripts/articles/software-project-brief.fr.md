---
title: Rédiger un cahier des charges logiciel facile à chiffrer
summary: Un modèle d'une page pour votre cahier des charges : utilisateurs, processus, priorités, intégrations, données, critères de succès, et comment naît un devis.
tags: cahier des charges, expression des besoins, MoSCoW, devis forfaitaire, logiciel sur mesure, Égypte, pays du Golfe
alt: Maquettes de site web dessinées à la main sur papier, à côté d’un stylo orange
caption: Un cahier des charges chiffrable décrit utilisateurs et parcours ; de simples croquis en disent plus qu’une longue liste de fonctions.
stats: 1|page suffit pour un premier devis; 4|niveaux de priorité : indispensable, important, souhaitable, pas cette fois; 60 %|plafond habituel de l'effort indispensable selon le guide DSDM
---

Un cahier des charges logiciel que les prestataires peuvent chiffrer tient sur une page. Il indique qui utilisera le système, les principales tâches que ces personnes y effectueront, les fonctions indispensables et celles qui peuvent attendre, ce à quoi il doit se connecter, les données qu'il contient et la manière dont vous jugerez sa réussite. Il laisse le choix des technologies au prestataire.

La plupart des premiers cahiers des charges tiennent en une ligne (« nous voulons une application comme X ») ou s'étalent sur une liste de souhaits de quarante pages. Le premier attire des devis très éloignés les uns des autres, car chaque prestataire devine à sa façon. Le second attire des devis gonflés, car chaque prestataire chiffre le risque de chaque élément. Un document d'une page se situe entre les deux.

## À quoi sert un cahier des charges

Il a une seule fonction : permettre à plusieurs prestataires de chiffrer le même projet. Si deux prestataires lisent votre document et imaginent des systèmes différents, leurs devis ne sont pas comparables, et le moins cher l'est souvent parce qu'il a moins bien compris.

Ce n'est ni un contrat ni une spécification complète. La spécification détaillée vient généralement plus tard, rédigée avec le prestataire retenu pendant une phase de cadrage ou de conception. Le cahier des charges doit seulement être assez clair pour qu'un prestataire pose de bonnes questions et vous donne une fourchette, ou un prix fixe pour un périmètre bien compris.

## Le modèle d'une page

Reprenez cette structure dans un document et remplissez chaque ligne en langage simple.

| Rubrique | Ce que vous écrivez | Exemple |
|---|---|---|
| Contexte | L'entreprise et le problème, en deux ou trois phrases | Un distributeur avec trois entrepôts suit ses commandes dans des tableurs, et les chiffres de stock ne concordent jamais |
| Utilisateurs | Chaque type d'utilisateur et leur nombre approximatif | 12 commerciaux, 4 magasiniers, 2 responsables, environ 300 clients |
| Processus | Les tâches principales, en étapes courtes | Le commercial saisit la commande, l'entrepôt la prépare, le chauffeur livre, la facture est émise |
| Priorités | Indispensable, important, souhaitable, pas cette fois | Indispensable : commandes et stock. Souhaitable : une application client |
| Intégrations | Les systèmes avec lesquels il doit communiquer | Logiciel comptable, WhatsApp, une passerelle de paiement |
| Données | Ce qu'il stocke et ce qui est repris de l'existant | 2 000 articles et cinq ans de fiches clients sous Excel |
| Réussite | Comment vous saurez qu'il fonctionne | L'inventaire correspond aux rayons une semaine après le lancement |
| Contraintes | Échéance, fourchette de budget, langues, appareils | En service dans quatre mois, en arabe et en anglais, équipes sur smartphones Android |

## Utilisateurs et processus

Commencez par les utilisateurs, car chaque fonction appartient à quelqu'un. « Administrateur » ne suffit pas : précisez si les remises sont validées par le gérant, un responsable d'agence ou le comptable, car chaque rôle demande en général ses propres droits et écrans.

Décrivez ensuite chaque processus comme une courte suite d'étapes, dans l'ordre où il se déroule aujourd'hui. « Un client commande sur WhatsApp, le commercial saisit la commande, l'entrepôt confirme le stock, le chauffeur livre et encaisse en espèces » en dit plus à un prestataire qu'une liste d'écrans. Cela fait aussi apparaître les cas délicats : un article en rupture, un client qui paie la moitié, une commande annulée après préparation. Ajoutez ces exceptions en notes d'une ligne. C'est là que se cache l'essentiel de l'effort imprévu.

## Indispensable, important, souhaitable, pas cette fois

Répartissez les fonctions en quatre groupes. C'est la méthode MoSCoW, très utilisée dans les projets agiles :

- **Indispensable (Must have) :** sans elle, le système est inutilisable au lancement.
- **Important (Should have) :** compte, mais une solution de contournement existe pour les premières semaines.
- **Souhaitable (Could have) :** utile si le temps et le budget le permettent.
- **Pas cette fois (Won't have this time) :** exclu d'un commun accord pour l'instant.

Soyez strict avec la liste des indispensables. L'Agile Business Consortium, qui gère le cadre DSDM dont la méthode est issue, recommande de limiter l'effort indispensable à 60 % de l'effort total au plus dans la plupart des cas, afin que les éléments importants et souhaitables servent de marge lorsque les estimations se révèlent fausses. La liste « pas cette fois » compte aussi : elle évite que le périmètre ne revienne discrètement plus tard.

## Intégrations, données et réussite

**Les intégrations** sont la source la plus fréquente de coûts imprévus. Pour chacune, nommez le produit exact (pas « la comptabilité », mais quel logiciel), indiquez si les données circulent dans un sens ou dans les deux, et si l'échange doit être immédiat ou quotidien. Si vous savez que l'autre système n'a pas d'API, dites-le.

**Les données** couvrent ce que le système stocke et ce qui doit y être repris dès le premier jour. Un prestataire doit savoir s'il importe un tableau propre de 500 clients ou dix ans d'enregistrements issus d'un ancien système rempli de doublons.

**Les critères de réussite** rendent le document vérifiable par les deux parties. Choisissez-en deux ou trois que l'on peut observer : une commande saisie en moins d'une minute, une clôture mensuelle en un jour au lieu de quatre, plus aucun bon de livraison papier. Évitez « ergonomique » et « rapide » sans chiffre associé.

## Ce qu'il vaut mieux laisser de côté

Un bon cahier des charges décrit le problème, pas la solution. Laissez de côté :

- **Les langages, frameworks et bases de données**, sauf si votre propre équipe assurera la maintenance du code et les utilise déjà.
- **Les maquettes d'écran finalisées**, sauf si vous disposez d'une charte graphique. Un croquis d'un écran important aide ; les maquettes abouties sont généralement refaites.
- **Les listes de fonctions copiées de la brochure d'un concurrent.** La moitié ne correspondra pas à votre façon de travailler.
- **Tous les cas particuliers imaginables.** Notez les exceptions que vous rencontrez chaque semaine ; les plus rares se découvrent pendant le cadrage.

Ajoutez en revanche ce que vous seul savez : les obligations fiscales ou légales que vous respectez déjà, les langues nécessaires, les appareils réellement utilisés par vos équipes, et si elles travaillent avec une connexion internet faible.

## Comment un prestataire en tire un prix fixe

Un prestataire sérieux lit le document puis pose ses questions, le plus souvent lors d'un appel. À partir des réponses, il découpe chaque processus en écrans et en fonctions, estime chaque élément, puis ajoute les intégrations, la reprise des données, les tests et la mise en production. Une provision pour risque couvre ce qui reste flou.

Si le document est clair et le périmètre stable, on obtient un prix fixe accompagné d'un périmètre écrit. Si de grandes parties restent inconnues, un prestataire honnête proposera d'abord une phase de cadrage payante ou un contrat en régie. Notre guide [forfait ou régie](/blog/fixed-price-vs-time-and-materials) explique quand choisir l'un ou l'autre, et [ce que coûte réellement une application web](/blog/what-does-a-web-app-actually-cost-to-build) montre où va l'argent.

Comparez les devis sur la base du même document et demandez à chaque prestataire ce qui est exclu. Si vous n'êtes pas technicien, [comment choisir une entreprise de logiciels](/blog/how-to-choose-a-software-company) vous donne les bonnes questions, et [pourquoi les projets logiciels échouent](/blog/why-software-projects-fail) présente les erreurs qu'un document clair évite.

Chez KF Tech Solutions, nous développons des [logiciels sur mesure](/services/custom-software) et nous travaillons avec des entreprises en Égypte et dans le Golfe. Lors d'un appel, nous examinons votre document avec vous et posons des questions sur tout ce qu'il laisse ouvert. Les projets démarrent à 200 $ (environ 750 SAR / 735 AED) ; le prix final dépend du périmètre, avec un devis écrit et fixe après un appel gratuit.

## Questions fréquentes

### Quelle longueur pour un cahier des charges logiciel ?

Une à deux pages pour un premier devis. À ce stade, un document plus long apporte rarement plus de clarté, mais souvent des solutions que personne n'a testées. Joignez plutôt des exemples : une facture type, votre tableur actuel, une capture d'écran de l'outil que vous utilisez aujourd'hui.

### Faut-il communiquer mon budget ?

Une fourchette aide. Elle indique aux prestataires s'il faut proposer une première version simple ou un système plus complet, et fait gagner du temps aux deux parties. Un devis qui tombe exactement sur le haut de votre fourchette mérite quelques questions supplémentaires.

### Et si mes besoins changent après le devis ?

C'est généralement le cas. Prévoyez dans le contrat comment les modifications sont demandées, chiffrées et validées avant que le travail ne commence. Une liste « pas cette fois » claire facilite beaucoup ces discussions.

### Un prestataire peut-il m'aider à le rédiger ?

Oui, et beaucoup le font dès le premier appel. Rédigez quand même votre propre brouillon d'abord, pour que le périmètre reflète votre façon de travailler plutôt que ce que le prestataire trouve le plus simple à construire.

Vous avez un brouillon, ou seulement un problème à décrire ? [Envoyez-le-nous](/contact) ou [réservez un appel gratuit](/book), et nous l'examinerons avec vous.

## Sources

- [Priorisation MoSCoW, DSDM Project Framework, Agile Business Consortium](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)
