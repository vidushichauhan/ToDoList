import { Component } from '@angular/core';
import { Todo } from "../../todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: string;
  todos!: Todo[];
  constructor() {
    
    this.localItem =localStorage.getItem("todos") || '{}';
    if(this.localItem == null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }

  }
  deleteToDo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  todoAdd(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  onCheckboxClick(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
