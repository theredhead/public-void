import { Component, OnInit, Input } from '@angular/core';
import { md5 } from './md5';

@Component({
  selector: 'gravatar',
  templateUrl: './gravatar.component.html',
  styleUrls: ['./gravatar.component.less']
})

export class GravatarComponent implements OnInit {

  @Input() email: string;
  @Input() iconSize : number = 48;

  get hash(): string {
    return md5(this.email);
  }

  get imageUrl() : string {
    if (! this.email) return '';

    return [
      'https://www.gravatar.com/avatar/',
      this.hash,
      '?s=', this.iconSize,
      '&d=', this.iconType,
      '&r=', this.rating
    ].join('');
  }


  get iconType() : string { return 'identicon'; }
  get rating() : string { return 'PG'; }

  constructor() { }

  ngOnInit() {
  }

}
