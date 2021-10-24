import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../../service.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

   course!: any;
  constructor(private api: ServiceService) { }

  ngOnInit(): void {
    this.api.courses.subscribe(res => { this.course = res 
    console.log(res);
    })
  }


}
