import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.scss']
})
export class DocumentViewComponent implements OnInit {

  @Input() document;

  constructor() { }

  ngOnInit() {
  }

}
