---
title: Amendes ZATCA sur la facture électronique : la liste officielle
summary: Dès 5 000 SAR pour une facture électronique non émise, dès 10 000 SAR pour une facture modifiée, un avertissement d'abord dans trois cas. Ce que dit la ZATCA.
tags: ZATCA, facturation électronique, amendes, FATOORA, TVA, Arabie saoudite
alt: Un amas de tickets thermiques enroulés, empilés les uns sur les autres
caption: Chaque ticket est une facture : ne pas l’émettre ou la modifier après coup entraîne une amende fixée.
stats: 5 000 SAR|amende de départ prévue par la liste publiée de la ZATCA pour des factures électroniques non émises; 10 000 SAR|amende de départ pour la suppression ou la modification d'une facture électronique après émission; 31 déc. 2026|fin de l'actuelle initiative d'annulation des amendes, dont l'annonce ne mentionne pas la facturation électronique
---

La liste des amendes liées à la facturation électronique publiée par la ZATCA prévoit une amende à partir de 5 000 SAR lorsque des factures électroniques ne sont pas émises, et à partir de 10 000 SAR lorsqu'une facture électronique est supprimée ou modifiée après son émission. L'absence de code QR sur une facture fiscale simplifiée, l'absence du numéro de TVA de l'acheteur sur une facture fiscale ou le fait de ne pas signaler à la ZATCA une panne qui empêche d'émettre des factures électroniques donnent d'abord lieu à un avertissement ; toutes les amendes s'appliquent selon le type d'infraction et le nombre de répétitions. La plupart de ces infractions découlent de la conception même du système de facturation : vous pouvez donc les repérer et les corriger avant qu'un contrôle ne le fasse.

Dernière vérification : 6 novembre 2026

Il s'agit d'informations générales, et non d'un conseil fiscal ou juridique. Pour votre situation, adressez-vous à la ZATCA ou à un conseiller fiscal en Arabie saoudite.

## Ce que dit la liste publiée par la ZATCA

La ZATCA (l'Autorité de la zakat, des impôts et des douanes, anciennement GAZT, General Authority of Zakat and Tax) a publié les infractions et amendes liées à la facturation électronique le 16 novembre 2021, peu avant l'entrée en vigueur de la phase 1, le 4 décembre 2021. Nous n'avons trouvé aucun barème consolidé plus récent sur le site de la ZATCA : c'est donc toujours la liste de référence.

| Infraction | Ce que prévoit la liste de la ZATCA |
|---|---|
| Ne pas émettre de factures électroniques | Amende à partir de 5 000 SAR |
| Supprimer ou modifier une facture électronique après émission | Amende à partir de 10 000 SAR |
| Facture fiscale simplifiée sans code QR | Avertissement d'abord |
| Facture fiscale sans le numéro de TVA de l'acheteur | Avertissement d'abord |
| Ne pas signaler à la ZATCA une panne qui empêche d'émettre des factures électroniques | Avertissement d'abord |
| Toutes les infractions | Amendes selon le type d'infraction et le nombre de répétitions |

Deux points méritent attention. D'abord, les deux montants sont des montants de départ pour les actes les plus graves : ne produire aucune facture électronique, et modifier une facture après coup. Selon la liste, ces infractions « commencent » par ces amendes : une récidive peut donc coûter plus cher. Ensuite, les points « avertissement d'abord » ne sont pas sans conséquence. La liste applique toutes les amendes selon le type d'infraction et le nombre de répétitions : l'avertissement est une première étape, pas la fin de l'affaire.

## Existe-t-il une amende pour une date d'intégration manquée ?

Beaucoup de chefs d'entreprise saoudiens cherchent la pénalité prévue lorsque leur système n'est pas relié à FATOORA à la date de leur vague. La liste de 2021 ne prévoit pas de montant distinct pour cela. Elle énumère des infractions, pas des échéances.

En pratique, une entreprise qui manque sa date de phase 2 continue d'émettre ses factures depuis un système qui ne respecte pas les règles de la phase 2. Savoir si une facture donnée compte alors comme « non émise » ou comme une autre infraction relève de la ZATCA, pas d'un éditeur de logiciels. Ce qui est clair, c'est que manquer la date ne supprime pas l'obligation, et que la ZATCA annonce chaque vague au moins six mois à l'avance : « nous ne savions pas » est donc une position fragile. La vague 25, pour un chiffre d'affaires soumis à la TVA supérieur à 187 500 SAR au cours de n'importe quelle année de 2022 à 2025, doit être intégrée au plus tard le 1er février 2027. Nous détaillons qui est concerné dans [Vague 25 de la ZATCA : qui doit s'intégrer avant le 1er février 2027](/blog/zatca-wave-25-e-invoicing).

## Quelle conception du système déclenche quelle infraction

Presque chaque point de la liste renvoie à un choix de conception dans le logiciel de caisse ou de comptabilité. C'est la partie utile : vous pouvez tester chacun d'eux dès aujourd'hui.

### Ne pas émettre de facture électronique

- **Carnets papier aux heures de pointe.** Si les caissiers passent à un carnet de factures manuscrit ou pré-imprimé quand la file s'allonge, ces ventes n'ont pas de facture électronique. La ZATCA précise qu'une facture papier numérisée ou copiée n'est pas une facture électronique.
- **Ventes enregistrées hors du système.** Les livraisons, commandes téléphoniques ou ventes en succursale notées dans un tableur et saisies « plus tard » sont des factures qui n'ont jamais été émises électroniquement.
- **Pas de mode hors ligne.** Un système qui cesse de facturer quand Internet tombe renvoie le personnel au papier. Les factures simplifiées (en général B2C) sont déclarées dans les 24 heures : un système peut donc continuer de les émettre hors ligne et les déclarer ensuite. Les factures fiscales sont différentes en phase 2 : elles doivent être validées avant d'être remises à l'acheteur. Le système doit donc prévoir une procédure claire pour les ventes B2B pendant une coupure.

### Supprimer ou modifier une facture après émission

C'est l'infraction assortie de la plus forte amende de départ de la liste, et celle que les anciens systèmes intègrent le plus souvent sans le vouloir.

- **Un bouton « modifier la facture » ou « supprimer la facture ».** Une fois émise, une facture ne doit plus changer. Un prix erroné se corrige par un avoir ou une note de débit liés à la facture d'origine, pas en la modifiant.
- **« Annuler et réémettre » en écrasant l'original.** L'annulation d'une vente doit laisser la première facture en place, avec une pièce qui l'annule.
- **Compteurs et dates modifiables.** Les lignes directrices détaillées de la ZATCA indiquent que le compteur de factures ne peut pas être remis à zéro, que les utilisateurs ne peuvent pas changer la date du système, et que le XML stocké ne peut être ni modifié ni supprimé.
- **Accès du personnel à la base de données.** Si quelqu'un peut ouvrir la base et changer une ligne, le système ne peut pas prouver que cela n'a pas eu lieu.

### Code QR manquant

Le point de la liste sur le code QR vise la facture fiscale simplifiée, en général le ticket remis aux particuliers. Le code QR disparaît généralement dans le modèle d'impression, pas dans la logique de facturation. Causes fréquentes : une nouvelle imprimante de tickets avec une autre largeur de papier, un modèle créé pour une promotion, ou un export PDF qui perd l'image. Imprimez une facture test depuis chaque imprimante et chaque modèle utilisés.

### Numéro de TVA de l'acheteur manquant

Une facture fiscale adressée à une entreprise immatriculée à la TVA doit porter le numéro de TVA de l'acheteur. Les systèmes qui laissent un caissier émettre une facture fiscale avec ce champ vide, ou qui conservent des fiches clients sans ce champ, produisent cette infraction à chaque vente B2B pressée. La solution : un champ obligatoire avec contrôle du format, et une fiche client qui l'enregistre une fois pour toutes.

### Ne pas signaler une panne

Si une panne empêche d'émettre des factures électroniques, la liste considère comme une infraction le fait de ne pas en informer la ZATCA. Il faut pour cela une personne, pas seulement un logiciel : quelqu'un qui sait que le système est arrêté, note le début et la fin de la panne, et la signale à la ZATCA. Un système qui journalise ses interruptions avec horodatage facilite beaucoup la tâche.

## Ce qu'ajoute la phase 2

La phase 2 (intégration) a débuté le 1er janvier 2023 et se déploie par vagues. La liste des amendes lui est antérieure, mais la phase 2 change la façon dont les factures sont produites. Chaque règle ferme certaines des failles ci-dessus tout en ajoutant de nouveaux points de défaillance :

- **Enregistrement.** Les factures doivent provenir d'une E-Invoice Generation Solution (EGS) enregistrée, chaque unité ayant son propre Cryptographic Stamp Identifier (CSID) délivré par le portail FATOORA.
- **Validation (clearance) des factures fiscales.** En général B2B. La ZATCA valide et cachette la facture, qui doit être validée avant d'être remise à l'acheteur. Un système qui remet à l'acheteur une facture non validée présente un défaut de conception.
- **Déclaration des factures simplifiées.** En général B2C. L'EGS cachette le XML, ajoute un code QR de phase 2 et doit déclarer le XML à FATOORA dans les 24 heures. Une file d'attente hors ligne qui ne se vide jamais est une panne silencieuse.
- **Protection contre la falsification.** Chaque facture porte un UUID et l'empreinte (hash) de la facture précédente, formant une chaîne par unité EGS. Modifier ou supprimer une facture rompt la chaîne, ce que vise précisément le poste à 10 000 SAR.
- **Arabe.** La facture lisible doit être en arabe ; d'autres langues peuvent être ajoutées.

Pour l'aspect technique de l'intégration d'une caisse ou d'un ERP sur mesure, lisez [Phase 2 de la ZATCA : intégrer une caisse ou un ERP sur mesure](/blog/zatca-phase-2-integration-custom-pos-erp).

## L'initiative d'annulation des amendes et la facturation électronique

La ZATCA mène une initiative d'annulation des amendes pour les contribuables. Le 29 juin 2026, elle l'a prolongée jusqu'au 31 décembre 2026, et l'annonce précise qu'elle ne couvre pas les déclarations dues après le 30 juin 2026.

Le détail qui compte : la version d'août 2025 citait expressément les amendes du contrôle de terrain de la TVA liées à l'application des règles de facturation électronique. L'annonce de juin 2026 ne mentionne pas du tout la facturation électronique. Il peut s'agir d'un choix de rédaction ou d'un changement de périmètre, et le texte ne permet pas de trancher. Ne partez pas du principe qu'une amende liée à la facturation électronique sera annulée. Si vous en avez une, lisez l'annonce en vigueur et vérifiez auprès de la ZATCA avant le 31 décembre 2026.

## Une liste de contrôle à passer sur votre système ce mois-ci

1. Émettez une facture test, puis essayez de la modifier, de la supprimer et de l'annuler. Chaque tentative doit être bloquée ou produire un avoir lié.
2. Essayez de changer la date du système et de remettre à zéro le compteur de factures, depuis un compte caissier puis depuis un compte responsable.
3. Imprimez une facture depuis chaque imprimante et chaque modèle, et vérifiez le code QR et le texte arabe sur chacune.
4. Émettez une facture fiscale à un client professionnel avec le numéro de TVA vide. Le système doit refuser.
5. Coupez Internet, enregistrez trois ventes au comptant sur factures simplifiées, reconnectez-vous et vérifiez qu'elles ont été émises puis déclarées dans les 24 heures.
6. Désignez qui, dans l'entreprise, signalera une panne à la ZATCA, et où se trouve le journal des interruptions.
7. Comptez combien de ventes ont été enregistrées hors du système le mois dernier. L'objectif est zéro.

Si vous ne pouvez pas faire ces tests vous-même, demandez à votre fournisseur de logiciel de les faire devant vous. Méfiez-vous d'un fournisseur qui répond par un label : la ZATCA ne certifie aucun logiciel, et son annuaire des fournisseurs de solutions précise qu'il ne vaut pas approbation. Un périmètre clair et une séance de test honnête comptent davantage, la même leçon que dans [Pourquoi les projets logiciels échouent](/blog/why-software-projects-fail).

## Ce que fait KF Tech Solutions

Nous développons des systèmes de caisse et de gestion sur mesure, et nous avons relié un système de caisse au système de reçus électroniques ETA en Égypte, comme décrit dans [Relier votre caisse à la facturation électronique ETA en Égypte](/blog/eta-e-invoicing-pos-integration). Pour une entreprise saoudienne, nous pouvons examiner la façon dont votre système actuel émet, corrige et conserve les factures au regard des points ci-dessus, puis construire ou réparer ce qui manque : avoirs et notes de débit, enregistrements verrouillés, champs obligatoires, modèles d'impression et files d'attente hors ligne. Nous travaillons avec des entreprises en Égypte et dans le Golfe. Pour en savoir plus : notre [service de systèmes de gestion](/services/business-systems) et notre [travail pour l'Arabie saoudite](/saudi-arabia).

## Questions fréquentes

### Quel est le montant de l'amende pour une facture électronique non émise ?

D'après la liste publiée par la ZATCA, l'infraction de non-émission de factures électroniques commence par une amende de 5 000 SAR, et toutes les amendes s'appliquent selon le type d'infraction et le nombre de répétitions. Une entreprise qui récidive ne doit donc pas s'attendre à en rester à 5 000 SAR.

### Modifier une facture est-il vraiment plus grave que ne pas l'émettre ?

Selon la liste de la ZATCA, oui. Supprimer ou modifier une facture électronique après émission est sanctionné par une amende à partir de 10 000 SAR, soit le double de l'amende de départ pour non-émission. La bonne façon de corriger une erreur est un avoir ou une note de débit.

### Serai-je sanctionné immédiatement pour un code QR manquant ?

D'après la liste publiée, l'absence de code QR sur une facture fiscale simplifiée, l'absence du numéro de TVA de l'acheteur et une panne non signalée donnent d'abord lieu à un avertissement. Ensuite, les amendes s'appliquent selon le type d'infraction et le nombre de répétitions.

### L'initiative d'annulation des amendes couvre-t-elle la facturation électronique ?

La version d'août 2025 la couvrait expressément. L'annonce actuelle, qui prolonge l'initiative jusqu'au 31 décembre 2026, ne mentionne pas la facturation électronique. Vérifiez auprès de la ZATCA avant de compter dessus.

### Existe-t-il une liste officielle de logiciels de facturation approuvés ?

Non. La ZATCA ne certifie aucun logiciel, et son annuaire des fournisseurs de solutions est une liste indicative, sans valeur juridique contraignante et sans valeur d'approbation. Toute solution conforme aux exigences peut être utilisée.

> Si vous souhaitez faire tester votre système de facturation au regard de cette liste avant qu'un contrôleur ne le fasse, [réservez un appel gratuit](/book) ou [écrivez-nous](/contact).

## Sources

- [ZATCA : infractions et amendes liées à la facturation électronique, 16 novembre 2021](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
- [ZATCA : initiative d'annulation des amendes prolongée jusqu'au 31 décembre 2026](https://zatca.gov.sa/en/MediaCenter/News/Pages/Cancellation-of-fines-Dec-2026.aspx)
- [ZATCA : initiative d'annulation des amendes, prolongation d'août 2025](https://zatca.gov.sa/en/MediaCenter/News/Pages/benefit-fine-waiver-2025.aspx)
- [ZATCA : qu'est-ce que la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA : phases de déploiement de la facturation électronique](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA : E-Invoicing Detailed Guidelines](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA : critères de la vague 25 de la phase d'intégration, 24 juillet 2026](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA : annuaire des fournisseurs de solutions de facturation électronique](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
