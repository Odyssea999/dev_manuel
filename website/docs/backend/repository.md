---
id: repository
title: Repository
---
# Repository

Cette partie décrit la structure et le fonctionnement du **repository d'authentification**.

---

# 1. Mise en place du Repository

Le repository `AuthImplRepository` est situé dans `/infrastructure/repository/auth/`.

Il implémente l'interface `IAuthRepository` et sert à :
- Gérer l'interaction avec la base de données via TypeORM.
- Gérer le stockage et la validation des refresh tokens.
- Gérer la création de comptes utilisateurs et la connexion.
- Envoyer des emails de confirmation d'inscription.
- S'assurer de la sécurité via cryptage et hashing.

---

# 2. Interface du Repository

L'interface `IAuthRepository` définit les opérations que l'implémentation doit respecter :

```typescript
import { IRefreshTokenModel } from "@domain/models/auth/refresh-token.model";
import { LoginUserDto } from "@infrastructure/dto/auth/login-user.dto";
import { RegisterUserDto } from "@infrastructure/dto/auth/register-user.dto";

export interface IAuthRepository {
  /**
   * Créer un utilisateur
   */
  createUser(credentials: RegisterUserDto): Promise<Object>;

  /**
   * Connecter un utilisateur
   */
  login(credentials: LoginUserDto): Promise<Object>;

  /**
   * Valider un utilisateur via un token
   */
  validateUser(token: string): Promise<Object>;
}
```

---

# 3. Implémentation du Repository

Le `AuthImplRepository` utilise :
- `TypeORM` pour interagir avec les entités `UserEntity` et `RefreshTokenEntity`.
- `JwtService` pour signer et vérifier des tokens.
- `CryptoSecurity` pour hasher et crypter/décrypter les données sensibles.
- `EmailService` pour envoyer des emails de confirmation.

```typescript
@Injectable()
export class AuthImplRepository implements IAuthRepository {
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private readonly refreshTokenRepository: Repository<IRefreshTokenModel>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
```

---

# 4. Principales méthodes

## `createUser`

- Crée un nouvel utilisateur avec un mot de passe hashé.
- Génère un token de vérification et envoie un email de confirmation.
- S'assure que l'email n'est pas déjà utilisé.

```typescript
async createUser(credentials: RegisterUserDto): Promise<{ id: string }>
```

---

## `login`

- Authentifie un utilisateur avec email et mot de passe.
- Vérifie que l'email est validé et que le compte est activé.
- Génére un `access_token` JWT et un `refresh_token` stocké dans la base.

```typescript
async login(credentials: LoginUserDto): Promise<{ access_token: string }>
```

---

## `validateUser`

- Valide le compte d'un utilisateur via un token JWT envoyé par email.
- Active l'utilisateur et confirme son email.

```typescript
async validateUser(token: string): Promise<{ message: string }>
```

---

# 5. Méthodes additionnelles

## `create`

- Sauvegarde un refresh token encrypté en base.

## `findByUserId`

- Récupère les refresh tokens actifs d'un utilisateur.

## `deleteByUserId`

- Supprime un refresh token pour un utilisateur.

## `generateUniqueUsername`

- Génère automatiquement un nom d'utilisateur unique basé sur prénom + nom.

---

# 6. Sécurité et bonnes pratiques

- **Hashing des mots de passe** via `CryptoSecurity.hashPassword`.
- **Chiffrement des tokens** dans la base via `CryptoSecurity.encryptData`.
- **Gestion sécurisée des erreurs** avec des exceptions spécifiques (`BadRequestException`, `UnauthorizedException`, `InternalServerErrorException`, etc).
- **Utilisation de JWT RSA** (`RS256`) pour signer les tokens avec clé privée en base64.

---

# 7. Architecture

| Élément            | Rôle                                                      |
|--------------------|------------------------------------------------------------|
| AuthImplRepository | Implémente l'interface de repository pour l'authentification |
| TypeORM            | ORM utilisé pour accéder à la base de données               |
| JwtService         | Génération et validation de JWT                            |
| CryptoSecurity     | Chiffrement/déchiffrement et hashing                        |
| EmailService       | Envoi des mails de confirmation d'inscription               |
