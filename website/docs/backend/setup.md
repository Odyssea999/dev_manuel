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
- **OpenSSL** : Vérifiez son installation avec `openssl version`, sinon installez-le avec :
  - Sur Debian/Ubuntu : `sudo apt install openssl`
  - Sur macOS : `brew install openssl`

---

## 📁 Variables d'environnement

Avant de lancer Docker, configurez les variables d’environnement en créant un fichier `.env` à la racine du projet et en y ajoutant les valeurs suivantes. Ces informations sont disponibles sur le channel credentials de Discord.

```
# Variables Postgres local 
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
POSTGRES_URI=
# Variables PGAdmin
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=
# Variables Port
PORT=
SALT_LENGTH=
HASH_ALGORITHM=
REFRESH_TOKEN_SECRET_KEY=
PRIVATE_KEY_BASE64=
PUBLIC_KEY_BASE64=
# Variable Mail
EMAIL_HOST=
EMAIL_PORT=
MAIL=
MAIL_PASS=
WEB_URL=
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

---

## 🔑 Génération et Encodage de Clés RSA en Base64

Utilisez OpenSSL pour générer une clé privée de 2048 bits et extraire la clé publique correspondante :
### Générer une clé privée (2048 bits)
```sh
openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048

```
### Extraire la clé publique depuis la clé privée
```sh
openssl rsa -in private.pem -pubout -out public.pem
```

### Encoder les clés en Base64 et les stocker dans le fichier `.env`

```sh
cat private.pem | base64 > private.pem.b64
cat public.pem | base64 > public.pem.b64
```

Ajoutez ces valeurs directement dans votre fichier `.env` :

```
PRIVATE_KEY_BASE64=<valeur_encodée>
PUBLIC_KEY_BASE64=<valeur_encodée>
```

Remplacez `<valeur_encodée>` par les valeurs obtenues après l'encodage.

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

### 🎯 Bon développement ! 🚀
