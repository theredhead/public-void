import { Component, OnInit, Input } from '@angular/core';
import * as _icons from 'src/assets/icons/icons';
import { DomSanitizer } from '@angular/platform-browser';

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
    return this.sanitizer.bypassSecurityTrustResourceUrl(_icons[this.icon]);
  }

  public get alternateText() {
    return this.alt !== ''
      ? this.alt
      : this.icon;
  }

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
