import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Message } from '../models/Message';

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {
    pageSize = 5;
    pageNumber = 1;
    messageContainer = 'Unread';

    constructor(
        private userService: UserService,
        private router: Router,
        private alertifyService: AlertifyService,
        private authService: AuthService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer)
        .catch(error => {
            this.alertifyService.error('Problem retreiving data');
            this.router.navigate(['/members']);
            return Observable.of(null);
        });
    }
}
