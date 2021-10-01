import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private api = "http://localhost:3000/course";
  constructor(private http: HttpClient  ) { }
  getCourses(){
    return this.http.get(this.api)
  }
  courseDetails(id:any){
    return this.http.get(`${this.api}/${id}`,{observe:'response'})
  }
}
