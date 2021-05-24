package com.example.demo.restAPI;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.*;

import com.example.demo.restAPI.models.BaseRest;
import com.example.demo.restAPI.models.InvoiceTest;

@RestController
public class RestAPIController {

    private static final String template = "Hello, %s";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/api/test")
    public BaseRest apiTest() {
        return new BaseRest(counter.incrementAndGet(), 200);
    }

    @GetMapping("/api/generateinvoice")
    public InvoiceTest generateInvoice(@RequestParam int invoiceNumber,
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
        // id autogenerate
        // Insert status code here
        return new InvoiceTest(
                counter.incrementAndGet(),
                200,
                1,
                dateCreated,
                terms,
                dueDate,
                name,
                street,
                province,
                country,
                phone,
                email
        );
    }

//    @GetMapping("/api/greeting")
//    public BaseRest baseRestFunction(@RequestParam(value = "name", defaultValue = "world") String name) {
//        return new BaseRest(counter.incrementAndGet(), String.format(name, args));
//    }
}
