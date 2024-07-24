import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent implements AfterViewInit {
  @ViewChild('inputElement') inputElement!: ElementRef;

  @Output() add = new EventEmitter<string>();

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus();
  }

  handleAdd() {
    const input = this.inputElement.nativeElement as HTMLInputElement;
    this.add.emit(input.value);
  }
}
