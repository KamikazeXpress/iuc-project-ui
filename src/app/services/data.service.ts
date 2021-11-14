import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inventory } from '../Inventory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "https://app-wtdii5qboq-uc.a.run.app/"
  //  apiUrl = "http://localhost:8080/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private htpp: HttpClient) { }

  getLocalDataUsers(name: string) {
    const url = `${this.apiUrl}api/getuserdetails?user=${name}`;
    return this.htpp.get(
      url
    );

  }

  //Need to add capacility to update isexpired property
  // updateRemoteIsExpired(task: Task){
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.put<Task>(url, task, httpOptions);
  // }

  getRemoteDataUsers() {
    const url = `${this.apiUrl}api/getdetails`;
    return this.htpp.get(
      url
    );
  }

  // updateTaskReminder(task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   return this.http.put<Task>(url, task, httpOptions);
  // }
  // api/getinventorylist?user=user1
  getInventoryList(name: string) {
    const url = `${this.apiUrl}api/getinventorylist?user=${name}`;
    return this.htpp.get(
      url
    );
  }

  getReceipeList(name: string) {
    const url = `${this.apiUrl}api/getrecipeavailablelist?user=${name}`;
    return this.htpp.get(
      url
    );
  }

  getReceipeListByChildKey(childkey: string) {
    const url = `${this.apiUrl}api/getrecipeavailablelistbychildkey?user=user1&childkey=${childkey}`;
    return this.htpp.get(
      url
    );
  }

  getSelectedReceipeList(ingredient: string) {
    const url = `${this.apiUrl}api/getselectedrecipeavailablelist?ingredient=${ingredient}`;
    return this.htpp.get(
      url
    );
  }

  getReminderList(name: string) {
    const url = `${this.apiUrl}api/getreminderlist?user=${name}`;
    return this.htpp.get(
      url
    );
  }

  updateInventoryQuantity(inventory: Inventory) {
    const url = `${this.apiUrl}api/inventoryout`;
    console.log(url);
    console.log(JSON.stringify(inventory));

    var tempArr = []
    tempArr.push(inventory)
    // console.log(JSON.stringify(tempArr));
    let body = JSON.stringify(tempArr);
    return this.htpp.post(url, body, this.httpOptions)
      .subscribe(
        res => {

         // console.log(res);
        },
        err => {
          //console.log(err);

        }

      )
      ;
  }


}


