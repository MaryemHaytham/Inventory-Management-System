import { Component, OnInit } from '@angular/core';
import { Chart, registerables, ChartData } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  config: any;
  chart: Chart | undefined;

  configTwo: any;
  chartTwo: Chart | undefined;

  ngOnInit(): void {
    // Configuration for the bar chart
    const canvas = <HTMLCanvasElement>document.getElementById('SALES_PURCHASE');
    const ctx = canvas.getContext('2d')!;

    const salesGradient = ctx.createLinearGradient(0, 0, 0, 400);
    salesGradient.addColorStop(0, '#79D0F1');
    salesGradient.addColorStop(0.5, '#74B0FA');
    salesGradient.addColorStop(1, '#817AF3');

    const purchaseGradient = ctx.createLinearGradient(0, 0, 0, 400);
    purchaseGradient.addColorStop(0, '#57DA65');
    purchaseGradient.addColorStop(0.5, '#51CC5D');
    purchaseGradient.addColorStop(1, '#46A46C');

    this.config = {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40, 45, 20, 89],
            backgroundColor: salesGradient,
            borderRadius: 10,
          },
          {
            label: 'Purchase',
            data: [40, 30, 60, 71, 86, 45, 25, 15, 40, 40],
            backgroundColor: purchaseGradient,
            borderRadius: 10,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            barPercentage: 0.5,
          },
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              generateLabels: (chart: Chart) => {
                const data = chart.data as ChartData;
                return data.datasets.map((dataset, i) => ({
                  text: dataset.label,
                  fillStyle: i === 0 ? '#817AF3' : '#46A46C',
                  pointStyle: 'circle',
                }));
              },
            },
          },
        },
      },
    };

    const canvasTwo = <HTMLCanvasElement>(
      document.getElementById('ORDER_SUMMARY')
    );
    const ctxTwo = canvasTwo.getContext('2d')!;

    this.configTwo = {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          {
            label: 'Ordered',
            data: [1200, 2500, 1250, 2000],
            borderColor: '#DBA362',
            backgroundColor: 'rgba(219, 163, 98, 0.2)',
            fill: true,
            tension: 0.3,
          },
          {
            label: 'Delivered',
            data: [1500, 3700, 2500, 3700],
            borderColor: '#B6D3FA',
            backgroundColor: 'rgba(182, 211, 250, 0.1)',
            fill: false,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,

        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 4000,
            ticks: {
              stepSize: 1000,
            },
          },
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              color: '#333',
            },
          },
        },
      },
    };

    this.chart = new Chart(ctx, this.config);
    this.chartTwo = new Chart(ctxTwo, this.configTwo);
  }
}
