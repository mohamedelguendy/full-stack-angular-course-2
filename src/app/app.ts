import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about.component/about.component';
import { UserLitsComponent } from './user-lits.component/user-lits.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, UserLitsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('my-app');
}