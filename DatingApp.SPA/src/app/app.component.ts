import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Hook-Me-Up';
  jwtHelper: JwtHelper = new JwtHelper();
  defaultPhotoUrl = '../assets/user.png';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.authService.currentUser = user;
      if (this.authService.currentUser != null) {
        this.authService.changeMemberPhoto(user.photoURL);
      } else {
        this.authService.changeMemberPhoto(this.defaultPhotoUrl);
      }
    }
  }
}
