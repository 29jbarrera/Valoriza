import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StockService } from '../../../service/stock.service';

import { Stock } from '../../../Interfaces/stock.interface';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-stock-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './stock-table.component.html',
  styleUrl: './stock-table.component.css',
})
export class StockTableComponent implements OnInit {
  stock: Stock[] | undefined;
  searchForm: FormGroup;

  constructor(private StockService: StockService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      nombreCentro: [''],
      nombreReferenciaMaterial: [''],
      descripcionRefMaterial: [''],
      cantidad: [''],
      importe: [''],
      divisa: [''],
    });
  }

  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.stock = await this.StockService.getStock();
  }
}
