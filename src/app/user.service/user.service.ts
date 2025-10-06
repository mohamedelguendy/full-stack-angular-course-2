import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User { id: number; name: string; }

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers(): Observable<User[]> {
    return of([
      { id: 1, name: 'Ali' },
      { id: 2, name: 'Sara' },
    ]);
  }
}
