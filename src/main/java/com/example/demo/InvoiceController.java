package com.example.demo;

import java.util.Arrays;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class InvoiceController {

    @GetMapping()
    public String Test(Model model) {
        model.addAttribute("Something", "Invoice # 1");
        model.addAttribute("item", Arrays.asList(
                new Item("Keyboard", 10.0, 1),
                new Item("Headphone", 12.0, 2)
        ));
        return "Invoice";
    }
}
