package com.example.demo.restAPI.models;

public class Item {

    private String itemName;
    private double itemCost;
    private int quantity;
    private double itemTotal;

    public Item(
            String itemName,
            double itemCost,
            int quantity,
            double itemTotal
    ) {
        this.itemName = itemName;
        this.itemCost = itemCost;
        this.quantity = quantity;
        this.itemTotal = itemCost * quantity;
    }

    public String getItemName() {
        return this.itemName;
    }

    public double getItemCost() {
        return this.itemCost;
    }

    public int getQuantity() {
        return this.quantity;
    }

    public double getItemTotal() {
        return this.itemTotal;
    }
}
