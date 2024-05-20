import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css',
})
export class SuccessAlertComponent {
  @Input() title = 'Error';
  @Input() text = 'An error occured';
}
