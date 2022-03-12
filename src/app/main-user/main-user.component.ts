import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {
  list: User[];
  role: string;
  showForm: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showForm=false;
    this.role='all';
    this.list=[
      {id:12,
       username: "joe",
       email: "joe@gmail.com",
       picture: "assets/user.png",
       role:"admin"},
      { id:20,
        username: "ala",
        email: "ala@gmail.com",
        picture: "assets/user.png",
        role:"user"},
      { id:5,
        username: "amine",
        email: "amine@gmail.com",
        picture: "assets/user.png",
        role:"user"},
    ]
  }

  delete(user: User):void {
    let i = this.list.indexOf(user);
    this.list.splice(i, 1);
  }
  show(){
    this.showForm=true;
  }
}
