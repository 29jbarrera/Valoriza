import { Component } from '@angular/core';
import { ReparacionesFormComponent } from './reparaciones-form/reparaciones-form.component';
import { ReparacionesTableComponent } from './reparaciones-table/reparaciones-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-reparaciones',
  standalone: true,
  imports: [
    ReparacionesFormComponent,
    ReparacionesTableComponent,
    HeaderComponent,
  ],
  templateUrl: './reparaciones.component.html',
  styleUrl: './reparaciones.component.css',
})
export class ReparacionesComponent {}
