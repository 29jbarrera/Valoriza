import { Component } from '@angular/core';
import { RatiosMaquinariaFormComponent } from './ratios-maquinaria-form/ratios-maquinaria-form.component';
import { RatiosMaquinariaTableComponent } from './ratios-maquinaria-table/ratios-maquinaria-table.component';

@Component({
  selector: 'app-ratios-maquinaria',
  standalone: true,
  imports: [RatiosMaquinariaFormComponent, RatiosMaquinariaTableComponent],
  templateUrl: './ratios-maquinaria.component.html',
  styleUrl: './ratios-maquinaria.component.css'
})
export class RatiosMaquinariaComponent {

}
