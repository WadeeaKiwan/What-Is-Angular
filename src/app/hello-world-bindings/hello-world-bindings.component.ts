import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html'
})
export class HelloWorldBindingsComponent {
    fontColor = 'blue';
    sayHelloId = 1;
    canClick = false;
    message = 'Hello, World';
    sayMessage() {
        alert(this.message);
    };
    myBackground = 2;
    fontColorText = 'blue';
    backgroundColor = 'white';
    editBackground = false;
    toggleBackground() {
      this.editBackground = !this.editBackground;
      if (this.editBackground) {
        this.backgroundColor = 'red';
        this.fontColorText = 'white';
      } else {
        this.backgroundColor = 'yellow';
        this.fontColorText = 'black';
      }
    }
  
}
