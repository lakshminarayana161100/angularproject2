import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  
  
  styleUrls: ['./department-list.component.html']
})
export class DepartmentListComponent implements OnInit {
  
  public selectedId!:number;
  departments = [
    {"id": 1, "name": "CSE Departmet"},
    {"id": 2, "name": "IT Departmat"},
    {"id": 3, "name": "Mechanical Depatment"},
    {"id": 4, "name": "Civil Department"},
    {"id": 5, "name": "ECE Department"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      //let id = parseInt(params.get('id'));
      //this.selectedId = id;
    
    } );
  }

  onSelect(department:any) {
    //this.router.navigate(['/departments', department.id]);
     this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department:any) { return department.id === this.selectedId; }
}
