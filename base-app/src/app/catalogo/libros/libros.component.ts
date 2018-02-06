import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  clave: string;
  aLibros: Array<string>;

  constructor(public gbook: GoogleBooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    // this.aLibros =
    this.gbook.getLibros(this.clave)
      .subscribe( libros => this.aLibros = libros);
  }
}
