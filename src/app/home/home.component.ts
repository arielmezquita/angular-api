import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    users=[]

  constructor( public data:DataService) { }

  ngOnInit() {
    let eso = this.data.getUser().subscribe((data:any)=>{
      this.users=data.results
      console.log(this.users);
      });

    }      
}
