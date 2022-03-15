import { Injectable } from '@angular/core';
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  list: Book[] =  [
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
  ];
  constructor() { }
}
