import { Component } from '@angular/core';
import { NavController ,AlertController,reorderArray,ToastController} from 'ionic-angular';
import { TodoProvider} from '../../providers/todo/todo';
import { ArchievedTodosPage } from '../../pages/archieved-todos/archieved-todos'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public reorderIsEnabled=true;
  public todos=["Home","Love"];
  constructor(private toastController:ToastController,public navCtrl: NavController,public alertController:AlertController,private todoService:TodoProvider) {
this.todos=this.todoService.getToDos();
  }
  toggleReorder(){
    this.reorderIsEnabled=!this.reorderIsEnabled;
  }
  itemReordered($event){
    reorderArray(this.todos,$event);
  }
  goToArchivePage(){
    this.navCtrl.push(ArchievedTodosPage);
  }
  archiveTodo(todoIndex)
  {
    this.todoService.archiveTodo(todoIndex);
    let newToastMsg=this.toastController.create({
      message:"ToDo Moved to Archived",
      duration:2000
    });
    newToastMsg.present();
  }
  addToDoAlert(){
  
    let addToDoAlerts=this.alertController.create(
      {
        title:"Add Task",
        message:"Enter Your ToDo task",
        inputs:[
          {
            type:"text",
            name:"addToDoInput"
          }
        ],
        buttons:[
          {
            text:"Cancel"
          },
          {
            text:"Add Task",
            handler: (inputData)=>{
              let enteredData;
              enteredData=inputData.addToDoInput;
              this.todoService.addToDo(enteredData);
              addToDoAlerts.onDidDismiss(()=>{
                let newToastMsg=this.toastController.create({
                  message:"ToDo Added",
                  duration:2000
                });
                newToastMsg.present();
              });
             
            }
          }
        ]
      });
      addToDoAlerts.present();
  }
  editToDoAlert(editTodoIndex){
    
      let editToDoAlerts=this.alertController.create(
        {
          title:"Edit Task",
          message:"Edit Your ToDo task",
          inputs:[
            {
              type:"text",
              name:"editToDoInput",
              value:this.todos[editTodoIndex]
            }
          ],
          buttons:[
            {
              text:"Cancel"
            },
            {
              text:"Edit Task",
              handler: (inputData)=>{
                let enteredData;
                enteredData=inputData.editToDoInput;
                this.todoService.editToDo(editTodoIndex,enteredData);
                editToDoAlerts.onDidDismiss(()=>{
                  let newToastMsg=this.toastController.create({
                    message:"ToDo Added",
                    duration:2000
                  });
                  newToastMsg.present();
                });
               
              }
            }
          ]
        });
        editToDoAlerts.present();
    }
}
