
export interface INavigationItem {
  icon?: string;
  routerLink: string;
  label: string;
  tooltip?: string;

  shouldBeEnabled?: () => boolean;
}
