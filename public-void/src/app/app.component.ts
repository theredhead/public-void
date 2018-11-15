import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'public-void';

  navLinks = [
    { icon: 'home', label: '', path: 'home' },
    { label: 'Projects', path: 'projects' },
  ];
}
