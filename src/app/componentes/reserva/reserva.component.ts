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
      name: 'Tour a Seul Corea',
      price: 5000
    },
    {
      name: 'Tour Machu Picchu Peru',
      price: 4000
    },
    {
      name: 'Tour a Petra Jordania',
      price: 3500
    }
  ];
  
  onReserve(tour: any) {
    // Obtener las reservaciones almacenadas en el localStorage
    const reservedToursString = localStorage.getItem('reservedTours');
    const reservedTours = reservedToursString ? JSON.parse(reservedToursString) : [];
    // Agregar el nuevo tour al arreglo
    reservedTours.push(tour);
    // Guardar el arreglo actualizado en el localStorage
    localStorage.setItem('reservedTours', JSON.stringify(reservedTours));
  }


}
