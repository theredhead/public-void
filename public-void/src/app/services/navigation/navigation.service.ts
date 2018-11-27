import { Injectable } from '@angular/core';
import { INavigationItem } from '../navigationitem';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  mainMenu: INavigationItem[] = [
    {
      icon: 'home',
      routerLink: '/home',
      label: 'Home',
    },
    {
      icon: '',
      routerLink: '',
      label: '-',
    },
    {
      icon: 'cloud',
      routerLink: '/software/web',
      label: 'Web software',
    },
    {
      icon: 'apple-logo',
      routerLink: '/software/mac',
      label: 'macOS Software',
    },
    {
      icon: 'windows',
      routerLink: '/software/win',
      label: 'Windows Software',
    },
    {
      icon: '',
      routerLink: '',
      label: '-',
    },
    {
      icon: 'softtware-engineer',
      routerLink: '/software/web',
      label: 'Support',
    },
  ];

  shareMenu: INavigationItem[] = [
    {
      icon: 'twitter-black-shape',
      routerLink: '',
      label: 'Twitter'
    },
    {
      icon: 'facebook-logo-1',
      routerLink: '',
      label: 'Facebook'
    },
  ];
  constructor() { }
}
