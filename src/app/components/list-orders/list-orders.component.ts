import { Component, Input, OnChanges } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnChanges {

  @Input() public statusOrder: string;

  public orders: any;
  public products: any;
  public orderById: any;
  public orderFilter: any;
  constructor(private firestoreService: FirestoreService) {
  }

  ngOnChanges(): void {
    this.firestoreService.getListOrders().subscribe((ordersSnapshot) => {
      this.orders = [];
      ordersSnapshot.forEach((orderData: any) => {
        this.orders.push({
          id: orderData.payload.doc.id,
          data: orderData.payload.doc.data()
        });
      });
      this.orderFilter = this.orders.filter((order) => order.data.status === this.statusOrder);
    });
  }

  getOrdersbyId(idOrder) {
    this.firestoreService.getOrdersById(idOrder)
    .subscribe((orderSnapshot) => {
      this.orderById = [];
      this.orderById.push({
          id: orderSnapshot.payload.id,
          data: orderSnapshot.payload.data()
        });
      console.log(this.orderById);
    }
      );
  }

/*   deleteAllOrder(order) {
    this.ordersService.deleteOrder(order)
    .subscribe(() => {
      window.location.reload();
    });
  }

  changeStatusOrder(order) {
    if (order.status === 'pending') {
      order.status = 'delivering';
    } else if (order.status === 'delivering') {
      order.status = 'delivered';
    }
    this.ordersService.updateOrder(order)
    .subscribe(() => {
      window.location.reload();
    });
  }

  cancelOrder(order) {
    order.status = 'canceled';
    this.ordersService.updateOrder(order)
    .subscribe(() => {
      window.location.reload();
    });
  } */
}
