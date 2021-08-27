import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() set value(rating: number) {
    this.updateRating(rating);
  }
  @Input() disabled = false;
  @Output() readonly valueChanged = new EventEmitter<number>();
  rating = Array(5).fill(false);
  hoverIndex = -1;

  rate(rating: number): void {
    if (!this.disabled) {
      this.updateRating(rating);
      this.valueChanged.emit(rating);
    }
  }

  private updateRating(rating: number): void {
    this.rating.fill(false);
    if (rating) {
      this.rating.fill(true, 0, rating);
    }
  }
}
