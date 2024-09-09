import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from './../book.service';
import { Observable, of, timer } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';

interface BookFormModel {
  id: FormControl<number | null>;
  author: FormControl<string>;
  title: FormControl<string>;
  isbn: FormControl<string>;
}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  submitted: boolean;
  bookForm: FormGroup<BookFormModel>;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.book = new Book();
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      id: [null],
      author: ['', [Validators.required, Validators.maxLength(20)]],
      title: ['', [Validators.required, Validators.maxLength(50)], this.validateTitleExists.bind(this)],
      isbn: ['', [Validators.required, Validators.maxLength(13), Validators.pattern('[0-9]*')]
      ],
    });

    this.route.data.subscribe((data: { book: Book }) => {
      if (data.book) {
        this.book = data.book;
      }
      this.bookForm.setValue(this.book);
    });
  }

  apply(): void {
    this.submitted = true;
    if (this.bookForm.valid) {
      this.book = this.bookForm.getRawValue();
      this.bookService.save(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  cancelForm(): void {
    this.router.navigate(['/books']);
  }

  validateTitleExists(fc: AbstractControl): Observable<ValidationErrors | null> {
    if (fc.value == null || fc.value === '') {
      return of(null);
    }
    return timer(500).pipe(
      switchMap(() => this.bookService.checkBookExists(fc.value, this.book?.id)),
      map((alreadyExists) => alreadyExists ? { alreadyExists } : null)
    )
  }
}
