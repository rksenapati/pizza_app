import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDtlComponent } from './order-dtl/order-dtl.component';

const routes: Routes = [
  {path:'',redirectTo:'orderList',pathMatch:'full'},
  {path:'orderList',component:OrderListComponent},
  {path:'orderDtl/:orderNumber',component:OrderDtlComponent},
  {path:'**',redirectTo:'orderList',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
