import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrMessage,
  BrSwitch,
  BrButton,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule, FormsModule, BrMessage, BrSwitch, BrButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent {
  isToggled = false;

  /**
   * Inverte o estado do switch programaticamente
   */
  toggleState(): void {
    this.isToggled = !this.isToggled;
    console.log(
      'Estado alterado para:',
      this.isToggled ? 'Ligado' : 'Desligado'
    );
  }
}
