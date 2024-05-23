import { Component } from '@angular/core';
import { CambioCentroTableComponent } from './cambio-centro-table/cambio-centro-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-cambio-centro',
  standalone: true,
  imports: [CambioCentroTableComponent, HeaderComponent],
  templateUrl: './cambio-centro.component.html',
  styleUrl: './cambio-centro.component.scss'
})
export class CambioCentroComponent {

}
