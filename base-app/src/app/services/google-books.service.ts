import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';

@Injectable()
export class GoogleBooksService {
  url: string;

  constructor(public Http: HttpClient) {
    this.url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  getLibros(clave) {
    return this.Http.get(this.url + clave).map(
      response => this.extractTitles(response),
      error => console.log(error)
      );
  }

  private extractTitles(response) {
    if (response.items) {
      return response.items.map(
        book => book.volumeInfo.title);
      } else {
        return response;
      }
}

}
