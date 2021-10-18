import { findNode } from '@angular/compiler';
import { Component } from '@angular/core';
import { element } from 'protractor';
import { DataService } from '../services/data.service'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // stringJson: any;
  // stringObject: any;
  usersname: string[];
  usersinfo: any;
  

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

}

