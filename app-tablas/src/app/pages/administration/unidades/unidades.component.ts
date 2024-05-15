import { Component } from '@angular/core';
import { UnidadesTableComponent } from './unidades-table/unidades-table.component';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [UnidadesTableComponent],
  templateUrl: './unidades.component.html',
  styleUrl: './unidades.component.css'
})
export class UnidadesComponent {

}
