import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  screenReaderEnabled: boolean = false;
  fontSize: number = 16;
  nightModeEnabled: boolean = false;
  hideImagesEnabled: boolean = false;
  isNavbarHighlighted: boolean = false;
  speechSynthesis: SpeechSynthesis;
  accessibilityMenuVisible = false;
  //icono accesibilidad
  toggleAccessibilityMenu() {
    this.accessibilityMenuVisible = !this.accessibilityMenuVisible;
  }
  //Lector de pantalla
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
    this.speechSynthesis = window.speechSynthesis;
  }

  toggleScreenReader() {
    this.screenReaderEnabled = !this.screenReaderEnabled;

    if (this.screenReaderEnabled) {
      this.readText('Bienvenido te presentamos las distintas opciones que tenemos disponibles para ti para ello te tenemos un menu en el que puede consultar y ver nuestro contenido ademas de distintas opciones que tenemos para ti, date un escape y agrega mas aventuras a tu vida');
    } else {
      this.stopReading();
    }
  }

  readText(text: string) {
    if (!this.speechSynthesis.speaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      this.speechSynthesis.speak(utterance);
    }
  }

  stopReading() {
    this.speechSynthesis.cancel();
  }

  //Incrementoy decremento de tamaño
  increaseFontSize() {
    this.fontSize += 2;
    this.updateFontSize();
  }

  decreaseFontSize() {
    this.fontSize -= 2;
    this.updateFontSize();
  }

  updateFontSize() {
    document.documentElement.style.fontSize = this.fontSize + 'px';
  }

  //Ocultacion de imagenes
  toggleHideImages() {
    this.hideImagesEnabled = !this.hideImagesEnabled;
    this.updateHideImages();
  }

  updateHideImages() {
    const images = document.querySelectorAll('img');
    images.forEach((image: HTMLImageElement) => {
      if (this.hideImagesEnabled) {
        image.style.visibility = 'hidden';
      } else {
        image.style.visibility = 'visible';
      }
    });
  }

  //Resaltado de barra de menu
  toggleNavbarHighlight() {
    this.isNavbarHighlighted = !this.isNavbarHighlighted;
  }
  
}
