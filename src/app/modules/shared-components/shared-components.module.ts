import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInfoComponent } from 'src/app/components/item-info/item-info.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ItemInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ItemInfoComponent
  ]
})
export class SharedComponentsModule { }
