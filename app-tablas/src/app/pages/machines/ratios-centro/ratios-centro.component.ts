import { Component } from '@angular/core';
import { RatiosCentroFormComponent } from './ratios-centro-form/ratios-centro-form.component';
import { RatiosCentroTableComponent } from './ratios-centro-table/ratios-centro-table.component';

@Component({
  selector: 'app-ratios-centro',
  standalone: true,
  imports: [RatiosCentroFormComponent,RatiosCentroTableComponent],
  templateUrl: './ratios-centro.component.html',
  styleUrl: './ratios-centro.component.css'
})
export class RatiosCentroComponent {

}
