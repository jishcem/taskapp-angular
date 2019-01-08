import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  taskId$ : Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {    
    this.taskId$ = this.route.paramMap.pipe(
      switchMap( (params: ParamMap) => { return params.get('id'); } )
    );  
  }

}
