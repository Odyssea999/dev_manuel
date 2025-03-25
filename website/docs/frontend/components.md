---
id: components
title: Component
---

# Component

## Introduction
Les composants sont les blocs de construction fondamentaux d'une application Angular. Chaque composant est une classe TypeScript qui est associée à un template HTML et une feuille de styles CSS.

## Structure d'un Composant
Un composant Angular est défini par un décorateur `@Component` et comprend les éléments suivants :

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'od-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  title: string = 'Hello Angular';
}
```

### Explication des éléments :
- **selector** : Définit la balise HTML permettant d'utiliser le composant.
- **templateUrl** : Indique le fichier HTML associé.
- **styleUrls** : Liste des fichiers CSS associés.
- **Classe TypeScript** : Contient les propriétés et méthodes utilisées dans le template.

## Création d'un Composant
On peut générer un composant Angular via la CLI :
```sh
ng generate component nom-du-composant
```
ou
```sh
ng g c nom-du-composant
```

Il est également possible de spécifier un chemin pour créer le composant dans un dossier particulier :
```sh
ng g c chemin/vers/dossier/nom-du-composant
```
Exemple :
```sh
ng g c components/shared/button
```
Cela créera un composant `button` dans `src/app/components/shared/`.

## Communication entre Composants
### Passer des données du parent vers l'enfant
Utilisation du décorateur `@Input()` :

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'od-child',
  template: '<p>{{ data }}</p>'
})
export class ChildComponent {
  @Input() data!: string;
}
```
Dans le parent :
```html
<od-child [data]="parentData"></od-child>
```

### Envoyer des données de l'enfant vers le parent
Utilisation du décorateur `@Output()` et `EventEmitter` :

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'od-child',
  template: '<button (click)="sendData()">Envoyer</button>'
})
export class ChildComponent {
  @Output() notifyParent = new EventEmitter<string>();

  sendData() {
    this.notifyParent.emit('Donnée envoyée !');
  }
}
```
Dans le parent :
```html
<od-child (notifyParent)="receiveData($event)"></od-child>
```

## Cycle de Vie d'un Composant
Angular fournit plusieurs hooks de cycle de vie :

- `ngOnInit()` : Exécuté après l'initialisation du composant.
- `ngOnChanges()` : Appelé lorsqu'une propriété d'entrée change.
- `ngOnDestroy()` : Exécuté avant la destruction du composant.

Exemple :
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'od-example',
  template: '<p>Exemple</p>'
})
export class ExampleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Composant initialisé');
  }
  ngOnDestroy() {
    console.log('Composant détruit');
  }
}
```
