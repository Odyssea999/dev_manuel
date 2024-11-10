---
id: back
---

# Déploiement du Backend avec GitLab CI/CD

Le déploiement du backend de notre application se fait automatiquement à l'aide des pipelines GitLab CI/CD. Voici les étapes détaillées du processus de déploiement :

## Configuration Préalable

Avant de déployer, nous avons configuré une machine virtuelle (VM) avec les outils suivants :
- Git
- Docker
- Docker Compose
- GitLab Runner

Assurez-vous que les variables nécessaires sont correctement définies dans la section CI/CD de GitLab.

## Jobs du Pipeline

### Test

Le job `test` exécute les tests automatisés pour vérifier le bon fonctionnement de l'API.

### Lint

Le job `lint` vérifie le respect des conventions de codage à l'aide d'outils de linting.

### Audit

Le job `audit` effectue des analyses de sécurité ou d'autres audits nécessaires.

### Deploy

Le job `deploy` est responsable du déploiement proprement dit. Voici les étapes détaillées :

1. **Connexion SSH au Serveur**
   - Notre GitLab Runner se connecte en SSH à la VM configurée pour le déploiement.

2. **Accès au Dossier de l'API**
   - Une fois connecté, le runner accède au dossier où est située l'API.

3. **Mise à jour des Variables d'Environnement**
   - Le runner supprime le fichier d'environnement `.env` existant et crée un nouveau fichier `.env` avec les variables sécurisées stockées dans GitLab.

4. **Pull de la Branche `main`**
   - Il effectue un `git pull` de la branche `main` pour obtenir les dernières modifications du code.

5. **Redémarrage des Containers Docker**
   - Enfin, le runner arrête les containers Docker actuellement en cours d'exécution pour les relancer avec les modifications apportées.

Ceci garantit que notre backend est déployé de manière automatisée et sécurisée à chaque mise à jour sur la branche `main`, assurant ainsi une disponibilité continue de notre application.
