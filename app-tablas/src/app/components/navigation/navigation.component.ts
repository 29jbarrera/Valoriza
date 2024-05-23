import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DocComponent } from '../../doc/doc.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenuComponent, DocComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
