package com.example.demo;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.ComponentScan;
import java.util.HashMap;
import java.util.Map;

//import com.example.demo.mail.service.EmailSenderService;
//import com.example.demo.model.Mail;
//import com.example.demo.Item;

@SpringBootApplication
//@ComponentScan("com.example.demo.mail.service")
//public class InvoiceGeneratorApplication implements ApplicationRunner {
public class InvoiceGeneratorApplication {

//    @Autowired
//    private EmailSenderService emailService;

    public static void main(String[] args) {
        SpringApplication.run(InvoiceGeneratorApplication.class, args);
    }

//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//        Map<String, Object> model = new HashMap<>();
//
//        Item[] items = {
//            new Item("Keyboard", 10.0, 1),
//            new Item("Headphone", 12.0, 2),};
//        Vendor vendor = new Vendor("John Doe",
//                "8 Elm Street",
//                "Cambridge, CB1 4DH",
//                "United Kingdom",
//                "XXX-XXX-XXXX",
//                "johndoe@email.com");
//        InvoiceInfo info = new InvoiceInfo(1,
//                "28/07/2016",
//                "Due on receipt",
//                "28/07/2016");
//
//        // Subtotal, total, and tax amount omitted
//        model.put("vendor", vendor);
//        model.put("invoiceInfo", info);
//        model.put("item", items);
//        model.put("billTo", "janedoe@email.com");
//        model.put("note", "Thanks for your business");
//        model.put("taxRate", "8.6");
//
//        Mail mail = new Mail("myEmail@email.com",
//                "toEmail@email.com",
//                "Subject",
//                model
//        );
//
//        emailService.sendEmail(mail);
//    }
}
