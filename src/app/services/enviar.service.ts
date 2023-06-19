import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnviarService {

  private url="http://localhost:3000/envio";

  constructor(private http:HttpClient) { }

  sendEmail(_body: { email: any, nombre:any, apellido:any, mensaje:any }) {
    return this.http.post(this.url,_body);
    
  }
}
