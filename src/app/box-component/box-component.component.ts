import { Component } from '@angular/core';

@Component({
  selector: 'app-box-component',
  templateUrl: './box-component.component.html',
  styleUrl: './box-component.component.css'
})
export class BoxComponentComponent {
  imgurl = "https://th.bing.com/th/id/OIP.1Mab8wMNv_ZCAZmUgiiolwAAAA?rs=1&pid=ImgDetMain";
// https://th.bing.com/th/id/OIP.IszwoJAHmuB099rcYTh0nAHaE7?w=235&h=180&c=7&r=0&o=5&pid=1.7
  messageeeeeeeeeee ="";
  receiveMessage(message: string){
    this.messageeeeeeeeeee = message;
  }
}
