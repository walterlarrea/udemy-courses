import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.css',
})
export class WarningAlertComponent {
  @Input() title = 'Error';
  @Input() text = 'An error occured';
}
