import { Component } from '@angular/core';
import { MarcasTableComponent } from './marcas-table/marcas-table.component';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [MarcasTableComponent],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent {

}
