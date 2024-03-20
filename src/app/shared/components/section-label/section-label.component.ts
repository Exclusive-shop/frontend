import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-label',
  standalone: true,
  imports: [],
  templateUrl: './section-label.component.html',
  styleUrl: './section-label.component.scss',
})
export class SectionLabelComponent {
  @Input() title!: string;
}
