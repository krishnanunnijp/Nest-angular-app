import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  constructor(private route:Router){}
  id=""
  password=""
  data:any=[]
  readData=()=>{
    this.data={
      "id": this.id,
      "password":this.password
    }
    if(this.data.id=="1122" && this.password=="12345"){
      this.route.navigate([''])
      this.id = ""
      this.password = ""
    }else{
      alert("invalid login")
    }
  }


}
