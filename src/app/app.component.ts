import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrButton } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'meu-projeto-standalone';
}
