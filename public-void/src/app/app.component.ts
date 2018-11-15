import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'public-void';

  routerLinkActive;

  navLinks = [
    { label: 'Home', path: 'home' },
    { label: 'Projects', path: 'projects' }
  ];
}
