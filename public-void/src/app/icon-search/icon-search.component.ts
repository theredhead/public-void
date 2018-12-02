import { Component, OnInit } from '@angular/core';
import * as _icons from '../../assets/icons/icons';
import { DomSanitizer } from '@angular/platform-browser';

interface IIcon {
  name: string;
  uppered: string;
  icon: string;
}

@Component({
  selector: 'app-icon-search',
  templateUrl: './icon-search.component.html',
  styleUrls: ['./icon-search.component.scss']
})
export class IconSearchComponent implements OnInit {

  private icons: IIcon[] = [];
  iconSize = 48;
  searchText = '';
  filteredIconCount = -1;

  public get filteredIcons() {
    const result: IIcon[] = [];
    const searchText = this.searchText.toUpperCase();
    for (const i in this.icons) {
      if (this.searchText === '' || this.icons[i].uppered.indexOf(searchText) > -1) {
        result.push(this.icons[i]);
      }
    }
    this.filteredIconCount = Object.keys(result).length;
    return result;
  }

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    const result: IIcon[] = [];
    for (const i of Object.keys(_icons)) {
      result.push({
        name: i,
        uppered: i.toUpperCase(),
        icon: _icons[i]
      });
    }
    this.icons = result;
  }
}
