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
  }

  public submitInvoiceItem = (): void => {
    // can set warning on UI
    if (this.formValidation() === false) return;

    // https://stackoverflow.com/questions/58378294/posting-a-nested-object-from-angular-to-spring-rest-api-is-always-null
    // REST call to Spring backend
    // Need to test with basic response first

  }

  private formValidation = (): boolean => {
    return true;
  }

}
