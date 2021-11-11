import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { DataService } from '../services/data.service';
import { User } from '../User';
import Chart from 'chart.js/auto';
import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('barChart') barChart;
  @ViewChild('pieChart') pieChart;

  bars: any;
  pie: any;
  colorArray: any;
  constructor() { }

  ionViewDidEnter() {
    this.createBarChart();
    this.createPieChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
          label: 'Food ',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(135,206,250)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(135,206,250)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }

  createPieChart() {
    const data = {
      labels: [
        'Fruits & Vegetables',
        'Meat',
        'Dairies',
        'Eggs',
      ],
      datasets: [{
        label: 'Food Wastes',
        data: [1, 3, 5,3],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(138,43,226)'

        ],
        hoverOffset: 4
      }]
    };

    this.pie = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: data,
    });
  }





}