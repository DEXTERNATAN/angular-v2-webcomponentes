import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrMessage,
  BrLoading,
  BrButton,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, FormsModule, BrMessage, BrLoading, BrButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  // --- Constantes ---
  readonly MAX_PROGRESS = 100;
  readonly PROGRESS_INCREMENT = 10;
  readonly INITIAL_PROGRESS = 0;

  // --- Estado ---
  progress = this.INITIAL_PROGRESS;
  vmProgress = 0;

  // --- Métodos ---
  aumentarProgresso(): void {
    if (this.progress < this.MAX_PROGRESS) {
      this.progress = Math.min(
        this.progress + this.PROGRESS_INCREMENT,
        this.MAX_PROGRESS
      );
    }
  }

  resetarProgresso(): void {
    this.progress = this.INITIAL_PROGRESS;
    this.vmProgress = 0;
  }

  increment(): void {
    this.vmProgress = Math.min(this.vmProgress + 10, 100);
    console.log('vmProgress atualizado:', this.vmProgress);
  }

  // Método específico para resetar apenas o vmProgress
  resetarVmProgress(): void {
    this.vmProgress = 0;
    console.log('vmProgress resetado para 0');
  }
}
