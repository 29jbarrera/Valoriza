import { Component } from '@angular/core';
import { RepostajesTableComponent } from './repostajes-table/repostajes-table.component';

@Component({
  selector: 'app-repostajes',
  standalone: true,
  imports: [RepostajesTableComponent],
  templateUrl: './repostajes.component.html',
  styleUrl: './repostajes.component.css'
})
export class RepostajesComponent {

}
