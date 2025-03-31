---
id: migration
title: Migration
---

# TypeORM Migrations

Cette aprtie explique comment utiliser les commandes de migration TypeORM définies dans le projet.

## Commandes de migration

### 1. Générer une migration

```sh
npm run migration:generate -- <NomDeLaMigration>
```

📌 **Exemple :**
```sh
npm run migration:generate -- ajout_utilisateur
```
Cette commande génère une nouvelle migration en fonction des changements détectés dans les entités TypeORM.

### 2. Créer une migration manuellement

```sh
npm run migration:create -- <NomDeLaMigration>
```

📌 **Exemple :**
```sh
npm run migration:create -- ajout_table_produits
```
Cette commande crée une nouvelle migration vide que vous devez compléter manuellement.

### 3. Exécuter les migrations

```sh
npm run migration:run
```

Cette commande applique toutes les migrations en attente à la base de données.

### 4. Annuler la dernière migration

```sh
npm run migration:revert
```

Cette commande annule la dernière migration exécutée.

## Remarques
- **Toujours s'assurer que la base de données est bien connectée avant d'exécuter les migrations.**
- **Utiliser `migration:generate` pour générer des migrations automatiquement à partir des entités.**
- **Si vous souhaitez modifier une migration déjà appliquée, utilisez `migration:revert` avant d'apporter des changements.**

