import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookOverviewComponent } from './book-overview.component';

describe('BookOverviewComponent', () => {
  let component: BookOverviewComponent;
  let fixture: ComponentFixture<BookOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BookOverviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
