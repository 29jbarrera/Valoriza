import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PreventivoService } from '../../../../service/preventivo.service';
import { Preventivo } from '../../../../Interfaces/preventivo.interface';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-preventivo-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './preventivo-table.component.html',
  styleUrl: './preventivo-table.component.css'
})
export class PreventivoTableComponent implements OnInit {
  preventivo: Preventivo[] | undefined;
  searchForm: FormGroup;

  constructor(
    private PreventivoService: PreventivoService,
    private fb: FormBuilder
  ){
    this.searchForm = this.fb.group({
      centroMaquina:[''],
      subfamilia:[''],
      maquinaria:[''],
      nivel:[''],
      posicion:[''],
      horromMant:[''],
      horromFinal:[''],
      kmMant:[''],
      kmFinal:[''],
      fecha:[''],
    });
  }
  ngOnInit(){
      this.actualizarTabla();
  }
  async actualizarTabla() {
    this.preventivo = await this.PreventivoService.getPreventivo();
  }
}
