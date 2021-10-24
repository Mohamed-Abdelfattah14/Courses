import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from './../../../service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses = [
    {
      id: 1,
      imgL: '../../../assets/assets/1.png',
      imgS: '../../../assets/assets/1-1.png',
      title: 'User Research for User Experience Design',
      college: 'The Museum of Modern Art',
      enroll: 1200,
      duration: 2,
      lecture: 8,
      category: 'Web Development',
      level: 'Intermediate Level',
      email: 'vetug@gmail.com',
    },
    {
      id: 2,
      imgL: '../../../assets/assets/2.png',
      imgS: '../../../assets/assets/2-2.png',
      title: 'Buddhism and Modern Psychology',
      college: 'The Museum of Modern Art',
      enroll: 1000,
      duration: 3,
      lecture: 12,
      category: 'Web Desgin',
      level: 'Senior Level',
      email: 'vetug@gmail.com',
    },
    {
      id: 3,
      imgL: '../../../assets/assets/3.png',
      imgS: '../../../assets/assets/3-3.png',
      title: 'Introduction to Philosophy',
      college: 'Duke University',
      enroll: 900,
      duration: 2,
      lecture: 6,
      category: 'UI/UX',
      level: 'Intermediate Level',
      email: 'vetug@gmail.com',
    },
    {
      id: 4,
      imgL: '../../../assets/assets/4.png',
      imgS: '../../../assets/assets/1-1.png',
      title: 'Advance on Seeing Through Photographs',
      college: 'The Museum of Modern Art',
      enroll: 1400,
      duration: 5,
      lecture: 14,
      category: 'UI/UX',
      level: 'Senior Level',
      email: 'vetug@gmail.com',
    },
    {
      id: 5,
      imgL: '../../../assets/assets/5.png',
      imgS: '../../../assets/assets/2-2.png',
      title: 'Think Again I How to Understand Arguments',
      college: 'The Museum of Modern Art',
      enroll: 1000,
      duration: 3,
      lecture: 8,
      category: 'Web Development',
      level: 'Intermediate Level',
      email: 'vetug@gmail.com',
    },
    {
      id: 6,
      imgL: '../../../assets/assets/6.png',
      imgS: '../../../assets/assets/3-3.png',
      title: 'User Research for User Experience Design',
      college: 'The Museum of Modern Art',
      enroll: 700,
      duration: 2,
      lecture: 3,
      category: 'Web Desgin',
      level: 'Bigginer Level',
      email: 'vetug@gmail.com',
    },
    {
      id: 7,
      imgL: '../../../assets/assets/7.png',
      imgS: '../../../assets/assets/1-1.png',
      title: 'User Research for User Experience Design',
      college: 'The Museum of Modern Art',
      enroll: 1500,
      duration: 9,
      lecture: 20,
      category: 'Web Development',
      level: 'Intermediate Level',
      email: 'vetug@gmail.com',
    },
    {
      id: 8,
      imgL: '../../../assets/assets/8.png',
      imgS: '../../../assets/assets/1-1.png',
      title: 'User Research for User Experience Design',
      college: 'The Museum of Modern Art',
      enroll: 1300,
      duration: 5,
      lecture: 10,
      category: 'UI/UX',
      level: 'Senior Level',
      email: 'vetug@gmail.com',
    },
    {
      id: 9,
      imgL: '../../../assets/assets/9.png',
      imgS: '../../../assets/assets/2-2.png',
      title: 'Modern and Contemporary Art and Design',
      college: 'The Museum of Modern Art',
      enroll: 1200,
      duration: 2,
      lecture: 8,
      category: 'Web Desgin',
      level: 'Bigginer Level',
      email: 'vetug@gmail.com',
    },
  ];

  // @Input() course!: any;
  constructor(private api: ServiceService) {}

  ngOnInit(): void {
    this.api.courses.subscribe((res) => (this.courses = res));
    // this.api.getCourses().subscribe(res => {this.course = res});
  }

  // @Input() course:any;
}
