import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer]);

import { EChartsOption } from 'echarts/types/dist/shared';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [provideEchartsCore({ echarts })],
})
export class Home {
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Janeiro/2025', 'Fevereiro/2025', 'Março/2025'],
      axisLabel: {
        rotate: 45,
        interval: 0
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Vendas (mil)',
        type: 'bar',
        data: [30, 20, 78],
        label: {
          show: true,
          position: 'top',
          formatter: '{c} mil '
        }
      }
    ]
  }
}
