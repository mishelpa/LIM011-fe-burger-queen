import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.scss']
})
export class OrderFoodComponent implements OnInit {

  public dateOrder: Date;
  public nameClient: string;
  public orders: any;
  public totalBill: number;
  public orderTotal: any;

  constructor(private firestoreService: FirestoreService, private router: Router) {
    this.firestoreService.currentListProducts.subscribe(product => { this.orders = product; });
  }

  ngOnInit(): void {
    this.dateOrder = new Date();
  }

  getTotalBill() {
    if (this.orders.length > 0) {
    this.totalBill = this.orders.map(product => product.quantity * product.data.price).reduce((a, b) => {
      return a + b;
    });
  }
    return this.totalBill;
  }

  createOrderFood() {
    const arrayProducts = this.orders.map(product => {
      const arrayProduct = {
        qty: product.quantity,
        product: {
          productId: product.id,
          name: product.data.name,
          price: product.data.price,
          image: product.data.image,
          type: product.data.type,
          dateEntry: product.data.dateEntry
        },
      };
      return arrayProduct;
    });
    return this.orderTotal = {
     client: this.nameClient,
     status: 'pending',
     dateEntry: new Date(),
     products: arrayProducts
    };
  }

  postOrderFood() {
    console.log(this.createOrderFood());
    this.firestoreService.postOrder(this.createOrderFood())
    .then(() => {
      console.log('Documento creado exitósamente!');
      this.router.navigate(['/orders']);
    });
  }
}
