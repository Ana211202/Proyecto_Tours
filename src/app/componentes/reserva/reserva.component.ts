import { Component } from '@angular/core';

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

  onSubmit() {
    // Obtener la fecha y hora ingresadas por el usuario
    const date = (<HTMLInputElement>document.getElementById('date')).value;
    const time = (<HTMLInputElement>document.getElementById('time')).value;

    // Obtener las reservaciones almacenadas en el localStorage
    const reservationsString = localStorage.getItem('reservations');
    const reservations = reservationsString ? JSON.parse(reservationsString) : [];
    // Verificar si la fecha y hora ya están ocupadas
    interface Reservation {
      date: string;
      time: string;
         tour: any;
    }
    
    // ...
    
    const isOccupied = reservations.some((reservation: Reservation) =>
      reservation.date === date && reservation.time === time
    );
    
    const currentDate = new Date();
    const reservationDate = new Date(date);
    
    if (!date || !time) {
      this.alertMessage = 'Por favor ingrese una fecha y hora para reservar.';
      this.alertType = 'warning';
    } else if (reservationDate < currentDate) {
      this.alertMessage = 'Lo siento, esa fecha ya pasó.';
      this.alertType = 'danger';
    } else if (isOccupied) {
      this.alertMessage = 'Lo siento, esa fecha y hora ya están ocupadas.';
      this.alertType = 'danger';
    } else {
      // Agregar la nueva reservación al localStorage
      reservations.push({ date, time });
      localStorage.setItem('reservations', JSON.stringify(reservations));
      this.alertMessage = 'Reservación realizada con éxito.';
      this.alertType = 'success';
    }
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

}
