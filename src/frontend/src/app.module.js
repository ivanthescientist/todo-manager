import 'core-js/client/shim';
import 'zone.js';
import 'rxjs/Rx';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import TodoService from './app/service/todo.service';

import TodoAppComponent from './app/todo.app.component';
import TodoListComponent from './app/todo/todo.list.component';
import TodoDetailsComponent from './app/todo/todo.details.component';
import TodoFormComponent from './app/todo/todo.form.component';
import TodoEditComponent from './app/todo/todo.edit.component';
import TodoCreateComponent from './app/todo/todo.create.component';

import AboutComponent from './app/about/about.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component: TodoListComponent},
            {path: 'todos', component: TodoListComponent},
            {path: 'todos/new', component: TodoCreateComponent},
            {path: 'todos/:id', component: TodoDetailsComponent},
            {path: 'todos/:id/edit', component: TodoEditComponent},
            {path: 'about', component: AboutComponent}
        ])
    ],
    declarations: [
        TodoListComponent,
        TodoDetailsComponent,
        TodoFormComponent,
        TodoEditComponent,
        TodoCreateComponent,
        TodoAppComponent,
        AboutComponent
    ],
    providers: [
        TodoService
    ],
    bootstrap: [ TodoAppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
