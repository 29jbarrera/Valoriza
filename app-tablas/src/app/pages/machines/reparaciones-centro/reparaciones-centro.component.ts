import { Component } from '@angular/core';
import { ReparacionesCentroFormComponent } from './reparaciones-centro-form/reparaciones-centro-form.component';
import { ReparacionesCentroTableComponent } from './reparaciones-centro-table/reparaciones-centro-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-reparaciones-centro',
  standalone: true,
  imports: [
    ReparacionesCentroFormComponent,
    ReparacionesCentroTableComponent,
    HeaderComponent,
  ],
  templateUrl: './reparaciones-centro.component.html',
  styleUrl: './reparaciones-centro.component.css',
})
export class ReparacionesCentroComponent {}
