import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { UserComponent } from './users/user.component';
import { TaskComponent } from './tasks/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    TasksModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [UserComponent, TaskComponent]
})
export class AppModule { }
