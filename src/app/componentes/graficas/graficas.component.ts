import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore/lite';

import Chart from 'chart.js/auto';
import { initializeApp } from 'firebase/app';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
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
}
