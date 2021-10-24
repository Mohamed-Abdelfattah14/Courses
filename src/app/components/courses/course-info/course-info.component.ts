import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../../service.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course: any;
  id: any;
  constructor(private service : ServiceService ) {
    
   }

  ngOnInit(): void {
    // this.service.getCourses().subscribe(
    //   (res) => {
    //     this.course = res
    //     console.log(res)
    //   }
    // )
  }

}
