import { Component } from '@angular/core';
import { RepostajeVehiculosTableComponent } from './repostaje-vehiculos-table/repostaje-vehiculos-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-repostaje-vehiculos',
  standalone: true,
  imports: [RepostajeVehiculosTableComponent, HeaderComponent],
  templateUrl: './repostaje-vehiculos.component.html',
  styleUrl: './repostaje-vehiculos.component.scss',
})
export class RepostajeVehiculosComponent {}
