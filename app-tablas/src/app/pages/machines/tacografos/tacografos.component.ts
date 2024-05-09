import { Component } from '@angular/core';
import { TacografosFormComponent } from './tacografos-form/tacografos-form.component';
import { TacografosTableComponent } from './tacografos-table/tacografos-table.component';

@Component({
  selector: 'app-tacografos',
  standalone: true,
  imports: [TacografosFormComponent, TacografosTableComponent],
  templateUrl: './tacografos.component.html',
  styleUrl: './tacografos.component.css',
})
export class TacografosComponent {}
