import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BrUpload,
  BrMessage,
  BrButton,
  BrLoading,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BrUpload,
    BrMessage,
    BrButton,
    BrLoading,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
})
export class UploadComponent {
  @ViewChild('uploadRef', { static: false }) uploadRef: any;

  mensagem = '';
  estadoMensagem: 'success' | 'danger' | 'warning' = 'success';
  previewUrl = '';
  previewImageUrl = '';
  arquivoSelecionado: File | null = null;
  isLoading = false;
  arquivoValido = false;

  // para ngModel
  arquivos: File[] = [];

  /**
   * Limpa todos os arquivos da lista
   */
  limparArquivos(): void {
    this.arquivos = [];
  }

  /**
   * Remove um arquivo específico pelo índice
   */
  removerArquivo(index: number): void {
    if (index >= 0 && index < this.arquivos.length) {
      this.arquivos.splice(index, 1);
      // Força a atualização da referência do array para atualizar a view
      this.arquivos = [...this.arquivos];
    }
  }

  /**
   * Calcula o tamanho total de todos os arquivos
   */
  getTotalSize(): string {
    const totalBytes = this.arquivos.reduce((acc, file) => acc + file.size, 0);
    return (totalBytes / (1024 * 1024)).toFixed(2);
  }

  /**
   * Retorna a classe de ícone com base no tipo de arquivo
   */
  getFileIconClass(mimeType: string): string {
    if (!mimeType) return 'icon-file';

    if (mimeType.startsWith('image/')) {
      return 'icon-image';
    } else if (mimeType.startsWith('video/')) {
      return 'icon-video';
    } else if (mimeType.startsWith('audio/')) {
      return 'icon-audio';
    } else if (mimeType.includes('pdf')) {
      return 'icon-pdf';
    } else if (mimeType.includes('word') || mimeType.includes('document')) {
      return 'icon-doc';
    } else if (mimeType.includes('excel') || mimeType.includes('sheet')) {
      return 'icon-excel';
    } else if (mimeType.includes('zip') || mimeType.includes('compressed')) {
      return 'icon-zip';
    }

    return 'icon-file';
  }

  handleFile(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.previewUrl = '';
    this.arquivoValido = false;
    this.mensagem = '';

    if (!file) return;

    const tiposPermitidos = ['image/jpeg', 'image/png'];
    const tamanhoMaxMB = 5;
    const tamanhoMB = file.size / (1024 * 1024);

    if (!tiposPermitidos.includes(file.type)) {
      this.estadoMensagem = 'danger';
      this.mensagem = 'Formato inválido. Apenas JPG e PNG são permitidos.';
      return;
    }
    if (tamanhoMB > tamanhoMaxMB) {
      this.estadoMensagem = 'danger';
      this.mensagem = 'Arquivo muito grande. O limite é de 5MB.';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => (this.previewUrl = reader.result as string);
    reader.readAsDataURL(file);

    this.arquivoSelecionado = file;
    this.arquivoValido = true;
    this.estadoMensagem = 'success';
    this.mensagem = `Arquivo "${file.name}" válido e pronto para envio.`;
  }

  async enviarArquivo() {
    if (!this.arquivoSelecionado) return;

    this.isLoading = true;
    this.mensagem = '';
    this.previewUrl = '';

    const form = new FormData();
    form.append('file', this.arquivoSelecionado);

    try {
      const resp = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: form,
      });
      if (!resp.ok) throw new Error('Erro no envio.');
      this.estadoMensagem = 'success';
      this.mensagem = 'Arquivo enviado com sucesso!';
    } catch {
      this.estadoMensagem = 'danger';
      this.mensagem = 'Erro ao enviar o arquivo. Tente novamente.';
    } finally {
      this.isLoading = false;
      this.arquivoSelecionado = null;
      this.arquivoValido = false;
      this.uploadRef?.clearFiles?.();
    }
  }

  /**
   * Visualiza uma imagem em modal
   */
  visualizarImagem(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  /**
   * Fecha a pré-visualização da imagem
   */
  fecharPreview(): void {
    this.previewImageUrl = '';
  }
}
