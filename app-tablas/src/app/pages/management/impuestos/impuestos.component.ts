import { Component } from '@angular/core';
import { ImpuestosTableComponent } from './impuestos-table/impuestos-table.component';

@Component({
  selector: 'app-impuestos',
  standalone: true,
  imports: [ImpuestosTableComponent],
  templateUrl: './impuestos.component.html',
  styleUrl: './impuestos.component.css'
})
export class ImpuestosComponent {

}
