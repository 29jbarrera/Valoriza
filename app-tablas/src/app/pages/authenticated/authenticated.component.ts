import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'app-authenticated',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, MapComponent],
  templateUrl: './authenticated.component.html',
  styleUrl: './authenticated.component.scss',
})
export class AuthenticatedComponent {}
