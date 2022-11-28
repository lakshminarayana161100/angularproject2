import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { RouteService } from './route.service';

const routes: Routes = [
  {path: 'departments', component:DepartmentListComponent},
  {path: 'employees', component:EmployeeListComponent},
  {path:'table',component:TableComponent,canActivate:[RouteService,]},                           // give the path names and component names
  {path:'menu',component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentListComponent,EmployeeListComponent,TableComponent,MenuComponent] //give the component names