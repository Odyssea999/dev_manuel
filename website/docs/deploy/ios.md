---
id: ios
title: Deployer sur App Store
---

# Déploiement de l'application GoAway sur l'App Store

## Pré-requis

1. **Compte Développeur Apple :** Assurez-vous que vous avez un compte développeur Apple (Payant 99 €/an).
2. **MacOS avec Xcode installé :** Vous avez besoin d'un Mac avec la dernière version de Xcode installée.
3. **Application prête pour la production :** Assurez-vous que votre application est prête pour la production, sans erreurs et optimisée.

## Étapes de déploiement

### 1. Configuration du projet Flutter

1. **Mettre à jour les métadonnées de l'application :**

   - Ouvrez `pubspec.yaml` et mettez à jour `version` et `build number`.

   ```yaml
   version: 1.0.0+1
   ```

2. **Configurer les icônes de l'application :**

   - Utilisez `flutter_launcher_icons` pour générer les icônes d'application nécessaires.

   ```yaml
   dev_dependencies:
     flutter_launcher_icons: ^0.9.2

   flutter_icons:
     android: true
     ios: true
     image_path: "assets/icon/icon.png"
   ```

3. **Mettre à jour `Info.plist` :**

   - Ouvrez `ios/Runner/Info.plist` et ajoutez les autorisations nécessaires.

   ```xml
   <dict>
   		<key>CADisableMinimumFrameDurationOnPhone</key>
   		<true />
   		<key>NSPhotoLibraryUsageDescription</key>
   		<string>Cette application a besoin d'accéder à votre galerie pour vous permettre de
   			sélectionner une image.</string>
   		<key>NSCameraUsageDescription</key>
   		<string>Cette application a besoin d'accéder à votre appareil photo pour vous permettre de
   			prendre une photo.</string>
   		<key>NSLocationWhenInUseUsageDescription</key>
   		<string>Cette application a besoin d'accéder à votre position pour vous fournir des
   			informations basées sur votre emplacement.</string>
   		<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
   		<string>Cette application a besoin d'accéder à votre position même lorsqu'elle est en
   			arrière-plan pour vous fournir des informations basées sur votre emplacement.</string>
   		<key>NSLocationAlwaysUsageDescription</key>
   		<string>Cette application a besoin d'accéder à votre position même lorsqu'elle est en
   			arrière-plan pour vous fournir des informations basées sur votre emplacement.</string>
   		<key>CFBundleDevelopmentRegion</key>
   		<string>$(DEVELOPMENT_LANGUAGE)</string>
   		<key>CFBundleDisplayName</key>
   		<string>GoAway</string>
   		<key>CFBundleExecutable</key>
   		<string>$(EXECUTABLE_NAME)</string>
   		<key>CFBundleIdentifier</key>
   		<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
   		<key>CFBundleInfoDictionaryVersion</key>
   		<string>6.0</string>
   		<key>CFBundleName</key>
   		<string>goaway_app</string>
   		<key>CFBundlePackageType</key>
   		<string>APPL</string>
   		<key>CFBundleShortVersionString</key>
   		<string>$(FLUTTER_BUILD_NAME)</string>
   		<key>CFBundleSignature</key>
   		<string>????</string>
   		<key>CFBundleVersion</key>
   		<string>$(FLUTTER_BUILD_NUMBER)</string>
   		<key>LSRequiresIPhoneOS</key>
   		<true />
   		<key>UIApplicationSupportsIndirectInputEvents</key>
   		<true />
   		<key>UILaunchStoryboardName</key>
   		<string>LaunchScreen</string>
   		<key>UIMainStoryboardFile</key>
   		<string>Main</string>
   		<key>UIStatusBarHidden</key>
   		<false />
   		<key>UISupportedInterfaceOrientations</key>
   		<array>
   			<string>UIInterfaceOrientationPortrait</string>
   			<string>UIInterfaceOrientationLandscapeLeft</string>
   			<string>UIInterfaceOrientationLandscapeRight</string>
   		</array>
   		<key>UISupportedInterfaceOrientations~ipad</key>
   		<array>
   			<string>UIInterfaceOrientationPortrait</string>
   			<string>UIInterfaceOrientationPortraitUpsideDown</string>
   			<string>UIInterfaceOrientationLandscapeLeft</string>
   			<string>UIInterfaceOrientationLandscapeRight</string>
   		</array>
   		<key>LSApplicationQueriesSchemes</key>
   		<array>
   			<string>http</string>
   			<string>https</string>
   		</array>
   		<key>LSApplicationQueriesSchemes</key>
   		<array>
   			<string>http</string>
   			<string>https</string>
   		</array>
   		<key>NSPhotoLibraryUsageDescription</key>
   		<string>Cette application à besoin de votre permission pour accéder a votre galerie photo.</string>
   		<key>NSPhotoLibraryAddUsageDescription</key>
   		<string>Cette application à besoin de votre permission pour sauvegarder les photos.</string>
   	</dict>
   ```

### 2. Préparation dans Xcode

1. **Ouvrir le projet iOS dans Xcode :**

   ```bash
   open ios/Runner.xcworkspace
   ```

2. **Configurer les paramètres du projet :**

   - Sélectionnez le projet `Runner` dans le navigateur de projet.
   - Sous l'onglet `General`, remplissez `Display Name`, `Bundle Identifier`, et sélectionnez votre `Team`.

3. **Configurer les capacités :**
   - Activez les capacités nécessaires, comme `Push Notifications` et `Background Modes` si nécessaire.

### 3. Construire l'application

1. **Nettoyer le projet Flutter :**

   ```bash
   flutter clean
   ```

2. **Obtenir les dépendances :**

   ```bash
   flutter pub get
   ```

3. **Construire l'application pour iOS :**
   ```bash
   flutter build ios --release
   ```

### 4. Soumettre l'application via Xcode

1. **Archiver l'application :**

   - Dans Xcode, sélectionnez `Product` > `Archive`.

2. **Valider l'archive :**

   - Après l'archivage, cliquez sur `Distribute App` et suivez les instructions pour valider l'application.

3. **Téléverser sur App Store Connect :**
   - Sélectionnez `App Store Connect` et suivez les instructions pour téléverser l'application.

### 5. Configuration sur App Store Connect

1. **Créer une nouvelle application :**

   - Allez sur [App Store Connect](https://appstoreconnect.apple.com/).
   - Sélectionnez `My Apps` > `+` > `New App`.

2. **Remplir les informations de l'application :**

   - Renseignez le `Nom`, le `Bundle ID`, la `Catégorie`, et les autres informations nécessaires.

3. **Téléverser les captures d'écran :**

   - Fournissez les captures d'écran pour chaque appareil pris en charge (iPhone, iPad, etc.).

4. **Soumettre pour révision :**
   - Sous l'onglet `App Store`, cliquez sur `Submit for Review`.

### 6. Suivi du processus de révision

1. **Suivre le statut :**

   - Sur App Store Connect, suivez le statut de votre application dans l'onglet `Activity`.

2. **Répondre aux retours d'Apple :**
   - Si Apple demande des modifications, apportez-les et soumettez à nouveau l'application.

### 7. Publication

1. **Publication automatique :**

   - Une fois approuvée, votre application sera automatiquement publiée si vous avez sélectionné cette option.

2. **Publication manuelle :**
   - Si vous avez choisi la publication manuelle, allez sur App Store Connect et publiez l'application lorsque vous êtes prêt.

## Conclusion

Vous avez maintenant toutes les étapes nécessaires pour déployer votre application "GoAway" sur l'App Store !
