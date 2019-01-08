import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  {
    path: 'task', 
    component: TaskComponent,
    children: [
      {
        path: '',
        component: TaskListComponent
      },
      {
        path: 'show/:id',
        component: TaskViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
