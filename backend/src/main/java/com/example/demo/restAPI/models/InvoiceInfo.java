package com.example.demo.restAPI.models;

public class InvoiceInfo {

    private int invoiceNumber;
    private String notes;
    private String createdDate;
    private String dateDue;

    public InvoiceInfo(int number, String dateCreated, String terms, String dateDue) {
        this.invoiceNumber = number;
        this.createdDate = dateCreated;
        this.notes = terms;
        this.dateDue = dateDue;
    }

    public int getNumber() {
        return this.invoiceNumber;
    }

    public String getDateCreated() {
        return this.createdDate;
    }

    public String getTerms() {
        return this.notes;
    }

    public String getDateDue() {
        return this.dateDue;
    }
}
