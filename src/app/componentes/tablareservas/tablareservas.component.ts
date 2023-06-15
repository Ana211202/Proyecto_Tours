import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablareservas',
  templateUrl: './tablareservas.component.html',
  styleUrls: ['./tablareservas.component.css']
})
export class TablareservasComponent {
  @Input() reservations:any[]=[];
  @Input() reservedTours: any;
  
  constructor(){
    const reservationsString = localStorage.getItem('reservations');
    this.reservations = reservationsString ? JSON.parse(reservationsString)
      : [];
      this.getReservedTours();
  }
  getReservedTours() {
    // Recuperar los datos del localStorage
    const storedTours = localStorage.getItem('reservedTours');
    if (storedTours) {
      // Convertir los datos a un objeto JavaScript
      this.reservedTours = JSON.parse(storedTours);
    }
  }
}
