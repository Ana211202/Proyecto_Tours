import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'video'
})
export class VideoPipe implements PipeTransform {
  
  constructor() { }
  transform(value: any, args?: any): any {
    if (args != null) {
      if (args=='ingles')
        switch (value) {
          case 1: return 'reserva\src\assets\video\video1.mp4';
          case 2: return 'reserva\src\assets\video\video2.mp4';
          case 3: return 'reserva\src\assets\video\video3.mp4';
          case 4: return 'reserva\src\assets\video\video4.mp4';
          case 5: return 'reserva\src\assets\video\video5.mp4';
          case 6: return 'reserva\src\assets\video\video6.mp4';
          case 7: return 'reserva\src\assets\video\video7.mp4';                        
        }
        if (args=='portugues')
        switch (value) {
          case 1: return 'um';
          case 2: return 'dois';
          case 3: return 'três';
          case 4: return 'quatro';
          case 5: return 'cinco';
          case 6: return 'seis';
          case 7: return 'sete';                        
        }        
    }
    switch (value) {
      case 1: return '../assets/video/video1.mp4'
          case 2: return '../assets/video/video2.mp4';
          case 3: return '../assets/video/video3.mp4';
          case 4: return '../assets/video/video4.mp4';
          case 5: return '../assets/video/video5.mp4';
          case 6: return '../assets/video/video6.mp4';
          case 7: return '../assets/video/video7.mp4';                        
    }  
    return "reserva/src/assets/video/video1.mp4";
}
}
