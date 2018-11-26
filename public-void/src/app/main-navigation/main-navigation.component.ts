import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MembershipService } from '../services/membership/membership.service';
import { MatSidenav } from '@angular/material';

interface NavigationLink {
  icon?: string;
  label: string;
  path: string;
}

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.less'],
})
export class MainNavigationComponent {

  @Input() navigationLinks: NavigationLink[] = [];

  @Input() sideMenu: MatSidenav;
  @Input() shareMenu: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public membership: MembershipService) {}

}
