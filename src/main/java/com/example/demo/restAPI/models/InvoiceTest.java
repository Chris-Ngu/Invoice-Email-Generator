package com.example.demo.restAPI.models;

public class InvoiceTest extends BaseRest {

    // Invoice information here
    private final int invoiceNumber;
    private final String dateCreated;
    private final String terms;
    private final String dueDate;

    // Vendor Information here
    private final String name;
    private final String street;
    private final String province;
    private final String country;
    private final String phone;
    private final String email;
    
    // Item information here

    public InvoiceTest(long id, int statusCode, 
            int invoiceNumber,
            String dateCreated,
            String terms,
            String dueDate,
            String name,
            String street,
            String province,
            String country,
            String phone,
            String email
    ) {
        super(id, statusCode);
        this.invoiceNumber = invoiceNumber;
        this.dateCreated = dateCreated;
        this.terms = terms;
        this.dueDate = dueDate;
        this.name = name;
        this.street = street;
        this.province = province;
        this.country = country;
        this.phone = phone;
        this.email = email;
    }
    
    public int getInvoiceNumber(){
        return this.invoiceNumber;
    }
    
    public String getDateCreated(){
        return this.dateCreated;
    }
    
    public String getTerms(){
        return this.terms;
    }
    
    public String getDueDate(){
        return this.dueDate;
    }
    
    public String getName(){
        return this.name;
    }
    
    public String getStreet(){
        return this.street;
    }
    
    public String getProvince(){
        return this.province;
    }
    
    public String getCountry(){
        return this.country;
    }
    
    public String getPhone(){
        return this.phone;
    }
    
    public String getEmail(){
        return this.email;
    }
}
