import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', // anywhere if this element gets found it will be replaced with below HTML
  template: `
            <h2>{{title}}</h2>
            <ul>
                <li *ngFor="let course of courses">{{course}} </li>
            </ul>
            ` // this is string interpolation
})
export class CoursesComponent {
  title = 'list of courses';
  courses: any;
  constructor() {
    const service = new CoursesService();
    this.courses = service.getCourse();
  }
}
