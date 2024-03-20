import { Component, Input } from '@angular/core';
import { SectionLabelComponent } from '../section-label/section-label.component';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [SectionLabelComponent, CountdownTimerComponent],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  @Input() sectionName!: string;
  @Input() sectionTitle!: string;
  @Input() endDate: Date | number = new Date(0);
}
