import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Image {
  url: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  X = Math.round(Math.random()*(3-1)+1);
  handleSearch(value: string){
    console.log(value)
  } // Agrega esta línea para definir la propiedad X

  images: Image[] = [
    { url: 'assets/images/img1.jpg', description: 'PLAYA DEL CARMEN' },
    { url: 'assets/images/img2.jpg', description: 'PIRAMIDES DE EGIPTO' },
    { url: 'assets/images/img3.jpg', description: 'KIOTO JAPON' },
    { url: 'assets/images/img4.jpg', description: 'QUINTANA ROO' },
    { url: 'assets/images/img5.jpg', description: 'FESTIBAL DEL GLOBO LEON' },
    { url: 'assets/images/img6.jpg', description: 'MADRID ESPAÑA' },
  ];
  
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  onRightClick() { // Agrega esta función para definir onRightClick
    // Aquí puedes agregar el código que quieres ejecutar cuando el usuario haga clic derecho en el elemento
  }
}
