import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './pages/components/button/button.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'formularios-validacao',
    loadComponent: () =>
      import('./pages/forms/form-validation/form-validation.component').then(
        (m) => m.FormValidationComponent
      ),
  },
  {
    path: 'graficos',
    loadComponent: () =>
      import('./pages/dashboard/charts/charts.component').then(
        (m) => m.ChartsComponent
      ),
  },
  {
    path: 'telas',
    loadComponent: () =>
      import('./pages/dashboard/screens/screens.component').then(
        (m) => m.ScreensComponent
      ),
  },
  {
    path: 'avatar',
    loadComponent: () =>
      import('./pages/components/avatar/avatar.component').then(
        (m) => m.AvatarComponent
      ),
  },
  {
    path: 'breadcrumb',
    loadComponent: () =>
      import('./pages/components/breadcrumb/breadcrumb.component').then(
        (m) => m.BreadcrumbComponent
      ),
  },
  { path: 'button', component: ButtonComponent },
  {
    path: 'checkbox',
    loadComponent: () =>
      import('./pages/components/checkbox/checkbox.component').then(
        (m) => m.CheckboxComponent
      ),
  },
  {
    path: 'checkgroup',
    loadComponent: () =>
      import('./pages/components/checkgroup/checkgroup.component').then(
        (m) => m.CheckgroupComponent
      ),
  },
  {
    path: 'collapse',
    loadComponent: () =>
      import('./pages/components/collapse/collapse.component').then(
        (m) => m.CollapseComponent
      ),
  },
  {
    path: 'divider',
    loadComponent: () =>
      import('./pages/components/divider/divider.component').then(
        (m) => m.DividerComponent
      ),
  },
  {
    path: 'dropdown',
    loadComponent: () =>
      import('./pages/components/dropdown/dropdown.component').then(
        (m) => m.DropdownComponent
      ),
  },
  {
    path: 'formularios',
    loadComponent: () =>
      import('./pages/components/form/form.component').then(
        (m) => m.FormComponent
      ),
  },
  {
    path: 'icon',
    loadComponent: () =>
      import('./pages/components/icon/icon.component').then(
        (m) => m.IconComponent
      ),
  },
  {
    path: 'input',
    loadComponent: () =>
      import('./pages/components/input/input.component').then(
        (m) => m.InputComponent
      ),
  },
  {
    path: 'item',
    loadComponent: () =>
      import('./pages/components/item/item.component').then(
        (m) => m.ItemComponent
      ),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./pages/components/list/list.component').then(
        (m) => m.ListComponent
      ),
  },
  {
    path: 'loading',
    loadComponent: () =>
      import('./pages/components/loading/loading.component').then(
        (m) => m.LoadingComponent
      ),
  },
  {
    path: 'message',
    loadComponent: () =>
      import('./pages/components/message/message.component').then(
        (m) => m.MessageComponent
      ),
  },
  {
    path: 'radio',
    loadComponent: () =>
      import('./pages/components/radio/radio.component').then(
        (m) => m.RadioComponent
      ),
  },
  {
    path: 'select',
    loadComponent: () =>
      import('./pages/components/select/select.component').then(
        (m) => m.SelectComponent
      ),
  },
  {
    path: 'switch',
    loadComponent: () =>
      import('./pages/components/switch/switch.component').then(
        (m) => m.SwitchComponent
      ),
  },
  {
    path: 'tag',
    loadComponent: () =>
      import('./pages/components/tag/tag.component').then(
        (m) => m.TagComponent
      ),
  },
  {
    path: 'textarea',
    loadComponent: () =>
      import('./pages/components/textarea/textarea.component').then(
        (m) => m.TextareaComponent
      ),
  },
  {
    path: 'upload',
    loadComponent: () =>
      import('./pages/components/upload/upload.component').then(
        (m) => m.UploadComponent
      ),
  },

  // Outras rotas
  {
    path: 'cores',
    loadComponent: () =>
      import('./pages/colors/colors.component').then((m) => m.ColorsComponent),
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },

  // Rota coringa para página não encontrada
  { path: '**', redirectTo: '' },
];
