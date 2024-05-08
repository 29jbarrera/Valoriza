import { Component, OnInit } from '@angular/core';

import { StockFormComponent } from '../stock-form/stock-form.component';
import { StockTableComponent } from '../stock-table/stock-table.component';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [StockFormComponent, StockTableComponent],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css',
})
export class StockComponent {}
