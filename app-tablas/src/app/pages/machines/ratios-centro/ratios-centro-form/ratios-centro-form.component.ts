import { Component } from '@angular/core';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { TreeSelectModule } from 'primeng/treeselect';

@Component({
  selector: 'app-ratios-centro-form',
  standalone: true,
  imports: [
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
    InputGroupAddonModule,
    InputGroupModule,
    ButtonModule,
    TreeSelectModule,
  ],
  templateUrl: './ratios-centro-form.component.html',
  styleUrl: './ratios-centro-form.component.css',
})
export class RatiosCentroFormComponent {}
