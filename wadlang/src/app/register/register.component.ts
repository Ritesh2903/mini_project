import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  phone: string = '';

  registerUser() {
    // Retrieve existing user data from localStorage
    const existingUserDataString = localStorage.getItem('userData');
    let existingUserData: any[] = [];
    if (existingUserDataString) {
      existingUserData = JSON.parse(existingUserDataString);
      if (!Array.isArray(existingUserData)) {
        existingUserData = [existingUserData]; // Convert to array if it's not already
      }
    }

    // Append new user data to existing data
    const newUserData = {
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    };
    existingUserData.push(newUserData);

    // Store updated user data back in localStorage
    localStorage.setItem('userData', JSON.stringify(existingUserData));

    // Log and alert registration success
    console.log('Data stored in localStorage:', newUserData);
    alert('Registration successful!');
  }
}
