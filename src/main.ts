import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { StopWatchComponent } from './stopWatch/stop-watch.component';

@Component({
  selector: 'app-root',
  imports:[StopWatchComponent],
  template: `
    <!-- <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a> -->

    <app-stop-watch></app-stop-watch>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
