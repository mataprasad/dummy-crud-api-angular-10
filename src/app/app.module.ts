import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersAddEditComponent } from './customers-add-edit/customers-add-edit.component';
import { ProductsAddEditComponent } from './products-add-edit/products-add-edit.component';
import { OrdersAddEditComponent } from './orders-add-edit/orders-add-edit.component';
import { EmployeesAddEditComponent } from './employees-add-edit/employees-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    CustomersAddEditComponent,
    ProductsAddEditComponent,
    OrdersAddEditComponent,
    EmployeesAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
