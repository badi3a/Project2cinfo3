import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title: string;
  list: Book[];
  constructor() {
  }
  ngOnInit(): void {
    this.title = "test";
    this.list= [
      { id:12,
        title:'AngularJS',
        author:'Name Name',
        abstract: 'a good book',
        price: 100,
        nbrLike:12,
        quantity: 10
        },
      { id:13,
        title:'Symfony',
        author:'SensioLabs',
        abstract: 'a good book',
        price: 54,
        nbrLike:34,
        quantity: 0
      },
      { id:12,
        title:'AngularJS',
        author:'Name Name',
        abstract: 'a good book',
        price: 100,
        nbrLike:12,
        quantity: 10
      },
      { id:13,
        title:'Symfony',
        author:'SensioLabs',
        abstract: 'a good book',
        price: 54,
        nbrLike:34,
        quantity: 0
      }
    ]
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

}
