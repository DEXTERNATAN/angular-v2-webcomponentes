import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  BrInput,
  BrMessage,
  BrCheckbox,
  BrSelect,
  BrButton,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrInput,
    BrMessage,
    BrCheckbox,
    BrSelect,
    BrButton,
  ],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent implements OnInit {
  cadastroForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group(
      {
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        cpf: [
          '',
          [
            Validators.required,
            Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
          ],
        ],
        telefone: [
          '',
          [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{5}-\d{4}$/)],
        ],
        senha: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/),
          ],
        ],
        confirmarSenha: ['', Validators.required],
        termos: [false, Validators.requiredTrue],
      },
      { validators: this.senhasCoincidem }
    );
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      alert('Formulário de cadastro enviado com sucesso!');
      this.cadastroForm.reset();
    } else {
      this.cadastroForm.markAllAsTouched();
    }
  }

  private senhasCoincidem(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmar = group.get('confirmarSenha')?.value;
    return senha === confirmar ? null : { mismatch: true };
  }

  // Dados e erros do formulário de cadastro (mantidos para template manual)
  formulario = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    genero: '',
    senha: '',
    confirmarSenha: '',
    termos: false,
  };
  erros = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    genero: '',
    senha: '',
    confirmarSenha: '',
    termos: '',
  };

  // Dados e erros do formulário de pesquisa
  formularioPesquisa = {
    termo: '',
    categorias: [] as string[],
    precoMin: '',
    precoMax: '',
  };
  errosPesquisa = {
    termo: '',
    categorias: '',
    precoMin: '',
    precoMax: '',
  };
  categoriasList = ['eletronicos', 'roupas', 'livros', 'esportes'];

  // Toggle de visibilidade das senhas
  mostrarSenha = false;
  mostrarConfirmarSenha = false;

  // ======= Validação de um campo isolado =======
  validarCampo(campo: keyof typeof this.formulario) {
    const v = this.formulario[campo];
    switch (campo) {
      case 'nome':
        this.erros.nome = !v
          ? 'O nome é obrigatório'
          : typeof v === 'string' && v.length < 3
          ? 'O nome deve ter pelo menos 3 caracteres'
          : '';
        break;
      case 'email':
        this.erros.email = !v
          ? 'O e-mail é obrigatório'
          : typeof v === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
          ? 'Digite um e-mail válido'
          : '';
        break;
      case 'cpf':
        this.erros.cpf = !v
          ? 'O CPF é obrigatório'
          : typeof v === 'string' && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v)
          ? 'Formato inválido (000.000.000-00)'
          : '';
        break;
      case 'telefone':
        this.erros.telefone = !v
          ? 'O telefone é obrigatório'
          : typeof v === 'string' && !/^\(\d{2}\) \d{5}-\d{4}$/.test(v)
          ? 'Formato inválido ((00) 00000-0000)'
          : '';
        break;
      case 'genero':
        this.erros.genero = !v ? 'Selecione um gênero' : '';
        break;
      case 'senha':
        this.erros.senha = !v
          ? 'A senha é obrigatória'
          : typeof v === 'string' && v.length < 8
          ? 'Mínimo 8 caracteres'
          : typeof v === 'string' &&
            !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(v)
          ? 'Deve ter letras, números e caracteres especiais'
          : '';
        break;
      case 'confirmarSenha':
        this.erros.confirmarSenha = !v
          ? 'Confirmação é obrigatória'
          : v !== this.formulario.senha
          ? 'As senhas não coincidem'
          : '';
        break;
    }
  }

  // ======= Validação do formulários completo =======
  validarFormularioCadastro() {
    // dispara a validação de todos os campos
    (
      Object.keys(this.formulario) as Array<keyof typeof this.formulario>
    ).forEach((f) => this.validarCampo(f));
    // termos
    this.erros.termos = this.formulario.termos
      ? ''
      : 'Você precisa aceitar os termos';

    const temErro = Object.values(this.erros).some((msg) => !!msg);
    if (!temErro) {
      alert('Formulário de cadastro enviado com sucesso!');
      this.limparFormulario();
    } else {
      alert('Corrija os erros antes de enviar.');
    }
  }

  limparFormulario() {
    Object.keys(this.formulario).forEach((k) => {
      (this.formulario as any)[k] = k === 'termos' ? false : '';
    });
    Object.keys(this.erros).forEach((k) => ((this.erros as any)[k] = ''));
  }

  // ======= Validação Pesquisa Avançada =======
  validarCampoPesquisa(campo: keyof typeof this.formularioPesquisa) {
    const v = (this.formularioPesquisa as any)[campo];
    switch (campo) {
      case 'termo':
        this.errosPesquisa.termo = !v
          ? 'O termo é obrigatório'
          : v.length < 3
          ? 'Mínimo 3 caracteres'
          : '';
        break;
      case 'precoMin':
        this.errosPesquisa.precoMin =
          v !== '' && (isNaN(+v) || +v < 0) ? 'Valor mínimo inválido' : '';
        break;
      case 'precoMax':
        this.errosPesquisa.precoMax =
          v !== '' && (isNaN(+v) || +v < 0)
            ? 'Valor máximo inválido'
            : +v < +this.formularioPesquisa.precoMin
            ? 'Máx deve ser ≥ Mín'
            : '';
        break;
    }
  }

  onCategoriaChange(ev: Event, cat: string) {
    const checked = (ev.target as HTMLInputElement).checked;
    const arr = this.formularioPesquisa.categorias;
    if (checked) arr.push(cat);
    else this.formularioPesquisa.categorias = arr.filter((c) => c !== cat);

    this.errosPesquisa.categorias = this.formularioPesquisa.categorias.length
      ? ''
      : 'Selecione ao menos uma categoria';
  }

  validarFormularioPesquisa() {
    ['termo', 'precoMin', 'precoMax'].forEach((f) =>
      this.validarCampoPesquisa(f as any)
    );
    if (!this.formularioPesquisa.categorias.length) {
      this.errosPesquisa.categorias = 'Selecione ao menos uma categoria';
    }
    const temErro = Object.values(this.errosPesquisa).some((msg) => !!msg);
    if (!temErro) {
      alert('Formulário de pesquisa enviado com sucesso!');
      this.limparFormularioPesquisa();
    } else {
      alert('Corrija os erros antes de enviar.');
    }
  }

  limparFormularioPesquisa() {
    this.formularioPesquisa = {
      termo: '',
      categorias: [],
      precoMin: '',
      precoMax: '',
    };
    Object.keys(this.errosPesquisa).forEach(
      (k) => ((this.errosPesquisa as any)[k] = '')
    );
  }
}
