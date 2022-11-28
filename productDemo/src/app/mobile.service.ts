import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }
   url ="http://localhost:7000/productRouter/products"
   fetchMobiles(){
    return this.http.get(this.url)
   }

}
