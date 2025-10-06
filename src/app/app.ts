import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  count = 0;
  username = '';
  protected readonly title = signal('project');

  onClick() {
    this.count++;
  }
}
