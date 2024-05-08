import { Component, OnInit } from '@angular/core';

import { StockService } from '../../../service/stock.service';

import { Centro } from '../../../Interfaces/centro.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-table',
  standalone: true,
  imports: [],
  templateUrl: './stock-table.component.html',
  styleUrl: './stock-table.component.css',
})
export class StockTableComponent implements OnInit {
  stock: Centro[] | undefined;
  searchForm: FormGroup;
centros: any;

  constructor(private StockService: StockService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      centro: [''],
      familia: [''],
      maquinaria: [''],
      fechaDesde: [''],
      fechaHasta: [''],
    });
  }

  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.stock = await this.StockService.getCentros();
  }
}

