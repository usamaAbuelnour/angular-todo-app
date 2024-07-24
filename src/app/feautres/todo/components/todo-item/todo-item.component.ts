import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo!: string;
  @Input() isCompleted!: boolean;
  @Output() remove = new EventEmitter<number>();
  @Output() mark = new EventEmitter<number>();
}
