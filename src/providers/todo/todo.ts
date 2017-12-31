import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
 private todos=[];
 private archivetodos=[];
  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }
  getToDos(){
    return this.todos;
  }
  getArchiveToDos()
  {
    return this.archivetodos;
  }
  addToDo(todo)
  {
  this.todos.push(todo);
  }
  archiveTodo(todoIndex)
  {
    let todoToBeArchived=this.todos[todoIndex];
    this.archivetodos.push(todoToBeArchived);
    this.todos.splice(todoIndex,1);
  }
  editToDo(editTodoIndex,enteredData){
    this.todos[editTodoIndex]=enteredData;
  }
}
