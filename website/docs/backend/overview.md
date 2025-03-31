---
id: overview  
title: Aperçu  

---

# Aperçu

Bienvenue dans la documentation de l'API backend de votre application. Cette section couvre les aspects fondamentaux et les fonctionnalités principales du backend.

## Introduction

L'API backend est développée en utilisant [NestJS](https://nestjs.com/), un framework Node.js progressif pour la construction de serveurs efficaces, fiables et évolutifs. NestJS utilise TypeScript et s'appuie sur des concepts solides tels que les modules, les contrôleurs et les services.

Le projet suit une **architecture hexagonale**, qui permet de séparer clairement la logique métier de l'infrastructure technique (bases de données, API externes, etc.). Cela améliore la testabilité et facilite l'évolutivité du système.

## Technologies Utilisées

- **PostgreSQL :** Une base de données relationnelle puissante et open-source utilisée pour stocker toutes les informations pertinentes liées aux utilisateurs, voyages, réservations, etc.
- **NestJS :** Framework Node.js utilisé pour organiser les modules, services, et contrôleurs de manière modulaire et scalable.

## Architecture

L'architecture de l'API repose sur les principes de l'**architecture hexagonale**, ce qui permet une séparation claire entre la logique métier et l'infrastructure technique. Elle se compose des éléments suivants :

  
- **Contrôleurs :** Les contrôleurs traitent les requêtes HTTP entrantes et délèguent les opérations à des services métiers.

- **Services :** Les services contiennent la logique métier principale et peuvent être partagés entre les différents contrôleurs.

- **Entités :** Les entités sont des objets qui représentent les modèles de données et interagissent avec la base de données via des repositories.


## Fonctionnalités

L'API backend offre plusieurs fonctionnalités essentielles pour votre application de voyage :

- **Gestion des utilisateurs :** Authentification, et gestion des profils utilisateurs. Cela inclut la gestion des rôles et des permissions.


## Endpoints

Voici quelques endpoints principaux de l'API :

- **/auth**
  - `POST /auth/register`: Enregistrer un nouvel utilisateur via Keycloak.
  - `POST /auth/login`: Authentifier un utilisateur et générer un token JWT pour l'accès aux ressources protégées.

## Sécurité

L'API utilise des **JSON Web Tokens (JWT)** pour authentifier les utilisateurs et sécuriser les endpoints. Les tokens sont générés et vérifiés avec clés RSA pour garantir que seules les requêtes légitimes peuvent accéder aux ressources protégées.


## Configuration de l'environnement

Pour configurer l'API, assurez-vous de créer un fichier `.env` à la racine du projet avec les variables d'environnement suivantes :

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

Pour toute question ou aide supplémentaire, consultez la documentation officielle de [NestJS](https://docs.nestjs.com/), ou contactez l'équipe de développement. 
