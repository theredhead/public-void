import { Component } from '@angular/core';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'public-void';

  public get navigation() {
    return this._navigation;
  }
  constructor(private _navigation: NavigationService) {
  }
}
