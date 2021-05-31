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

    public getItemName = (): string => {
        return this.itemName;
    }

    public getItemCost = (): number => {
        return this.itemCost;
    }

    public getQuantity = (): number => {
        return this.quantity;
    }

    public getItemTotal = (): number => {
        return this.itemTotal;
    }

    public getData = (): Item => {
        return this;
    }

}
