import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() name: string = '';
  @Input() status: string = '';
  @Input() url: string = '';

  clearUser() {
    this.name = '';
    this.status = '';
    this.url = '';
  }
}
