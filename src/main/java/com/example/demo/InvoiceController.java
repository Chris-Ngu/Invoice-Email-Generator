package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class InvoiceController {

	@GetMapping("/test")
	public String Test(Model model) {
		model.addAttribute("message, "Test");
		return "Test";
	}
}
