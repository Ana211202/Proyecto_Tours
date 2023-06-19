import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore/lite';

import Chart from 'chart.js/auto';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

const app = initializeApp(environment.firebase);
const db = getDatabase();
const starCountRef = ref(db, 'users/');
var body : HTMLElement = document.body;

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraficasComponent implements OnInit {
  async ngOnInit() {
    const firebaseConfig = {
      projectId: 'proyectotours-81d94',
    appId: '1:307191822237:web:8badb9ff5bda1f1bf1a174',
    databaseURL: 'https://proyectotours-81d94-default-rtdb.firebaseio.com',
    storageBucket: 'proyectotours-81d94.appspot.com',
    apiKey: 'AIzaSyBdBiv0JChuRg49RK839CnWkW8KeigwCss',
    authDomain: 'proyectotours-81d94.firebaseapp.com',
    messagingSenderId: '307191822237',
    measurementId: 'G-BY0C0B0SP3',
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const documentId = 'VhcuRp5M035FWDPDmVlX';
    const documentRef = doc(db, 'graficas', documentId);
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      const data = documentSnapshot.data();

      const labels = Object.keys(data);
      const values = Object.values(data);
      console.log(values);

      const ctx = document.getElementById('barChart') as HTMLCanvasElement;
      const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Valores',
              data: values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } else {
      console.log('El documento no existe');
    }
  }




  public getBody(){
    body = document.getElementById("tablas")!;
    console.log("body: " + body);
  }


  public getData(){
    onValue(starCountRef, (snapshot) => {
      var data : any[];
      let tablaBody = document.createElement("tbody");

      data = Object.values(snapshot.val()); //se tiene el array con objetos 
      console.log("data onValue: " + Object.values(data)); //se tiene el segundo objeto en forma de array
      
      if(!data){
        alert("No hay usuarios");
        return;
      }

      //SE CREA LA TABLA DE USUARIOS
      const div = document.createElement('div');
      const tbl = document.createElement('table');
      var thead = document.createElement('thead');
      var orderArrayHeader = ["Correo", "Nombre", "Apellido", "Contraseña", "Telefono", "Usuario"];

            tbl.appendChild(thead);

        for (let i=0; i <= 5; i++) {
            thead.appendChild(document.createElement("th")).appendChild(document.createTextNode(orderArrayHeader[i]));
        }


      for(let i=0; i <  data.length;i++){
        const row = tbl.insertRow();

        for(let j=0; j<=5; j++){
          const cell = row.insertCell();
          //console.log("["+i+"]" + "["+j+"]: " + Object.values(data[i])[j]);
          let aux : any; 
          aux = Object.values(data[i])[j];
          
          
          cell.appendChild(document.createTextNode(aux));
          
          row.setAttribute("class", "celdas");
          row.appendChild(cell);

        }
      }
      tbl.setAttribute("class","tablee");
      div.setAttribute("class", "centerAll")
      div.appendChild(tbl);
      body = document.getElementById("tablas")!;
      body?.appendChild(div);
    });
    
    //auxiliar = data;

    //console.log("AUXILIAR: " + auxiliar);
    //console.log("DATA: " + data[1]);
  }
}
