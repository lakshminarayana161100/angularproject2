import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/mobile.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  constructor(private ms:MobileService,private http:HttpClient) { }
   products:any = [];
   dd:any = [];
  ngOnInit(): void {
this.ms.fetchMobiles().subscribe((result) =>{
  this.products = [result]
  var dd = JSON.stringify(this.products.all)
  console.log(dd)
  console.log(result)
})

}
}