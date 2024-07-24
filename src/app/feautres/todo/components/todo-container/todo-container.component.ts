import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.scss',
})
export class TodoContainerComponent {
  todos: Array<Todo> = [];

  add(todoArg: string): void {
    if (!this.todos.find((todo) => todo.todo === todoArg) && todoArg)
      this.todos.push({ todo: todoArg, isCompleted: false });
  }
  remove(index: number): void {
    this.todos.splice(index, 1);
  }
  mark(index: number): void {
    this.todos[index].isCompleted = true;
  }
}
