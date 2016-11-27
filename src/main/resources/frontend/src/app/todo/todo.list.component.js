import { Component } from '@angular/core';
import template from './todo.list.template.html';
import TodoService from '../service/todo.service';

@Component({
    selector: 'todo-list',
    template: template
})
export default class TodoListComponent {
    todoList = [];

    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    ngOnInit() {
        this.todoService.getList().subscribe((result) => {
            this.todoList = result;
        });
    }
};