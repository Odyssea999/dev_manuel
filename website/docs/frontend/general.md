---
id: general
title: Général
---

# Organisation des fichiers Angular

Ce document décrit la structure du projet Angular en mettant en avant les principaux répertoires et fichiers.

## 📂 Structure du répertoire `app`

L'organisation des fichiers respecte l'architecture modulaire d'Angular pour assurer une meilleure scalabilité et maintenabilité.

### `src/` (Racine du projet)
Ce dossier contient tous les fichiers sources de l'application.

- **`app/`** : Contient l'ensemble des modules et composants de l'application.
- **`environments/`** : Contient les fichiers de configuration pour différents environnements (`dev`, `prod`).
- **`styles/`** : Contient les fichiers SCSS/CSS globaux.

### 1️⃣ `core/` - Module Central
Le dossier `core` contient tous les services et configurations qui doivent être chargés une seule fois dans l'application.

- **`services/`** : Contient les services globaux (ex. `auth.service.ts`, `http.service.ts`).
- **`guards/`** : Contient les guards pour sécuriser les routes (ex. `auth.guard.ts`).
- **`interceptors/`** : Contient les interceptors HTTP pour gérer les requêtes et réponses globales.

---

### 2️⃣ `pages/` - Pages de l'Application
Ce dossier regroupe toutes les pages accessibles via le routing Angular.
Chaque page possède son propre module pour le lazy loading.

Exemple de structure :
```
pages/
│-- home/
│   │-- home.component.ts
│   │-- home.component.html
│   │-- home.module.ts
│
│-- dashboard/
│   │-- dashboard.component.ts
│   │-- dashboard.component.html
│   │-- dashboard.module.ts
```

---

### 3️⃣ `shared/` - Composants et Modules Réutilisables
Ce répertoire contient les éléments réutilisables dans toute l’application.

- **`components/`** : Contient des composants partagés (ex. `navbar.component.ts`, `button.component.ts`).
- **`directives/`** : Contient des directives Angular réutilisables.
- **`pipes/`** : Contient les pipes personnalisés (ex. `date-format.pipe.ts`).

---

### 4️⃣ `app.routes.ts` - Configuration des Routes
Ce fichier définit toutes les routes principales de l’application en utilisant le `RouterModule` d’Angular.

Exemple de structure :
```typescript
export const routes: Routes = [
  {
    path: 'board',
    children: [
      {
        path: 'dashboard',
        component: BoardDashboardComponent,
        canActivate: [AuthGuard],
        title: 'Board Dashboard',
      },
      {
        path: ':board_uuid',
        component: BoardComponent,
        canActivate: [AuthGuard],
        title: 'Board',
      },
    ],
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
```

---

## 📜 Fichiers Importants

- **`angular.json`** : Configuration principale du projet Angular.
- **`package.json`** : Déclare les dépendances et scripts de build.
- **`tsconfig.json`** : Fichier de configuration TypeScript.
- **`.editorconfig`** : Définit les règles de formatage du code.

---


## 📂 Structure Générale



---

## 📁 Détails des Répertoires Principaux

### `app/` (Dossier principal de l'application)
Ce dossier est divisé en plusieurs sous-modules pour organiser les fonctionnalités.

#### `core/` (Noyau de l'application)
Ce module regroupe les services et composants partagés à travers l'application.

- **`services/`** : Contient les services injectables (ex. `auth.service.ts`, `http.service.ts`).
- **`guards/`** : Définit les guards de navigation Angular (ex. `auth.guard.ts`).
- **`interceptors/`** : Contient les interceptors HTTP pour la gestion des requêtes.
- **`models/`** : Définit les interfaces et modèles de données utilisés dans l'application.

#### `shared/` (Composants et modules réutilisables)
Ce module contient les éléments qui peuvent être utilisés dans plusieurs parties de l'application.

- **`components/`** : Stocke les composants réutilisables (ex. `button.component.ts`).
- **`pipes/`** : Contient les pipes Angular pour la transformation des données.
- **`directives/`** : Définit les directives personnalisées.
- **`utils/`** : Contient les fonctions utilitaires globales.

#### `features/` (Modules fonctionnels de l'application)
Chaque fonctionnalité est placée dans son propre module pour favoriser une architecture modulaire.

Exemples :

- **`auth/`** : Gère l'authentification (ex. `login.component.ts`, `register.component.ts`).
- **`dashboard/`** : Module dédié au tableau de bord.
- **`profile/`** : Gère les profils utilisateurs.

#### `routing/` (Gestion des routes de l'application)
- **`app-routing.module.ts`** : Contient la configuration globale des routes.
- Chaque module dispose de son propre fichier `routing.module.ts`.

---

## 📜 Fichiers Importants

- **`angular.json`** : Configuration principale du projet Angular.
- **`package.json`** : Déclare les dépendances et scripts de build.
- **`tsconfig.json`** : Fichier de configuration TypeScript.
- **`.editorconfig`** : Définit les règles de formatage du code.

---

### 🎯 Bon développement ! 🚀



