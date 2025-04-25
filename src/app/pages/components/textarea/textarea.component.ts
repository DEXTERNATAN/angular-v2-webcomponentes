import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrMessage,
  BrTextarea,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, BrMessage, BrTextarea],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent implements OnInit {
  comentario = '';
  comentarioState: 'success' | 'danger' | undefined;
  mensagemValidacao = '';

  texto = '';
  caracteresRestantes = 200;

  ngOnInit(): void {
    // Inicializar validação
    this.validarComentario();
  }

  validarComentario() {
    // Se não existir comentário, não mostra validação
    if (!this.comentario) {
      this.comentarioState = undefined;
      this.mensagemValidacao = '';
      return;
    }

    if (this.comentario.trim().length < 10) {
      this.comentarioState = 'danger';
      this.mensagemValidacao =
        'Comentário muito curto. Mínimo de 10 caracteres.';
    } else {
      this.comentarioState = 'success';
      this.mensagemValidacao = 'Comentário válido!';
    }
  }

  /**
   * Limpar texto dos campos
   */
  limparCampos(): void {
    this.texto = '';
    this.comentario = '';
    this.validarComentario();
  }

  /**
   * Preencher com texto de exemplo
   */
  preencherExemplo(): void {
    this.texto =
      'Este é um texto de exemplo para demonstrar o funcionamento do ngModel em componentes textarea.';
    this.comentario =
      'Este comentário está validado corretamente pois possui mais de 10 caracteres.';
    this.validarComentario();
  }
}
