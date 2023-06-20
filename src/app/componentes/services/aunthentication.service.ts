import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, ApplicationVerifier, RecaptchaVerifier} from '@angular/fire/auth'
import { signInWithPhoneNumber } from 'firebase/auth';

import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

const app = initializeApp(environment.firebase);


const db = getDatabase();
const starCountRef = ref(db, 'users/');

@Injectable({
  providedIn: 'root'
})
export class AunthenticationService {

  constructor(public fireauth: AngularFireAuth, private router : Router) { }

  //login
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( ()=> {
        localStorage.setItem('token', 'true');
        this.getDatos(email);
        this.getAdmin(email);
        this.router.navigate(['/reservar']);
    },err =>{
        alert("Something went wrong");
        this.router.navigate(['/login']);
    } )
  }

  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }
  loginPhone(phone: string, captcha: RecaptchaVerifier){

    this.fireauth.signInWithPhoneNumber(phone, captcha).then(result => {
      this.router.navigate(['/verify'])
    }).catch(error => console.log(error));
  }
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('username');
      localStorage.removeItem('admin');
      this.redirectTo('/login');
    }, err => {
      alert(err.message);
    })
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
 }

  public getDatos(correo: string){
    onValue(starCountRef, (snapshot) => {
      var data : any[];

      data = Object.values(snapshot.val()); //se tiene el array con objetos 
      console.log("data onValue: " + Object.values(data)); //se tiene el segundo objeto en forma de array
      
      if(!data){
        alert("No hay usuarios");
        return;
      }
      
      for(let i=0; i <  data.length;i++){
          let aux : any;
          aux = Object.values(data[i])[1];
          if(aux==correo){
            let auxDos = Object.values(data[i])[2];
            if(typeof auxDos === 'string'){
              localStorage.setItem("name", auxDos);
            } else {
              localStorage.setItem("name", "Usuario");
            }
            
            let auxTres = Object.values(data[i])[6];
            if(typeof auxTres === 'string'){
              localStorage.setItem("username", auxTres);
            } else {
              localStorage.setItem("username", "anon");
            }
            break;
          }
      }
    
    
    });
  }


  public getAdmin(correo: string){
    onValue(starCountRef, (snapshot) => {
      var data : any[];

      data = Object.values(snapshot.val()); //se tiene el array con objetos 
      console.log("data onValue: " + Object.values(data)); //se tiene el segundo objeto en forma de array
      
      if(!data){
        alert("No hay usuarios");
        return;
      }
      
      for(let i=0; i <  data.length;i++){
          let aux : any;
          aux = Object.values(data[i])[1];
          if(aux==correo){
            let auxDos = Object.values(data[i])[0];
            if(typeof auxDos === 'string'){
              localStorage.setItem("admin", auxDos);
              return;
            }
          }
      }
    
      localStorage.setItem("admin", "no");
    });
  }
  
}
