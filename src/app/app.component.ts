import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-beginner-app';
  imageUrl: string = "https://miro.medium.com/v2/resize:fit:1200/1*4sz5Fh2lrvlt68kVoj6PQQ.png";
  imageUrl2: string = "https://www.metizsoft.com/wp-content/uploads/2024/06/Angular-18.webp";
  isDisabled: boolean = false;
  isActive: boolean = true;
}
