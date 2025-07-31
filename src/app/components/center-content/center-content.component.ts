import { Component } from '@angular/core';
import { PokerGridComponent } from '../poker-grid/poker-grid.component';
import { BottomControlsComponent } from '../bottom-controls/bottom-controls.component';

@Component({
  selector: 'app-center-content',
  standalone: true,
  imports: [PokerGridComponent, BottomControlsComponent],
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.scss']
})
export class CenterContentComponent {}
