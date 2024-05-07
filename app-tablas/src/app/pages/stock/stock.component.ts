import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockService } from '../../service/stock.service';

import { Centro } from '../../Interfaces/centro.interface';

import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [TableModule, CommonModule,InputNumberModule,InputTextModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css',
})
export class StockComponent implements OnInit {
  centros: Centro[] | undefined;

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stockService.getCentros().then((data) => {
      this.centros = data;
    });
  }
}
