import { Injectable } from '@angular/core';
import { INavigationItem } from '../navigationitem';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  mainMenu: INavigationItem[] = [
    {
      icon: 'EssentialSet_House',
      routerLink: '/home',
      label: 'Home',
    },
    {
      icon: '',
      routerLink: '',
      label: '-',
    },
    {
      icon: 'EssentialSet_Server_1',
      routerLink: '/software/web',
      label: 'Web software',
    },
    {
      icon: 'SocialMedia_Apple',
      routerLink: '/software/mac',
      label: 'macOS Software',
    },
    {
      icon: 'SocialMedia_Windows',
      routerLink: '/software/win',
      label: 'Windows Software',
    },
    {
      icon: '',
      routerLink: '',
      label: '-',
    },
    {
      icon: 'WebHosting_Tech_support',
      routerLink: '/software/web',
      label: 'Support',
    },
  ];

  shareMenu: INavigationItem[] = [
    {
      icon: 'SocialMedia_Twitter',
      routerLink: '',
      label: 'Twitter'
    },
    {
      icon: 'SocialMedia_Facebook',
      routerLink: '',
      label: 'Facebook'
    },
    {
      icon: 'SocialMedia_Linkedin',
      routerLink: '',
      label: 'LinkedIn'
    },
  ];
  constructor() { }
}
