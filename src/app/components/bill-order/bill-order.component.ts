import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-bill-order',
  templateUrl: './bill-order.component.html',
  styleUrls: ['./bill-order.component.scss']
})
export class BillOrderComponent {

  public orders: any;
  public num: number;
  constructor(private firestoreService: FirestoreService) {
    this.firestoreService.currentListProducts.subscribe(product => this.orders = product);
  }

  deleteProductOfBill(product) {
    const indexProduct = this.orders.indexOf(product);
    this.orders.splice(indexProduct, 1);
  }

}
