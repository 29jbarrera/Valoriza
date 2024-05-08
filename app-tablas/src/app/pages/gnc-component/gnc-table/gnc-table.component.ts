import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Gnc } from '../../../Interfaces/gnc.interface';

import { GncService } from '../../../service/gnc.service';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-gnc-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './gnc-table.component.html',
  styleUrl: './gnc-table.component.css',
})
export class GncTableComponent implements OnInit {
  gnc: Gnc[] | undefined;
  searchForm: FormGroup;
  constructor(
    private GncService: GncService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      maquinaria: [''],
      nombrecentro: [''],
      delegacion: [''],
      familia: [],
      subfamilia: [''],
      fechaproxima: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.gnc = await this.GncService.getGnc();
  }
}
