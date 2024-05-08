import { Component, OnInit } from '@angular/core';

import { HorometrosKilometros } from '../../../Interfaces/horometros-kilometros.interface';

import { FormGroup, FormBuilder } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { HorometrosKilometrosService } from '../../../service/horometros-kilometros.service';

@Component({
  selector: 'app-horometros-kilometros-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './horometros-kilometros-table.component.html',
  styleUrl: './horometros-kilometros-table.component.css'
})
export class HorometrosKilometrosTableComponent implements OnInit {

  horometrosKilometros: HorometrosKilometros[] | undefined;
  searchForm: FormGroup;

  constructor(
    private HorometrosKilometrosService: HorometrosKilometrosService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      centroMaquina: [''],
      subFamilia: [''],
      maquinaria: [''],
      marca: [],
      modelo: [''],
      horometroFinal: [''],
      kilometroFinal: [''],
      fecha: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.horometrosKilometros = await this.HorometrosKilometrosService.getHorometrosKilometros();
  }
}
