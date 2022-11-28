
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  todoInput =""
  constructor(private ts:TodoService) { }           //A private constructor is a special instance constructor.
                                                    // todo service file  named as a ts and ts is a variable.

  ngOnInit(): void {
  }

  addTask(){
    this.ts.addTodo(this.todoInput);
    this.todoInput=""                              // this a addtask function and enter some tasks cilck on the add button ,tasks will be added
  }

  resetForm(){
    this.todoInput =""
                                                     // this a resetform function and  enter the any mistakes click on the reset button.
  }

}