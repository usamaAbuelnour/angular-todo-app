import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() todos!: Array<Todo>;
  @Output() remove = new EventEmitter<number>();
  @Output() mark = new EventEmitter<number>();
}
