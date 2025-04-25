import { Component } from '@angular/core';
import {
  BrAvatar,
  BrMessage,
} from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [BrAvatar, BrMessage],
  styleUrls: ['./avatar.component.scss'],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {}
