import { Observable, of } from 'rxjs';

interface INavigationItem {
  icon?: string;
  routerLink: string;
  label: string;
  tooltip?: string;

  shouldBeEnabled?: () => boolean;
}



export class BasePage {

  public get sideNavigationItems(): INavigationItem[] {
    return [];
  }


  constructor() { }

}
