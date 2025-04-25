import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrDivider,
  BrMessage,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule, FormsModule, BrDivider, BrMessage],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
})
export class DividerComponent {}
