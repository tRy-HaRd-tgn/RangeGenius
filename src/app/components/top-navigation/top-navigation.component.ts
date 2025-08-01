import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [],
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  isMenuOpen = false;

  /**
   * Переключает состояние burger-меню
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
