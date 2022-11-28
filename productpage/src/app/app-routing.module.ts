import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { HeaderproductComponent } from './component/headerproduct/headerproduct.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderproductComponent
  },
  {
    path: 'addproduct',
    component: AddproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
