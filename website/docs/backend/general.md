---
id: general
title: Général
---
## 📁 Organisation des Répertoires

L'organisation des répertoires suit les principes de la séparation des responsabilités tout en intégrant les concepts liés à l'architecture Domain-Driven Design (DDD).

### `Domain` Directory  

Ce répertoire constitue le noyau de l'application et ne doit dépendre d'aucune dépendance de framework.  

- **`Models` ou `Entity`** :  
  - Contient toutes les entités de base de données ainsi que leurs champs (ex. : table `User`).  

- **`Repository`** :  
  - Contient les classes `interface` pour chaque dépôt lié aux opérations sur la base de données.  

### `Infrastructure` Directory  

Ce répertoire concerne principalement la gestion de la base de données et contient :  

- **`Dto`** :  
  - Inclut les objets de transfert de données (DTO), tels que `AuthLoginDto`, `AuthRegisterDto`, `UserReadDto`, etc.  

- **`Repository`** :  
  - Implémente les interfaces des dépôts définis dans le répertoire `Domain`.  

- **`Mapper`** :  
  - Contient des classes de mappage entre les DTO et leurs modèles ou entités correspondants.  
    Exemple : `UserReadDto` mappé à `UserEntity`, avec uniquement les champs nécessaires pour l'utilisateur.  

- **`Config`** :  
  - Stocke les configurations spécifiques des bases de données, telles que les schémas MongoDB ou la configuration TypeORM.  

### `Application` Directory  

Ce répertoire regroupe la logique métier de l'application :  

- **`Services`** :  
  - Regroupe les interfaces pour la logique métier, par exemple `AuthService`.  

- **`Common`** :  
  - Contient des éléments réutilisables par d'autres services ou dans la partie API.  

### `Api` Directory  

Ce répertoire est dédié à l'exposition des API et contient :  

- **`Controller`** :  
  - Regroupe les classes de contrôleurs qui définissent les routes et points d'accès API.  

### `Socket` Directory  

Ce répertoire regroupe tous les éléments liés à la gestion des sockets.  

---

### 📖 Pour plus d'informations

Consultez la [documentation officielle de NestJS](https://docs.nestjs.com/) pour des détails sur chaque composant et pour explorer des fonctionnalités avancées du framework.

---

### 🎯 Bon développement ! 🚀


