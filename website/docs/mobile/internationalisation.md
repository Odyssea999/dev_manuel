---
id: internationalisation
title: Internationalisation
---

# Guide d'Utilisation de l'Internationalisation dans Flutter

Après avoir configuré l’internationalisation dans votre application Flutter, vous pouvez afficher les textes traduits et permettre aux utilisateurs de changer de langue facilement en utilisant le widget `LanguageSelectionWidget`.

## 1. Utiliser `AppLocalizations` pour Afficher les Textes Traduits

Pour afficher un texte traduit dans l'interface utilisateur, utilisez la classe `AppLocalizations`. Elle permet d’accéder aux éléments définis dans vos fichiers `.arb`.

### Exemple d’Utilisation

Imaginons que vous ayez une clé `title` dans vos fichiers de traduction. Pour l’afficher dans un `Text` ou dans d’autres widgets de l’interface, procédez comme suit :

```dart
import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(AppLocalizations.of(context)!.title),
      ),
      body: Center(
        child: Text(AppLocalizations.of(context)!.greeting),
      ),
    );
  }
}
```

Ici :
- `AppLocalizations.of(context)!` vous donne accès aux traductions pour le contexte actuel.
- `title` et `greeting` sont des clés définies dans les fichiers `.arb` et permettent d'afficher les traductions correspondantes.

## 2. Changer la Langue avec `LanguageSelectionWidget`

Pour permettre aux utilisateurs de changer de langue, utilisez simplement le widget `LanguageSelectionWidget` qui est intégré dans votre application et gère le changement de langue de manière dynamique.

### Exemple d’Utilisation de `LanguageSelectionWidget`

Intégrez `LanguageSelectionWidget` dans n'importe quel endroit de votre interface, par exemple dans une page de paramètres, pour que les utilisateurs puissent sélectionner leur langue préférée :

```dart
import 'package:flutter/material.dart';
import 'package:odyssea/core/widget/global/language_selection_widget.dart';

class SettingsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Paramètres'),
      ),
      body: Center(
        child: LanguageSelectionWidget(),
      ),
    );
  }
}
```

Le widget `LanguageSelectionWidget` :
- Permet à l'utilisateur de sélectionner une langue dans une liste (par exemple, Anglais, Français, etc.).
- Applique immédiatement la langue sélectionnée à l'interface utilisateur.

Cela rend le changement de langue très simple pour l'utilisateur, sans redémarrer l'application.
