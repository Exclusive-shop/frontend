import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { COUNTDOWN_TIMER_TYPE } from '../../../core/enums/countdown-timer';

@Component({
  selector: 'app-countdown-timer',
  imports: [NgClass],
  standalone: true,
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss',
})
export class CountdownTimerComponent implements OnDestroy {
  private intervalSubscription?: Subscription;
  public secondsLeft!: number;

  @Output() timeout: EventEmitter<void> = new EventEmitter<void>();

  @Input() type: COUNTDOWN_TIMER_TYPE = COUNTDOWN_TIMER_TYPE.DEFAULT;

  @Input() set endDate(endDate: Date | number) {
    let secondsLeft: number = 0;

    const currentDate: number = new Date().getTime();

    if (typeof endDate === 'object') {
      secondsLeft = Math.floor((endDate.getTime() - currentDate) / 1000);
    }

    if (typeof endDate === 'number') {
      secondsLeft = Math.floor((endDate - currentDate) / 1000);
    }

    this.startCountdownTimer(secondsLeft);
  }

  constructor(private ngZone: NgZone) {}

  private startCountdownTimer(secondsLeft: number) {
    this.stopCountdownTimer();

    this.ngZone.runOutsideAngular(() => {
      this.secondsLeft = secondsLeft;

      this.intervalSubscription = interval(1000).subscribe({
        next: () => {
          this.ngZone.run(() => {
            if (this.secondsLeft > 0) {
              this.secondsLeft -= 1;
            } else {
              this.secondsLeft = 0;
              this.stopCountdownTimer();

              this.timeout.emit();
            }
          });
        },
      });
    });
  }

  get days(): string {
    return this.formatTimeValue(Math.floor(this.secondsLeft / (60 * 60 * 24)));
  }

  get hours(): string {
    return this.formatTimeValue(
      Math.floor((this.secondsLeft % (60 * 60 * 24)) / (60 * 60)),
    );
  }

  get minutes(): string {
    return this.formatTimeValue(
      Math.floor((this.secondsLeft % (60 * 60)) / 60),
    );
  }

  get seconds(): string {
    return this.formatTimeValue(Math.floor(this.secondsLeft % 60));
  }

  private formatTimeValue(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  private stopCountdownTimer() {
    this.intervalSubscription?.unsubscribe();
  }

  ngOnDestroy() {
    this.stopCountdownTimer();
  }
}
