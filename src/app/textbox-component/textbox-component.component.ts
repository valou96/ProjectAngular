import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-textbox-component',
  templateUrl: './textbox-component.component.html',
  styleUrl: './textbox-component.component.css',
})
export class TextboxComponentComponent {
  images = "https://th.bing.com/th/id/OIP.IszwoJAHmuB099rcYTh0nAHaE7?w=235&h=180&c=7&r=0&o=5&pid=1.7";

  @Input()
  url!: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {

      this.messageEvent.emit('Hello from child1 Component');


  }
  DeleteMessage(){
    this.messageEvent.emit("");
  }
  message !: string
  afficheMessage(message : string){
    this.messageEvent.emit(message);
  }


  modifImg1(){
    this.images = "https://th.bing.com/th?id=OIF.ga%2f%2byyv92hiZIwz93sI6Sw&rs=1&pid=ImgDetMain";
  }
}
