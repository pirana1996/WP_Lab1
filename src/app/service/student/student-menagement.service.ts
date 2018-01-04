import { Injectable } from '@angular/core';
import {Student} from '../../../model/student';

const arrayStudents: Student[] = [
  {ime: 'Kostadin', prezime: 'Kocev', indeks: '151168', nasoka: 'KNI'},
  {ime: 'Petko', prezime: 'Petkov', indeks: '123456', nasoka: 'MT'},
  {ime: 'Trajko', prezime: 'Trajkov', indeks: '654321', nasoka: 'PET'},
  {ime: 'Gjoko', prezime: 'Gjokev', indeks: '135724', nasoka: 'KNI - AN'},
];

@Injectable()
export class StudentMenagementService {

  public students = arrayStudents;

  constructor() { }

  public getStudents() {
    return this.students;
  }
}
