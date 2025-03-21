import { Component } from '@angular/core';
import { UnidadesTableComponent } from './unidades-table/unidades-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [UnidadesTableComponent, HeaderComponent],
  templateUrl: './unidades.component.html',
  styleUrl: './unidades.component.scss'
})
export class UnidadesComponent {

}
