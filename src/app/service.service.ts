import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  courses = new BehaviorSubject<any>(null);
  private api = "http://localhost:3000/course";
  constructor(private http: HttpClient) { }
  getCourses() {
    return this.http.get(this.api).pipe(tap(res => this.courses.next(res)));
  }
  courseDetails(id: any) {
    return this.http.get(`${this.api}/${id}`, { observe: 'response' })
  }
  filterData(filed: any, name: any) {
    return this.http.get(`${this.api}?${filed}=${name}`).pipe(tap(res => this.courses.next(res)));
  }
}
