import { Component, Input } from '@angular/core';
import { User } from './user.service';

@Component({
  selector: 'app-user-detail',
  template: `
    <div *ngIf="user" class="section">
      <h3>User Details</h3>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
  `
})
export class UserDetailComponent {
  @Input() user: User | null = null;
}
