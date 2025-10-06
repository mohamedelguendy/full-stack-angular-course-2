import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService, User } from './user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <h3>User List</h3>
    <ul>
      <li *ngFor="let user of users"
          class="user-item"
          (click)="selectUser(user)">
        {{ user.name }}
      </li>
    </ul>
  `,
  styles: [`
    .user-item { cursor: pointer; margin: 5px 0; }
    .user-item:hover { text-decoration: underline; }
  `]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  @Output() userSelected = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  selectUser(user: User) {
    this.userSelected.emit(user);
  }
}
