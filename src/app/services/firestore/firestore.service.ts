import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  public products: any = [];

  constructor(private firestore: AngularFirestore) { }

  private listProducts = new BehaviorSubject<Array<any>>([]);
  public currentListProducts = this.listProducts.asObservable();


  postOrder(data: any) {
    return this.firestore.collection('orders').add(data);
  }

  getProducts() {
      return this.firestore.collection('products').snapshotChanges();
  }

  getListOrders() {
    return this.firestore.collection('orders').snapshotChanges();
  }

  getOrdersById(idOrder: string) {
    return this.firestore.collection('orders').doc(idOrder).snapshotChanges();
  }

  deleteOrder(idOrder) {
    return this.firestore.collection('orders').doc(idOrder).delete();
  }

  updateOrder(idOrder: string, data: any) {
    return this.firestore.collection('orders').doc(idOrder).set(data);
  }

  addListProducts(order) {
    const indexProduct = this.products.findIndex(product => product.data.name === order.data.name);

    if (indexProduct < 0 ) {
      const newOrder = {...order, quantity: 1};
      this.products.push(newOrder);
    } else {
      this.products[indexProduct].quantity += 1;
    }

    this.listProducts.next(this.products);
 }
}
