import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user= new User()
  }
  save(){
    //push the object
    console.log("test");

  }
}
