import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/index';

@Injectable()
export class UserService {
private url=' http://test.web.api.acorsociety.com/api/users/userregistrationasync';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.url);
    }

    getById(id: number) {
        return this.http.get(this.url + id);
    }

    create(user: User) {
        alert(JSON.stringify(user));
        return this.http.post(this.url, user);
    }

    update(user: User) {
        return this.http.put(this.url + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.url + id);
    }
}