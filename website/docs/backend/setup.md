---
id: setup
title: Configuration
---
# Odyssea Backend

## Configuration de votre espace de travail

Ce guide vous aide à installer et exécuter **les deux applications back-end** (`api` et `api-admin`) avec **PostgreSQL**, **PgAdmin**, et un **réseau Docker partagé**.

---

## 📌 Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

* **Git** : [Installer Git](https://git-scm.com/)
* **Node.js** : [Installer Node.js](https://nodejs.org/)
* **VS Code** : [Installer VS Code](https://code.visualstudio.com/download)
* **Docker & Docker Compose** : [Installer Docker](https://www.docker.com/get-started)
* **OpenSSL** : Vérifier avec `openssl version` ou installer :

  * Debian/Ubuntu : `sudo apt install openssl`
  * macOS : `brew install openssl`

---

## 📂 Variables d'environnement

Chaque projet (`api` et `api-admin`) doit avoir son propre fichier `.env` avec **les mêmes infos de base de données**.

**Exemple pour `api/.env` et `api-admin/.env` :**

```env
# Variables Postgres
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
POSTGRES_URI=postgres://<user>:<password>@postgres:5432/<db_name>

# Variables PGAdmin
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=

# Variables de port
PORT=3000 # Pour API
# PORT=3001 # Pour API-Admin

# Autres clés et secrets
SALT_LENGTH=
HASH_ALGORITHM=
REFRESH_TOKEN_SECRET_KEY=
PRIVATE_KEY_BASE64=
PUBLIC_KEY_BASE64=

# Mail
EMAIL_HOST=
EMAIL_PORT=
MAIL=
MAIL_PASS=
WEB_URL=
```

---

## 🗂️ Réseau Docker partagé

> ⚙️ **Un seul réseau pour relier API, API-Admin et Postgres**

1️⃣ **Créer le réseau partagé** (une seule fois) :

```bash
docker network create app_network
```

> ✅ Ce réseau persiste même si tu arrêtes tes conteneurs.
> Pas besoin de le recréer à chaque fois.

---

## 🚀 Démarrer les projets

### 1️⃣ Cloner les deux dépôts

```bash
git clone https://github.com/Odyssea999/api.git
git clone https://github.com/Odyssea999/api-admin.git
```

---

### 2️⃣ Lancer les conteneurs

Dans **chaque dossier** (`api/` et `api-admin/`) :

```bash
docker-compose up --build
```

> ⚡ Vérifie que tes logs affichent bien :
>
> * `api` dispo sur [http://localhost:4200](http://localhost:4200)
> * `api-admin` dispo sur [http://localhost:4300](http://localhost:4300)
> * PgAdmin dispo sur [http://localhost:15432](http://localhost:15432)

---

## 🔑 Génération et Encodage des Clés RSA en Base64

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

## 🗃️ Vérifier la connexion PostgreSQL avec PGAdmin

1. Connecte-toi à PgAdmin [http://localhost:15432](http://localhost:15432)

2. Crée un **serveur** :

   * Nom : `odyssea`
   * Hôte : `postgres`
   * Port : `5432`
   * Utilisateur et mot de passe : selon ton `.env`

3. Si besoin, récupère l’IP du conteneur Postgres :

   ```bash
   docker ps
   docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ID_CONTAIN
   ```

---

## ✅ Bonnes pratiques

* Toujours utiliser le **même réseau partagé** `app_network`
* Vérifier `docker network inspect app_network` pour voir tes conteneurs connectés
* `docker-compose down` arrête les conteneurs mais **ne supprime pas le réseau**
* Pour tout nettoyer :

  ```bash
  docker-compose down -v
  docker network rm app_network
  ```

---

## 🎯 Bon développement avec Odyssea ! 🚀

Si tu veux je peux te faire un `Makefile` ou un script bash pour lancer les deux projets d’un coup. Dis-moi ! 🔥
