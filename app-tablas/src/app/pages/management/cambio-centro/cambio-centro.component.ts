import { Component } from '@angular/core';
import { CambioCentroTableComponent } from './cambio-centro-table/cambio-centro-table.component';

@Component({
  selector: 'app-cambio-centro',
  standalone: true,
  imports: [CambioCentroTableComponent],
  templateUrl: './cambio-centro.component.html',
  styleUrl: './cambio-centro.component.css'
})
export class CambioCentroComponent {

}
