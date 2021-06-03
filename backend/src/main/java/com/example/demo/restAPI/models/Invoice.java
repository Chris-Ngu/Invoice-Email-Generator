package com.example.demo.restAPI.models;

import com.example.demo.restAPI.models.InvoiceInfo;
import com.example.demo.restAPI.models.Item;
import com.example.demo.restAPI.models.Vendor;

public class Invoice {

    private InvoiceInfo invoiceInformation;
    private Vendor vendorInformation;
    private Item[] itemList;
    private double invoiceTotal;
    
    public Invoice(){
        
    }
    
    public Invoice(
            InvoiceInfo invoiceInformation, 
            Vendor vendorInformation, 
            Item[] itemList,
            double invoiceTotal
    ){
        this.invoiceInformation = invoiceInformation;
        this.vendorInformation = vendorInformation;
        this.itemList = itemList;
        this.invoiceTotal = invoiceTotal;
    }
}
