import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-pipes-v10';
  name = '';
  date = '';
  height = '';
  amount = '';
  miles = '';

  onNameChange(value){
    console.log('name : ', value);
    this.name = value;
  }

  onDateChange(value){
    console.log('date : ', value);
    this.date = value;
  }

  onHeightChange(value){
    console.log('height : ', value);
    this.height = value;
  }

  onAmountChange(value){
    console.log('amount : ', value);
    this.amount = value;
  }

  onMilesChange(value){
    console.log('miles : ', value);
    this.miles = value;
  }



}
