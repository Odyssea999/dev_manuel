---
id: dto
title: Data Transfer Object (DTO)
---

# DTO
Cette partie explique les étapes pour créer un controller.
Pour appuyer nos propos, nous allons décortiquer la création de **l'endpoint `auth/login`**.

# 📚 Mise en place du DTO

Le **DTO (Data Transfer Object)** est une classe qui définit précisément la structure des données reçues ou retournées par les endpoints.

Il permet de :

- Valider les données entrantes avec **class-validator**
- Générer automatiquement la documentation **Swagger**
- Assurer une cohérence forte des types dans l'application

---

# 1. Exemple de DTO : `LoginUserDto`

```typescript
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'User password (at least 10 characters, with uppercase, lowercase, number, and special character)',
    example: 'password12M@',
  })
  @IsNotEmpty()
  @MinLength(10, { message: 'Password must be at least 10 characters long' })
  @Matches(/(?=.*[A-Z])/, {
    message: 'Password must contain at least one uppercase letter',
  })
  @Matches(/(?=.*[a-z])/, {
    message: 'Password must contain at least one lowercase letter',
  })
  @Matches(/(?=.*\d)/, {
    message: 'Password must contain at least one number',
  })
  @Matches(/(?=.*[@$!%*?&])/, {
    message:
      'Password must contain at least one special character (@, $, !, %, *, ?, &)',
  })
  password: string;
}
```

---

# 2. Explication des éléments utilisés
Grâce à `class-validator` et `class-transformer`, les données entrantes sont **automatiquement validées** avant d'atteindre la logique métier.

NestJS s'appuie sur un **global validation pipe** dans `main.ts` :

```typescript
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
```

Explication :

- `whitelist: true` ➔ supprime toutes les propriétés non attendues.
- `forbidNonWhitelisted: true` ➔ génère une erreur si un champ non autorisé est présent.
- `transform: true` ➔ convertit automatiquement les payloads en objets DTO.

En cas d'erreur de validation (ex: champ manquant ou invalide), une réponse HTTP 400 est retournée automatiquement, sans toucher au Controller.

**Exemple de réponse en cas d'erreur** :

```json
{
  "statusCode": 400,
  "message": [
    "email must be an email",
    "password must be a string"
  ],
  "error": "Bad Request"
}
```
## a. Décorateurs Swagger

- `@ApiProperty()`: Permet d'exposer les propriétés dans la documentation générée par Swagger.
- Facilite l'auto-documentation de l'API sans effort supplémentaire.

## b. Validation des champs

Utilisation de **class-validator** pour sécuriser les données :

- `@IsEmail()`: Valide que l'email est conforme au format standard.
- `@IsNotEmpty()`: Vérifie que le champ n’est pas vide.
- `@MinLength(10)`: Impose une longueur minimale pour le mot de passe.
- `@Matches(regex)`: Valide la présence de :
  - Une majuscule
  - Une minuscule
  - Un chiffre
  - Un caractère spécial

Chaque règle de validation peut également personnaliser le message d'erreur retourné.

---

# 3. Où sont placés les DTO ?

Tous les DTO sont rangés dans le dossier :

```bash
/infrastructure/dto/<feature>/
```

Exemple pour l'authentification :

```bash
/infrastructure/dto/auth/login-user.dto.ts
```

---

# 4. Rôle du DTO dans le Flux de l'endpoint

- Le client envoie les données sous forme d'objet.
- NestJS valide automatiquement les données contre le DTO **avant** que la requête n'arrive dans le controller.
- Si les données sont invalides, une erreur 400 est automatiquement retournée.

---

# 🛠️ Bonnes pratiques

- Toujours séparer les DTO pour chaque action (ex: `LoginUserDto`, `RegisterUserDto`).
- Ajouter des exemples (`example`) dans `@ApiProperty` pour enrichir Swagger.
- Rendre les messages d'erreur explicites et compréhensibles.
