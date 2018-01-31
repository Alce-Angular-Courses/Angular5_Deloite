import { Component, OnInit } from '@angular/core';

import { BookService } from '../services/book.service';
import { BookModel } from '../services/book.nodel';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

   aBooks: BookModel[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.aBooks = this.bookService.getBooks();
  }

}
