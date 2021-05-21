package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.example.demo.mail.service.EmailSenderService;
import com.example.demo.model.Mail;

@SpringBootApplication
@ComponentScan("com.example.demo.mail.service")
public class InvoiceGeneratorApplication implements ApplicationRunner {

    @Autowired
    private EmailSenderService emailService;

    public static void main(String[] args) {
        SpringApplication.run(InvoiceGeneratorApplication.class, args);
    }
    
    @Override
    public void run(ApplicationArguments args) throws Exception {
//        Mail mail = new Mail("email@email.com", "emailTo@email.com", "Subject",
//                
//        )
    }

}
