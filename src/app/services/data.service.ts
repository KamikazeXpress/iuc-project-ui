import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "https://cors-anywhere.herokuapp.com/https://app-wtdii5qboq-uc.a.run.app/"

  constructor(private htpp: HttpClient) { }

  getLocalData() {
    return this.htpp.get("/assets/foodingredients.json")
  }
  
  getRemoteData() {
    const url = `${this.apiUrl}api/getdetails`;
    return this.htpp.get(
      url
    );
  }
}
