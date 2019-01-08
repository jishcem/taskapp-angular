import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [  
  {
    path: 'home',  component: HomeComponent 
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'users/list', component: UserListComponent
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
