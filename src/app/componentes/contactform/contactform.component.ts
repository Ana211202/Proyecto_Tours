import { Component, OnInit } from '@angular/core';
import { EnviarService } from 'src/app/enviar.service';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit{

  user!:FormGroup;
  texto="estamos encantados de recibir tus comentarios";
  texto2="";
  correo!:string;

  constructor(private spinner:NgxSpinnerService, private enviar:EnviarService) { }

  private validateEdad(control: AbstractControl):ValidationErrors|null {
    if(parseInt(control.value)<18) {
         return {validateEdad:true}
    } else  {
     
      return null;
    }
 
  }

  createForm() {
    this.user= new FormGroup({
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      edad: new FormControl("", [this.validateEdad, Validators.required]),
      correo: new FormControl("", [Validators.required, Validators.email]),
    mensaje: new FormControl("", Validators.required)
    });
    
  }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit():any {
    this.spinner.show();
    setTimeout(()=> {
      this.spinner.hide();
    }, 3000)
    //limpiar formulario
    let email=this.user.value.correo;
    let nombre=this.user.value.nombre;
    let apellido=this.user.value.apellido;
    let  mensaje=this.user.value.mensaje;
    let reqObj= {
      email:email,
      nombre:nombre,
      apellido:apellido,
      mensaje:mensaje
    }
    this.enviar.sendEmail(reqObj).subscribe((data: any)=>{
      console.log(data);
    });
    this.user.reset();
  }

}
