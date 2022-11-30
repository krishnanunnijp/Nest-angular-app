import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  constructor(private api:ApiService){}
  data:any={}
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  readValue=()=>
  {
     this.data = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(this.data)
    this.api.addFriends(this.data).subscribe(
      (Status1:any)=>{
        if(Status1.status=="success"){
          alert("successfully added")
          this.name=""
          this.friendName=""
          this.friendNickName=""
          this.DescribeYourFriend=""
        }else{
          alert("failed")
        }
      }
    )
  }
  
}
