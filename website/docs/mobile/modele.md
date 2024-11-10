---
id: modele
title: Modèle
---

# Modèle

Voici comment vous pouvez créer un modèle avec la sérialisation JSON et configurer la génération de fichiers `.g.dart` en Flutter.

## Création du modèle

Pour cet exemple, nous allons créer un modèle `UserInfo` dans le fichier `user_info.dart`. Suivez ces étapes :

1. **Créer le fichier :** Créez un fichier `user_info.dart` dans le répertoire `/models`.

2. **Importer json_annotation :** Ajoutez l'importation nécessaire pour `json_annotation` en haut de votre fichier.

3. **Créer la classe UserInfo :** Créez une classe `UserInfo` avec l'annotation `@JsonSerializable()`. Voici un exemple :
<!-- //TODO Mettre une image plutôt  -->
```dart
    import 'package:json_annotation/json_annotation.dart';

    part 'user_info.g.dart';

    @JsonSerializable()
    class UserInfo {
    final String id;
    final String name;
    final String email;

    UserInfo({required this.id, required this.name, required this.email});

    // Méthode pour la désérialisation
    factory UserInfo.fromJson(Map<String, dynamic> json) => _$UserInfoFromJson(json);

    // Méthode pour la sérialisation
    Map<String, dynamic> toJson() => _$UserInfoToJson(this);
    }
```

### Génération du fichier .g.dart
Après avoir créé votre modèle, vous devez générer les fichiers .g.dart en utilisant la commande build_runner. Voici comment le faire :

1. Ajouter les dépendances : Assurez-vous que vous avez `json_serializable` et `build_runner` dans votre fichier `pubspec.yaml` sous `dev_dependencies`. Ajoutez les lignes suivantes :
```yaml 
dev_dependencies:
  json_serializable: ^6.1.4
  build_runner: ^2.1.11
```
2. Exécuter la commande de génération : Ouvrez votre terminal et exécutez la commande suivante pour générer les fichiers .g.dart :
```bash 
flutter packages pub run build_runner build
```

Cela va générer les fichiers .g.dart nécessaires pour la sérialisation JSON.

### Gestion des conflits
Si vous rencontrez des conflits lors de la génération des fichiers .g.dart, vous pouvez utiliser la commande suivante pour résoudre les conflits :
``` dart 
flutter packages pub run build_runner build --delete-conflicting-outputs
```
Cette commande va supprimer les fichiers en conflit et générer de nouveaux fichiers .g.dart. Assurez-vous de toujours exécuter cette commande après avoir modifié votre modèle pour vous assurer que les fichiers générés sont à jour.

En suivant ces étapes, vous pouvez créer et gérer facilement des modèles avec la sérialisation JSON dans votre projet Flutter.