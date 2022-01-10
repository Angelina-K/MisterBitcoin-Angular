import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor() {}
  @Input() rate;
  @Input() date;
  options: any;

  ngOnInit(): void {
    this.options = {
      legend: {
        data: ['bar'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.date,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          // name: 'bar',
          type: 'line',
          data: this.rate,
          animationDelay: (idx) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }
}
