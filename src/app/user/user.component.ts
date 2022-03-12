import {Component, Input, OnInit, EventEmitter,Output} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 @Input() user: User;
 @Input() role: string;
 @Output() deleteEvent= new EventEmitter<User>()
  constructor() { }

  ngOnInit(): void {
  }
  notifyParentDelete(){
    this.deleteEvent.emit(this.user);
  }


}
