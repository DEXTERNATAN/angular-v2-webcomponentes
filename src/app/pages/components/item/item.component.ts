import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrMessage } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule, BrMessage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  handleClick = () => {
    console.log('Item botão clicado!');
  };
}
