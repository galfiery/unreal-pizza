import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryPage } from './order-history.page';

const routes: Routes = [
  {
    path: '',
    component: OrderHistoryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderHistoryPageRoutingModule {}
