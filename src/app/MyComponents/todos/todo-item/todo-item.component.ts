import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;
  
  @Output()
  todoDelete: EventEmitter<Todo > = new EventEmitter();

  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been traced")
  }

}
