import { Component } from '@angular/core';
import { TablasGlobalesTableComponent } from './tablas-globales-table/tablas-globales-table.component';

@Component({
  selector: 'app-tablas-globales',
  standalone: true,
  imports: [TablasGlobalesTableComponent],
  templateUrl: './tablas-globales.component.html',
  styleUrl: './tablas-globales.component.css'
})
export class TablasGlobalesComponent {

}
