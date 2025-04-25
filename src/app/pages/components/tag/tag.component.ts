import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrTag, BrMessage } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, FormsModule, BrTag, BrMessage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  selectedTags: string[] = [];

  /**
   * Verificar se uma tag está selecionada
   */
  isSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  /**
   * Limpar todas as tags selecionadas
   */
  clearSelection(): void {
    this.selectedTags = [];
  }

  /**
   * Selecionar ou deselecionar todas as tags
   */
  toggleAll(select: boolean): void {
    if (select) {
      this.selectedTags = ['Bicicleta', 'Barco', 'Carro'];
    } else {
      this.clearSelection();
    }
  }
}
