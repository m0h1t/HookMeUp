import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { User } from '../models/User';

@Injectable()
export class AuthService {
    baseURL = 'http://localhost:5000/api/auth/';
    userToken: any;
    decodedToken: any;
    jwtHelper: JwtHelper = new JwtHelper();
    currentUser: User;
    private photoUrl = new BehaviorSubject<string>('../../assets/user.png');
    currentPhotoUrl = this.photoUrl.asObservable();

    constructor(private http: Http) { }

    changeMemberPhoto(photoUrl: string) {
        this.photoUrl.next(photoUrl);
    }

    login(model: any) {
        return this.http.post(this.baseURL + 'login', model, this.requestOptions()).map((response: Response) => {
            const user = response.json();
            if (user) {
                localStorage.setItem('token', user.tokenString);
                localStorage.setItem('user', JSON.stringify(user.user));
                this.userToken = user.tokenString;
                this.decodedToken = this.jwtHelper.decodeToken(this.userToken);
                this.currentUser = user.user;
                console.log(this.decodedToken);
                this.changeMemberPhoto(this.currentUser.photoURL);
            }
        }).catch(this.handleError);
    }

    register(model: any) {
        return this.http.post(this.baseURL + 'register', model, this.requestOptions()).catch(this.handleError);
    }

    loggedIn() {
        return tokenNotExpired();
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
