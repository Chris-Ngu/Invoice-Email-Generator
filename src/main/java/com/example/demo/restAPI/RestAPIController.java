package com.example.demo.restAPI;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.*;

import com.example.demo.restAPI.models.BaseRest;
import com.example.demo.restAPI.models.InvoiceTest;
import com.example.demo.thymeleaf.models.Vendor;
import com.example.demo.thymeleaf.models.Item;
import com.example.demo.thymeleaf.models.InvoiceInfo;

import static com.example.demo.restAPI.StaticInvoiceData.INVOICE_INFO;

@RestController
public class RestAPIController {

    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/api/test")
    public BaseRest apiTest() {
        return new BaseRest(counter.incrementAndGet(), 200);
    }

    // Would need to modify model to support objects
    // Could ask for invoiceNumber and pull from database for invoice informatio
    // Currently just pulling example constant data for api
    @GetMapping("/api/generateinvoice")
    public InvoiceTest generateInvoice(@RequestParam int invoiceNumber) {
        // fetch database repository for specific invoice data

        return new InvoiceTest(
                counter.incrementAndGet(),
                200,
                invoiceNumber
        );
    }
}
