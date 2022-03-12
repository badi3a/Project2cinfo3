import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book: Book;
  list: Book[];
  constructor() { }

  ngOnInit(): void {
    this.book= new Book();
  }
  save(){
    //
    this.book.nbrLike=0;
    this.list.push(this.book)
  }

}
