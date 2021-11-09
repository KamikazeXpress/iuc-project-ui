import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../User';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  usersinfo: User;

  constructor(private dataService: DataService) { 
    this.usersinfo = new User();
  }

  ngOnInit() {
    this.dataService.getLocalDataUsers('user1').subscribe((data: User) => {
    this.usersinfo = data;
    })
  }

}
  