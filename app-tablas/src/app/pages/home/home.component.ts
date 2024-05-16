import { Component } from '@angular/core';
import { HomeDataGroupComponent } from './home-data-group/home-data-group.component';
import { HomeDataItemComponent } from './home-data-item/home-data-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeDataGroupComponent, HomeDataItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataItem: { icon: string, title: string, description: string }[] = [
    { icon: '../../../assets/images/clockX.png', title: '282 caducadas', description: 'ITV' },
    { icon: '../../../assets/images/fastClock.png', title: '277 vencen antes de 30 días', description: 'ITV' },
    { icon: '../../../assets/images/clockX.png', title: '87 caducadas', description: 'Tacógrafo' },
    { icon: '../../../assets/images/fastClock.png', title: '51 vencen antes de 30 días', description: 'Tacógrafo' },
    { icon: '../../../assets/images/clockX.png', title: '12 caducadas', description: 'GNC' },
    { icon: '../../../assets/images/fastClock.png', title: '87 1 vencen antes de 30 días', description: 'GNC' },
    { icon: '../../../assets/images/clockX.png', title: '13 caducadas', description: 'Grúa' },
    { icon: '../../../assets/images/fastClock.png', title: 'undefined vencen antes de null días', description: 'Grúa' },
  ];
}
