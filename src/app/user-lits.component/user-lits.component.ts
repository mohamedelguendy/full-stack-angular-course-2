import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service/user.service';

@Component({
  selector: 'app-user-lits',
  templateUrl: './user-lits.component.html',
})
export class UserLitsComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (list: User[]) => { 
        this.users = list;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load users';
        this.loading = false;
      },
    });
  }
}
