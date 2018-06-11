import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    baseURL = 'http://localhost:5000/api/auth/';
    userToken: any;

    constructor(private http: Http) { }

    login(model: any) {
        return this.http.post(this.baseURL + 'login', model, this.requestOptions()).map((response: Response) => {
            const user = response.json();
            if (user) {
                localStorage.setItem('token', user.tokenString);
                this.userToken = user.tokenString;
            }
        }).catch(this.handleError);
    }

    register(model: any) {
        return this.http.post(this.baseURL + 'register', model, this.requestOptions()).catch(this.handleError);
    }

    private requestOptions() {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({headers: headers});
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
