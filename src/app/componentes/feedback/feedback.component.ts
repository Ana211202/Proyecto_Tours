import { Component } from '@angular/core';
import swal from'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  alerta:string="Comentarios enviados.";
  data:any;

  nom:string="";
  cor:string="";
  com:string="";
  cont1:number=0;
  visibilidad1='hidden';

  nom2:string="";
  cor2:string="";
  com2:string="";
  cont2:number=0;
  visibilidad2='hidden';
  
  constructor() { }

  comentarios1:coment1[]=[];
  comentarios2:coment2[]=[];

  ngOnInit(): void {
  }

  agregar1() {
    let aux:coment1={id1: this.cont1, nombre1:this.nom, correo1:this.cor, comentario1:this.com};
    this.comentarios1.push(aux);
    localStorage.setItem('data', JSON.stringify(this.comentarios1));
    this.cont1++;
    console.log(this.comentarios1);
    this.nom="";
    this.cor="";
    this.com="";
    swal.fire('Enviado', this.alerta, 'success');
  }

  agregar2() {
    let aux:coment2={id2: this.cont2, nombre2:this.nom2, correo2:this.cor2, comentario2:this.com2};
    this.comentarios2.push(aux);
    localStorage.setItem('data2', JSON.stringify(this.comentarios2));
    this.cont2++;
    console.log(this.comentarios2);
    this.nom2="";
    this.cor2="";
    this.com2="";
    swal.fire('Enviado', this.alerta, 'success');
  }

  ver1() {
    this.visibilidad1='visible';
    this.data=localStorage.getItem(JSON.parse('data'));
    
  }

  ver2() {
    this.visibilidad2='visible';
  }

}

interface coment1 {
  id1:number;
  nombre1:string;
  correo1:string;
  comentario1:string;
}

interface coment2 {
  id2:number;
  nombre2:string;
  correo2:string;
  comentario2:string;
}
