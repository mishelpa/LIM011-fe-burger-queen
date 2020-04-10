import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BillOrderComponent } from './components/bill-order/bill-order.component';
import { PageOrderComponent } from './pages/page-order/page-order.component';
import { PageAllOrdersComponent } from './pages/page-all-orders/page-all-orders.component';
import { OrderFoodComponent } from './components/order-food/order-food.component';
import { OrderProductsComponent } from './components/order-products/order-products.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BillOrderComponent,
    PageOrderComponent,
    PageAllOrdersComponent,
    OrderFoodComponent,
    OrderProductsComponent,
    ListOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
