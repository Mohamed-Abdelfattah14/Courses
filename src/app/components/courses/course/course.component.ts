import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from './../../../service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course!: any;
  constructor(private api: ServiceService) { }

  ngOnInit(): void {
    this.api.courses.subscribe(res => this.course = res);
    // this.api.getCourses().subscribe(res => {this.course = res})
  }

  // @Input() course:any;
}
