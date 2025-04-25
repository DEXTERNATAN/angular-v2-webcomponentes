import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrMessage,
  BrSelect,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule, BrMessage, BrSelect],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  simpleOptions = [
    { label: 'Opção 1', value: '1', selected: false },
    { label: 'Opção 2', value: '2', selected: false },
    { label: 'Opção 3', value: '3', selected: false },
  ];

  multiSelectOptions = [
    { label: 'Node.js', value: 'node', selected: false },
    { label: 'NestJS', value: 'nestjs', selected: true },
    { label: 'Fastify', value: 'fastify', selected: false },
  ];

  carOptions = [
    { label: 'Ferrari', value: 'ferrari' },
    { label: 'Lamborghini', value: 'lamborghini' },
    { label: 'Porsche', value: 'porsche' },
  ];

  selectedCar = 'ferrari';

  selectedTechs: string[] = ['nestjs'];
}
