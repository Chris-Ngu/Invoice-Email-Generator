import { Component, ComponentRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { InvoiceInfo } from "./models/invoice-info";
import { Item } from "./models/item";
import { Vendor } from "./models/vendor";
import { Invoice } from "./models/invoice";

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
  dueDate = new Date().toUTCString();

  //Invoicedata
  childInvoicesRef = Array<ComponentRef<ItemPanelComponent>>();
  childInvoices: Item[] = [];

  constructor(private http: HttpClient) { }

  public onDueDateSelect = (date: NgbDate): void => {
    // this.dueDate = new NgbDate(date.year, date.month, date.day);
    this.dueDate = new Date(date.year, date.month, date.day).toUTCString();

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
    const vendorInfo: Vendor = new Vendor(
      this.name.value,
      this.street.value,
      this.province.value,
      this.country.value,
      this.phone.value,
      this.email.value);
    const invoiceInfo: InvoiceInfo = new InvoiceInfo(
      this.invoiceNumber.value,
      this.notes.value,
      this.dateCreated,
      this.dueDate);

    // converting itemRefs to items
    this.childInvoicesRef.forEach((invoiceRef: ComponentRef<ItemPanelComponent>) => {
      this.childInvoices.push(new Item(
        invoiceRef.instance.itemName.value,
        invoiceRef.instance.itemCost.value,
        invoiceRef.instance.quantity.value,
        invoiceRef.instance.itemTotal.value));
    })
    const headers = { "content-type": "application/json" };
    // https://www.tektutorialshub.com/angular/angular-http-post-example/#model
    // Call POST request here

  }

  private formValidation = (): boolean => {
    return true;
  }

}
