
[Youtube tuto Llior Chalma](https://www.youtube.com/watch?v=vr8-bSIT9iE&t=173s)

[learn.web-develop.me](https://learn.web-develop.me/angular-le-pack-kickstarter?coupon=EARLY-BIRD-ANGULAR)

# AngularWorkspace PIERRE
Pour créer un espace de travail Angular il faut :
- ``ng new --create-application=false``
je l'ai nommer **ANGULARWORKSPACE**
cela va créer un espace de travail anguar mais sans projet

- pour créer different projets a l'interieur de cette espace de travail :
 `ng generate application`
- le premier je l'ai nommer **Playground**
même commande que pour créer un composant mais aver l'option [application]() et non [component]()
- `ng serve -o`
pour lancer l'application en local avec option -o pour open le navigateur automatiquement
---
---
# AngularWorkspace ANGULAR
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---
---

# Mes Projets -> `/projects/projectName`:
- ng-switch-directive 
- playground
  > - @Directive - création d'un directive `HighLightDirective`
  > - @HostListener('eventName', ['$event.clientX','$event.clientY']) ajout d'un écouteur d'evenement.