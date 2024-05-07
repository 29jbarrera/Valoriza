import { Component, OnInit } from '@angular/core';

import { GruasService } from '../../service/gruas.service';

import { Gruas } from '../../Interfaces/gruas.interface';

import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-gruas',
  standalone: true,
  imports: [TableModule, CommonModule, InputNumberModule, InputTextModule, InputMaskModule],
  templateUrl: './gruas.component.html',
  styleUrl: './gruas.component.css'
})
export class GruasComponent implements OnInit {
  gruas: Gruas[] | undefined;

  constructor(private GruasService: GruasService) {}

  ngOnInit() {
      this.GruasService.getGruas().then((data) => {
          this.gruas = data;
      });
  }
}
