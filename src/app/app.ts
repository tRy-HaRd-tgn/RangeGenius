import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TopNavigationComponent,
  LeftSidebarComponent,
  CenterContentComponent,
  RightPanelsComponent
} from './components';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TopNavigationComponent,
    LeftSidebarComponent,
    CenterContentComponent,
    RightPanelsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('RangeGenius');
}
