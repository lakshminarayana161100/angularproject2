import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',

  
  styleUrls: [ 'employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


public selectedId!:number;
  employee = [
    {"id": 1, "name": "Suresh"},
    {"id": 2, "name": "Naresh"},
    {"id": 3, "name": "Nikhil"},
    {"id": 4, "name": "Sohail"},
    {"id": 5, "name": "Mouni"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      //let id = parseInt(params.get('id'));
      //this.selectedId = id;
    
    } );
  }

}
