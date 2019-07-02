import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  count = 0;
  firstName:string = "";
  lastName : string ="";
  age : string = '0';
  gender:string = "";
  constructor() { }

  ngOnInit() {
  }

  showAlert(){
    this.firstName =(document.getElementById('name') as HTMLInputElement).value;
    this.lastName = (document.getElementById('lname') as HTMLInputElement).value;
    this.age = (document.getElementById('age') as HTMLInputElement).value;
    this.gender = (document.getElementById('gender') as HTMLInputElement).value;
    alert("firstName : " + this.firstName + "\n" +
          "lastName : " + this.lastName + "\n" +
          "Age : " + this.age + "\n" +
          "Gender : " + this.gender
          );


  }
  //First one Finished
  countMe(){
    this.count++;
    alert(this.count);
  }

}
