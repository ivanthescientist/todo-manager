package com.isc.todo.manager.controller;

import com.isc.todo.manager.domain.TodoDTO;
import com.isc.todo.manager.exception.EntityNotFoundException;
import com.isc.todo.manager.persistence.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoRepository repository;

    @Autowired
    public TodoController(TodoRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Collection<TodoDTO> getList() {
        return repository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public TodoDTO getById(@PathVariable Long id) {
        return repository.findOne(id).orElseThrow(() -> new EntityNotFoundException("Todo #" + id + " not found."));
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public TodoDTO create(@RequestBody TodoDTO todoDTO) {
        return repository.create(todoDTO);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public TodoDTO update(@RequestBody TodoDTO todoDTO, @PathVariable Long id) {
        return repository.update(todoDTO);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public TodoDTO delete(@PathVariable Long id) {
        return repository.delete(id).orElseThrow(() -> new EntityNotFoundException("Todo #" + id + " not found."));
    }
}
