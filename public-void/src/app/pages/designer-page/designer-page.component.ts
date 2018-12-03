import { Component, OnInit } from '@angular/core';
import { DocumentStorageService } from 'src/app/services/document-storage.service';

interface IDocument {
  _id: string;
  _rev: string;
  name: string;
}

@Component({
  selector: 'app-designer-page',
  templateUrl: './designer-page.component.html',
  styleUrls: ['./designer-page.component.scss']
})
export class DesignerPageComponent implements OnInit {

  documents: any[] = [];

  constructor(private storage: DocumentStorageService) { }

  ngOnInit() {
    this.storage.fetchAll().then((result) => {
      this.documents = result.rows.map((r) => {
        return r.doc;
      });
      console.log('documents', this.documents);
    });
  }
}
