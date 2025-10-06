import { Component } from '@angular/core';
import { User } from './user.service';

@Component({
  selector: 'app-binding-examples',
  templateUrl: './binding-examples.component.html',
  styleUrls: ['./binding-examples.component.css']
})
export class BindingExamplesComponent {
  message = 'Hello, Angular!';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  count = 0;
  username = '';
  selectedUser: User | null = null;

  onButtonClick() {
    this.count++;
  }
}
