---
id: general
title: Général
---

### Général 

Cette section fournit des informations sur l'organisation des écrans (screens), l'utilisation des widgets et la gestion du dossier `utils` contenant des classes utilitaires essentielles.

### Structure de l'Application

L'application est structurée de manière à séparer clairement les différentes parties fonctionnelles :

- **Screens (Écrans)** : Chaque écran représente une page ou une vue de l'application.
- **Widgets** : Composants réutilisables utilisés pour construire les interfaces utilisateur.
- **Utils (Utilitaires)** : Classes utilitaires pour des fonctions telles que les requêtes API, les convertisseurs de données, la gestion du thème, etc.

## Utilisation des Screens

Les screens sont des écrans principaux de l'application, chacun correspondant à une fonction ou à une vue spécifique.

### Exemple d'Organisation des Screens

```
/lib
  /screens
    home_screen.dart
    profile_screen.dart
    settings_screen.dart
```

### Création d'un Screen

Pour créer un nouvel écran `NewScreen`, créez un fichier `new_screen.dart` dans le dossier `/screens` et implémentez votre écran en utilisant les widgets et les utilitaires nécessaires. Le tout étant relié à une fonctionnalité qui sera placé dans `/features`.

## Utilisation des Widgets

Les widgets sont des éléments réutilisables qui composent l'interface utilisateur de l'application.

### Exemple d'Organisation des Widgets

```
/lib
  /widgets
    custom_button.dart
    profile_avatar.dart
    ...
```

### Création d'un Widget

Pour créer un nouveau widget réutilisable, créez un fichier `custom_widget.dart` dans le dossier `/widgets` et implémentez votre widget selon les besoins de l'application.Le tout étant relié à une fonctionnalité qui sera placé dans `/features`.

## Utilisation du Dossier Utils

Le dossier `utils` contient des classes utilitaires qui fournissent des fonctionnalités transversales à l'application.

### Exemples de Classes dans le Dossier Utils

- **Cache Manager** : Gère tout ce qui tout au cache.


### Exemple d'Organisation du Dossier Utils

```
/lib
  /utils
    cache_manager.dart
    regex_resources.dart
    user_singleton.dart
    ...
```

### Utilisation d'ApiClient

```dart
import 'package:flutter_app/utils/api_client.dart';

void fetchData() {
  ApiClient apiClient = ApiClient();
  // Utilisation de méthodes pour les requêtes API
}
```