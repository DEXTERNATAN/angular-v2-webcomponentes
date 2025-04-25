import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrButton,
  BrDropdown,
  BrMessage,
  BrIcon,
  BrList,
  BrItem,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BrButton,
    BrMessage,
    BrDropdown,
    BrIcon,
    BrList,
    BrItem,
  ],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  dropdownOpen = false;
  selectedOption?: string;

  select(option: string): void {
    this.selectedOption = option;
    console.log('Opção selecionada:', option);
  }
}
