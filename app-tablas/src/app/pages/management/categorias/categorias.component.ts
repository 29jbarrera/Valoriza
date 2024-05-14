import { Component } from '@angular/core';
import { CategoriasTableComponent } from './categorias-table/categorias-table.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CategoriasTableComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

}
