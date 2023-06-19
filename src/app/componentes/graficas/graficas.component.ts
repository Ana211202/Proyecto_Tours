import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements AfterViewInit {
  title = 'GraficasProyecto';
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;
  chartInstance: any;
  datosTabla: number[] = [];
  xValues = ["Italia", "Francia", "España", "USA", "Corea"];
 
  ngAfterViewInit() {
  this.crearGrafico();
  }
 
  generarDatosAleatorios() {
  var yValues = [];
  for (var i = 0; i < 5; i++) {
  var valorAleatorio = Math.floor(Math.random() * 100) + 1;
  yValues.push(valorAleatorio);
  }
  return yValues;
  }
 
  crearGrafico() {
  var yValues = this.generarDatosAleatorios();
  var barColors = ["purple", "green", "blue", "orange", "brown"];
  const ctx = this.myChart.nativeElement.getContext('2d');
 
  if (ctx) {
  this.chartInstance = new Chart(ctx, {
  type: 'bar',
  data: {
  labels: this.xValues,
  datasets: [{
  data: yValues,
  backgroundColor: barColors
  }]
  },
  options: {
  scales: {
  y: {
  beginAtZero: true
  }
  }
  }
  });
  }
  }
 
  actualizarGrafico() {
  var yValues = this.generarDatosAleatorios();
 
  if (this.chartInstance) {
  this.chartInstance.data.datasets[0].data = yValues;
  this.chartInstance.update();
  localStorage.setItem('datosGrafico', JSON.stringify(yValues));
  this.datosTabla = yValues;
  }
  }
}
