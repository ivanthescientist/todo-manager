import { Component } from '@angular/core';
import { Router } from '@angular/router';
import TodoService from '../service/todo.service';
import template from './todo.create.template.html';
import TodoFormComponent from './todo.form.component';

@Component({
    selector: 'todo-create',
    template: template
})
export default class TodoCreateComponent {
    todo = {};

    constructor(todoService: TodoService, router: Router) {
        this.todoService = todoService;
        this.router = router;
    }

    onSave(todo) {
        this.todoService.create(todo).subscribe(newTodo => {
            this.router.navigate(['/todos/', newTodo.id]);
        });
    }

    onCancel() {
        this.router.navigate(['/todos']);
    }
};