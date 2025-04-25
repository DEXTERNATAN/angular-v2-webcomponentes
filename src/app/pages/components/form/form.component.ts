import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BrInput,
  BrTextarea,
  BrSwitch,
  BrUpload,
  BrButton,
  BrMessage,
  BrCheckbox,
  BrSelect,
  BrIcon,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BrInput,
    BrTextarea,
    BrSwitch,
    BrUpload,
    BrButton,
    BrMessage,
    BrCheckbox,
    BrSelect,
    BrIcon,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  // 7. Campo com two-way binding
  simpleField = '';

  // 6. Cadastro de Usuário
  user = { name: '', email: '', password: '', confirmPassword: '' };

  // registros submetidos
  submissions: (typeof this.user)[] = [];

  resetForm(): void {
    this.user = { name: '', email: '', password: '', confirmPassword: '' };
  }

  submitForm(): void {
    this.submissions.push({ ...this.user });
    this.resetForm();
  }

  deleteSubmission(index: number): void {
    this.submissions.splice(index, 1);
  }
}
