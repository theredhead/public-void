import { Component, OnInit } from '@angular/core';
import * as _icons from '../../../assets/icons/icons';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }

  icons = _icons;
  iconSize = 48;
  searchText = '';
  filteredIconCount = -1;

  get filteredIcons() {
    const result = {};
    const searchText = this.searchText.toUpperCase();
    for (const i in this.icons) {
      if (this.searchText === '' || i.toUpperCase().indexOf(searchText) > -1) {
        result[i] = this.icons[i];
      }
    }
    this.filteredIconCount = Object.keys(result).length;
    return result;
  }

  ngOnInit() {
  }
}
