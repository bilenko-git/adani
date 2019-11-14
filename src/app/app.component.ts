import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <dk-spinner></dk-spinner>
  `
})
export class AppComponent {}
