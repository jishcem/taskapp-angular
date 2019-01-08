import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserModel } from './model/user-model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/users')
            .pipe(
              retry(3),
              catchError((error: HttpErrorResponse) => {
                return throwError('Something had happened, please try again')
              })
            );
  }
}
