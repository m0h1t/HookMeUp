import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './models/User';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  defaultPhotoUrl = '../assets/user.png';

  constructor(private authService: AuthService, private jwtHelperService: JwtHelperService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
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
