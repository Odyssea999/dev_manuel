---
id: overview
title: Aperçu
---

# Aperçu

Bienvenue dans la documentation de l'API backend de votre application de voyage. Cette section couvre les aspects fondamentaux et les fonctionnalités principales du backend.

## Introduction

L'API backend est développée en utilisant [NestJS](https://nestjs.com/), un framework Node.js progressif pour la construction de serveurs efficaces, fiables et évolutifs. NestJS utilise TypeScript et s'appuie sur des concepts solides tels que les modules, les contrôleurs et les services.

## Technologies Utilisées

- **PostgreSQL:** Une base de données relationnelle puissante et open-source utilisée pour stocker toutes les informations pertinentes liées aux utilisateurs, voyages, réservations, etc.
- **Redis:** Utilisé comme cache en mémoire pour améliorer les performances de l'application et gérer les sessions utilisateur.
- **Prometheus:** Utilisé pour la surveillance et l'alerting du système, en collectant des métriques sur les performances et l'état de l'application.
- **Grafana:** Une plateforme de visualisation qui permet de créer des tableaux de bord interactifs pour surveiller les métriques collectées par Prometheus.
- **APIs Externes:** L'API intègre des services externes comme l'API Amadeus pour les informations de voyage et Tripadvisor pour les avis et recommandations.

## Architecture

L'architecture de l'API est basée sur les concepts de base de NestJS :

- **Modules:** Les modules sont des blocs de construction organisés qui encapsulent les fonctionnalités de l'application. Chaque module est responsable d'une fonctionnalité spécifique.

- **Contrôleurs:** Les contrôleurs gèrent les requêtes HTTP entrantes, exécutent la logique métier appropriée et renvoient des réponses au client.

- **Services:** Les services contiennent la logique métier principale et sont injectés dans les contrôleurs pour séparer les préoccupations.

- **Entités:** Les entités représentent les modèles de données et sont utilisées pour interagir avec la base de données.

## Fonctionnalités

L'API backend offre plusieurs fonctionnalités essentielles pour votre application de voyage :

- **Gestion des utilisateurs:** Enregistrement, authentification et gestion des profils des utilisateurs.
- **Gestion des voyages:** Création, mise à jour, suppression et récupération des informations sur les voyages.
- **Réservations:** Gestion des réservations de voyages par les utilisateurs.
- **Notifications:** Envoi de notifications aux utilisateurs pour divers événements.
- **Intégration avec des services tiers:** Connexion à des API externes pour enrichir les fonctionnalités de l'application.

## Endpoints

Voici quelques endpoints principaux de l'API :

- **/auth**
  - `POST /register`: Enregistrer un nouvel utilisateur.
  - `POST /login`: Authentifier un utilisateur et générer un token JWT.

- **/users**
  - `GET /:id`: Récupérer les informations d'un utilisateur par ID.
  - `PUT /`: Mettre à jour les informations d'un utilisateur par ID.

- **/travel**
  - `POST /`: Créer un nouveau voyage.
  - `GET /`: Récupérer la liste de tous les voyages.
  - `GET /:id`: Récupérer les détails d'un voyage par ID.
  - `PUT /:id`: Mettre à jour un voyage par ID.
  - `DELETE /:id`: Supprimer un voyage par ID.

## Sécurité

L'API utilise JSON Web Tokens (JWT) pour authentifier les utilisateurs et sécuriser les endpoints. Assurez-vous de configurer les variables d'environnement nécessaires pour les clés secrètes et autres configurations de sécurité.

## Configuration de l'environnement

Pour configurer l'API, assurez-vous de créer un fichier `.env` à la racine du projet avec les variables d'environnement qui vous seront fournis préalablement.

## Conclusion

Cette documentation fournit une vue d'ensemble de l'API backend de votre application de voyage. Utilisez les sections suivantes pour obtenir des détails plus approfondis sur chaque fonctionnalité et endpoint.

---

Pour toute question ou aide supplémentaire, consultez la documentation officielle de [NestJS](https://docs.nestjs.com/) ou contactez l'équipe de développement.
