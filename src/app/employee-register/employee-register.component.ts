import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {
  firstname=""
  lastname=""
  house_number=""
  house_name="" 
  street_name=""
  pincode=""
  district=""
  state=""
  country=""
  phonenumber=""
  parent_name="" 
  email=""
  gender=""
  highest_degree=""
  year_of_experience=""
  date_of_joining=""
  username=""
  password1=""
  password2=""
  data:any={}
signup=()=>{
  this.data={
  "firstname":this.firstname,
  "lastname":this.lastname,
  "house_number":this.house_number,
  "house_name":this.house_name, 
  "street_name":this.street_name,
  "pincode":this.pincode,
  "district":this.district,
  "state":this.state,
  "country":this.country,
  "phonenumber":this.phonenumber,
  "email":this.email,
  "parent_name":this.parent_name,
  "gender":this.gender,
  "highest_degree": this.highest_degree,
  "year_of_experience":this.year_of_experience,
  "date_of_joining":this.date_of_joining,
  "username":this.username,
  "password1":this.password1,
  "password2":this.password2


}
console.log(this.data)
}

}
