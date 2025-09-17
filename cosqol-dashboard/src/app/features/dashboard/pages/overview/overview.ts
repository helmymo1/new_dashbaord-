import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-overview',
  standalone: true,
  templateUrl: './overview.html',
  styleUrls: ['./overview.scss']
})
export class Overview implements AfterViewInit {
  @ViewChild('incomeChart') incomeChartRef!: ElementRef;
  chart: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.incomeChartRef.nativeElement, {
        type: 'bar',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
            datasets: [{
                label: 'Monthly Income',
                data: [350, 200, 400, 250, 180, 450],
                backgroundColor: 'var(--chart-bar-color)',
                borderRadius: 5,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: function(value: string | number) { return value + 's'; } }
                },
                x: { grid: { display: false } }
            }
        }
    });
  }
}
