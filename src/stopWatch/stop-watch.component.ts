import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss'],
})
export class StopWatchComponent {
  mm = 0;
  sc = 0;
  ms = 0;
  isRunning = false;
  timer: any;

  handler() {
    if (!this.isRunning) {
      this.timer = setInterval(() => {
        this.ms++;

        if (this.ms >= 100) {
          this.sc++;
          this.ms = 0;
        }

        if (this.sc >= 60) {
          this.mm++;
          this.sc = 0;
        }
      }, 10);
    } else {
      clearInterval(this.timer);
    }

    this.isRunning = !this.isRunning;
  }
}
