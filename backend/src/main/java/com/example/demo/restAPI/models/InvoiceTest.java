package com.example.demo.restAPI.models;

public class InvoiceTest extends BaseRest {

    // Invoice information here
    private final int invoiceNumber;

    public InvoiceTest(long id, int statusCode, int invoiceNumber) {
        super(id, statusCode);
        this.invoiceNumber = invoiceNumber;
    }

    public int getInvoiceNumber() {
        return this.invoiceNumber;
    }
}
