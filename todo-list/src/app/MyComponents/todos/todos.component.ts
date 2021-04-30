import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'this is title 1',
        desc: 'description 1',
        active: true,
      },
      {
        sno: 2,
        title: 'this is title 2',
        desc: 'description 2',
        active: true,
      },
      {
        sno: 3,
        title: 'this is title 3',
        desc: 'description 3',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
  }

}
