import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GruasService } from '../../../../service/gruas.service';

import { Gruas } from '../../../../Interfaces/gruas.interface';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-gruas-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './gruas-table.component.html',
  styleUrl: './gruas-table.component.css',
})
export class GruasTableComponent implements OnInit {
  gruas: Gruas[] | undefined;
  searchForm: FormGroup;

  constructor(private GruasService: GruasService, private fb: FormBuilder) {
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

  async buscar() {
    const filtros = this.searchForm.value;
    this.gruas = await this.GruasService.buscarGruas(filtros);
  }

  async actualizarTabla() {
    this.gruas = await this.GruasService.getGruas();
  }
}
