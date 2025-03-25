---
id: traduction
title: Traduction
---

# Utilisation de la traduction

### Dans les templates HTML avec TranslatePipe

1. Traduction simple :
   Pour traduire un texte simple, utilisez le pipe `translate` :

   ```html
   {{ 'TITRE_PAGE' | translate }}
   {{ 'DESCRIPTION' | translate }}
   ```

2. Traduction avec paramètres :
   Pour des traductions incluant des variables, passez un objet avec les paramètres :

   ```html
   {{ 'BIENVENUE' | translate:{ nom: utilisateur.nom } }}
   ```

3. Traduction d'attributs :
   Vous pouvez aussi traduire les attributs des éléments HTML :

   ```html
   <input [placeholder]="'ENTREZ_EMAIL' | translate" />
   ```

4. Traduction de contenu HTML :
   Pour traduire du contenu HTML, utilisez la directive `[innerHTML]` :

   ```html
   <div [innerHTML]="'TEXTE_AVEC_HTML' | translate"></div>
   ```

5. Valeur par défaut :
   Si la clé de traduction n'existe pas, vous pouvez définir une valeur par défaut :

   ```html
   {{ 'CLE_INCONNUE' | translate:'Texte par défaut' }}
   ```

6. Traduction dans les directives structurelles :
   Vous pouvez utiliser la traduction dans les directives comme `*ngIf` :

   ```html
   
     {{ condition }}
   
   ```

### Bonnes pratiques d'utilisation

1. Utilisez des clés de traduction cohérentes et descriptives.
2. Groupez les traductions par fonctionnalité ou composant dans vos fichiers de traduction.
3. Évitez les chaînes de caractères en dur dans vos templates.
4. Utilisez des paramètres pour les parties variables des traductions.
5. Testez vos traductions dans différentes langues pour assurer une bonne mise en page.
6. Préférez l'utilisation de TranslatePipe dans les templates pour une meilleure lisibilité et maintenabilité.
7. Assurez-vous que toutes les clés de traduction sont définies dans vos fichiers de traduction pour éviter les erreurs.

### Configuration du changement de langue

Pour permettre le changement de langue, vous pouvez créer un composant ou un service dédié qui utilise `TranslateService`. Par exemple :

```typescript
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'od-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [
    TranslatePipe,
  ],
})
export class ExampleComponent {
  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
```