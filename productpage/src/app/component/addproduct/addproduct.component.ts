import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  Items:any;
  testForms! :FormGroup
  // form Array 
  testForm = new FormGroup ({
    mobileNums: new FormArray(
        [                                        
          new FormControl(null,Validators.required)
        ]
      )
    })
  constructor() { }

  ngOnInit(): void {
    this.testForms=new FormGroup({
      'name':new FormControl(''),
      'description':new FormControl(''),
      'category':new FormControl(''),
      'price':new FormControl(''),
      'image':new FormControl(''),
    
    
    })
  }
  postaddress(data:any){
    console.log(data)
  let requestOptions = {
    method:'POST',
    body:data
    
  }
  
    
  fetch("http://localhost:7000/productRouter/create" ,{
    method:'post',
    headers:{
      "access-Control-Allow-Origin":"*",
      "Content-Type":'application/json'
    },
    body:JSON.stringify(data),
    
  })
  .then(response => response.json())
  .then(result => {
    console.log(result),
  this.Items = result
  }
  
   ).catch(err=> 
    console.log(err))
  }

}
