---
id: overview  
title: Aperçu  

---

# Aperçu

Bienvenue dans la documentation de l'API backend de votre application. Cette section couvre les aspects fondamentaux et les fonctionnalités principales du backend.

## Introduction

L'API backend est développée en utilisant [NestJS](https://nestjs.com/), un framework Node.js progressif pour la construction de serveurs efficaces, fiables et évolutifs. NestJS utilise TypeScript et s'appuie sur des concepts solides tels que les modules, les contrôleurs et les services.

Le projet suit une **architecture hexagonale** (également appelée architecture "Ports et Adaptateurs"), qui permet de séparer clairement la logique métier de l'infrastructure technique (bases de données, API externes, etc.). Cela améliore la testabilité et facilite l'évolutivité du système.

## Technologies Utilisées

- **PostgreSQL :** Une base de données relationnelle puissante et open-source utilisée pour stocker toutes les informations pertinentes liées aux utilisateurs, voyages, réservations, etc.
- **Redis :** Utilisé comme cache en mémoire pour améliorer les performances de l'application et gérer les sessions utilisateur.
- **Keycloak :** Un serveur d'identité et d'accès open-source pour gérer l'authentification et l'autorisation des utilisateurs. Keycloak est intégré pour fournir une gestion centralisée des utilisateurs, des rôles, et des permissions.
- **NestJS :** Framework Node.js utilisé pour organiser les modules, services, et contrôleurs de manière modulaire et scalable.

## Architecture

L'architecture de l'API repose sur les principes de l'**architecture hexagonale**, ce qui permet une séparation claire entre la logique métier et l'infrastructure technique. Elle se compose des éléments suivants :

- **Modules :** Les modules sont des blocs de construction qui encapsulent des fonctionnalités spécifiques de l'application, comme la gestion des utilisateurs ou des voyages.
  
- **Contrôleurs :** Les contrôleurs traitent les requêtes HTTP entrantes et délèguent les opérations à des services métiers.

- **Services :** Les services contiennent la logique métier principale et peuvent être partagés entre les différents contrôleurs.

- **Entités :** Les entités sont des objets qui représentent les modèles de données et interagissent avec la base de données via des repositories.


## Fonctionnalités

L'API backend offre plusieurs fonctionnalités essentielles pour votre application de voyage :

- **Gestion des utilisateurs :** Enregistrement, authentification, et gestion des profils utilisateurs via **Keycloak**. Cela inclut la gestion des rôles et des permissions.


## Endpoints

Voici quelques endpoints principaux de l'API :

- **/auth**
  - `POST /auth/register`: Enregistrer un nouvel utilisateur via Keycloak.
  - `POST /auth/login`: Authentifier un utilisateur et générer un token JWT pour l'accès aux ressources protégées.

## Sécurité

L'API utilise **Keycloak** pour gérer l'authentification et l'autorisation des utilisateurs. Keycloak fournit une solution complète de gestion des utilisateurs, des sessions et des rôles, avec une intégration native dans l'API backend. 

L'API utilise des **JSON Web Tokens (JWT)** pour authentifier les utilisateurs et sécuriser les endpoints. Les tokens sont générés et vérifiés par Keycloak pour garantir que seules les requêtes légitimes peuvent accéder aux ressources protégées.

Assurez-vous de configurer correctement l'environnement de Keycloak avec les variables d'environnement nécessaires pour garantir une gestion sécurisée des utilisateurs.

## Configuration de l'environnement

Pour configurer l'API, assurez-vous de créer un fichier `.env` à la racine du projet avec les variables d'environnement suivantes :

### Variables Keycloak

- **KEYCLOAK_REALM** :  
  Le nom du Realm (domaine de sécurité) utilisé dans Keycloak pour regrouper les utilisateurs et les configurations d'accès.  

- **KEYCLOAK_CLIENT_ID** :  
  L'identifiant du client configuré dans Keycloak pour votre application.  

- **KEYCLOAK_SECRET** :  
  Le secret client utilisé pour sécuriser la communication entre votre application et Keycloak.  

- **KEYCLOAK_USER** :  
  L'utilisateur Keycloak utilisé pour effectuer des opérations via l'API de Keycloak.  

- **KEYCLOAK_PASSWORD** :  
  Le mot de passe de l'utilisateur Keycloak pour l'authentification via l'API.  

- **KEYCLOAK_ADMIN_USER** :  
  L'utilisateur administrateur Keycloak qui a des privilèges supplémentaires pour gérer les configurations.  

- **KEYCLOAK_ADMIN_PASSWORD** :  
  Le mot de passe de l'administrateur Keycloak.  


### Variables PostgreSQL 

- **POSTGRES_USER** :  
  Le nom d'utilisateur pour accéder à la base de données PostgreSQL.  

- **POSTGRES_PASSWORD** :  
  Le mot de passe associé à l'utilisateur PostgreSQL.  

- **POSTGRES_DB** :  
  Le nom de la base de données PostgreSQL à utiliser.  

- **POSTGRES_URI** :  
  Utilisée pour fournir directement une chaîne de connexion PostgreSQL.  

### Variables PGAdmin

- **PGADMIN_DEFAULT_EMAIL** :  
  L'adresse email utilisée pour accéder à l'interface PGAdmin (outil de gestion PostgreSQL).  

- **PGADMIN_DEFAULT_PASSWORD** :  
  Le mot de passe pour se connecter à PGAdmin.  

## Conclusion

Cette documentation fournit une vue d'ensemble de l'API backend de votre application de voyage, en suivant une architecture hexagonale et en utilisant Keycloak pour la gestion des utilisateurs. Utilisez les sections suivantes pour obtenir des détails plus approfondis sur chaque fonctionnalité et endpoint.

---

Pour toute question ou aide supplémentaire, consultez la documentation officielle de [NestJS](https://docs.nestjs.com/), [Keycloak](https://www.keycloak.org/documentation.html), ou contactez l'équipe de développement. 
