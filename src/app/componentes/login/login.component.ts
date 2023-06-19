import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms'
import { AunthenticationService } from '../services/aunthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email : string = '';
  password : string = '';
  showModal: boolean = false;
  modalMessage: string = '';
  
  constructor(private auth : AunthenticationService){}

  login() {
    if(this.email == '') {
      this.modalMessage = 'Please enter email';
      this.showModal = true;
      return;
    }

    if(this.password == '') {
      this.modalMessage = 'Please enter password';
      this.showModal = true;
      return;
    }

    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';
  }
}
