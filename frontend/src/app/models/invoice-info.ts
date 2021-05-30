export class InvoiceInfo {
    private invoiceNumber: number;
    private notes: string;
    private createdDate: string;
    private dueDate: string;

    constructor(
        invoiceNumber: number,
        notes: string,
        createdDate: string,
        dueDate: string
    ) {
        this.invoiceNumber = invoiceNumber;
        this.notes = notes;
        this.createdDate = createdDate;
        this.dueDate = dueDate;
    }

}
