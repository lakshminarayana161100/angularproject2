
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private ts:TodoService) { }           
                                                       //A private constructor is a special instance constructor.
                                                     // ts is avariable . todo service named as ts variable. 
  todos:any;

  ngOnInit(): void {

    this.todos = this.ts.todoList

  }

  removeTodo(index:any){
    this.ts.deleteTodo(index)                    // removetodo is a function.and delete the task
  }
}
