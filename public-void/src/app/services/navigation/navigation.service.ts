import { Injectable } from '@angular/core';
import { INavigationItem } from '../navigationitem';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  mainMenu: INavigationItem[] = [
    {
      icon: 'flaticon-apple',
      routerLink: '/software/mac',
      label: 'macOS Software',
    },
    {
      icon: 'flaticon-windows',
      routerLink: '/software/win',
      label: 'Windows Software',
    },
    {
      icon: '',
      routerLink: '',
      label: '-',
    },
    {
      icon: 'flaticon-029-cloud-1',
      routerLink: '/software/web',
      label: 'Web',
    },
    {
      icon: '',
      routerLink: '',
      label: '-',
    },
    {
      icon: 'flaticon-softtware-engineer',
      routerLink: '/software/web',
      label: 'Support',
    },
  ];

  shareMenu: INavigationItem[] = [
    {
      icon: 'flaticon-021-twitter',
      routerLink: '',
      label: 'Twitter'
    },
    {
      icon: 'flaticon-043-facebook',
      routerLink: '',
      label: 'Facebook'
    },
  ];
  constructor() { }
}
