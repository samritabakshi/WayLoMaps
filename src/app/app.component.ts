import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular4 boilerplate template!';

  constructor(
      private router:Router 
  ) {
  }
}
