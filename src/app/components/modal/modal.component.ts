import { Observable } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';
import { ModalService } from 'src/app/services/commons/modal.service';
import { ItemStateService } from 'src/app/services/item-state.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  modalService: ModalService = inject(ModalService);
  itemStateService: ItemStateService = inject(ItemStateService);

  opened$: Observable<boolean> = this.modalService.getOpened();
  selectedItem$: Observable<Item> = this.itemStateService.getSelected();

  constructor() {}

  ngOnInit() {}

  close(): void {
    this.modalService.close();
  }
}
