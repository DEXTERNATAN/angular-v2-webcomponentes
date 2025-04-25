import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBaseComponent } from '../component-base/component-base.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ComponentBaseComponent],
  template: `
    <app-component-base
      title="Button"
      description="Componente de botão seguindo o Design System Gov.br"
    >
      <div demo>
        <button class="br-button primary" type="button">Botão Primário</button>
        <button class="br-button secondary" type="button">
          Botão Secundário
        </button>
        <button class="br-button danger" type="button">Botão Perigo</button>
      </div>

      <div docs>
        <h3>Uso</h3>
        <p>
          O componente de botão pode ser usado para ações importantes na
          interface.
        </p>

        <h3>Propriedades</h3>
        <ul>
          <li><strong>primary:</strong> Estilo principal do botão</li>
          <li><strong>secondary:</strong> Estilo secundário do botão</li>
          <li><strong>danger:</strong> Estilo para ações perigosas</li>
        </ul>
      </div>

      <div code>
        <pre>
&lt;button class="br-button primary" type="button"&gt;
  Botão Primário
&lt;/button&gt;

&lt;button class="br-button secondary" type="button"&gt;
  Botão Secundário
&lt;/button&gt;

&lt;button class="br-button danger" type="button"&gt;
  Botão Perigo
&lt;/button&gt;
        </pre
        >
      </div>
    </app-component-base>
  `,
  styles: [
    `
      .br-button {
        margin: 0.5rem;
      }
    `,
  ],
})
export class ButtonComponent {}
