---
id: controller
title: Controller
---

# Controller
Cette partie explique les étapes pour créer un controller.  
Pour appuyer nos propos, nous allons décortiquer la création de **l'endpoint `auth/login`**.

---

## 1. Mise en place du Controller

Le `AuthController` est situé dans `/controllers/auth`.

Il **étend** une classe abstraite `AbstractController`, ce qui permet :

- De **centraliser** certaines logiques communes à tous les controllers (par exemple : gestion unifiée des réponses et erreurs avec la méthode `execute()`).
- D’**éviter la duplication** de code entre les différents controllers de l’application.

### Structure de base du Controller

```typescript
@ApiTags("Auth")
@Controller("auth")
export class AuthController extends AbstractController {
  constructor(
    @Inject(IAuthService)
    private readonly authService: IAuthService,
  ) {
    super();  // Appel du constructeur parent pour initialiser la logique commune
  }
}
```

**Détail de la structure** :

- **`extends AbstractController`** :  
  Permet d’hériter d’une méthode `execute()` qui standardise le format des réponses API et centralise la gestion des erreurs.
  Cette méthode est appelée dans chaque endpoint pour exécuter le service métier et encapsuler les erreurs éventuelles proprement.
  
- **`constructor(private readonly authService: IAuthService)`** :  
  Utilise **l'injection de dépendance** de NestJS pour **injecter un service** dans le controller sans l'instancier manuellement.

- **`@Inject(IAuthService)`** :  
  Injection basée sur **l'interface** `IAuthService` et **non sur l'implémentation concrète**, ce qui suit le principe de **clean architecture**.  
  Cela favorise l'extensibilité et la testabilité, car le controller ne dépend pas d'une implémentation spécifique mais d'une abstraction.

- **`private readonly`** :  
  Le service est injecté en **lecture seule** pour garantir l'immuabilité dans le controller.

---

## 2. Exemple complet de `AuthController`

```typescript
import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Res,
  Request,
  UseGuards,
  Inject,
  Get,
  Query,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { AbstractController } from "@api/controller/controller";
import { RegisterUserDto } from "@infrastructure/dto/auth/register-user.dto";
import { LoginUserDto } from "@infrastructure/dto/auth/login-user.dto";
import { JwtResponse } from "@infrastructure/dto/auth/jwt-reponse.dto";
import { JwtAuthGuard } from "@shared/guards/jwt-auth.guard";
import { IAuthService } from "@application/auth/auth.service.interface";

@ApiTags("Auth")
@Controller("auth")
export class AuthController extends AbstractController {
  constructor(
    @Inject(IAuthService)
    private readonly authService: IAuthService,
  ) {
    super();  // Appel du constructeur parent pour initialiser la logique commune
  }

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Register a new user" })
  @ApiResponse({ status: 201, description: "User created successfully" })
  @ApiResponse({
    status: 403,
    description: "Insufficient permissions to create user in Keycloak",
  })
  @ApiBody({ type: RegisterUserDto, description: "User registration details" })
  async register(@Body() body: RegisterUserDto, @Res() res) {
    return await this.execute(
      this.authService.register(body),
      res,
      "User created successfully",
      201,
    );
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Login a user" })
  @ApiResponse({
    status: 200,
    description: "User logged in successfully",
    type: JwtResponse,
  })
  @ApiResponse({ status: 401, description: "Authentication failed" })
  @ApiBody({ type: LoginUserDto, description: "User login details" })
  async login(@Body() body: LoginUserDto, @Res() res): Promise<JwtResponse> {
    return await this.execute(
      this.authService.login(body),
      res,
      "User logged in successfully",
    );
  }

  // Autres endpoints comme refresh, verify, confirm-email, etc.
}
```

---

## 3. Documentation Swagger

Toutes les routes sont documentées grâce aux décorateurs Swagger :

- `@ApiTags("Auth")` : Regroupe les routes sous la catégorie "Auth" dans Swagger.
- `@ApiOperation()` : Donne une description rapide de l'endpoint.
- `@ApiResponse()` : Précise les réponses HTTP possibles pour chaque route.
- `@ApiBody()` : Décrit le modèle attendu dans le corps de la requête.
- `@ApiBearerAuth()` : Exige un token Bearer pour certaines routes sécurisées (comme `refresh` ou `verify/token`).

 👉 Voir [documentation](https://docs.nestjs.com/openapi/introduction) pour plus de détails.
---

## 4. Gestion des DTO (Data Transfer Object)

Les **DTO** (Data Transfer Object) sont utilisés pour :

- **Structurer** les données attendues en entrée.
- **Définir** clairement ce que le Controller accepte comme payload.
- **Séparer** les couches (le Controller ne reçoit pas directement des objets métier).

Chaque DTO est **validé** à l'aide de `class-validator` pour garantir la cohérence des données.

👉 Voir [dto.md](/docs/backend/dto.md) pour plus de détails.
---

## 5. Sécurisation des routes

- Routes sécurisées avec `JwtAuthGuard` pour les endpoints nécessitant une authentification (par exemple : `refresh`, `verify/token`).
- Routes publiques comme `login`, `register`, et `confirm-email`.

---

## 6. Enregistrement du Controller

Dans un **ControllerModule** :

```typescript
@Module({
  controllers: [AuthController],
})
export class ControllerModule {}
```

Puis importé dans le `AppModule` :

```typescript
@Module({
  imports: [ControllerModule],
})
export class AppModule {}
```