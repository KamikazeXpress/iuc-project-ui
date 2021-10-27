import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "https://app-wtdii5qboq-uc.a.run.app/"

  // http header
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  constructor(private htpp: HttpClient) { }

  getLocalDataUsers() {
    return this.htpp.get("/assets/foodingredients.json")
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
}


