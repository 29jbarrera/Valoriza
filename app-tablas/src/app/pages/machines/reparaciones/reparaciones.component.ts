import { Component } from '@angular/core';
import { ReparacionesFormComponent } from './reparaciones-form/reparaciones-form.component';
import { ReparacionesTableComponent } from './reparaciones-table/reparaciones-table.component';


@Component({
  selector: 'app-reparaciones',
  standalone: true,
  imports: [ReparacionesFormComponent,ReparacionesTableComponent],
  templateUrl: './reparaciones.component.html',
  styleUrl: './reparaciones.component.css'
})
export class ReparacionesComponent {

}
