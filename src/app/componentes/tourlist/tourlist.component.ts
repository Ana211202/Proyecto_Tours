import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourlistComponent {
  @Input() tour: any;
  @Output() reserve = new EventEmitter<any>();

constructor(private router: Router) {}

reserveTours() {
  // Obtener los tours reservados almacenados en el localStorage
  const reservedToursString = localStorage.getItem('reservedTours');
  const reservedTours = reservedToursString ? JSON.parse(reservedToursString) : [];
  // Agregar el nuevo tour al arreglo
  reservedTours.push(this.tour);
  // Guardar el arreglo actualizado en el localStorage
  localStorage.setItem('reservedTours', JSON.stringify(reservedTours));
  this.reserve.emit(this.tour);
  this.router.navigate(['reserva']);
}


}
