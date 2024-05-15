import { Component } from '@angular/core';
import { CategoriasTableComponent } from './categorias-table/categorias-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CategoriasTableComponent, HeaderComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

}
