import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(private api:ApiService){}
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""
  data:any={}
  readValue=()=>{
    this.data={
      "courseTitle":this.courseTitle,
      "courseDescription":this.courseDescription,
      "courseDuration":this.courseDuration,
      "courseDate":this.courseDate,
      "courseVenue":this.courseVenue
    }
this.api.addCourse(this.data).subscribe(

  (response:any)=>{
    console.log(response)
    if(response.status=='success'){
      alert("successfully added")
      this.courseTitle=""
      this.courseDescription=""
      this.courseDuration=""
      this.courseDate=""
      this.courseVenue=""
    }else{
      alert("something went wrong")
    }
  }
)

  }

}
