import { Component } from '@angular/core';

import { GncFormComponent } from '../gnc-form/gnc-form.component';
import { GncTableComponent } from './../gnc-table/gnc-table.component';

@Component({
  selector: 'app-gnc',
  standalone: true,
  imports: [GncFormComponent,GncTableComponent],
  templateUrl: './gnc.component.html',
  styleUrl: './gnc.component.css'
})
export class GncComponent {

}
