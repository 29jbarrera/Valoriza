import { Component } from '@angular/core';
import { RepostajesMaquinariaTableComponent } from './repostajes-maquinaria-table/repostajes-table.component';
import { HeaderComponent } from '../../../components/header/header.component';


@Component({
  selector: 'app-repostajes',
  standalone: true,
  imports: [RepostajesMaquinariaTableComponent, HeaderComponent],
  templateUrl: './repostajes.component.html',
  styleUrl: './repostajes.component.scss'
})
export class RepostajesMaquinariaComponent {

}
