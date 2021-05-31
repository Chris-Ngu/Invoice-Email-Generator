import { Component, ComponentRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InvoicePlusButtonComponent } from "../invoice-plus-button/invoice-plus-button.component";

@Component({
  selector: 'app-item-panel',
  templateUrl: './item-panel.component.html',
  styleUrls: ['./item-panel.component.css']
})
export class ItemPanelComponent {

  public key!: number;
  public parentRef!: InvoicePlusButtonComponent;

  public itemName = new FormControl("");
  public itemCost = new FormControl(0.00);
  public quantity = new FormControl(0);
  public itemTotal = new FormControl(0);

  constructor() { }

  public removeInvoiceItem = (): void => {
    this.parentRef.removeInvoiceItem(this.key);
  }

  public setItemTotal = (): void => {
    this.itemTotal.setValue(this.quantity.value * this.itemCost.value);
  }

}
