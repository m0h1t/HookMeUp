import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AlertifyService } from '../../services/alertify.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/User';
import { Message } from '../../models/Message';
import * as _ from 'underscore';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() userId: number;
  messages: Message[];
  newMessage: any = {};

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    const currentUserId = +this.authService.decodedToken.nameid;
    this.userService.getMessagesThread(currentUserId, this.userId)
    .do(messages => {
      _.each(messages, (message: Message) => {
        if (message.isRead === false && message.recipientId === currentUserId) {
          this.userService.markAsRead(message.id, currentUserId);
        }
      });
    })
    .subscribe(messagesThread => {
      this.messages = messagesThread;
    }, error => {
      this.alertify.error(error);
    });
  }

  sendMessage() {
    this.newMessage.recipientId = this.userId;
    this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe(message => {
      this.messages.push(message);
      this.newMessage.content = '';
    }, error => {
      this.alertify.error(error);
    });
  }
}
