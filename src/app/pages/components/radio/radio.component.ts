import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrMessage, BrRadio } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule, FormsModule, BrMessage, BrRadio],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class RadioComponent {
  selected = 'opcao1';
}
