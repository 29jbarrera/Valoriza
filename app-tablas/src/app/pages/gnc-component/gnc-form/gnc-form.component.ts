import { Component } from '@angular/core';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-gnc-form',
  standalone: true,
  imports: [InputMaskModule,InputNumberModule,InputTextModule,CalendarModule],
  templateUrl: './gnc-form.component.html',
  styleUrl: './gnc-form.component.css'
})
export class GncFormComponent {

}
