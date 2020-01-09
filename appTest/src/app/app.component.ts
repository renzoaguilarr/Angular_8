import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isDisable = false;
  name: string;
  onClick(){
    if(this.isDisable === true){
      this.isDisable = false
    }else{
      this.isDisable = true
    }
  }
}
