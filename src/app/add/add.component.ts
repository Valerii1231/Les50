import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  @Output() onUser = new EventEmitter();
  name: string = '';
  status: string = '';
  url: string = '';

  inputName: string = '';
  inputStatus: string = '';
  inputUrl: string = '';

  onName (event: any){
     this.inputName = event.target.value;
  }
  onStatus(event: any){
     this. inputStatus = event.target.value;
  }
  onUrl(event: any){
    this. inputUrl = event.target.value;
  }
  addNewUser(inputName: string, inputStatus: string, inputUrl:string ) {
    const value = {
      name: inputName,
      status: inputStatus,
      url: inputUrl,
    }
    let arrStatus = value.status.split('')
    if (arrStatus.length > 50) {
      arrStatus.splice(50);
      value.status = arrStatus.join('');
    }
    this.onUser.emit(value)
    this.inputName = '';
    this.inputStatus = '';
    this.inputUrl = '';
  }
}
    

