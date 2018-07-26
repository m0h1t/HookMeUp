import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from '../models/AuthUser';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseURL = environment.apiURL + 'auth/';
    defaultPhotoUrl = '../../assets/user.png';
    userToken: any;
    decodedToken: any;
    currentUser: User;
    private photoUrl = new BehaviorSubject<string>(this.defaultPhotoUrl);
    currentPhotoUrl = this.photoUrl.asObservable();

    constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }

    changeMemberPhoto(photoUrl: string) {
        this.photoUrl.next(photoUrl);
    }

    login(model: any) {
        return this.http.post<AuthUser>(this.baseURL + 'login', model).pipe(
            map(user => {
                if (user) {
                    localStorage.setItem('token', user.tokenString);
                    localStorage.setItem('user', JSON.stringify(user.user));
                    this.userToken = user.tokenString;
                    this.decodedToken = this.jwtHelperService.decodeToken(this.userToken);
                    this.currentUser = user.user;
                    console.log(this.decodedToken);
                    if (this.currentUser.photoURL != null) {
                        this.changeMemberPhoto(this.currentUser.photoURL);
                    } else {
                        this.changeMemberPhoto(this.defaultPhotoUrl);
                    }
                }
            }
        ));
    }

    register(user: User) {
        return this.http.post(this.baseURL + 'register', user);
    }

    loggedIn() {
        const token = this.jwtHelperService.tokenGetter();

        if (!token) {
            return false;
        }

        return !this.jwtHelperService.isTokenExpired(token);
    }
}
