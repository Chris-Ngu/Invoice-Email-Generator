// ref: https://stackblitz.com/edit/add-or-remove-dynamic-component?file=src%2Fapp%2Fparent%2Fparent.component.ts
import { Component, ComponentRef, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewRef, Output, EventEmitter } from '@angular/core';
import { ItemPanelComponent } from "../item-panel/item-panel.component";

@Component({
  selector: 'app-invoice-plus-button',
  templateUrl: './invoice-plus-button.component.html',
  styleUrls: ['./invoice-plus-button.component.css']
})
export class InvoicePlusButtonComponent {

  @ViewChild("viewContrainerRef", { read: ViewContainerRef })
  VCR!: ViewContainerRef;

  childInvoiceKey: number = 0;
  childInvoiceComponents = Array<ComponentRef<ItemPanelComponent>>();

  // Passes invoice item data to main invoice form (app.component.ts)
  @Output()
  updateParent: EventEmitter<Array<ComponentRef<ItemPanelComponent>>> = new EventEmitter();

  constructor(private CFR: ComponentFactoryResolver) { }

  createInvoiceItem = (): void => {
    let componentFactory = this.CFR.resolveComponentFactory(ItemPanelComponent);
    let invoicePanelRef = this.VCR.createComponent(componentFactory);
    let invoicePanel = invoicePanelRef.instance;
    invoicePanel.key = ++this.childInvoiceKey;
    invoicePanel.parentRef = this;

    this.childInvoiceComponents.push(invoicePanelRef);
    this.updateParent.emit(this.childInvoiceComponents);
  }

  removeInvoiceItem = (key: number): void => {
    if (this.VCR.length < 1) return;
    let invoiceRef = this.childInvoiceComponents.filter(x => x.instance.key === key)[0];

    // Not sure why this is returning -1, I guess it can't find it for some reason
    // let vcrIndex: number = this.VCR.indexOf(invoiceRef as any);
    let vcrIndex = this.childInvoiceComponents.indexOf(invoiceRef);
    this.VCR.remove(vcrIndex);
    this.childInvoiceComponents = this.childInvoiceComponents.filter(x => x.instance.key !== key);
    this.updateParent.emit(this.childInvoiceComponents);
  }

}
