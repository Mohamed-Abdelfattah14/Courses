import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../../../service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: any;
  id: any;
  constructor(private service : ServiceService , private ID : ActivatedRoute) {
    this.id = this.ID.snapshot.params.id;
   }

  ngOnInit(): void {
    this.service.courseDetails(this.id).subscribe(
      res => {
        this.course = res.body;
        console.log(this.course)
      },
      (err) =>{
        console.log(err)
      }
    )
  }

}
