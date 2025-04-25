import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-base',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="component-container">
      <header class="component-header">
        <h1>{{ title }}</h1>
        <p class="description">{{ description }}</p>
      </header>

      <section class="component-content">
        <div class="component-demo">
          <h2>Demonstração</h2>
          <div class="demo-area">
            <ng-content select="[demo]"></ng-content>
          </div>
        </div>

        <div class="component-docs">
          <h2>Documentação</h2>
          <div class="docs-content">
            <ng-content select="[docs]"></ng-content>
          </div>
        </div>

        <div class="component-code">
          <h2>Código</h2>
          <div class="code-content">
            <ng-content select="[code]"></ng-content>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .component-container {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .component-header {
        margin-bottom: 3rem;
      }

      .component-header h1 {
        color: var(--blue-warm-vivid-90);
        margin-bottom: 1rem;
      }

      .description {
        font-size: 1.1rem;
        color: var(--gray-70);
      }

      .component-content {
        display: grid;
        gap: 2rem;
      }

      .component-demo,
      .component-docs,
      .component-code {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 2rem;
      }

      h2 {
        color: var(--blue-warm-vivid-70);
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
      }

      .demo-area {
        padding: 2rem;
        border: 1px solid var(--gray-20);
        border-radius: 4px;
      }

      .code-content {
        background: var(--gray-10);
        padding: 1rem;
        border-radius: 4px;
        overflow: auto;
      }
    `,
  ],
})
export class ComponentBaseComponent {
  @Input() title = '';
  @Input() description = '';
}
