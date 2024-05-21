import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  handleGameTicks(num: number) {
    console.log(num);
    if (num % 2) {
      this.oddNumbers.push(num);
    } else {
      this.evenNumbers.push(num);
    }
  }
}
