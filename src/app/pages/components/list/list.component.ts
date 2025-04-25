import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrIcon, BrMessage } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, BrIcon, BrMessage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {}
