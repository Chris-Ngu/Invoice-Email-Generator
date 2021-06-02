import { InvoiceInfo } from "./invoice-info";
import { Item } from "./item";
import { Vendor } from "./vendor";

export class Invoice {
    private invoiceInformation: InvoiceInfo;
    private vendorInformation: Vendor;
    private itemList: Item[];

    // Not assigning a value messes up
    // Logically doesn't make sense to assign 0.00 in constructor either
    // can place "calculateInvoiceTotal" into constructor, but private function looks cleaner
    private invoiceTotal: number = 0.00;

    constructor(invoiceInfo: InvoiceInfo, vendorInfo: Vendor, itemList: Item[]) {
        this.invoiceInformation = invoiceInfo;
        this.vendorInformation = vendorInfo;
        this.itemList = itemList;
        this.calculateInvoiceTotal();
    }

    private calculateInvoiceTotal = (): void => {
        let totalSoFar = 0.00;
        this.itemList.forEach((item) => {
            totalSoFar += item.getItemTotal();
        });

        this.invoiceTotal = totalSoFar;
    }
}
