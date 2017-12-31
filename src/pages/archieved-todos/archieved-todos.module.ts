import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchievedTodosPage } from './archieved-todos';

@NgModule({
  declarations: [
    ArchievedTodosPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchievedTodosPage),
  ],
})
export class ArchievedTodosPageModule {}
