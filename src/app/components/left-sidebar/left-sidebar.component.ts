import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent {
  // Состояние раскрытия папок
  expandedFolders: string[] = ['TestRange1', 'TestFolder1'];

  /**
   * Переключает состояние раскрытия папки
   * :param folderName: Название папки для переключения
   */
  toggleFolder(folderName: string): void {
    const index = this.expandedFolders.indexOf(folderName);
    if (index > -1) {
      // Создаем новый массив без этой папки
      this.expandedFolders = this.expandedFolders.filter(folder => folder !== folderName);
    } else {
      // Создаем новый массив с добавленной папкой
      this.expandedFolders = [...this.expandedFolders, folderName];
    }
  }

  /**
   * Проверяет, раскрыта ли папка
   * :param folderName: Название папки для проверки
   * :return: true если папка раскрыта, false если свернута
   */
  isFolderExpanded(folderName: string): boolean {
    return this.expandedFolders.includes(folderName);
  }
}
