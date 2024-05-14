import { Component } from '@angular/core';
import { MaterialesTableComponent } from './materiales-table/materiales-table.component';

@Component({
  selector: 'app-materiales',
  standalone: true,
  imports: [MaterialesTableComponent],
  templateUrl: './materiales.component.html',
  styleUrl: './materiales.component.css'
})
export class MaterialesComponent {

}
