package com.example.demo.thymeleaf.models;

public class Vendor {

    private String name;
    private String street;
    private String province;
    private String country;
    private String phone;
    private String email;

    public Vendor(String name, String street, String province, String country,
            String phone,
            String email
    ) {
        this.name = name;
        this.street = street;
        this.province = province;
        this.country = country;
        this.phone = phone;
        this.email = email;
    }

    public String getName() {
        return this.name;
    }

    public String getStreet() {
        return this.street;
    }

    public String getProvince() {
        return this.province;
    }

    public String getCountry() {
        return this.country;
    }
    
    public String getPhone(){
        return this.phone;
    }
    
    public String getEmail(){
        return this.email;
    }
}
