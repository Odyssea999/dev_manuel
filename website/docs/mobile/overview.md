---
id: overview
title: Aperçu
---

# Aperçu

Bienvenue dans la documentation de l'application mobile de votre projet de voyage. Cette section couvre les aspects fondamentaux et les fonctionnalités principales de l'application Flutter.

## Introduction

L'application mobile est développée en utilisant [Flutter](https://flutter.dev/), un framework open-source de développement d'applications mobiles créé par Google. Flutter permet de créer des applications nativement compilées pour mobile, web et desktop à partir d'une seule base de code.

## Technologies Utilisées

### Flutter

Flutter est le framework principal utilisé pour le développement de l'application mobile. Il utilise le langage Dart et fournit une riche collection de widgets personnalisables pour créer des interfaces utilisateur modernes et réactives.

### Firebase

L'application utilise [Firebase](https://firebase.google.com/) pour plusieurs services backend, y compris :

- **Authentication:** Gestion des utilisateurs et des connexions.
- **Firebase Cloud Messaging (FCM):** Envoi de notifications push aux utilisateurs pour divers événements.

### API Interne

L'application mobile communique avec une api développé en interne pour la gestion des voayges, des utilisateurs ...

### Gestion d'état avec Cubit

Pour la gestion de l'état, l'application utilise [Cubit](https://pub.dev/packages/flutter_cubit), une solution légère pour la gestion d'état basée sur [Bloc](https://bloclibrary.dev/#/). Cubit permet de gérer facilement l'état de l'application de manière réactive et prévisible.

## Architecture

L'application Flutter suit une architecture basée sur les principes de séparation des préoccupations, ce qui la rend maintenable et évolutive. Voici les principaux composants architecturaux :

- **Couche de présentation (UI)**: Cette couche est responsable de l'interface utilisateur de l'application. Elle comprend les widgets, les écrans, les routes, etc.

- **Couche métier (Business Logic)**: Cette couche contient la logique métier de l'application. Elle gère les opérations et les traitements de données nécessaires pour répondre aux fonctionnalités de l'application. 

- **Couche d'accès aux données (Data Access)**: Cette couche gère l'accès aux données de l'application, telles que les requêtes réseau, la manipulation de la base de données locale, etc.

## Fonctionnalités

L'application mobile offre plusieurs fonctionnalités essentielles pour les utilisateurs :

- **Authentification et gestion des utilisateurs:** Inscription, connexion, réinitialisation de mot de passe et gestion des profils.
- **Recherche et réservation de voyages:** Recherche de voyages, consultation des détails et réservation.
- **Gestion des réservations:** Affichage des réservations passées et actuelles, annulation et modifications.
- **Notifications:** Réception de notifications push pour les mises à jour et les rappels de voyage.

## UI/UX

L'application est conçue pour offrir une expérience utilisateur fluide et intuitive avec des interfaces modernes. Elle utilise les principes de Material Design pour garantir une apparence et une convivialité cohérentes sur toutes les plateformes.

### Navigation

La navigation dans l'application est gérée à l'aide de [GoRouter](https://pub.dev/packages/go_router), permettant une transition fluide entre les écrans et facilitant la gestion de l'historique de navigation. GoRouter offre une API simple pour définir des routes, gérer les transitions et appliquer des redirections.

### Thèmes et Styles

Les styles et thèmes sont définis de manière centralisée pour assurer la cohérence visuelle dans la classe `AppTheme`

