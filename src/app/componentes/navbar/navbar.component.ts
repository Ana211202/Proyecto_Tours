import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AunthenticationService } from '../services/aunthentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = '';
  constructor(private router: Router, public auth : AunthenticationService) {}

  buscar() {
    this.router.navigate(['/search-results'], { queryParams: { q: this.searchTerm } });
  }

  isUserLogged(){
      if(localStorage.getItem("token")){
        return localStorage.getItem("token")!.valueOf();
      } else {
        return "no";
      }
  }
}