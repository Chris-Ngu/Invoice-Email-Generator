package com.example.demo.model;

import java.util.ArrayList;
import java.util.Map;

public class Mail {

    private String from;
    private String mailTo;
    private String subject;
    private ArrayList<Object> attachments;
    private Map<String, Object> props;

    public Mail() {
    }

    public Mail(String from, String mailTO, String subject, ArrayList<Object> attachments,
            Map<String, Object> props
    ) {
        this.from = from;
        this.mailTo = mailTo;
        this.subject = subject;
        this.attachments = attachments;
        this.props = props;
    }

    public String getFrom() {
        return this.from;
    }

    public String getMailTo() {
        return this.mailTo;
    }

    public String getSubject() {
        return this.subject;
    }

    public ArrayList<Object> getAttachments() {
        return this.attachments;
    }

    public Map<String, Object> getProps() {
        return this.props;
    }
}
