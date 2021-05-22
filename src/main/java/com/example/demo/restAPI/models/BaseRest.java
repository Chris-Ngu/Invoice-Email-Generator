package com.example.demo.restAPI.models;

public class BaseRest {

    private final long id;
    private final String content;

    public BaseRest(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return this.id;
    }

    public String getContent() {
        return this.content;
    }
}
