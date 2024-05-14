import { Component } from '@angular/core';
import { RepostajeVehiculosTableComponent } from './repostaje-vehiculos-table/repostaje-vehiculos-table.component';

@Component({
  selector: 'app-repostaje-vehiculos',
  standalone: true,
  imports: [RepostajeVehiculosTableComponent],
  templateUrl: './repostaje-vehiculos.component.html',
  styleUrl: './repostaje-vehiculos.component.css'
})
export class RepostajeVehiculosComponent {

}
