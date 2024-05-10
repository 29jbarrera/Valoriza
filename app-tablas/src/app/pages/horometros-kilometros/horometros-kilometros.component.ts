import { Component } from '@angular/core';

import { HorometrosKilometrosFormComponent } from './horometros-kilometros-form/horometros-kilometros-form.component';
import { HorometrosKilometrosTableComponent } from './horometros-kilometros-table/horometros-kilometros-table.component';

@Component({
  selector: 'app-horometros-kilometros',
  standalone: true,
  imports: [
    HorometrosKilometrosFormComponent,
    HorometrosKilometrosTableComponent,
  ],
  templateUrl: './horometros-kilometros.component.html',
  styleUrl: './horometros-kilometros.component.css',
})
export class HorometrosKilometrosComponent {}
