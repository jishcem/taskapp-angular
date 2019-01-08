import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserComponent } from './users/user.component';
import { TaskComponent } from './tasks/task.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [  
  {
    path: 'home',  component: HomeComponent 
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'user', loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'task', loadChildren: './tasks/tasks.module#TasksModule'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
