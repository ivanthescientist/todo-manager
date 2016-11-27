import {Component, Input, Output, EventEmitter} from "@angular/core";
import template from './todo.form.template.html';

@Component({
    selector: 'todo-form',
    template: template
})
export default class TodoFormComponent {
    @Input() todo;
    @Output() onSave = new EventEmitter();
    @Output() onCancel = new EventEmitter();

    save() {
        console.log(this.todo);
        this.onSave.emit(this.todo);
    }

    cancel() {
        this.onCancel.emit(true);
    }
};