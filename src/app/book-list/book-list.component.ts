import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../services/book.service";
import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title: string;
  list: Book[];
  constructor(private bookService: BookService,
              private calcul: CalculService ) {
  }
  ngOnInit(): void {
    this.title = "test";

    this.bookService.getList().subscribe(
      (data:Book[])=> this.list=data
    );
  }


  incrementLike(book: Book): void{
    let i = this.list.indexOf(book);
    if(i!=-1){
      this.list[i].nbrLike++;
    }
  }
  buyBook(i:number):void{
    this.list[i].quantity--;
  }
 getStatBook(){
    return this.calcul.getStat(this.list, 'quantity',0)
 }


  delete(id: number, i: number): void {

     this.bookService.deleteBook(id).subscribe(
       () => this.list.splice(i, 1)
     );

  }

}
