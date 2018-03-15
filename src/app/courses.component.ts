import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    //template: '<h2>{{ "Title:" +  title }}</h2>'
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    constructor() {}

    text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at enim maximus eros sollicitudin accumsan. Proin vulputate quis tortor id rutrum. Aenean mollis et odio id viverra. Curabitur vitae neque vitae erat faucibus scelerisque et eu turpis. Pellentesque lacus ligula, faucibus at magna vel, mattis semper orci. Praesent nec arcu eu nibh placerat ultrices vitae ut urna. Donec porttitor sagittis malesuada. `;
    // title = "List of courses";
    //  course = {
    //      title: "The Complete Angular Course",
    //      rating: 4.9745,
    //      students: 30123,
    //      price: 190.95,
    //      releaseDate: new Date(2016,3,1)
    //  };
    //email = "test@test.com";
    //courses;
    //imageUrl = "http://lorempixel.com/400/200";
    //colSpan = 2;
    //isActive = false;
    
    // onKeyUp(email) {
    //     console.log(this.email);
    // }
    
    
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