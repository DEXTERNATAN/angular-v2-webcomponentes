import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrCheckbox,
  BrCheckgroup,
  BrMessage,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-checkgroup',
  standalone: true,
  imports: [CommonModule, FormsModule, BrCheckbox, BrCheckgroup, BrMessage],
  templateUrl: './checkgroup.component.html',
  styleUrls: ['./checkgroup.component.scss'],
})
export class CheckgroupComponent {
  selectedSimple: string[] = [];
  selectedNested: string[] = [];
}
