---
title: Créer une plateforme de télémédecine en Égypte
summary: Ce qu'il faut à une plateforme de consultations en ligne en Égypte : réservation, vidéo, paiements, contrôle des praticiens et données de santé.
tags: télémédecine, consultations en ligne, application santé, séances vidéo, données patients, Égypte
alt: Une médecin en blouse blanche mène une téléconsultation avec une patiente sur un ordinateur portable
caption: La séance vidéo n’est que la partie visible ; réservation, paiement, vérification des praticiens et confidentialité portent la plateforme.
stats: 4|éléments de toute consultation en ligne : réservation, vidéo, paiement, notes; 2|voies d'autorisation sur le portail du PDPC : personne morale ou profession libérale; 151|de 2020 : le numéro de la loi égyptienne sur la protection des données personnelles
---

Une plateforme de télémédecine en Égypte, ce sont quatre systèmes qui fonctionnent comme un seul : un agenda de réservation pour chaque praticien, une séance vidéo qui tient sur les données mobiles, un parcours de paiement qui gère les remboursements et les absences, et un dossier patient que seules les bonnes personnes peuvent ouvrir. La vidéo est généralement la partie la plus simple. L'essentiel du travail porte sur la vérification des praticiens, les règles de rendez-vous et la protection des données de santé, désormais encadrée par la loi égyptienne n° 151 de 2020 sur la protection des données personnelles et son règlement d'application.

Dernière vérification : 6 novembre 2026

## Commencez par la consultation, pas par l'application

Avant de choisir des fonctionnalités, décrivez le déroulement d'une consultation du début à la fin. Qui la réserve ? S'agit-il d'une première visite ou d'un suivi ? Le praticien a-t-il besoin de notes antérieures ou de résultats d'analyses ? Que se passe-t-il après l'appel : une ordonnance, une orientation, une deuxième séance ?

Les réponses déterminent ce que vous construisez. Les séances de santé mentale sont longues et récurrentes ; les consultations générales sont courtes et exigent un moyen d'orienter le patient vers une clinique.

| Élément | Première version | Peut attendre |
|---|---|---|
| Réservation | Profils des praticiens, créneaux libres, rappels | Listes d'attente, forfaits de séances |
| Vidéo | Appels dans l'application ou le navigateur, bascule vers l'audio | Séances de groupe, partage d'écran |
| Paiement | Paiement avant la séance, remboursements automatiques | Solde de portefeuille, abonnements |
| Dossiers | Notes de séance, fichiers envoyés par le patient | Liaison avec laboratoires et pharmacies |
| Administration | Validation des praticiens, suivi des réservations | Rapports détaillés, versements par praticien |

Une première version limitée à la colonne du milieu est déjà un vrai produit. Si vous testez la demande, notre guide pour [commencer petit avec un MVP](/blog/mobile-app-mvp-egypt) explique comment réduire le périmètre sans réduire la qualité.

## La réservation et l'agenda du praticien

Chaque praticien fixe ses horaires, la durée des séances et ses pauses, et la plateforme ne montre aux patients que les créneaux libres. Prévoyez dès le départ les règles qui posent problème plus tard : combien de temps à l'avance un patient peut réserver, jusqu'à quand il peut annuler, et ce qui se passe quand un praticien tombe malade et que dix séances doivent être déplacées.

Les rappels comptent plus que la plupart des fonctionnalités : un à la réservation, un la veille et un peu avant la séance. Si le praticien reçoit aussi en cabinet, l'agenda en ligne et celui de la clinique doivent être le même agenda, sinon les doubles réservations suivent. Notre article sur [les logiciels de gestion de clinique en Égypte](/blog/clinic-management-system-egypt) couvre le volet présentiel.

## Des séances vidéo adaptées aux connexions égyptiennes

La plupart des plateformes ne développent pas la vidéo elles-mêmes. Elles utilisent WebRTC, la norme derrière les appels vidéo dans le navigateur, généralement via un fournisseur vidéo géré. Ce que vous construisez autour compte davantage :

- Une vérification de la caméra, du micro et de la connexion avant l'appel.
- Une bascule automatique vers l'audio quand la connexion faiblit, pour que la séance continue.
- Une salle d'attente, pour que le patient n'entre pas pendant que le praticien est encore avec quelqu'un d'autre.
- Un lien de séance valable uniquement pour ce patient, à ce créneau.
- Pas d'enregistrement par défaut. Si vous enregistrez un jour, demandez d'abord un consentement clair et traitez le fichier comme une partie du dossier médical.

Testez sur des téléphones Android de milieu de gamme avec des données mobiles, pas seulement sur le Wi-Fi du bureau. C'est ainsi que la plupart des patients se connecteront.

## Paiements, remboursements et absences

Les patients paient généralement avant la séance, par carte ou portefeuille mobile, et la plateforme ne confirme la réservation qu'après la réussite du paiement. Écrivez les règles de remboursement avant le code : remboursement total si le praticien annule, partiel si le patient annule tardivement, aucun en cas d'absence, chaque cas étant appliqué automatiquement.

Si les praticiens sont payés à la séance, la plateforme doit tenir un relevé clair de ce que chacun a gagné, déduction faite de la part de la plateforme. Notre comparatif des [passerelles de paiement en Égypte](/blog/payment-gateways-egypt) présente les moyens de paiement locaux et ce qu'implique l'intégration de chaque passerelle.

## Vérifier les praticiens avant leur mise en ligne

Les patients font confiance à la plateforme, pas au profil individuel : chaque praticien doit donc être vérifié avant sa première séance. Demandez son autorisation d'exercer ou son inscription au syndicat professionnel, sa spécialité et ses pièces d'identité, et notez qui a vérifié et à quelle date. Programmez un rappel pour les documents qui expirent.

Gardez cette vérification dans l'espace d'administration, pas dans un fil d'e-mails, et ne donnez à chaque praticien accès qu'aux dossiers de ses propres patients.

## Les données de santé et la loi 151/2020

Les informations de santé comptent parmi les données les plus sensibles qu'une entreprise puisse détenir, et une plateforme de télémédecine en détient beaucoup. La loi égyptienne n° 151 de 2020 sur la protection des données personnelles encadre la collecte, le traitement et le stockage des données personnelles, et le ministère des Communications et des Technologies de l'information a indiqué qu'elle oblige ceux qui collectent et traitent des données à obtenir les licences, permis et autorisations nécessaires.

Le Personal Data Protection Center (PDPC) gère désormais un portail qui propose un permis ou une licence pour les personnes morales et un permis distinct pour les professions libérales, avec un questionnaire qui détermine vos obligations au titre de la loi. Son site indique aussi que le règlement d'application de la loi a été publié. Une société qui exploite une plateforme et un médecin indépendant peuvent donc avoir des démarches différentes : vérifiez votre situation tôt.

Sur le plan technique, prévoyez dès la première version :

- Des écrans de consentement qui disent clairement ce que vous collectez et pourquoi, avec une trace enregistrée de chaque consentement.
- Le chiffrement en transit et au repos, et des accès par rôle pour que chacun ne voie que ce dont son travail a besoin.
- Un journal d'accès indiquant qui a ouvert quel dossier et quand.
- Un moyen d'exporter ou de supprimer les données d'un patient à sa demande.
- Une procédure écrite en cas de fuite de données : qui décide, qui est prévenu et dans quels délais.

Il s'agit d'informations générales, pas d'un conseil juridique. Demandez à un avocat quelles obligations s'appliquent à votre service, y compris d'éventuelles règles propres au secteur de la santé au-delà de la loi sur les données. Notre article sur [la loi égyptienne sur la protection des données pour les applications](/blog/egypt-data-protection-law-apps) détaille la liste de contrôle.

## Comment KF Tech Solutions vous aide

Nous avons construit Horus, une plateforme pour une clinique de santé mentale à plusieurs succursales, qui relie les patients à des thérapeutes agréés : les patients trouvent un médecin, réservent une séance en ligne ou sur place et restent en contact pour le suivi, et la clinique présente ses succursales, ses médecins et ses services sur un seul site. Elle est en production, construite avec Next.js et React. Avec notre [service de développement d'applications mobiles](/services/mobile-applications), nous concevons et construisons des plateformes de consultation comme celle-ci, des règles de réservation à l'espace d'administration et à l'application elle-même.

## Questions fréquentes

### Ai-je besoin d'une application mobile, ou un site suffit-il ?

Une application web qui fonctionne dans le navigateur du téléphone suffit pour commencer, et elle vous permet de tester la demande à moindre coût. Les applications natives iOS et Android se justifient lorsque les patients réservent régulièrement, car elles facilitent les rappels push et une vidéo plus fluide.

### Faut-il enregistrer les séances vidéo ?

En général, non. Les enregistrements ajoutent des risques et des coûts de stockage. Si vous enregistrez, demandez d'abord un consentement clair et protégez le fichier comme toute autre partie du dossier médical.

### Comment empêcher des personnes non qualifiées de proposer des séances ?

Validez manuellement chaque praticien avant que son profil soit visible, conservez ses documents et la date de validation dans l'espace d'administration, et prévenez votre équipe avant l'expiration de tout document.

### La loi 151/2020 s'applique-t-elle à une petite plateforme ?

La loi encadre le traitement des données personnelles de manière générale, et le portail du PDPC propose des permis aussi bien aux entreprises qu'aux professionnels indépendants. Utilisez le questionnaire du PDPC et demandez à un avocat de confirmer ce qui s'applique à votre cas.

Vous préparez un service de consultations médicales en ligne en Égypte ? [Décrivez-nous le déroulement de vos consultations](/contact) ou [réservez un appel gratuit](/book), et nous vous aiderons à définir ce dont la première version a besoin.

## Sources

- [Personal Data Protection Center (PDPC), Égypte](https://pdpc.gov.eg/home)
- [Communiqué du MCIT sur la loi n° 151 de 2020](https://mcit.gov.eg/en/Media_Center/Press_Room/Press_Releases/63220)
