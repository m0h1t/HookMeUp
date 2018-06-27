import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { User } from '../models/User';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {
    baseURL = environment.apiURL;
    constructor(private authHttp: AuthHttp) { }

    getUsers(): Observable<User[]> {
        return this.authHttp.get(this.baseURL + 'users')
            .map(response => <User[]>response.json())
            .catch(this.handleError);
    }

    getUser(id): Observable<User> {
        return this.authHttp.get(this.baseURL + 'users/' + id)
            .map(response => <User>response.json())
            .catch(this.handleError);
    }

    updateUser(id: number, user: User): Observable<User> {
        return this.authHttp.put(this.baseURL + 'users/' + id, user).catch(this.handleError);
    }

    private handleError(error: any) {
        const applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return Observable.throw(applicationError);
        }
        const serverError = error.json();
        let modelStateErrors = '';
        if (serverError) {
            for (const key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        } else {
            modelStateErrors = 'Internal Server Error';
        }
        return Observable.throw (modelStateErrors);
    }
}
