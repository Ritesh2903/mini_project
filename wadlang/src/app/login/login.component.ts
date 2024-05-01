import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Initialize with empty string
  password: string = ''; // Initialize with empty string

  constructor(private router: Router) {}

  login() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      let userFound = false;
      for (const user of userData) {
        if (user.username === this.username && user.password === this.password) {
          userFound = true;
          sessionStorage.setItem('currentUser', JSON.stringify(user)); // Store user data in sessionStorage
          this.router.navigate(['/profile']); // Pass user data to profile component
          break; // Exit the loop once user is found
        }
      }
      if (!userFound) {
        alert('Invalid username or password');
      }
    } else {
      alert('User not registered');
    }
  }
}
