import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent {
  data:any=[]
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhLqaguy3e0HRQywVuW_IXBWjjJbcqiMXGtOvQtZTTQ&s"
  constructor(private api:ApiService){
    api.fetchFriends().subscribe(
      (readValues:any)=>{
        this.data=readValues
      }
    )

  }
}
