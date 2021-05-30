// ref: https://stackblitz.com/edit/add-or-remove-dynamic-component?file=src%2Fapp%2Fparent%2Fparent.component.ts
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-invoice-plus-button',
  templateUrl: './invoice-plus-button.component.html',
  styleUrls: ['./invoice-plus-button.component.css']
})
export class InvoicePlusButtonComponent {

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;


  createInvoiceItem = (): void => {

  }

}
