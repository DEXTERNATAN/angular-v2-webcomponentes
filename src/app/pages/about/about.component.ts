import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrMessage } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BrMessage],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  ngOnInit() {
    console.log('Página "Sobre o Projeto" carregada.');
  }
}
