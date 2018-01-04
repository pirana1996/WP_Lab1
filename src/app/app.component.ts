import {Component, OnInit} from '@angular/core';
import {StudentMenagementService} from './service/student/student-menagement.service';
import {Student} from '../model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Students Archive';
  public students: Student[];
  public currentStudent: Student;

  constructor(private studentService: StudentMenagementService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  onClick(student: Student){
    this.currentStudent = student;
  }
}
