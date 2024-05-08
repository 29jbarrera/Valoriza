import { Component } from '@angular/core';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-stock-form',
  standalone: true,
  imports: [
    InputNumberModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
  ],
  templateUrl: './stock-form.component.html',
  styleUrl: './stock-form.component.css',
})
export class StockFormComponent {}
