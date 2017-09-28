import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    
    create(user: User) {
        //this.http.post('/users/signup', user, this.jwt()).map((response: Response) => response.json());
        var userdata = {
            "name": "surya1",
            "email": "syup",
            "username": "sukjnnryaPrassanna",
            "password": "password"
            
        };
        return this.http.post('http://localhost:3000/users/signup',userdata);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}