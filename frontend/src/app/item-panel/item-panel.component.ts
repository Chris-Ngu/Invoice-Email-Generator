import { Component, ComponentRef } from '@angular/core';
import { InvoicePlusButtonComponent } from "../invoice-plus-button/invoice-plus-button.component";

@Component({
  selector: 'app-item-panel',
  templateUrl: './item-panel.component.html',
  styleUrls: ['./item-panel.component.css']
})
export class ItemPanelComponent {

  public key!: number;
  public parentRef!: InvoicePlusButtonComponent;

  constructor() {
  }

  removeInvoiceItem = (): void => {
    this.parentRef.removeInvoiceItem(this.key);
  }

}
