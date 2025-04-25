import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrInput,
  BrCheckbox,
  BrButton,
  BrSelect,
  BrRadio,
} from '@govbr-ds/webcomponents-angular/standalone';

import {
  Chart,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-screens',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BrInput,
    BrCheckbox,
    BrButton,
    BrSelect,
    BrRadio,
  ],
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css'],
})
export class ScreensComponent implements OnInit, AfterViewInit {
  // Canvas refs
  @ViewChild('salesChart') salesChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('performanceChart')
  performanceChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('analysisChart') analysisChart!: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initSalesChart();
    this.initPerformanceChart();
    this.initAnalysisChart();
  }

  private initSalesChart() {
    new Chart(this.salesChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
          {
            label: 'Vendas',
            data: [500, 800, 650, 900, 1200, 1000],
            backgroundColor: '#1351b4',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });
  }

  private initPerformanceChart() {
    new Chart(this.performanceChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [
          {
            label: 'Desempenho',
            data: [70, 75, 80, 78, 85, 88, 90],
            borderColor: '#1351b4',
            backgroundColor: 'rgba(19,81,180,0.1)',
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true } },
      },
    });
  }

  private initAnalysisChart() {
    new Chart(this.analysisChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [
          {
            label: 'Acessos',
            data: [120, 150, 180, 170, 200, 220, 240],
            borderColor: '#1351b4',
            backgroundColor: 'rgba(19,81,180,0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#1351b4',
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: { mode: 'index', intersect: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Quantidade' },
          },
          x: { title: { display: true, text: 'Dias da Semana' } },
        },
      },
    });
  }
}
