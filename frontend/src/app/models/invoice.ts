import { InvoiceInfo } from "./invoice-info";
import { Item } from "./item";
import { Vendor } from "./vendor";

export class Invoice {
    private invoiceInformation: InvoiceInfo;
    private vendorInformation: Vendor;
    private itemList: Item[];

    constructor(invoiceInfo: InvoiceInfo, vendorInfo: Vendor, itemList: Item[]) {
        this.invoiceInformation = invoiceInfo;
        this.vendorInformation = vendorInfo;
        this.itemList = itemList;
    }
}
