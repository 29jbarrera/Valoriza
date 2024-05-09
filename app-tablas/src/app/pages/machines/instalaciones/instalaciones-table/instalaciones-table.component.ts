import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { Instalaciones } from '../../../../Interfaces/instalaciones.interface';
import { InstalacionesService } from '../../../../service/instalaciones.service';


@Component({
  selector: 'app-instalaciones-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './instalaciones-table.component.html',
  styleUrl: './instalaciones-table.component.css'
})
export class InstalacionesTableComponent implements OnInit {
  instalaciones: Instalaciones[] | undefined;
  searchForm: FormGroup;

  constructor(
    private InstalacionesService: InstalacionesService ,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      centroInstalacion: [''],
      nombre: [''],
      comentarios: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.instalaciones = await this.InstalacionesService.getInstalaciones();
  }
}
