import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  itemAtivo: string | null = null;

  menuItems: MenuItem[] = [
    { id: 'home', name: 'Home', icon: 'fas fa-home', url: '/' },
    {
      id: '2',
      name: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      expanded: false,
      children: [
        {
          id: '2-1',
          name: 'Formulários de Validação',
          icon: 'fas fa-check-circle',
          url: '/formularios-validacao',
        },
        {
          id: '2-2',
          name: 'Gráficos',
          icon: 'fas fa-chart-line',
          url: '/graficos',
        },
        {
          id: '2-3',
          name: 'Telas',
          icon: 'fas fa-desktop',
          url: '/telas',
        },
      ],
    },
    {
      id: '1',
      name: 'Componentes',
      icon: 'fas fa-puzzle-piece',
      expanded: false,
      children: [
        {
          id: '1-1',
          name: 'Avatar',
          icon: 'fas fa-user',
          url: '/avatar',
        },
        {
          id: '1-2',
          name: 'Breadcrumb',
          icon: 'fas fa-book',
          url: '/breadcrumb',
        },
        {
          id: '1-3',
          name: 'Button',
          icon: 'fas fa-hand-pointer',
          url: '/button',
        },
        {
          id: '1-4',
          name: 'Checkbox',
          icon: 'fas fa-check-square',
          url: '/checkbox',
        },
        {
          id: '1-5',
          name: 'Checkgroup',
          icon: 'fas fa-toggle-on',
          url: '/checkgroup',
        },
        {
          id: '1-6',
          name: 'Collapse',
          icon: 'fas fa-angle-down',
          url: '/collapse',
        },
        {
          id: '1-7',
          name: 'Divider',
          icon: 'fas fa-minus',
          url: '/divider',
        },
        {
          id: '1-8',
          name: 'Dropdown',
          icon: 'fas fa-caret-down',
          url: '/dropdown',
        },
        {
          id: '1-9',
          name: 'Formulário',
          icon: 'fas fa-edit',
          url: '/formularios',
        },
        {
          id: '1-10',
          name: 'Icon',
          icon: 'fas fa-icons',
          url: '/icon',
        },
        {
          id: '1-11',
          name: 'Input',
          icon: 'fas fa-keyboard',
          url: '/input',
        },
        {
          id: '1-12',
          name: 'Item',
          icon: 'fas fa-list',
          url: '/item',
        },
        {
          id: '1-13',
          name: 'List',
          icon: 'fas fa-list-alt',
          url: '/list',
        },
        {
          id: '1-14',
          name: 'Loading',
          icon: 'fas fa-spinner',
          url: '/loading',
        },
        {
          id: '1-15',
          name: 'Message',
          icon: 'fas fa-envelope',
          url: '/message',
        },
        {
          id: '1-16',
          name: 'Radio',
          icon: 'fas fa-dot-circle',
          url: '/radio',
        },
        {
          id: '1-17',
          name: 'Select',
          icon: 'fas fa-caret-square-down',
          url: '/select',
        },
        {
          id: '1-18',
          name: 'Switch',
          icon: 'fas fa-toggle-on',
          url: '/switch',
        },
        {
          id: '1-19',
          name: 'Tag',
          icon: 'fas fa-tag',
          url: '/tag',
        },
        {
          id: '1-20',
          name: 'TextArea',
          icon: 'fas fa-pencil-alt',
          url: '/textarea',
        },
        {
          id: '1-21',
          name: 'Upload',
          icon: 'fas fa-upload',
          url: '/upload',
        },
      ],
    },
    {
      id: 'cores',
      name: 'Cores',
      icon: 'fas fa-palette',
      url: '/cores',
    },
  ];

  project = {
    name: 'Sobre o Projeto',
    icon: 'fas fa-info-circle',
    url: '/sobre',
  };

  toggleFolder(id: string) {
    this.menuItems.forEach((item) => {
      if (item.children) {
        item.expanded = item.id === id ? !item.expanded : false;
      }
    });
  }
}
