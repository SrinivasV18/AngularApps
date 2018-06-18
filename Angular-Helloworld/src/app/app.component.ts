import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>This is {{name}} </h1>`,
})
export class AppComponent  { name = 'First Angular Program'; }
