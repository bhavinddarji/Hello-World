import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wel-come',
  templateUrl: './wel-come.component.html',
  styleUrls: ['./wel-come.component.css']
})
export class WelComeComponent implements OnInit {

  constructor() { }

  title = 'MSU';
  name ='Bhavin';
  course ='Angular';
  skills = ['Angular', '.net', 'Java'];
  education = [
    {
      degree: 'MScIT',
      complitionYear: '2010',
      Percentage : '65'
    },
    {
      degree: 'BCA',
      complitionYear: '2008',
      Percentage : '65'
    }
  ];

  studentData=[
    {
      name: 'Bhavin',
      age: '31',
      rno: '1'
    },
    {
      name: 'abc',
      age: '30',
      rno: '2'
    },
    {
      name: 'xyz',
      age: '24',
      rno: '3'
    },
    {
      name: 'pqr',
      age: '34',
      rno: '4'
    },
    {
      name: 'UVW',
      age: '35',
      rno: '5'
    }
  ];

  ngOnInit() {
  }

}
