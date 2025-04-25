import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrCheckbox,
  BrMessage,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, BrMessage, BrCheckbox],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  checked = false;

  togglePressed(): void {
    console.log(this.checked);
    this.checked = !this.checked;
    console.log(this.checked);
  }
}
