import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.scss']
})
export class OrderProductsComponent implements OnInit {
  @Input() typeProduct: string;
  public productsInOrders: any;
  public orders: any;


  constructor(private firestoreService: FirestoreService) {
  }

  ngOnInit(): void {
    this.firestoreService.getProducts().subscribe((productsSnapshot) => {
      this.productsInOrders = [];
      productsSnapshot.forEach((prodData: any) => {
        this.productsInOrders.push({
          id: prodData.payload.doc.id,
          data: prodData.payload.doc.data()
        });
      });
      this.productsInOrders.sort((a, b) => a.data.type > b.data.type ? -1 : 1);
      console.log(this.productsInOrders);
    });
  }

  sendOrder(product) {
    this.firestoreService.addListProducts(product);
  }

}
