package com.example.demo.restAPI;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.restAPI.models.BaseRest;
import com.example.demo.restAPI.models.Invoice;
import com.example.demo.restAPI.models.InvoiceInfo;
import com.example.demo.restAPI.models.Item;
import com.example.demo.restAPI.models.Vendor;

@RestController
@RequestMapping("/api")
@CrossOrigin() // Might need to edit this later, security related
public class RestAPIController {

    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/test")
    public BaseRest apiTest() {
        return new BaseRest(counter.incrementAndGet(), 200);
    }

    // Would need to modify model to support objects
    @CrossOrigin()
    @GetMapping("/generateinvoice")
    public Invoice generateInvoice(@RequestParam Invoice invoiceObj) {
        return new Invoice();
//        // Can use try catch here too
//        if (INVOICE_INFO.getNumber() == invoiceNumber) {
//            return new InvoiceTest(
//                    counter.incrementAndGet(),
//                    200,
//                    invoiceNumber
//            );
//        } else {
//            throw new ResponseStatusException(
//                    HttpStatus.NOT_FOUND, "entity not found"
//            );
//        }
//
    }
}
