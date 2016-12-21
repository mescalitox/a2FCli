# Testacli2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## json-server
run `json-server data/users.json` for database

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Todo

* création components : 
    * *nav-bar* ,
    * *List*, 
    * *edit*, 
    * *list-item*

* *création dummy components : ui-panel, ui-button,*

* création directive : **ui-color**

* création pipe : uppercase, **search**

* *création service : manager*

* *création class user*,

* *selection user*

* *item actif*

* *formulaire*

* *suppression*

*  *popup confirm ?*

* bug : changement de sélection : form non reset... essai sur elementRef >ko, renderer >ko, 
https://angular.io/docs/ts/latest/api/core/index/ChangeDetectorRef-class.html#!#detectChanges-anchor
    * mode no-tree (event subscribed in constructor) ou tree (input)
    * solution : accentuer le mode tree pour masquer depuis le parent le component à réactualiser ex dans a2CliTplDrv avec :
        passage intermédiaire avec le détail
```html

<app-edit-item [item]="currentEditedItem" *ngIf="currentEditedItem" (onClickCancel)="onCancel($event)"></app-edit-item>
<app-detail-item *ngIf="currentItem && currentEditedItem == null" [item]="currentItem" (onClickEdit)="onEdit($event)" (onClickRemove)="onRemove($event)"></app-detail-item>
<app-ui-panel>
  <span class="ui-title">{{title}}</span>
  <div class="ui-body">
    <app-list-item *ngFor="let item of listItems" [item]="item" [isActive]="item === currentItem" (click)="onSelect(item)"></app-list-item>
  </div>
</app-ui-panel>

```
    * solution !! utiliser FormGroup méthode reactive form / model driven form, pour effectuer un reset sur ngOnChanges() (en mode tree)


* bug (click) sur ui-button déclenché meme si disabled... et hors padding

