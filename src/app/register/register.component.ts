import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userData = {
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  registerUser() {
    if (this.userData.password === this.userData.confirmPassword) {
      localStorage.setItem('userData', JSON.stringify(this.userData));
      this.router.navigate(['/login']);
    } else {
      alert('Passwords do not match!');
    }
  }
}
