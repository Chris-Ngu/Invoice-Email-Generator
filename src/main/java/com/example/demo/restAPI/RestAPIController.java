package com.example.demo.restAPI;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.*;

import com.example.demo.restAPI.models.BaseRest;

@RestController
public class RestAPIController {

    private static final String template = "Hello, %s";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/api/greeting")
    public BaseRest baseRestFunction(@RequestParam(value = "name", defaultValue = "world") String name) {
        return new BaseRest(counter.incrementAndGet(), String.format(template, name));
    }
}
