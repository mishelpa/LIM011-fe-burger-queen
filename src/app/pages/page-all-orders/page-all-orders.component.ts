import { Component } from '@angular/core';

@Component({
  selector: 'app-page-all-orders',
  templateUrl: './page-all-orders.component.html',
  styleUrls: ['./page-all-orders.component.scss']
})
export class PageAllOrdersComponent {

  statusOrders: string;

  constructor() { }

  getStatus(status: string) {
    this.statusOrders = status;
  }
}
