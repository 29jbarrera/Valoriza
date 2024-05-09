import { Component } from '@angular/core';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preventivo-form',
  standalone: true,
  imports: [
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
    TreeSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './preventivo-form.component.html',
  styleUrl: './preventivo-form.component.css',
})
export class PreventivoFormComponent {
  time: Date[] | undefined;
}
