import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user = {
    name: 'test-name',
    email: 'test@test.com',
    phoneNumber: '+91 123456789',
    age: '27',
  };

  showFields = false;

  editUser() {
    this.showFields = !this.showFields;
    alert('You want to edit the user !');
  }

  updateUser() {
    this.showFields = !this.showFields;
    // alert(`You have updated user.`);
  }
}
