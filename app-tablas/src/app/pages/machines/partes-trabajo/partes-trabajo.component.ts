import { Component } from '@angular/core';
import { PartesFormComponent } from './partes-form/partes-form.component';
import { PartesTableComponent } from './partes-table/partes-table.component';

@Component({
  selector: 'app-partes-trabajo',
  standalone: true,
  imports: [PartesFormComponent, PartesTableComponent],
  templateUrl: './partes-trabajo.component.html',
  styleUrl: './partes-trabajo.component.css'
})
export class PartesTrabajoComponent {

}
