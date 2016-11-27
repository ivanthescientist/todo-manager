package com.isc.todo.manager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SPAController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }
}
