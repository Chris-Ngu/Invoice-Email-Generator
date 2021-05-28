package com.example.demo.restAPI.models;

public class BaseRest {

    private final long id;
    private final int statusCode;

    public BaseRest(long id, int statusCode) {
        this.id = id;
        this.statusCode = statusCode;
    }

    public long getId() {
        return this.id;
    }

    public int getStatusCode() {
        return this.statusCode;
    }
}
