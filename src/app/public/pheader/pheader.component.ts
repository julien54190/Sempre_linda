import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.scss']
})
export class PheaderComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(public authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }

  ngOnInit(): void{

    if (this.authService.isAuthenticated()) {
      this.authService.isAdmin().subscribe({
        next: (isAdmin) => {
          this.isAdmin = isAdmin;
        },
        error: (err) => {
          console.error('Error checking isAdmin status:', err);
        }
      });
    }
  }
}

