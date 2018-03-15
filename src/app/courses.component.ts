import { Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    //template: '<h2>{{ "Title:" +  title }}</h2>'
    template: `
        <!--<table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>-->

        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <!--<img src = "{{ imageUrl }}" />
        <img [src]="title" />-->
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
}