import { Component } from '@angular/core';
import { RatiosCentroFormComponent } from './ratios-centro-form/ratios-centro-form.component';
import { RatiosCentroTableComponent } from './ratios-centro-table/ratios-centro-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-ratios-centro',
  standalone: true,
  imports: [
    RatiosCentroFormComponent,
    RatiosCentroTableComponent,
    HeaderComponent,
  ],
  templateUrl: './ratios-centro.component.html',
  styleUrl: './ratios-centro.component.css',
})
export class RatiosCentroComponent {}
