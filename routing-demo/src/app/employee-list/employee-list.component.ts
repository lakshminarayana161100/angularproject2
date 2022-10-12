import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <h3>
      Employee-list 
</h3>
    <ul class="items">
      <li *ngFor="let employee of employee">
        <span class="badge">{{employee.id}}</span> {{employee.name}}
      </li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {


public selectedId!:number;
  employee = [
    {"id": 1, "name": "suresh"},
    {"id": 2, "name": "naresh"},
    {"id": 3, "name": "nikhil"},
    {"id": 4, "name": "sohail"},
    {"id": 5, "name": "mouni"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      //let id = parseInt(params.get('id'));
      //this.selectedId = id;
    
    } );
  }

}
