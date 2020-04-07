import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data: any[];
  @Input() name: string;
  @Input() latest: string;

  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: null,
        // plotShadow: false,
        type: 'bar'
      },
      title: {
        text: this.name
      },
      subtitle: {
        text: 'Latest update: ' + this.latest
      },
      tooltip: {
        pointFormat: '{point.y} Cases</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '{point.y} Cases'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        colorByPoint: true,
        data: this.data
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
