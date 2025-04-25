import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BrMessage,
  BrBreadcrumb,
} from '@govbr-ds/webcomponents-angular/standalone';

interface Crumb {
  label: string;
  url?: string;
  target?: string;
  active?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, BrMessage, BrBreadcrumb],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  /** Lista de páginas ancestrais + página atual */
  links: Crumb[] = [
    { label: 'Página Ancestral 01', url: '/pagina-01', target: '_self' },
    { label: 'Página Ancestral 02', url: '/pagina-02', target: '_self' },
    { label: 'Página Ancestral 03', url: '/pagina-03', target: '_self' },
    { label: 'Página Ancestral 04', url: '/pagina-04', target: '_self' },
    { label: 'Página Atual', active: true },
  ];

  /** URL da “casinha” */
  homeUrl = '/dashboard';
}
