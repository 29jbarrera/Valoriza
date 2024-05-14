import { Component } from '@angular/core';

import { StockFormComponent } from '../stock-form/stock-form.component';
import { StockTableComponent } from '../stock-table/stock-table.component';
import { HeaderComponent } from '../../../../components/header/header.component';
@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [StockFormComponent, StockTableComponent, HeaderComponent],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css',
})
export class StockComponent {}
