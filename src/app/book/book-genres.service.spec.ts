import { TestBed, inject } from '@angular/core/testing';

import { BookGenresService } from './book-genres.service';

describe('BookGenresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookGenresService]
    });
  });

  it('should be created', inject([BookGenresService], (service: BookGenresService) => {
    expect(service).toBeTruthy();
  }));
});
