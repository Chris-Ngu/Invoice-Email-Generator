import { Component, ComponentRef, Injectable } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

// models
import { InvoiceInfo } from "./models/invoice-info";
import { Item } from "./models/item";
import { Vendor } from "./models/vendor";
import { Invoice } from "./models/invoice";

// Custom components
import { ItemPanelComponent } from "./item-panel/item-panel.component";

// constants
import { baseAddress, createInvoiceExt, testExt } from "../constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({ providedIn: "root" })
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

  constructor(private http: HttpClient) { }

  public onDueDateSelect = (date: NgbDate): void => {
    // this.dueDate = new NgbDate(date.year, date.month, date.day);
    this.dueDate = new Date(date.year, date.month, date.day).toUTCString();

    // alert(`Date: ${date.day}, Month: ${date.month}, Year: ${date.year}`);
  }

  public invoiceItemHandler = (invoiceRefArray: Array<ComponentRef<ItemPanelComponent>>): void => {
    this.childInvoicesRef = invoiceRefArray;
  }

  public submitInvoice = (): Observable<any> => {
    // can set warning on UI
    if (this.formValidation() === false) return new Observable();

    // https://stackoverflow.com/questions/58378294/posting-a-nested-object-from-angular-to-spring-rest-api-is-always-null
    // https://www.tektutorialshub.com/angular/angular-http-post-example/#model
    // REST call to Spring backend
    // Need to test with basic response first
    const InvoiceObj = this.createInvoiceObject();
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(InvoiceObj);

    // try catch, need to test this
    this.http.post(`${baseAddress}${createInvoiceExt}`, body, { headers: headers }).subscribe((data: any) => {
      console.log(data);
    });

    return new Observable();

  }

  private testBackend = (): Observable<any> => {
    this.http.get(`${baseAddress}${testExt}`).subscribe((data: any) => {
      console.log(data);
    });
    return new Observable();
  }

  private createInvoiceObject = (): Invoice => {
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
    const childInvoices: Item[] = this.childInvoicesRef.map((invoiceRef: ComponentRef<ItemPanelComponent>) => {
      return (new Item(
        invoiceRef.instance.itemName.value,
        invoiceRef.instance.itemCost.value,
        invoiceRef.instance.quantity.value,
        invoiceRef.instance.itemTotal.value));
    });

    return new Invoice(invoiceInfo, vendorInfo, childInvoices)
  }

  private formValidation = (): boolean => {
    return true;
  }

}
