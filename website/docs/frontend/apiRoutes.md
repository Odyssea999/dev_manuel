---
id: apiRoutes
title: Classe ApiRoutesService
---

# ApiRoutesService

`ApiRoutesService` est une classe qui centralise la gestion des endpoints backend pour votre application. Elle offre une approche organisée et maintenable pour gérer les URLs de votre API.

## Caractéristiques principales

- Centralisation des endpoints API
- Organisation des routes par fonctionnalité
- Facilité de maintenance et de mise à jour
- Utilisation recommandée dans les services Angular

## Installation et utilisation

Injectez `ApiRoutesService` dans vos services Angular pour accéder aux endpoints de manière centralisée.

Exemple :

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutesService } from './api-routes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private apiRoutes: ApiRoutesService
  ) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post(this.apiRoutes.AUTH.LOGIN, credentials);
  }
}
```

## Méthodes utilitaires

### `getAllApiRoutes()`
Retourne toutes les routes API sous forme d'un tableau.

#### Exemple d'utilisation :
```typescript
const allRoutes = this.apiRoutes.getAllApiRoutes();
console.log(allRoutes);
// Résultat : ["/auth/login", "/auth/register", "/auth/refresh", ...]
```


## Exclusion des URLs (`EXCLUDED_URLS`)

Certaines URLs peuvent être exclues (par exemple, pour ne pas ajouter de token d'authentification dans un interceptor). Ces URLs sont définies dans la propriété `EXCLUDED_URLS`.

#### Exemple :
```typescript
public readonly EXCLUDED_URLS: string[] = [
  this.AUTH.LOGIN,
  this.BOARD_MEMBERSHIP.VERIFY_INVITATION,
  this.AUTH.REGISTER,
];
```

#### Utilisation dans un interceptor HTTP :
```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { ApiRoutesService } from './api-routes.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private apiRoutes: ApiRoutesService) {}

  intercept(req: HttpRequest, next: HttpHandler) {
    if (this.apiRoutes.EXCLUDED_URLS.some((url) => req.url.includes(url))) {
      return next.handle(req); // Ne pas ajouter de token si l'URL est exclue
    }

    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer token`,
      },
    });

    return next.handle(clonedRequest);
  }
}
```


## Bonnes pratiques

1. **Centralisation** : Utilisez ce service pour centraliser toutes vos routes API,uniquement dans les services, pas directement dans les composants
2. **Lisibilité** : Organisez vos endpoints par fonctionnalité (comme `AUTH`, `BOARD`, etc.) de plus les clés dans les objets doivent être uniques.
3. **Réutilisabilité** : Réutilisez les routes dans vos services ou composants sans répéter les chaînes de caractères.
4. **Maintenance simplifiée** : En cas de changement d'URL côté backend, modifiez simplement ce service.
5. **Utilisation sécurisée** : Excluez les routes sensibles ou publiques dans `EXCLUDED_URLS`.
