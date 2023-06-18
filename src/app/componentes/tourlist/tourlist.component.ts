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
  localStorage.setItem('tourSelection', this.tour.name);
  this.router.navigate(['reserva']);
}

getSelectedTour(){
  if(localStorage.getItem('tourSelection')){
    return localStorage.getItem('tourSelection');
  } else {
    return "a";
  }
  
}

}
