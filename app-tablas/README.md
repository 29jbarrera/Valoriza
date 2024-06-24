# AppTablas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

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

## 1. LAYOUT PAGES

<section class="container-router-outlet">
  <app-header title="Ratios Maquinaria" description=""> </app-header>
  <app-ratios-maquinaria-form></app-ratios-maquinaria-form>
  <app-ratios-maquinaria-table></app-ratios-maquinaria-table>
</section>

## 2. LAYOUT PAGE FORM

<form class="col-12">
  <div
    class="p-2 grid mx-2 surface-ground border-round-xl surface-border border-2 border-dashed"
  >
    <!-- CONTENIDO AQUI DEL FORMULARIO -->
  </div>
</form>

## 3. LAYOUT PAGE TABLE
<div class="col-12 km-table-valoriza-app">

  // INDICAR ESOS ATRIBUTOS AL COMPONENTE p-table
  <p-table
    styleClass="p-datatable-sm"
    [rowsPerPageOptions]="[5, 10, 20]"
    [paginator]="true"
    [rows]="5"
  >
    <!-- CONTENIDO TABLA -->
  </p-table>
</div>
