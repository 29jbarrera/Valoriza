import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [InputTextModule, CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  @Input() title: string = '';
  @Input() data: { text: string; date: string | null; icon: string | null }[] =
    [{ text: '', date: '', icon: '' }];
}
