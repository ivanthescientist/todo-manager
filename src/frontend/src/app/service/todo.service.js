import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

const SERVER = '';

@Injectable()
export default class TodoService {
    constructor(http: Http) {
        this.http = http;
    }

    getList() {
        return this.http.get(SERVER + '/api/todos')
            .map((res) => res.json());
    }

    getById(id) {
        return this.http.get(SERVER + '/api/todos/' + id)
            .map((res) => res.json());
    }

    create(todo) {
        return this.http.post(SERVER + '/api/todos', todo)
            .map((res) => res.json());
    }

    update(todo) {
        return this.http.put(SERVER + '/api/todos/' + todo.id, todo)
            .map((res) => res.json());
    }

    remove(id) {
        return this.http.delete(SERVER + '/api/todos/' + id)
            .map((res) => res.json());
    }
}