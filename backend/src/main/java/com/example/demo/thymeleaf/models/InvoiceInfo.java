package com.example.demo.thymeleaf.models;

public class InvoiceInfo {

    private int number;
    private String dateCreated;
    private String terms;
    private String dateDue;

    public InvoiceInfo(int number, String dateCreated, String terms, String dateDue) {
        this.number = number;
        this.dateCreated = dateCreated;
        this.terms = terms;
        this.dateDue = dateDue;
    }

    public int getNumber() {
        return this.number;
    }

    public String getDateCreated() {
        return this.dateCreated;
    }

    public String getTerms() {
        return this.terms;
    }

    public String getDateDue() {
        return this.dateDue;
    }
}
