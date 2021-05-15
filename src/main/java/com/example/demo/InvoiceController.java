package com.example.demo;

import java.text.DecimalFormat;
import java.util.Arrays;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class InvoiceController {

    @GetMapping()
    public String Invoice(Model model) {
        DecimalFormat df = new DecimalFormat("#.##");
        
        Item[] items = {
            new Item("Keyboard", 10.0, 1),
            new Item("Headphone", 12.0, 2),};

        String taxRate = "8.6";
        double subTotal = 0.0;
        double taxAmount = 0.0;
        double total = 0.0;

        for (Item x : items) {
            subTotal += x.getItemTotal();
        }

        // Converting tax rate to decimal 
        total = Double.parseDouble(df.format(subTotal * (1 + (Double.parseDouble(taxRate) / 100))));
        taxAmount = Double.parseDouble(df.format(total - subTotal));
        
        
        
        model.addAttribute("vendor", new Vendor(
                "John Doe",
                "8 Elm Street",
                "Cambridge, CB1 4DH",
                "United Kingdom",
                "XXX-XXX-XXXX",
                "johndoe@email.com"
        ));
        model.addAttribute("invoiceInfo", new InvoiceInfo(
                1,
                "28/07/2016",
                "Due on receipt",
                "28/07/2016"
        ));
        model.addAttribute("item", items);
        model.addAttribute("billTo", "janedoe@email.com");
        model.addAttribute("note", "Thanks for your business!");
        model.addAttribute("taxRate", taxRate);
        model.addAttribute("subTotal", subTotal);
        model.addAttribute("total", total);
        model.addAttribute("taxAmount", taxAmount);
        return "Invoice";
    }
}
