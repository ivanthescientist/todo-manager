import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import TodoService from '../service/todo.service';
import template from './todo.details.template.html';

@Component({
    selector: 'todo-details',
    template: template
})
export default class TodoDetailsComponent {
    todo = {};

    constructor(todoService: TodoService, route: ActivatedRoute, router: Router) {
        this.todoService = todoService;
        this.todoId = route.snapshot.params['id'];
        this.router = router;
    }

    ngOnInit() {
        this.todoService.getById(this.todoId).subscribe((res) => {
            this.todo = res;
        });
    }

    deleteTodo() {
        this.todoService.remove(this.todo.id).subscribe((res) => {
            this.router.navigate(['/todos']);
        });
    }
}