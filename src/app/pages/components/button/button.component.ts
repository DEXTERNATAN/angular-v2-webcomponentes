import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ComponentBaseComponent } from '../component-base/component-base.component';

import {
  BrButton,
  BrMessage,
  BrIcon,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FormsModule, BrIcon, BrButton, BrMessage],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /** Para o exemplo de “v-model” */
  pressed = false;

  togglePressed(): void {
    this.pressed = !this.pressed;
  }
}
