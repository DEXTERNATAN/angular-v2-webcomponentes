import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrInput, BrMessage } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, FormsModule, BrInput, BrMessage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  // estado reativo para demo de v-model
  messageText: string = '';
}
