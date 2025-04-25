import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrCollapse,
  BrMessage,
  BrItem,
  BrIcon,
  BrList,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BrCollapse,
    BrMessage,
    BrItem,
    BrIcon,
    BrList,
  ],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss',
})
export class CollapseComponent {
  /** Estado controlado internamente (equivalente ao ref isOpen) */
  isOpen = false;

  /** Estado exposto com two-way binding (equivalente ao v-model) */
  modelOpen = false;

  /** Disparado quando o collapse expande */
  onDidOpen(ev: CustomEvent<{ id: string }>): void {
    this.isOpen = true;
    console.log('Abriu collapse com id:', ev.detail.id);
  }

  /** Disparado quando o collapse recolhe */
  onDidClose(ev: CustomEvent<{ id: string }>): void {
    this.isOpen = false;
    console.log('Fechou collapse com id:', ev.detail.id);
  }
}
