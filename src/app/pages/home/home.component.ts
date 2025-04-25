import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrMessage } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BrMessage],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {}
