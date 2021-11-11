import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../User';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usersname: string;
  usersinfo: User;
  foods: any;


  reminderlist: any
  reminderlistkey : any
  reminders: string[] = []
  // isexpired = 1;
  currentDate = new Date();
  //sent: "2020-11-10 10:00:00";
  


  constructor(private dataService: DataService) { 
    this.usersinfo = new User();

 }

 ngOnInit(): void {
  this.dataService.getReminderList('user1').subscribe((data: User) => {
    this.reminderlistkey = Object.keys(data);
    console.log('Reminder List Keys');
    console.log(this.reminderlistkey);

    this.reminderlist = data;
    console.log(data);

    for(const key of this.reminderlistkey){
      this.reminders.push(this.reminderlist[key]['name']);

    }
    console.log("zawanireminder");
    // console.log(this.reminders);
    //console.log(this.reminderlist);
    // console.log(this.reminderlist['-MnU2uKsMh4FP_Z8ryGN'].name);
    console.log(this.reminderlist.reminderdate)
  })
}

getexpired(){
  this.reminderlist.isexpired = 1;
  // console.log(this.reminderlist.isexpired);
}

calculateDiff(){
  let todayDate = new Date();
  let sentOnDate = new Date();
  sentOnDate.setDate(sentOnDate.getDate());
  let differenceInTime = todayDate.getTime() - sentOnDate.getTime();
  // To calculate the no. of days between two dates
  let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
  return differenceInDays;
}




}