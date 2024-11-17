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

### API Interne

L'application mobile communique avec une api développé en interne pour la gestion des utilisateurs ...

### Gestion d'état avec Cubit

Pour la gestion de l'état, l'application utilise [Cubit](https://pub.dev/packages/flutter_cubit), une solution légère pour la gestion d'état basée sur [Bloc](https://bloclibrary.dev/#/). Cubit permet de gérer facilement l'état de l'application de manière réactive et prévisible.


## Architecture

L'application Flutter suit les principes de **Clean Architecture**, un modèle qui sépare les différentes préoccupations de l'application pour garantir une structure modulaire, testable et maintenable. Ce modèle permet de maintenir une indépendance entre les différentes parties de l'application, facilitant ainsi l'ajout de nouvelles fonctionnalités et la gestion de la complexité au fur et à mesure de l'évolution du projet.

### Structure Générale

L'architecture repose sur une séparation claire entre la logique métier, la gestion de l'état, et les interactions avec les sources de données (comme les API ou les bases de données locales). Cela permet de découpler la logique métier de la présentation et de l'accès aux données, ce qui rend le code plus flexible et plus facile à tester.

- **Présentateur/Widgets** : Gère l'interface utilisateur et l'affichage des données. Les données sont obtenues à partir de la logique métier et sont ensuite affichées via les widgets.
  
- **Logique Métier (Cubit/Bloc)** : Gère la logique métier, les transformations de données et les règles d'application. Cette couche est responsable de l’orchestration des actions et de l’appel aux services ou repositories pour effectuer des opérations.

- **Services et Repositories** : Gère l’accès aux données. Les repositories se chargent de récupérer les données à partir de sources externes ou locales, et les services encapsulent les appels aux APIs ou à la base de données.

Cette architecture permet de garantir une **maintenabilité**, une **testabilité**, et une **évolutivité** optimales, tout en facilitant l'intégration de nouvelles fonctionnalités ou la modification des composants existants sans perturber les autres parties de l'application.


## Fonctionnalités

L'application mobile offre plusieurs fonctionnalités essentielles pour les utilisateurs :

- **Authentification et gestion des utilisateurs:** Inscription, connexion, réinitialisation de mot de passe et gestion des profils.


## UI/UX

L'application est conçue pour offrir une expérience utilisateur fluide et intuitive avec des interfaces modernes. Elle utilise les principes de Material Design pour garantir une apparence et une convivialité cohérentes sur toutes les plateformes.

### Navigation

La navigation dans l'application est gérée à l'aide de [GoRouter](https://pub.dev/packages/go_router), permettant une transition fluide entre les écrans et facilitant la gestion de l'historique de navigation. GoRouter offre une API simple pour définir des routes, gérer les transitions et appliquer des redirections.

### Thèmes et Styles

Les styles et thèmes sont définis de manière centralisée pour assurer la cohérence visuelle dans la classe `AppTheme`

