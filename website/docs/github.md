---
id: github
title: GitHub
---

# GitHub

Bienvenue dans la section qui couvre les aspects fondamentaux et les meilleures pratiques pour l'utilisation de GitHub dans notre projet.

## Introduction

GitHub est une plateforme collaborative DevOps populaire qui offre des fonctionnalités robustes pour le contrôle de version, l'intégration continue (CI), la livraison continue (CD), la gestion des issues, et bien plus encore. Ce document présente les pratiques recommandées pour utiliser GitHub efficacement au sein de notre projet.

## Principales Fonctionnalités Utilisées

### Contrôle de Version

GitHub utilise Git pour le contrôle de version, permettant aux développeurs de collaborer efficacement sur le code source. Voici quelques commandes Git de base :

- **Cloner le dépôt :**
  ```bash
  git clone https://github.com/Odyssea999/mobile_app.git
  ```
- **Créer une nouvelle branche :**
  ```bash
  git checkout -b new-branch
  ```
- **Ajouter des modifications :** 
  ```bash
  git add .
  ```
- **Valider des modifications :**
  ```bash
  git commit -m "Commit message"
  ```
- **Pousser les modifications :**
  ```bash
  git push origin new-branch
  ```
[Plus de commandes Git](https://www.hostinger.fr/tutoriels/commandes-git)

### Normes de Commit

Pour garantir la clarté et la cohérence des modifications dans le dépôt, il est essentiel de suivre les normes de commit suivantes :

- **Messages de Commit :** Les messages de commit doivent être clairs et descriptifs en anglais si possible.

- **Types de Modifications :** Préfixez le message de commit avec le type de modification effectuée. Les types courants incluent :
  - `feat`: Une nouvelle fonctionnalité
  - `fix`: Une correction de bug
  - `docs`: Modifications de documentation
  - `style`: Changements de formatage sans modification de code (espaces, ponctuation, etc.)
  - `refactor`: Modifications de code sans changement de fonctionnalité
  - `perf`: Améliorations de performance
  - `test`: Ajout ou correction de tests
  - `chore`: Changements dans les outils ou processus

- **Structure du Message de Commit :** Le message de commit doit être structuré de la manière suivante :
  - **Sujet :** Résumé court et précis de la modification.
  - **Description :** Une explication plus détaillée des modifications, le cas échéant.
  - **Pied de page :** Références aux issues associées, si applicable, avec des mots-clés comme `Fixes` ou `Closes` suivi du numéro de l'issue.

- **Exemple de Message de Commit :**
  ```plaintext
  fix: resolve navigation bug where profile navigation would fail due to routing issue
  Closes #123
  ```

<!-- ### Gestion des Issues

Pour la gestion des issues, nous avons mis en place des templates pour standardiser le processus de création et de suivi des tâches, bugs, et nouvelles fonctionnalités. Lors de la création d'une issue, utilisez le template approprié et assurez-vous de remplir toutes les informations nécessaires. Chaque issue est liée à une branche, et chaque branche est associée à une Pull Request. -->

### Gestion des Pull Requests

Pour les pull requests, nous avons configuré des templates afin de garantir des revues de code efficaces. Lors de l'ouverture d'une pull request, suivez le template et fournissez une description détaillée des modifications et des tests effectués.

### Intégration Continue et Livraison Continue (CI/CD)

Notre pipeline CI/CD est configuré pour automatiser la construction, le test et le déploiement de l'application à chaque modification sur les branches cibles. Le pipeline inclut la compilation du code, les tests unitaires et d'intégration, la création d'artefacts, et le déploiement sur les environnements de développement, de test et de production.

Assurez-vous que chaque commit respecte les conventions de nommage des branches et des descriptions pour déclencher correctement les étapes du pipeline. En cas de problème avec le pipeline, consultez les journaux et rapports de test pour diagnostiquer et résoudre les problèmes.

Utilisez les fonctionnalités de GitHub pour surveiller et améliorer les performances de notre pipeline CI/CD, telles que les GitHub Actions, la parallélisation des tâches, et la gestion des secrets pour les environnements protégés.

## Ressources supplémentaires

- [GitHub Documentation](https://docs.github.com/)
- [Commandes Git essentielles](https://www.hostinger.fr/tutoriels/commandes-git)
- [GitHub Actions pour CI/CD](https://docs.github.com/en/actions)
