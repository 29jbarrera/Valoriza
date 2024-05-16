import { Component } from '@angular/core';
import { CardInformationComponent } from '../../components/card-information/card-information.component';
import { CardListComponent } from '../../components/card-list/card-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardInformationComponent, CardListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  dates = [
    { text: 'Texto 1', date: '2024-05-16', icon: '../../../assets/images/tickVerde.png' },
    { text: 'Texto 2', date: null, icon: null },
    { text: 'Texto 3', date: '2024-05-18', icon: '../../../assets/images/cruzRoja.png' }
  ];
}
