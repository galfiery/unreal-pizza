import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInfoComponent } from 'src/app/components/item-info/item-info.component';
import { IonicModule } from '@ionic/angular';
import { ItemListingComponent } from '../components/item-listing/item-listing.component';
import { SharedModulesModule } from './shared-modules.module';

@NgModule({
  declarations: [ItemInfoComponent, ItemListingComponent],
  imports: [CommonModule, IonicModule, SharedModulesModule],
  exports: [ItemInfoComponent, ItemListingComponent],
})
export class SharedComponentsModule {}
