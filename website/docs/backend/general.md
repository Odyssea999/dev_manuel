---
id: general
title: Général
---

## Structure Générale du Projet NestJS

### Organisation des Fichiers

L'organisation des fichiers dans un projet NestJS suit généralement une structure conventionnelle. Voici un aperçu de la structure typique :

```
/src
  /app.module.ts         # Module racine de l'application
  /main.ts               # Point d'entrée de l'application
  /...
  /auth                 # Répertoire contenant la fonctionalité relatif à l'Authentification ( services,controller , module, entité)
```

### Description des Répertoires Principaux

- **/src** : Répertoire racine contenant tout le code source de l'application.
- **/controllers** : Contrôleurs exposant les endpoints HTTP de l'API.
- **/modules** : Modules organisant les différentes fonctionnalités de l'application.
- **/services** : Services fournissant la logique métier et l'accès aux données.
- **/entities** : Entités représentant les modèles de données persistantes.
- **/middlewares** : Middlewares pour le traitement des requêtes HTTP.
- **/filters** : Filtres d'exception pour la gestion des erreurs.
- **/guards** : Gardes pour la gestion des autorisations et de l'authentification.
- **/interceptors** : Intercepteurs pour le traitement global des requêtes et réponses.
- **/tests** : Tests unitaires et d'intégration de l'application.

### Commandes Utiles

#### Génération de Composants

1. **Générer un module :**
   ```bash
   nest generate module module-name
   ```

2. **Générer un contrôleur :**
   ```bash
   nest generate controller controller-name
   ```

3. **Générer un service :**
   ```bash
   nest generate service service-name
   ```

4. **Générer un middleware :**
   ```bash
   nest generate middleware middleware-name
   ```

### Pour plus d'informations

Consultez la [documentation officielle de NestJS](https://docs.nestjs.com/) pour des détails sur chaque composant et pour explorer des fonctionnalités avancées du framework.
