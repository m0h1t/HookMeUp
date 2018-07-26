import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import { PaginatedResult } from '../models/Pagination';
import { Message } from '../models/Message';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseURL = environment.apiURL;
    constructor(private authHttp: HttpClient) { }

    getUsers(page?, itemsPerPage?, userParams?: any, likeParams?: string) {
        const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();
        let params = new HttpParams();

        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }

        if (likeParams === 'Likers') {
            params = params.append('Likers', 'true');
        } else if (likeParams === 'Likees') {
            params = params.append('Likees', 'true');
        }

        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }

        return this.authHttp
            .get<User[]>(this.baseURL + 'users', {observe: 'response', params })
            .pipe(map(response => {
                paginatedResult.result = response.body;

                if (response.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                }

                return paginatedResult;
            }));
    }

    getUser(id): Observable<User> {
        return this.authHttp.get<User>(this.baseURL + 'users/' + id);
    }

    updateUser(id: number, user: User) {
        return this.authHttp.put(this.baseURL + 'users/' + id, user);
    }

    setMainPhoto(userId: number, Id: number) {
        return this.authHttp.post(this.baseURL + 'users/' + userId + '/photos/' + Id + '/setMain', {});
    }

    deletePhoto(userId: number, Id: number) {
        return this.authHttp.delete(this.baseURL + 'users/' + userId + '/photos/' + Id);
    }

    sendLike(id: number, recipientId: number) {
        return this.authHttp.post(this.baseURL + 'users/' + id + '/like/' + recipientId, {});
    }

    getMessages(id, page?, itemsPerPage?, messageContainer?: string) {
        const paginatedResult: PaginatedResult<Message[]> = new PaginatedResult<Message[]>();

        let params = new HttpParams();

        params = params.append('MessageContainer', messageContainer);

        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page).append('itemsPerPage', itemsPerPage);
        }
        return this.authHttp.get<Message[]>(this.baseURL + 'users/' + id + '/messages', { observe: 'response', params })
            .pipe(map(response => {
                paginatedResult.result = response.body;
                if (response.headers.get('Pagination') != null) {
                    paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                }
                return paginatedResult;
            }
        ));
    }

    getMessagesThread(id: number, recipientId: number) {
        return this.authHttp.get<Message[]>(this.baseURL + 'users/' + id + '/messages/thread/' + recipientId);
    }

    sendMessage(id: number, message: Message) {
      return this.authHttp.post<Message>(this.baseURL + 'users/' + id + '/messages/', message);
    }

    deleteMessage(id: number, userId: number) {
        return this.authHttp.post(this.baseURL + 'users/' + userId + '/messages/' + id, {});
    }

    markAsRead(id: number, userId: number) {
        this.authHttp.post(this.baseURL + 'users/' + userId + '/messages/' + id + '/read', {}).subscribe();
    }
}
