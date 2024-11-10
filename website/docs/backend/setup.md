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

### Configuration

1. Installez les dépendances requises en utilisant
```bash
    npm install
 ```
2. Veuillez créer un fichier .env à la racine du projet, les variables d'nvironnements vous seront partagés et veuillez à ce qu'ils ne soient pas partagés dans un commit.

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
Vous pourrez vous connecter à la base de donnée postgres accesible à l'url suivante :
```bash 
http://localhost:15432
```
