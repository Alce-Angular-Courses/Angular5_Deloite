import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookModel } from '../../services/book.nodel';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {

  oBook: BookModel;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.oBook = this.bookService.getBook(id);
  }

    gotoBooks() {
    this.router.navigate(['/catalogo']);
  }
}
