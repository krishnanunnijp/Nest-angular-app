import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username = ""
  password = ""
  constructor(private route: Router) {
  }
  data: any = {}
  readData = () => {
    this.data = {
      "username": this.username,
      "password": this.password
    }
    if (this.data.username == "admin" && this.data.password == "nestdigital") {
      this.route.navigate(['/dash'])
      this.username = ""
      this.password = ""
    } else {
      alert("invalid login")
    }
  }


}
