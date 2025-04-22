import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrButton, BrInput } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BrButton, BrInput],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'meu-projeto-standalone';
}
