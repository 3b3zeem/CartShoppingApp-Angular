import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  title = 'Products';

  isLoggedIn: boolean = false;
  username: string = '';

  ngOnInit() {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      this.isLoggedIn = true;
      this.username = userData.username;
    }
  }

  logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
    this.username = '';
  }
}
