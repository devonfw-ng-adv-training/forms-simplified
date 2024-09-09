import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookService {
  private static BOOK_URI = '/api/book';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Book> {
    return this.http.get<Book>(BookService.BOOK_URI);
  }

  findOne(id: number): Observable<Book> {
    return this.http.get<Book>(BookService.BOOK_URI + '/' + id);
  }

  save(bookToSave: Book): Observable<Book> {
    return this.http.post<Book>(BookService.BOOK_URI, bookToSave);
  }

  checkBookExists(title: string, id: number): Observable<boolean> {
    return this.http.post<{ alreadyExists: boolean }>('/api/book-exists', { title, id }).pipe(
      map((response) => !!response)
    );
  }
}
