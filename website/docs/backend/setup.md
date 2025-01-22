---
id: setup
title: Configuration
---

# Configuration de votre espace de travail côté back

## Installation

Suivez ces étapes pour installer et exécuter GoAway sur votre système.

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Git:** [Télécharger et installer Git](https://git-scm.com/)
- **Node.js:** [Télécharger Node.js](https://nodejs.org/)
- **VS Code:** [Télécharger VS Code](https://code.visualstudio.com/download)
- **Docker:** [Télécharger et installer Docker](https://www.docker.com/get-started)

### Cloner le dépôt

1. Ouvrez votre terminal ou invite de commande.

2. Utilisez la commande suivante pour cloner le dépôt API :

```bash
git clone https://github.com/Odyssea999/API.git
```

### Construction et Exécution
 
1. Lancez docker sur votre machine 

2. Pour construire et exécuter le projet, utilisez la commande suivante :

```bash
    docker-compose up --build
 ```

Cela vous lancera notre api et les différents containeur qui y sont associés 
L'api sera accessible à l'url suivante :
```bash
    http://localhost:3000
```
Vous pourrez vous connecter à la base de donnée Postgres accesible à l'url suivante :
```bash 
http://localhost:15432
```

Vous pourrez vous connecter à  Keycloack accesible à l'url suivante :
```bash 
http://localhost:8080
```

### PostgreSQL : Configuration et Connexion  

1. **Connexion Initiale** :  
   Utilisez les identifiants admin renseignés dans le fichier `.env` pour vous connecter.  

2. **Création d’un Serveur** :  
   - Ouvrez l’interface de gestion (par exemple, PGAdmin).  
   - Dans l’onglet **Général**, donnez un nom au serveur que vous souhaitez créer.  

3. **Récupération de l’Adresse IP du Conteneur PostgreSQL** :  
   - Exécutez la commande suivante pour afficher les conteneurs en cours d’exécution :  
     ```bash
     docker ps
     ```  
   - Identifiez l’ID du conteneur PostgreSQL dans la liste affichée.  
   - Exécutez la commande suivante pour obtenir l’adresse IP du conteneur :  
     ```bash
     docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' IdContainerPostgres
     ```  

4. **Configuration de la Connexion** :  
   - Une fois l’adresse IP obtenue, renseignez-la dans le champ **Nom d’hôte / Adresse** de l’onglet **Connexion** de votre serveur dans PGAdmin.  
   - Remplissez également les champs **Identifiant** et **Mot de passe** avec les valeurs correspondantes du fichier `.env`

5. **Finalisation** :  
   - Enregistrez la configuration et connectez-vous à votre serveur PostgreSQL.

### Keycloak

1. **Connexion Initiale** :  
   Utilisez les identifiants administrateur définis dans le fichier `.env` pour vous connecter.  

2. **Création d'un Realm** :  
   Importez le fichier `realm-export` depuis l'API au chemin suivant : `keycloak/realm-export.json`.

3. **Génération d'un Client Secret** :  
   - Accédez à la section **Clients** puis à l'onglet **Credentials**.  
   - Générez un nouveau `Client Secret`.  

4. **Mise à Jour du `.env`** :  
   - Ajoutez le nouveau `Client Secret` dans la variable `KEYCLOAK_SECRET` de votre fichier `.env`.
