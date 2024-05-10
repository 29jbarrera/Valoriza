import { Component } from '@angular/core';
import { TasasCentroFormComponent } from './tasas-centro-form/tasas-centro-form.component';
import { TasasCentroTableComponent } from './tasas-centro-table/tasas-centro-table.component';

@Component({
  selector: 'app-tasas-centros',
  standalone: true,
  imports: [TasasCentroFormComponent, TasasCentroTableComponent],
  templateUrl: './tasas-centros.component.html',
  styleUrl: './tasas-centros.component.css',
})
export class TasasCentrosComponent {}
