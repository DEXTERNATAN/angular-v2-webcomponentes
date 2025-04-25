import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrButton } from '@govbr-ds/webcomponents-angular/standalone';
import Chart, { ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, BrButton],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent {
  @ViewChild('barChart') barChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('lineChart') lineChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieChart') pieChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('areaChart') areaChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('radarChart') radarChart!: ElementRef<HTMLCanvasElement>;

  chartInstances: {
    bar?: Chart;
    line?: Chart;
    pie?: Chart;
    area?: Chart;
    radar?: Chart;
  } = {};

  // Dados iniciais (reactive)
  barData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Vendas 2023',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: Array(6).fill('rgba(255,99,132,0.2)'),
        borderColor: Array(6).fill('rgba(255,99,132,1)'),
        borderWidth: 1,
      },
    ],
  };

  lineData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Receita 2023',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75,192,192)',
        tension: 0.1,
      },
      {
        label: 'Despesas 2023',
        data: [28, 48, 40, 19, 86, 27],
        fill: false,
        borderColor: 'rgb(255,99,132)',
        tension: 0.1,
      },
    ],
  };

  pieData = {
    labels: ['Vermelho', 'Azul', 'Amarelo', 'Verde', 'Roxo', 'Laranja'],
    datasets: [
      {
        label: 'Distribuição de Cores',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: Array(6).fill('rgba(54,162,235,0.2)'),
        borderColor: Array(6).fill('rgba(54,162,235,1)'),
        borderWidth: 1,
      },
    ],
  };

  areaData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Crescimento 2023',
        data: [65, 59, 80, 81, 56, 55],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgb(75,192,192)',
        tension: 0.1,
      },
    ],
  };

  radarData = {
    labels: [
      'Vendas',
      'Marketing',
      'Desenvolvimento',
      'Suporte',
      'Financeiro',
      'RH',
    ],
    datasets: [
      {
        label: 'Departamento A',
        data: [65, 59, 90, 81, 56, 55],
        fill: true,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgb(255,99,132)',
        pointBackgroundColor: 'rgb(255,99,132)',
        pointBorderColor: '#fff',
      },
      {
        label: 'Departamento B',
        data: [28, 48, 40, 19, 96, 27],
        fill: true,
        backgroundColor: 'rgba(54,162,235,0.2)',
        borderColor: 'rgb(54,162,235)',
        pointBackgroundColor: 'rgb(54,162,235)',
        pointBorderColor: '#fff',
      },
    ],
  };

  commonOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { font: { size: 12 } } },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (ctx: any) => {
            const v = ctx.parsed.y ?? ctx.parsed;
            return (
              ctx.dataset.label +
              ': ' +
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(Number(v))
            );
          },
        },
      },
    },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initChart('bar', this.barChart.nativeElement, 'bar', this.barData, {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value: number | string): string => `R$ ${value}`,
          },
        },
      },
    });
    this.initChart(
      'line',
      this.lineChart.nativeElement,
      'line',
      this.lineData,
      {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value: number | string): string => `R$ ${value}`,
            },
          },
        },
      }
    );
    this.initChart('pie', this.pieChart.nativeElement, 'pie', this.pieData, {
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx: any): string => {
              const total = (ctx.dataset.data as number[]).reduce(
                (a, b) => a + b,
                0
              );
              const pct = Math.round(((ctx.parsed as number) / total) * 100);
              return `${ctx.label}: ${ctx.parsed} (${pct}%)`;
            },
          },
        },
      },
    });
    this.initChart(
      'area',
      this.areaChart.nativeElement,
      'line',
      this.areaData,
      {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value: number | string): string => `R$ ${value}`,
            },
          },
        },
      }
    );
    this.initChart(
      'radar',
      this.radarChart.nativeElement,
      'radar',
      this.radarData,
      { scales: { r: { beginAtZero: true, max: 100 } } }
    );
  }

  private initChart(
    key: keyof typeof this.chartInstances,
    canvas: HTMLCanvasElement,
    type: any,
    data: any,
    extraOpts: any = {}
  ) {
    this.chartInstances[key] = new Chart(canvas, {
      type,
      data,
      options: { ...this.commonOptions, ...extraOpts },
    });
  }

  updateBarData() {
    this.replaceData('bar', 5, 30, 6);
  }
  updateLineData() {
    this.replaceData('line', 20, 90, 6, 2);
  }
  updatePieData() {
    this.replaceData('pie', 2, 20, 6);
  }
  updateAreaData() {
    this.replaceData('area', 40, 90, 6);
  }
  updateRadarData() {
    this.replaceData('radar', 20, 100, 6, 2);
  }

  private replaceData(
    key: keyof typeof this.chartInstances,
    min: number,
    max: number,
    count: number,
    datasetsCount: number = 1
  ) {
    const inst = this.chartInstances[key];
    if (!inst) return;
    for (let i = 0; i < datasetsCount; i++) {
      (inst.data.datasets[i].data as number[]) = this.generateRandomData(
        min,
        max,
        count
      );
    }
    inst.update();
  }

  private generateRandomData(
    min: number,
    max: number,
    count: number
  ): number[] {
    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  }
}
