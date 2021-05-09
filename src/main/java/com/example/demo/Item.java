package com.example.demo;

public class Item {

    private String itemName;
    private double itemCost;
    private int quantity;

    public Item(String itemName, double itemCost, int quantity) {
        this.itemName = itemName;
        this.itemCost = itemCost;
        this.quantity = quantity;
    }

    public String getItemName() {
        return this.itemName;
    }
    public double getItemCost(){
        return this.itemCost;
    }
    public int getQuantity(){
        return this.quantity;
    }
}
