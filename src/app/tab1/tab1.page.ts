import { Component } from '@angular/core';
import { DataService } from '../services/data.service'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  foods: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getRemoteData().subscribe(data=> {
      console.log("Local Data:")
      console.log(data);
      this.foods = data;
    })
  }

}

