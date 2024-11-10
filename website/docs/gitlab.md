---
id: gitlab
title: Gitlab
---

# Gitlab

Bienvenue dans la section qui couvre les aspects fondamentaux et les meilleures pratiques pour l'utilisation de GitLab dans notre projet.

## Introduction

GitLab est une plateforme DevOps complète qui permet de gérer l'ensemble du cycle de vie du développement logiciel. Elle offre des fonctionnalités robustes pour le contrôle de version, l'intégration continue (CI), la livraison continue (CD), la gestion des problèmes, et bien plus encore.

## Principales Fonctionnalités Utilisées

### Contrôle de Version

GitLab utilise Git pour le contrôle de version, permettant aux développeurs de collaborer efficacement sur le code source. Voici quelques commandes Git de base :

- **Cloner le dépôt :**
  ```bash
  git clone https://gitlab.com/your-repo/your-project.git
  ```
- **Créer une nouvelle branche :**
```bash
git checkout -b nouvelle-branche
```
- **Ajouter des modifications :** 
```bash 
git add .
```
- **Valider des modifications :**
```bash 
git commit -m "Message de commit"
```
- **Pousser les modifications :**
```bash
git push origin nouvelle-branche
```
[Plus de commandes Git](https://www.hostinger.fr/tutoriels/commandes-git)

### Normes de Commit

Pour garantir la clarté et la cohérence des modifications dans le dépôt, il est essentiel de suivre les normes de commit suivantes :

- **Messages de Commit :** Les messages de commit doivent être clairs et descriptifs en anglais si possible.

- **Types de Modifications :** Préfixez le message de commit avec le type de modification effectuée. Les types courants incluent :
  - `feat`: Une nouvelle fonctionnalité
  - `fix`: Une correction de bug
  - `docs`: Modifications uniquement de la documentation
  - `style`: Des modifications qui n'affectent pas la signification du code (espaces, formatage, points-virgules manquants, etc.)
  - `refactor`: Une modification du code qui ne corrige ni un bug ni n'ajoute une fonctionnalité
  - `perf`: Une modification du code qui améliore les performances
  - `test`: Ajouter des tests manquants ou corriger des tests existants
  - `chore`: Modifications du processus de build ou des outils auxiliaires et bibliothèques telles que la génération de documentation

- **Structure du Message de Commit :** Le message de commit doit être structuré de la manière suivante :
  - **Message :** Une description plus détaillée des modifications, le cas échéant. Utilisez des phrases courtes et claires.
  - **Pied de page :** Références aux issues ou tickets associés, si applicable. Utilisez des mots-clés comme `Fixes`, `Closes` suivi du numéro de l'issue.


- **Exemple de Message de Commit :**
  ```plaintext
  fix: resolve navigation bug an issue where navigation to the profile page would fail due to a bug in the routing logic.
  Closes #123


###  Gestion des Issues

Pour la gestion des issues, nous avons mis en place des templates préalablement définis pour faciliter le processus de création et de suivi des tâches, des bugs et des nouvelles fonctionnalités. Lorsque vous créez une nouvelle issue, veuillez utiliser le template approprié et assurez-vous de remplir toutes les informations nécessaires.
Chaque issue est rélié à une branche. Chaque branche est associé à une Merge Request.

###  Gestion Merge Request
De même, pour les merge requests, nous avons également configuré des templates pour garantir une revue efficace du code. Lorsque vous ouvrez une nouvelle merge request, veuillez suivre le template et fournir toutes les informations requises, y compris une description détaillée des modifications apportées et des tests effectués.

###  Intégration Continue et Livraison Continue (CI/CD)

Notre pipeline CI/CD est déjà configuré et opérationnel dans le projet. Il automatise les processus de construction, de test et de déploiement de l'application à chaque modification du code source sur des branches ciblés. Les étapes du pipeline comprennent la compilation du code, l'exécution des tests unitaires et d'intégration, la création d'artefacts et le déploiement sur les environnements de développement, de test et de production.

Assurez-vous que chaque commit respecte les conventions de nommage des branches et de description des commits pour déclencher correctement les étapes du pipeline. En cas de problème avec le pipeline, consultez les journaux et les rapports de test pour identifier et résoudre les problèmes rapidement.

N'hésitez pas à utiliser les fonctionnalités avancées de GitLab pour surveiller et améliorer les performances de notre pipeline CI/CD, telles que les runners spécifiques, la parallélisation des tâches et les environnements protégés.




