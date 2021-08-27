import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type OnChangeFn = (rating: number) => void;
type OnTouchedFn = () => void;

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
})
export class RatingComponent implements ControlValueAccessor {
  disabled = false;
  rating = Array(5).fill(false);
  hoverIndex = -1;

  private onChange: OnChangeFn = (rating: number): void => {};
  private onTouched: OnTouchedFn = (): void => {};

  writeValue(rating: number): void {
    this.updateRating(rating);
  }

  registerOnChange(fn: OnChangeFn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  rate(rating: number): void {
    if (!this.disabled) {
      this.updateRating(rating);
      this.onTouched();
      this.onChange(rating);
    }
  }

  private updateRating(rating: number): void {
    this.rating.fill(false);
    if (rating) {
      this.rating.fill(true, 0, rating);
    }
  }
}
