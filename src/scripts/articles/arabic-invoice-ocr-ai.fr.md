---
title: Lire les factures et reçus arabes avec l'IA
summary: Comment l'OCR et l'IA extraient le fournisseur, la TVA et les totaux des factures arabes, comment vérifier chaque chiffre et l'envoyer en comptabilité.
tags: IA, OCR, factures arabes, extraction de données, comptabilité, CCG, Égypte
alt: Une main remplit un formulaire papier au stylo plume, à côté d’une calculatrice et de billets de banque
caption: Chaque facture papier doit encore être saisie à la main, sauf si un logiciel la lit et vérifie d’abord les totaux.
stats: 3|totaux à rapprocher sur chaque facture : lignes, TVA, total général; 15 %|taux normal de TVA en Arabie saoudite, un contrôle utile; 0|facture qui devrait atteindre la comptabilité après un contrôle échoué
---

Oui, l'IA peut lire les factures et reçus arabes avec une fiabilité suffisante
pour le travail quotidien, mais pas avec un simple bouton « scanner et c'est
fini ». Elle fonctionne comme une chaîne : l'OCR transforme l'image en texte, un
modèle d'IA remplit les champs, des contrôles arithmétiques simples vérifient les
totaux et la TVA, et une personne examine tout ce qui échoue avant que quoi que
ce soit n'atteigne votre logiciel comptable.

Les factures imprimées et nettes passent généralement sans difficulté. Les reçus
thermiques délavés, les photos de téléphone de travers et l'écriture manuscrite
sont les endroits où les erreurs apparaissent.

## OCR et extraction par IA : deux tâches différentes

**L'OCR** (reconnaissance optique de caractères) convertit une image ou un PDF en
texte. Elle ne sait pas quel nombre est le total et lequel est un numéro de
téléphone.

**L'extraction par IA** lit ce texte, souvent avec la mise en page, et renvoie
des champs structurés : fournisseur, numéro de facture, date, lignes, montant
hors taxes, TVA et total. Beaucoup d'outils font les deux en une seule étape,
mais les corrections diffèrent quand quelque chose se passe mal.

Les documents arabes ajoutent des difficultés propres :

- **Des lettres liées et des lignes de droite à gauche**, qui mélangent souvent l'arabe et l'anglais sur la même ligne.
- **Deux systèmes de chiffres.** Certaines factures impriment des chiffres arabes orientaux (٠١٢٣), d'autres des chiffres occidentaux, certaines les deux.
- **Des séparateurs décimaux et de milliers** qui varient selon le fournisseur, dont le séparateur décimal arabe (٫).
- **Des dates hégiriennes et grégoriennes**, parfois les deux sur une même facture.
- **Le même fournisseur écrit de plusieurs façons**, avec ou sans « شركة » ou « مؤسسة » au début.

## La chaîne, étape par étape

1. **Réception.** Les factures arrivent en PDF par e-mail, en photo sur WhatsApp ou en scan depuis le copieur du bureau.
2. **Nettoyage de l'image.** Redresser, recadrer et améliorer le contraste avant la lecture, surtout pour les photos de téléphone.
3. **Lecture et extraction.** L'OCR et un modèle d'IA renvoient les champs avec un score de confiance pour chacun.
4. **Validation.** Des règles arithmétiques et métier vérifient le résultat (voir plus bas).
5. **Revue.** Tout ce qui enfreint une règle ou présente une faible confiance va à une personne.
6. **Export.** Les factures approuvées sont enregistrées en brouillon dans votre logiciel comptable ou votre ERP, avec l'image d'origine en pièce jointe.

### Ce qu’il faut extraire, et où cela se passe mal

| Champ | Pourquoi il compte | Problème typique des documents arabes |
|---|---|---|
| Nom du fournisseur | Rapprochement avec votre liste de fournisseurs | Même société écrite différemment |
| Numéro d'immatriculation fiscale | Identifier le fournisseur et récupérer la TVA | Chiffres arabes orientaux mal lus |
| Numéro et date de facture | Doublons et bonne période | Dates hégiriennes, jour et mois inversés |
| Lignes | Coûts, stock et bons de commande | Descriptions sur plusieurs lignes et en deux langues |
| Hors taxes, TVA, total | Les montants que vous enregistrez | Séparateurs lus comme des chiffres |
| Devise | Bonne écriture et bonne conversion | ر.س, SAR, ج.م et $ sur des mises en page proches |

## Vérifier chaque chiffre avant de s'y fier

L'extraction par IA peut renvoyer un nombre faux avec beaucoup d'assurance. Des
contrôles arithmétiques simples détectent la plupart de ces erreurs sans aucune
IA :

- **Chaque ligne :** quantité × prix unitaire = montant de la ligne.
- **Les lignes :** la somme des lignes est égale au montant hors taxes.
- **La facture :** hors taxes + TVA = total.
- **Le taux :** la TVA divisée par le montant hors taxes doit correspondre au taux applicable. Le taux normal est de 15 % en Arabie saoudite et de 5 % aux Émirats arabes unis ; les lignes à taux zéro ou exonérées demandent leur propre règle.
- **Prix TTC :** pour un prix aux Émirats qui inclut déjà 5 % de TVA, la part de TVA est le prix divisé par 21, comme l'explique le guide de la Federal Tax Authority.
- **Doublons :** le même fournisseur avec le même numéro de facture ne doit jamais être enregistré deux fois.
- **Le fournisseur :** le numéro d'immatriculation doit correspondre à un fournisseur que vous connaissez déjà.

Les factures fiscales simplifiées en Arabie saoudite portent un QR code qui,
selon la ZATCA, contient le nom du vendeur, son numéro d'immatriculation à la
TVA, l'horodatage de la facture, le total TTC et le montant de la TVA. Lire
d'abord le QR code et le comparer au résultat de l'OCR est un contrôle solide. Si
un fournisseur peut envoyer le fichier structuré de facture électronique au lieu
d'un PDF, utilisez-le et passez entièrement l'OCR pour ces factures.

Il s'agit d'informations générales, pas d'un conseil fiscal. Votre comptable doit
confirmer les taux et les règles qui s'appliquent à vos achats.

## La file de revue humaine

C'est dans la file de revue que le système gagne la confiance de votre équipe.
Une bonne file :

- Affiche l'image de la facture à côté des champs extraits, en surlignant le champ douteux.
- Explique pourquoi la facture s'y trouve, par exemple « la TVA ne correspond pas à 15 % » ou « doublon possible ».
- Permet de corriger un champ en un clic et enregistre qui a modifié quoi.
- Garde les factures en échec hors de la comptabilité jusqu'à ce que quelqu'un les approuve.

Si le même fournisseur échoue chaque semaine, ajoutez une règle pour ce
fournisseur plutôt que de le corriger à la main indéfiniment.

## Mesurer la précision honnêtement

Un seul chiffre comme « 98 % de précision » annoncé par un éditeur vous apprend
peu de chose. Constituez un jeu de test avec de vraies factures de vos propres
fournisseurs, y compris les mauvaises photos, et mesurez :

- **La précision par champ** sur les champs que vous enregistrez : fournisseur, date, numéro de facture, TVA et total.
- **Le taux de traitement direct :** la part des factures qui passent tous les contrôles sans correction.
- **Le temps de revue** par facture qui demande une intervention humaine.
- **Les erreurs passées au travers :** tout ce qui est arrivé faux en comptabilité, qui devrait être nul.

Mesurez de nouveau quand vous ajoutez des fournisseurs ou changez de modèle. La
précision dépend de vos documents, pas seulement du logiciel.

## Envoyer le résultat en comptabilité ou dans un ERP

L'extraction n'est utile que si les données arrivent au bon endroit. Associez
chaque fournisseur à sa fiche, chaque ligne à un compte ou à un article, et
enregistrez les factures en brouillon pour que l'équipe financière garde le
dernier mot. La connexion passe généralement par l'API du logiciel comptable ou
par un fichier d'import planifié ; notre guide sur
[la connexion des systèmes que vous utilisez déjà](/blog/api-integration-connecting-business-systems)
présente les options. Si vous travaillez avec des bons de commande, rapprochez la
facture de la commande et de la réception avant d'approuver le paiement.

Les factures contiennent aussi des numéros fiscaux et des coordonnées bancaires.
Avant de choisir un outil, demandez où les documents sont traités, combien de
temps ils sont conservés et qui peut les consulter.

## Ce que fait KF Tech Solutions

Nous concevons des [solutions d'IA](/services/ai-solutions) et le logiciel sur
mesure qui les entoure : des chaînes d'extraction de documents avec règles de
validation, un écran de revue dans un tableau de bord web, et l'intégration qui
enregistre les factures approuvées dans votre logiciel comptable ou votre ERP.
Nous travaillons avec des entreprises en Égypte et dans le Golfe. Si le sujet est
nouveau pour vous, commencez par
[un guide pratique pour intégrer l'IA à votre entreprise](/blog/a-practical-guide-to-adding-ai-to-your-business),
ou voyez comment la même approche permet à votre équipe
[d'interroger un assistant IA sur vos propres documents](/blog/ai-assistant-own-documents).

## Questions fréquentes

### L'IA peut-elle lire des factures arabes manuscrites ?

Parfois, mais pas assez fiablement pour les enregistrer sans revue. Traitez les
factures manuscrites comme « toujours à revoir » et mesurez-les à part.

### Faut-il encore quelqu'un de la finance pour vérifier ?

Oui, pour tout ce qui échoue à un contrôle. L'objectif est que les personnes
examinent les exceptions, pas chaque facture.

### Nos fournisseurs envoient des photos sur WhatsApp. Est-ce que cela fonctionne ?

Généralement, si la photo est nette et la facture entière dans le cadre. Nettoyer
l'image aide, et un court guide pour les fournisseurs aide encore davantage.

### À partir de combien de factures cela vaut-il la peine ?

Il n'y a pas de chiffre fixe. Comparez les heures que votre équipe passe chaque
mois à saisir des factures avec le coût de construction et d'exploitation de la
chaîne.

Si vous voulez voir comment cela fonctionnerait sur vos propres factures,
[réservez un appel gratuit](/book) ou [envoyez-nous quelques exemples](/contact),
et nous vous dirons ce qui peut être automatisé.

## Sources

- [ZATCA : Detailed Guidelines for E-Invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA : Guideline for Tax Invoicing and Records under VAT Provisions](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-for-Tax-Invoicing-and-Records-under-VAT-Provisions.pdf)
- [Federal Tax Authority (Émirats arabes unis) : VAT](https://tax.gov.ae/en/taxes/vat.aspx)
- [Federal Tax Authority (Émirats arabes unis) : Taxable Person Guide for VAT](https://tax.gov.ae/-/media/Files/EN/PDF/Guides/Taxable-Person-Guide-June-2018.pdf)
