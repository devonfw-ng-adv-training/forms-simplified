import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Genre} from './genre';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BookGenresService {
  private static BOOK_GENRES_URI = 'api/genres';

  constructor(private http: HttpClient) {
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(BookGenresService.BOOK_GENRES_URI);
  }
}
