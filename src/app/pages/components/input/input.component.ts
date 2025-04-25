import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrInput,
  BrIcon,
  BrMessage,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, BrInput, BrIcon, BrMessage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  name: string = 'Lorem ipsum';
}
