import { findNode } from '@angular/compiler';
import { Component } from '@angular/core';
import { element } from 'protractor';
import * as internal from 'stream';
import { DataService } from '../services/data.service'; 
import { User } from '../User';
// import { PipesModule } from '../pipe.module';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usersname: string;
  usersinfo: User;
  foods: string[];
  foodsinfo: object;

  detail1: any;

  expired: boolean
  /*------------------------ */
  inventorylistkey: string[] = [];
  inventorylist: any;
  inventorynames: string[] = [];
  
  inventorydatedictionary_nonExpired = new Map<string, number>();
  inventorydatedictionary_Expired = new Map<string, number>();

  inventorylistkeySorted: string[] = [];

  inventory: object;


  constructor(private dataService: DataService) {
    this.usersinfo = new User();
  }

  ngOnInit(): void {
    this.refreshData();
  }

calculateDateDiff(dateSent): number{
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) /(1000 * 60 * 60 * 24));
}

updateQuantity(name: string, quantity: number, expirydate: string ): void{
  this.inventory = {
    name: name
    , quantity: quantity
    , expirydate: expirydate
  }

  console.log(this.inventory);
}

doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    this.resetData();
    this.refreshData();
    event.target.complete();
  }, 200);
} 

refreshData(): void{
  this.dataService.getInventoryList('user1').subscribe(data => {
    this.inventorylistkey = Object.keys(data);
    console.log('Inventory List Keys');
    console.log(this.inventorylistkey);

    this.inventorylist = data;
    console.log(data);

    for(const key of this.inventorylistkey){
      if(this.inventorylist[key]['daystoexpiry'] >= 0){
        this.inventorydatedictionary_nonExpired.set(key, this.inventorylist[key]['daystoexpiry'])
      }else{
        this.inventorydatedictionary_Expired.set(key, this.inventorylist[key]['daystoexpiry'])
      }
      
    }
    
    console.log('Dictionary Non Expired');
    console.log(this.inventorydatedictionary_nonExpired);
    
    console.log('Dictionary Expired');
    console.log(this.inventorydatedictionary_Expired);

    const sortnonexpired = new Map([...this.inventorydatedictionary_nonExpired.entries()].sort((a, b) => a[1] - b[1]));
    const sortexpired = new Map([...this.inventorydatedictionary_Expired.entries()].sort((a, b) => a[1] - b[1]));

    console.log('Dictionary sort non expired');
    console.log(sortnonexpired);

    console.log('Dictionary sort expired');
    console.log(sortexpired);

    this.inventorylistkeySorted.push(...sortnonexpired.keys());
    this.inventorylistkeySorted.push(...sortexpired.keys());
    
    console.log('Invetory List Keys Sorted');
    console.log(this.inventorylistkeySorted);
    

    for(const key of this.inventorylistkey){
      this.inventorynames.push(this.inventorylist[key]['name']);
    }

  })
}

resetData(): void{
  this.inventorylistkey = [];
  this.inventorylist = new Object();
  this.inventorynames = [];

  this.inventorydatedictionary_Expired =  new Map<string, number>();
  this.inventorydatedictionary_nonExpired =  new Map<string, number>();

  this.inventorylistkeySorted = [];

  this.inventory = new Object();
  
}

}

