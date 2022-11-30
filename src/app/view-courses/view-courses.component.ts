import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent {

  data:any=[]

  constructor(private api:ApiService){
  api.fetchCourses().subscribe(
    (readData:any)=>{
       this.data=readData

    }
  )
  }
  

}
