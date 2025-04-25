import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrInput,
  BrMessage,
  BrIcon,
} from '@govbr-ds/webcomponents-angular/standalone';
import { colors } from '../../../data/cores';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [CommonModule, FormsModule, BrInput, BrMessage, BrIcon],
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent {
  searchTerm = '';
  clickedCard: string | null = null;
  mensagemVisivel = false;
  mensagemTexto = '';

  colors = colors;

  get filteredColors() {
    return this.colors.filter((color) => {
      const term = this.searchTerm.toLowerCase();
      return (
        !term ||
        color.nome.toLowerCase().includes(term) ||
        color.hex.toLowerCase().includes(term) ||
        (color.token?.toLowerCase().includes(term) ?? false)
      );
    });
  }

  handleCardClick(color: { nome: string; hex: string; token?: string }) {
    this.clickedCard = color.nome;
    const texto = `
Nome: ${color.nome}
Hexadecimal: ${color.hex}
Token: ${color.token ?? 'N/A'}`;
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        this.mensagemTexto = `Cor copiada com sucesso!\n${texto}`;
        this.mensagemVisivel = true;
      })
      .catch(() => {
        this.mensagemTexto =
          'Erro ao copiar a cor. Por favor, tente novamente.';
        this.mensagemVisivel = true;
      });
    setTimeout(() => (this.clickedCard = null), 500);
  }
}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-colors',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div class="container">
//       <h1>Cores do Sistema</h1>
//       <p class="lead">Paleta de cores do Design System Gov.br</p>

//       <div class="color-section">
//         <h2>Cores Primárias</h2>
//         <div class="color-grid">
//           <div class="color-card">
//             <div
//               class="color-sample"
//               style="background-color: var(--blue-warm-vivid-90)"
//             ></div>
//             <div class="color-info">
//               <h3>Azul Principal</h3>
//               <code>--blue-warm-vivid-90</code>
//             </div>
//           </div>
//           <div class="color-card">
//             <div
//               class="color-sample"
//               style="background-color: var(--blue-warm-vivid-70)"
//             ></div>
//             <div class="color-info">
//               <h3>Azul Secundário</h3>
//               <code>--blue-warm-vivid-70</code>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="color-section">
//         <h2>Tons de Cinza</h2>
//         <div class="color-grid">
//           <div class="color-card">
//             <div
//               class="color-sample"
//               style="background-color: var(--gray-90)"
//             ></div>
//             <div class="color-info">
//               <h3>Cinza Escuro</h3>
//               <code>--gray-90</code>
//             </div>
//           </div>
//           <div class="color-card">
//             <div
//               class="color-sample"
//               style="background-color: var(--gray-70)"
//             ></div>
//             <div class="color-info">
//               <h3>Cinza Médio</h3>
//               <code>--gray-70</code>
//             </div>
//           </div>
//           <div class="color-card">
//             <div
//               class="color-sample"
//               style="background-color: var(--gray-20)"
//             ></div>
//             <div class="color-info">
//               <h3>Cinza Claro</h3>
//               <code>--gray-20</code>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `,
//   styles: [
//     `
//       .container {
//         padding: 2rem;
//         max-width: 1200px;
//         margin: 0 auto;
//       }

//       h1 {
//         color: var(--blue-warm-vivid-90);
//         margin-bottom: 1rem;
//       }

//       .lead {
//         font-size: 1.25rem;
//         color: var(--gray-80);
//         margin-bottom: 3rem;
//       }

//       .color-section {
//         margin-bottom: 3rem;
//       }

//       h2 {
//         color: var(--gray-90);
//         margin-bottom: 1.5rem;
//       }

//       .color-grid {
//         display: grid;
//         grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//         gap: 2rem;
//       }

//       .color-card {
//         background: white;
//         border-radius: 8px;
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         overflow: hidden;
//       }

//       .color-sample {
//         height: 150px;
//         width: 100%;
//       }

//       .color-info {
//         padding: 1.5rem;
//       }

//       .color-info h3 {
//         margin: 0 0 0.5rem;
//         color: var(--gray-90);
//       }

//       code {
//         background: var(--gray-10);
//         padding: 0.25rem 0.5rem;
//         border-radius: 4px;
//         font-size: 0.875rem;
//         color: var(--gray-70);
//       }
//     `,
//   ],
// })
// export class ColorsComponent {}
