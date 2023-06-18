import { Component } from '@angular/core';
import { getDatabase, set, ref, update } from '@angular/fire/database';
import { Database } from '@angular/fire/database';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { AunthenticationService } from '../services/aunthentication.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  item:any;
  title = 'reserva';
  reservations:any[]=[];
  alertMessage = '';
  alertType = '';
  reservedTours: any;
  tour: any;

  registerTour(value: any) {
    const date = (<HTMLInputElement>document.getElementById('date')).value;
    const time = (<HTMLInputElement>document.getElementById('time')).value;
    
    const currentDate = new Date();
    const reservationDate = new Date(date);

    if (!date || !time) {
      this.alertMessage = 'Por favor ingrese una fecha y hora para reservar.';
      this.alertType = 'warning';
    } else if (reservationDate < currentDate) {
      this.alertMessage = 'Lo siento, esa fecha ya pasó.';
      this.alertType = 'danger';
    }  else {
      
    set(ref(this.database, 'reservas/' + this.getSelectedTour()), {
      /*username: value.username,
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
      password: value.password
      */
     tour: this.getSelectedTour(),
     price: this.getPriceOfTour(this.getSelectedTour()!),
     date: value.date,
     hour: value.time
    });
    
    alert("usuario creado");
    this.goToPage("inicio");
    /* <button (click)="router.navigate(['/master']);">
     <span>Go to master Page</span>
     </button>*/

    }
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  getSelectedTour(){
    if(localStorage.getItem('tourSelection')){
      return localStorage.getItem('tourSelection');
    } else {
      return this.tours[0].name;
    }
    
  }

  getPriceOfTour(tour: string){
    this.tours.forEach(element => {
      if(element.name = tour){
        return element.price;
      } 
    });
    return "0";
  }

  tours = [
    {
      name: 'SEUL (COREA DEL SUR)',
      price: 5000
    },
    {
      name: ' MACHU PICCHU (PERU)',
      price: 4000
    },
    {
      name: 'RIO DE JANEIRO (BRASIL)',
      price: 2500
    },
    {
      name: 'CHICHEN ITZÁ (MÉXICO)',
      price: 3500
    },
    {
      name: 'EL COLISEO (ITALIA)',
      price: 3500
    },
    {
      name: 'PETRA (JORDANIA)',
      price: 4500
    }
  ];
  
  onReserve(tour:any) {
    console.log('Tour reservado:', tour);
  }

  constructor(public database: Database, private router: Router, private auth: AunthenticationService){
  }
}
