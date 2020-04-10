import { Component } from '@angular/core';


@Component({
  selector: 'app-page-order',
  templateUrl: './page-order.component.html',
  styleUrls: ['./page-order.component.scss']
})
export class PageOrderComponent {
  public type: string;

  constructor() {
   }

  typeDesayuno() {
    this.type = 'Desayuno';
  }
  typeCena() {
    this.type = 'Almuerzo y cena';
  }
}
