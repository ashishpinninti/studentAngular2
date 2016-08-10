import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IStudent } from './student';
import { StudentService } from './student.service';
import { StudentFilterPipe } from './student-filter.pipe';

@Component({
    templateUrl: 'app/students/student-list.component.html',
    styleUrls: ['app/students/student-list.component.css'],
    pipes: [StudentFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class StudentListComponent implements OnInit {
    pageTitle: string = 'Student List';
    students: IStudent[];
    listFilter: string = '';
    errorMessage: string;

    constructor(private _studentService: StudentService) {

    }

    ngOnInit(): void {
           this._studentService.getStudents()
                     .subscribe(students => this.students = students,
                       error =>  this.errorMessage = <any>error);
    }
}
