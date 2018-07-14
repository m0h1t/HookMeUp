import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { User } from '../models/User';
import { AuthHttp } from 'angular2-jwt';
import { PaginatedResult } from '../models/Pagination';

@Injectable()
export class UserService {
    baseURL = environment.apiURL;
    constructor(private authHttp: AuthHttp) { }

    getUsers(page?: number, itemsPerPage?: number, userParams?: any, likeParams?: string) {
        const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();
        let queryString = '?';

        if (page != null && itemsPerPage != null) {
            queryString += 'pageNumber=' + page + '&pageSize=' + itemsPerPage + '&';
        }

        if (likeParams === 'Likers') {
            queryString += 'Likers=true&';
        } else if (likeParams === 'Likees') {
            queryString += 'Likees=true&';
        }

        if (userParams != null) {
            queryString +=
              'minAge=' + userParams.minAge +
              '&maxAge=' + userParams.maxAge +
              '&gender=' + userParams.gender +
              '&orderBy=' + userParams.orderBy;
        }

        return this.authHttp.get(this.baseURL + 'users' + queryString)
            .map((response: Response) => {
                paginatedResult.result = response.json();

                if (response.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                }
                return paginatedResult;
            })
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

    setMainPhoto(userId: number, Id: number) {
        return this.authHttp.post(this.baseURL + 'users/' + userId + '/photos/' + Id + '/setMain', {}).catch(this.handleError);
    }

    deletePhoto(userId: number, Id: number) {
        return this.authHttp.delete(this.baseURL + 'users/' + userId + '/photos/' + Id).catch(this.handleError);
    }

    sendLike(id: number, recipientId: number) {
        return this.authHttp.post(this.baseURL + 'users/' + id + '/like/' + recipientId, {}).catch(this.handleError);
    }

    private handleError(error: any) {
        const applicationError = error.headers.get('Application-Error');

        if (error.status === 400) {
            return Observable.throw(error._body);
        }

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
