import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = '';
  constructor(private router: Router) {}

  buscar() {
    this.router.navigate(['/search-results'], { queryParams: { q: this.searchTerm } });
  }
}