package com.isc.todo.manager.controller;

import com.isc.todo.manager.exception.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestController
@RestControllerAdvice
public class ErrorController {

    @ExceptionHandler(value = NumberFormatException.class)
    @ResponseBody
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String numberFormatException() {
        return "Non-numeric ID passed.";
    }

    @ExceptionHandler(value = EntityNotFoundException.class)
    @ResponseBody
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String entityNotFoundExceptionHandler(EntityNotFoundException exception) {
        return exception.getMessage();
    }
}

