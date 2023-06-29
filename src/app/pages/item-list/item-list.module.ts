import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemListPageRoutingModule } from './item-list-routing.module';

import { ItemListPage } from './item-list.page';
import { SharedModulesModule } from 'src/app/modules/shared-modules.module';
import { SharedComponentsModule } from 'src/app/modules/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemListPageRoutingModule,
    SharedModulesModule,
    SharedComponentsModule,
  ],
  declarations: [ItemListPage],
})
export class ItemListPageModule {}
