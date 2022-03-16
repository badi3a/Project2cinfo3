import { Injectable } from '@angular/core';
import {Book} from "../model/book";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BookService {
   url: string = environment.url;
   constructor(private http: HttpClient) { }
   //get Books
   getList(){
     return this.http.get<Book[]>(this.url)
   }
   //add a new Book
  addBook(book:Book){
     return this.http.post(this.url,book )
  }
  //delete a book
  deleteBook(id: number){
     return this.http.delete(this.url+id)
  }
  //update a book
  updateBook(book: Book){
     return this.http.put(this.url+book.id, book)
  }
}
