import { Component } from '@angular/core';
import { Todo } from "../../todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
   
  todos!: Todo[];
  constructor(){
   this.todos = [
    {
      sno : 3,
      title : 'This is title',
      desc : "Description",
      active : true

    },
    {
      sno : 2,
      title : 'This is title',
      desc : "Description",
      active : true

    },
    {
      sno : 2,
      title : 'This is title',
      desc : "Description",
      active : true

    }
   ]

  }

  ngOnInit() : void { 

  }


}
