import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book: Book;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.book= new Book();
  }
  save(){
    //
    this.book.nbrLike=0;
    this.bookService.addBook(this.book).subscribe();
    //notify

  }

}
