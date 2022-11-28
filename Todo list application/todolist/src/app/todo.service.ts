
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId =3
  todoList =[
    {
      id:1,'task':"Task1"
    },                                           // add given the task and this is a array
    {
      id:2,'task':"Task2"
    }
  ]

  constructor() { }

  addTodo(taskName:any){
    this.todoList.push({"id":this.taskId++,'task':taskName})
  }                                        // addtodo is a function  and added one/one tasks
            
  deleteTodo(index:any){
    this.todoList.splice(index,1)
  }                                       //delete is a function and remove the add task
}