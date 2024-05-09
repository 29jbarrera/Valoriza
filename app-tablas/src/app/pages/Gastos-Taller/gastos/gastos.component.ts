import { Component } from '@angular/core';

import { GastosFormComponent } from '../gastos-form/gastos-form.component';
import { GastosTableComponent } from '../gastos-table/gastos-table.component';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [GastosFormComponent, GastosTableComponent],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css',
})
export class GastosComponent {}
