import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderproductComponent } from './component/headerproduct/headerproduct.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderproductComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
