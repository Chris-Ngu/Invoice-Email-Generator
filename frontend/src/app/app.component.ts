import { Component, ComponentRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { ItemPanelComponent } from "./item-panel/item-panel.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'frontend';

  // Vendor form information
  name = new FormControl("");
  street = new FormControl("");
  province = new FormControl("");
  country = new FormControl("");
  phone = new FormControl("");
  email = new FormControl("");

  // Invoice Information
  invoiceNumber = new FormControl("");
  dateCreated = new Date().toUTCString();
  notes = new FormControl("");
  dueDate = new NgbDate(1, 1, 1999);

  //Invoicedata
  childInvoicesRef = Array<ComponentRef<ItemPanelComponent>>();

  constructor() { }

  public onDueDateSelect = (date: NgbDate): void => {
    this.dueDate = new NgbDate(date.year, date.month, date.day);
    // alert(`Date: ${date.day}, Month: ${date.month}, Year: ${date.year}`);
  }

  public invoiceItemHandler = (invoiceRefArray: Array<ComponentRef<ItemPanelComponent>>): void => {
    this.childInvoicesRef = invoiceRefArray;
    // invoiceArray.forEach((invoiceInstance: ComponentRef<ItemPanelComponent>) => {
    //   // do something here
    // })
  }

}
