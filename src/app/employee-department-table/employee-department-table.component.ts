import { Component, AfterViewInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-employee-department-table',
  templateUrl: './employee-department-table.component.html',
  styleUrls: ['./employee-department-table.component.css']
})
export class EmployeeDepartmentTableComponent implements AfterViewInit {
  dcSuperHeros = ['Scarecrow', 'Robin', 'Bat Man', 'Atom', 'The Flash'];
  marvelSuperHeros = ['The Invincible Iron Man', 'The Incredible Hulk', 'Captain America', 'The Mighty Thor'];

  options: SortablejsOptions = {
    group: 'test'
  };

  constructor() { }

  ngAfterViewInit() {
  }

}
