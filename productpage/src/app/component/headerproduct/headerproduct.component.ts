import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerproduct',
  templateUrl: './headerproduct.component.html',
  styleUrls: ['./headerproduct.component.css']
})
export class HeaderproductComponent implements OnInit {
  products: any = [];
  text: any;
  formHeader = "Add mobile";
  product = "Add product"

  showForm = false;

  name:any;
  description: any;
  price: any;
  category: any;
  image: any;

  id: any
  Items: any;


  constructor() { }

  ngOnInit(): void {
    this.get()

  }

  deleteproduct(id: any) {
    fetch("http://localhost:7000/productRouter/products/" + id, {
      method: 'DELETE',
      headers: {
        "access-Control-Allow-Origin": "*",

      },


    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.get()
      }

      ).catch(err =>
        console.log(err))
  }

  get() {
    fetch("http://localhost:7000/productRouter/products", {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },


    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.products = result.all
        console.log(this.products)
      }

      ).catch(err =>
        console.log(err))
  }
  //openform page 
  openForm(data: any) {
    console.log(data)
    this.showForm = true;
    //openform (edit button)
    if (data) {
      this.name = data.name;
      this.description = data.description;
      this.price = data.price;
      this.category = data.category;
      this.id = data._id;
      this.formHeader = "Edit Mobile";
      this.product = "update";
      this.image = data.image;

    }
    // openform(addproduct)
    else {
      this.id = null;
      this.formHeader = "Add Mobile";
      this.product = "Add product";
      this.price = '';
      this.image = '';
      this.description = '';
      this.category = '';
      this.name = '';

    }
  }
 // cancel button 
  closeForm() {
    this.showForm = false;
    this.clearForm()
  }
  clearForm() {
    this.name = '';
    this.description = '';
    this.price;
    this.category = '';
    this.image = '';
  }

  //addproduct
  saveMobile() {
    console.log(this.description, this.image, this.price, this.description, this.name)


    this.showForm = false;
 
    var body = {
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.image,
      category: this.category
    }
    if (!this.id) {
      fetch("http://localhost:7000/productRouter/create", {
        method: 'post',
        headers: {
          "access-Control-Allow-Origin": "*",
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(body),

      })
        .then(response => response.json())
        .then(result => {
          console.log(result),
            this.Items = result
          this.get()
        }

        ).catch(err =>
          console.log(err))

    }
     // changes products
    else {

      fetch("http://localhost:7000/productRouter/products/" + this.id, {
        method: 'PUT',
        headers: {
          "access-Control-Allow-Origin": "*",
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(body),

      })
        .then(response => response.json())
        .then(result => {
          console.log(result),
            this.Items = result
          this.get()
        }

        ).catch(err =>
          console.log(err))

    }
  }
}
