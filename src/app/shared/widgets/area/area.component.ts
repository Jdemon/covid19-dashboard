import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { CovidChart } from '../../model/CovidChart';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'THAILAND COVID19 INFECTION'
      },
      // subtitle: {
      //   text: 'THAILAND COVID19 INFECTION'
      // },
      tooltip: {
        split: true,
        valueSuffix: ' Cases',
      },

      plotOptions: {
        area: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      xAxis: {
        labels: {
          enabled: true,
        },
        title: {
          text: 'Days'
        }
      },
      yAxis: {
        labels: {
          enabled: true,
        },
        title: {
          text: 'Total Covid19 Cases'
        }
      },
      series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
