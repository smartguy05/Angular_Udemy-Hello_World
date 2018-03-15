import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    //template: '<h2>{{ "Title:" +  title }}</h2>'
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    title = "List of courses";
    email = "test@test.com";
    //courses;
    //imageUrl = "http://lorempixel.com/400/200";
    //colSpan = 2;
    //isActive = false;
    
    onKeyUp(email) {
        console.log(this.email);
    }
    constructor() {}
    
    // constructor(service: CoursesService) {
    //     //this.courses = service.getCourses();
    // }

    // onKeyUp(email) {
    //     console.log(email);
    // }

    // onKeyUp($event) {
    //     console.log($event.target.value);
    // }

    // getTitle() {
    //     return this.title;
    // }

    // onSave($event) {
    //     console.log('Button was clicked', $event);
    //     $event.stopPropagation();
    // }

    // onDivClicked() {
    //     console.log("Div was clicked");
    // }
}