import { Component } from '@angular/core';

import { HeaderComponent } from '../../../components/header/header.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockTableComponent } from './stock-table/stock-table.component';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [StockFormComponent, StockTableComponent, HeaderComponent],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss',
})
export class StockComponent {}
