import { findNode } from '@angular/compiler';
import { Component } from '@angular/core';
import { element } from 'protractor';
import { DataService } from '../services/data.service'; 
import { User } from '../User';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // stringJson: any;
  // stringObject: any;
  usersname: string;
  usersinfo: User;
  foods: string[];
  foodsinfo: object;

  detail1: any;

  expired: boolean
  

  constructor(private dataService: DataService) {
    this.usersinfo = new User();
  }

  ngOnInit(): void {
    this.dataService.getLocalDataUsers().subscribe(data => {

      this.usersname = Object.keys(data['users'])[0].toString();
      console.log('First User Name')
      console.log(this.usersname);
  
      this.usersinfo = data['users'][this.usersname];
      
      console.log('User info')
      console.log(this.usersinfo);
  
      this.foods = Object.keys(data['inventories'][this.usersname]['foods']);
      console.log('Foods')
      console.log(this.foods);

      this.foodsinfo = data['inventories'][this.usersname]['foods'];
      console.log('Food Infos')
      console.log(this.foodsinfo);

      this.detail1 = data['inventories'][this.usersname]['foods'][this.foods[0]];
      console.log('Detail 1')
      console.log(this.detail1);

      console.log('datediff')
      const today = new Date();
      console.log(this.calculateDateDiff(today));
      
      console.log(this.calculateDateDiff("10/21/2021"));
      
      })
  }

calculateDateDiff(dateSent): number{
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) /(1000 * 60 * 60 * 24));
}

}

