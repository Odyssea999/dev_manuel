---
id: setup
title: Configuration
---
# Odyssea Backend

## Configuration de votre espace de travail

Ce guide vous aidera à installer et exécuter l'application back-end d'Odyssea sur votre système.

---

## 📌 Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Git** : [Télécharger et installer Git](https://git-scm.com/)
- **Node.js** : [Télécharger Node.js](https://nodejs.org/)
- **VS Code** : [Télécharger VS Code](https://code.visualstudio.com/download)
- **Docker** : [Télécharger et installer Docker](https://www.docker.com/get-started)

---

## 📁 Variables d'environnement

Avant de lancer Docker, configurez les variables d’environnement en créant un fichier `.env` à la racine du projet et en y ajoutant les valeurs suivantes. Ces informations sont disponibles sur le channel credentials de Discord.

```
DATABASE_URL=postgres://user:password@localhost:15432/dbname
KEYCLOAK_URL=http://localhost:8080/auth
KEYCLOAK_REALM=odyssea
KEYCLOAK_CLIENT_ID=backend
KEYCLOAK_SECRET=your-client-secret
DISCORD_BOT_TOKEN=your-discord-bot-token
DISCORD_CHANNEL_ID=your-discord-channel-id
```

---

## 🚀 Installation et Exécution

### 1️⃣ Cloner le dépôt

Ouvrez votre terminal et exécutez la commande suivante :

```bash
git clone https://github.com/Odyssea999/api.git
```

Accédez ensuite au dossier du projet :

```bash
cd api
```

### 2️⃣ Démarrer Docker

Assurez-vous que Docker est lancé sur votre machine.

### 3️⃣ Construire et exécuter le projet

Utilisez la commande suivante pour construire et exécuter les conteneurs Docker :

```bash
docker-compose up --build
```

L'API sera accessible à l'adresse suivante :

```bash
http://localhost:3000
```

### 4️⃣ Accès aux services associés

- **Base de données PostgreSQL** : [http://localhost:15432](http://localhost:15432)
- **Keycloak** : [http://localhost:8080](http://localhost:8080)

---

## 📂 Configuration PostgreSQL

1. **Connexion Initiale** : Utilisez les identifiants admin du fichier `.env`.
2. **Création d’un Serveur** :
   - Ouvrez PGAdmin.
   - Dans **Général**, donnez un nom au serveur.
3. **Récupération de l’Adresse IP du Conteneur PostgreSQL** :
   ```bash
   docker ps
   ```
   - Trouvez l’ID du conteneur PostgreSQL.
   - Exécutez la commande suivante :
     ```bash
     docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' IdContainerPostgres
     ```
4. **Configuration de la Connexion** :
   - Utilisez l’adresse IP obtenue comme **Nom d’hôte / Adresse**.
   - Renseignez les identifiants du fichier `.env`.
5. **Connexion au serveur PostgreSQL**.

---

## 🔐 Configuration Keycloak

1. **Connexion Initiale** : Utilisez les identifiants admin du fichier `.env`.
2. **Création d'un Realm** : Importez `keycloak/realm-export.json`.
3. **Génération d'un Client Secret** :
   - Allez dans **Clients** > **Credentials**.
   - Générez un nouveau `Client Secret`.
4. **Mise à Jour du `.env`** : Ajoutez le `Client Secret` à `KEYCLOAK_SECRET`.

---

### 🎯 Bon développement ! 🚀

