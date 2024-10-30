import { Component, OnInit } from '@angular/core';
import { Chart, registerables, ChartData, TooltipItem } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  config: any;
  chart: Chart | undefined;

  configTwo: any;
  chartTwo: Chart | undefined;

  ngOnInit(): void {
    const canvasTwo = <HTMLCanvasElement>document.getElementById('ORDER_SUMMARY');
    const ctxTwo = canvasTwo.getContext('2d')!;

    this.configTwo = {
      type: 'line',
      data: {
        labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: 'Revenue',
            data: [30000, 40000, 60000, 42000, 60000, 55000, 45000],
            borderColor: '#4D8DFF',
            backgroundColor: 'rgba(77, 141, 255, 0.1)',
            fill: false, 
            tension: 0, 
            pointBackgroundColor: '#4D8DFF',
            pointHoverBackgroundColor: '#4D8DFF',
            pointRadius: 5,
            spanGaps: true, // Connects all points without gaps
          },
          {
            label: 'Profit',
            data: [29000, 39500, 58000, 20000, 49000, 54500, 44500],
            borderColor: '#D3BC8F',
            backgroundColor: 'rgba(211, 188, 143, 0.1)',
            fill: false,
            tension: 0,
            pointBackgroundColor: '#D3BC8F',
            pointHoverBackgroundColor: '#D3BC8F',
            pointRadius: 5,
            spanGaps: true, // Ensures no gaps in this line either
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
            max: 80000,
            ticks: {
              stepSize: 20000,
            },
          },
          x: {
            grid: {
              display: false,
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
          tooltip: {
            callbacks: {
              title: (tooltipItems: TooltipItem<'line'>[]) => `This Month`,
              label: (tooltipItem: TooltipItem<'line'>) => `${(tooltipItem.raw as number).toLocaleString()}`,
            },
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: { weight: 'bold' },
            titleAlign: 'center',
          },
        },
      },
    };
    

    this.chartTwo = new Chart(ctxTwo, this.configTwo);
  }
}
