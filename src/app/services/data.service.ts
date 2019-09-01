import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( public http:HttpClient) {
    
    }
   getUser(){
      let url = "https://randomuser.me/"

      return this.http.get(url+"api/?results=20&gender=female")

   }

}
