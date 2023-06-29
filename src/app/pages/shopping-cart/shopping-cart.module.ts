import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingCartPage } from './shopping-cart.page';

import { ShoppingCartPageRoutingModule } from './shopping-cart-routing.module';
import { SharedModulesModule } from 'src/app/modules/shared-modules.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShoppingCartPageRoutingModule,
    SharedModulesModule,
  ],
  declarations: [ShoppingCartPage],
})
export class ShoppingCartPageModule {}
