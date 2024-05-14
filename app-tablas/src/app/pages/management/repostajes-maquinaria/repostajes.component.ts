import { Component } from '@angular/core';
import { RepostajesMaquinariaTableComponent } from './repostajes-maquinaria-table/repostajes-table.component';


@Component({
  selector: 'app-repostajes',
  standalone: true,
  imports: [RepostajesMaquinariaTableComponent],
  templateUrl: './repostajes.component.html',
  styleUrl: './repostajes.component.css'
})
export class RepostajesMaquinariaComponent {

}
