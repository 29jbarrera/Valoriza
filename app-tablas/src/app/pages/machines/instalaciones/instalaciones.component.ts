import { Component } from '@angular/core';

import { InstalacionesFormComponent } from './instalaciones-form/instalaciones-form.component';
import { InstalacionesTableComponent } from './instalaciones-table/instalaciones-table.component';

@Component({
  selector: 'app-instalaciones',
  standalone: true,
  imports: [InstalacionesFormComponent, InstalacionesTableComponent],
  templateUrl: './instalaciones.component.html',
  styleUrl: './instalaciones.component.css',
})
export class InstalacionesComponent {}
