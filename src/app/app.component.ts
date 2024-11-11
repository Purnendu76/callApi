import { Component } from '@angular/core';
import{UsersDataService}from './service/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'call-Api';
users:any
  constructor(private usersData:UsersDataService){
    usersData.users().subscribe((data)=>{
      console.log(data);
      
      this.users=data
    })
  }
}
