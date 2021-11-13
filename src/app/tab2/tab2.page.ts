import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../User';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usersname: string;
  usersinfo: User;  

  reminderlist: any;
  reminderlistreset: any;
  reminderlistkey : string[] = [];
  reminders: string[] = [];
  // isexpired = 1;
  currentDate = new Date();
  //sent: "2020-11-10 10:00:00";
  


  constructor(private dataService: DataService,public alertCtrl: AlertController) { 
    this.usersinfo = new User();

 }

 ngOnInit(): void {
  this.refreshData();
}

// getexpired(){
//   this.reminderlist.isexpired = 1;
//   // console.log(this.reminderlist.isexpired);
// }

calculateDiff(){
  let todayDate = new Date();
  let sentOnDate = new Date();
  sentOnDate.setDate(sentOnDate.getDate());
  let differenceInTime = todayDate.getTime() - sentOnDate.getTime();
  // To calculate the no. of days between two dates
  let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
  return differenceInDays;
}

async showAlert() {  
  const alert = await this.alertCtrl.create({
    subHeader: 'Expired Ingredient',  
    message: 'No recipe suggestion is available',  
    buttons: ['OK']  
  });  
  await alert.present();  
  const result = await alert.onDidDismiss();  
  console.log(result);  
}  


ionViewWillEnter(){
  this.refreshData();
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

resetData(): void{
  this.reminderlist = this.reminderlistreset;
  this.reminderlistkey = [];
  this.reminders = []
}

refreshData(){
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
      console.log("reminder list");
     console.log(this.reminderlist);
      // console.log(this.reminderlist['-MnU2uKsMh4FP_Z8ryGN'].name);
      // console.log(this.reminderlist.reminderdate)
    })
  }

}