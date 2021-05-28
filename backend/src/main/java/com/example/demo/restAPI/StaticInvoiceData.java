package com.example.demo.restAPI;

import com.example.demo.thymeleaf.models.InvoiceInfo;
import com.example.demo.thymeleaf.models.Item;
import com.example.demo.thymeleaf.models.Vendor;

public final class StaticInvoiceData {

    public static final Vendor VENDOR_INFORMATION = new Vendor("vendor1", "vendor1Street",
            "vendor1Prov", "vendor1Country", "vendor1Phone", "vendor1Email");

    public static final Item ITEM = new Item("item1", 20.0, 2);

    public static final InvoiceInfo INVOICE_INFO = new InvoiceInfo(5, "createdToday",
            "termshere", "dueToday");
}
