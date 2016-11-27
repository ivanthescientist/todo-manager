import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import TodoService from '../service/todo.service';
import template from './todo.edit.template.html';
import TodoFormComponent from './todo.form.component';

@Component({
    selector: 'todo-edit',
    template: template,
    directives: [TodoFormComponent]
})
export default class TodoEditComponent {
    todo = {};

    constructor(todoService: TodoService, route: ActivatedRoute, router: Router) {
        this.todoService = todoService;
        this.todoId = route.snapshot.params['id'];
        this.router = router;
    }

    ngOnInit() {
        this.todoService.getById(this.todoId).subscribe((res) => this.todo = res);
    }

    onSave(todo) {
        console.log("Saving todo");
        console.log(todo);
        this.todoService.update(todo).subscribe((res) => {
            this.router.navigate(['/todos', this.todo.id]);
        }, (error) => console.log(error));
    }

    onCancel() {
        this.router.navigate(['/todos', this.todo.id]);
    }
};