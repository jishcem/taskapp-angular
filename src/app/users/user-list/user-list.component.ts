import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<Array<UserModel>>;

  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
    this.users$ = this.service.getUsers();
  }

}
