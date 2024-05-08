import { Component } from '@angular/core';

import { GruasFormComponent } from '../gruas-form/gruas-form.component';
import { GruasTableComponent } from '../gruas-table/gruas-table.component';

@Component({
  selector: 'app-gruas',
  standalone: true,
  imports: [GruasFormComponent, GruasTableComponent],
  templateUrl: './gruas.component.html',
  styleUrl: './gruas.component.css',
})
export class GruasComponent {}
