import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon: string;
  @Input() alt: string;
  @Input() size = 24;

  public get imageHref() {
    return '/assets/icons/' + this.icon + '.png';
  }

  public get alternateText() {
    return this.alt !== ''
      ? this.alt
      : this.icon;
  }

  constructor() { }

  ngOnInit() {
  }

}
