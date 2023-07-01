import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInfoComponent } from 'src/app/components/item-info/item-info.component';
import { IonicModule } from '@ionic/angular';
import { ItemListingComponent } from '../components/item-listing/item-listing.component';
import { SharedModulesModule } from './shared-modules.module';
import { ToastComponent } from '../components/toast/toast.component';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  declarations: [
    ItemInfoComponent,
    ItemListingComponent,
    ToastComponent,
    ModalComponent,
  ],
  imports: [CommonModule, IonicModule, SharedModulesModule],
  exports: [
    ItemInfoComponent,
    ItemListingComponent,
    ToastComponent,
    ModalComponent,
  ],
})
export class SharedComponentsModule {}
