import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  school = 'Sathyabama Institute of Science and Technology';
  degree = 'B.E. Computer Science and Engineering';
  cgpa = '9.2';
  period = '2021 – 2025';
}
