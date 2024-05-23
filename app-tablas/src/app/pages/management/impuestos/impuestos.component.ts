import { Component } from '@angular/core';
import { ImpuestosTableComponent } from './impuestos-table/impuestos-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-impuestos',
  standalone: true,
  imports: [ImpuestosTableComponent, HeaderComponent],
  templateUrl: './impuestos.component.html',
  styleUrl: './impuestos.component.scss'
})
export class ImpuestosComponent {

}
