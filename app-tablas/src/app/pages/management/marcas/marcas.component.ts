import { Component } from '@angular/core';
import { MarcasTableComponent } from './marcas-table/marcas-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [MarcasTableComponent, HeaderComponent],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css',
})
export class MarcasComponent {}
