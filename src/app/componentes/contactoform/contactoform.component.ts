import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { EnviarService } from 'src/app/enviar.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contactoform',
  templateUrl: './contactoform.component.html',
  styleUrls: ['./contactoform.component.css']
})
export class ContactoformComponent implements OnInit {

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
    let reqObj= {
      email:email
    }
    this.enviar.sendEmail(reqObj).subscribe((data: any)=>{
      console.log(data);
    });
    this.user.reset();
  }

}
