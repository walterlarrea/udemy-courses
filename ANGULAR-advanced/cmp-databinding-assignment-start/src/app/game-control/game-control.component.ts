import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  gameTime = 0;
  tickInterval: ReturnType<typeof setInterval>;
  @Output() gameTick = new EventEmitter<number>();

  startGame() {
    this.tickInterval = setInterval(() => {
      this.gameTime++;
      this.gameTick.emit(this.gameTime);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.tickInterval);
  }
}
