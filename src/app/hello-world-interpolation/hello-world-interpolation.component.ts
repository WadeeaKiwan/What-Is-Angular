import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world-interpolation',
  // templateUrl: './hello-world-interpolation.component.html',
  template: `<p>{{message}} 2</p>`
})
export class HelloWorldInterpolationComponent {
    message = 'Hello, World!';
}
