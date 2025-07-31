import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HandData {
  hand: string;
  bluePercent: number;
  redPercent: number;
}

@Component({
  selector: 'app-poker-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poker-grid.component.html',
  styleUrls: ['./poker-grid.component.scss']
})
export class PokerGridComponent {
  hands: HandData[] = [
    { hand: 'AA', bluePercent: 0, redPercent: 0 },
    { hand: 'AKs',  redPercent: 75, bluePercent: 25, },
    { hand: 'AQs', bluePercent: 50, redPercent: 50 },
    { hand: 'AJs', bluePercent: 50, redPercent: 50 },
    { hand: 'ATs', bluePercent: 50, redPercent: 50 },
    { hand: 'A9s', bluePercent: 50, redPercent: 50 },
    { hand: 'A8s', bluePercent: 50, redPercent: 50 },
    { hand: 'A7s', bluePercent: 50, redPercent: 50 },
    { hand: 'A6s', bluePercent: 50, redPercent: 50 },
    { hand: 'A5s', bluePercent: 50, redPercent: 50 },
    { hand: 'A4s', bluePercent: 50, redPercent: 50 },
    { hand: 'A3s', bluePercent: 50, redPercent: 50 },
    { hand: 'A2s', bluePercent: 50, redPercent: 50 },
    { hand: 'AKo', bluePercent: 50, redPercent: 50 },
    { hand: 'KK', bluePercent: 0, redPercent: 0 },
    { hand: 'KQs', bluePercent: 50, redPercent: 50 },
    { hand: 'KJs', bluePercent: 50, redPercent: 50 },
    { hand: 'KTs', bluePercent: 50, redPercent: 50 },
    { hand: 'K9s', bluePercent: 50, redPercent: 50 },
    { hand: 'K8s', bluePercent: 50, redPercent: 50 },
    { hand: 'K7s', bluePercent: 100, redPercent: 0 },
    { hand: 'K6s', bluePercent: 0, redPercent: 100 },
    { hand: 'K5s', bluePercent: 50, redPercent: 50 },
    { hand: 'K4s', bluePercent: 50, redPercent: 50 },
    { hand: 'K3s', bluePercent: 50, redPercent: 50 },
    { hand: 'K2s', bluePercent: 50, redPercent: 50 },
    { hand: 'AQo', bluePercent: 50, redPercent: 50 },
    { hand: 'KQo', bluePercent: 50, redPercent: 50 },
    { hand: 'QQ', bluePercent: 0, redPercent: 0 },
    { hand: 'QJs', bluePercent: 50, redPercent: 50 },
    { hand: 'QTs', bluePercent: 50, redPercent: 50 },
    { hand: 'Q9s', bluePercent: 50, redPercent: 50 },
    { hand: 'Q8s', bluePercent: 50, redPercent: 50 },
    { hand: 'Q7s', bluePercent: 50, redPercent: 50 },
    { hand: 'Q6s', bluePercent: 50, redPercent: 50 },
    { hand: 'Q5s', bluePercent: 50, redPercent: 50 },
    { hand: 'Q4s', bluePercent: 50, redPercent: 50 },
    { hand: 'Q3s', bluePercent: 50, redPercent: 50 },
    { hand: 'Q2s', bluePercent: 50, redPercent: 50 },
    { hand: 'AJo', bluePercent: 50, redPercent: 50 },
    { hand: 'KJo', bluePercent: 50, redPercent: 50 },
    { hand: 'QJo', bluePercent: 50, redPercent: 50 },
    { hand: 'JJ', bluePercent: 0, redPercent: 0 },
    { hand: 'JTs', bluePercent: 50, redPercent: 50 },
    { hand: 'J9s', bluePercent: 50, redPercent: 50 },
    { hand: 'J8s', bluePercent: 50, redPercent: 50 },
    { hand: 'J7s', bluePercent: 50, redPercent: 50 },
    { hand: 'J6s', bluePercent: 50, redPercent: 50 },
    { hand: 'J5s', bluePercent: 50, redPercent: 50 },
    { hand: 'J4s', bluePercent: 50, redPercent: 50 },
    { hand: 'J3s', bluePercent: 50, redPercent: 50 },
    { hand: 'J2s', bluePercent: 50, redPercent: 50 },
    { hand: 'ATo', bluePercent: 50, redPercent: 50 },
    { hand: 'KTo', bluePercent: 50, redPercent: 50 },
    { hand: 'QTo', bluePercent: 50, redPercent: 50 },
    { hand: 'JTo', bluePercent: 50, redPercent: 50 },
    { hand: 'TT', bluePercent: 0, redPercent: 0 },
    { hand: 'T9s', bluePercent: 50, redPercent: 50 },
    { hand: 'T8s', bluePercent: 50, redPercent: 50 },
    { hand: 'T7s', bluePercent: 50, redPercent: 50 },
    { hand: 'T6s', bluePercent: 50, redPercent: 50 },
    { hand: 'T5s', bluePercent: 50, redPercent: 50 },
    { hand: 'T4s', bluePercent: 50, redPercent: 50 },
    { hand: 'T3s', bluePercent: 50, redPercent: 50 },
    { hand: 'T2s', bluePercent: 50, redPercent: 50 },
    { hand: 'A9o', bluePercent: 50, redPercent: 50 },
    { hand: 'K9o', bluePercent: 50, redPercent: 50 },
    { hand: 'Q9o', bluePercent: 50, redPercent: 50 },
    { hand: 'J9o', bluePercent: 50, redPercent: 50 },
    { hand: 'T9o', bluePercent: 50, redPercent: 50 },
    { hand: '99', bluePercent: 0, redPercent: 0 },
    { hand: '98s', bluePercent: 50, redPercent: 50 },
    { hand: '97s', bluePercent: 50, redPercent: 50 },
    { hand: '96s', bluePercent: 50, redPercent: 50 },
    { hand: '95s', bluePercent: 50, redPercent: 50 },
    { hand: '94s', bluePercent: 50, redPercent: 50 },
    { hand: '93s', bluePercent: 50, redPercent: 50 },
    { hand: '92s', bluePercent: 50, redPercent: 50 },
    { hand: 'A8o', bluePercent: 50, redPercent: 50 },
    { hand: 'K8o', bluePercent: 50, redPercent: 50 },
    { hand: 'Q8o', bluePercent: 50, redPercent: 50 },
    { hand: 'J8o', bluePercent: 50, redPercent: 50 },
    { hand: 'T8o', bluePercent: 50, redPercent: 50 },
    { hand: '98o', bluePercent: 50, redPercent: 50 },
    { hand: '88', bluePercent: 0, redPercent: 0 },
    { hand: '87s', bluePercent: 50, redPercent: 50 },
    { hand: '86s', bluePercent: 50, redPercent: 50 },
    { hand: '85s', bluePercent: 50, redPercent: 50 },
    { hand: '84s', bluePercent: 50, redPercent: 50 },
    { hand: '83s', bluePercent: 50, redPercent: 50 },
    { hand: '82s', bluePercent: 50, redPercent: 50 },
    { hand: 'A7o', bluePercent: 50, redPercent: 50 },
    { hand: 'K7o', bluePercent: 50, redPercent: 50 },
    { hand: 'Q7o', bluePercent: 50, redPercent: 50 },
    { hand: 'J7o', bluePercent: 50, redPercent: 50 },
    { hand: 'T7o', bluePercent: 50, redPercent: 50 },
    { hand: '97o', bluePercent: 50, redPercent: 50 },
    { hand: '87o', bluePercent: 50, redPercent: 50 },
    { hand: '77', bluePercent: 0, redPercent: 0 },
    { hand: '76s', bluePercent: 50, redPercent: 50 },
    { hand: '75s', bluePercent: 50, redPercent: 50 },
    { hand: '74s', bluePercent: 50, redPercent: 50 },
    { hand: '73s', bluePercent: 50, redPercent: 50 },
    { hand: '72s', bluePercent: 50, redPercent: 50 },
    { hand: 'A6o', bluePercent: 50, redPercent: 50 },
    { hand: 'K6o', bluePercent: 50, redPercent: 50 },
    { hand: 'Q6o', bluePercent: 50, redPercent: 50 },
    { hand: 'J6o', bluePercent: 50, redPercent: 50 },
    { hand: 'T6o', bluePercent: 50, redPercent: 50 },
    { hand: '96o', bluePercent: 50, redPercent: 50 },
    { hand: '86o', bluePercent: 50, redPercent: 50 },
    { hand: '76o', bluePercent: 50, redPercent: 50 },
    { hand: '66', bluePercent: 0, redPercent: 0 },
    { hand: '65s', bluePercent: 50, redPercent: 50 },
    { hand: '64s', bluePercent: 50, redPercent: 50 },
    { hand: '63s', bluePercent: 50, redPercent: 50 },
    { hand: '62s', bluePercent: 50, redPercent: 50 },
    { hand: 'A5o', bluePercent: 50, redPercent: 50 },
    { hand: 'K5o', bluePercent: 50, redPercent: 50 },
    { hand: 'Q5o', bluePercent: 50, redPercent: 50 },
    { hand: 'J5o', bluePercent: 50, redPercent: 50 },
    { hand: 'T5o', bluePercent: 50, redPercent: 50 },
    { hand: '95o', bluePercent: 50, redPercent: 50 },
    { hand: '85o', bluePercent: 50, redPercent: 50 },
    { hand: '75o', bluePercent: 50, redPercent: 50 },
    { hand: '65o', bluePercent: 50, redPercent: 50 },
    { hand: '55', bluePercent: 0, redPercent: 0 },
    { hand: '54s', bluePercent: 50, redPercent: 50 },
    { hand: '53s', bluePercent: 50, redPercent: 50 },
    { hand: '52s', bluePercent: 50, redPercent: 50 },
    { hand: 'A4o', bluePercent: 50, redPercent: 50 },
    { hand: 'K4o', bluePercent: 50, redPercent: 50 },
    { hand: 'Q4o', bluePercent: 50, redPercent: 50 },
    { hand: 'J4o', bluePercent: 50, redPercent: 50 },
    { hand: 'T4o', bluePercent: 50, redPercent: 50 },
    { hand: '94o', bluePercent: 50, redPercent: 50 },
    { hand: '84o', bluePercent: 50, redPercent: 50 },
    { hand: '74o', bluePercent: 50, redPercent: 50 },
    { hand: '64o', bluePercent: 50, redPercent: 50 },
    { hand: '54o', bluePercent: 50, redPercent: 50 },
    { hand: '44', bluePercent: 0, redPercent: 0 },
    { hand: '43s', bluePercent: 50, redPercent: 50 },
    { hand: '42s', bluePercent: 50, redPercent: 50 },
    { hand: 'A3o', bluePercent: 50, redPercent: 50 },
    { hand: 'K3o', bluePercent: 50, redPercent: 50 },
    { hand: 'Q3o', bluePercent: 50, redPercent: 50 },
    { hand: 'J3o', bluePercent: 50, redPercent: 50 },
    { hand: 'T3o', bluePercent: 50, redPercent: 50 },
    { hand: '93o', bluePercent: 50, redPercent: 50 },
    { hand: '83o', bluePercent: 50, redPercent: 50 },
    { hand: '73o', bluePercent: 50, redPercent: 50 },
    { hand: '63o', bluePercent: 50, redPercent: 50 },
    { hand: '53o', bluePercent: 50, redPercent: 50 },
    { hand: '43o', bluePercent: 50, redPercent: 50 },
    { hand: '33', bluePercent: 0, redPercent: 0 },
    { hand: '32s', bluePercent: 50, redPercent: 50 },
    { hand: 'A2o', bluePercent: 50, redPercent: 50 },
    { hand: 'K2o', bluePercent: 50, redPercent: 50 },
    { hand: 'Q2o', bluePercent: 50, redPercent: 50 },
    { hand: 'J2o', bluePercent: 50, redPercent: 50 },
    { hand: 'T2o', bluePercent: 50, redPercent: 50 },
    { hand: '92o', bluePercent: 50, redPercent: 50 },
    { hand: '82o', bluePercent: 50, redPercent: 50 },
    { hand: '72o', bluePercent: 50, redPercent: 50 },
    { hand: '62o', bluePercent: 50, redPercent: 50 },
    { hand: '52o', bluePercent: 50, redPercent: 50 },
    { hand: '42o', bluePercent: 50, redPercent: 50 },
    { hand: '32o', bluePercent: 50, redPercent: 50 },
    { hand: '22', bluePercent: 0, redPercent: 0 }
  ];

  /**
   * Получает данные о руке по её названию
   * @param hand Название руки (например, 'AKs')
   * @returns Данные руки или undefined если не найдена
   */
  getHandData(hand: string): HandData | undefined {
    return this.hands.find(h => h.hand === hand);
  }

  /**
   * Устанавливает процент синего цвета для руки
   * @param hand Название руки
   * @param bluePercent Процент синего цвета (0-100)
   */
  setBluePercent(hand: string, bluePercent: number): void {
    const handData = this.getHandData(hand);
    if (handData) {
      handData.bluePercent = Math.max(0, Math.min(100, bluePercent));
      handData.redPercent = 100 - handData.bluePercent;
    }
  }

  /**
   * Устанавливает процент красного цвета для руки
   * @param hand Название руки
   * @param redPercent Процент красного цвета (0-100)
   */
  setRedPercent(hand: string, redPercent: number): void {
    const handData = this.getHandData(hand);
    if (handData) {
      handData.redPercent = Math.max(0, Math.min(100, redPercent));
      handData.bluePercent = 100 - handData.redPercent;
    }
  }

  /**
   * Генерирует CSS градиент на основе процентов цветов
   * @param hand Название руки
   * @returns CSS строка для background
   */
  getGradientStyle(hand: string): string {
    const handData = this.getHandData(hand);
    if (!handData) return '';

    if (handData.bluePercent === 0 && handData.redPercent === 0) {
      return 'var(--anaglyph-green)';
    } else if (handData.bluePercent === 100) {
      return 'var(--anaglyph-cyan)';
    } else if (handData.redPercent === 100) {
      return 'var(--anaglyph-red)';
    } else {
      return `linear-gradient(90deg, var(--anaglyph-cyan) 0%, var(--anaglyph-cyan) ${handData.bluePercent}%, var(--anaglyph-red) ${handData.bluePercent}%, var(--anaglyph-red) 100%)`;
    }
  }

  /**
   * Обработчик клика по ячейке для изменения процентов
   * @param hand Название руки
   * @param event Событие клика
   */
  onCellClick(hand: string, event: MouseEvent): void {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const bluePercent = Math.round((x / width) * 100);
    const redPercent = 100 - bluePercent;

    this.setBluePercent(hand, bluePercent);
  }
}
