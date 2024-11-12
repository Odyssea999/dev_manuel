---
id: setup
title: Configuration
---

# Configuration de votre espace de travail


## Installation

Suivez ces étapes pour installer et exécuter GoAway sur votre système.

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- **Git:** [Télécharger et installer Git](https://git-scm.com/)
- **Flutter SDK:** [Télécharger Flutter](https://flutter.dev/docs/get-started/install)
- **Android Studio:** [Télécharger Android Studio](https://developer.android.com/studio)
- **Xcode (pour macOS):** [Télécharger Xcode](https://developer.apple.com/xcode/)
- **Vscode :** [Télécharger Vscode ](https://code.visualstudio.com/download)

### Cloner le dépôt

1. Ouvrez votre terminal ou invite de commande.

2. Utilisez la commande suivante pour cloner le dépôt GoAway :

```bash 
    git clone https://github.com/Odyssea999/Mobile_app.git
```

### Configuration

1. Changez votre répertoire de travail vers le dépôt cloné :

```bash
    cd Mobile 
 ```

2. Installez les dépendances requises en utilisant :
```bash
    flutter pub get
 ```
3. Veuillez créer un fichier .env dans le dossier /environments les variables d'nvironnements vous seront partagés et veuillez à ce qu'ils ne soient pas partagés dans un commit.

### Construction et Exécution

1. Connectez votre appareil ou démarrez un émulateur.

2. Pour construire et exécuter le projet, utilisez la commande suivante :

```bash
    flutter run
 ```

Cela construira le projet et l'installera sur votre appareil connecté ou votre émulateur.