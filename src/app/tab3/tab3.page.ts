import { Component } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { DataService } from '../services/data.service'; 
import { User } from '../User';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {
// stringJson: any;
  // stringObject: any;
  usersname: string;
  usersinfo: User;
  

  constructor(private dataService: DataService) {
    this.usersinfo = new User();
  }

  ngOnInit(): void {
    this.dataService.getLocalData().subscribe(data => {

    this.usersname = Object.keys(data['users'])[0].toString();
    console.log('First User Name')
    console.log(this.usersname);

    this.usersinfo = data['users'][this.usersname];
    
    console.log('User info')
    console.log(this.usersinfo);
   
    // let emails = testData['users']['user1'];
    // console.log(this.users);
    // console.log(emails.email);


    //  var finalResult2 = data['users'];
    //  var b = finalResult2[a]
    //  console.log(b);
     
      //  this.stringJson = JSON.stringify(data);
      // // console.log("String json object :", this.stringJson);
      // // console.log("Type :", typeof this.stringJson);

      // // // ConvertjSON to an object
      // this.foods = JSON.parse(this.stringJson);
  
      // this.users =
      // // console.log("JSON object -", this.stringObject);
    })
  }

}
