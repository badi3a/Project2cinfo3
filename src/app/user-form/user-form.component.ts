import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  @Output() notifParentNewUser= new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
    this.user= new User()
  }
  save(){
    //notify the parent component
    console.log(this.user);
    this.notifParentNewUser.emit(this.user)


  }
}
