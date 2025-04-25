import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrIcon,
  BrMessage,
  BrSelect,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, FormsModule, BrIcon, BrMessage, BrSelect],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  // estado de seleção de cor do ícone
  iconColor = 'text-danger';

  // opções de cor apresentadas no select
  colorOptions = [
    { label: 'Verde (Sucesso)', value: 'text-success' },
    { label: 'Amarelo (Alerta)', value: 'text-warning' },
    { label: 'Vermelho (Erro)', value: 'text-danger' },
    { label: 'Azul (Informativo)', value: 'text-primary' },
    { label: 'Roxo (Energia)', value: 'text-purple' },
  ];
}
