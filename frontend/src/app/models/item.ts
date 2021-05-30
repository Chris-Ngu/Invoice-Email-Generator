export class Item {
    private itemName: string;
    private itemCost: number;
    private quantity: number;
    private itemTotal: number;

    constructor(
        itemName: string,
        itemCost: number,
        quantity: number,
        itemTotal: number
    ) {
        this.itemName = itemName;
        this.itemCost = itemCost;
        this.quantity = quantity;
        this.itemTotal = this.quantity * this.itemCost;
    }
}
