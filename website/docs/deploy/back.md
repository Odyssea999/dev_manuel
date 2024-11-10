---

id: back  
---

# Déploiement du Backend

Le déploiement du backend de notre application se fait automatiquement à l'aide des **GitHub Actions**. Voici les étapes détaillées du processus de déploiement :

## Configuration Préalable

Avant de déployer, nous avons configuré une machine virtuelle (VM) avec les outils suivants :
- Git
- Docker
- Docker Compose
- GitHub Runner (si vous utilisez des runners auto-hébergés)

Assurez-vous que les variables nécessaires sont correctement définies dans les secrets GitHub pour garantir une configuration sécurisée.

## Jobs du Pipeline

### Test

Le job `test` exécute les tests automatisés pour vérifier le bon fonctionnement de l'API.

### Lint

Le job `lint` vérifie le respect des conventions de codage à l'aide d'outils de linting comme ESLint ou TSLint.

### Audit

Le job `audit` effectue des analyses de sécurité ou d'autres audits nécessaires, par exemple en utilisant `npm audit` ou des outils comme **Snyk**.

### Deploy

Le job `deploy` est responsable du déploiement proprement dit. Voici les étapes détaillées :

1. **Connexion SSH au Serveur**
   - Notre GitHub Runner se connecte en SSH à la VM configurée pour le déploiement. Vous devez configurer une clé SSH et l'ajouter à vos secrets GitHub pour permettre cette connexion.

2. **Accès au Dossier de l'API**
   - Une fois connecté, le runner accède au dossier où l'API est stockée sur la VM.

3. **Mise à jour des Variables d'Environnement**
   - Le runner supprime le fichier d'environnement `.env` existant et crée un nouveau fichier `.env` avec les variables sécurisées stockées dans les secrets GitHub.

4. **Pull de la Branche `main`**
   - Il effectue un `git pull` de la branche `main` pour récupérer les dernières modifications du code source.

5. **Redémarrage des Containers Docker**
   - Le runner arrête les containers Docker actuellement en cours d'exécution, puis les relance avec les modifications apportées. Cela permet de garantir que la dernière version de l'application est en production.

## Exemple de Workflow GitHub Actions

Voici un exemple d'un fichier YAML pour GitHub Actions (`.github/workflows/deploy.yml`) qui réalise ce processus de déploiement :

```yaml
name: Deploy Backend

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test

  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run lint

  deploy:
    runs-on: ubuntu-latest
    needs: [test, lint]
    steps:
      - uses: actions/checkout@v2
      - name: Set up SSH
        uses: webfactory/ssh-agent@v0.5.3
        with:
          ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
      - name: Deploy to Server
        run: |
          ssh -o StrictHostKeyChecking=no user@your-server-ip "cd /path/to/your/project && git pull origin main && docker-compose down && docker-compose up -d"
```

### Explication de ce Workflow :
1. **`test`** : Installe les dépendances avec `npm install`, puis exécute les tests avec `npm test`.
2. **`lint`** : Vérifie la qualité du code avec l'outil de linting configuré (par exemple, ESLint).
3. **`deploy`** : Après la réussite des jobs de test et de linting, il effectue le déploiement :
   - Utilise un agent SSH pour se connecter à votre serveur.
   - Exécute un `git pull` pour récupérer les dernières modifications.
   - Redémarre les containers Docker avec `docker-compose down` et `docker-compose up -d`.

## Sécurité

L'API utilise **Keycloak** pour gérer l'authentification et l'autorisation des utilisateurs. Vous devez vous assurer que les secrets nécessaires, comme les **clés API** et les **informations de connexion SSH**, sont ajoutés en toute sécurité dans les **secrets GitHub**.

De plus, assurez-vous que les variables d'environnement liées à la configuration de Keycloak et des bases de données sont sécurisées et correctement configurées dans votre fichier `.env`.

## Conclusion

Avec GitHub Actions, le déploiement du backend est automatisé, garantissant que chaque mise à jour sur la branche `main` sera testée, vérifiée, puis déployée de manière sécurisée et continue. Utilisez les outils d'intégration continue pour assurer une mise en production fluide et sans erreur.
