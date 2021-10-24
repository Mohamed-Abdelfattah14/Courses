import { Component, Input , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../../../service.service';

interface courseT {
  title: string;
  imgL: string;
  enroll: string;
  duration: string;
  lecture: string;
  category: string;
  level: string;
  imgS: string;
  email: string;
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() courses!: courseT;

  course: any;
  id: any;
  constructor(private api: ServiceService , private ID : ActivatedRoute) {
    this.id = this.ID.snapshot.params.id;
   }

  ngOnInit(): void {
    this.course = this.api.courseDetails(this.id)
  }

}
