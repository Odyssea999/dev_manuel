---
id: overview  
title: Aperçu  

---

# Aperçu

# Odyssea - Overview

## Introduction
Odyssea est une application web conçue pour faciliter la collaboration au sein d’un établissement scolaire. Elle propose un espace interactif où les enseignants et les étudiants peuvent interagir, partager des ressources et travailler ensemble en temps réel grâce à un tableau collaboratif dynamique.

## Technologies Utilisées
Odyssea repose sur une stack technologique moderne :

- **Frontend** : Angular, TypeScript
- **Backend** : NestJS, Node.js
- **Base de données** : PostgreSQL
- **Authentification** : Keycloak
- **Conteneurisation** : Docker, Docker Compose
- **Temps réel** : WebSockets
- **Stockage** : Firebase (pour les fichiers et médias partagés)

## Architecture
L’application suit une architecture modulaire et évolutive :

- **Frontend Angular** : Structure basée sur un découpage modulaire avec Core, Shared et Pages.
- **Backend NestJS** : Organisation en Domain, Infrastructure et Application selon l’architecture hexagonale.
- **Base de données PostgreSQL** : Gestion optimisée des utilisateurs, contenus et permissions.
- **Authentification via Keycloak** : Gestion des utilisateurs, rôles et accès sécurisés.
- **Docker** : Facilite le déploiement et la scalabilité.

## Fonctionnalités Principales
- **Espace Collaboratif** : Interface intuitive permettant aux étudiants et enseignants d’interagir.
- **Tableau Interactif** : Board en temps réel pour partager des idées, annoter et travailler ensemble.
- **Gestion des Utilisateurs** : Authentification sécurisée et gestion des rôles (enseignant, élève, administrateur).
- **Partage de Ressources** : Upload et gestion des fichiers directement dans l’application.
- **Communication en Temps Réel** : Messagerie instantanée et notifications pour une meilleure interaction.

---

🎯 **Odyssea transforme l’apprentissage en créant un environnement numérique interactif et collaboratif.** 🚀