import { Component } from '@angular/core';
import { getDatabase, set, ref, update } from '@angular/fire/database';
import { Database } from '@angular/fire/database';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { AunthenticationService } from '../services/aunthentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  confirmPassword: string = '';
  showSuccessAlert: boolean = false;
  showErrorAlert: boolean = false;

  constructor(public database: Database, private router: Router, private auth: AunthenticationService) { }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  registerUser() {
    if (this.username === '' || this.firstname === '' || this.lastname === '' ||
        this.email === '' || this.password === '' || this.phone === '') {
      this.showErrorAlert = true;
      return;
    }

    set(ref(this.database, 'users/' + this.username), {
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      phone: this.phone,
      admin: "no"
    });

    this.auth.register(this.email, this.password);

    this.showSuccessAlert = true;
    this.goToPage('inicio');
  }

  closeAlert() {
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
  }
}
