import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider} from '../../providers/todo/todo';
/**
 * Generated class for the ArchievedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archieved-todos',
  templateUrl: 'archieved-todos.html',
})
export class ArchievedTodosPage {
public archivedTodosList=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private todoService:TodoProvider) {
 
  }

  ionViewDidLoad() {
    this.archivedTodosList=this.todoService.getArchiveToDos();
  }

}
