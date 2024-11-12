---
id: theme
title: Theme
---
# Thèmes dans Flutter

Voici comment utiliser les thèmes prédéfinis (clair et sombre) dans votre application Flutter et comment basculer entre eux grâce au widget `ThemeSwitcher`.

## 1. Utiliser le Thème Actuel dans Votre Interface Utilisateur

Une fois que le thème est défini dans `AppTheme`, vous pouvez accéder aux couleurs et styles directement depuis les widgets de votre application.

### Exemple d’Utilisation de Couleurs et Styles de Texte

Supposons que vous vouliez appliquer le style `displayLarge` ou la couleur `blueGoaway` dans un `Text` :

```dart
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Accueil',
          style: Theme.of(context).textTheme.displayLarge,
        ),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // action à définir
          },
          child: Text(
            'Commencer',
            style: TextStyle(color: Theme.of(context).colorScheme.onPrimary),
          ),
          style: ElevatedButton.styleFrom(
            backgroundColor: Theme.of(context).colorScheme.primary,
          ),
        ),
      ),
    );
  }
}
```

Dans cet exemple :
- `Theme.of(context).textTheme.displayLarge` applique le style de texte pour `displayLarge` défini dans `AppTheme`.
- `Theme.of(context).colorScheme.primary` applique la couleur primaire du thème actuel.

## 2. Basculer entre le Thème Clair et le Thème Sombre avec `ThemeSwitcher`

Pour permettre aux utilisateurs de basculer entre le thème clair et sombre, vous pouvez utiliser le widget `ThemeSwitcher`. Ce widget contrôle dynamiquement `ThemeMode`, modifiant ainsi le thème de l'application en fonction de la sélection de l'utilisateur.

### Exemple d’Utilisation de `ThemeSwitcher`

Voici comment intégrer `ThemeSwitcher` dans votre application :

```dart
import 'package:flutter/material.dart';
import 'package:odyssea/core/widget/global/theme_switch_widget.dart';

class SettingsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Paramètres'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ThemeSwitcher(), // Permet de basculer entre le thème clair et sombre
          ],
        ),
      ),
    );
  }
}
```

Le widget `ThemeSwitcher` :
- Affiche une interface permettant aux utilisateurs de sélectionner entre le mode clair et le mode sombre.
- Met à jour instantanément l'apparence de l'application en appliquant soit `AppTheme.lightTheme`, soit `AppTheme.darkTheme`.
