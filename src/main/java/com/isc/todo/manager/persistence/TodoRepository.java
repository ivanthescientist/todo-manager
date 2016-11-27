package com.isc.todo.manager.persistence;

import com.isc.todo.manager.domain.TodoDTO;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TodoRepository {
    private Map<Long, TodoDTO> todoMap = new ConcurrentHashMap<>();
    private AtomicLong nextId = new AtomicLong(1);

    @PostConstruct
    public void init() {
        TodoDTO todoDTO = new TodoDTO();
        todoDTO.setId(1L);
        todoDTO.setName("Make an application.");
        todoDTO.setDescription("1. Build backend. 2. Build frontend. 3. Test.");
        todoDTO.setAuthor("John");
        todoDTO.setDone(false);

        todoMap.put(1L, todoDTO);
    }

    public Collection<TodoDTO> findAll() {
        return todoMap.values();
    }

    public Optional<TodoDTO> findOne(Long id) {
        return Optional.ofNullable(todoMap.get(id));
    }

    public TodoDTO create(TodoDTO todoDTO) {
        todoDTO.setId(nextId.incrementAndGet());

        todoMap.put(todoDTO.getId(), todoDTO);

        return todoDTO;
    }

    public TodoDTO update(TodoDTO todoDTO) {
        todoMap.put(todoDTO.getId(), todoDTO);

        return todoDTO;
    }

    public Optional<TodoDTO> delete(Long id) {
        return Optional.ofNullable(todoMap.remove(id));
    }
}
