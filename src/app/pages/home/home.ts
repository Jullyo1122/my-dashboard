import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, LineChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

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
      data: ['Jan', 'Fev', 'Mar', 'Abril', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
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
        type: 'line',
        data: [30, 20, 78, 50, 90, 120, 80, 60, 70, 100, 130, 150],
        
      }
    ]
  }
}
