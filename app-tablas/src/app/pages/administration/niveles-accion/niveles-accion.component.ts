import { Component } from '@angular/core';
import { NivelesAccionTableComponent } from './niveles-accion-table/niveles-accion-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-niveles-accion',
  standalone: true,
  imports: [NivelesAccionTableComponent, HeaderComponent],
  templateUrl: './niveles-accion.component.html',
  styleUrl: './niveles-accion.component.css'
})
export class NivelesAccionComponent {

}
