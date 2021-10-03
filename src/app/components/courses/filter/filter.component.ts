import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from './../../../service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() courses!: any;
  constructor(private servise: ServiceService) { }

  ngOnInit(): void {

  }
  getFiled(f: any, l: any) {
    this.servise.filterData(f, l).subscribe();
  }
}
